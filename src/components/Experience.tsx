"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Wind, Sliders, Gauge } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

  const features = [
    { icon: <Gauge className="text-brand-cyan" size={32} />, title: t.experience.feat1, desc: t.experience.desc1 },
    { icon: <Wind className="text-brand-cyan" size={32} />, title: t.experience.feat2, desc: t.experience.desc2 },
    { icon: <Zap className="text-brand-cyan" size={32} />, title: t.experience.feat3, desc: t.experience.desc3 },
    { icon: <Sliders className="text-brand-cyan" size={32} />, title: t.experience.feat4, desc: t.experience.desc4 },
  ];

  return (
    <section id="experiencia" className="bg-brand-dark text-white overflow-hidden relative border-t-4 md:border-t-8 border-brand-cyan">
      {/* Radical Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-cyan/5 -skew-x-12 translate-x-32 pointer-events-none" />
      
      <div className="section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-cyan/10 border border-brand-cyan/30 px-4 py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] italic text-brand-cyan mb-6 -skew-x-12 select-none shadow-[0_0_20px_rgba(0,209,255,0.05)]">
              {t.experience.joyaCorona}
            </div>

            <h2 className="text-5xl md:text-9xl font-black mb-8 md:mb-12 leading-[0.85] uppercase italic tracking-tighter">
              {t.experience.title1} <br />
              <span className="text-brand-cyan">{t.experience.title2}</span> <br />
              {t.experience.title3}
            </h2>
            
            <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-white/60 font-bold italic leading-tight mb-12 md:mb-16">
              <p className="border-l-4 border-brand-cyan pl-4 md:pl-6">
                {t.experience.p1}
              </p>
              <p className="pl-8 md:pl-10 text-white/40">
                {t.experience.p2}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:gap-12 mt-8 md:mt-16">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col gap-3 md:gap-5 group">
                  <div className="bg-white/5 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-none -skew-x-12 group-hover:bg-brand-cyan transition-colors duration-500 border border-white/10 group-hover:border-brand-cyan">
                    <div className="group-hover:text-brand-dark transition-colors duration-500 skew-x-12 scale-75 md:scale-100">
                      {f.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black uppercase italic tracking-tighter text-sm md:text-xl mb-1">{f.title}</h4>
                    <p className="text-[10px] md:text-xs text-white/40 tracking-wider font-bold">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative mt-12 md:mt-0 w-full h-[500px] md:h-[800px]"
          >
            {/* Radical Image Frame */}
            <div className="absolute -inset-2 md:-inset-4 border-2 border-brand-cyan/20 -rotate-3 z-0" />
            
            <Image
              src="/assets/IMG-20210629-WA0002.jpg"
              alt="Radical E-foil Peñíscola"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-none shadow-2xl object-cover transition-all duration-1000 z-10"
              priority
            />
            
            <div className="absolute bottom-6 -right-4 md:bottom-10 md:-right-10 bg-brand-cyan text-brand-dark p-6 md:p-10 font-black uppercase italic tracking-tighter text-2xl md:text-4xl shadow-2xl rotate-6 z-20">
              {t.experience.badgeText1} <br /> {t.experience.badgeText2} <br /> {t.experience.badgeText3}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Big Text */}
      <div className="absolute top-1/2 left-0 opacity-[0.02] pointer-events-none select-none overflow-hidden w-full text-center">
        <span className="text-[15rem] md:text-[40rem] font-black italic uppercase leading-none inline-block -translate-y-1/2">
          RADICAL
        </span>
      </div>
    </section>
  );
};

export default Experience;
