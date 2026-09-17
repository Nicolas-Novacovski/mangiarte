const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// Add a slant to the bottom of the green shape on mobile, so it doesn't just abruptly end in a flat line.
code = code.replace(
  /max-md:\[clip-path:polygon\(0_20%,100%_0,100%_100%,0_100%\)\]/,
  'max-md:[clip-path:polygon(0_20%,100%_0,100%_90%,0_100%)]'
);

fs.writeFileSync('src/components/Hero.tsx', code);
