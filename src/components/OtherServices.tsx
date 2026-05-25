"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const OtherServices = () => {
  const { language, t } = useLanguage();
  const s = t.servicesPage;

  const activities = [
    {
      id: "efoil",
      title: "eFoil",
      desc: language === 'es' ? 'La joya de la corona. Levitación pura sobre el mar con propulsión eléctrica frente al castillo.' : language === 'fr' ? 'Le joyau de la couronne. Lévitation pure au-dessus de la mer avec propulsion électrique devant le château.' : 'The crown jewel. Pure levitation above the sea with electric propulsion in front of the castle.',
      href: `#experiencia`,
      tag: t.experience.joyaCorona,
      image: "/assets/20210929_104220.jpg",
      isAnchor: true
    },

    {
      id: "excursiones",
      title: s.excursiones.title,
      desc: language === 'es' ? 'Sunrise Tour y Tour Travesía Cultural en kayak o paddle surf alrededor del castillo. Grutas, snorkel y relatos de Papa Luna.' : language === 'fr' ? 'Sunrise Tour et Tour Traversée Culturelle en kayak ou paddle surf. Grottes, snorkeling et récits du Pape Luna.' : 'Sunrise Tour and Guided Cultural Tour in kayak or paddle surf. Sea caves, snorkeling, and stories of Pope Luna.',
      href: `/${language}/excursiones`,
      tag: language === 'es' ? 'Rutas Premium' : language === 'fr' ? 'Parcours Premium' : 'Premium Tours',
      image: "/assets/kayak/sun-rise-peniscola.jpg",
      isAnchor: false
    },
    {
      id: "paddle",
      title: s.paddle.title,
      desc: language === 'es' ? 'Alquiler libre y las excursiones al amanecer más mágicas de la Costa del Azahar. Tablas premium estables.' : language === 'fr' ? 'Location libre et balades matinales magiques sur la Costa del Azahar. Planches premium et stables.' : 'Free rental and the most magical sunrise tours of the Costa del Azahar. Stable premium boards.',
      href: `/${language}/paddle-surf`,
      tag: s.categoryPaddle,
      image: "/assets/paddle-surf/paddle-actividades-hz1080-min.jpg",
      isAnchor: false
    },
    {
      id: "kayak",
      title: s.kayak.title,
      desc: language === 'es' ? 'Alquiler de kayaks individuales y dobles sit-on-top estables. Explora los acantilados a tu propio ritmo.' : language === 'fr' ? 'Location de kayaks individuels et biplaces sit-on-top stables. Explorez la côte à votre rythme.' : 'Stable single and double sit-on-top kayak rentals. Explore the medieval cliffs at your own pace.',
      href: `/${language}/kayak`,
      tag: s.categoryPaddle,
      image: "/assets/kayak/kayak-peniscola.jpg",
      isAnchor: false
    },
    {
      id: "windsurf",
      title: s.windsurf.title,
      desc: language === 'es' ? 'Siente la velocidad deslizándote sobre el agua con el viento. Equipos easy-ride estables y aparejos ultraligeros.' : language === 'fr' ? 'Ressentez la vitesse en glissant sur l\'eau grâce au vent. Matériel d\'initiation stable et gréements légers.' : 'Feel the speed gliding over the water with the wind. Stable easy-ride gear and ultra-lightweight rigs.',
      href: `/${language}/windsurf`,
      tag: language === 'es' ? 'Viento y Adrenalina' : language === 'fr' ? 'Vent & Adrénaline' : 'Wind & Speed',
      image: "/assets/windsurf/20240712_164053.jpg",
      isAnchor: false
    },
    {
      id: "vela",
      title: s.vela.title,
      desc: language === 'es' ? 'Aprende el arte de la navegación con nuestros cursos de vela ligera guiado por patrones expertos.' : language === 'fr' ? 'Apprenez l\'art de la navigation avec nos cours de voile légère guidés par des skippers experts.' : 'Learn the art of navigation with our dinghy sailing courses guided by certified skippers.',
      href: `/${language}/vela-ligera`,
      tag: language === 'es' ? 'Navegación Clásica' : language === 'fr' ? 'Voile Classique' : 'Classic Sailing',
      image: "/assets/vela-ligera/20240624_103136.jpg",
      isAnchor: false
    },
    {
      id: "kitesurf",
      title: s.kitesurf.title,
      desc: language === 'es' ? 'Cursos de iniciación y perfeccionamiento en playas de viento constante. Instructores titulados y cometas de última generación.' : language === 'fr' ? 'Cours d\'initiation et de perfectionnement. Moniteurs diplômés et ailes de dernière génération.' : 'Initiation and advanced courses on high-wind beaches. Certified instructors and latest-generation kites.',
      href: `/${language}/kitesurf`,
      tag: language === 'es' ? 'Viento y Cometa' : language === 'fr' ? 'Vol & Cerf-volant' : 'Kite & Flight',
      image: "/assets/kitesurf/IMG_20190816_164852632.jpg",
      isAnchor: false
    },
    {
      id: "wingfoil",
      title: s.wingfoil.title,
      desc: language === 'es' ? 'Aprende a navegar sobre una tabla estable de paddle surf impulsado por un ala de viento.' : language === 'fr' ? 'Apprenez à naviguer sur une planche stable de paddle surf propulsé par une aile de vent.' : 'Learn to navigate on a stable paddle board propelled by a wind wing.',
      href: `/${language}/wingsup`,
      tag: language === 'es' ? 'Viento y SUP' : language === 'fr' ? 'Vent & SUP' : 'Wind & SUP',
      image: "/assets/wingfoil/20260522_174205.jpg",
      isAnchor: false
    },
    {
      id: "surf",
      title: s.surf.title,
      desc: language === 'es' ? 'Alquiler de tablas softboard y clases para coger tus primeras olas en la Playa Norte.' : language === 'fr' ? 'Location de planches softboard et cours pour prendre vos premières vagues sur la Plage Nord.' : 'Softboard rentals and lessons to catch your first waves at the North Beach.',
      href: `/${language}/surf`,
      tag: language === 'es' ? 'Olas Clásicas' : language === 'fr' ? 'Surf Classique' : 'Classic Surf',
      image: "/assets/20210905_171520.jpg",
      isAnchor: false
    },
    {
      id: "sup-pilates",
      title: s.supPilates.title,
      desc: language === 'es' ? 'Fuerza, flexibilidad y relajación mental sobre una tabla de paddle surf flotando en el mar.' : language === 'fr' ? 'Force, flexibilité et relaxation sur une planche de paddle surf flottant sur la mer.' : 'Strength, flexibility, and relaxation on a paddle board floating on the sea.',
      href: `/${language}/sup-pilates`,
      tag: language === 'es' ? 'Bienestar y Mar' : language === 'fr' ? 'Bien-être & Mer' : 'Wellness & Sea',
      image: "/assets/sup-pilates/activities-pilates-640.jpg",
      isAnchor: false
    },

  ];

  return (
    <section id="otras-actividades" className="bg-brand-dark text-white py-24 border-t-4 md:border-t-8 border-brand-cyan relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #00d1ff 1px, transparent 1px), linear-gradient(-45deg, #00d1ff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-4">
            {language === 'es' ? 'Nuestras' : language === 'fr' ? 'Nos' : 'Our'} <br />
            <span className="text-brand-cyan">{language === 'es' ? 'EXPERIENCIAS' : language === 'fr' ? 'EXPÉRIENCES' : 'EXPERIENCES'}</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl font-black italic tracking-widest max-w-2xl leading-tight">
            {language === 'es' 
              ? 'Elige tu aventura perfecta en las aguas templarias del Castillo de Peñíscola.' 
              : language === 'fr' 
              ? 'Choisissez votre aventure parfaite dans les eaux du château de Peñíscola.' 
              : 'Choose your perfect adventure in the pristine waters of Peñíscola Castle.'}
          </p>
        </motion.div>
 
        {/* Simplified Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {activities.map((act, i) => (
            <motion.div
              key={act.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-[420px] md:h-[460px] relative group overflow-hidden border border-white/10 hover:border-brand-cyan/80 hover:-translate-y-1.5 transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(0,209,255,0.25)]"
            >
              {/* Special highlight tag for eFoil */}
              {act.id === 'efoil' && (
                <span className="absolute top-0 right-0 bg-brand-cyan text-brand-dark px-4 py-1.5 font-black uppercase italic tracking-widest text-[9px] z-30 shadow-md">
                  {language === 'es' ? 'LA ESTRELLA' : language === 'fr' ? 'VEDETTE' : 'STAR EXPERIENCE'}
                </span>
              )}

              {/* Background Image Container */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div 
                  className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-112" 
                  style={act.image.includes("20230701") ? { transform: "rotate(2.2deg) scale(1.12)" } : {}}
                >
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Advanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/10 z-10 group-hover:from-brand-dark/85 group-hover:via-brand-dark/25 group-hover:to-transparent transition-all duration-500" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-20 flex flex-col h-full p-8 justify-end">
                <span className="font-black uppercase italic text-[9px] md:text-[10px] tracking-widest mb-2 text-brand-cyan block">
                  {act.tag}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-black mb-3 uppercase italic leading-tight text-white group-hover:text-brand-cyan transition-colors">
                  {act.title}
                </h3>
                
                <p className="text-white/70 mb-6 text-xs md:text-sm font-bold italic leading-relaxed max-w-md">
                  {act.desc}
                </p>
                
                <a
                  href={act.href}
                  className="inline-flex items-center gap-2 bg-brand-cyan text-brand-dark px-5 py-3 font-black text-[10px] md:text-xs uppercase tracking-wider italic -skew-x-12 hover:bg-white hover:text-brand-dark transition-all w-fit cursor-pointer shadow-[0_0_15px_rgba(0,209,255,0.15)] group-hover:scale-105"
                >
                  <span className="inline-block skew-x-12 flex items-center gap-2">
                    {act.id === 'efoil'
                      ? (language === 'es' ? 'Reservar eFoil' : language === 'fr' ? 'Réserver eFoil' : 'Book eFoil')
                      : (language === 'es' ? 'Ver Tarifas y Fotos' : language === 'fr' ? 'Tarifs & Photos' : 'View Rates & Photos')}
                    <ArrowRight size={12} />
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
