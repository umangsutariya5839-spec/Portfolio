import { getContent } from "@/lib/content";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Beyond from "@/components/Beyond";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Re-read the content on every request so an edit in /admin shows up immediately.
export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getContent();
  const { profile, projects, skills, experience, education, beyondWork } = content;

  return (
    <main>
      <Nav name={profile.name} resumeUrl={profile.resumeUrl} />
      <Hero profile={profile} />
      <About profile={profile} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Experience experience={experience} />
      <Education education={education} />
      <Beyond beyondWork={beyondWork} />
      <Contact profile={profile} />
      <Footer profile={profile} />
    </main>
  );
}
