import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { GalleryAndHighlights } from './components/AboutSection';
import { LocationAndContact } from './components/LocationAndContact';
import { LocalSeoFaq } from './components/LocalSeoFaq';
import { Footer } from './components/Footer';
import { UtensilsCrossed, MapPin, Sparkles } from 'lucide-react';

export default function App() {
  const [showMobileDock, setShowMobileDock] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show dock after scrolling slightly past the hero top
      setShowMobileDock(window.scrollY > 220);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleScrollToGallery = () => {
    const el = document.getElementById('galeria');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--paper-white)] text-[var(--espresso)] font-sans-body overflow-x-hidden relative">
      <Header />

      <main className="flex-1">
        <Hero
          onExploreMenu={handleScrollToMenu}
          onGoToLocation={handleScrollToLocation}
        />

        <GalleryAndHighlights />
        <MenuSection />
        <LocationAndContact />
        <LocalSeoFaq />
      </main>

      <Footer />

      {/* Discrete Mobile Floating Action Dock */}
      {showMobileDock && (
        <div className="fixed bottom-4 inset-x-0 z-40 flex justify-center px-4 md:hidden pointer-events-none transition-all duration-300">
          <div className="pointer-events-auto bg-[var(--espresso)]/95 text-white backdrop-blur-md border border-white/20 px-3.5 py-2 rounded-full shadow-2xl flex items-center gap-1.5 animate-in fade-in slide-in-from-bottom-3 duration-300">
            <button
              onClick={handleScrollToMenu}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--tomato)] text-white border border-[var(--tomato)] hover:bg-white hover:text-[var(--tomato)] active:scale-95 transition-all duration-300 flex items-center gap-1.5 shadow-md"
            >
              <UtensilsCrossed size={13} />
              <span>Cardápio</span>
            </button>

            <div className="w-[1px] h-3.5 bg-white/20 mx-0.5"></div>

            <button
              onClick={handleScrollToGallery}
              className="px-2.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-stone-300 hover:text-white active:scale-95 transition-all flex items-center gap-1"
            >
              <Sparkles size={13} className="text-[var(--saffron)]" />
              <span>Fotos</span>
            </button>

            <div className="w-[1px] h-3.5 bg-white/20 mx-0.5"></div>

            <button
              onClick={handleScrollToLocation}
              className="px-2.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-stone-300 hover:text-white active:scale-95 transition-all flex items-center gap-1"
            >
              <MapPin size={13} className="text-[var(--tomato)]" />
              <span>Local</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
