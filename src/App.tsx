import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedDish } from './components/FeaturedDish';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { LocationAndContact } from './components/LocationAndContact';
import { Footer } from './components/Footer';
import { Instagram } from 'lucide-react';

export default function App() {
  const handleScrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToLocation = () => {
    const el = document.getElementById('contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#1c1917] font-sans-body">
      {/* Fixed Navigation Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section with Camarão Provençal dish background (no legend) & authentic logo */}
        <Hero
          onExploreMenu={handleScrollToMenu}
          onGoToLocation={handleScrollToLocation}
        />

        {/* 2. Prato em Destaque: Camarão Provençal with recipe details & custom upload */}
        <FeaturedDish />

        {/* 3. Cardápio Oficial: Menu Executivo da Semana (11h às 15h) & À La Carte */}
        <MenuSection />

        {/* 4. Sobre Nós: História e tradição no Shopping Água Verde */}
        <AboutSection />

        {/* 5. Contato & Localização com Google Maps (Shopping Água Verde) */}
        <LocationAndContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Instagram Button */}
      <aside aria-label="Ações sociais flutuantes">
        <a
          href="https://www.instagram.com/restaurantemangiarte/"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] hover:scale-110 text-white p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group"
          title="Siga-nos no Instagram"
        >
          <Instagram className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out pl-0 group-hover:pl-2 text-xs font-semibold">
            Seguir Instagram
          </span>
        </a>
      </aside>
    </div>
  );
}
