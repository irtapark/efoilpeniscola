"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Anchor, Sun, Camera, Compass, ShieldCheck, Clock, Zap, ArrowRight,
  Wind, MapPin, Users, LifeBuoy, Waves, X, ChevronLeft, ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Language, translations } from "@/translations";

interface ServiceLandingLayoutProps {
  lang: Language;
  sportKey: 'paddle' | 'kayak' | 'vela' | 'windsurf' | 'excursiones' | 'kitesurf' | 'wingfoil' | 'surf' | 'banana' | 'flyboard' | 'jetski';
}

interface SportMedia {
  hero: { type: 'image' | 'video'; src: string };
  gallery: { type: 'image' | 'video'; src: string }[];
}

const sportMediaMap: Record<string, SportMedia> = {
  paddle: {
    hero: { type: 'image', src: '/assets/kayak/IMG_20220807_070521.jpg' },
    gallery: [
      { type: 'image', src: '/assets/kayak/IMG_20220807_070521.jpg' },
      { type: 'image', src: '/assets/kayak/20230701_063035.jpg' },
      { type: 'image', src: '/assets/kayak/20230703_100811.jpg' },
      { type: 'image', src: '/assets/kayak/20230701_063405.jpg' },
      { type: 'image', src: '/assets/kayak/20230704_102749.jpg' },
      { type: 'image', src: '/assets/kayak/20230701_063412.jpg' },
      { type: 'image', src: '/assets/kayak/IMG-20240623-WA0044.jpg' }
    ]
  },
  kayak: {
    hero: { type: 'image', src: '/assets/kayak/kayak-peniscola.jpg' },
    gallery: [
      { type: 'video', src: '/assets/kayak/20230611_122254.mp4' },
      { type: 'image', src: '/assets/kayak/20240615_123240.jpg' },
      { type: 'image', src: '/assets/kayak/20240617_112916.jpg' },
      { type: 'image', src: '/assets/kayak/20230703_100811.jpg' },
      { type: 'image', src: '/assets/kayak/20230704_102749.jpg' },
      { type: 'image', src: '/assets/kayak/20230821_104752.jpg' },
      { type: 'image', src: '/assets/kayak/IMG-20230819-WA0000.jpg' },
      { type: 'image', src: '/assets/kayak/IMG-20240623-WA0044.jpg' },
      { type: 'image', src: '/assets/kayak/IMG_20220807_070521.jpg' }
    ]
  },
  excursiones: {
    hero: { type: 'image', src: '/assets/kayak/sun-rise-peniscola.jpg' },
    gallery: [
      { type: 'image', src: '/assets/kayak/sun-rise-peniscola.jpg' },
      { type: 'image', src: '/assets/kayak/20230703_100811.jpg' },
      { type: 'image', src: '/assets/kayak/20230701_063050.jpg' },
      { type: 'image', src: '/assets/kayak/20240617_112916.jpg' },
      { type: 'image', src: '/assets/kayak/20230701_063405.jpg' },
      { type: 'image', src: '/assets/kayak/20230821_104752.jpg' },
      { type: 'image', src: '/assets/kayak/20230701_063035.jpg' },
      { type: 'image', src: '/assets/kayak/IMG-20240623-WA0044.jpg' }
    ]
  },
  vela: {
    hero: { type: 'image', src: '/assets/vela-ligera/20240624_103136.jpg' },
    gallery: [
      { type: 'image', src: '/assets/vela-ligera/20240624_103136.jpg' },
      { type: 'image', src: '/assets/vela-ligera/20240624_104654.jpg' },
      { type: 'image', src: '/assets/vela-ligera/20240624_104659.jpg' },
      { type: 'image', src: '/assets/vela-ligera/20240709_112833.jpg' },
      { type: 'image', src: '/assets/vela-ligera/20240709_113147.jpg' }
    ]
  },
  windsurf: {
    hero: { type: 'image', src: '/assets/windsurf/20240712_164053.jpg' },
    gallery: [
      { type: 'image', src: '/assets/windsurf/20240712_164053.jpg' }
    ]
  },
  kitesurf: {
    hero: { type: 'image', src: '/assets/kitesurf/hero.png' },
    gallery: [
      { type: 'image', src: '/assets/kitesurf/hero.png' }
    ]
  },
  wingfoil: {
    hero: { type: 'image', src: '/assets/wingfoil/hero.png' },
    gallery: [
      { type: 'image', src: '/assets/wingfoil/hero.png' }
    ]
  },
  surf: {
    hero: { type: 'image', src: '/assets/20210905_171520.jpg' },
    gallery: [
      { type: 'image', src: '/assets/20210905_171520.jpg' }
    ]
  },
  banana: {
    hero: { type: 'image', src: '/assets/banana/banana_boat_hero.png' },
    gallery: [
      { type: 'image', src: '/assets/banana/banana_boat_hero.png' }
    ]
  },
  flyboard: {
    hero: { type: 'image', src: '/assets/flyboard/PHOTO-2026-03-05-13-45-06-22.jpg' },
    gallery: [
      { type: 'image', src: '/assets/flyboard/PHOTO-2026-03-05-13-45-06-22.jpg' },
      { type: 'image', src: '/assets/flyboard/PHOTO-2026-03-05-13-45-06-21.jpg' },
      { type: 'image', src: '/assets/flyboard/PHOTO-2026-03-05-13-45-06-18.jpg' }
    ]
  },
  jetski: {
    hero: { type: 'image', src: '/assets/jetski/hero.png' },
    gallery: [
      { type: 'image', src: '/assets/jetski/hero.png' }
    ]
  }
};

