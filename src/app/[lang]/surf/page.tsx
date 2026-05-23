import { Language, translations } from "@/translations";
import { LanguageProvider } from "@/context/LanguageContext";
import SurfContent from "./SurfContent";
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
  const p = translations[lang].servicesPage.surf;

  return {
    title: p.metaTitle,
    description: p.metaDesc,
    alternates: {
      canonical: `https://efoilpeniscola.com/${lang}/surf`,
      languages: {
        'es-ES': 'https://efoilpeniscola.com/es/surf',
        'en-US': 'https://efoilpeniscola.com/en/surf',
        'fr-FR': 'https://efoilpeniscola.com/fr/surf',
        'x-default': 'https://efoilpeniscola.com/es/surf',
      }
    },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDesc,
      url: `https://efoilpeniscola.com/${lang}/surf`,
    }
  };
}

export default async function Page({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Language;

  return (
    <LanguageProvider defaultLanguage={lang}>
      <SurfContent lang={lang} />
    </LanguageProvider>
  );
}
