import React from 'react';
import { Sparkles } from 'lucide-react';

const DEFAULT_DISH_IMAGE = 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=1600&q=85';

export const FeaturedDish: React.FC = () => {
  return (
    <section id="destaque-prato" className="py-14 sm:py-20 bg-[#f7f4ed] border-y border-stone-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sugestão Especial do Chef</span>
          </div>
          <h2 className="font-serif-cormorant text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Camarão Provençal
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            Uma combinação sublime da tradição italiana com a intensidade aromática dos frutos do mar.
          </p>
        </div>

        {/* Dish Showcase Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          {/* Dish Image Container */}
          <div className="lg:col-span-7 relative group min-h-[340px] sm:min-h-[440px] bg-stone-900 overflow-hidden">
            <img
              id="featured-dish-image"
              src={DEFAULT_DISH_IMAGE}
              alt="Camarão Provençal do Mangiarte Cucina Italiana"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center min-h-[340px] sm:min-h-[440px] transition-transform duration-700 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            {/* Floating Tag */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-medium border border-white/15">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Receita Autoral • Mangiarte</span>
            </div>
          </div>

          {/* Dish Details matching image 3 */}
          <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-800 bg-amber-50 px-2.5 py-1 rounded">
                  Especial da Casa
                </span>
                <span className="font-serif-cormorant text-3xl font-bold text-amber-700">
                  R$ 59,00
                </span>
              </div>

              <h3 className="font-serif-cormorant text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
                Penne ao Molho Cremoso de Parmesão com Camarões
              </h3>

              <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
                Penne al dente envolvido em molho aveludado cremoso de parmesão com toque sutil de alho, gratinado com queijo derretido no forno e coberto generosamente com camarões à provençal salteados no azeite e ervas frescas.
              </p>

              <div className="mt-4 p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl">
                <span className="text-xs font-semibold text-amber-900 flex items-center gap-1.5">
                  ✨ Acompanhamento incluso:
                </span>
                <p className="text-xs text-amber-800 mt-1">
                  Acompanha batatas chips artesanais crocantes, sequinhas e douradas.
                </p>
              </div>

              {/* Badges */}
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="text-xs bg-stone-100 text-stone-700 px-3 py-1 rounded-full font-medium">
                  Camarões Selecionados
                </span>
                <span className="text-xs bg-stone-100 text-stone-700 px-3 py-1 rounded-full font-medium">
                  Penne Gratinado ao Forno
                </span>
                <span className="text-xs bg-stone-100 text-stone-700 px-3 py-1 rounded-full font-medium">
                  Parmesão Cremoso
                </span>
                <span className="text-xs bg-stone-100 text-stone-700 px-3 py-1 rounded-full font-medium">
                  Chips Artesanal
                </span>
              </div>
            </div>

            {/* Shopping prompt */}
            <div className="mt-8 pt-4 border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs font-semibold text-stone-500">
                Disponível no Shopping Água Verde
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
