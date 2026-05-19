"use client";

import { motion } from "framer-motion";
import { Clock, Zap, Wind, Waves, Gauge } from "lucide-react";

const Modalities = () => {
  const plans = [
    {
      title: "Solo Flight",
      price: "75€",
      duration: "1h 30min (1 Batería)",
      description: "¡Tú, la tabla y el mar! Un instructor solo para ti para que domines la Fly Zone en tiempo récord.",
      icon: <Wind size={44} />,
      features: [
        "Private Coach",
        "Gear Pro Incluido",
        "Full Insurance",
        "Insta-Ready Content",
      ],
      cta: "Vuela Solo",
      popular: false,
      note: "PRECIO POR PERSONA"
    },
    {
      title: "Duo Session",
      price: "50€",
      duration: "1h 30min (1 Batería)",
      description: "¿Quién aguanta más arriba? Pique sano mientras levitáis frente al imponente castillo.",
      icon: <Waves size={44} />,
      features: [
        "Shared Board",
        "Doble Adrenalina",
        "Competición Radical",
        "Todo Incluido",
      ],
      cta: "Vuelo Duo",
      popular: true,
      note: "PRECIO POR PERSONA"
    },
    {
      title: "Pro Pack 4",
      price: "230€",
      duration: "4 Baterías Full",
      description: "Para los que se han viciado de verdad. Conviértete en el dueño absoluto de la costa.",
      icon: <Gauge size={44} />,
      features: [
        "4 Full Sessions",
        "Solo para ti",
        "Save 70€ Now",
        "Master the Foil",
      ],
      cta: "Go Pro",
      popular: false,
      note: "TU PACK NOMINAL"
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
            Choose Your <br />
            <span className="text-brand-cyan">Weapon</span>
          </h2>
          <p className="text-white/40 text-2xl max-w-xl font-black uppercase italic tracking-widest">
            Sin rollos corporativos. Solo tú volando sobre el mediterráneo.
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
                {plan.title !== "Pro Pack 4" && (
                  <span className="text-2xl font-black opacity-30 uppercase group-hover:text-brand-dark/50">/ pers</span>
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
                  href={`https://wa.me/34644026066?text=Hola! Quiero reservar: ${plan.title}.`}
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
                
                <div className="text-[10px] font-black mt-6 opacity-20 uppercase tracking-[0.3em] group-hover:opacity-100 group-hover:text-brand-dark">
                   {plan.note} — {plan.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modalities;
