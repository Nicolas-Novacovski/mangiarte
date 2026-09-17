const fs = require('fs');
let code = fs.readFileSync('src/components/AboutSection.tsx', 'utf8');

const regex = /<motion\.div\s+key=\{index\}.*?<\/motion\.div>/s;

const newBlock = `<motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.2) }}
              onClick={() => handleCardClick(dish)}
              className={\`flex-shrink-0 group cursor-pointer snap-center sm:snap-start select-none transition-transform duration-300 active:scale-[0.99] rounded-sm overflow-hidden shadow-lg hover:shadow-2xl relative bg-stone-900 \${index % 3 === 0 ? 'w-[75vw] sm:w-[420px] h-[480px] self-end' : index % 3 === 1 ? 'w-[65vw] sm:w-[320px] h-[380px] self-start' : 'w-[70vw] sm:w-[380px] h-[440px] self-center'}\`}
            >
              <img
                src={dish.imagem}
                alt={dish.titulo}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

              {/* Tag Superior */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                <span className="bg-[var(--basil)]/90 backdrop-blur-sm text-white text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.18em] px-3 py-1 rounded-sm shadow-md border border-white/10 w-max">
                  {dish.categoria}
                </span>
                {dish.preco && (
                  <span className="bg-[var(--tomato)] text-white text-[10px] sm:text-[11px] font-bold px-3 py-0.5 rounded-sm shadow-md w-max">
                    {dish.preco}
                  </span>
                )}
              </div>

              {/* Botão de Zoom Indicativo */}
              <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 opacity-80 group-hover:opacity-100 transition-opacity z-10">
                <div className="bg-black/40 backdrop-blur-md text-white p-1.5 sm:p-2 rounded-full">
                  <Eye size={14} className="sm:w-4 sm:h-4" />
                </div>
              </div>

              {/* Descrição Inferior */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 text-white z-10">
                <h4 className="font-serif-cormorant text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 transition-colors leading-tight">
                  {dish.titulo}
                </h4>
                <p className="text-stone-300 text-sm font-sans-body leading-relaxed line-clamp-2 mb-3">
                  {dish.descricao}
                </p>
                <div className="flex items-center gap-1.5 text-[10px] tracking-wider uppercase font-bold text-[var(--saffron)]">
                  <span>Ampliar fotografia</span>
                </div>
              </div>
            </motion.div>`;

// Because there are map functions inside, replacing with regex like this is risky. Let's do a more precise replacement using JS.
const startIndex = code.indexOf('<motion.div');
// find the map start
const mapStart = code.indexOf('carouselDishes.map(');
const motionStart = code.indexOf('<motion.div', mapStart);
const motionEnd = code.indexOf('</motion.div>', motionStart) + 13;

code = code.substring(0, motionStart) + newBlock + code.substring(motionEnd);

fs.writeFileSync('src/components/AboutSection.tsx', code);
