import { Language, translations } from "@/translations";
import { LanguageProvider } from "@/context/LanguageContext";
import VelaLigeraContent from "./VelaLigeraContent";
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
  const p = translations[lang].servicesPage.vela;

  return {
    title: p.metaTitle,
    description: p.metaDesc,
    alternates: {
      canonical: `https://efoilpeniscola.com/${lang}/vela-ligera`,
      languages: {
        'es-ES': 'https://efoilpeniscola.com/es/vela-ligera',
        'en-US': 'https://efoilpeniscola.com/en/vela-ligera',
        'fr-FR': 'https://efoilpeniscola.com/fr/vela-ligera',
        'x-default': 'https://efoilpeniscola.com/es/vela-ligera',
      }
    },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDesc,
      url: `https://efoilpeniscola.com/${lang}/vela-ligera`,
    }
  };
}

export default async function Page({ params }: Props) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Language;

  return (
    <LanguageProvider defaultLanguage={lang}>
      <VelaLigeraContent lang={lang} />
    </LanguageProvider>
  );
}
