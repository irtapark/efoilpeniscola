"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PromoBanner from "@/components/PromoBanner";
import Experience from "@/components/Experience";
import Modalities from "@/components/Modalities";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PromoBanner />
      <Hero />
      <Experience />
      <Modalities />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
