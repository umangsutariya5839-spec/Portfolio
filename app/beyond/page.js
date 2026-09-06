import { getContent } from "@/lib/content";
import Beyond from "@/components/Beyond";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";

export const dynamic = "force-dynamic";

export default async function BeyondPage() {
  const { profile, beyondWork } = await getContent();
  return (
    <>
      <Nav name={profile.name} resumeUrl={profile.resumeUrl} />
      <main>
        <PageHeader eyebrow="06 / Beyond work" title="The habits that come from outside a laptop." intro="The best parts of how I work were also learned away from code." />
        <Beyond beyondWork={beyondWork} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
