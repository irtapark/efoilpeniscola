import { Language, translations } from "@/translations";
import { LanguageProvider } from "@/context/LanguageContext";
import JetskiContent from "./JetskiContent";
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
  const p = translations[lang].servicesPage.jetski;

  return {
    title: p.metaTitle,
    description: p.metaDesc,
    alternates: {
      canonical: `https://efoilpeniscola.com/${lang}/motos-de-agua`,
      languages: {
        'es-ES': 'https://efoilpeniscola.com/es/motos-de-agua',
        'en-US': 'https://efoilpeniscola.com/en/motos-de-agua',
        'fr-FR': 'https://efoilpeniscola.com/fr/motos-de-agua',
        'x-default': 'https://efoilpeniscola.com/es/motos-de-agua',
      }
    },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDesc,
      url: `https://efoilpeniscola.com/${lang}/motos-de-agua`,
    }
  };
}

export default async function Page({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Language;

  return (
    <LanguageProvider defaultLanguage={lang}>
      <JetskiContent lang={lang} />
    </LanguageProvider>
  );
}
