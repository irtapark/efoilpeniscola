"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Zap, ArrowRight, MousePointer2 } from "lucide-react";
import { useState, useEffect } from "react";

const videos = [
  "/assets/VID_20220717_123740.mp4",
  "/assets/VID_20220714_071755_1.mp4",
  "/assets/20230615_104347.mp4",
  "/assets/VID_20220721_174021.mp4",
  "/assets/VID_20220722_081226.mp4",
];

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
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
      <div className="relative z-20 text-center px-6 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="inline-flex items-center gap-3 mb-6 bg-white/5 backdrop-blur-md px-6 py-2 border border-white/10 rounded-full">
            <span className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse" />
            <span className="text-white/60 font-black tracking-[0.3em] uppercase text-[10px] md:text-xs">
              Peñíscola Nautical Experience
            </span>
          </div>
          
          <h1 className="text-7xl md:text-[12rem] font-black text-white leading-[0.75] uppercase italic tracking-tighter mb-12">
            Vuela <br />
            <span className="text-transparent stroke-text opacity-50">Sobre</span> <br />
            <span className="text-brand-cyan">El Mar</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto font-bold uppercase tracking-tight italic">
            La perspectiva más radical del Castillo de Peñíscola. <br />
            Sin ruidos. Sin olas. Solo adrenalina.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a href="tel:644026066" className="btn-radical text-2xl group">
              <Zap size={24} fill="currentColor" />
              ¡Reserva YA!
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
            </a>
            
            <a
              href="#experiencia"
              className="text-white font-black uppercase italic tracking-widest text-sm flex items-center gap-2 group hover:text-brand-cyan transition-colors"
            >
              Descubrir <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Modern Indicators */}
      <div className="absolute bottom-12 left-12 z-20 flex gap-4">
        {videos.map((_, i) => (
          <div
            key={i}
            className={`h-1 transition-all duration-1000 ${
              i === currentVideo ? "w-16 bg-brand-cyan" : "w-4 bg-white/20"
            }`}
          />
        ))}
      </div>

      {/* Vertical Decorative Text */}
      <div className="absolute right-0 top-0 h-full flex items-center pointer-events-none overflow-hidden pr-4 opacity-5">
        <span className="text-[20rem] font-black uppercase italic vertical-text leading-none select-none">
          ACTION
        </span>
      </div>
    </section>
  );
};

export default Hero;
