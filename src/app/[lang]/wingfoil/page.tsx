import { Language, translations } from "@/translations";
import { LanguageProvider } from "@/context/LanguageContext";
import WingfoilContent from "./WingfoilContent";
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
  const p = translations[lang].servicesPage.wingfoil;

  return {
    title: p.metaTitle,
    description: p.metaDesc,
    alternates: {
      canonical: `https://efoilpeniscola.com/${lang}/wingfoil`,
      languages: {
        'es-ES': 'https://efoilpeniscola.com/es/wingfoil',
        'en-US': 'https://efoilpeniscola.com/en/wingfoil',
        'fr-FR': 'https://efoilpeniscola.com/fr/wingfoil',
        'x-default': 'https://efoilpeniscola.com/es/wingfoil',
      }
    },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDesc,
      url: `https://efoilpeniscola.com/${lang}/wingfoil`,
    }
  };
}

export default async function Page({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Language;

  return (
    <LanguageProvider defaultLanguage={lang}>
      <WingfoilContent lang={lang} />
    </LanguageProvider>
  );
}