const getHorizonCorrectionStyle = (src: string) => {
  if (src && src.includes("20230701")) {
    return { transform: "rotate(2.2deg) scale(1.08)" };
  }
  return {};
};

const getFeatureIcons = (key: string) => {
  switch (key) {
    case 'paddle':
      return [
        <Anchor key="anchor" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <Compass key="compass" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <Camera key="camera" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <ShieldCheck key="shield" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />
      ];
    case 'kayak':
      return [
        <Anchor key="anchor" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <ShieldCheck key="shield" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <Compass key="compass" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <Camera key="camera" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />
      ];
    case 'vela':
      return [
        <Anchor key="anchor" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <Users key="users" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <MapPin key="map" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <ShieldCheck key="shield" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />
      ];
    case 'windsurf':
      return [
        <Waves key="waves" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <Wind key="wind" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <Compass key="compass" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <ShieldCheck key="shield" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />
      ];
    case 'excursiones':
      return [
        <Users key="users" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <Compass key="compass" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <Camera key="camera" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <Waves key="waves" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />
      ];
    case 'kitesurf':
      return [
        <Zap key="zap" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <Wind key="wind" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <Compass key="compass" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <ShieldCheck key="shield" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />
      ];
    case 'wingfoil':
      return [
        <Waves key="waves" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <Wind key="wind" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <LifeBuoy key="buoy" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <ShieldCheck key="shield" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />
      ];
    case 'surf':
      return [
        <Waves key="waves" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <Wind key="wind" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <Camera key="camera" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <ShieldCheck key="shield" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />
      ];
    case 'banana':
      return [
        <Waves key="waves" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <MapPin key="map" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <LifeBuoy key="buoy" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <Users key="users" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />
      ];
    case 'flyboard':
      return [
        <Waves key="waves" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <Zap key="zap" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <LifeBuoy key="buoy" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <ShieldCheck key="shield" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />
      ];
    case 'jetski':
      return [
        <Waves key="waves" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <Zap key="zap" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan animate-pulse" />,
        <Users key="users" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <ShieldCheck key="shield" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />
      ];
    default:
      return [
        <Anchor key="anchor" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <Compass key="compass" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <Camera key="camera" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />,
        <ShieldCheck key="shield" className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />
      ];
  }
};

