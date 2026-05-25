import { Language, translations } from "@/translations";
import { LanguageProvider } from "@/context/LanguageContext";
import ColegiosContent from "./ColegiosContent";
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
  const p = translations[lang].servicesPage.colegios;

  return {
    title: p.metaTitle,
    description: p.metaDesc,
    alternates: {
      canonical: `https://efoilpeniscola.com/${lang}/colegios-y-grupos`,
      languages: {
        'es-ES': 'https://efoilpeniscola.com/es/colegios-y-grupos',
        'en-US': 'https://efoilpeniscola.com/en/colegios-y-grupos',
        'fr-FR': 'https://efoilpeniscola.com/fr/colegios-y-grupos',
        'x-default': 'https://efoilpeniscola.com/es/colegios-y-grupos',
      }
    },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDesc,
      url: `https://efoilpeniscola.com/${lang}/colegios-y-grupos`,
    }
  };
}

export default async function Page({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Language;

  return (
    <LanguageProvider defaultLanguage={lang}>
      <ColegiosContent lang={lang} />
    </LanguageProvider>
  );
}
