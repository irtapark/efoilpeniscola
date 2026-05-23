import { Language, translations } from "@/translations";
import { LanguageProvider } from "@/context/LanguageContext";
import BananaBoatContent from "./BananaBoatContent";
import type { Metadata } from "next";

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = rawLang as Language;
  const p = translations[lang].servicesPage.banana;

  return {
    title: p.metaTitle,
    description: p.metaDesc,
    alternates: {
      canonical: `https://efoilpeniscola.com/${lang}/banana-boat`,
      languages: {
        'es-ES': 'https://efoilpeniscola.com/es/banana-boat',
        'en-US': 'https://efoilpeniscola.com/en/banana-boat',
        'fr-FR': 'https://efoilpeniscola.com/fr/banana-boat',
        'x-default': 'https://efoilpeniscola.com/es/banana-boat',
      }
    },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDesc,
      url: `https://efoilpeniscola.com/${lang}/banana-boat`,
    }
  };
}

export default async function Page({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Language;

  return (
    <LanguageProvider defaultLanguage={lang}>
      <BananaBoatContent lang={lang} />
    </LanguageProvider>
  );
}