const getRatesDetails = (key: string, lang: Language, p: any) => {
  const isEs = lang === 'es';
  const isFr = lang === 'fr';

  switch (key) {
    case 'paddle':
      return [
        {
          title: p.rental1,
          price: p.rental1Price,
          duration: "1 Hora",
          desc: isEs ? "Tabla, remo, leash y chaleco. Ve a tu bola." : isFr ? "Planche, pagaie, leash et gilet. Allez à votre rythme." : "Board, paddle, leash, and vest. Go on your own.",
          icon: <Clock className="w-8 h-8 text-brand-cyan" />,
          cta: p.ctaBook
        },
        {
          title: p.rental2,
          price: p.rental2Price,
          duration: "2 Horas",
          desc: isEs ? "Ideal para explorar más a fondo la bahía y el castillo." : isFr ? "Idéal pour explorer la baie et le château plus en détail." : "Ideal to explore the bay and the castle in detail.",
          icon: <Clock className="w-8 h-8 text-brand-cyan animate-pulse" />,
          cta: p.ctaBook
        },
        {
          title: p.excursionTitle,
          price: p.excursionPrice,
          duration: "1h 30m",
          desc: p.excursionDesc,
          icon: <Sun className="w-8 h-8 text-brand-cyan" />,
          cta: p.ctaBook,
          popular: true
        }
      ];
    case 'kayak':
      return [
        {
          title: p.rentalSingle,
          price: p.rentalSinglePrice,
          duration: "1h / 2h",
          desc: isEs ? "Kayak sit-on-top individual, pala y chaleco salvavidas." : isFr ? "Kayak monoplace sit-on-top, pagaie et gilet de sauvetage." : "Single sit-on-top kayak, paddle, and life vest.",
          icon: <Clock className="w-8 h-8 text-brand-cyan" />,
          cta: p.ctaBook
        },
        {
          title: p.rentalDouble,
          price: p.rentalDoublePrice,
          duration: "1h / 2h",
          desc: isEs ? "Kayak sit-on-top doble para ir acompañado. ¡Doble diversión!" : isFr ? "Kayak biplace sit-on-top pour naviguer à deux. Double plaisir !" : "Double sit-on-top kayak to go with a partner. Double the fun!",
          icon: <Clock className="w-8 h-8 text-brand-cyan animate-pulse" />,
          cta: p.ctaBook
        },
        {
          title: p.excursionTitle,
          price: p.excursionPrice,
          duration: "1h 30m",
          desc: p.excursionDesc,
          icon: <Sun className="w-8 h-8 text-brand-cyan" />,
          cta: p.ctaBook,
          popular: true
        }
      ];
    case 'vela':
      return [
        {
          title: p.rentalSingle,
          price: p.rentalSinglePrice,
          duration: "1h / 2h",
          desc: isEs ? "Alquiler de Catamarán para navegantes experimentados." : isFr ? "Location de catamaran pour navigateurs expérimentés." : "Catamaran rental for experienced sailors.",
          icon: <Clock className="w-8 h-8 text-brand-cyan" />,
          cta: p.ctaBook
        },
        {
          title: p.rentalDouble,
          price: p.rentalDoublePrice,
          duration: "1h / 2h",
          desc: isEs ? "Alquiler de monocasco estable. Perfecto para compartir." : isFr ? "Location de dériveur stable. Parfait pour partager." : "Stable dinghy rental. Perfect for sharing.",
          icon: <Clock className="w-8 h-8 text-brand-cyan animate-pulse" />,
          cta: p.ctaBook
        },
        {
          title: p.excursionTitle,
          price: p.excursionPrice,
          duration: "1h 30m",
          desc: p.excursionDesc,
          icon: <Sun className="w-8 h-8 text-brand-cyan" />,
          cta: p.ctaBook,
          popular: true
        }
      ];
    case 'windsurf':
      return [
        {
          title: p.rentalSingle,
          price: p.rentalSinglePrice,
          duration: "1h / 2h",
          desc: isEs ? "Tabla de windsurf pro y aparejo completo según viento." : isFr ? "Planche à voile pro et gréement complet selon le vent." : "Pro windsurf board and full rig according to wind.",
          icon: <Clock className="w-8 h-8 text-brand-cyan" />,
          cta: p.ctaBook
        },
        {
          title: p.rentalDouble,
          price: p.rentalDoublePrice,
          duration: "5 Horas",
          desc: isEs ? "Bono multisesión. Utilízalo a tu ritmo durante la temporada." : isFr ? "Forfait multi-sessions. Utilisez-le à votre rythme." : "Multi-session voucher. Use it at your own pace.",
          icon: <Clock className="w-8 h-8 text-brand-cyan animate-pulse" />,
          cta: p.ctaBook
        },
        {
          title: p.excursionTitle,
          price: p.excursionPrice,
          duration: "1h 30m",
          desc: p.excursionDesc,
          icon: <Sun className="w-8 h-8 text-brand-cyan" />,
          cta: p.ctaBook,
          popular: true
        }
      ];
    case 'excursiones':
      return [
        {
          title: p.rentalSingle,
          price: p.rentalSinglePrice,
          duration: "1h 30m",
          desc: isEs 
            ? "En kayak o paddle surf. Ruta guiada alrededor del castillo, grutas y snorkel opcional con el amanecer. Las salidas varían según la hora de la salida del sol." 
            : isFr 
            ? "En kayak ou paddle surf. Randonnée guidée autour du château, grottes, snorkel optionnel et lever de soleil. Les départs varient selon l'heure du lever du soleil." 
            : "In kayak or paddle surf. Guided route around the castle, caves, optional snorkeling, and sunrise. Departure times vary based on the scheduled sunrise time.",
          icon: <Sun className="w-8 h-8 text-brand-cyan animate-pulse" />,
          cta: p.ctaBook,
          popular: true
        },
        {
          title: p.rentalDouble,
          price: p.rentalDoublePrice,
          duration: "1h 30m",
          desc: isEs 
            ? "En kayak o paddle surf. Ruta alrededor del castillo, grutas, snorkel y parada didáctica sobre la historia del Papa Luna. Más de 4 personas: 25€/pers; más de 10 personas: 20€/pers." 
            : isFr 
            ? "En kayak ou paddle surf. Randonnée autour du château, grottes, snorkel et arrêt didactique contant l'histoire de Pape Luna. Plus de 4 personnes : 25€/pers ; plus de 10 personnes : 20€/pers." 
            : "In kayak or paddle surf. Route around the castle, caves, snorkeling, and Pope Luna storytelling. Groups of more than 4 people: €25/pers; more than 10 people: €20/pers.",
          icon: <Compass className="w-8 h-8 text-brand-cyan" />,
          cta: p.ctaBook
        }
      ];
    case 'kitesurf':
      return [
        {
          title: p.rentalSingle,
          price: p.rentalSinglePrice,
          duration: "2h",
          desc: isEs ? "Primer contacto con la cometa en la arena. Fundamentos de viento." : isFr ? "Premier contact avec l'aile sur le sable. Bases du vent." : "First contact with the kite on the sand. Wind fundamentals.",
          icon: <Clock className="w-8 h-8 text-brand-cyan" />,
          cta: p.ctaBook
        },
        {
          title: p.rentalDouble,
          price: p.rentalDoublePrice,
          duration: "3h",
          desc: isEs ? "Navegación supervisada con equipo completo e intercomunicador." : isFr ? "Navigation supervisée avec équipement complet et radio." : "Supervised riding with full gear and radio intercom.",
          icon: <Clock className="w-8 h-8 text-brand-cyan animate-pulse" />,
          cta: p.ctaBook
        },
        {
          title: p.excursionTitle,
          price: p.excursionPrice,
          duration: "3 Horas",
          desc: p.excursionDesc,
          icon: <Sun className="w-8 h-8 text-brand-cyan" />,
          cta: p.ctaBook,
          popular: true
        }
      ];
    case 'wingfoil':
      return [
        {
          title: p.rentalSingle,
          price: p.rentalSinglePrice,
          duration: "2h",
          desc: isEs ? "Control del ala en tierra y primeros deslizamientos sobre tabla estable." : isFr ? "Contrôle de l'aile à terre et premières glisses." : "Wing control on land and first glides on a stable board.",
          icon: <Clock className="w-8 h-8 text-brand-cyan" />,
          cta: p.ctaBook
        },
        {
          title: p.rentalDouble,
          price: p.rentalDoublePrice,
          duration: "2h",
          desc: isEs ? "Alquiler de equipo completo de wingfoil de última generación." : isFr ? "Location de matériel complet de wingfoil dernière génération." : "Full premium wingfoil equipment rental.",
          icon: <Clock className="w-8 h-8 text-brand-cyan animate-pulse" />,
          cta: p.ctaBook
        },
        {
          title: p.excursionTitle,
          price: p.excursionPrice,
          duration: "2 Horas",
          desc: p.excursionDesc,
          icon: <Sun className="w-8 h-8 text-brand-cyan" />,
          cta: p.ctaBook,
          popular: true
        }
      ];
    case 'surf':
      return [
        {
          title: p.rentalSingle,
          price: p.rentalSinglePrice,
          duration: "1h / 2h",
          desc: isEs ? "Alquiler de softboard de iniciación y neopreno premium." : isFr ? "Location de softboard d'initiation et combinaison premium." : "Softboard rental and premium wetsuit.",
          icon: <Clock className="w-8 h-8 text-brand-cyan" />,
          cta: p.ctaBook
        },
        {
          title: p.rentalDouble,
          price: p.rentalDoublePrice,
          duration: "3 Clases",
          desc: isEs ? "Bono de 3 clases grupales para progresar de forma constante." : isFr ? "Forfait 3 cours collectifs pour progresser régulièrement." : "3 group classes voucher to progress consistently.",
          icon: <Clock className="w-8 h-8 text-brand-cyan animate-pulse" />,
          cta: p.ctaBook
        },
        {
          title: p.excursionTitle,
          price: p.excursionPrice,
          duration: "1h 30m",
          desc: p.excursionDesc,
          icon: <Sun className="w-8 h-8 text-brand-cyan" />,
          cta: p.ctaBook,
          popular: true
        }
      ];
    case 'banana':
      return [
        {
          title: p.rentalSingle,
          price: p.rentalSinglePrice,
          duration: "30 min",
          desc: p.excursionDesc,
          icon: <Clock className="w-8 h-8 text-brand-cyan animate-pulse" />,
          cta: p.ctaBook,
          popular: true
        }
      ];
    case 'flyboard':
      return [
        {
          title: p.rentalSingle,
          price: p.rentalSinglePrice,
          duration: "20 min",
          desc: p.excursionDesc,
          icon: <Zap className="w-8 h-8 text-brand-cyan animate-pulse" />,
          cta: p.ctaBook,
          popular: true
        }
      ];
    case 'jetski':
      return [
        {
          title: p.rentalSingle,
          price: p.rentalSinglePrice,
          duration: "30m / 60m",
          desc: isEs 
            ? "Excursión en moto de agua biplaza con monitor profesional. Gasolina incluida, sin fianza. Acompañante > 6 años gratis."
            : isFr 
            ? "Excursion en jet-ski biplace avec moniteur professionnel. Essence incluse, sans caution. Passager > 6 ans gratuit."
            : "Tandem jet ski tour with a professional guide. Fuel included, no deposit. Passenger > 6 years free.",
          icon: <Zap className="w-8 h-8 text-brand-cyan animate-pulse" />,
          cta: p.ctaBook,
          popular: true
        },
        {
          title: p.rentalDouble,
          price: p.rentalDoublePrice,
          duration: "60m / 120m",
          desc: isEs 
            ? "Alquiler libre para pilotos con titulación náutica válida. Gasolina incluida, requiere fianza de 500€."
            : isFr 
            ? "Location libre pour pilotes titulaires d'un permis de navigation. Essence incluse, caution de 500€ requise."
            : "Free rental for skippers with a valid nautical license. Fuel included, 500€ security deposit required.",
          icon: <Clock className="w-8 h-8 text-brand-cyan" />,
          cta: p.ctaBook
        }
      ];
    default:
      return [];
  }
};

