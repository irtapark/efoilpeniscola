"use client";

import { motion } from "framer-motion";
import { Zap, Wind, Waves, ShieldCheck, Ship, Anchor } from "lucide-react";

const Experience = () => {
  const features = [
    { icon: <Zap className="text-brand-cyan" size={32} />, title: "Motor Eléctrico", desc: "Silencio total y cero emisiones." },
    { icon: <Wind className="text-brand-cyan" size={32} />, title: "Vuelo Suave", desc: "Siente la libertad de levitar." },
    { icon: <Waves className="text-brand-cyan" size={32} />, title: "Sobre las Olas", desc: "Sin impacto, fluye sobre el mar." },
    { icon: <ShieldCheck className="text-brand-cyan" size={32} />, title: "Seguridad Pro", desc: "Casco con radio e instructores." },
  ];

  return (
    <section id="experiencia" className="bg-white text-brand-dark overflow-hidden relative">
      {/* Decorative Icons */}
      <Anchor className="absolute top-10 right-10 text-brand-blue/5 -rotate-12" size={120} />
      <Ship className="absolute bottom-10 left-10 text-brand-blue/5 rotate-12" size={100} />

      <div className="section-padding relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight uppercase italic">
              Vuela sobre el mar <br />
              <span className="text-brand-blue">en Peñíscola</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Siente la libertad absoluta de volar sobre las aguas de Peñíscola. El eFoil es la actividad náutica definitiva para quienes buscan algo extraordinario.
              </p>
              <p>
                Contempla el <span className="font-bold text-brand-blue">Castillo de Papa Luna</span> desde una perspectiva privilegiada, levitando sobre el mar sin ruidos ni olas. Solo tú y el horizonte.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col gap-2">
                  {f.icon}
                  <h4 className="font-bold">{f.title}</h4>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand-cyan/20 rounded-2xl rotate-3 -z-10" />
            <img
              src="/assets/IMG-20210629-WA0002.jpg"
              alt="Vuela sobre el mar con eFoil"
              className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute bottom-6 right-6 bg-brand-dark text-white p-6 rounded-xl shadow-xl max-w-xs">
              <p className="text-sm font-medium italic">
                "La forma más espectacular de ver Peñíscola desde el agua."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
