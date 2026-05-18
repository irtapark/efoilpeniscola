"use client";

import { motion } from "framer-motion";
import { User, Users, CheckCircle2, Phone, Clock, Battery, Zap, Rocket, Star, Compass, Wind, Waves } from "lucide-react";

const Modalities = () => {
  const plans = [
    {
      title: "Vuelo en Solitario",
      price: "75€",
      duration: "1h 30min (1 Batería)",
      description: "¡Tú, la tabla y el mar! Un instructor solo para ti para que le pilles el truco en tiempo récord.",
      icon: <Wind size={44} className="text-brand-cyan" />,
      features: [
        "Profe en exclusiva",
        "Material pro incluido",
        "Seguro (por si las moscas)",
        "Fotos para el Insta",
      ],
      cta: "¡Quiero volar solo!",
      popular: false,
      note: "PRECIO POR PERSONA"
    },
    {
      title: "Vuelo en Pareja",
      price: "50€",
      duration: "1h 30min (1 Batería)",
      description: "¿Quién aguantará más? Compartid tabla y risas mientras voláis frente al castillo.",
      icon: <Waves size={44} className="text-brand-cyan" />,
      features: [
        "Tabla compartida",
        "Pique sano garantizado",
        "Doble de risas",
        "Todo incluido",
      ],
      cta: "¡Volemos juntos!",
      popular: true,
      note: "PRECIO POR PERSONA"
    },
    {
      title: "Bono Experto",
      price: "230€",
      duration: "4 Sesiones (4 Baterías)",
      description: "Para los que se han viciado. 4 sesiones para que te conviertas en el rey de la costa.",
      icon: <Compass size={44} className="text-brand-cyan" />,
      features: [
        "4 sesiones completas",
        "Solo para ti",
        "Ahorra 70€ de una",
        "Dominio total del vuelo",
      ],
      cta: "¡Me he viciado!",
      popular: false,
      note: "TU PACK PERSONAL"
    },
  ];

  return (
    <section id="tarifas" className="bg-brand-dark text-white overflow-hidden relative">
      {/* Decorative Icons */}
      <Wind className="absolute top-20 left-10 text-white/5" size={150} />
      <Waves className="absolute bottom-20 right-10 text-white/5" size={180} />

      <div className="section-padding text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase italic tracking-tighter">
            ¿Cómo quieres <span className="text-brand-cyan">volar?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto font-medium">
            Elige tu estilo y prepárate para la mejor perspectiva de Peñíscola. ¡Sin rollos, todo el material está incluido!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] border-4 transition-all hover:-translate-y-2 flex flex-col ${
                plan.popular 
                  ? "bg-white/10 border-brand-cyan shadow-[0_0_30px_rgba(125,211,252,0.2)]" 
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-dark px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                  ¡Lo más top!
                </span>
              )}

              <div className="mb-6 flex justify-center bg-brand-dark/50 w-20 h-20 items-center rounded-3xl mx-auto border border-white/10">
                {plan.icon}
              </div>

              <h3 className="text-2xl font-black mb-2 uppercase italic leading-tight">{plan.title}</h3>
              
              <div className="flex flex-col items-center gap-2 mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-black text-brand-cyan tracking-tighter">{plan.price}</span>
                  {plan.title !== "Bono Experto" && (
                    <span className="text-xl font-bold text-brand-cyan/60 uppercase">/ pers.</span>
                  )}
                </div>
                <div className="flex flex-col items-center gap-1 text-xs font-bold uppercase tracking-widest text-white/40">
                  <span className="flex items-center gap-1.5"><Clock size={14} className="text-brand-yellow" /> {plan.duration}</span>
                </div>
              </div>

              <p className="text-white/70 mb-8 text-sm font-medium leading-relaxed">
                {plan.description}
              </p>

              <ul className="space-y-4 mb-10 text-left max-w-[200px] mx-auto flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Zap size={16} className="text-brand-yellow shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <div className="text-[10px] font-black text-brand-yellow mb-3 tracking-[0.2em] uppercase">
                   {plan.note}
                </div>
                <a
                  href={`https://wa.me/34644026066?text=Hola! Quiero reservar: ${plan.title}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3 ${
                    plan.popular 
                      ? "bg-brand-yellow text-brand-dark shadow-[0_10px_20px_rgba(255,234,0,0.2)] hover:shadow-[0_15px_25px_rgba(255,234,0,0.3)]" 
                      : "bg-white text-brand-dark hover:bg-brand-cyan hover:text-brand-dark"
                  }`}
                >
                  <Phone size={18} />
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] max-w-2xl mx-auto leading-loose">
            * Todo el material pro incluido: Neopreno, chaleco, casco con radio, tabla y seguro. La batería dura unos 90 minutos de pura adrenalina. El bono es nominal (¡lo sentimos!).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Modalities;
