"use client";

import { MapPin, Phone, Camera, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const locations = [
    {
      title: "Playa Norte",
      desc: "Castillo Papa Luna",
      icon: <MapPin size={24} className="text-brand-cyan" />,
    },
    {
      title: "Puerto Peñíscola",
      desc: "Nudo Beach Club",
      icon: <MapPin size={24} className="text-brand-cyan" />,
    },
  ];

  return (
    <section id="contacto" className="bg-brand-dark text-white relative overflow-hidden">
      <div className="section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-black mb-12 italic uppercase tracking-tighter leading-none">
              {t.contact.title}
            </h2>
            <p className="text-white/50 text-xl mb-16 font-bold uppercase italic leading-tight">
              {t.contact.p1}
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {locations.map((loc, i) => (
                <div key={i} className="flex flex-col gap-4 p-8 bg-white/5 border-l-4 border-brand-cyan">
                  <div className="shrink-0">{loc.icon}</div>
                  <div>
                    <h4 className="font-black text-xl mb-1 uppercase italic">{loc.title}</h4>
                    <p className="text-white/40 text-sm uppercase font-bold">{loc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-cyan p-12 md:p-20 rounded-none text-brand-dark -skew-x-2"
          >
            <h3 className="text-4xl font-black mb-12 uppercase italic tracking-tighter">
              {t.contact.ctaTitle}
            </h3>
            <div className="space-y-10">
              <a
                href="tel:644026066"
                className="flex items-center gap-6 text-3xl md:text-5xl font-black hover:translate-x-4 transition-transform italic tracking-tighter"
              >
                <Phone size={40} fill="currentColor" />
                644 026 066
              </a>
              <a
                href="https://wa.me/34644026066"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 text-3xl md:text-5xl font-black hover:translate-x-4 transition-transform italic tracking-tighter"
              >
                <MessageCircle size={40} fill="currentColor" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/foilexperience"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 text-3xl md:text-5xl font-black hover:translate-x-4 transition-transform italic tracking-tighter"
              >
                <Camera size={40} />
                Instagram
              </a>
            </div>

            <div className="mt-20 p-10 bg-brand-dark rounded-none text-white skew-x-2">
              <p className="font-black text-2xl mb-2 uppercase italic tracking-tighter text-brand-cyan">
                {t.contact.hours}
              </p>
              <p className="text-white/60 font-bold uppercase text-sm tracking-widest">
                {t.contact.days}
              </p>
              <p className="text-[10px] mt-6 text-white/30 font-black uppercase tracking-[0.3em]">
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
