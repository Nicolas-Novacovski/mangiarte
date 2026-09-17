const fs = require('fs');
let code = fs.readFileSync('src/components/AboutSection.tsx', 'utf8');

// Replace the asymmetric card sizing with a uniform sizing
code = code.replace(
  /\$\{index % 3 === 0 \? 'w-\[75vw\] sm:w-\[420px\] h-\[480px\] self-end' : index % 3 === 1 \? 'w-\[65vw\] sm:w-\[320px\] h-\[380px\] self-start' : 'w-\[70vw\] sm:w-\[380px\] h-\[440px\] self-center'\}/,
  'w-[75vw] sm:w-[360px] h-[440px]'
);

fs.writeFileSync('src/components/AboutSection.tsx', code);
