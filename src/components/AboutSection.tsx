import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { carouselDishes, CarouselDish } from '../data/mangiarte';
import { ChevronLeft, ChevronRight, Utensils, X, Eye } from 'lucide-react';

export const GalleryAndHighlights: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeModalDish, setActiveModalDish] = useState<CarouselDish | null>(null);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  // Distinguish swipe drag from click on touch devices
  const touchStartPos = useRef<{ x: number; y: number } | null>(null);
  const isDragging = useRef(false);

  // Subtle Parallax Scroll Effect on Section Background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const yBgDecor = useTransform(scrollYProgress, [0, 1], [-45, 45]);
  const yDecorText = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

      const firstCard = scrollContainerRef.current.firstElementChild as HTMLElement | null;
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + 16; // width + gap
        const newIndex = Math.round(scrollLeft / cardWidth);
        setActiveDotIndex(Math.min(carouselDishes.length - 1, Math.max(0, newIndex)));
      }
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (activeModalDish) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModalDish]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.firstElementChild as HTMLElement | null;
      const cardWidth = firstCard ? firstCard.offsetWidth + 16 : 300;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScroll, 350);
    }
  };

  const scrollToDishIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.firstElementChild as HTMLElement | null;
      const cardWidth = firstCard ? firstCard.offsetWidth + 16 : 300;
      scrollContainerRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
      setActiveDotIndex(index);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    isDragging.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartPos.current) return;
    const deltaX = Math.abs(e.touches[0].clientX - touchStartPos.current.x);
    const deltaY = Math.abs(e.touches[0].clientY - touchStartPos.current.y);
    if (deltaX > 8 || deltaY > 8) {
      isDragging.current = true;
    }
  };

  const handleCardClick = (dish: CarouselDish) => {
    if (!isDragging.current) {
      setActiveModalDish(dish);
    }
  };

  const handleScrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="galeria" ref={sectionRef} className="py-20 md:py-24 bg-[#ebe8dc] overflow-hidden border-t border-[#d6d2c4] relative">
      {/* Background Parallax Subtle Ambient Shapes */}
      <motion.div 
        style={{ y: yBgDecor }}
        className="absolute inset-0 pointer-events-none select-none opacity-35"
      >
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-[#8b261b]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-10 left-0 w-[450px] h-[450px] rounded-full bg-gradient-to-r from-[#2c3522]/10 to-transparent blur-3xl" />
      </motion.div>

      {/* Decorative typography parallax watermark */}
      <motion.div
        style={{ y: yDecorText }}
        className="absolute right-10 bottom-1/4 pointer-events-none select-none hidden lg:block opacity-[0.03] text-[#161616] font-serif-cormorant text-[14rem] leading-none"
      >
        Sapori
      </motion.div>
      
      {/* Highlights Text */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-left mb-16 md:mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[11px] tracking-[0.25em] uppercase font-bold text-[#8b261b] block mb-3">
            Tradição & Praticidade
          </span>
          <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl text-[#161616] leading-tight mb-12 max-w-3xl">
            Culinária italiana saborosa no seu dia a dia.
            <span className="italic text-[#8b261b] block mt-1">Na Praça de Alimentação do Shopping Água Verde.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 xl:gap-12 text-left">
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-[#d6d2c4]">
              <h3 className="text-xs tracking-[0.2em] uppercase font-bold text-[#8b261b] mb-3 border-b border-[#8b261b]/20 pb-2">
                Massas & Pratos
              </h3>
              <p className="text-stone-600 font-sans-body text-xs md:text-sm leading-relaxed">
                Pratos clássicos servidos quentes e no ponto certo, com combinações tradicionais de queijos, carnes e molhos encorpados.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-[#d6d2c4]">
              <h3 className="text-xs tracking-[0.2em] uppercase font-bold text-[#8b261b] mb-3 border-b border-[#8b261b]/20 pb-2">
                Bebidas & Vinhos
              </h3>
              <p className="text-stone-600 font-sans-body text-xs md:text-sm leading-relaxed">
                Vinhos em taça ou garrafa, refrigerantes e sucos para acompanhar sua refeição com comodidade.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-[#d6d2c4]">
              <h3 className="text-xs tracking-[0.2em] uppercase font-bold text-[#8b261b] mb-3 border-b border-[#8b261b]/20 pb-2">
                Praça de Alimentação
              </h3>
              <p className="text-stone-600 font-sans-body text-xs md:text-sm leading-relaxed">
                Localizado na praça de alimentação do Shopping Água Verde. Atendimento rápido, ambiente prático e o conforto da praça para o seu almoço ou jantar.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Carousel Header with Navigation Controls */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-6 sm:mb-8 flex items-end justify-between gap-4">
        <div>
          <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#2c3522] block mb-1">
            Galeria Gastronômica
          </span>
          <h3 className="font-serif-cormorant text-2xl sm:text-3xl md:text-4xl text-[#161616]">
            Pratos & Momentos Mangiarte
          </h3>
        </div>

        {/* Buttons Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
              canScrollLeft
                ? 'border-[#2c3522] bg-white text-[#2c3522] hover:bg-[#2c3522] hover:text-white shadow-sm active:scale-95'
                : 'border-stone-300 text-stone-300 cursor-not-allowed bg-stone-100/70'
            }`}
            aria-label="Voltar prato anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
              canScrollRight
                ? 'border-[#2c3522] bg-white text-[#2c3522] hover:bg-[#2c3522] hover:text-white shadow-sm active:scale-95'
                : 'border-stone-300 text-stone-300 cursor-not-allowed bg-stone-100/70'
            }`}
            aria-label="Avançar próximo prato"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Smooth Horizontal Scrolling Carousel with Dishes Optimized for Mobile */}
      <div className="w-full max-w-[1400px] mx-auto relative">
        {/* Left Blur Overlay */}
        <div className="absolute top-0 left-0 bottom-0 w-8 sm:w-16 z-20 pointer-events-none bg-gradient-to-r from-[#ebe8dc] to-transparent backdrop-blur-[2px] [mask-image:linear-gradient(to_right,black,transparent)]" />
        
        {/* Right Blur Overlay */}
        <div className="absolute top-0 right-0 bottom-0 w-8 sm:w-16 z-20 pointer-events-none bg-gradient-to-l from-[#ebe8dc] to-transparent backdrop-blur-[2px] [mask-image:linear-gradient(to_left,black,transparent)]" />
        
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          className="flex gap-3.5 sm:gap-6 overflow-x-auto scrollbar-none px-6 lg:px-12 pb-4 pt-1 snap-x snap-mandatory overscroll-x-contain scroll-smooth"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {carouselDishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.2) }}
              onClick={() => handleCardClick(dish)}
              className="w-[78vw] max-w-[310px] sm:w-[320px] md:w-[360px] h-[370px] sm:h-[410px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl relative bg-stone-900 group cursor-pointer snap-center sm:snap-start flex-shrink-0 border border-white/20 select-none transition-transform duration-300 active:scale-[0.99]"
            >
              <img
                src={dish.imagem}
                alt={dish.titulo}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

              {/* Tag Superior */}
              <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 flex items-center gap-2 z-10">
                <span className="bg-[#2c3522]/90 backdrop-blur-sm text-white text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.18em] px-2.5 sm:px-3 py-1 rounded-full shadow-md border border-white/10">
                  {dish.categoria}
                </span>
                {dish.preco && (
                  <span className="bg-[#8b261b] text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-md">
                    {dish.preco}
                  </span>
                )}
              </div>

              {/* Botão de Zoom Indicativo */}
              <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 opacity-80 group-hover:opacity-100 transition-opacity z-10">
                <div className="bg-black/40 backdrop-blur-md text-white p-1.5 sm:p-2 rounded-full border border-white/20">
                  <Eye size={14} className="sm:w-4 sm:h-4" />
                </div>
              </div>

              {/* Descrição Inferior */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 text-white z-10">
                <h4 className="font-serif-cormorant text-xl sm:text-2xl md:text-3xl font-semibold mb-1 group-hover:text-[#e1ddcc] transition-colors leading-tight">
                  {dish.titulo}
                </h4>
                <p className="text-stone-300 text-xs font-sans-body leading-relaxed line-clamp-2 mb-2">
                  {dish.descricao}
                </p>
                <div className="flex items-center gap-1.5 text-[10px] tracking-wider uppercase font-bold text-[#e1ddcc]">
                  <Utensils size={12} />
                  <span>Toque para ver em tamanho real</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Indicadores de Posição (Dots interativos) & Dica de Deslize */}
        <div className="mt-4 sm:mt-6 flex flex-col items-center gap-2.5 px-6">
          <div className="flex items-center gap-1.5">
            {carouselDishes.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => scrollToDishIndex(dotIdx)}
                aria-label={`Ir para prato ${dotIdx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  dotIdx === activeDotIndex
                    ? 'w-6 bg-[#8b261b]'
                    : 'w-1.5 bg-[#8b261b]/25 hover:bg-[#8b261b]/50'
                }`}
              />
            ))}
          </div>

          <div className="text-stone-500 text-[10px] tracking-widest uppercase font-semibold">
            <span>&larr; Deslize para explorar fotos dos pratos &rarr;</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal para o Prato do Carrossel */}
      <AnimatePresence>
        {activeModalDish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalDish(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md p-3 sm:p-6 md:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#f4f3ef] text-[#161616] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl flex flex-col cursor-default border border-[#d6d2c4]"
            >
              <div className="flex items-center justify-between p-3.5 px-5 sm:p-4 sm:px-6 border-b border-[#d6d2c4] bg-[#ebe8dc]">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8b261b]">
                  {activeModalDish.categoria}
                </span>
                <button
                  onClick={() => setActiveModalDish(null)}
                  className="p-1.5 rounded-full bg-black/5 hover:bg-black/10 text-[#161616] transition-colors cursor-pointer"
                  aria-label="Fechar modal"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full bg-stone-950 overflow-hidden">
                <img
                  src={activeModalDish.imagem}
                  alt={activeModalDish.titulo}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 sm:p-6 bg-[#f4f3ef] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <h4 className="font-serif-cormorant text-2xl sm:text-3xl text-[#161616] font-semibold">
                      {activeModalDish.titulo}
                    </h4>
                    {activeModalDish.preco && (
                      <span className="text-xs sm:text-sm font-bold text-white bg-[#8b261b] px-2.5 py-0.5 rounded-full">
                        {activeModalDish.preco}
                      </span>
                    )}
                  </div>
                  <p className="text-stone-600 text-xs sm:text-sm font-sans-body max-w-md">
                    {activeModalDish.descricao}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setActiveModalDish(null);
                    handleScrollToMenu();
                  }}
                  className="w-full sm:w-auto shrink-0 bg-[#8b261b] hover:bg-[#a32e21] text-white px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-colors text-center cursor-pointer"
                >
                  Ver no Menu
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
