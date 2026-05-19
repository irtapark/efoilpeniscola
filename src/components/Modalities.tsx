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
      duration: "1h 30min (1 Batería)",
      description: t.rates.solo.desc,
      icon: <Wind size={44} />,
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
      duration: "1h 30min (1 Batería)",
      description: t.rates.duo.desc,
      icon: <Waves size={44} />,
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
      duration: "4 Baterías Full",
      description: t.rates.pro.desc,
      icon: <Gauge size={44} />,
      features: [
        t.rates.pro.f1,
        t.rates.pro.f2,
        t.rates.pro.f3,
        t.rates.pro.f4,
      ],
      cta: t.rates.pro.cta,
      popular: false,
      note: t.rates.pro.note
    },
  ];

  return (
    <section id="tarifas" className="bg-brand-dark text-white overflow-hidden relative border-t-8 border-brand-cyan pb-40">
      {/* Radical Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #00d1ff 1px, transparent 1px), linear-gradient(-45deg, #00d1ff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="section-padding text-left relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-6xl md:text-[10rem] font-black mb-6 uppercase italic tracking-tighter leading-none">
            {t.rates.title1} <br />
            <span className="text-brand-cyan">{t.rates.title2}</span>
          </h2>
          <p className="text-white/40 text-2xl max-w-xl font-black uppercase italic tracking-widest">
            {t.rates.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-[1500px] mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-12 rounded-none border-l-4 transition-all hover:bg-brand-cyan group flex flex-col ${
                plan.popular 
                  ? "bg-brand-cyan/20 border-brand-cyan h-[650px] md:-translate-y-12 shadow-[0_0_50px_rgba(0,209,255,0.1)]" 
                  : "bg-white/5 border-white/10 h-[600px]"
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-0 bg-white text-brand-dark px-6 py-2 font-black uppercase italic tracking-widest text-xs">
                  Most Radical Choice
                </span>
              )}

              <div className="mb-10 text-brand-cyan group-hover:text-brand-dark transition-colors duration-500">
                {plan.icon}
              </div>

              <h3 className="text-4xl font-black mb-4 uppercase italic group-hover:text-brand-dark leading-tight">{plan.title}</h3>
              
              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-8xl font-black tracking-tighter group-hover:text-brand-dark">{plan.price}</span>
                {plan.title !== t.rates.pro.title && (
                  <span className="text-2xl font-black opacity-30 uppercase group-hover:text-brand-dark/50">{t.rates.perPers}</span>
                )}
              </div>

              <p className="text-white/50 mb-12 text-xl font-bold uppercase italic leading-tight group-hover:text-brand-dark/80">
                {plan.description}
              </p>

              <div className="mt-auto">
                <ul className="space-y-4 mb-12 border-l-2 border-brand-cyan group-hover:border-brand-dark pl-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-xs font-black uppercase tracking-tighter group-hover:text-brand-dark">
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/34644026066?text=Hello! I want to book: ${plan.title}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-7 font-black uppercase tracking-widest text-xl transition-all flex items-center justify-center gap-4 ${
                    plan.popular 
                      ? "bg-white text-brand-dark hover:bg-brand-dark hover:text-white" 
                      : "bg-brand-cyan text-brand-dark hover:bg-white hover:text-brand-dark"
                  }`}
                >
                  <Zap size={24} fill="currentColor" />
                  {plan.cta}
                </a>
                
                <div className="text-[10px] font-black mt-6 opacity-20 uppercase tracking-[0.2em] group-hover:opacity-100 group-hover:text-brand-dark">
                   {plan.note} — {plan.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-left border-t border-white/5 pt-10">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] max-w-4xl leading-loose">
            {t.rates.legal}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Modalities;
