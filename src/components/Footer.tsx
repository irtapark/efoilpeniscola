import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-dark text-white border-t border-white/10 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="text-3xl font-black italic tracking-tighter uppercase leading-none">
            Peñíscola <br />
            <span className="text-brand-cyan text-xl">E-foil Experience</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
            <a href="#" className="hover:text-brand-cyan transition-colors">Legal</a>
            <a href="#" className="hover:text-brand-cyan transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-cyan transition-colors">Cookies</a>
          </div>

          <p className="text-white/20 text-[10px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} Peñíscola E-foil Experience. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
