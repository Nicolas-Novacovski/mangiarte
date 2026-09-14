import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { MangiarteLogo } from './MangiarteLogo';

export const LocationAndContact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-[#ebe8dc] border-t border-[#d6d2c4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Info Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif-cormorant text-5xl text-[#161616] mb-12">
                Visite-nos.
              </h2>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="bg-[#8b261b]/10 p-3 rounded-full text-[#8b261b] mt-1"><MapPin strokeWidth={1.5} size={24}/></div>
                  <div className="pt-2">
                    <h3 className="text-xs tracking-[0.2em] uppercase font-bold text-[#161616] mb-2">Endereço</h3>
                    <p className="text-stone-600 font-sans-body text-sm leading-relaxed">
                      Shopping Água Verde • Praça de Alimentação<br />
                      Av. Rep. Argentina, 1927 - Água Verde<br />
                      Curitiba - PR
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-[#8b261b]/10 p-3 rounded-full text-[#8b261b] mt-1"><Clock strokeWidth={1.5} size={24}/></div>
                  <div className="pt-2">
                    <h3 className="text-xs tracking-[0.2em] uppercase font-bold text-[#161616] mb-2">Horários</h3>
                    <p className="text-stone-600 font-sans-body text-sm leading-relaxed">
                      Segunda a Sábado: 11h às 22h<br />
                      Domingo: 11h às 16h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-[#8b261b]/10 p-3 rounded-full text-[#8b261b] mt-1"><Phone strokeWidth={1.5} size={24}/></div>
                  <div className="pt-2">
                    <h3 className="text-xs tracking-[0.2em] uppercase font-bold text-[#161616] mb-2">Informações & Atendimento</h3>
                    <p className="text-stone-600 font-sans-body text-sm leading-relaxed mb-4">
                      Atendimento rápido na Praça de Alimentação do Shopping Água Verde. Mesas disponíveis da praça e estacionamento no local.
                    </p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Shopping+Água+Verde+Curitiba" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-bold text-[#8b261b] border-b border-[#8b261b] pb-1 hover:text-[#6b1d15] hover:border-[#6b1d15] transition-colors"
                    >
                      Ver Rota no Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 h-[500px] bg-[#f4f3ef] relative overflow-hidden rounded-lg shadow-xl"
          >
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
          </motion.div>

        </div>
      </div>
    </section>
  );
};
