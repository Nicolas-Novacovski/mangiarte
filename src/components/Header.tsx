import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MapPin, UtensilsCrossed, Sparkles } from 'lucide-react';
import { MangiarteLogo } from './MangiarteLogo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const desktopNavClass = `cursor-pointer font-sans-body text-xs tracking-wider font-bold transition-colors hover:text-[var(--saffron)] ${
    isScrolled ? 'text-[var(--espresso)]' : 'text-[var(--paper-white)]'
  }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[var(--ivory)]/95 backdrop-blur-md shadow-md py-3 sm:py-3.5' 
            : 'bg-transparent py-4 sm:py-5 md:py-8'
        }`}
      >
        <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <div className="cursor-pointer z-50 relative" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <MangiarteLogo size={isScrolled ? 'sm' : 'md'} theme="light" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('menu')} className={desktopNavClass}>Cardápio</button>
            <button onClick={() => scrollTo('galeria')} className={desktopNavClass}>Galeria</button>
            <button onClick={() => scrollTo('contato')} className={desktopNavClass}>Localização</button>
            <button onClick={() => scrollTo('contato')} className="cursor-pointer ml-2 px-5 py-2.5 rounded-sm bg-[var(--tomato)] text-white text-xs tracking-wider font-bold hover:bg-[#a02c25] transition-colors flex items-center gap-2 shadow-sm">
              <MapPin size={14} /> Como chegar
            </button>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className={`md:hidden p-2.5 rounded-xl cursor-pointer z-50 relative min-w-[44px] min-h-[44px] flex items-center justify-center transition-all ${
              isScrolled || isMobileMenuOpen 
                ? 'text-[var(--espresso)] bg-black/5 hover:bg-black/10' 
                : 'text-[var(--espresso)] bg-white/80 backdrop-blur-md shadow-sm border border-stone-200/50'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop & Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 left-0 right-0 pt-24 pb-8 px-6 bg-[var(--ivory)] border-b border-[#d6d2c4] shadow-2xl flex flex-col gap-4 md:hidden z-40 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex flex-col gap-1.5">
                <button 
                  onClick={() => scrollTo('menu')} 
                  className="w-full flex items-center justify-between p-3.5 rounded-xl hover:bg-black/5 active:bg-black/10 text-[var(--espresso)] font-bold text-sm tracking-wider uppercase transition-colors text-left"
                >
                  <span className="flex items-center gap-3">
                    <UtensilsCrossed size={18} className="text-[var(--tomato)]" />
                    <span>Cardápio</span>
                  </span>
                  <span className="text-[10px] text-stone-500 font-normal lowercase tracking-normal">Executivo & À la carte</span>
                </button>

                <button 
                  onClick={() => scrollTo('galeria')} 
                  className="w-full flex items-center justify-between p-3.5 rounded-xl hover:bg-black/5 active:bg-black/10 text-[var(--espresso)] font-bold text-sm tracking-wider uppercase transition-colors text-left"
                >
                  <span className="flex items-center gap-3">
                    <Sparkles size={18} className="text-[var(--tomato)]" />
                    <span>Galeria de Fotos</span>
                  </span>
                  <span className="text-[10px] text-stone-500 font-normal lowercase tracking-normal">Pratos & Momentos</span>
                </button>

                <button 
                  onClick={() => scrollTo('contato')} 
                  className="w-full flex items-center justify-between p-3.5 rounded-xl hover:bg-black/5 active:bg-black/10 text-[var(--espresso)] font-bold text-sm tracking-wider uppercase transition-colors text-left"
                >
                  <span className="flex items-center gap-3">
                    <MapPin size={18} className="text-[var(--tomato)]" />
                    <span>Localização & Horários</span>
                  </span>
                  <span className="text-[10px] text-stone-500 font-normal lowercase tracking-normal">Shopping Água Verde</span>
                </button>
              </div>

              <div className="pt-3 border-t border-black/10 flex flex-col gap-2.5">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Shopping+Água+Verde+Curitiba"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cursor-pointer w-full py-3.5 rounded-xl bg-[var(--tomato)] hover:bg-[#a02c25] active:scale-[0.98] text-white text-xs tracking-wider uppercase font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MapPin size={16} /> Abrir Rota no Google Maps
                </a>
                
                <p className="text-center text-[11px] text-stone-500 pt-1">
                  Shopping Água Verde • Praça de Alimentação
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
