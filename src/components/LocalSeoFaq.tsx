import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MapPin, UtensilsCrossed, Clock, ShieldCheck } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

const faqs: FaqItem[] = [
  {
    category: 'Localização & Acesso',
    question: 'Onde fica o restaurante italiano Mangiarte em Curitiba?',
    answer: 'O Mangiarte Cucina Italiana está situado na Praça de Alimentação do Shopping Água Verde (Av. República Argentina, 1927 - Água Verde, Curitiba - PR). Um ponto central e acessível para quem está nos bairros Água Verde, Batel, Portão, Vila Izabel e Rebouças.',
  },
  {
    category: 'Almoço & Cardápio',
    question: 'O Mangiarte oferece Almoço Executivo na região do Água Verde?',
    answer: 'Sim! De segunda a sexta-feira, das 11h às 15h, servimos nosso Menu Executivo da Semana com pratos completos, massas artesanais, parmegianas, risotos e grelhados preparados na hora com a autêntica tradição italiana, ideais para o almoço do dia a dia.',
  },
  {
    category: 'Especialidades',
    question: 'Quais são as especialidades da culinária italiana servidas no restaurante?',
    answer: 'Somos especialistas em massas artesanais (tagliatelle, fettuccine, penne), gnocchi tradicional, polpetone recheado com queijo derretido ao molho sugo, risotos clássicos, carnes nobres e pratos que homenageiam as receitas das cantinas clássicas italianas.',
  },
  {
    category: 'Comodidades',
    question: 'O Shopping Água Verde possui estacionamento e transporte público próximo?',
    answer: 'Sim! O shopping conta com estacionamento coberto no próprio edifício com segurança e está posicionado em frente à Estação Tubo Dom Pedro I na rápida Portão/Centro (linhas biarticuladas Santa Cândida / Capão Raso e Pinheirinho).',
  },
  {
    category: 'Funcionamento',
    question: 'Qual é o horário de funcionamento do restaurante aos finais de semana?',
    answer: 'Atendemos de segunda a sábado das 11h às 22h ininterruptamente (almoço e jantar), e aos domingos das 11h às 16h para um almoço em família tranquilo e saboroso.',
  },
];

export const LocalSeoFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-14 sm:py-20 bg-[#f7f5ef] border-t border-[#d6d2c4] relative">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-[var(--tomato)] text-xs uppercase tracking-[0.25em] font-bold mb-2">
            <HelpCircle size={15} />
            <span>Guia & Perguntas Frequentes</span>
          </div>
          <h2 className="font-serif-cormorant text-3xl sm:text-4xl md:text-5xl text-[var(--espresso)] leading-tight">
            Restaurante Italiano no Água Verde
          </h2>
          <p className="text-stone-600 font-sans-body text-xs sm:text-sm mt-3 leading-relaxed">
            Tudo o que você precisa saber sobre o Mangiarte Cucina Italiana, opções de almoço executivo, cardápio à la carte e como chegar no Shopping Água Verde em Curitiba.
          </p>
        </div>

        {/* Local Neighborhoods Badge */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-white/70 border border-[#d6d2c4] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="bg-[var(--basil)]/10 text-[var(--basil)] p-2.5 rounded-full shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-bold text-[var(--espresso)]">
                Localização Estratégica em Curitiba
              </p>
              <p className="text-stone-600 text-xs mt-0.5">
                Shopping Água Verde • Atendendo Água Verde, Batel, Portão, Vila Izabel e Rebouças
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-1.5 text-[11px] font-semibold text-stone-600">
            <span className="bg-stone-100 border border-stone-200 px-2.5 py-1 rounded-full">Água Verde</span>
            <span className="bg-stone-100 border border-stone-200 px-2.5 py-1 rounded-full">Batel</span>
            <span className="bg-stone-100 border border-stone-200 px-2.5 py-1 rounded-full">Portão</span>
            <span className="bg-stone-100 border border-stone-200 px-2.5 py-1 rounded-full">Vila Izabel</span>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl border border-[#d6d2c4] shadow-sm overflow-hidden transition-all duration-200 hover:border-[var(--tomato)]/40"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors hover:bg-stone-50/50"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <div className="flex flex-col gap-1 pr-2">
                    {faq.category && (
                      <span className="text-[10px] tracking-widest uppercase font-bold text-[var(--basil)]">
                        {faq.category}
                      </span>
                    )}
                    <span className="font-serif-cormorant text-lg sm:text-xl font-bold text-[var(--espresso)] leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[var(--tomato)] text-white' : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-stone-600 font-sans-body text-xs sm:text-sm leading-relaxed border-t border-stone-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
