import { Language, translations } from "@/translations";
import { LanguageProvider } from "@/context/LanguageContext";
import KitesurfContent from "./KitesurfContent";
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
  const p = translations[lang].servicesPage.kitesurf;

  return {
    title: p.metaTitle,
    description: p.metaDesc,
    alternates: {
      canonical: `https://efoilpeniscola.com/${lang}/kitesurf`,
      languages: {
        'es-ES': 'https://efoilpeniscola.com/es/kitesurf',
        'en-US': 'https://efoilpeniscola.com/en/kitesurf',
        'fr-FR': 'https://efoilpeniscola.com/fr/kitesurf',
        'x-default': 'https://efoilpeniscola.com/es/kitesurf',
      }
    },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDesc,
      url: `https://efoilpeniscola.com/${lang}/kitesurf`,
    }
  };
}

export default async function Page({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Language;

  return (
    <LanguageProvider defaultLanguage={lang}>
      <KitesurfContent lang={lang} />
    </LanguageProvider>
  );
}
