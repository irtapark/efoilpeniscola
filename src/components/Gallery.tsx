"use client";

import { motion } from "framer-motion";

const Gallery = () => {
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
  ];

  return (
    <section id="galeria" className="bg-white">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-dark tracking-tight">Peñíscola E-foil Experience</h2>
          <p className="text-gray-500 text-lg">Echa un vistazo a la experiencia real. Síguenos en @foilexperience</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {assets.map((asset, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-2xl bg-gray-100"
            >
              {asset.type === "image" ? (
                <img
                  src={asset.src}
                  alt={`Experiencia E-foil ${i + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                >
                  <source src={asset.src} type="video/mp4" />
                </video>
              )}
              <div className="absolute inset-0 bg-brand-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="text-white font-bold text-lg drop-shadow-md">#PeñiscolaEfoil</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