export default function ServiceLandingLayout({ lang, sportKey }: ServiceLandingLayoutProps) {
  const t = translations[lang];
  const p = t.servicesPage[sportKey];
  const media = sportMediaMap[sportKey];

  const [activeMediaIndex, setActiveMediaIndex] = useState<number | null>(null);
  const [activeHeroIndex, setActiveHeroIndex] = useState<number>(0);

  useEffect(() => {
    setActiveHeroIndex(0);
  }, [sportKey]);

  const openLightbox = (index: number) => {
    setActiveMediaIndex(index);
  };

  const closeLightbox = () => {
    setActiveMediaIndex(null);
  };

  const nextMedia = () => {
    if (activeMediaIndex === null || !media?.gallery) return;
    setActiveMediaIndex((activeMediaIndex + 1) % media.gallery.length);
  };

  const prevMedia = () => {
    if (activeMediaIndex === null || !media?.gallery) return;
    setActiveMediaIndex((activeMediaIndex - 1 + media.gallery.length) % media.gallery.length);
  };

  const featureIcons = getFeatureIcons(sportKey);
  const features = [
    { title: p.f1Title, desc: p.f1Desc, icon: featureIcons[0] },
    { title: p.f2Title, desc: p.f2Desc, icon: featureIcons[1] },
    { title: p.f3Title, desc: p.f3Desc, icon: featureIcons[2] },
    { title: p.f4Title, desc: p.f4Desc, icon: featureIcons[3] }
  ];

  const rates = getRatesDetails(sportKey, lang, p);

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Gradient & Pattern */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.15),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #7dd3fc 1px, transparent 1px), linear-gradient(-45deg, #7dd3fc 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan text-xs font-black uppercase tracking-[0.2em] italic mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
              Peñíscola Experiences
            </div>

            <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase italic tracking-tighter leading-none">
              {p.heroTitle ? (
                <>
                  {p.heroTitle.split(' ').slice(0, 3).join(' ')} <br />
                  <span className="text-brand-cyan">
                    {p.heroTitle.split(' ').slice(3).join(' ')}
                  </span>
                </>
              ) : (
                <>
                  {p.title} <br />
                  <span className="text-brand-cyan">{lang === 'es' ? 'EN PEÑÍSCOLA' : lang === 'fr' ? 'À PEÑÍSCOLA' : 'IN PENISCOLA'}</span>
                </>
              )}
            </h1>

            <p className="text-white/70 text-lg md:text-xl font-bold italic tracking-wide max-w-xl leading-relaxed mb-10">
              {p.heroDesc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#tarifas"
                className="bg-brand-cyan text-brand-dark px-8 py-4 font-black uppercase tracking-wider italic hover:bg-white transition-all text-center flex items-center justify-center gap-2 group -skew-x-12 cursor-pointer"
              >
                {lang === 'es' ? 'Ver Tarifas' : lang === 'fr' ? 'Voir Tarifs' : 'View Rates'}
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`https://wa.me/34644026066?text=${encodeURIComponent(t.whatsapp.message + " " + p.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:border-brand-cyan px-8 py-4 font-black uppercase tracking-wider italic text-center flex items-center justify-center gap-2 -skew-x-12 transition-colors cursor-pointer"
              >
                <Zap size={16} className="text-brand-cyan" />
                {lang === 'es' ? 'Reserva Inmediata' : lang === 'fr' ? 'Réserver Directement' : 'Book Instantly'}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div 
              onClick={() => openLightbox(activeHeroIndex)}
              className="aspect-[4/5] bg-gradient-to-tr from-brand-cyan/20 to-brand-blue/10 border-l-4 border-brand-cyan p-2 relative overflow-hidden group shadow-[0_0_50px_rgba(14,165,233,0.1)] cursor-zoom-in"
            >
              {/* Media element */}
              {media?.gallery && media.gallery[activeHeroIndex] && (
                media.gallery[activeHeroIndex].type === "video" ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  >
                    <source src={media.gallery[activeHeroIndex].src} type="video/mp4" />
                  </video>
                ) : (
                  <div 
                    className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
                    style={getHorizonCorrectionStyle(media.gallery[activeHeroIndex].src)}
                  >
                    <img
                      src={media.gallery[activeHeroIndex].src}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )
              )}
              {/* Visual hover cue */}
              <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="bg-brand-dark/95 border border-brand-cyan/30 text-white font-bold uppercase italic tracking-widest text-[10px] md:text-xs px-4 py-2 flex items-center gap-2 -skew-x-12">
                  <Camera size={14} className="text-brand-cyan" />
                  {lang === 'es' ? 'Ver Galería' : lang === 'fr' ? 'Galerie' : 'View Gallery'}
                </div>
              </div>

              {/* Tiny thumbnails row overlay */}
              {media?.gallery && media.gallery.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-20 bg-brand-dark/90 backdrop-blur-md p-1.5 border border-white/10 max-w-[90%] overflow-x-auto shadow-2xl">
                  {media.gallery.slice(0, 5).map((asset, i) => {
                    const isLast = i === 4 && media.gallery.length > 5;
                    const isSelected = i === activeHeroIndex;
                    
                    return (
                      <div
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent opening lightbox
                          if (isLast) {
                            openLightbox(4);
                          } else {
                            setActiveHeroIndex(i);
                          }
                        }}
                        className={`w-10 h-10 md:w-14 md:h-14 relative aspect-square overflow-hidden bg-brand-dark border transition-all cursor-pointer flex-shrink-0 ${
                          isSelected ? "border-brand-cyan scale-105 z-10" : "border-white/10 hover:border-white/30"
                        }`}
                      >
                        {asset.type === "video" ? (
                          <div className="w-full h-full relative">
                            <video className="w-full h-full object-cover muted playsInline">
                              <source src={asset.src} type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                              <Zap size={10} className="text-brand-cyan animate-pulse" />
                            </div>
                          </div>
                        ) : (
                          <img src={asset.src} className="w-full h-full object-cover" alt="" />
                        )}
                        
                        {isLast && (
                          <div className="absolute inset-0 bg-brand-dark/80 flex flex-col items-center justify-center text-[10px] md:text-xs font-black text-brand-cyan uppercase italic tracking-tighter">
                            <span>+{media.gallery.length - 4}</span>
                            <span className="text-[6px] text-white/50 leading-none">FOTOS</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing / Rates Section (Moved to the Top!) */}
      <section id="tarifas" className="py-20 bg-brand-dark relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan text-[10px] font-black uppercase tracking-[0.2em] italic mb-4">
              {lang === 'es' ? 'Elige Tu Experiencia' : lang === 'fr' ? 'Choisissez Votre Expérience' : 'Choose Your Experience'}
            </div>
            <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-4 text-brand-cyan">
              {lang === 'es' ? 'TARIFAS' : lang === 'fr' ? 'TARIFS' : 'RATES'}
            </h2>
            <p className="text-white/40 text-sm md:text-base font-black italic tracking-widest max-w-xl mx-auto leading-tight">
              {p.ratesSubtitle}
            </p>
          </motion.div>

          <div className={`grid grid-cols-1 gap-8 mx-auto ${rates.length === 1 ? 'max-w-md' : rates.length === 2 ? 'lg:grid-cols-2 max-w-4xl' : 'lg:grid-cols-3 max-w-6xl'}`}>
            {rates.map((rate, i) => (
              <motion.div
                key={rate.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 md:p-10 border-l-4 flex flex-col w-full transition-all group hover:bg-brand-cyan/10 hover:border-brand-cyan ${
                  rate.popular 
                    ? "bg-brand-cyan/15 border-brand-cyan shadow-[0_0_40px_rgba(14,165,233,0.05)] z-10" 
                    : "bg-white/5 border-white/10"
                }`}
              >
                {rate.popular && (
                  <span className="absolute top-0 right-0 bg-brand-cyan text-brand-dark px-4 py-1.5 font-black uppercase italic tracking-widest text-[9px] md:text-xs">
                    {lang === 'es' ? 'EXCURSIÓN ESTRELLA' : lang === 'fr' ? 'MEILLEURE VENTE' : 'BEST SELLER'}
                  </span>
                )}

                <div className="mb-4 text-brand-cyan">
                  {rate.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-black mb-2 uppercase italic leading-tight">
                  {rate.title}
                </h3>
                
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl md:text-4xl font-black tracking-tighter text-white">{rate.price}</span>
                  <span className="text-xs font-black opacity-40 uppercase">/ {rate.duration}</span>
                </div>

                <p className="text-white/50 mb-8 text-xs md:text-sm font-bold italic leading-relaxed">
                  {rate.desc}
                </p>

                <a
                  href={`https://wa.me/34644026066?text=${encodeURIComponent(t.rates.waMessage + p.title + " - " + rate.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto w-full py-4 font-black uppercase tracking-widest text-xs md:text-sm transition-all flex items-center justify-center gap-2 -skew-x-12 ${
                    rate.popular 
                      ? "bg-brand-cyan text-brand-dark hover:bg-white" 
                      : "border border-white/20 text-white hover:bg-white hover:text-brand-dark hover:border-white"
                  }`}
                >
                  <Zap className="w-4 h-4 text-brand-dark" fill="currentColor" />
                  {lang === 'es' ? 'Reservar Ahora' : lang === 'fr' ? 'Réserver' : 'Book Now'}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section (Moved Up!) */}
      {media?.gallery && media.gallery.length > 0 && (
        <section className="py-20 bg-brand-dark/30 border-y border-white/5 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan text-[10px] font-black uppercase tracking-[0.2em] italic mb-4">
                {lang === 'es' ? 'Fotografía Real' : lang === 'fr' ? 'Photos Réelles' : 'Real Action'}
              </div>
              <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-4">
                {lang === 'es' ? 'Galería de' : lang === 'fr' ? 'Galerie de' : 'Gallery of'}{' '}
                <span className="text-brand-cyan">{p.title.toUpperCase()}</span>
              </h2>
              <p className="text-white/40 text-sm md:text-base font-black italic tracking-widest max-w-xl leading-tight">
                {lang === 'es' ? 'Fotografías de clientes reales en las murallas de Peñíscola' : lang === 'fr' ? 'Photos réelles de nos sessions à Peñíscola' : 'Real photos of our sessions in Peñíscola'}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {media.gallery.map((asset, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => openLightbox(i)}
                  className="relative aspect-square overflow-hidden bg-brand-dark border border-white/5 group -skew-x-3 hover:skew-x-0 transition-all duration-300 cursor-zoom-in shadow-lg"
                >
                  {asset.type === "video" ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    >
                      <source src={asset.src} type="video/mp4" />
                    </video>
                  ) : (
                    <div 
                      className="w-full h-full transition-all duration-700 group-hover:scale-110"
                      style={getHorizonCorrectionStyle(asset.src)}
                    >
                      <img
                        src={asset.src}
                        alt={`${p.title} Peñíscola ${i + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-brand-cyan/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-brand-dark/90 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan transform scale-90 group-hover:scale-100 transition-transform">
                      {asset.type === 'video' ? <Zap size={16} fill="currentColor" className="animate-pulse" /> : <Camera size={16} />}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Grid (Moved Down & Compacted!) */}
      <section className="py-20 max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan text-[10px] font-black uppercase tracking-[0.2em] italic mb-4">
            {lang === 'es' ? 'La Diferencia' : lang === 'fr' ? 'La Différence' : 'Our Quality'}
          </div>
          <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-4">
            {lang === 'es' ? 'Por Qué' : lang === 'fr' ? 'Pourquoi' : 'Why'}{' '}
            <span className="text-brand-cyan">{lang === 'es' ? 'ELEGIRNOS' : lang === 'fr' ? 'NOUS CHOISIR' : 'CHOOSE US'}</span>
          </h2>
          <p className="text-white/40 text-sm md:text-base font-black italic tracking-widest max-w-md">
            {p.featuresTitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 bg-white/5 border border-white/10 hover:border-brand-cyan/50 transition-all group flex flex-col"
            >
              <div className="mb-4 text-brand-cyan">
                {feat.icon}
              </div>
              <h3 className="text-lg font-black mb-2 uppercase italic group-hover:text-brand-cyan transition-colors">
                {feat.title}
              </h3>
              <p className="text-white/50 text-xs font-bold italic leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEO Copy Section (Compact & Relocated to the bottom!) */}
      <section className="py-16 bg-brand-dark/50 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            <div className="lg:col-span-4">
              <h2 className="text-xl md:text-3xl font-black uppercase italic tracking-tighter leading-tight text-brand-cyan">
                {p.seoHeading}
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-white/60 text-sm md:text-base font-medium leading-relaxed mb-6">
                {p.seoText}
              </p>
              <p className="text-brand-cyan/60 text-xs font-black uppercase italic tracking-[0.15em] leading-snug">
                {lang === 'es' 
                  ? '¡MONITORIZAMOS EL VIENTO DIARIAMENTE PARA BUSCAR LA ZONA SIN OLAS!' 
                  : lang === 'fr' 
                  ? 'NOUS SURVEILLONS LE VENT CHAQUE JOUR POUR RECHERCHER LE PLAN D\'EAU LE PLUS PLAT !' 
                  : 'WE MONITOR THE WIND DAILY TO CHOOSE THE MOST WAVELESS SPOT!'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium CTA to cross-sell eFoil */}
      <section className="py-16 bg-gradient-to-tr from-brand-dark via-brand-dark to-brand-blue/20 relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 border-2 border-brand-cyan/30 bg-brand-dark/80 backdrop-blur-md relative"
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-cyan text-brand-dark px-4 py-1 font-black text-[10px] uppercase tracking-widest italic -skew-x-12">
              {lang === 'es' ? 'EXPERIENCIA ULTIMATE' : lang === 'fr' ? 'EXPÉRIENCE ULTIME' : 'ULTIMATE EXPERIENCE'}
            </div>
            
            <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase italic tracking-tighter leading-tight">
              {lang === 'es' ? '¿Quieres Dar El Salto De Verdad?' : lang === 'fr' ? 'Envie De Passer Au Niveau Supérieur ?' : 'Ready To Take The Real Leap?'}
            </h3>
            
            <p className="text-white/70 text-xs md:text-base font-bold italic max-w-2xl mx-auto leading-relaxed mb-8">
              {lang === 'es' 
                ? `Prueba el eFoil. Vuela de verdad sobre el agua con motor eléctrico y gravedad cero frente al Castillo de Papa Luna. ¡Te descontamos un 10% en eFoil si has reservado ${p.title} con nosotros!`
                : lang === 'fr'
                ? `Essayez l'eFoil. Volez au-dessus de l'eau avec un moteur électrique et gravité zéro devant le château. Obtenez 10% de réduction sur l'eFoil si vous réservez du ${p.title} !`
                : `Try eFoil. Truly fly above the water with an electric motor and zero gravity in front of the Castle. Get a 10% discount on eFoil if you have booked ${p.title} with us!`}
            </p>

            <a
              href={`/${lang}#tarifas`}
              className="inline-flex bg-brand-cyan text-brand-dark px-8 py-4 font-black uppercase tracking-wider text-xs md:text-sm italic -skew-x-12 hover:scale-105 transition-transform"
            >
              {lang === 'es' ? 'Descubre el eFoil' : lang === 'fr' ? 'Découvrir l\'eFoil' : 'Discover eFoil'}
            </a>
          </motion.div>
        </div>
      </section>

      <Contact />
      <Footer />
      <WhatsAppButton />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeMediaIndex !== null && media?.gallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8 select-none"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-brand-cyan/20 border border-white/20 hover:border-brand-cyan rounded-full flex items-center justify-center text-white hover:text-brand-cyan transition-colors z-50 cursor-pointer"
            >
              <X size={24} />
            </button>

            {/* Navigation Controls */}
            {media.gallery.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevMedia();
                  }}
                  className="absolute left-6 w-12 h-12 bg-white/5 hover:bg-brand-cyan/20 border border-white/10 hover:border-brand-cyan rounded-full flex items-center justify-center text-white hover:text-brand-cyan transition-colors z-50 cursor-pointer"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextMedia();
                  }}
                  className="absolute right-6 w-12 h-12 bg-white/5 hover:bg-brand-cyan/20 border border-white/10 hover:border-brand-cyan rounded-full flex items-center justify-center text-white hover:text-brand-cyan transition-colors z-50 cursor-pointer"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Media Content Container */}
            <motion.div
              key={activeMediaIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {media.gallery[activeMediaIndex].type === "video" ? (
                <video
                  autoPlay
                  controls
                  loop
                  playsInline
                  className="max-w-full max-h-full object-contain shadow-[0_0_80px_rgba(14,165,233,0.15)] border border-white/10"
                >
                  <source src={media.gallery[activeMediaIndex].src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={media.gallery[activeMediaIndex].src}
                  alt={`${p.title} - ${activeMediaIndex + 1}`}
                  className="max-w-full max-h-full object-contain shadow-[0_0_80px_rgba(14,165,233,0.15)] border border-white/10"
                  style={getHorizonCorrectionStyle(media.gallery[activeMediaIndex].src)}
                />
              )}

              {/* Caption Indicator */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 text-xs md:text-sm font-black uppercase italic tracking-widest w-full text-center">
                {activeMediaIndex + 1} / {media.gallery.length} — {p.title}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
