import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { About } from "@/components/sections/About";
import { Townhouses } from "@/components/sections/Townhouses";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const locale = "es" as const;

  return (
    <>
      <Header locale={locale} />
      <main>
        <Hero locale={locale} />
        <Services locale={locale} />
        <ProjectsGrid locale={locale} />
        <VideoShowcase locale={locale} />
        <About locale={locale} />
        <Townhouses locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
      <WhatsAppFloatingButton locale={locale} />
    </>
  );
}
