import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Language } from "@/translations";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = rawLang as Language;

  const title = lang === 'es' 
    ? "Peñíscola Experiences | Vuela sobre el mar frente al Castillo"
    : lang === 'fr'
    ? "Peñíscola Experiences | Volez sur la mer devant le château"
    : "Peñíscola Experiences | Fly over the sea in front of the Castle";

  const description = lang === 'es'
    ? "Descubre la actividad más diferente de Peñíscola. Clases y alquiler de eFoil (tabla de surf eléctrica) con instructores certificados y vistas al Castillo del Papa Luna."
    : lang === 'fr'
    ? "Découvrez l'activité la plus insolite de Peñíscola. Cours et location d'eFoil (surf électrique) avec des moniteurs certifiés et vue sur le château."
    : "Discover the most unique water sports activity in Peñíscola. eFoil (electric surf) lessons and rentals with certified instructors and Castle views.";

  const keywords = lang === 'es'
    ? ["eFoil Peñíscola", "actividades Peñíscola", "qué hacer en Peñíscola", "deportes acuáticos Peñíscola", "surf eléctrico Peñíscola", "ocio Peñíscola", "actividades diferentes Peñíscola"]
    : lang === 'fr'
    ? ["eFoil Peñíscola", "que faire à Peñíscola", "activités insolites Peñíscola", "sports nautiques Peñíscola", "surf electrique Peñíscola", "loisirs Peñíscola"]
    : ["eFoil Peniscola", "things to do in Peniscola", "water sports Peniscola", "electric surfing Spain", "adventure activities Peniscola", "what to do Peniscola"];

  return {
    metadataBase: new URL('https://efoilpeniscola.com'),
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://efoilpeniscola.com/${lang}`,
      languages: {
        'es-ES': 'https://efoilpeniscola.com/es',
        'en-US': 'https://efoilpeniscola.com/en',
        'fr-FR': 'https://efoilpeniscola.com/fr',
        'x-default': 'https://efoilpeniscola.com/es',
      }
    },
    openGraph: {
      title,
      description,
      url: `https://efoilpeniscola.com/${lang}`,
      siteName: "Peñíscola Experiences",
      images: [
        {
          url: "/assets/20210905_171520.jpg",
          width: 1200,
          height: 630,
          alt: "Vuela sobre el mar en Peñíscola",
        },
      ],
      locale: lang === 'es' ? 'es_ES' : lang === 'fr' ? 'fr_FR' : 'en_US',
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/20210905_171520.jpg"],
    },
  };
}

export default async function LocalizedLayout({ children, params }: Props) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Language;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "Peñíscola Experiences",
    "image": "https://efoilpeniscola.com/assets/20210905_171520.jpg",
    "description": lang === 'es' 
      ? "Clases y alquiler de eFoil (surf eléctrico) frente al Castillo de Peñíscola."
      : lang === 'fr'
      ? "Cours et location d'eFoil (surf électrique) devant le château de Peñíscola."
      : "eFoil lessons and rentals in front of the Peñíscola Castle.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Peñíscola",
      "addressRegion": "Castellón",
      "addressCountry": "ES"
    },
    "telephone": "+34644026066",
    "url": `https://efoilpeniscola.com/${lang}`,
    "priceRange": "$$"
  };

  return (
    <html lang={lang} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${montserrat.variable} antialiased bg-brand-dark`}
      >
        <LanguageProvider defaultLanguage={lang}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
