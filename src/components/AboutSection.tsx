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
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScroll, 350);
    }
  };

  const handleScrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-[#ebe8dc] overflow-hidden border-t border-[#d6d2c4] relative">
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
      <div className="max-w-4xl mx-auto px-6 text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[11px] tracking-[0.25em] uppercase font-bold text-[#8b261b] block mb-3">
            Tradição & Praticidade
          </span>
          <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl text-[#161616] leading-tight mb-12">
            Culinária italiana saborosa no seu dia a dia.<br/>
            <span className="italic text-[#8b261b]">Na Praça de Alimentação do Shopping Água Verde.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left">
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
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-8 flex items-end justify-between">
        <div>
          <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#2c3522] block mb-1">
            Galeria Gastronômica
          </span>
          <h3 className="font-serif-cormorant text-2xl md:text-4xl text-[#161616]">
            Pratos & Momentos Mangiarte
          </h3>
        </div>

        {/* Buttons Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${
              canScrollLeft
                ? 'border-[#2c3522] bg-white text-[#2c3522] hover:bg-[#2c3522] hover:text-white shadow-sm'
                : 'border-stone-300 text-stone-300 cursor-not-allowed bg-stone-100'
            }`}
            aria-label="Voltar carrossel"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all ${
              canScrollRight
                ? 'border-[#2c3522] bg-white text-[#2c3522] hover:bg-[#2c3522] hover:text-white shadow-sm'
                : 'border-stone-300 text-stone-300 cursor-not-allowed bg-stone-100'
            }`}
            aria-label="Avançar carrossel"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Smooth Horizontal Scrolling Carousel with Dishes */}
      <div className="w-full max-w-[1400px] mx-auto">
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto scrollbar-none px-6 md:px-12 pb-4 pt-2 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {carouselDishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => setActiveModalDish(dish)}
              className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] h-[460px] rounded-2xl overflow-hidden shadow-xl relative bg-stone-900 group cursor-pointer snap-start flex-shrink-0 border border-white/20"
            >
              <img
                src={dish.imagem}
                alt={dish.titulo}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Tag Superior */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="bg-[#2c3522]/90 backdrop-blur-sm text-white text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1 rounded-full shadow-md border border-white/10">
                  {dish.categoria}
                </span>
                {dish.preco && (
                  <span className="bg-[#8b261b] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                    {dish.preco}
                  </span>
                )}
              </div>

              {/* Botão de Zoom */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full">
                  <Eye size={16} />
                </div>
              </div>

              {/* Descrição Inferior */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h4 className="font-serif-cormorant text-2xl sm:text-3xl font-semibold mb-1 group-hover:text-[#e1ddcc] transition-colors">
                  {dish.titulo}
                </h4>
                <p className="text-stone-300 text-xs font-sans-body leading-relaxed line-clamp-2">
                  {dish.descricao}
                </p>
                <div className="mt-3 flex items-center gap-1 text-[10px] tracking-wider uppercase font-bold text-[#e1ddcc]">
                  <Utensils size={12} />
                  <span>Toque para ver detalhes</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 flex justify-center items-center gap-4 text-stone-500 text-[10px] tracking-widest uppercase font-bold px-6">
          <span>&larr; Deslize para explorar mais pratos e fotos &rarr;</span>
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
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#161616] text-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl flex flex-col cursor-default border border-white/10"
            >
              <div className="flex items-center justify-between p-4 px-6 border-b border-white/10 bg-[#1c1c1c]">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-stone-400">
                  {activeModalDish.categoria}
                </span>
                <button
                  onClick={() => setActiveModalDish(null)}
                  className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Fechar"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="relative aspect-[4/3] w-full bg-stone-950 overflow-hidden">
                <img
                  src={activeModalDish.imagem}
                  alt={activeModalDish.titulo}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 bg-[#1a1a1a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-serif-cormorant text-2xl sm:text-3xl text-white font-semibold">
                      {activeModalDish.titulo}
                    </h4>
                    {activeModalDish.preco && (
                      <span className="text-sm font-bold text-[#e1ddcc] bg-[#2c3522] px-2.5 py-0.5 rounded">
                        {activeModalDish.preco}
                      </span>
                    )}
                  </div>
                  <p className="text-stone-300 text-xs sm:text-sm font-sans-body max-w-md">
                    {activeModalDish.descricao}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setActiveModalDish(null);
                    handleScrollToMenu();
                  }}
                  className="shrink-0 bg-[#8b261b] hover:bg-[#a32e21] text-white px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-colors"
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
