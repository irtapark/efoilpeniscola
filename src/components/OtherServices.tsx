"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
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
      id: "flyboard",
      title: s.flyboard.title,
      desc: language === 'es' ? 'Desafía la gravedad elevándote sobre el mar con chorros de agua a presión. Siente la adrenalina del vuelo puro.' : language === 'fr' ? 'Défiez la gravité en vous élevant au-dessus de la mer avec des jets d\'eau sous pression. Ressentez l\'adrénaline.' : 'Defy gravity flying above the sea with high-pressure water jets. Experience the adrenaline of pure flight.',
      href: `/${language}/flyboard`,
      tag: language === 'es' ? 'Vuelo y Adrenalina' : language === 'fr' ? 'Vol & Adrénaline' : 'Flight & Adrenaline',
      image: "/assets/flyboard/hero.png",
      isAnchor: false
    },
    {
      id: "jetski",
      title: s.jetski.title,
      desc: language === 'es' ? 'Alquila motos de agua biplazas de última generación con Nautic Riders. Opciones con monitor (sin licencia) o libre (con licencia).' : language === 'fr' ? 'Louez des jet-skis biplaces de dernière génération avec Nautic Riders. Options avec guide (sans permis) ou libre (avec permis).' : 'Rent latest-generation double jet skis with Nautic Riders. Options with a guide (no license) or free rental (licensed).',
      href: `/${language}/motos-de-agua`,
      tag: language === 'es' ? 'Velocidad y Adrenalina' : language === 'fr' ? 'Vitesse & Adrénaline' : 'Speed & Adrenaline',
      image: "/assets/jetski/hero.png",
      isAnchor: false
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
      image: "/assets/kayak/IMG_20220807_070521.jpg",
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
      desc: language === 'es' ? 'Aprende el arte de la navegación o alquila monocascos y catamaranes modernos guiado por patrones expertos.' : language === 'fr' ? 'Apprenez l\'art de la navigation ou louez des catamarans et dériveurs modernes guidés par des skippers experts.' : 'Learn the art of navigation or rent modern catamarans and dinghies guided by certified skippers.',
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
      image: "/assets/kitesurf/hero.png",
      isAnchor: false
    },
    {
      id: "wingfoil",
      title: s.wingfoil.title,
      desc: language === 'es' ? 'Aprende a volar sobre el mar con un ala inflable. La fusión definitiva del surf y el viento.' : language === 'fr' ? 'Apprenez à voler au-dessus de la mer avec une aile gonflable. La fusion ultime du surf et du vent.' : 'Learn to fly over the sea with an inflatable wing. The ultimate fusion of wind and surf.',
      href: `/${language}/wingfoil`,
      tag: language === 'es' ? 'Foil de Vanguardia' : language === 'fr' ? 'Hydrofoil Moderne' : 'Modern Hydrofoil',
      image: "/assets/wingfoil/hero.png",
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
      id: "banana",
      title: s.banana.title,
      desc: language === 'es' ? 'La diversión en grupo definitiva. Deslízate a toda velocidad y desafía las olas en un emocionante recorrido en banana boat.' : language === 'fr' ? 'Le divertissement de groupe ultime. Glissez à toute vitesse et défiez les vagues lors d\'un tour passionnant en banana boat.' : 'The ultimate group fun. Glide at full speed and challenge the waves in a thrilling banana boat ride.',
      href: `/${language}/banana-boat`,
      tag: language === 'es' ? 'Adrenalina pura' : language === 'fr' ? 'Pure Adrénaline' : 'Pure Adrenaline',
      image: "/assets/banana/banana_boat_hero.png",
      isAnchor: false
    }
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
              className="h-[360px] md:h-[400px] relative group overflow-hidden border border-white/10 hover:border-brand-cyan transition-all duration-300 shadow-xl"
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
                  className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105" 
                  style={act.image.includes("20230701") ? { transform: "rotate(2.2deg) scale(1.08)" } : {}}
                >
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Advanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/20 z-10 group-hover:via-brand-dark/50 transition-all duration-300" />
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
