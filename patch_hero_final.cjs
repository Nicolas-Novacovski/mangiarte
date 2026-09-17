const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// Center the second line of the title
code = code.replace(
  /<span className="text-\[var\(--tomato\)\] block -mt-2 md:-mt-4">À Mesa\.<\/span>/,
  '<span className="text-[var(--tomato)] block -mt-2 md:-mt-4 text-center md:text-left">À Mesa.</span>'
);
// Actually let's make it text-center on all breakpoints since they didn't specify.
code = code.replace(
  /text-center md:text-left/,
  'text-center'
);

// Remove the golden line (motion.svg)
code = code.replace(
  /\{\/\* Drawn line \*\/\}[\s\S]*?<\/motion\.svg>/,
  ''
);

fs.writeFileSync('src/components/Hero.tsx', code);
