import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Modalities from "@/components/Modalities";
import OtherServices from "@/components/OtherServices";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Language } from "@/translations";
import { LanguageProvider } from "@/context/LanguageContext";

export async function generateStaticParams() {
  return [
    { lang: 'es' },
    { lang: 'en' },
    { lang: 'fr' },
  ];
}

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function Page({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Language;
  
  return (
    <LanguageProvider defaultLanguage={lang}>
      <main className="min-h-screen bg-brand-dark">
        <Navbar />
        <Hero />
        <Experience />
        <Modalities />
        <OtherServices />
        <Gallery />
        <Faq />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </LanguageProvider>
  );
}
