import React from 'react';
import { MapPin, Clock, ExternalLink, Navigation, Car, ShoppingBag, Shield } from 'lucide-react';
import { MangiarteLogo } from './MangiarteLogo';

interface LocationAndContactProps {
  // Cleaned
}

export const LocationAndContact: React.FC<LocationAndContactProps> = () => {
  return (
    <section id="contato" className="py-16 sm:py-24 bg-[#faf8f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex justify-center mb-2">
            <MangiarteLogo size="sm" variant="badge" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-800 block mb-2 mt-4">
            Onde nos Encontrar
          </span>
          <h2 className="font-serif-cormorant text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Mangiarte no Shopping Água Verde
          </h2>
          <div className="w-16 h-0.5 bg-amber-600 mx-auto my-3" />
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Venha desfrutar de uma autêntica refeição italiana com toda a segurança,
            estacionamento coberto e conforto do tradicional Shopping Água Verde em Curitiba.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Info Cards Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200/60">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-serif-cormorant text-xl font-bold text-stone-900">
                    Endereço
                  </h4>
                  <p className="text-sm font-semibold text-stone-900 mt-1">
                    Shopping Água Verde
                  </p>
                  <p className="text-sm text-stone-600">
                    Av. República Argentina, 1927
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Bairro Água Verde — Curitiba / PR • CEP 80620-010
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href="https://maps.google.com/?q=Shopping+Agua+Verde+Curitiba"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100/80 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Abrir no Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="https://waze.com/ul?q=Shopping%20Agua%20Verde%20Curitiba"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <span>Abrir no Waze</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200/60">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-serif-cormorant text-xl font-bold text-stone-900">
                    Horários de Atendimento
                  </h4>
                  <ul className="mt-3 space-y-2.5 text-xs sm:text-sm text-stone-600">
                    <li className="flex justify-between pb-2 border-b border-stone-100 bg-amber-50/50 p-2 rounded-lg">
                      <span className="font-semibold text-stone-900 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        Menu Executivo:
                      </span>
                      <span className="font-bold text-amber-900">Seg a Sex • 11h às 15h</span>
                    </li>
                    <li className="flex justify-between pb-1.5 border-b border-stone-100">
                      <span className="font-medium text-stone-900">Segunda a Sábado:</span>
                      <span>10h00 às 22h00</span>
                    </li>
                    <li className="flex justify-between pb-1.5 border-b border-stone-100">
                      <span className="font-medium text-stone-900">Domingos e Feriados:</span>
                      <span>11h00 às 20h00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Shopping Mall Amenities */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
              <h4 className="font-serif-cormorant text-lg font-bold text-stone-900 mb-3">
                Comodidades do Shopping
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs text-stone-600">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-stone-50">
                  <Car className="w-4 h-4 text-amber-600" />
                  <span>Estacionamento coberto</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-stone-50">
                  <Shield className="w-4 h-4 text-amber-600" />
                  <span>Segurança e conforto</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-stone-50">
                  <ShoppingBag className="w-4 h-4 text-amber-600" />
                  <span>Ambiente climatizado</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-stone-50">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>Fácil acesso</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Column */}
          <div className="lg:col-span-7 flex flex-col h-full gap-6">
            {/* Google Maps Card */}
            <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden h-full flex flex-col min-h-[400px]">
              <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between">
                <div>
                  <h4 className="font-serif-cormorant text-lg font-bold text-stone-900">
                    Localização no Mapa
                  </h4>
                  <span className="text-xs text-stone-500">
                    Shopping Água Verde — Av. República Argentina, 1927
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=Shopping+Agua+Verde+Curitiba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1"
                >
                  <span>Ver ampliado</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Embedded Google Map iframe */}
              <div className="relative w-full flex-1 bg-stone-100">
                <iframe
                  title="Mapa do Shopping Água Verde Curitiba"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.408714479901!2d-49.2941097!3d-25.4579895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce38a1921316b%3A0xe104fc5e4d2a1a8c!2sShopping%20%C3%81gua%20Verde!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
