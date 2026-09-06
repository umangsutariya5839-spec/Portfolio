import { getContent } from "@/lib/content";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Projects from "@/components/Projects";

export const dynamic = "force-dynamic";

export default async function WorkPage() {
  const { profile, projects } = await getContent();
  return (
    <>
      <Nav name={profile.name} resumeUrl={profile.resumeUrl} />
      <main>
        <PageHeader eyebrow="02 / Work" title="Projects built to solve everyday problems." intro="A selection of my web, database, and learning projects. Each one started with a simple user need." />
        <Projects projects={projects} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
