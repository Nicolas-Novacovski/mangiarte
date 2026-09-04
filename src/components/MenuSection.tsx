import React, { useState, useMemo } from 'react';
import { EXECUTIVE_WEEKLY_MENU, MENU_CATEGORIES, INITIAL_MENU_ITEMS, CHEF_FEATURED_DISH } from '../data/menuData';
import { Search, Sparkles, Clock, CalendarDays, UtensilsCrossed, Phone, Info } from 'lucide-react';
import { MangiarteLogo } from './MangiarteLogo';

export const MenuSection: React.FC = () => {
  // Determine current day of week to auto-highlight (0 = Sun, 1 = Mon, ... 5 = Fri, 6 = Sat)
  const currentDayIndex = new Date().getDay();
  const defaultDayKey =
    currentDayIndex === 1 ? 'seg' :
    currentDayIndex === 2 ? 'ter' :
    currentDayIndex === 3 ? 'qua' :
    currentDayIndex === 4 ? 'qui' :
    currentDayIndex === 5 ? 'sex' : 'seg';

  const [selectedDay, setSelectedDay] = useState<'all' | 'seg' | 'ter' | 'qua' | 'qui' | 'sex'>(defaultDayKey);
  const [activeTab, setActiveTab] = useState<'executivo' | 'alacarte'>('executivo');
  const [alacarteCategory, setAlacarteCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(val);
  };

  const filteredAlacarte = useMemo(() => {
    return INITIAL_MENU_ITEMS.filter((item) => {
      const matchesCat = alacarteCategory === 'all' || item.category === alacarteCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.italianName && item.italianName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [alacarteCategory, searchQuery]);

  const activeDayData = EXECUTIVE_WEEKLY_MENU.find((d) => d.dayKey === selectedDay);

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#faf8f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="flex justify-center mb-3">
            <MangiarteLogo size="sm" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-800 block mb-2">
            Cardápio Oficial
          </span>
          <h2 className="font-serif-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight">
            Menu Mangiarte
          </h2>
          <div className="w-16 h-0.5 bg-amber-600 mx-auto my-3" />
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Receitas preparadas com afeto e ingredientes selecionados na praça de alimentação do Shopping Água Verde.
          </p>

          {/* Main Tabs: Executive vs A la Carte */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-stone-200/70 border border-stone-300 shadow-inner">
            <button
              type="button"
              id="tab-btn-executivo"
              onClick={() => setActiveTab('executivo')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'executivo'
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <CalendarDays className="w-4 h-4 text-amber-400" />
              <span>Menu Executivo da Semana</span>
            </button>
            <button
              type="button"
              id="tab-btn-alacarte"
              onClick={() => setActiveTab('alacarte')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'alacarte'
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <UtensilsCrossed className="w-4 h-4 text-amber-400" />
              <span>Cardápio Completo & Bebidas</span>
            </button>
          </div>
        </div>

        {/* 1. EXECUTIVE MENU VIEW */}
        {activeTab === 'executivo' && (
          <div className="animate-in fade-in duration-300">
            {/* Banner card matching Image 1 */}
            <div className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-10 shadow-xl border border-stone-800 relative overflow-hidden mb-10">
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-800">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-2">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>De Segunda a Sexta • das 11h às 15h</span>
                  </div>
                  <h3 className="font-serif-cormorant text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    Menu Executivo da Semana
                  </h3>
                  <p className="text-stone-300 text-sm mt-1 max-w-xl">
                    Pratos frescos preparados na hora com sabor caseiro italiano e porções generosas.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="text-center sm:text-right">
                    <span className="text-xs text-stone-400 uppercase tracking-wider block">Valores a partir de</span>
                    <span className="font-serif-cormorant text-3xl font-bold text-amber-400">R$ 28,00</span>
                  </div>
                </div>
              </div>

              {/* Day filter tabs (SEG, TER, QUA, QUI, SEX, TODOS) */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedDay('all')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedDay === 'all'
                      ? 'bg-amber-500 text-stone-950 shadow-md font-semibold'
                      : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700 hover:text-white'
                  }`}
                >
                  Ver Semana Toda
                </button>
                {EXECUTIVE_WEEKLY_MENU.map((day) => {
                  const isSelected = selectedDay === day.dayKey;
                  return (
                    <button
                      key={day.dayKey}
                      type="button"
                      onClick={() => setSelectedDay(day.dayKey)}
                      className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500 text-stone-950 shadow-md font-bold'
                          : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700 hover:text-white'
                      }`}
                    >
                      <span className="font-mono">{day.shortDay}</span>
                      <span className="hidden sm:inline font-normal">({day.fullDay.split('-')[0]})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Days grid matching Image 1 layout */}
            <div className="space-y-8">
              {EXECUTIVE_WEEKLY_MENU.filter((d) => selectedDay === 'all' || d.dayKey === selectedDay).map((day) => (
                <div
                  key={day.dayKey}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200 transition-all hover:shadow-md"
                >
                  {/* Day Header */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-200">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-stone-900 text-amber-400 font-serif-cormorant font-bold text-xl flex items-center justify-center shadow-xs">
                        {day.shortDay}
                      </span>
                      <div>
                        <h4 className="font-serif-cormorant text-2xl font-bold text-stone-900">
                          {day.fullDay}
                        </h4>
                        <span className="text-xs text-stone-500">
                          Horário de almoço das 11h às 15h
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
                      2 opções do dia
                    </span>
                  </div>

                  {/* Dishes for this day */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {day.dishes.map((dish, idx) => (
                      <div
                        key={dish.id}
                        className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                      >
                        <div>
                          {dish.image && (
                            <div className="h-40 overflow-hidden relative bg-stone-100">
                              <img
                                src={dish.image}
                                alt={dish.name}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              {dish.badge && (
                                <span className="absolute top-3 left-3 bg-emerald-600/90 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                                  ★ {dish.badge}
                                </span>
                              )}
                            </div>
                          )}
                          <div className="p-5">
                            <div className="flex items-baseline justify-between gap-2 mb-1">
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold text-amber-800 bg-amber-100/80 w-5 h-5 rounded-full flex items-center justify-center shrink-0">
                                  {idx + 1}
                                </span>
                                <h5 className="font-serif-cormorant text-xl sm:text-2xl font-bold text-stone-900">
                                  {dish.name}
                                </h5>
                              </div>
                              <span className="font-serif-cormorant text-2xl font-bold text-amber-700 whitespace-nowrap shrink-0">
                                {formatCurrency(dish.price)}
                              </span>
                            </div>
                            <p className="text-sm text-stone-600 leading-relaxed mt-2 ml-7">
                              {dish.accompaniments}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Chef suggestion promo banner below executive */}
            <div className="mt-12 bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-800 shadow-md">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0">
                  <Sparkles className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                    Sugestão Especial da Casa
                  </span>
                  <h4 className="font-serif-cormorant text-2xl sm:text-3xl font-bold text-white">
                    Camarão Provençal com Penne Gratinado
                  </h4>
                  <p className="text-stone-300 text-xs sm:text-sm mt-0.5">
                    Penne ao molho cremoso de parmesão com alho gratinado com queijo e camarões à provençal. Acompanha batatas chips.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <span className="font-serif-cormorant text-3xl font-bold text-amber-400">
                  R$ 59,00
                </span>
                <a
                  href="#destaque-prato"
                  className="bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold px-5 py-3 rounded-full transition-colors"
                >
                  Ver Detalhes
                </a>
              </div>
            </div>
          </div>
        )}

        {/* 2. A LA CARTE & DRINKS VIEW */}
        {activeTab === 'alacarte' && (
          <div className="animate-in fade-in duration-300">
            {/* Search & Categories */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
              {/* Category buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setAlacarteCategory('all')}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    alacarteCategory === 'all'
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  Todos
                </button>
                <button
                  type="button"
                  onClick={() => setAlacarteCategory('pratos')}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    alacarteCategory === 'pratos'
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  Especiais & Carnes
                </button>
                <button
                  type="button"
                  onClick={() => setAlacarteCategory('massas')}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    alacarteCategory === 'massas'
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  Massas Italianas
                </button>
                <button
                  type="button"
                  onClick={() => setAlacarteCategory('sobremesas')}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    alacarteCategory === 'sobremesas'
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  Sobremesas
                </button>
                <button
                  type="button"
                  onClick={() => setAlacarteCategory('bebidas')}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    alacarteCategory === 'bebidas'
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  Bebidas & Vinhos
                </button>
              </div>

              {/* Search input */}
              <div className="relative w-full md:w-64">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar prato ou ingrediente..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs pl-9 pr-3 py-2 bg-white border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>
            </div>

            {/* Grid of Dishes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAlacarte.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Item Image */}
                    <div className="h-48 overflow-hidden relative bg-stone-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.badge && (
                        <span className="absolute top-3 left-3 bg-amber-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <div className="p-5">
                      <div className="flex items-baseline justify-between gap-2 mb-1">
                        <h4 className="font-serif-cormorant text-xl font-bold text-stone-900">
                          {item.name}
                        </h4>
                        <span className="font-serif-cormorant text-xl font-bold text-amber-700 whitespace-nowrap">
                          {formatCurrency(item.price)}
                        </span>
                      </div>

                      {item.italianName && (
                        <p className="text-[11px] italic text-stone-500 mb-2 font-serif-cormorant">
                          {item.italianName}
                        </p>
                      )}

                      <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 mt-2">
                    <div className="w-full flex items-center justify-center gap-2 bg-stone-100 text-stone-600 text-xs font-semibold py-2 rounded-xl">
                      <span>Disponível no Balcão</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
