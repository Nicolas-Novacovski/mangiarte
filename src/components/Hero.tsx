import React from 'react';
import { MapPin, Utensils, ArrowRight, Clock, Phone } from 'lucide-react';
import { MangiarteLogo } from './MangiarteLogo';

interface HeroProps {
  onExploreMenu: () => void;
  onGoToLocation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onGoToLocation }) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-stone-950"
    >
      {/* 
        Background image: Photo of the signature Camarão Provençal dish setup 
        (penne with creamy parmesan garlic sauce, golden gratin cheese, prawns, red wine & chips on wood table)
        Without any overlay banner text/legend ("tire a legenda" as requested).
      */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=2400&q=85"
          alt="Camarão Provençal - Penne ao molho cremoso de parmesão gratinado com camarões da Mangiarte Cucina Italiana"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-105"
        />
        {/* Cinematic dark gradients to ensure excellent contrast and text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/70" />
        <div className="absolute inset-0 bg-radial from-transparent via-stone-950/40 to-stone-950/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Brand Logo Badge from 2nd Image */}
        <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
          <MangiarteLogo size="lg" />
        </div>

        {/* Location & Schedule pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
          <div
            id="hero-location-badge"
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-stone-200 text-xs font-medium"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Shopping Água Verde • Curitiba - PR</span>
          </div>

          <div
            id="hero-hours-badge"
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-200 text-xs font-medium"
          >
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Menu Executivo: Seg a Sex das 11h às 15h</span>
          </div>
        </div>

        {/* Catchy headline */}
        <h1
          id="hero-title"
          className="font-serif-cormorant text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-stone-100 leading-[1.08] max-w-4xl"
        >
          A Autêntica Tradição da{' '}
          <span className="italic font-normal text-amber-300">
            Cozinha Italiana
          </span>
        </h1>

        {/* Subtitle */}
        <p
          id="hero-description"
          className="mt-5 text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl font-normal leading-relaxed"
        >
          No Shopping Água Verde, uma experiência gastronômica memorável.
          Massas artesanais, molhos preparados lentamente e o famoso{' '}
          <strong className="text-amber-200 font-medium">Menu Executivo da Semana</strong> com pratos a partir de R$ 28.
        </p>

        {/* Action Buttons (Reservations removed as requested; focused on Menu & Mall Visit) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            id="hero-explore-menu-btn"
            onClick={onExploreMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-200 shadow-lg shadow-amber-900/30 hover:-translate-y-0.5 cursor-pointer"
          >
            <Utensils className="w-4 h-4 text-stone-950" />
            <span>Ver Cardápio & Executivo</span>
            <ArrowRight className="w-4 h-4 text-stone-950" />
          </button>

          <button
            type="button"
            id="hero-location-btn"
            onClick={onGoToLocation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-stone-100 border border-white/20 px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5 cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Onde Estamos no Shopping</span>
          </button>
        </div>

        {/* Quick Highlights of Mall dining */}
        <div className="mt-12 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/10 w-full max-w-3xl">
          <div className="flex flex-col items-center text-center">
            <span className="font-serif-cormorant text-2xl font-bold text-amber-200">R$ 28</span>
            <span className="text-[11px] text-stone-400 mt-0.5 uppercase tracking-wider font-medium">
              Executivo a partir de
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-serif-cormorant text-2xl font-bold text-amber-200">Seg a Sex</span>
            <span className="text-[11px] text-stone-400 mt-0.5 uppercase tracking-wider font-medium">
              Almoço das 11h às 15h
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-serif-cormorant text-2xl font-bold text-amber-200">Pratos Frescos</span>
            <span className="text-[11px] text-stone-400 mt-0.5 uppercase tracking-wider font-medium">
              Feitos na hora
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-serif-cormorant text-2xl font-bold text-amber-200">Shopping</span>
            <span className="text-[11px] text-stone-400 mt-0.5 uppercase tracking-wider font-medium">
              Estacionamento & Segurança
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
