const fs = require('fs');
let code = fs.readFileSync('src/components/AboutSection.tsx', 'utf8');

const regexToRemove = /\{\/\* Highlights Text \*\/\}.*?(?=\{\/\* Full Width Carousel for Mobile \*\/\})/s;

const newBlock = `{/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-left mb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#d6d2c4]"
        >
          <h2 className="font-serif-cormorant text-5xl md:text-6xl text-[var(--espresso)] leading-none">
            Pratos da casa
          </h2>
          <div className="flex items-center gap-6">
            <span className="hidden md:block text-[10px] tracking-[0.3em] uppercase font-bold text-[var(--espresso)] max-w-[150px] text-right">
              Mesma paixão, novos encontros.
            </span>
            <div className="flex gap-2">
              <button onClick={() => handleScroll('left')} className="w-10 h-10 rounded-full border border-[#d6d2c4] flex items-center justify-center hover:bg-[#d6d2c4] transition-colors cursor-pointer" aria-label="Anterior">
                <ChevronLeft size={18} className="text-[var(--espresso)]" />
              </button>
              <button onClick={() => handleScroll('right')} className="w-10 h-10 rounded-full bg-[var(--tomato)] flex items-center justify-center hover:bg-[#a02c25] transition-colors cursor-pointer" aria-label="Próximo">
                <ChevronRight size={18} className="text-white" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      `;

code = code.replace(regexToRemove, newBlock);

// Remove indicators below carousel since we have arrows at the top
const indicatorsRegex = /\{\/\* Indicadores de Posição.*?<\/div>\s*<\/div>/s;
code = code.replace(indicatorsRegex, '');

fs.writeFileSync('src/components/AboutSection.tsx', code);
