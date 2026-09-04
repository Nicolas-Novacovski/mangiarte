import React from 'react';
import { Heart, Clock, ShieldCheck, Flame } from 'lucide-react';
import { MangiarteLogo } from './MangiarteLogo';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-nos" className="py-20 sm:py-28 bg-[#f5f0e8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column / Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg border border-[#e7ded1]">
              <img
                src="https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=1200&q=80"
                alt="Chefs preparando massa fresca no Mangiarte"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating quote pill inside image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 text-white">
                <p className="font-serif-cormorant text-lg italic text-[#fed7aa]">
                  &ldquo;A comida italiana não é apenas receita, é afeto, tempo e memória em volta da mesa.&rdquo;
                </p>
                <span className="text-[11px] tracking-wider uppercase text-stone-300 block mt-1">
                  — Filosofia Mangiarte
                </span>
              </div>
            </div>

            {/* Small offset card showing tradition */}
            <div className="hidden sm:block absolute -top-6 -right-6 z-20 bg-[#faf8f5] p-4 rounded-2xl border border-[#e7ded1] shadow-lg max-w-xs">
              <div className="flex items-center gap-3">
                <MangiarteLogo size="sm" theme="light" />
                <div>
                  <h4 className="font-serif-cormorant font-bold text-base text-[#1c1917]">
                    Shopping Água Verde
                  </h4>
                  <p className="text-xs text-[#78716c]">
                    Curitiba • Estacionamento & Conforto
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text & Philosophy Column */}
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c2410c] block mb-2">
              Sobre Nós
            </span>
            <h2 className="font-serif-cormorant text-3xl sm:text-5xl font-bold text-[#1c1917] tracking-tight leading-tight">
              Onde a Tradição Italiana Encontra a Arte Gastronômica
            </h2>

            <p className="mt-6 text-sm sm:text-base text-[#57534e] leading-relaxed">
              O nome <strong>Mangiarte</strong> nasce da feliz junção entre <em>Mangiare</em> (comer) e <em>Arte</em>.
              Acreditamos que preparar uma boa massa é um ato artístico que exige respeito ao tempo, maestria na técnica e
              ingredientes de altíssima qualidade.
            </p>

            <p className="mt-4 text-sm sm:text-base text-[#57534e] leading-relaxed">
              Instalado no tradicional <strong>Shopping Água Verde em Curitiba</strong>, o Mangiarte oferece a atmosfera
              calorosa das autênticas trattorias italianas com a tranquilidade, segurança e facilidade de acesso que você e sua
              família merecem.
            </p>

            {/* 4 Core Pillars Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#faf8f5] rounded-xl border border-[#e7ded1]">
                <div className="flex items-center gap-2.5 text-[#c2410c] mb-1.5">
                  <Flame className="w-4 h-4" />
                  <span className="font-semibold text-xs uppercase tracking-wider text-[#1c1917]">
                    Feito na Casa
                  </span>
                </div>
                <p className="text-xs text-[#57534e]">
                  Massas abertas diariamente, molhos apurados com paciência e caldos artesanais.
                </p>
              </div>

              <div className="p-4 bg-[#faf8f5] rounded-xl border border-[#e7ded1]">
                <div className="flex items-center gap-2.5 text-[#c2410c] mb-1.5">
                  <Heart className="w-4 h-4" />
                  <span className="font-semibold text-xs uppercase tracking-wider text-[#1c1917]">
                    Ingredientes Nobres
                  </span>
                </div>
                <p className="text-xs text-[#57534e]">
                  Farinha de grano duro, queijos maturados e azeites extravirgens selecionados.
                </p>
              </div>

              <div className="p-4 bg-[#faf8f5] rounded-xl border border-[#e7ded1]">
                <div className="flex items-center gap-2.5 text-[#c2410c] mb-1.5">
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold text-xs uppercase tracking-wider text-[#1c1917]">
                    Almoço & Jantar
                  </span>
                </div>
                <p className="text-xs text-[#57534e]">
                  Cardápio completo para encontros de negócios, almoço em família ou noites especiais.
                </p>
              </div>

              <div className="p-4 bg-[#faf8f5] rounded-xl border border-[#e7ded1]">
                <div className="flex items-center gap-2.5 text-[#c2410c] mb-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-semibold text-xs uppercase tracking-wider text-[#1c1917]">
                    Conforto & Segurança
                  </span>
                </div>
                <p className="text-xs text-[#57534e]">
                  Localizado no Shopping Água Verde com estacionamento privativo e total comodidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
