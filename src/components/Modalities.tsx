"use client";

import { motion } from "framer-motion";
import { Zap, Wind, Waves, Gauge } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Modalities = () => {
  const { t } = useLanguage();

  const plans = [
    {
      title: t.rates.solo.title,
      price: "75€",
      duration: t.rates.solo.duration,
      description: t.rates.solo.desc,
      icon: <Wind size={32} className="md:w-11 md:h-11" />,
      features: [
        t.rates.solo.f1,
        t.rates.solo.f2,
        t.rates.solo.f3,
        t.rates.solo.f4,
      ],
      cta: t.rates.solo.cta,
      popular: false,
      note: t.rates.note
    },
    {
      title: t.rates.duo.title,
      price: "50€",
      duration: t.rates.duo.duration,
      description: t.rates.duo.desc,
      icon: <Waves size={32} className="md:w-11 md:h-11" />,
      features: [
        t.rates.duo.f1,
        t.rates.duo.f2,
        t.rates.duo.f3,
        t.rates.duo.f4,
      ],
      cta: t.rates.duo.cta,
      popular: true,
      note: t.rates.note
    },
    {
      title: t.rates.pro.title,
      price: "230€",
      duration: t.rates.pro.duration,
      description: t.rates.pro.desc,
      icon: <Gauge size={32} className="md:w-11 md:h-11" />,
      features: [
        t.rates.pro.f1,
        t.rates.pro.f2,
        t.rates.pro.f3,
        t.rates.pro.f4,
      ],
      cta: t.rates.pro.cta,
      popular: false,
      note: t.rates.note
    },
  ];

  return (
    <section id="tarifas" className="bg-brand-dark text-white overflow-hidden relative border-t-4 md:border-t-8 border-brand-cyan pb-20 md:pb-40">
      {/* Glowing Ambient Lights (Adds Light & Illumination) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[800px] h-[350px] md:h-[800px] bg-brand-cyan/15 rounded-full blur-[120px] md:blur-[180px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[200px] md:w-[450px] h-[200px] md:h-[450px] bg-sky-500/10 rounded-full blur-[100px] md:blur-[130px] pointer-events-none" />

      {/* Radical Pattern */}
      <div className="absolute inset-0 opacity-[0.03] md:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #00d1ff 1px, transparent 1px), linear-gradient(-45deg, #00d1ff 1px, transparent 1px)', backgroundSize: '40px 40px md:60px 60px' }} />

      <div className="section-padding text-left relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-24"
        >
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-black mb-4 md:mb-6 uppercase italic tracking-tight leading-none">
            {t.rates.title1} <br />
            <span className="text-brand-cyan">{t.rates.title2}</span>
          </h2>
          <p className="text-white/80 text-lg md:text-2xl max-w-xl font-medium tracking-normal leading-relaxed">
            {t.rates.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-20 lg:gap-6 max-w-[1500px] mx-auto relative z-10">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 md:p-12 rounded-none border-l-4 transition-all hover:bg-brand-cyan group flex flex-col w-full backdrop-blur-sm ${
                plan.popular 
                  ? "bg-brand-cyan/20 border-brand-cyan lg:min-h-[650px] lg:-translate-y-12 shadow-[0_0_50px_rgba(0,209,255,0.15)] z-20" 
                  : "bg-white/5 border-white/10 lg:min-h-[600px] z-10"
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-0 bg-white text-brand-dark px-4 md:px-6 py-1 md:py-2 font-black uppercase italic tracking-widest text-[9px] md:text-xs">
                  {t.rates.popularBadge}
                </span>
              )}

              <div className="mb-6 md:mb-10 text-brand-cyan group-hover:text-brand-dark transition-colors duration-500">
                {plan.icon}
              </div>

              <h3 className="text-2xl md:text-4xl font-black mb-2 md:mb-4 uppercase italic group-hover:text-brand-dark leading-tight">{plan.title}</h3>
              
              <div className="flex items-baseline gap-2 mb-6 md:mb-10">
                <span className="text-6xl md:text-8xl font-black tracking-tight group-hover:text-brand-dark">{plan.price}</span>
                {plan.title !== t.rates.pro.title && (
                  <span className="text-lg md:text-2xl font-black opacity-40 uppercase group-hover:text-brand-dark/50">{t.rates.perPers}</span>
                )}
              </div>

              <p className="text-white/80 mb-8 md:mb-12 text-base md:text-lg font-bold italic leading-tight group-hover:text-brand-dark/95">
                {plan.description}
              </p>

              <div className="mt-auto">
                <ul className="space-y-3 md:space-y-4 mb-8 md:mb-12 border-l-2 border-brand-cyan group-hover:border-brand-dark pl-4 md:pl-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-xs md:text-sm font-bold tracking-normal group-hover:text-brand-dark">
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/34644026066?text=${encodeURIComponent(t.rates.waMessage + plan.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-5 md:py-7 font-black uppercase tracking-widest text-base md:text-xl transition-all flex items-center justify-center gap-3 md:gap-4 ${
                    plan.popular 
                      ? "bg-white text-brand-dark hover:bg-brand-dark hover:text-white" 
                      : "bg-brand-cyan text-brand-dark hover:bg-white hover:text-brand-dark"
                  }`}
                >
                  <Zap className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]" fill="currentColor" />
                  {plan.cta}
                </a>
                
                <div className="text-[10px] md:text-xs font-bold mt-4 md:mt-6 opacity-40 uppercase tracking-[0.15em] group-hover:opacity-100 group-hover:text-brand-dark">
                   {plan.note} — {plan.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-left border-t border-white/5 pt-8 md:pt-10">
          <p className="text-[8px] md:text-[10px] text-white/20 uppercase tracking-[0.2em] md:tracking-[0.3em] max-w-4xl leading-relaxed md:leading-loose">
            {t.rates.legal}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Modalities;
