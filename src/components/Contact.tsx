"use client";

import { MapPin, Phone, MessageCircle, Camera } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const locations = [
    {
      title: "Instalaciones 1 (Playa Norte)",
      desc: "Pegado al Castillo del Papa Luna.",
      icon: <MapPin size={24} className="text-brand-cyan" />,
    },
    {
      title: "Instalaciones 2 (Puerto)",
      desc: "Al ladito del Nudo Beach Club.",
      icon: <MapPin size={24} className="text-brand-cyan" />,
    },
  ];

  return (
    <section id="contacto" className="bg-brand-dark text-white relative overflow-hidden">
      <div className="section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 italic">¿Listo para volar?</h2>
            <p className="text-white/70 text-lg mb-12">
              Si te da pereza escribir y prefieres que te lo contemos de viva voz, responde con la palabra <span className="text-brand-yellow font-bold">"LLÁMAME"</span> y te pegamos un toque enseguida.
            </p>

            <div className="space-y-8">
              {locations.map((loc, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="shrink-0">{loc.icon}</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{loc.title}</h4>
                    <p className="text-white/60">{loc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-cyan p-8 md:p-12 rounded-[2rem] text-brand-dark"
          >
            <h3 className="text-3xl font-bold mb-6">Contacta con nosotros</h3>
            <div className="space-y-6">
              <a
                href="tel:644026066"
                className="flex items-center gap-4 text-2xl font-black hover:translate-x-2 transition-transform"
              >
                <Phone size={32} />
                644 026 066
              </a>
              <a
                href="https://wa.me/34644026066"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-2xl font-black hover:translate-x-2 transition-transform"
              >
                <MessageCircle size={32} />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/foilexperience"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-2xl font-black hover:translate-x-2 transition-transform"
              >
                <Camera size={32} />
                @foilexperience
              </a>
            </div>

            <div className="mt-12 p-6 bg-brand-dark rounded-2xl text-white">
              <p className="font-bold text-lg mb-2">Horario de Verano</p>
              <p className="text-white/70">Todos los días de 09:00 a 20:00</p>
              <p className="text-xs mt-4 text-brand-cyan font-bold uppercase tracking-widest">
                Sujeto a condiciones meteorológicas
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
