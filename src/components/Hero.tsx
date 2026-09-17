import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Header } from './Header';

interface HeroProps {
  onExploreMenu: () => void;
  onGoToLocation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onGoToLocation }) => {
  return (
    <section className="relative w-full min-h-[100svh] bg-[var(--ivory)] overflow-hidden flex flex-col">
      {/* Background Shapes */}
      <div className="absolute bottom-0 md:top-0 right-0 w-full md:w-[45vw] h-[50%] md:h-full bg-[var(--basil)] max-md:[clip-path:polygon(0_20%,100%_0,100%_90%,0_100%)] md:[clip-path:polygon(15%_0,100%_0,100%_100%,-5%_100%)]" />
           
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[var(--tomato)] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <Header />

      <div className="flex-1 w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-center relative z-10 pt-20">
        
        {/* Left Content: Typography */}
        <div className="w-full md:w-[50%] flex flex-col justify-start md:justify-center pt-8 md:pt-0 pb-32 md:pb-12 z-20">
          <motion.div
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <h1 className="font-display font-bold text-[clamp(90px,18vw,220px)] leading-[0.95] tracking-tight uppercase">
              <span className="text-[var(--basil)] block">Italia</span>
              <span className="text-[var(--tomato)] block pt-2 md:pt-0 text-center">À Mesa.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 md:mt-8"
          >
            

            <div className="mt-4 md:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-30">
              <button 
                onClick={onExploreMenu}
                className="group flex items-center justify-center gap-3 font-sans-body text-sm tracking-wider uppercase font-bold text-white bg-[var(--tomato)] px-8 py-4 rounded-sm transition-all hover:bg-[#a02c25] hover:shadow-lg cursor-pointer"
              >
                Ver o cardápio
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <div className="flex items-center gap-2 text-[var(--espresso)] bg-white/70 backdrop-blur-md px-4 py-2.5 rounded-full shadow-sm border border-white/20">
                <MapPin size={16} />
                <span className="text-xs font-bold tracking-widest uppercase">Shopping Água Verde • Curitiba</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content: Giant Plate */}
        <div className="w-[120%] md:w-[55%] absolute -right-[15%] md:-right-[5%] top-[60%] md:top-[55%] -translate-y-1/2 z-10 pointer-events-none md:opacity-100 opacity-100">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="relative w-full aspect-square"
          >
            <img 
              src="/pratos/prato-sem-fundo.png" 
              alt="Gnocchi Supremo" 
              className="w-full md:w-[130%] max-w-none h-auto object-contain drop-shadow-2xl"
              
            />
          </motion.div>
        </div>

        {/* Signature script */}
        <motion.div 
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 1, rotate: -5 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute top-[4%] md:top-[15%] right-[5%] md:left-[45%] z-30 pointer-events-none"
        >
          <span className="font-script text-5xl md:text-6xl text-[var(--tomato)]">Buon appetito!</span>
        </motion.div>

        
      </div>
    </section>
  );
};
