"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const PromoBanner = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden bg-brand-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/20210918_111535.jpg"
          alt="Promoción de Mayo Peñíscola E-foil"
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 mb-4 bg-yellow-400/20 border border-yellow-400/50 text-yellow-400 px-4 py-1.5 rounded-none -skew-x-12">
            <span className="font-black tracking-[0.2em] uppercase text-xs">
              Especial Apertura de Temporada
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none mb-4">
            Oferta de <span className="text-yellow-400">Mayo</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-bold italic uppercase tracking-widest mb-8">
            Sesión para 2 por solo 40€ /persona
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-auto"
        >
          <a
            href={`https://wa.me/34644026066?text=${encodeURIComponent("¡Hola! Quiero aprovechar la Oferta de Mayo (Dúo por 40€/pers).")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-radical !bg-yellow-400 !text-black border-none text-xl md:text-2xl w-full md:w-auto inline-flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:shadow-[0_0_50px_rgba(250,204,21,0.6)]"
          >
            <Zap className="mr-2" />
            ¡Aprovechar Promo!
          </a>
        </motion.div>
      </div>

      {/* Decorative Radical Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-2 bg-yellow-400" />
    </section>
  );
};

export default PromoBanner;
