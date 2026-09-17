const fs = require('fs');
let code = fs.readFileSync('src/components/AboutSection.tsx', 'utf8');

// Remove the wave from AboutSection as it might cause weird overlapping with the green shape.
code = code.replace(
  /\{\/\* Top Wave Transition from Ivory \*\/\}.*?<\/div>/s,
  ''
);

// Instead, let's make AboutSection use Ivory, and we will just add a nice slant or padding to make it smooth.
// Actually, AboutSection was originally Ivory. I changed it to Paper White. Let's keep it Paper White, but use a subtle linear gradient for a smooth color transition.
code = code.replace(
  /className="pt-32 pb-20 md:pt-40 md:pb-32 bg-\[var\(--paper-white\)\] overflow-hidden relative"/,
  'className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-[var(--ivory)] to-[var(--paper-white)] overflow-hidden relative"'
);

fs.writeFileSync('src/components/AboutSection.tsx', code);
