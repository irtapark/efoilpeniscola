import { Language, translations } from "@/translations";
import { LanguageProvider } from "@/context/LanguageContext";
import PaddleSurfContent from "./PaddleSurfContent";
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
  const p = translations[lang].servicesPage.paddle;

  return {
    title: p.metaTitle,
    description: p.metaDesc,
    alternates: {
      canonical: `https://efoilpeniscola.com/${lang}/paddle-surf`,
      languages: {
        'es-ES': 'https://efoilpeniscola.com/es/paddle-surf',
        'en-US': 'https://efoilpeniscola.com/en/paddle-surf',
        'fr-FR': 'https://efoilpeniscola.com/fr/paddle-surf',
        'x-default': 'https://efoilpeniscola.com/es/paddle-surf',
      }
    },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDesc,
      url: `https://efoilpeniscola.com/${lang}/paddle-surf`,
    }
  };
}

export default async function Page({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Language;

  return (
    <LanguageProvider defaultLanguage={lang}>
      <PaddleSurfContent lang={lang} />
    </LanguageProvider>
  );
}
