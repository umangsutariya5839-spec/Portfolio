import { getContent } from "@/lib/content";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import WorkSession from "@/components/WorkSession";

export const dynamic = "force-dynamic";

export default async function WorkSessionPage() {
  const { profile } = await getContent();
  return (
    <>
      <Nav name={profile.name} resumeUrl={profile.resumeUrl} />
      <main>
        <PageHeader eyebrow="07 / Work session" title="How I turn a blank page into useful work." intro="A simple look at my working style, from the first question to the final polish." />
        <WorkSession />
      </main>
      <Footer profile={profile} />
    </>
  );
}
