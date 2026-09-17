const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// Replace the location text container to have a background pill
code = code.replace(
  /<div className="flex items-center gap-2 text-\[var\(--espresso\)\] mix-blend-color-burn">/,
  '<div className="flex items-center gap-2 text-[var(--espresso)] bg-white/70 backdrop-blur-md px-4 py-2.5 rounded-full shadow-sm border border-white/20">'
);

fs.writeFileSync('src/components/Hero.tsx', code);
