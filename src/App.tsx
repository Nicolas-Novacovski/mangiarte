import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PromotionsSection } from './components/PromotionsSection';
import { MenuSection } from './components/MenuSection';
import { GalleryAndHighlights } from './components/AboutSection';
import { LocationAndContact } from './components/LocationAndContact';
import { Footer } from './components/Footer';

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
    <div className="min-h-screen flex flex-col bg-[#f4f3ef] text-[#161616] font-sans-body">
      <Header />

      <main className="flex-1">
        <Hero
          onExploreMenu={handleScrollToMenu}
          onGoToLocation={handleScrollToLocation}
        />

        <PromotionsSection />
        <MenuSection />
        <GalleryAndHighlights />
        <LocationAndContact />
      </main>

      <Footer />
    </div>
  );
}
