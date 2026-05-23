import { Language, translations } from "@/translations";
import { LanguageProvider } from "@/context/LanguageContext";
import WindsurfContent from "./WindsurfContent";
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
  const p = translations[lang].servicesPage.windsurf;

  return {
    title: p.metaTitle,
    description: p.metaDesc,
    alternates: {
      canonical: `https://efoilpeniscola.com/${lang}/windsurf`,
      languages: {
        'es-ES': 'https://efoilpeniscola.com/es/windsurf',
        'en-US': 'https://efoilpeniscola.com/en/windsurf',
        'fr-FR': 'https://efoilpeniscola.com/fr/windsurf',
        'x-default': 'https://efoilpeniscola.com/es/windsurf',
      }
    },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDesc,
      url: `https://efoilpeniscola.com/${lang}/windsurf`,
    }
  };
}

export default async function Page({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Language;

  return (
    <LanguageProvider defaultLanguage={lang}>
      <WindsurfContent lang={lang} />
    </LanguageProvider>
  );
}
