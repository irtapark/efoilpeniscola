"use client";

import { motion } from "framer-motion";
import { Zap, Wind, Waves, Sliders, Gauge, Anchor } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

  const features = [
    { icon: <Gauge className="text-brand-cyan" size={40} />, title: t.experience.feat1, desc: t.experience.desc1 },
    { icon: <Wind className="text-brand-cyan" size={40} />, title: t.experience.feat2, desc: t.experience.desc2 },
    { icon: <Zap className="text-brand-cyan" size={40} />, title: t.experience.feat3, desc: t.experience.desc3 },
    { icon: <Sliders className="text-brand-cyan" size={40} />, title: t.experience.feat4, desc: t.experience.desc4 },
  ];

  return (
    <section id="experiencia" className="bg-brand-dark text-white overflow-hidden relative border-t-8 border-brand-cyan">
      {/* Radical Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-cyan/5 -skew-x-12 translate-x-32 pointer-events-none" />
      
      <div className="section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-9xl font-black mb-12 leading-[0.85] uppercase italic tracking-tighter">
              {t.experience.title1} <br />
              <span className="text-brand-cyan">{t.experience.title2}</span> <br />
              {t.experience.title3}
            </h2>
            
            <div className="space-y-8 text-xl text-white/60 font-bold uppercase italic leading-tight mb-16">
              <p className="border-l-4 border-brand-cyan pl-6">
                {t.experience.p1}
              </p>
              <p className="pl-10 text-white/40">
                {t.experience.p2}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 mt-16">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col gap-5 group">
                  <div className="bg-white/5 w-20 h-20 flex items-center justify-center rounded-none -skew-x-12 group-hover:bg-brand-cyan transition-colors duration-500 border border-white/10 group-hover:border-brand-cyan">
                    <div className="group-hover:text-brand-dark transition-colors duration-500 skew-x-12">
                      {f.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black uppercase italic tracking-tighter text-xl mb-2">{f.title}</h4>
                    <p className="text-xs text-white/40 uppercase tracking-widest font-bold">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.1, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="relative"
          >
            {/* Radical Image Frame */}
            <div className="absolute -inset-4 border-2 border-brand-cyan/20 -rotate-3" />
            <div className="absolute -inset-4 border-2 border-white/5 rotate-2" />
            
            <img
              src="/assets/IMG-20210629-WA0002.jpg"
              alt="Radical E-foil Peñíscola"
              className="relative rounded-none shadow-2xl w-full h-[800px] object-cover mix-blend-lighten grayscale hover:grayscale-0 transition-all duration-1000"
            />
            
            <div className="absolute bottom-10 -left-10 bg-brand-cyan text-white p-10 font-black uppercase italic tracking-tighter text-4xl shadow-2xl -rotate-6">
              Live <br /> The <br /> Action
            </div>

            <div className="absolute -top-10 -right-10 opacity-10">
              <Anchor size={200} className="text-brand-cyan" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Big Text */}
      <div className="absolute top-1/2 left-0 opacity-[0.03] pointer-events-none select-none overflow-hidden w-full text-center">
        <span className="text-[40rem] font-black italic uppercase leading-none inline-block -translate-y-1/2">
          RADICAL
        </span>
      </div>
    </section>
  );
};

export default Experience;
