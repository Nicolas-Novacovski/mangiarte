const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// Replace the green background div with a Tailwind-only version (no style prop for clip-path)
code = code.replace(
  /<div className="absolute top-0 right-0 w-full md:w-\[45vw\] h-full bg-\[var\(--basil\)\]"[\s\n]*style=\{\{ clipPath: 'polygon\(15% 0, 100% 0, 100% 100%, 0% 100%\)' \}\}\s*\/>/g,
  '<div className="absolute bottom-0 md:top-0 right-0 w-full md:w-[45vw] h-[60%] md:h-full bg-[var(--basil)] max-md:[clip-path:polygon(0_15%,100%_0,100%_100%,0_100%)] md:[clip-path:polygon(15%_0,100%_0,100%_100%,-5%_100%)]" />'
);

fs.writeFileSync('src/components/Hero.tsx', code);
