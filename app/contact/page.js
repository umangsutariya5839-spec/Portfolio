import { getContent } from "@/lib/content";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const { profile } = await getContent();
  return (
    <>
      <Nav name={profile.name} resumeUrl={profile.resumeUrl} />
      <main>
        <PageHeader eyebrow="08 / Contact" title="Have a project or opportunity in mind?" intro="Send a message and tell me what you are building, learning, or looking for." />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
