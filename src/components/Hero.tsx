"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const videos = [
  "/assets/VID_20220717_123740.mp4",
  "/assets/VID_20220714_071755_1.mp4",
  "/assets/20230615_104347.mp4",
  "/assets/VID_20220721_174021.mp4",
  "/assets/VID_20220722_081226.mp4",
];

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Compilation with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-transparent to-brand-dark z-10" />
        <AnimatePresence mode="wait">
          <motion.video
            key={videos[currentVideo]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videos[currentVideo]} type="video/mp4" />
          </motion.video>
        </AnimatePresence>
      </div>

      {/* Radical Content */}
      <div className="relative z-20 text-center px-4 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <span className="inline-block bg-brand-cyan text-brand-dark px-4 py-1.5 md:px-6 md:py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.25em] italic -skew-x-12 mb-6 md:mb-8 select-none shadow-[0_0_30px_rgba(0,209,255,0.2)]">
            {t.hero.badge}
          </span>

          <h1 className="text-5xl md:text-[12rem] font-black text-white leading-[0.85] uppercase italic tracking-tighter mb-8">
            {t.hero.vuela} <br />
            <span className="text-transparent stroke-text opacity-40">{t.hero.sobre}</span> <br />
            <span className="text-brand-cyan">{t.hero.elMar}</span>
          </h1>

          <p className="text-base md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto font-bold tracking-wide italic leading-snug">
            {t.hero.desc}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="tel:644026066" className="btn-radical text-lg md:text-2xl group w-full md:w-auto">
              <Zap size={20} className="md:w-6 md:h-6" fill="currentColor" />
              {t.hero.cta}
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Indicators - Hidden on small mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 z-20 flex gap-2">
        {videos.map((_, i) => (
          <div
            key={i}
            className={`h-1 transition-all duration-1000 ${
              i === currentVideo ? "w-8 md:w-16 bg-brand-cyan" : "w-2 md:w-4 bg-white/20"
            }`}
          />
        ))}
      </div>

      {/* Decorative Text - Hidden on mobile */}
      <div className="absolute right-0 top-0 h-full hidden md:flex items-center pointer-events-none overflow-hidden pr-4 opacity-5">
        <span className="text-[20rem] font-black uppercase italic vertical-text leading-none select-none">
          ACTION
        </span>
      </div>
    </section>
  );
};

export default Hero;
