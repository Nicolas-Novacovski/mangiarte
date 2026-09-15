import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onGoToLocation: () => void;
}

const heroImages = [
  {
    url: '/pratos/gnocchi-supremo-01.jpg',
    title: 'Gnocchi Supremo',
    tag: 'Massa Artesanal',
  },
  {
    url: '/pratos/carbonara-crocante.jpg',
    title: 'Spaghetti alla Carbonara',
    tag: 'Clássico Italiano',
  },
];

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onGoToLocation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  // Parallax scroll effect using framer-motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const yBgShape = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -30]);

  // Troca automática a cada 5 segundos (5000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[90vh] md:min-h-screen pt-32 pb-12 bg-[#ebe8dc] overflow-hidden flex flex-col justify-center"
    >
      {/* Background Decorative Parallax Elements */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 pointer-events-none opacity-40 select-none"
      >
        <div className="absolute top-10 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#8b261b]/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#2c3522]/10 to-transparent blur-3xl" />
      </motion.div>

      {/* Floating subtle watermark with parallax */}
      <motion.div
        style={{ y: yBgShape }}
        className="absolute right-10 top-1/4 pointer-events-none select-none hidden lg:block opacity-[0.03] text-[#161616] font-serif-cormorant text-[16rem] leading-none"
      >
        M
      </motion.div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full flex flex-col md:flex-row items-center justify-between relative z-10">
        
        {/* Text Content - Left Side with Subtle Parallax */}
        <motion.div 
          style={{ y: yText }}
          className="w-full md:w-1/2 flex flex-col justify-center pr-0 md:pr-12 lg:pr-20 mb-12 md:mb-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
          <div className="inline-block px-3.5 py-1.5 bg-[#8b261b]/10 text-[#8b261b] rounded-full border border-[#8b261b]/20 text-[10px] md:text-xs tracking-[0.2em] uppercase mb-6 font-bold">
            Praça de Alimentação • Shopping Água Verde
          </div>
          
          <h1 className="font-serif-cormorant text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.92] text-[#161616] mb-8">
            A tradição da <br />
            <span className="italic text-[#2c3522]">autêntica</span> <br />
            cantina italiana.
          </h1>
          
          <p className="text-stone-600 text-base md:text-lg max-w-md font-sans-body leading-relaxed mb-10">
            Receitas clássicas, porções generosas e atendimento rápido na praça de alimentação do Shopping Água Verde. A escolha perfeita para o seu almoço ou jantar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button
              onClick={onExploreMenu}
              className="group flex items-center justify-center gap-3 text-xs tracking-[0.2em] uppercase font-bold text-white bg-[#2c3522] px-8 py-4 rounded-full transition-all hover:bg-[#3d4a30] hover:shadow-lg w-max cursor-pointer"
            >
              <span>Ver o Cardápio</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={onGoToLocation}
              className="group flex items-center justify-center gap-3 text-xs tracking-[0.2em] uppercase font-bold text-[#161616] border border-[#161616] px-8 py-4 rounded-full transition-all hover:bg-[#161616] hover:text-white w-max cursor-pointer"
            >
              Como Chegar
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Image Content - Right Side with Slideshow & Subtle Parallax */}
      <motion.div 
        style={{ y: yImage }}
        className="w-full md:w-1/2 h-[50vh] sm:h-[60vh] md:h-[78vh] relative z-10"
      >
        <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#d6d2c4] bg-[#161616]">
          
          {/* Slideshow com AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={heroImages[currentIndex].url}
                alt={heroImages[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Badge do Prato em Exibição */}
          <div className="absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between pointer-events-none">
            <div className="bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15 text-white pointer-events-auto">
              <span className="text-[10px] tracking-widest uppercase font-bold text-[#e1ddcc] block">
                {heroImages[currentIndex].tag}
              </span>
              <h3 className="font-serif-cormorant text-2xl font-semibold text-white leading-tight">
                {heroImages[currentIndex].title}
              </h3>
            </div>

            {/* Controles de Slideshow */}
            <div className="flex items-center gap-2 pointer-events-auto bg-black/60 backdrop-blur-md p-1.5 rounded-full border border-white/15">
              <button
                onClick={handlePrev}
                aria-label="Imagem anterior"
                className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Indicadores das 4 Imagens */}
              <div className="flex items-center gap-1.5 px-1">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Ir para imagem ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentIndex 
                        ? 'w-6 bg-[#e1ddcc]' 
                        : 'w-2 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                aria-label="Próxima imagem"
                className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </motion.div>

      </div>
    </section>
  );
};
