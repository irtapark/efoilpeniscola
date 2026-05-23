import { Language, translations } from "@/translations";
import { LanguageProvider } from "@/context/LanguageContext";
import FlyboardContent from "./FlyboardContent";
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
  const p = translations[lang].servicesPage.flyboard;

  return {
    title: p.metaTitle,
    description: p.metaDesc,
    alternates: {
      canonical: `https://efoilpeniscola.com/${lang}/flyboard`,
      languages: {
        'es-ES': 'https://efoilpeniscola.com/es/flyboard',
        'en-US': 'https://efoilpeniscola.com/en/flyboard',
        'fr-FR': 'https://efoilpeniscola.com/fr/flyboard',
        'x-default': 'https://efoilpeniscola.com/es/flyboard',
      }
    },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDesc,
      url: `https://efoilpeniscola.com/${lang}/flyboard`,
    }
  };
}

export default async function Page({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Language;

  return (
    <LanguageProvider defaultLanguage={lang}>
      <FlyboardContent lang={lang} />
    </LanguageProvider>
  );
}
