import { Language, translations } from "@/translations";
import { LanguageProvider } from "@/context/LanguageContext";
import SupPilatesContent from "./SupPilatesContent";
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
  const p = translations[lang].servicesPage.supPilates;

  return {
    title: p.metaTitle,
    description: p.metaDesc,
    alternates: {
      canonical: `https://efoilpeniscola.com/${lang}/sup-pilates`,
      languages: {
        'es-ES': 'https://efoilpeniscola.com/es/sup-pilates',
        'en-US': 'https://efoilpeniscola.com/en/sup-pilates',
        'fr-FR': 'https://efoilpeniscola.com/fr/sup-pilates',
        'x-default': 'https://efoilpeniscola.com/es/sup-pilates',
      }
    },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDesc,
      url: `https://efoilpeniscola.com/${lang}/sup-pilates`,
    }
  };
}

export default async function Page({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Language;

  return (
    <LanguageProvider defaultLanguage={lang}>
      <SupPilatesContent lang={lang} />
    </LanguageProvider>
  );
}
