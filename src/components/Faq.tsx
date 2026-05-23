"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Faq = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Fallback in case translations are missing or not updated yet
  const faqData = t.faq || {
    title1: "Preguntas",
    title2: "Frecuentes",
    subtitle: "Todo lo que necesitas saber antes de volar sobre el mar en Peñíscola.",
    items: []
  };

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate dynamic JSON-LD FAQ schema for client side/SSR
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.items.map((item: { q: string; a: string }) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <section id="faq" className="bg-brand-dark text-white relative border-t border-white/10 py-20 md:py-40">
      {/* Dynamic JSON-LD Schema for the FAQs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-5xl md:text-8xl font-black mb-4 md:mb-6 uppercase italic tracking-tighter leading-none">
            {faqData.title1} <br />
            <span className="text-brand-cyan">{faqData.title2}</span>
          </h2>
          <p className="text-white/40 text-lg md:text-2xl font-black italic tracking-widest leading-tight">
            {faqData.subtitle}
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.items.map((item: { q: string; a: string }, index: number) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`border-l-4 transition-all duration-300 ${
                  isOpen ? "bg-white/5 border-brand-cyan" : "bg-white/2 border-white/10 hover:border-white/30"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 md:p-8 flex items-center justify-between gap-6 text-left focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle size={20} className={`shrink-0 transition-colors ${isOpen ? "text-brand-cyan" : "text-white/30 group-hover:text-white/60"}`} />
                    <span className="text-sm md:text-lg font-black uppercase tracking-tight italic group-hover:text-brand-cyan transition-colors">
                      {item.q}
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-white/30 transition-transform duration-300 ${
                      isOpen ? "transform rotate-180 text-brand-cyan" : "group-hover:text-white/60"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pl-12 text-white/60 text-xs md:text-base font-medium leading-relaxed max-w-3xl">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
