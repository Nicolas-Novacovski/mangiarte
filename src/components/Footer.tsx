import React from 'react';
import { MangiarteLogo } from './MangiarteLogo';
import { Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#161616] text-[#f4f3ef] pt-20 pb-10 px-6 border-t-[6px] border-[#8b261b]">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        <MangiarteLogo size="md" theme="dark" />
        
        <div className="mt-8 flex gap-6">
          <a href="https://www.instagram.com/restaurantemangiarte/" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full text-stone-400 hover:text-white hover:bg-[#8b261b] hover:scale-110 transition-all duration-300">
            <Instagram size={20} />
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400 font-sans-body">
          <p className="tracking-wider">
            &copy; {new Date().getFullYear()} Mangiarte Cucina Italiana. Todos os direitos reservados.
          </p>
          <p className="text-stone-400 text-xs tracking-wider flex items-center gap-1.5">
            <span>Desenvolvido por</span>
            <span className="font-semibold text-[#e1ddcc]">NT Solutions</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
