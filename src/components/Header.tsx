import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
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

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#ebe8dc]/90 backdrop-blur-md border-b border-[#d6d2c4] py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <MangiarteLogo size={isScrolled ? 'sm' : 'md'} theme="light" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          <button onClick={() => scrollTo('galeria')} className="cursor-pointer px-4 py-2 rounded-full border border-[#8b261b] text-[#8b261b] text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-[#8b261b] hover:text-white transition-colors">Galeria</button>
          <button onClick={() => scrollTo('menu')} className="cursor-pointer px-4 py-2 rounded-full border border-[#2c3522] text-[#2c3522] text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-[#2c3522] hover:text-white transition-colors">Cardápio</button>
          <button onClick={() => scrollTo('contato')} className="cursor-pointer px-4 py-2 rounded-full border border-[#2c3522] text-[#2c3522] text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-[#2c3522] hover:text-white transition-colors">Localização</button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#161616] cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            className="absolute top-full left-0 w-full bg-[#ebe8dc] border-b border-[#d6d2c4] py-6 px-6 flex flex-col gap-5 shadow-xl md:hidden"
          >
            <button onClick={() => scrollTo('galeria')} className="cursor-pointer text-xs tracking-[0.2em] uppercase font-bold text-[#8b261b] text-left">Galeria</button>
            <button onClick={() => scrollTo('menu')} className="cursor-pointer text-xs tracking-[0.2em] uppercase font-bold text-[#161616] text-left">Cardápio</button>
            <button onClick={() => scrollTo('contato')} className="cursor-pointer text-xs tracking-[0.2em] uppercase font-bold text-[#161616] text-left">Localização</button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
