"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const videos = [
  "/assets/VID_20220714_071755_1.mp4",
  "/assets/20230615_104347.mp4",
  "/assets/VID_20220717_123740.mp4",
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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Compilation */}
      <div className="absolute inset-0 z-0 bg-brand-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/40 to-brand-dark z-10" />
        <AnimatePresence mode="wait">
          <motion.video
            key={videos[currentVideo]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
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

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-brand-cyan font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base bg-brand-dark/30 backdrop-blur-sm px-4 py-1 rounded-full">
            E-foil Peñíscola
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl italic uppercase">
            Vuela sobre <br />
            <span className="text-gradient">el mar</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed drop-shadow-lg font-medium">
            Una perspectiva única del Castillo de Peñíscola. <br />
            Sin olas, sin ruido, solo tú volando.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="tel:644026066" className="btn-primary text-lg w-full md:w-auto shadow-2xl">
              <Phone size={24} />
              ¡Reserva ahora!
            </a>
            <a
              href="#experiencia"
              className="text-white font-bold flex items-center gap-2 hover:text-brand-cyan transition-colors drop-shadow-lg"
            >
              Descubrir <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-12 right-12 z-20 flex gap-2">
        {videos.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === currentVideo ? "w-8 bg-brand-cyan" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-brand-cyan rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
