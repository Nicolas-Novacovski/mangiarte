import React from 'react';
import { MangiarteLogo } from './MangiarteLogo';
import { Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--espresso)] text-[var(--paper-white)] pt-16 sm:pt-20 pb-24 md:pb-10 border-t-[6px] border-[var(--tomato)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        
        <MangiarteLogo size="md" theme="dark" />
        
        <div className="mt-8 flex gap-6">
          <a href="https://www.instagram.com/restaurantemangiarte/" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full text-stone-400 hover:text-white hover:bg-[var(--tomato)] hover:scale-110 transition-all duration-300">
            <Instagram size={20} />
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400 font-sans-body">
          <p className="tracking-wider">
            &copy; {new Date().getFullYear()} Mangiarte Cucina Italiana. Todos os direitos reservados.
          </p>
          <p className="text-stone-400 text-xs tracking-wider flex items-center gap-1.5">
            <span>Desenvolvido por</span>
            <a href="https://nicetechsolutions.com.br" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#e1ddcc] hover:text-white transition-colors cursor-pointer">NT Solutions</a>
          </p>
        </div>

      </div>
    </footer>
  );
};
