"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Gallery = () => {
  const { t } = useLanguage();
  const assets = [
    { type: "image", src: "/assets/IMG-20210629-WA0002.jpg" },
    { type: "image", src: "/assets/20210905_171520.jpg" },
    { type: "video", src: "/assets/VID_20220717_123740.mp4" },
    { type: "image", src: "/assets/20210916_150305.jpg" },
    { type: "image", src: "/assets/20210918_111535.jpg" },
    { type: "video", src: "/assets/VID_20220721_174021.mp4" },
    { type: "image", src: "/assets/20220625_190927.jpg" },
    { type: "image", src: "/assets/IMG-20210629-WA0003.jpg" },
    { type: "video", src: "/assets/VID_20220722_081226.mp4" },
    { type: "image", src: "/assets/IMG-20210917-WA0002.jpg" },
    { type: "image", src: "/assets/20230611_095127.jpg" },
    { type: "image", src: "/assets/20230615_104500.jpg" },
    { type: "image", src: "/assets/20210929_104220.jpg" },
    { type: "image", src: "/assets/20220502_120906.jpg" },
    { type: "image", src: "/assets/20230615_104602.jpg" },
    { type: "image", src: "/assets/IMG_20220721_174122.jpg" },
    { type: "video", src: "/assets/20230615_104347.mp4" },
    { type: "video", src: "/assets/VID_20220714_071755_1.mp4" },
  ];

  return (
    <section id="galeria" className="bg-brand-dark text-white py-32 overflow-hidden relative">
      {/* Decorative Radical Line */}
      <div className="absolute top-0 left-0 w-full h-2 bg-brand-cyan/20" />
      
      <div className="section-padding relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-[10rem] font-black uppercase italic tracking-tighter leading-[0.8]">
              {t.gallery.title1} <br />
              <span className="text-brand-cyan">{t.gallery.title2}</span>
            </h2>
            <p className="text-white/40 mt-10 font-bold uppercase tracking-widest italic">
              {t.gallery.subtitle}
            </p>
          </motion.div>
          
          <div className="hidden md:block">
            <span className="text-brand-cyan font-black text-[12rem] italic opacity-5 select-none pointer-events-none uppercase">
              Action
            </span>
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-2 space-y-4">
          {assets.map((asset, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative group overflow-hidden bg-brand-dark border border-white/5 break-inside-avoid"
            >
              {asset.type === "image" ? (
                <img
                  src={asset.src}
                  alt={`E-foil Peñíscola Action ${i + 1}`}
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
                  loading="lazy"
                />
              ) : (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
                >
                  <source src={asset.src} type="video/mp4" />
                </video>
              )}
              
              {/* Radical Overlay */}
              <div className="absolute inset-0 bg-brand-cyan/40 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                <span className="bg-white text-brand-dark px-3 py-1 text-xs font-black uppercase italic italic tracking-tighter">
                  #FOILEXPERIENCE
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
