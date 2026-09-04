import React from 'react';
import { Instagram, Phone, MapPin, Heart, ArrowUp, Clock } from 'lucide-react';
import { MangiarteLogo } from './MangiarteLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#100e0d] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Logo from Image 2 */}
          <div className="flex flex-col">
            <div className="mb-4">
              <MangiarteLogo size="md" />
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              A verdadeira arte da culinária italiana no Shopping Água Verde, em Curitiba.
              Receitas feitas com afeto, o tradicional Menu Executivo da Semana e pratos especiais.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Mangiarte"
                className="w-8 h-8 rounded-full bg-stone-800 hover:bg-amber-600 text-stone-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif-cormorant text-lg font-bold text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <a href="#hero-section" className="hover:text-amber-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#destaque-prato" className="hover:text-amber-400 transition-colors">
                  Prato em Destaque (Camarão Provençal)
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Menu Executivo & Cardápio
                </a>
              </li>
              <li>
                <a href="#sobre-nos" className="hover:text-amber-400 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-amber-400 transition-colors">
                  Localização & Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Shopping Água Verde */}
          <div>
            <h4 className="font-serif-cormorant text-lg font-bold text-white mb-4">
              Localização
            </h4>
            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  Shopping Água Verde<br />
                  Av. República Argentina, 1927<br />
                  Curitiba - PR • CEP 80620-010
                </span>
              </div>
              <p className="text-[11px] text-stone-500 pt-1">
                Estacionamento coberto no próprio shopping.
              </p>
            </div>
          </div>

          {/* Hours of service */}
          <div>
            <h4 className="font-serif-cormorant text-lg font-bold text-white mb-4">
              Horários
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="p-2 bg-stone-900 rounded-lg border border-stone-800">
                <span className="font-semibold text-amber-300 block mb-0.5">
                  Menu Executivo:
                </span>
                <span>Segunda a Sexta das 11h às 15h</span>
              </div>
              <p className="flex justify-between">
                <span>Seg a Sáb (Shopping):</span>
                <span className="text-white">10h00 às 22h00</span>
              </p>
              <p className="flex justify-between">
                <span>Dom e Feriados:</span>
                <span className="text-white">11h00 às 20h00</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Mangiarte Cucina Italiana • Desenvolvido por Nicolas e Thiago
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Feito com <Heart className="w-3 h-3 text-amber-600 fill-current" /> para quem ama a verdadeira culinária italiana
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              className="p-2 rounded-full bg-stone-800 hover:bg-amber-600 text-stone-300 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
