const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-black italic tracking-tighter uppercase leading-none">
            Peñíscola <br />
            <span className="text-brand-cyan text-lg">E-foil Experience</span>
          </div>
          
          <div className="flex gap-8 text-sm text-white/40 font-medium">
            <a href="#" className="hover:text-brand-cyan transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-brand-cyan transition-colors">Privacidad</a>
            <a href="#" className="hover:text-brand-cyan transition-colors">Cookies</a>
          </div>

          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Peñíscola E-foil Experience. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
