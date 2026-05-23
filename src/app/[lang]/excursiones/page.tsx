import { Language, translations } from "@/translations";
import { LanguageProvider } from "@/context/LanguageContext";
import ExcursionesContent from "./ExcursionesContent";
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
  const p = translations[lang].servicesPage.excursiones;

  return {
    title: p.metaTitle,
    description: p.metaDesc,
    alternates: {
      canonical: `https://efoilpeniscola.com/${lang}/excursiones`,
      languages: {
        'es-ES': 'https://efoilpeniscola.com/es/excursiones',
        'en-US': 'https://efoilpeniscola.com/en/excursiones',
        'fr-FR': 'https://efoilpeniscola.com/fr/excursiones',
        'x-default': 'https://efoilpeniscola.com/es/excursiones',
      }
    },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDesc,
      url: `https://efoilpeniscola.com/${lang}/excursiones`,
    }
  };
}

export default async function Page({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Language;

  return (
    <LanguageProvider defaultLanguage={lang}>
      <ExcursionesContent lang={lang} />
    </LanguageProvider>
  );
}
