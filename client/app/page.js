import { getPortfolio } from "@/lib/api";
import About from "@/components/About";
import ApiDown from "@/components/ApiDown";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

// Always read fresh content from the API, so edits in /admin show up on the next refresh.
export const dynamic = "force-dynamic";

export default async function Home() {
  let content;
  try {
    content = await getPortfolio();
  } catch (error) {
    return <ApiDown error={error} />;
  }
  const { profile, projects, experience, education, skills } = content;

  return (
    <>
      <Nav name={profile.name} resumeUrl={profile.resumeUrl} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Education education={education} profile={profile} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
