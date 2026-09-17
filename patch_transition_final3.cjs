const fs = require('fs');
let code = fs.readFileSync('src/components/AboutSection.tsx', 'utf8');

// The `pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-[var(--ivory)] to-[var(--paper-white)]` is already set from a previous edit.
// Let's add a decorative shape at the bottom of the Hero section, instead of doing it in AboutSection.
// Wait, the user already saw the result WITHOUT the SVG wave, and WITH the old About section. 
// I have applied the fix for the text and plate overlapping, and slanted the green shape on mobile. Let's just make sure AboutSection looks good.
// The About section now has `bg-gradient-to-b from-[var(--ivory)] to-[var(--paper-white)]`.
// Let's also slightly pull AboutSection up with a negative margin to overlap the Hero section a bit to make the transition even smoother.
code = code.replace(
  /className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-\[var\(--ivory\)\] to-\[var\(--paper-white\)\] overflow-hidden relative"/,
  'className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-[var(--ivory)] to-[var(--paper-white)] overflow-hidden relative -mt-8"'
);

fs.writeFileSync('src/components/AboutSection.tsx', code);
