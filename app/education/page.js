import { getContent } from "@/lib/content";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";

export const dynamic = "force-dynamic";

export default async function EducationPage() {
  const { profile, education } = await getContent();
  return (
    <>
      <Nav name={profile.name} resumeUrl={profile.resumeUrl} />
      <main>
        <PageHeader eyebrow="05 / Education" title="The foundation behind my work." intro="A timeline of the study and practice that shaped how I approach technology." />
        <Education education={education} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
