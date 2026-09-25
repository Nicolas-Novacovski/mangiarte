import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { MangiarteLogo } from './MangiarteLogo';

export const LocationAndContact: React.FC = () => {
  return (
    <section id="contato" className="py-14 sm:py-20 md:py-24 bg-[var(--ivory)] border-t border-[#d6d2c4]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-14">
          
          {/* Info Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col h-full justify-between"
            >
              <div>
                <div className="mb-5">
                  <MangiarteLogo size="md" theme="light" />
                </div>
                <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-bold text-[var(--tomato)] block mb-2">
                  Onde Estamos
                </span>
                <h2 className="font-serif-cormorant text-3xl sm:text-5xl text-[var(--espresso)] mb-8 sm:mb-10">
                  Visite-nos.
                </h2>
                
                <div className="space-y-6 sm:space-y-7">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="bg-[var(--tomato)]/10 p-2.5 sm:p-3 rounded-full text-[var(--tomato)] shrink-0 mt-0.5">
                      <MapPin strokeWidth={1.5} size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="text-xs tracking-[0.2em] uppercase font-bold text-[var(--espresso)] mb-1">Endereço & Região</h3>
                      <p className="text-stone-600 font-sans-body text-xs sm:text-sm leading-relaxed">
                        Shopping Água Verde • Praça de Alimentação<br />
                        Av. Rep. Argentina, 1927 - Água Verde, Curitiba - PR<br />
                        <span className="text-stone-500 text-[11px] block mt-1">Fácil acesso para os bairros Água Verde, Batel, Portão, Vila Izabel e Rebouças.</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="bg-[var(--tomato)]/10 p-2.5 sm:p-3 rounded-full text-[var(--tomato)] shrink-0 mt-0.5">
                      <Clock strokeWidth={1.5} size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="text-xs tracking-[0.2em] uppercase font-bold text-[var(--espresso)] mb-1">Horários de Funcionamento</h3>
                      <p className="text-stone-600 font-sans-body text-xs sm:text-sm leading-relaxed">
                        Segunda a Sábado: 11h às 22h (Almoço & Jantar)<br />
                        Domingo: 11h às 16h (Almoço Italiano)<br />
                        <span className="text-stone-500 text-[11px] block mt-1">Menu Executivo da Semana servido de segunda a sexta, das 11h às 15h.</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="bg-[var(--tomato)]/10 p-2.5 sm:p-3 rounded-full text-[var(--tomato)] shrink-0 mt-0.5">
                      <Phone strokeWidth={1.5} size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="text-xs tracking-[0.2em] uppercase font-bold text-[var(--espresso)] mb-1">Informações & Comodidades</h3>
                      <p className="text-stone-600 font-sans-body text-xs sm:text-sm leading-relaxed mb-4">
                        Atendimento acolhedor na ampla Praça de Alimentação do Shopping Água Verde. Estacionamento coberto no local e localização privilegiada em frente à Estação Tubo Dom Pedro I na rápida Portão/Centro.
                      </p>
                      <a 
                        href="https://www.google.com/maps/dir/?api=1&destination=Shopping+Água+Verde+Curitiba" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase font-bold text-[var(--tomato)] hover:text-[#6b1d15] bg-[var(--tomato)]/10 hover:bg-[var(--tomato)]/20 px-4 py-2.5 rounded-lg transition-all cursor-pointer"
                      >
                        <MapPin size={14} /> Como Chegar no Shopping
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col h-full"
          >
            <div className="w-full h-[350px] sm:h-[420px] lg:h-full lg:min-h-[540px] flex-1 bg-[var(--paper-white)] relative overflow-hidden rounded-2xl shadow-lg border border-[#d6d2c4] flex flex-col">
              <div className="bg-white/95 px-4 sm:px-5 py-3 border-b border-[#d6d2c4] flex items-center justify-between z-10 shrink-0">
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--basil)] uppercase tracking-wider">
                  <MapPin size={15} className="text-[var(--tomato)]" />
                  <span>Localização no Mapa</span>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Shopping+Água+Verde+Curitiba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[var(--tomato)] hover:underline uppercase tracking-wider flex items-center gap-1"
                >
                  Abrir Rota &rarr;
                </a>
              </div>
              <div className="relative flex-1 w-full h-full min-h-[280px]">
                <iframe 
                  src="https://maps.google.com/maps?q=Shopping%20%C3%81gua%20Verde,%20Av.%20Rep.%20Argentina,%201927%20-%20%C3%81gua%20Verde,%20Curitiba%20-%20PR&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Shopping Água Verde"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Shopping+Água+Verde+Curitiba"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[var(--tomato)] text-white border-2 border-[var(--tomato)] hover:bg-white hover:text-[var(--tomato)] active:scale-[0.98] rounded-xl text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 shadow-md transition-all duration-300 sm:hidden cursor-pointer mt-3"
            >
              <MapPin size={16} /> Abrir Rota GPS no Google Maps
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
