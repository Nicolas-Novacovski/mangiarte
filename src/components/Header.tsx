import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MapPin } from 'lucide-react';
import { MangiarteLogo } from './MangiarteLogo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
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

  const navLinkColor = isScrolled ? 'text-[var(--espresso)]' : 'text-white md:text-[var(--paper-white)] text-[var(--espresso)]';
  // Wait, in desktop, when not scrolled, they are over the green area, so white.
  // When scrolled, background is ivory, so dark.
  const desktopNavClass = `cursor-pointer font-sans-body text-xs tracking-wider font-bold transition-colors hover:text-[var(--saffron)] ${
    isScrolled ? 'text-[var(--espresso)]' : 'text-[var(--paper-white)]'
  }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[var(--ivory)] shadow-md py-3' : 'bg-transparent py-5 md:py-8'
      }`}
    >
      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <MangiarteLogo size={isScrolled ? 'sm' : 'md'} theme="light" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('menu')} className={desktopNavClass}>Cardápio</button>
          <button onClick={() => scrollTo('galeria')} className={desktopNavClass}>Galeria</button>
          <button onClick={() => scrollTo('contato')} className={desktopNavClass}>Localização</button>
          <button onClick={() => scrollTo('contato')} className="cursor-pointer ml-2 px-5 py-2.5 rounded-sm bg-[var(--tomato)] text-white text-xs tracking-wider font-bold hover:bg-[#a02c25] transition-colors flex items-center gap-2">
            <MapPin size={14} /> Como chegar
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-full cursor-pointer z-50 relative ${
            isScrolled || isMobileMenuOpen ? 'text-[var(--espresso)]' : 'text-[var(--espresso)] bg-white/50'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[var(--ivory)] border-b border-[#d6d2c4] py-6 px-6 flex flex-col gap-6 shadow-xl md:hidden"
          >
            <button onClick={() => scrollTo('menu')} className="cursor-pointer text-sm tracking-wider uppercase font-bold text-[var(--espresso)] text-left pb-2 border-b border-black/10">Cardápio</button>
            <button onClick={() => scrollTo('galeria')} className="cursor-pointer text-sm tracking-wider uppercase font-bold text-[var(--espresso)] text-left pb-2 border-b border-black/10">Galeria</button>
            <button onClick={() => scrollTo('contato')} className="cursor-pointer text-sm tracking-wider uppercase font-bold text-[var(--espresso)] text-left pb-2 border-b border-black/10">Localização</button>
            <button onClick={() => scrollTo('contato')} className="cursor-pointer mt-2 px-5 py-3 rounded-sm bg-[var(--tomato)] text-white text-xs tracking-wider font-bold flex items-center justify-center gap-2">
              <MapPin size={14} /> Como chegar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
