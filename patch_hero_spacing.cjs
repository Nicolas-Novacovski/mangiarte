const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// Aumenta o leading para afastar as linhas
code = code.replace(
  /leading-\[0\.85\]/,
  'leading-[0.95]'
);

// Remove a margem negativa que estava puxando o "À Mesa" para cima do "ITALIA"
code = code.replace(
  /block -mt-2 md:-mt-4 text-center">À Mesa\.</,
  'block pt-2 md:pt-0 text-center">À Mesa.</'
);

// Vamos também subir levemente o "Buon appetito!" no mobile para ele não embolar tanto na leitura
code = code.replace(
  /top-\[8%\] md:top-\[20%\] right-\[10%\] md:left-\[45%\]/,
  'top-[4%] md:top-[15%] right-[5%] md:left-[45%]'
);

fs.writeFileSync('src/components/Hero.tsx', code);
