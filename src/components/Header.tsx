import React, { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import { MangiarteLogo } from './MangiarteLogo';

interface HeaderProps {
  // Cleaned up: reservations removed as requested
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#141210]/95 backdrop-blur-md shadow-md border-b border-stone-800 py-2.5'
          : 'bg-[#141210]/80 backdrop-blur-sm border-b border-white/10 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - 2nd image matching logo */}
        <a
          href="#"
          id="header-brand-logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <MangiarteLogo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-navigation" className="hidden md:flex items-center space-x-8">
          <button
            type="button"
            id="nav-menu-link"
            onClick={() => scrollToSection('menu')}
            className="text-sm tracking-wide text-stone-200 hover:text-amber-400 font-medium transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 hover:after:w-full after:transition-all cursor-pointer"
          >
            Menu
          </button>
          <button
            type="button"
            id="nav-about-link"
            onClick={() => scrollToSection('sobre-nos')}
            className="text-sm tracking-wide text-stone-200 hover:text-amber-400 font-medium transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 hover:after:w-full after:transition-all cursor-pointer"
          >
            Sobre nós
          </button>
          <button
            type="button"
            id="nav-contact-link"
            onClick={() => scrollToSection('contato')}
            className="text-sm tracking-wide text-stone-200 hover:text-amber-400 font-medium transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 hover:after:w-full after:transition-all cursor-pointer"
          >
            Contato & Localização
          </button>
        </nav>

        {/* Action Button: Shopping Água Verde */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            type="button"
            onClick={() => scrollToSection('contato')}
            className="hidden lg:flex items-center gap-1.5 text-xs text-stone-300 hover:text-white transition-colors cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>Shopping Água Verde</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-200 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="md:hidden bg-[#181614] border-b border-stone-800 px-6 py-5 shadow-2xl">
          <div className="flex flex-col space-y-4">
            <button
              type="button"
              id="mobile-nav-menu"
              onClick={() => scrollToSection('menu')}
              className="text-left font-serif-cormorant text-xl font-semibold text-stone-100 hover:text-amber-400 py-2 border-b border-stone-800/80"
            >
              Menu & Cardápio Executivo
            </button>
            <button
              type="button"
              id="mobile-nav-about"
              onClick={() => scrollToSection('sobre-nos')}
              className="text-left font-serif-cormorant text-xl font-semibold text-stone-100 hover:text-amber-400 py-2 border-b border-stone-800/80"
            >
              Sobre nós
            </button>
            <button
              type="button"
              id="mobile-nav-contact"
              onClick={() => scrollToSection('contato')}
              className="text-left font-serif-cormorant text-xl font-semibold text-stone-100 hover:text-amber-400 py-2 border-b border-stone-800/80"
            >
              Contato & Localização (Shopping Água Verde)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
