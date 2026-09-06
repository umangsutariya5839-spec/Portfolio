import { getContent } from "@/lib/content";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Skills from "@/components/Skills";

export const dynamic = "force-dynamic";

export default async function SkillsPage() {
  const { profile, skills } = await getContent();
  return (
    <>
      <Nav name={profile.name} resumeUrl={profile.resumeUrl} />
      <main>
        <PageHeader eyebrow="03 / Skills" title="Tools I use and skills I am growing." intro="A practical toolkit for building interfaces, working with data, and collaborating on software." />
        <Skills skills={skills} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
