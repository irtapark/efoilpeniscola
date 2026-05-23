import { Language, translations } from "@/translations";
import { LanguageProvider } from "@/context/LanguageContext";
import KayakContent from "./KayakContent";
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
  const p = translations[lang].servicesPage.kayak;

  return {
    title: p.metaTitle,
    description: p.metaDesc,
    alternates: {
      canonical: `https://efoilpeniscola.com/${lang}/kayak`,
      languages: {
        'es-ES': 'https://efoilpeniscola.com/es/kayak',
        'en-US': 'https://efoilpeniscola.com/en/kayak',
        'fr-FR': 'https://efoilpeniscola.com/fr/kayak',
        'x-default': 'https://efoilpeniscola.com/es/kayak',
      }
    },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDesc,
      url: `https://efoilpeniscola.com/${lang}/kayak`,
    }
  };
}

export default async function Page({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Language;

  return (
    <LanguageProvider defaultLanguage={lang}>
      <KayakContent lang={lang} />
    </LanguageProvider>
  );
}
