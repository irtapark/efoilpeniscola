"use client";

import { MapPin, Phone, Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const locations = [
    {
      title: "Playa Norte",
      desc: "Punto de encuentro (Frente al Castillo de Papa Luna)",
      icon: <MapPin size={24} className="text-brand-cyan" />,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Playa+Norte+Peñíscola+Castillo+Papa+Luna"
    },
    {
      title: "Puerto de Peñíscola",
      desc: "En el Puerto Deportivo con Nauticriders (Entrada por Nudo Beach Club)",
      icon: <MapPin size={24} className="text-brand-cyan" />,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Nauticriders+Puerto+Peñíscola"
    },
  ];

  return (
    <section id="contacto" className="bg-brand-dark text-white relative overflow-hidden">
      <div className="section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-black mb-8 md:mb-12 italic uppercase tracking-tighter leading-none">
              {t.contact.title}
            </h2>
            <p className="text-lg md:text-xl mb-12 md:mb-16 font-bold italic leading-tight text-white/50">
              {t.contact.p1}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              {locations.map((loc, i) => (
                <a
                  key={i}
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-3 md:gap-4 p-6 md:p-8 bg-white/5 border-l-4 border-brand-cyan hover:bg-white/10 transition-colors group cursor-pointer"
                  title="Ver en Google Maps"
                >
                  <div className="shrink-0 group-hover:scale-110 transition-transform">{loc.icon}</div>
                  <div>
                    <h4 className="font-black text-lg md:text-xl mb-1 uppercase italic group-hover:text-brand-cyan transition-colors">{loc.title}</h4>
                    <p className="text-white/40 text-[10px] md:text-sm font-bold">{loc.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-cyan p-8 md:p-20 rounded-none text-brand-dark -skew-x-1 md:-skew-x-2 mt-8 md:mt-0"
          >
            <h3 className="text-2xl md:text-4xl font-black mb-8 md:mb-12 uppercase italic tracking-tighter">
              {t.contact.ctaTitle}
            </h3>
            <div className="space-y-6 md:space-y-10">
              <a
                href="tel:644026066"
                className="flex items-center gap-4 md:gap-6 text-2xl md:text-5xl font-black hover:translate-x-2 md:hover:translate-x-4 transition-transform italic tracking-tighter leading-none"
              >
                <Phone size={24} className="md:w-10 md:h-10" fill="currentColor" />
                644 026 066
              </a>
              <a
                href="https://wa.me/34644026066"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 md:gap-6 text-2xl md:text-5xl font-black hover:translate-x-2 md:hover:translate-x-4 transition-transform italic tracking-tighter leading-none"
              >
                <MessageCircle size={24} className="md:w-10 md:h-10" fill="currentColor" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/foilexperience"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 md:gap-6 text-2xl md:text-5xl font-black hover:translate-x-2 md:hover:translate-x-4 transition-transform italic tracking-tighter leading-none"
              >
                <Instagram size={24} className="md:w-10 md:h-10" />
                Instagram
              </a>
            </div>

            <div className="mt-12 md:mt-20 p-6 md:p-10 bg-brand-dark rounded-none text-white skew-x-1 md:skew-x-2">
              <p className="font-black text-xl md:text-2xl mb-1 md:mb-2 uppercase italic tracking-tighter text-brand-cyan">
                {t.contact.hours}
              </p>
              <p className="text-white/60 font-bold text-[10px] md:text-sm tracking-widest">
                {t.contact.days}
              </p>
              <p className="text-[8px] md:text-[10px] mt-4 md:mt-6 text-white/30 font-black tracking-[0.1em] md:tracking-[0.15em]">
                {t.contact.weather}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
