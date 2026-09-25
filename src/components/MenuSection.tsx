import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { executivoSemana, cardapioGeral } from '../data/mangiarte';
import { Sparkles, UtensilsCrossed, Calendar, Eye, X, Image as ImageIcon } from 'lucide-react';
import { MangiarteLogo } from './MangiarteLogo';

interface DishModalData {
  nome: string;
  preco: string;
  descricao?: string;
  imagem: string;
  tag?: string;
}

export const MenuSection: React.FC = () => {
  const [activeMenuTab, setActiveMenuTab] = useState<'executivo' | 'geral'>('executivo');
  const [showFlyerModal, setShowFlyerModal] = useState<boolean>(false);
  const [selectedDishModal, setSelectedDishModal] = useState<DishModalData | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedDishModal || showFlyerModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedDishModal, showFlyerModal]);

  // Subtle Parallax Scroll Effect on Section Background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const yBgDecor = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const yDecorText = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="menu" ref={sectionRef} className="py-24 bg-[var(--ivory)] border-t border-[#d6d2c4] relative overflow-hidden">
      {/* Background Parallax Subtle Layers */}
      <motion.div 
        style={{ y: yBgDecor }}
        className="absolute inset-0 pointer-events-none select-none opacity-30"
      >
        <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[var(--tomato)]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-[var(--basil)]/10 to-transparent blur-3xl" />
      </motion.div>

      {/* Decorative typography watermark with parallax */}
      <motion.div
        style={{ y: yDecorText }}
        className="absolute left-10 bottom-20 pointer-events-none select-none hidden lg:block opacity-[0.03] text-[var(--espresso)] font-serif-cormorant text-[15rem] leading-none"
      >
        Menu
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-left mb-8 sm:mb-12"
        >
          <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[var(--tomato)] font-bold mb-2 sm:mb-3 block">
            Cucina Italiana Tradizionale
          </span>
          <h2 className="font-serif-cormorant text-3xl sm:text-5xl md:text-6xl text-[var(--espresso)]">
            Nossos Cardápios
          </h2>
          <p className="text-stone-600 font-sans-body text-xs sm:text-sm max-w-xl mt-2 sm:mt-3">
            Escolha abaixo qual cardápio deseja visualizar. Pratos saborosos e clássicos da culinária italiana servidos com carinho no Shopping Água Verde.
          </p>
        </motion.div>

        {/* Menu Switcher Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-4 mb-8 sm:mb-14 max-w-2xl">
          <button
            onClick={() => setActiveMenuTab('executivo')}
            className={`cursor-pointer w-full sm:w-1/2 h-[76px] sm:h-[84px] px-5 sm:px-6 rounded-xl font-sans-body text-xs tracking-[0.18em] uppercase font-bold transition-all duration-300 flex flex-col items-center justify-center gap-1 shadow-sm border ${
              activeMenuTab === 'executivo'
                ? 'bg-[var(--basil)] text-white border-[var(--basil)] shadow-lg scale-100 ring-2 ring-[var(--basil)]/20'
                : 'bg-[var(--paper-white)] text-[var(--basil)] border-[#d6d2c4] hover:bg-[#eae6d8]'
            }`}
          >
            <div className="flex items-center gap-2">
              <Calendar size={15} className={activeMenuTab === 'executivo' ? 'text-[#e1ddcc]' : 'text-[var(--tomato)]'} />
              <span className="text-sm">Almoço Executivo</span>
            </div>
            <span className={`text-[10px] font-normal tracking-wider lowercase ${activeMenuTab === 'executivo' ? 'text-[#d6d2c4]' : 'text-stone-500'}`}>
              Segunda a Sexta • 11h às 15h
            </span>
          </button>

          <button
            onClick={() => setActiveMenuTab('geral')}
            className={`cursor-pointer w-full sm:w-1/2 h-[76px] sm:h-[84px] px-5 sm:px-6 rounded-xl font-sans-body text-xs tracking-[0.18em] uppercase font-bold transition-all duration-300 flex flex-col items-center justify-center gap-1 shadow-sm border ${
              activeMenuTab === 'geral'
                ? 'bg-[var(--tomato)] text-white border-[var(--tomato)] shadow-lg scale-100 ring-2 ring-[var(--tomato)]/20'
                : 'bg-[var(--paper-white)] text-[var(--espresso)] border-[#d6d2c4] hover:bg-[#eae6d8]'
            }`}
          >
            <div className="flex items-center gap-2">
              <UtensilsCrossed size={15} className={activeMenuTab === 'geral' ? 'text-white' : 'text-[var(--tomato)]'} />
              <span className="text-sm">Cardápio Geral</span>
            </div>
            <span className={`text-[10px] font-normal tracking-wider lowercase ${activeMenuTab === 'geral' ? 'text-stone-200' : 'text-stone-500'}`}>
              À La Carte • Todos os Dias
            </span>
          </button>
        </div>

        {/* Content Container (Estilo Livro/Menu Aberto com 2 Páginas) */}
        <AnimatePresence mode="wait">
          {activeMenuTab === 'executivo' ? (
            <motion.div
              key="menu-executivo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-[#f9f8f5] border border-[#d6d2c4] sm:border-2 rounded-2xl p-3.5 sm:p-8 md:p-12 shadow-xl sm:shadow-2xl relative overflow-hidden"
            >
              {/* Top Banner do Menu Executivo */}
              <div className="border-b-2 border-[var(--tomato)]/30 pb-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-[var(--tomato)] text-xs uppercase tracking-[0.2em] font-bold mb-1">
                    <Sparkles size={14} />
                    <span>Cardápio da Semana</span>
                  </div>
                  <h3 className="font-serif-cormorant text-3xl md:text-5xl text-[var(--espresso)]">
                    Menu Executivo da Semana
                  </h3>
                  <p className="text-stone-600 font-sans-body text-xs md:text-sm mt-1">
                    Servido de segunda a sexta-feira, das 11h às 15h. Pratos completos com o padrão Mangiarte.
                  </p>
                </div>
                
                <div className="flex items-center gap-3 shrink-0">
                  <div className="h-[40px] flex items-center justify-center bg-[var(--basil)] text-white px-5 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">
                    A partir de R$ 28
                  </div>
                  <button
                    onClick={() => setShowFlyerModal(true)}
                    className="cursor-pointer h-[40px] flex items-center justify-center text-[11px] font-bold tracking-wider uppercase text-[var(--tomato)] border border-[var(--tomato)] hover:bg-[var(--tomato)] hover:text-white px-4 rounded-full transition-all duration-300"
                  >
                    Ver Panfleto Oficial
                  </button>
                </div>
              </div>

              {/* Layout Estilo Menu Aberto - 2 Lados (Colunas) */}
              <div className="grid md:grid-cols-2 gap-8 lg:gap-14 relative">
                
                {/* Linha Divisória Central de Livro de Cardápio (Desktop) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#d6d2c4]/80 -ml-[0.5px]"></div>

                {/* Lado Esquerdo: Segunda, Terça e Quarta */}
                <div className="space-y-8 pr-0 md:pr-4">
                  <div className="text-center pb-2 border-b border-[#d6d2c4]">
                    <span className="text-[11px] font-bold tracking-[0.25em] text-[var(--basil)] uppercase">
                      Página 1 • Início da Semana
                    </span>
                  </div>

                  {executivoSemana.slice(0, 3).map((diaItem) => (
                    <div key={diaItem.dia} className="space-y-4">
                      {/* Cabeçalho do Dia */}
                      <div className="flex items-center gap-3">
                        <span className="bg-[var(--tomato)] text-white font-serif-cormorant text-xl font-bold px-3 py-1 rounded-md shadow-sm">
                          {diaItem.dia}
                        </span>
                        <h4 className="font-serif-cormorant text-2xl text-[var(--espresso)] font-semibold">
                          {diaItem.diaExtenso}
                        </h4>
                      </div>

                      {/* Lista de Pratos do Dia */}
                      <div className="space-y-3">
                        {diaItem.pratos.map((prato) => (
                          <motion.div
                            key={prato.id}
                            whileHover={{ scale: 1.02, y: -2 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            onClick={() => {
                              if (prato.imagem) {
                                setSelectedDishModal({
                                  nome: prato.nome,
                                  preco: prato.preco,
                                  descricao: prato.acompanhamentos,
                                  imagem: prato.imagem,
                                  tag: prato.tag,
                                });
                              }
                            }}
                            className={`p-4 rounded-xl bg-white border border-[#e2dec9] hover:border-[var(--tomato)] hover:shadow-lg transition-all duration-200 group flex gap-4 items-center ${
                              prato.imagem ? 'cursor-pointer' : 'cursor-default'
                            }`}
                          >
                            {prato.imagem && (
                              <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-stone-100 border border-stone-200 group-hover:border-[var(--tomato)] transition-colors">
                                <img
                                  src={prato.imagem}
                                  alt={prato.nome}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                  <Eye size={16} />
                                </div>
                              </div>
                            )}

                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start gap-3 mb-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <h5 className="font-serif-cormorant text-xl text-[var(--espresso)] group-hover:text-[var(--tomato)] transition-colors font-medium">
                                    {prato.nome}
                                  </h5>
                                  {prato.tag && (
                                    <span className="text-[9px] font-bold uppercase tracking-wider bg-[var(--tomato)]/10 text-[var(--tomato)] px-2 py-0.5 rounded-full">
                                      {prato.tag}
                                    </span>
                                  )}
                                  {prato.imagem && (
                                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-[var(--basil)] bg-[var(--basil)]/10 px-2 py-0.5 rounded-full">
                                      <ImageIcon size={10} />
                                      <span>Foto</span>
                                    </span>
                                  )}
                                </div>
                                <span className="font-sans-body text-base font-bold text-[var(--basil)] whitespace-nowrap">
                                  R$ {prato.preco}
                                </span>
                              </div>
                              <p className="font-sans-body text-xs text-stone-600 leading-relaxed">
                                {prato.acompanhamentos}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Lado Direito: Quinta, Sexta e Destaques */}
                <div className="space-y-8 pl-0 md:pl-4">
                  <div className="text-center pb-2 border-b border-[#d6d2c4]">
                    <span className="text-[11px] font-bold tracking-[0.25em] text-[var(--basil)] uppercase">
                      Página 2 • Fim da Semana & Especiais
                    </span>
                  </div>

                  {executivoSemana.slice(3, 5).map((diaItem) => (
                    <div key={diaItem.dia} className="space-y-4">
                      {/* Cabeçalho do Dia */}
                      <div className="flex items-center gap-3">
                        <span className="bg-[var(--tomato)] text-white font-serif-cormorant text-xl font-bold px-3 py-1 rounded-md shadow-sm">
                          {diaItem.dia}
                        </span>
                        <h4 className="font-serif-cormorant text-2xl text-[var(--espresso)] font-semibold">
                          {diaItem.diaExtenso}
                        </h4>
                      </div>

                      {/* Lista de Pratos do Dia */}
                      <div className="space-y-3">
                        {diaItem.pratos.map((prato) => (
                          <motion.div
                            key={prato.id}
                            whileHover={{ scale: 1.02, y: -2 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            onClick={() => {
                              if (prato.imagem) {
                                setSelectedDishModal({
                                  nome: prato.nome,
                                  preco: prato.preco,
                                  descricao: prato.acompanhamentos,
                                  imagem: prato.imagem,
                                  tag: prato.tag,
                                });
                              }
                            }}
                            className={`p-4 rounded-xl bg-white border border-[#e2dec9] hover:border-[var(--tomato)] hover:shadow-lg transition-all duration-200 group flex gap-4 items-center ${
                              prato.imagem ? 'cursor-pointer' : 'cursor-default'
                            }`}
                          >
                            {prato.imagem && (
                              <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-stone-100 border border-stone-200 group-hover:border-[var(--tomato)] transition-colors">
                                <img
                                  src={prato.imagem}
                                  alt={prato.nome}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                  <Eye size={16} />
                                </div>
                              </div>
                            )}

                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start gap-3 mb-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <h5 className="font-serif-cormorant text-xl text-[var(--espresso)] group-hover:text-[var(--tomato)] transition-colors font-medium">
                                    {prato.nome}
                                  </h5>
                                  {prato.tag && (
                                    <span className="text-[9px] font-bold uppercase tracking-wider bg-[var(--basil)]/10 text-[var(--basil)] px-2 py-0.5 rounded-full">
                                      {prato.tag}
                                    </span>
                                  )}
                                  {prato.imagem && (
                                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-[var(--basil)] bg-[var(--basil)]/10 px-2 py-0.5 rounded-full">
                                      <ImageIcon size={10} />
                                      <span>Foto</span>
                                    </span>
                                  )}
                                </div>
                                <span className="font-sans-body text-base font-bold text-[var(--basil)] whitespace-nowrap">
                                  R$ {prato.preco}
                                </span>
                              </div>
                              <p className="font-sans-body text-xs text-stone-600 leading-relaxed">
                                {prato.acompanhamentos}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Card Editorial de Destaque Italiano */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-xl bg-[var(--basil)] text-[var(--paper-white)] shadow-md border border-[var(--basil)] relative overflow-hidden"
                  >
                    <div className="relative z-10">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#e1ddcc] font-bold block mb-1">
                        Dica do Chef
                      </span>
                      <h5 className="font-serif-cormorant text-2xl text-white mb-2">
                        Buon Appetito!
                      </h5>
                      <p className="font-sans-body text-xs text-[#d6d2c4] leading-relaxed mb-4">
                        Todos os nossos pratos executivos acompanham guarnições preparadas com carinho. Harmonize com nossa seleção de vinhos em taça ou soda italiana refrescante.
                      </p>
                      <div className="text-[10px] tracking-widest uppercase font-bold text-[#e1ddcc] border-t border-white/20 pt-3">
                        Shopping Água Verde • Almoço Rápido e de Alta Gastronomia
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="menu-geral"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-[#f9f8f5] border border-[#d6d2c4] sm:border-2 rounded-2xl p-3.5 sm:p-8 md:p-12 shadow-xl sm:shadow-2xl relative overflow-hidden"
            >
              {/* Top Banner do Cardápio Geral */}
              <div className="border-b-2 border-[var(--basil)]/20 pb-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-[var(--basil)] text-xs uppercase tracking-[0.2em] font-bold mb-1">
                    <UtensilsCrossed size={14} />
                    <span>Cardápio Completo À La Carte</span>
                  </div>
                  <h3 className="font-serif-cormorant text-3xl md:text-5xl text-[var(--espresso)]">
                    Mangiarte Cucina Italiana
                  </h3>
                  <p className="text-stone-600 font-sans-body text-xs md:text-sm mt-1">
                    Disponível no almoço e jantar todos os dias. Massas moldadas à mão, risotos clássicos e receitas de família.
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0 flex-wrap justify-end">
                  <div className="hidden sm:block">
                    <MangiarteLogo size="sm" theme="light" />
                  </div>
                  <div className="bg-[var(--tomato)] text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">
                    Massas, Carnes, Risotos & Vinhos
                  </div>
                </div>
              </div>

              {/* Layout Estilo Menu Aberto - 2 Lados (Colunas) */}
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 relative items-start">
                
                {/* Divisória Central de Livro */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#d6d2c4]/80 -ml-[0.5px]"></div>

                {/* ================= PÁGINA ESQUERDA ================= */}
                <div className="space-y-12 pr-0 lg:pr-6">
                  
                  {/* SEÇÃO 1: SUGESTÕES DO CHEF */}
                  <div>
                    <div className="border-b-2 border-[var(--tomato)] pb-2 mb-6 flex justify-between items-baseline">
                      <h4 className="font-serif-cormorant text-3xl text-[var(--espresso)] font-bold">
                        Sugestões do Chef
                      </h4>
                      <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[var(--tomato)]">
                        Especialidades
                      </span>
                    </div>

                    {/* Sub-bloco: Frango */}
                    <div className="mb-6">
                      <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--basil)] bg-[var(--basil)]/10 px-3 py-1 rounded inline-block mb-3">
                        Frango
                      </h5>
                      <div className="space-y-3">
                        {cardapioGeral.sugestoesChef.frango.map((item) => (
                          <motion.div
                            key={item.id}
                            whileHover={{ scale: 1.02, y: -2 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            onClick={() => {
                              if (item.imagem) {
                                setSelectedDishModal({
                                  nome: item.nome,
                                  preco: item.preco,
                                  descricao: item.descricao,
                                  imagem: item.imagem,
                                });
                              }
                            }}
                            className={`p-3.5 rounded-xl bg-white border border-[#e2dec9] hover:border-[var(--tomato)] hover:shadow-md transition-all duration-200 group flex gap-3.5 items-center ${
                              item.imagem ? 'cursor-pointer' : 'cursor-default'
                            }`}
                          >
                            {item.imagem && (
                              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 bg-stone-100 border border-stone-200 group-hover:border-[var(--tomato)] transition-colors">
                                <img
                                  src={item.imagem}
                                  alt={item.nome}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                  <Eye size={16} />
                                </div>
                              </div>
                            )}

                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start gap-4 mb-1">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <h6 className="font-serif-cormorant text-xl text-[var(--espresso)] group-hover:text-[var(--tomato)] transition-colors font-medium">
                                    {item.nome}
                                  </h6>
                                  {item.imagem && (
                                    <span className="inline-flex items-center gap-1 text-[8px] font-bold text-[var(--basil)] bg-[var(--basil)]/10 px-1.5 py-0.5 rounded">
                                      <ImageIcon size={9} />
                                      <span>Ver foto</span>
                                    </span>
                                  )}
                                </div>
                                <span className="font-sans-body text-sm font-bold text-[var(--basil)] whitespace-nowrap">
                                  R$ {item.preco}
                                </span>
                              </div>
                              <p className="font-sans-body text-xs text-stone-600 leading-relaxed">
                                {item.descricao}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Sub-bloco: Bovino */}
                    <div className="mb-6">
                      <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--basil)] bg-[var(--basil)]/10 px-3 py-1 rounded inline-block mb-3">
                        Bovino
                      </h5>
                      <div className="space-y-3">
                        {cardapioGeral.sugestoesChef.bovino.map((item) => (
                          <motion.div
                            key={item.id}
                            whileHover={{ scale: 1.02, y: -2 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            onClick={() => {
                              if (item.imagem) {
                                setSelectedDishModal({
                                  nome: item.nome,
                                  preco: item.preco,
                                  descricao: item.descricao,
                                  imagem: item.imagem,
                                });
                              }
                            }}
                            className={`p-3.5 rounded-xl bg-white border border-[#e2dec9] hover:border-[var(--tomato)] hover:shadow-md transition-all duration-200 group flex gap-3.5 items-center ${
                              item.imagem ? 'cursor-pointer' : 'cursor-default'
                            }`}
                          >
                            {item.imagem && (
                              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 bg-stone-100 border border-stone-200 group-hover:border-[var(--tomato)] transition-colors">
                                <img
                                  src={item.imagem}
                                  alt={item.nome}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                  <Eye size={16} />
                                </div>
                              </div>
                            )}

                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start gap-4 mb-1">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <h6 className="font-serif-cormorant text-xl text-[var(--espresso)] group-hover:text-[var(--tomato)] transition-colors font-medium">
                                    {item.nome}
                                  </h6>
                                  {item.imagem && (
                                    <span className="inline-flex items-center gap-1 text-[8px] font-bold text-[var(--basil)] bg-[var(--basil)]/10 px-1.5 py-0.5 rounded">
                                      <ImageIcon size={9} />
                                      <span>Ver foto</span>
                                    </span>
                                  )}
                                </div>
                                <span className="font-sans-body text-sm font-bold text-[var(--basil)] whitespace-nowrap">
                                  R$ {item.preco}
                                </span>
                              </div>
                              <p className="font-sans-body text-xs text-stone-600 leading-relaxed">
                                {item.descricao}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Sub-bloco: Del Mare */}
                    <div>
                      <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--basil)] bg-[var(--basil)]/10 px-3 py-1 rounded inline-block mb-3">
                        Del Mare
                      </h5>
                      <div className="space-y-3">
                        {cardapioGeral.sugestoesChef.delMare.map((item) => (
                          <motion.div
                            key={item.id}
                            whileHover={{ scale: 1.02, y: -2 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            onClick={() => {
                              if (item.imagem) {
                                setSelectedDishModal({
                                  nome: item.nome,
                                  preco: item.preco,
                                  descricao: item.descricao,
                                  imagem: item.imagem,
                                });
                              }
                            }}
                            className={`p-3.5 rounded-xl bg-white border border-[#e2dec9] hover:border-[var(--tomato)] hover:shadow-md transition-all duration-200 group flex gap-3.5 items-center ${
                              item.imagem ? 'cursor-pointer' : 'cursor-default'
                            }`}
                          >
                            {item.imagem && (
                              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 bg-stone-100 border border-stone-200 group-hover:border-[var(--tomato)] transition-colors">
                                <img
                                  src={item.imagem}
                                  alt={item.nome}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                  <Eye size={16} />
                                </div>
                              </div>
                            )}

                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start gap-4 mb-1">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <h6 className="font-serif-cormorant text-xl text-[var(--espresso)] group-hover:text-[var(--tomato)] transition-colors font-medium">
                                    {item.nome}
                                  </h6>
                                  {item.imagem && (
                                    <span className="inline-flex items-center gap-1 text-[8px] font-bold text-[var(--basil)] bg-[var(--basil)]/10 px-1.5 py-0.5 rounded">
                                      <ImageIcon size={9} />
                                      <span>Ver foto</span>
                                    </span>
                                  )}
                                </div>
                                <span className="font-sans-body text-sm font-bold text-[var(--basil)] whitespace-nowrap">
                                  R$ {item.preco}
                                </span>
                              </div>
                              <p className="font-sans-body text-xs text-stone-600 leading-relaxed">
                                {item.descricao}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* SEÇÃO 2: RISOTOS COM FOTOS */}
                  <div>
                    <div className="border-b-2 border-[var(--tomato)] pb-2 mb-6 flex justify-between items-baseline">
                      <h4 className="font-serif-cormorant text-3xl text-[var(--espresso)] font-bold">
                        Risotos Selecionados
                      </h4>
                      <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[var(--tomato)]">
                        Arroz Arbóreo
                      </span>
                    </div>

                    <div className="space-y-3">
                      {cardapioGeral.risotos.map((risoto, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.02, y: -2 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          onClick={() => {
                            if (risoto.imagem) {
                              setSelectedDishModal({
                                nome: risoto.nome,
                                preco: risoto.preco,
                                descricao: risoto.descricao,
                                imagem: risoto.imagem,
                              });
                            }
                          }}
                          className={`p-3 rounded-xl bg-white border border-[#e2dec9] hover:border-[var(--tomato)] hover:shadow-md transition-all duration-200 group flex gap-3.5 items-center ${
                            risoto.imagem ? 'cursor-pointer' : 'cursor-default'
                          }`}
                        >
                          {risoto.imagem && (
                            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden flex-shrink-0 bg-stone-100 border border-stone-200 group-hover:border-[var(--tomato)] transition-colors">
                              <img
                                src={risoto.imagem}
                                alt={risoto.nome}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                <Eye size={14} />
                              </div>
                            </div>
                          )}

                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-center gap-4">
                              <div>
                                <h6 className="font-serif-cormorant text-lg text-[var(--espresso)] group-hover:text-[var(--tomato)] transition-colors font-semibold">
                                  {risoto.nome}
                                </h6>
                                <p className="font-sans-body text-xs text-stone-500">
                                  {risoto.descricao}
                                </p>
                              </div>
                              <span className="font-sans-body text-sm font-bold text-[var(--basil)] whitespace-nowrap">
                                R$ {risoto.preco}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ================= PÁGINA DIREITA ================= */}
                <div className="space-y-12 pl-0 lg:pl-6">
                  
                  {/* SEÇÃO 3: MONTE SUA MASSA (Destaque Interativo) */}
                  <div>
                    <div className="border-b-2 border-[var(--tomato)] pb-2 mb-6 flex justify-between items-baseline">
                      <h4 className="font-serif-cormorant text-3xl text-[var(--espresso)] font-bold">
                        Monte Sua Massa
                      </h4>
                      <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[var(--tomato)]">
                        Personalize
                      </span>
                    </div>

                    <motion.div 
                      whileHover={{ scale: 1.015 }}
                      className="bg-gradient-to-br from-[var(--basil)] to-[#1c2316] text-[var(--paper-white)] p-6 sm:p-8 rounded-2xl shadow-xl border border-[var(--basil)] relative overflow-hidden"
                    >
                    <div className="flex justify-between items-start gap-4 mb-4 border-b border-white/20 pb-3">
                      <div>
                        <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#e1ddcc] block">
                          Crie Sua Combinação
                        </span>
                        <h4 className="font-serif-cormorant text-3xl md:text-4xl text-white">
                          Monte Sua Massa
                        </h4>
                      </div>
                      <div className="bg-[var(--tomato)] text-white px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap">
                        R$ {cardapioGeral.monteSuaMassa.precoBase}
                      </div>
                    </div>

                    <p className="text-xs text-[#d6d2c4] mb-6">
                      Massa à sua escolha + Molho tradicional + 3 adicionais inclusos por R$ 33.
                    </p>

                    <div className="space-y-4 text-xs">
                      {/* Passo 1 */}
                      <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                        <span className="font-bold text-[#e1ddcc] uppercase tracking-wider block mb-1">
                          1. Escolha sua Massa:
                        </span>
                        <div className="flex flex-wrap gap-2 text-[var(--paper-white)]">
                          {cardapioGeral.monteSuaMassa.massas.map(m => (
                            <span key={m} className="bg-white/10 px-2.5 py-1 rounded-md">{m}</span>
                          ))}
                          {cardapioGeral.monteSuaMassa.massasRecheadas.map(mr => (
                            <span key={mr.nome} className="bg-[var(--tomato)]/40 border border-[var(--tomato)] px-2.5 py-1 rounded-md">
                              {mr.nome} ({mr.extra})
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Passo 2 */}
                      <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                        <span className="font-bold text-[#e1ddcc] uppercase tracking-wider block mb-1">
                          2. Escolha seu Molho:
                        </span>
                        <div className="flex flex-wrap gap-2 text-[var(--paper-white)]">
                          {cardapioGeral.monteSuaMassa.molhos.map(molho => (
                            <span key={molho} className="bg-white/10 px-2 py-0.5 rounded">{molho}</span>
                          ))}
                          {cardapioGeral.monteSuaMassa.molhosEspeciais.map(me => (
                            <span key={me.nome} className="bg-[var(--tomato)]/40 border border-[var(--tomato)] px-2 py-0.5 rounded">
                              {me.nome} ({me.extra})
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Passo 3 */}
                      <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                        <span className="font-bold text-[#e1ddcc] uppercase tracking-wider block mb-1">
                          3. Escolha 3 Adicionais:
                        </span>
                        <p className="text-[11px] text-[#d6d2c4] leading-relaxed">
                          {cardapioGeral.monteSuaMassa.adicionais3.join(' • ')}
                        </p>
                      </div>

                      {/* Passo 4 e 5 */}
                      <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                        <span className="font-bold text-[#e1ddcc] uppercase tracking-wider block mb-1">
                          4. Extras (R$ 7 cada) & 5. Proteínas Opcionais:
                        </span>
                        <p className="text-[11px] text-[#d6d2c4] mb-2">
                          Extras: {cardapioGeral.monteSuaMassa.extrasApenas7.join(', ')}
                        </p>
                        <div className="flex flex-wrap gap-1.5 text-[10px]">
                          {cardapioGeral.monteSuaMassa.proteinas.map(p => (
                            <span key={p.nome} className="bg-white/15 px-2 py-0.5 rounded text-white font-medium">
                              {p.nome} ({p.preco})
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                  {/* SEÇÃO 4: PANINIS, TOASTS & CALZONES */}
                  <div>
                    <div className="border-b-2 border-[var(--tomato)] pb-2 mb-6 flex justify-between items-baseline">
                      <h4 className="font-serif-cormorant text-3xl text-[var(--espresso)] font-bold">
                        Paninis & Toasts
                      </h4>
                      <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[var(--tomato)]">
                        Fermentação Natural ou Croissant
                      </span>
                    </div>

                    <div className="space-y-3">
                      {cardapioGeral.paninisEToasts.paninis.map((item, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.02, y: -2 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          onClick={() => {
                            if (item.imagem) {
                              setSelectedDishModal({
                                nome: item.nome,
                                preco: item.preco,
                                descricao: item.descricao,
                                imagem: item.imagem,
                              });
                            }
                          }}
                          className={`p-3.5 rounded-xl bg-white border border-[#e2dec9] hover:border-[var(--tomato)] hover:shadow-md transition-all duration-200 group flex gap-3.5 items-center ${
                            item.imagem ? 'cursor-pointer' : 'cursor-default'
                          }`}
                        >
                          {item.imagem && (
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 bg-stone-100 border border-stone-200 group-hover:border-[var(--tomato)] transition-colors">
                              <img
                                src={item.imagem}
                                alt={item.nome}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                                <Eye size={16} />
                              </div>
                            </div>
                          )}

                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start gap-4 mb-1">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <h6 className="font-serif-cormorant text-lg text-[var(--espresso)] group-hover:text-[var(--tomato)] transition-colors font-medium">
                                  {item.nome}
                                </h6>
                                {item.imagem && (
                                  <span className="inline-flex items-center gap-1 text-[8px] font-bold text-[var(--basil)] bg-[var(--basil)]/10 px-1.5 py-0.5 rounded">
                                    <ImageIcon size={9} />
                                    <span>Ver foto</span>
                                  </span>
                                )}
                              </div>
                              <span className="font-sans-body text-sm font-bold text-[var(--basil)] whitespace-nowrap">
                                R$ {item.preco}
                              </span>
                            </div>
                            <p className="font-sans-body text-xs text-stone-600">
                              {item.descricao}
                            </p>
                          </div>
                        </motion.div>
                      ))}

                      {cardapioGeral.paninisEToasts.toasts.map((toast, idx) => (
                        <motion.div
                          key={`toast-${idx}`}
                          whileHover={{ scale: 1.02, y: -2 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="p-3.5 rounded-xl bg-white border border-[#e2dec9] hover:border-[var(--tomato)] hover:shadow-md transition-all duration-200 cursor-default group"
                        >
                          <div className="flex justify-between items-start gap-4 mb-1">
                            <h6 className="font-serif-cormorant text-lg text-[var(--espresso)] group-hover:text-[var(--tomato)] transition-colors font-medium">
                              {toast.nome}
                            </h6>
                            <span className="font-sans-body text-sm font-bold text-[var(--basil)] whitespace-nowrap">
                              R$ {toast.preco}
                            </span>
                          </div>
                          <p className="font-sans-body text-xs text-stone-600">
                            {toast.descricao}
                          </p>
                        </motion.div>
                      ))}

                      {cardapioGeral.paninisEToasts.calzones.map((c, idx) => (
                        <motion.div
                          key={`calzone-${idx}`}
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="p-3.5 rounded-xl bg-[var(--paper-white)] border border-[#d6d2c4] flex justify-between items-center gap-3"
                        >
                          <div className="flex-1 min-w-0">
                            <h6 className="font-serif-cormorant text-lg text-[var(--espresso)] font-medium">{c.nome}</h6>
                            <p className="text-xs text-stone-600 leading-tight">{c.descricao}</p>
                          </div>
                          <span className="font-sans-body text-sm font-bold text-[var(--basil)] whitespace-nowrap shrink-0">R$ {c.preco}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* SEÇÃO 5: PORÇÕES, SOBREMESAS & BEBIDAS */}
                  <div>
                    <div className="border-b-2 border-[var(--tomato)] pb-2 mb-6 flex justify-between items-baseline">
                      <h4 className="font-serif-cormorant text-3xl text-[var(--espresso)] font-bold">
                        Porções, Sobremesas & Vinhos
                      </h4>
                      <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[var(--tomato)]">
                        Finalização
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {cardapioGeral.porcoes.map((porcao, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.02, y: -2 }}
                          onClick={() => {
                            if (porcao.imagem) {
                              setSelectedDishModal({
                                nome: porcao.nome,
                                preco: porcao.preco,
                                descricao: `Porção de ${porcao.peso}. Acompanhamento especial da casa.`,
                                imagem: porcao.imagem,
                              });
                            }
                          }}
                          className={`p-3 bg-white rounded-xl border border-[#e2dec9] hover:border-[var(--tomato)] transition-all flex items-center gap-3 ${
                            porcao.imagem ? 'cursor-pointer' : 'cursor-default'
                          }`}
                        >
                          {porcao.imagem && (
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-stone-100 border border-stone-200">
                              <img src={porcao.imagem} alt={porcao.nome} className="w-full h-full object-cover" />
                            </div>
                          )}
                          <div className="flex-1 flex justify-between items-center gap-3">
                            <div className="flex-1 min-w-0">
                              <span className="font-serif-cormorant text-base font-semibold text-[var(--espresso)] block">
                                {porcao.nome}
                              </span>
                              <span className="text-[10px] text-stone-500 block leading-tight">{porcao.peso}</span>
                            </div>
                            <span className="text-xs font-bold text-[var(--basil)] whitespace-nowrap shrink-0">R$ {porcao.preco}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Sobremesas */}
                    <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--tomato)] mb-3">
                      Dolci (Sobremesas)
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {cardapioGeral.sobremesasEBebidas.sobremesas.map((s, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="p-3 bg-white rounded-xl border border-[#e2dec9] hover:border-[var(--tomato)] transition-all"
                        >
                          <div className="flex justify-between items-center mb-1 gap-3">
                            <span className="font-serif-cormorant text-base font-semibold text-[var(--espresso)] truncate">{s.nome}</span>
                            <span className="text-xs font-bold text-[var(--basil)] whitespace-nowrap shrink-0">R$ {s.preco}</span>
                          </div>
                          <p className="text-[10px] text-stone-500 leading-tight">{s.descricao}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Bebidas e Vinhos */}
                    <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--basil)] mb-3">
                      Vinhos & Bebidas
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {cardapioGeral.sobremesasEBebidas.bebidas.map((b, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="p-3 bg-white rounded-xl border border-[#e2dec9] hover:border-[var(--tomato)] transition-all"
                        >
                          <div className="flex justify-between items-center gap-3">
                            <div className="flex-1 min-w-0">
                              <span className="font-serif-cormorant text-base font-semibold text-[var(--espresso)] block">{b.nome}</span>
                              <span className="text-[10px] text-stone-500 block leading-tight">{b.detalhe}</span>
                            </div>
                            <span className="text-xs font-bold text-[var(--basil)] whitespace-nowrap shrink-0 ml-2">R$ {b.preco}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Modal de Foto Individual de Prato */}
      <AnimatePresence>
        {selectedDishModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDishModal(null)}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm p-4 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[var(--paper-white)] text-[var(--espresso)] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl flex flex-col cursor-default border border-[#d6d2c4]"
            >
              <div className="flex items-center justify-between p-3.5 px-5 sm:p-4 sm:px-6 border-b border-[#d6d2c4] bg-[var(--ivory)]">
                <div className="flex items-center gap-2">
                  <UtensilsCrossed size={14} className="text-[var(--tomato)]" />
                  <span className="text-xs uppercase tracking-widest font-bold text-stone-600">
                    Prato Mangiarte
                  </span>
                </div>
                <button
                  onClick={() => setSelectedDishModal(null)}
                  className="p-1.5 rounded-full bg-black/5 hover:bg-black/10 text-[var(--espresso)] transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full bg-stone-950 overflow-hidden">
                <img
                  src={selectedDishModal.imagem}
                  alt={selectedDishModal.nome}
                  className="w-full h-full object-cover"
                />
                {selectedDishModal.tag && (
                  <div className="absolute top-3 left-3 bg-[var(--tomato)] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                    {selectedDishModal.tag}
                  </div>
                )}
              </div>

              <div className="p-4 sm:p-6 bg-[var(--paper-white)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div>
                  <div className="flex justify-between items-baseline gap-4 mb-1">
                    <h4 className="font-serif-cormorant text-2xl sm:text-3xl text-[var(--espresso)] font-semibold">
                      {selectedDishModal.nome}
                    </h4>
                    <span className="text-xs sm:text-sm font-bold text-white bg-[var(--tomato)] px-2.5 py-0.5 rounded-full whitespace-nowrap">
                      R$ {selectedDishModal.preco}
                    </span>
                  </div>
                  {selectedDishModal.descricao && (
                    <p className="text-stone-600 text-xs sm:text-sm font-sans-body max-w-md mb-2">
                      {selectedDishModal.descricao}
                    </p>
                  )}
                  <div className="pt-3 border-t border-[#d6d2c4] flex items-center justify-between text-[11px] text-stone-500">
                    <span>Shopping Água Verde • Curitiba</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal para Visualização do Panfleto Oficial do Executivo */}
      <AnimatePresence>
        {showFlyerModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowFlyerModal(false)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm p-4 flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[var(--paper-white)] p-2 md:p-4 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col relative cursor-default border border-[#d6d2c4]"
            >
              <div className="flex justify-between items-center mb-3 px-2">
                <span className="text-xs tracking-widest text-stone-600 uppercase font-bold">
                  Cardápio Oficial • Mangiarte
                </span>
                <button
                  onClick={() => setShowFlyerModal(false)}
                  className="text-[var(--espresso)] hover:text-[var(--tomato)] text-sm font-bold uppercase tracking-wider px-3 py-1 bg-black/5 hover:bg-black/10 rounded-full cursor-pointer transition-colors"
                >
                  Fechar &times;
                </button>
              </div>
              <img
                src="/panfleto-oficial.jpeg"
                alt="Menu Executivo da Semana Oficial"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
