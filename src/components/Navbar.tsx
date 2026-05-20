"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/translations";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#" },
    { name: t.nav.experience, href: "#experiencia" },
    { name: t.nav.rates, href: "#tarifas" },
    { name: t.nav.gallery, href: "#galeria" },
    { name: t.nav.contact, href: "#contacto" },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-brand-dark/95 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex flex-col group">
          <div className="text-white font-black text-xl md:text-2xl tracking-tighter leading-none uppercase italic">
            Peñíscola <br />
            <span className="text-brand-cyan text-sm md:text-base">E-foil Experience</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-brand-cyan transition-colors font-black text-[10px] uppercase tracking-[0.2em] italic"
            >
              {link.name}
            </a>
          ))}

          {/* Language Switcher */}
          <div className="flex items-center gap-2 border-l border-white/10 pl-6 ml-2">
            <Globe size={14} className="text-white/40" />
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`text-[10px] font-black tracking-widest px-2 py-1 rounded ${
                  language === lang.code ? "bg-brand-cyan text-brand-dark" : "text-white/40 hover:text-white"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <a
            href="tel:644026066"
            className="bg-brand-cyan text-brand-dark px-6 py-2 rounded-none -skew-x-12 font-black flex items-center gap-2 hover:scale-105 transition-transform italic text-sm"
          >
            <Phone size={16} fill="currentColor" />
            644 026 066
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-dark absolute top-full left-0 w-full p-6 border-t border-white/10 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-lg font-black uppercase italic tracking-tighter"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex gap-4 border-t border-white/10 pt-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => { setLanguage(lang.code); setMobileMenuOpen(false); }}
                className={`text-sm font-black tracking-widest px-4 py-2 rounded ${
                  language === lang.code ? "bg-brand-cyan text-brand-dark" : "text-white/40 border border-white/10"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <a
            href="tel:644026066"
            className="bg-brand-cyan text-brand-dark py-4 font-black uppercase italic text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.nav.callNow}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
