import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://efoilpeniscola.com'),
  title: "Peñíscola E-foil Experience | Aprende a volar sobre el mar",
  description: "Descubre la revolución del mar en Peñíscola. Clases de eFoil frente al Castillo del Papa Luna. ¡Reserva tu aventura hoy!",
  keywords: ["eFoil", "Peñíscola", "Surf Eléctrico", "Actividades Peñíscola", "Castillo del Papa Luna", "Deportes Acuáticos"],
  openGraph: {
    title: "Peñíscola E-foil Experience",
    description: "La perspectiva más radical del Castillo de Peñíscola. Sin ruidos. Sin olas. Solo adrenalina.",
    url: "https://efoilpeniscola.com",
    siteName: "Peñíscola E-foil Experience",
    images: [
      {
        url: "/assets/20210905_171520.jpg",
        width: 1200,
        height: 630,
        alt: "Vuela sobre el mar en Peñíscola",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peñíscola E-foil Experience",
    description: "Aprende a volar sobre el mar frente al Castillo del Papa Luna.",
    images: ["/assets/20210905_171520.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Peñíscola E-foil Experience",
  "image": "https://efoilpeniscola.com/assets/20210905_171520.jpg",
  "description": "Clases y alquiler de eFoil (surf eléctrico) frente al Castillo de Peñíscola.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Peñíscola",
    "addressRegion": "Castellón",
    "addressCountry": "ES"
  },
  "telephone": "+34644026066",
  "url": "https://efoilpeniscola.com",
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
