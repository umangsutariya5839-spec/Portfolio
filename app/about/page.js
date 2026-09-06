import { getContent } from "@/lib/content";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  const { profile } = await getContent();
  return (
    <>
      <Nav name={profile.name} resumeUrl={profile.resumeUrl} />
      <main>
        <PageHeader eyebrow="01 / About" title="A little context before the work." intro={profile.intro} />
        <About profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
