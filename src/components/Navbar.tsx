"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Experiencia", href: "#experiencia" },
    { name: "Tarifas", href: "#tarifas" },
    { name: "Galería", href: "#galeria" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-brand-dark/90 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
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
              className="text-white/80 hover:text-brand-cyan transition-colors font-medium text-sm uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:644026066"
            className="bg-brand-yellow text-brand-dark px-5 py-2 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <Phone size={18} />
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
              className="text-white text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:644026066"
            className="btn-primary w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Phone size={20} />
            Llamar ahora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
