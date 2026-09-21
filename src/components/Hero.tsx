import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onGoToLocation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onGoToLocation }) => {
  return (
    <section className="relative w-full min-h-[100svh] bg-[var(--ivory)] overflow-hidden flex flex-col justify-center">
      {/* Background Shapes */}
      <div className="absolute bottom-0 md:top-0 right-0 w-full md:w-[45vw] h-[48%] md:h-full bg-[var(--basil)] max-md:[clip-path:polygon(0_20%,100%_0,100%_90%,0_100%)] md:[clip-path:polygon(15%_0,100%_0,100%_100%,-5%_100%)] pointer-events-none" />
           
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[var(--tomato)] rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="flex-1 w-full max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-center relative z-10 pt-24 pb-16 sm:pb-20 md:py-12">
        
        {/* Left Content: Typography & CTAs */}
        <div className="w-full md:w-[50%] flex flex-col justify-start md:justify-center z-20">
          <motion.div
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <h1 className="font-display font-bold text-[clamp(52px,15vw,96px)] sm:text-[clamp(80px,16vw,140px)] md:text-[clamp(110px,16vw,210px)] leading-[0.92] tracking-tight uppercase">
              <span className="text-[var(--basil)] block">Italia</span>
              <span className="text-[var(--tomato)] block pt-1.5 sm:pt-2 md:pt-0 text-center md:text-left">À Mesa.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 sm:mt-8 md:mt-10"
          >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5 relative z-30 w-full sm:w-auto max-w-md sm:max-w-none">
              <button 
                onClick={onExploreMenu}
                className="group flex items-center justify-center gap-3 font-sans-body text-xs sm:text-sm tracking-wider uppercase font-bold text-white bg-[var(--tomato)] px-7 sm:px-8 py-4 rounded-xl sm:rounded-sm transition-all hover:bg-[#a02c25] active:scale-[0.98] shadow-lg hover:shadow-xl cursor-pointer min-h-[48px]"
              >
                Ver o cardápio
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={onGoToLocation}
                className="flex items-center justify-center gap-2 text-[var(--espresso)] bg-white/85 hover:bg-white backdrop-blur-md px-4 sm:px-5 py-3.5 sm:py-2.5 rounded-xl sm:rounded-full shadow-sm border border-stone-300/60 transition-all cursor-pointer min-h-[44px]"
              >
                <MapPin size={15} className="text-[var(--tomato)] shrink-0" />
                <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase">Shopping Água Verde • Curitiba</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Content: Giant Plate */}
        <div className="w-[85vw] max-w-[340px] sm:w-[65vw] sm:max-w-[420px] md:w-[55%] md:max-w-none absolute -right-[8%] sm:-right-[4%] md:-right-[5%] top-[65%] sm:top-[60%] md:top-[54%] -translate-y-1/2 z-10 pointer-events-none">
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
          transition={{ duration: 0.8, delay: 0.9 }}
          className="absolute top-[13%] sm:top-[12%] md:top-[16%] right-[4%] sm:right-[6%] md:left-[45%] z-30 pointer-events-none"
        >
          <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[var(--tomato)] drop-shadow-sm">Buon appetito!</span>
        </motion.div>
        
      </div>
    </section>
  );
};
