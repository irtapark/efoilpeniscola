"use client";

import { useState } from "react";
import { MessageCircle, ShieldCheck, ToggleLeft, ToggleRight, Check } from "lucide-react";
import { Language } from "@/translations";

interface SupPackConfiguratorProps {
  lang: Language;
}

type DurationType = "1day" | "2days" | "3days" | "1week" | "2weeks";

export default function SupPackConfigurator({ lang }: SupPackConfiguratorProps) {
  const [duration, setDuration] = useState<DurationType>("1day");
  const [leash, setLeash] = useState(false);
  const [vest, setVest] = useState(false);

  const isEs = lang === "es";
  const isFr = lang === "fr";

  const durations = [
    { code: "1day" as DurationType, label: isEs ? "1 Día" : isFr ? "1 Jour" : "1 Day", days: 1, price: 35 },
    { code: "2days" as DurationType, label: isEs ? "2 Días" : isFr ? "2 Jours" : "2 Days", days: 2, price: 45 },
    { code: "3days" as DurationType, label: isEs ? "3 Días" : isFr ? "3 Jours" : "3 Days", days: 3, price: 55 },
    { code: "1week" as DurationType, label: isEs ? "1 Semana" : isFr ? "1 Semaine" : "1 Week", days: 7, price: 75 },
    { code: "2weeks" as DurationType, label: isEs ? "2 Semanas" : isFr ? "2 Semaines" : "2 Weeks", days: 14, price: 115 },
  ];

  const durationDaysMap = {
    "1day": 1,
    "2days": 2,
    "3days": 3,
    "1week": 7,
    "2weeks": 14,
  };

  const basePrices = {
    "1day": 35,
    "2days": 45,
    "3days": 55,
    "1week": 75,
    "2weeks": 115,
  };

  const days = durationDaysMap[duration];
  const basePrice = basePrices[duration];

  let extrasPrice = 0;
  if (leash) extrasPrice += 3 * days;
  if (vest) extrasPrice += 5 * days;

  const totalPrice = basePrice + extrasPrice;

  const currentDurationLabel = durations.find(d => d.code === duration)?.label || "";

  // WhatsApp Message Generation
  const getWhatsAppLink = () => {
    const phone = "34644026066";
    let message = "";

    if (isEs) {
      message = `¡Hola! Quiero reservar el Pack SUP Rígido por Días en Peñíscola Experiences. Mi configuración es la siguiente:\n` +
                `- Duración: ${currentDurationLabel} (${days} días)\n` +
                `- Leash (Invento): ${leash ? "Sí (+3€/día)" : "No"}\n` +
                `- Chaleco Salvavidas: ${vest ? "Sí (+5€/día)" : "No"}\n` +
                `- Precio Total Estimado: ${totalPrice}€\n` +
                `Por favor, confirmadme disponibilidad. ¡Gracias!`;
    } else if (isFr) {
      message = `Bonjour ! Je souhaite réserver le Pack SUP Rigide par Jours chez Peñíscola Experiences. Ma configuration est :\n` +
                `- Durée : ${currentDurationLabel} (${days} jours)\n` +
                `- Leash (Leash de sécurité) : ${leash ? "Oui (+3€/jour)" : "Non"}\n` +
                `- Gilet de Sauvetage : ${vest ? "Oui (+5€/jour)" : "Non"}\n` +
                `- Prix Total Estimé : ${totalPrice}€\n` +
                `Merci de me confirmer la disponibilité.`;
    } else {
      message = `Hello! I would like to book the Rigid SUP Pack by Days at Peñíscola Experiences. My configuration is:\n` +
                `- Duration: ${currentDurationLabel} (${days} days)\n` +
                `- Leash (Safety leash): ${leash ? "Yes (+3€/day)" : "No"}\n` +
                `- Life Vest: ${vest ? "Yes (+5€/day)" : "No"}\n` +
                `- Estimated Total Price: ${totalPrice}€\n` +
                `Please confirm availability. Thank you!`;
    }

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-white border-2 border-brand-cyan/20 p-6 md:p-10 shadow-2xl relative overflow-hidden rounded-none max-w-4xl mx-auto my-12">
      {/* Decathlon highlighted banner */}
      <span className="absolute top-0 right-0 bg-[#0082C3] text-white px-4 py-1.5 font-black uppercase text-[9px] tracking-widest z-30 shadow-md">
        {isEs ? "NUEVO: PACK POR DÍAS" : isFr ? "NOUVEAU: PACK PAR JOURS" : "NEW: MULTI-DAY PACK"}
      </span>

      <div className="relative z-20">
        <h3 className="text-2xl md:text-4xl font-black mb-3 uppercase italic leading-none text-brand-dark">
          {isEs 
            ? "Configura tu Pack SUP Rígido" 
            : isFr 
            ? "Configurez Votre Pack SUP Rigide" 
            : "Configure Your Rigid SUP Pack"}
        </h3>
        <p className="text-[#4b5563] text-sm md:text-base font-bold mb-8 leading-relaxed">
          {isEs
            ? "Llévate el equipo rígido de gama alta a tu hotel, apartamento o camping en Peñíscola. Organiza tus excursiones libres con total flexibilidad."
            : isFr
            ? "Emportez l'équipement rigide haut de gamme dans votre hôtel, appartement ou camping à Peñíscola. Organisez vos sorties libres en toute flexibilité."
            : "Take the premium rigid gear to your hotel, apartment, or campsite in Peñíscola. Organize your free paddling tours with total flexibility."}
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Duration Selector & Included Items */}
          <div>
            <h4 className="font-black text-xs md:text-sm uppercase tracking-widest text-brand-cyan mb-4">
              {isEs ? "1. Duración del Alquiler" : isFr ? "1. Durée de la Location" : "1. Rental Duration"}
            </h4>
            <div className="flex flex-col gap-2 mb-6">
              {durations.map((d) => (
                <button
                  key={d.code}
                  onClick={() => setDuration(d.code)}
                  className={`flex justify-between items-center px-4 py-3 border font-black text-xs md:text-sm -skew-x-6 transition-all duration-300 ${
                    duration === d.code
                      ? "bg-brand-cyan text-brand-dark border-brand-cyan shadow-md"
                      : "bg-[#fafbfc] border-[#e2e8f0] text-brand-dark hover:border-brand-cyan"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {duration === d.code && <Check className="w-4 h-4" />}
                    {d.label}
                  </span>
                  <span>{d.price}€</span>
                </button>
              ))}
            </div>

            {/* What's included */}
            <div className="bg-[#fafbfc] border border-[#e5e7eb] p-5">
              <span className="font-black text-[9px] md:text-[10px] tracking-widest text-brand-cyan uppercase block mb-3">
                {isEs ? "INCLUIDO EN EL PACK BASE" : isFr ? "INCLUS DANS LE PACK BASE" : "INCLUDED IN THE BASE PACK"}
              </span>
              <ul className="space-y-2 text-[#374151] text-xs font-bold">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-cyan shrink-0" />
                  {isEs ? "Tabla de SUP rígida premium de alta estabilidad" : isFr ? "Planche de SUP rigide premium très stable" : "Premium rigid SUP board with high stability"}
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-cyan shrink-0" />
                  {isEs ? "Remo ajustable de aluminio de alta gama" : isFr ? "Pagaie réglable en aluminium haut de gamme" : "High-end adjustable aluminum paddle"}
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Optional Add-ons & Total */}
          <div className="flex flex-col h-full justify-between">
            <div>
              <h4 className="font-black text-xs md:text-sm uppercase tracking-widest text-brand-cyan mb-4">
                {isEs ? "2. Accesorios Opcionales" : isFr ? "2. Accessoires Optionnels" : "2. Optional Accessories"}
              </h4>
              <div className="space-y-3">
                {/* Leash */}
                <div 
                  onClick={() => setLeash(!leash)} 
                  className={`flex justify-between items-center p-4 border cursor-pointer select-none transition-all duration-300 ${
                    leash ? "bg-brand-cyan/5 border-brand-cyan" : "bg-[#fafbfc] border-[#e5e7eb] hover:border-brand-cyan/40"
                  }`}
                >
                  <div>
                    <h5 className="font-black text-xs md:text-sm text-brand-dark mb-0.5">
                      {isEs ? "Leash (Invento)" : isFr ? "Leash de Sécurité" : "Leash (Safety Leash)"}
                    </h5>
                    <p className="text-[10px] md:text-xs text-[#6b7280] font-bold">
                      {isEs ? "Cinta de seguridad para el tobillo" : isFr ? "Cordon de sécurité pour cheville" : "Safety cord for the ankle"}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-black text-xs md:text-sm text-brand-dark">+3€/día</span>
                    {leash ? (
                      <ToggleRight className="w-8 h-8 text-brand-cyan" />
                    ) : (
                      <ToggleLeft className="w-8 h-8 text-[#9ca3af]" />
                    )}
                  </div>
                </div>

                {/* Safety Vest */}
                <div 
                  onClick={() => setVest(!vest)} 
                  className={`flex justify-between items-center p-4 border cursor-pointer select-none transition-all duration-300 ${
                    vest ? "bg-brand-cyan/5 border-brand-cyan" : "bg-[#fafbfc] border-[#e5e7eb] hover:border-brand-cyan/40"
                  }`}
                >
                  <div>
                    <h5 className="font-black text-xs md:text-sm text-brand-dark mb-0.5">
                      {isEs ? "Chaleco Salvavidas" : isFr ? "Gilet de Sauvetage" : "Life Vest"}
                    </h5>
                    <p className="text-[10px] md:text-xs text-[#6b7280] font-bold">
                      {isEs ? "Chaleco de flotabilidad homologado" : isFr ? "Gilet d'aide à la flottabilité homologué" : "Approved buoyancy safety vest"}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-black text-xs md:text-sm text-brand-dark">+5€/día</span>
                    {vest ? (
                      <ToggleRight className="w-8 h-8 text-brand-cyan" />
                    ) : (
                      <ToggleLeft className="w-8 h-8 text-[#9ca3af]" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Total and WhatsApp Button */}
            <div className="mt-8 bg-brand-dark text-white p-6 -skew-x-3">
              <div className="flex justify-between items-center mb-4">
                <span className="font-black text-xs md:text-sm uppercase tracking-widest text-[#94a3b8]">
                  {isEs ? "TOTAL ESTIMADO:" : isFr ? "PRIX TOTAL ESTIMÉ :" : "ESTIMATED TOTAL:"}
                </span>
                <span className="text-3xl md:text-4xl font-black text-brand-cyan">{totalPrice}€</span>
              </div>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white py-4 font-black uppercase tracking-widest text-xs md:text-sm transition-all flex items-center justify-center gap-2 -skew-x-6 hover:scale-[1.02] shadow-[0_4px_20px_rgba(37,211,102,0.3)] duration-200"
              >
                <MessageCircle size={18} fill="currentColor" />
                {isEs ? "Reservar por WhatsApp" : isFr ? "Réserver par WhatsApp" : "Reserve on WhatsApp"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
