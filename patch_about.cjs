const fs = require('fs');
let code = fs.readFileSync('src/components/AboutSection.tsx', 'utf8');

code = code.replace(
  /<section id="galeria" className="py-20 md:py-32 bg-\[var\(--ivory\)\] overflow-hidden">/,
  `<section id="galeria" className="pt-32 pb-20 md:pt-40 md:pb-32 bg-[var(--paper-white)] overflow-hidden relative">
      {/* Top Wave Transition from Ivory */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="var(--ivory)"></path>
        </svg>
      </div>`
);

// We need to change the blur gradient overlays as well to match the new background
code = code.replace(
  /bg-gradient-to-r from-\[var\(--ivory\)\] to-transparent/g,
  'bg-gradient-to-r from-[var(--paper-white)] to-transparent'
);
code = code.replace(
  /bg-gradient-to-l from-\[var\(--ivory\)\] to-transparent/g,
  'bg-gradient-to-l from-[var(--paper-white)] to-transparent'
);

fs.writeFileSync('src/components/AboutSection.tsx', code);
