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
  const [bag, setBag] = useState(false);
  const [canister, setCanister] = useState(false);
  const [electricPump, setElectricPump] = useState(false);
  const [electricMotor, setElectricMotor] = useState(false);

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
  if (bag) extrasPrice += 3 * days;
  if (canister) extrasPrice += 3 * days;
  if (electricPump) extrasPrice += 15 * days;
  if (electricMotor) extrasPrice += 20 * days;

  const totalPrice = basePrice + extrasPrice;

  const currentDurationLabel = durations.find(d => d.code === duration)?.label || "";

  // WhatsApp Message Generation
  const getWhatsAppLink = () => {
    const phone = "34644026066";
    let message = "";

    if (isEs) {
      message = `¡Hola! Quiero reservar el Pack SUP Hinchable por Días en Peñíscola Experiences. Mi configuración es la siguiente:\n` +
                `- Duración: ${currentDurationLabel} (${days} días)\n` +
                `- Bolsa Estanca: ${bag ? "Sí (+3€/día)" : "No"}\n` +
                `- Bidón Estanco: ${canister ? "Sí (+3€/día)" : "No"}\n` +
                `- Hinchador Eléctrico: ${electricPump ? "Sí (+15€/día)" : "No"}\n` +
                `- Motor Eléctrico de Hélice: ${electricMotor ? "Sí (+20€/día)" : "No"}\n` +
                `- Precio Total Estimado: ${totalPrice}€\n` +
                `Por favor, confirmadme disponibilidad. ¡Gracias!`;
    } else if (isFr) {
      message = `Bonjour ! Je souhaite réserver le Pack SUP Gonflable par Jours chez Peñíscola Experiences. Ma configuration est :\n` +
                `- Durée : ${currentDurationLabel} (${days} jours)\n` +
                `- Sac Étanche : ${bag ? "Oui (+3€/jour)" : "Non"}\n` +
                `- Bidon Étanche : ${canister ? "Oui (+3€/jour)" : "Non"}\n` +
                `- Gonfleur Électrique : ${electricPump ? "Oui (+15€/jour)" : "Non"}\n` +
                `- Moteur Électrique d'Hélice : ${electricMotor ? "Oui (+20€/jour)" : "Non"}\n` +
                `- Prix Total Estimé : ${totalPrice}€\n` +
                `Merci de me confirmer la disponibilité.`;
    } else {
      message = `Hello! I would like to book the Inflatable SUP Pack by Days at Peñíscola Experiences. My configuration is:\n` +
                `- Duration: ${currentDurationLabel} (${days} days)\n` +
                `- Dry Bag: ${bag ? "Yes (+3€/day)" : "No"}\n` +
                `- Waterproof Canister: ${canister ? "Yes (+3€/day)" : "No"}\n` +
                `- Electric Pump: ${electricPump ? "Yes (+15€/day)" : "No"}\n` +
                `- Electric Propeller Motor: ${electricMotor ? "Yes (+20€/day)" : "No"}\n` +
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
            ? "Configura tu Pack SUP Hinchable" 
            : isFr 
            ? "Configurez Votre Pack SUP Gonflable" 
            : "Configure Your Inflatable SUP Pack"}
        </h3>
        <p className="text-[#4b5563] text-sm md:text-base font-bold mb-8 leading-relaxed">
          {isEs
            ? "Llévate el equipo completo a tu hotel, apartamento o camping en Peñíscola. Organiza tus excursiones libres con total flexibilidad."
            : isFr
            ? "Emportez l'équipement complet dans votre hôtel, appartement ou camping à Peñíscola. Organisez vos sorties libres en toute flexibilité."
            : "Take the complete gear to your hotel, apartment, or campsite in Peñíscola. Organize your free paddling tours with total flexibility."}
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
                  {isEs ? "Tabla SUP Itiwit hinchable 10'6\"" : isFr ? "Planche SUP Itiwit gonflable 10'6\"" : "Itiwit inflatable 10'6\" SUP board"}
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-cyan shrink-0" />
                  {isEs ? "Remo ajustable de aluminio" : isFr ? "Pagaie réglable en aluminium" : "Adjustable aluminum paddle"}
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-cyan shrink-0" />
                  {isEs ? "Hinchador manual y leash de seguridad" : isFr ? "Gonfleur manuel et leash de sécurité" : "Manual pump and safety leash"}
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-cyan shrink-0" />
                  {isEs ? "Chaleco salvavidas de flotabilidad" : isFr ? "Gilet d'aide à la flottabilité" : "Buoyancy safety life vest"}
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
                {/* Dry Bag */}
                <div 
                  onClick={() => setBag(!bag)} 
                  className={`flex justify-between items-center p-4 border cursor-pointer select-none transition-all duration-300 ${
                    bag ? "bg-brand-cyan/5 border-brand-cyan" : "bg-[#fafbfc] border-[#e5e7eb] hover:border-brand-cyan/40"
                  }`}
                >
                  <div>
                    <h5 className="font-black text-xs md:text-sm text-brand-dark mb-0.5">
                      {isEs ? "Bolsa Estanca (5L)" : isFr ? "Sac Étanche (5L)" : "Dry Bag (5L)"}
                    </h5>
                    <p className="text-[10px] md:text-xs text-[#6b7280] font-bold">
                      {isEs ? "Móvil y objetos secos" : isFr ? "Téléphone et objets secs" : "Phone and dry items"}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-black text-xs md:text-sm text-brand-dark">+3€/día</span>
                    {bag ? (
                      <ToggleRight className="w-8 h-8 text-brand-cyan" />
                    ) : (
                      <ToggleLeft className="w-8 h-8 text-[#9ca3af]" />
                    )}
                  </div>
                </div>

                {/* Canister */}
                <div 
                  onClick={() => setCanister(!canister)} 
                  className={`flex justify-between items-center p-4 border cursor-pointer select-none transition-all duration-300 ${
                    canister ? "bg-brand-cyan/5 border-brand-cyan" : "bg-[#fafbfc] border-[#e5e7eb] hover:border-brand-cyan/40"
                  }`}
                >
                  <div>
                    <h5 className="font-black text-xs md:text-sm text-brand-dark mb-0.5">
                      {isEs ? "Bidón Rígido Estanco (5L)" : isFr ? "Bidon Étanche (5L)" : "Waterproof Canister (5L)"}
                    </h5>
                    <p className="text-[10px] md:text-xs text-[#6b7280] font-bold">
                      {isEs ? "Protección rígida contra golpes" : isFr ? "Protection rigide" : "Rigid crushproof protection"}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-black text-xs md:text-sm text-brand-dark">+3€/día</span>
                    {canister ? (
                      <ToggleRight className="w-8 h-8 text-brand-cyan" />
                    ) : (
                      <ToggleLeft className="w-8 h-8 text-[#9ca3af]" />
                    )}
                  </div>
                </div>

                {/* Electric Pump */}
                <div 
                  onClick={() => setElectricPump(!electricPump)} 
                  className={`flex justify-between items-center p-4 border cursor-pointer select-none transition-all duration-300 ${
                    electricPump ? "bg-brand-cyan/5 border-brand-cyan" : "bg-[#fafbfc] border-[#e5e7eb] hover:border-brand-cyan/40"
                  }`}
                >
                  <div>
                    <h5 className="font-black text-xs md:text-sm text-brand-dark mb-0.5">
                      {isEs ? "Hinchador Eléctrico" : isFr ? "Gonfleur Électrique" : "Electric Pump"}
                    </h5>
                    <p className="text-[10px] md:text-xs text-[#6b7280] font-bold">
                      {isEs ? "Conexión a mechero del coche" : isFr ? "Prise allume-cigare de voiture" : "Connects to car lighter plug"}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-black text-xs md:text-sm text-brand-dark">+15€/día</span>
                    {electricPump ? (
                      <ToggleRight className="w-8 h-8 text-brand-cyan" />
                    ) : (
                      <ToggleLeft className="w-8 h-8 text-[#9ca3af]" />
                    )}
                  </div>
                </div>

                {/* Electric Motor */}
                <div 
                  onClick={() => setElectricMotor(!electricMotor)} 
                  className={`flex justify-between items-center p-4 border cursor-pointer select-none transition-all duration-300 ${
                    electricMotor ? "bg-brand-cyan/5 border-brand-cyan" : "bg-[#fafbfc] border-[#e5e7eb] hover:border-brand-cyan/40"
                  }`}
                >
                  <div>
                    <h5 className="font-black text-xs md:text-sm text-brand-dark mb-0.5">
                      {isEs ? "Motor Eléctrico Itiwit Assist" : isFr ? "Moteur Électrique d'Hélice" : "Electric Propeller Motor"}
                    </h5>
                    <p className="text-[10px] md:text-xs text-[#6b7280] font-bold">
                      {isEs ? "Asistencia al paleo con mando" : isFr ? "Assistance avec télécommande" : "Propelled fin with remote control"}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-black text-xs md:text-sm text-brand-dark">+20€/día</span>
                    {electricMotor ? (
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
