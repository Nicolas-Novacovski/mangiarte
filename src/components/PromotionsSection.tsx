import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Sparkles, Eye, X, ChevronRight, ZoomIn } from 'lucide-react';
import { promocoesData, PromocionalItem } from '../data/mangiarte';

export const PromotionsSection: React.FC = () => {
  const [activePromoIndex, setActivePromoIndex] = useState<number>(0);
  const [fullscreenPromo, setFullscreenPromo] = useState<PromocionalItem | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Subtle Parallax Scroll Effect on Section Background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const yBackgroundDecor = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const yDecorText = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const activePromo = promocoesData[activePromoIndex] || promocoesData[0];

  const handleScrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="destaques" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#ebe8dc] px-4 md:px-8 border-t border-[#d6d2c4] relative overflow-hidden"
    >
      {/* Invisible anchor for backward compatibility with 'promocoes' */}
      <div id="promocoes" className="absolute -top-24 left-0" />

      {/* Background Parallax Subtle Layers */}
      <motion.div 
        style={{ y: yBackgroundDecor }}
        className="absolute inset-0 pointer-events-none select-none opacity-40"
      >
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#8b261b]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-to-tl from-[#2c3522]/10 to-transparent blur-3xl" />
      </motion.div>

      {/* Subtle decorative watermark with parallax */}
      <motion.div
        style={{ y: yDecorText }}
        className="absolute left-6 top-1/3 pointer-events-none select-none hidden lg:block opacity-[0.03] text-[#161616] font-serif-cormorant text-[12rem] leading-none"
      >
        Cucina
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#8b261b]/10 text-[#8b261b] rounded-full border border-[#8b261b]/20 text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold mb-3">
              <Sparkles size={13} />
              <span>Sugestões da Casa</span>
            </div>
            <h2 className="font-serif-cormorant text-4xl sm:text-5xl md:text-6xl text-[#161616] leading-tight">
              Destaques da Cantina
            </h2>
            <p className="text-stone-600 font-sans-body text-sm max-w-xl mx-auto mt-2 leading-relaxed">
              Confira os pratos especiais em evidência no Mangiarte. Clique nas opções para alternar e ampliar a arte original completa.
            </p>
          </motion.div>
        </div>

        {/* Seletor de Destaques com Abas Estilo Boutique */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {promocoesData.map((promo, idx) => (
            <button
              key={promo.id}
              onClick={() => setActivePromoIndex(idx)}
              className={`px-4 py-2.5 rounded-full text-xs font-sans-body tracking-wider transition-all duration-300 flex items-center gap-2 font-medium ${
                idx === activePromoIndex
                  ? 'bg-[#8b261b] text-white shadow-md scale-105 font-bold'
                  : 'bg-[#f4f3ef] text-[#2c3522] border border-[#d6d2c4] hover:bg-[#eae6d8]'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${idx === activePromoIndex ? 'bg-[#e1ddcc]' : 'bg-[#8b261b]'}`} />
              <span>{promo.titulo}</span>
            </button>
          ))}
        </div>

        {/* Vitrine Principal da Imagem: 100% Limpa, Sem Textos Sobrepostos, Sem Cortar */}
        <motion.div
          key={activePromo.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-[#f9f8f5] rounded-2xl border border-[#d6d2c4] shadow-xl p-3 sm:p-5 md:p-6 mb-8"
        >
          {/* Container da Arte com Proporção Natural e Nitidez Total */}
          <div 
            onClick={() => setFullscreenPromo(activePromo)}
            className="relative cursor-pointer group rounded-xl overflow-hidden bg-stone-900/5 flex items-center justify-center min-h-[320px] max-h-[70vh]"
          >
            <img
              src={activePromo.imagem}
              alt={activePromo.titulo}
              className="w-full h-auto max-h-[68vh] object-contain mx-auto rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
            />

            {/* Botão sutil de Ampliar ao passar o mouse */}
            <div className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs font-bold px-3.5 py-2 rounded-full flex items-center gap-1.5 transition-all shadow-md">
              <ZoomIn size={15} />
              <span>Ampliar Imagem</span>
            </div>
          </div>

          {/* Barra de Ações Limpa e Elegante Abaixo da Imagem */}
          <div className="pt-5 mt-3 border-t border-[#d6d2c4] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-stone-600 text-xs sm:text-sm">
              <span className="font-bold text-[#8b261b] uppercase tracking-wider text-[11px] bg-[#8b261b]/10 px-2.5 py-1 rounded-md">
                {activePromo.tag || 'Destaque'}
              </span>
              <span>Disponível no Shopping Água Verde</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={() => setFullscreenPromo(activePromo)}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-[#2c3522] text-[#2c3522] text-xs font-bold tracking-wider hover:bg-[#2c3522] hover:text-white transition-all"
              >
                <Eye size={14} />
                <span>Ver em Tela Cheia</span>
              </button>

              <button
                onClick={handleScrollToMenu}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#8b261b] text-white text-xs font-bold tracking-wider hover:bg-[#a32d20] shadow-md transition-all"
              >
                <span>Ver no Cardápio</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Miniaturas dos outros pratos em destaque */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {promocoesData.map((promo, idx) => (
            <button
              key={`thumb-${promo.id}`}
              onClick={() => setActivePromoIndex(idx)}
              className={`group relative rounded-xl overflow-hidden border-2 transition-all duration-300 text-left bg-stone-900 ${
                idx === activePromoIndex
                  ? 'border-[#8b261b] shadow-lg ring-2 ring-[#8b261b]/30 scale-[1.02]'
                  : 'border-[#d6d2c4] hover:border-stone-400 opacity-85 hover:opacity-100'
              }`}
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-stone-900">
                <img
                  src={promo.imagem}
                  alt={promo.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-2.5 bg-[#f4f3ef] border-t border-[#d6d2c4] flex items-center justify-between">
                <div>
                  <span className="font-serif-cormorant text-base font-bold text-[#161616] block leading-snug">
                    {promo.titulo}
                  </span>
                  <span className="text-[11px] text-stone-500 font-sans-body truncate block">
                    {promo.subtitulo}
                  </span>
                </div>
                {idx === activePromoIndex && (
                  <span className="w-2 h-2 rounded-full bg-[#8b261b] shrink-0 ml-2" />
                )}
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Modal Lightbox em Tela Cheia sem Nenhum Corte */}
      <AnimatePresence>
        {fullscreenPromo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenPromo(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex flex-col items-center justify-center cursor-pointer"
          >
            <div className="relative max-w-5xl max-h-[92vh] w-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setFullscreenPromo(null)}
                className="absolute -top-12 right-0 sm:-right-4 text-white hover:text-stone-300 bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Fechar"
              >
                <X size={24} />
              </button>
              
              <img
                src={fullscreenPromo.imagem}
                alt={fullscreenPromo.titulo}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />

              <div className="mt-3 flex items-center gap-4 text-white/90 text-xs">
                <span className="font-medium">{fullscreenPromo.titulo}</span>
                <span>•</span>
                <button
                  onClick={() => {
                    setFullscreenPromo(null);
                    handleScrollToMenu();
                  }}
                  className="text-[#e1ddcc] hover:underline font-bold"
                >
                  Ir para o Cardápio →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
