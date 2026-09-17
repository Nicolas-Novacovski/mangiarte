const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// Fix green background width to prevent text overlap
code = code.replace(
  /w-full md:w-\[65%\] h-full bg-\[var\(--basil\)\]/g,
  'w-full md:w-[45vw] h-full bg-[var(--basil)]'
);

// Fix image src and styling
code = code.replace(
  /src="\/pratos\/gnocchi-supremo-01\.jpg"/g,
  'src="/pratos/prato-sem-fundo.png"'
);
code = code.replace(
  /className="w-full md:w-\[120%\] max-w-none h-auto object-cover rounded-full shadow-2xl"/g,
  'className="w-full md:w-[130%] max-w-none h-auto object-contain drop-shadow-2xl"'
);
code = code.replace(
  /style=\{\{ clipPath: 'circle\(48% at 50% 50%\)' \}\}/g,
  ''
);

fs.writeFileSync('src/components/Hero.tsx', code);
