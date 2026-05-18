import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peñíscola E-foil Experience | Aprende a volar sobre el mar",
  description: "Descubre la revolución del mar en Peñíscola. Clases de eFoil frente al Castillo del Papa Luna. ¡Reserva tu aventura hoy!",
  keywords: ["eFoil", "Peñíscola", "Surf Eléctrico", "Actividades Peñíscola", "Castillo del Papa Luna", "Deportes Acuáticos"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
