import seed from "@/data/portfolio.json";
import { getDb, hasDatabase } from "@/lib/mongodb";
import { promises as fs } from "node:fs";
import path from "node:path";

const DOC_ID = "site";
const contentPath = path.join(process.cwd(), "data", "portfolio.json");
const messagesPath = path.join(process.cwd(), "data", "messages.json");

async function readLocalContent() {
  try {
    return JSON.parse(await fs.readFile(contentPath, "utf8"));
  } catch (error) {
    console.error("Local content read failed, serving the JSON seed instead:", error);
    return seed;
  }
}

async function writeJson(filePath, value) {
  const temporaryPath = `${filePath}.tmp`;
  await fs.writeFile(temporaryPath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
  await fs.rename(temporaryPath, filePath);
}

// Reads the live content. Order of preference:
// 1. the "content" collection in MongoDB, if MONGODB_URI is set and a document exists
// 2. data/portfolio.json, which ships with the repo
export async function getContent() {
  if (!hasDatabase) return readLocalContent();
  try {
    const db = await getDb();
    const doc = await db.collection("content").findOne({ _id: DOC_ID });
    if (!doc) return seed;
    const { _id, updatedAt, ...content } = doc;
    return content;
  } catch (error) {
    console.error("Content read failed, serving the JSON seed instead:", error);
    return seed;
  }
}

export async function saveContent(content) {
  if (!hasDatabase) {
    await writeJson(contentPath, content);
    return true;
  }
  const db = await getDb();
  await db.collection("content").updateOne(
    { _id: DOC_ID },
    { $set: { ...content, updatedAt: new Date() } },
    { upsert: true }
  );
  return true;
}

export async function saveMessage(message) {
  if (!hasDatabase) {
    let messages = [];
    try {
      messages = JSON.parse(await fs.readFile(messagesPath, "utf8"));
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    messages.push({ ...message, receivedAt: new Date().toISOString() });
    await writeJson(messagesPath, messages);
    return true;
  }
  const db = await getDb();
  await db.collection("messages").insertOne({ ...message, receivedAt: new Date() });
  return true;
}

export async function listMessages() {
  if (!hasDatabase) return [];
  const db = await getDb();
  const rows = await db.collection("messages").find({}).sort({ receivedAt: -1 }).limit(50).toArray();
  return rows.map((row) => ({ ...row, _id: String(row._id), receivedAt: row.receivedAt?.toISOString() }));
}
