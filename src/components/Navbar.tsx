"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/translations";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileActivitiesOpen, setMobileActivitiesOpen] = useState(false);
  
  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const isHomepage = pathname === `/${language}` || pathname === `/${language}/` || pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: `/${language}` },
    { name: "eFoil", href: `/${language}#experiencia` },
    { name: t.nav.excursiones, href: `/${language}/excursiones` },
    { name: t.nav.contact, href: `/${language}#contacto` },
  ];

  const activities = [
    { name: t.servicesPage.paddle.title, href: `/${language}/paddle-surf` },
    { name: t.servicesPage.kayak.title, href: `/${language}/kayak` },
    { name: t.servicesPage.windsurf.title, href: `/${language}/windsurf` },
    { name: t.servicesPage.vela.title, href: `/${language}/vela-ligera` },
    { name: t.servicesPage.kitesurf.title, href: `/${language}/kitesurf` },
    { name: t.servicesPage.wingfoil.title, href: `/${language}/wingsup` },
    { name: t.servicesPage.surf.title, href: `/${language}/surf` },
    { name: t.servicesPage.supPilates.title, href: `/${language}/sup-pilates` },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled || !isHomepage 
          ? "bg-brand-dark/95 backdrop-blur-md py-4 shadow-lg border-slate-200/50" 
          : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href={`/${language}`} className="flex flex-col group">
          <div className="text-white font-black text-xl md:text-2xl tracking-tighter leading-none uppercase italic">
            Peñíscola <br />
            <span className="text-brand-cyan text-sm md:text-base">Experiences</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <a
            href={`/${language}`}
            className="text-white/80 hover:text-brand-cyan transition-colors font-black text-[9px] lg:text-[10px] uppercase tracking-[0.15em] italic"
          >
            {t.nav.home}
          </a>
          <a
            href={`/${language}#experiencia`}
            className="text-white/80 hover:text-brand-cyan transition-colors font-black text-[9px] lg:text-[10px] uppercase tracking-[0.15em] italic"
          >
            eFoil
          </a>
          <a
            href={`/${language}/excursiones`}
            className="text-brand-cyan hover:text-white transition-colors font-black text-[9px] lg:text-[10px] uppercase tracking-[0.15em] italic flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse shrink-0" />
            {t.nav.excursiones}
          </a>

          {/* Premium Activities Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-white/80 hover:text-brand-cyan transition-colors font-black text-[9px] lg:text-[10px] uppercase tracking-[0.15em] italic flex items-center gap-1 cursor-pointer"
            >
              {t.nav.activities}
              <ChevronDown size={12} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-brand-cyan' : ''}`} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-52 z-50"
                >
                  <div className="bg-white border border-slate-200 p-1 flex flex-col gap-1 shadow-2xl rounded-none">
                    {activities.map((act) => (
                      <a
                        key={act.name}
                        href={act.href}
                        className="text-brand-dark hover:bg-brand-dark hover:text-white transition-all font-black text-[11px] uppercase tracking-[0.12em] italic py-2 px-3 block rounded-none hover:pl-4 duration-200"
                      >
                        {act.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href={`/${language}#contacto`}
            className="text-white/80 hover:text-brand-cyan transition-colors font-black text-[9px] lg:text-[10px] uppercase tracking-[0.15em] italic"
          >
            {t.nav.contact}
          </a>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 border-l border-white/10 pl-4 ml-1">
            <Globe size={14} className="text-white/40" />
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  router.push(`/${lang.code}`);
                }}
                className={`text-[10px] font-black tracking-widest px-2 py-1 rounded cursor-pointer ${
                  language === lang.code ? "bg-brand-cyan text-brand-dark" : "text-white/40 hover:text-white"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <a
            href="tel:644026066"
            className="bg-brand-cyan text-brand-dark px-5 py-2 rounded-none -skew-x-12 font-black flex items-center gap-2 hover:scale-105 transition-transform italic text-sm"
          >
            <Phone size={16} fill="currentColor" />
            644 026 066
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brand-dark absolute top-full left-0 w-full p-6 border-t border-white/10 flex flex-col gap-6 overflow-hidden z-40"
          >
            <a
              href={`/${language}`}
              className="text-white text-lg font-black uppercase italic tracking-tighter"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.home}
            </a>
            <a
              href={`/${language}#experiencia`}
              className="text-white text-lg font-black uppercase italic tracking-tighter"
              onClick={() => setMobileMenuOpen(false)}
            >
              eFoil
            </a>
            <a
              href={`/${language}/excursiones`}
              className="text-brand-cyan text-lg font-black uppercase italic tracking-tighter flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse shrink-0" />
              {t.nav.excursiones}
            </a>

            {/* Mobile Activities Accordion */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileActivitiesOpen(!mobileActivitiesOpen)}
                className="text-white text-lg font-black uppercase italic tracking-tighter flex items-center justify-between cursor-pointer w-full text-left"
              >
                {t.nav.activities}
                <ChevronDown size={20} className={`transition-transform duration-300 ${mobileActivitiesOpen ? 'rotate-180 text-brand-cyan' : ''}`} />
              </button>

              <AnimatePresence>
                {mobileActivitiesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-3 pl-4 mt-3 border-l-2 border-brand-cyan/20"
                  >
                    {activities.map((act) => (
                      <a
                        key={act.name}
                        href={act.href}
                        className="text-white/70 hover:text-brand-cyan transition-colors font-black text-sm uppercase tracking-wider italic py-1"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileActivitiesOpen(false);
                        }}
                      >
                        {act.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href={`/${language}#contacto`}
              className="text-white text-lg font-black uppercase italic tracking-tighter"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </a>

            <div className="flex gap-4 border-t border-white/10 pt-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setMobileMenuOpen(false);
                    router.push(`/${lang.code}`);
                  }}
                  className={`text-sm font-black tracking-widest px-4 py-2 rounded cursor-pointer ${
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
