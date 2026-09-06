import { getContent } from "@/lib/content";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";

export const dynamic = "force-dynamic";

export default async function ExperiencePage() {
  const { profile, experience } = await getContent();
  return (
    <>
      <Nav name={profile.name} resumeUrl={profile.resumeUrl} />
      <main>
        <PageHeader eyebrow="04 / Experience" title="Learning by working with real data." intro="My first professional experience gave me a strong foundation in careful analysis, simple communication, and asking better questions." />
        <Experience experience={experience} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
