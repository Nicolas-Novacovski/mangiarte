const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// Looking at the mobile screenshot:
// 1. "ITALIA À MESA." takes up a lot of space. The text "Buon appetito!" overlaps with it.
// 2. The green background shape is visible at the bottom left, behind the plate. 
// BUT wait, looking at the FIRST mobile screenshot provided by the user just now:
// "ITALIA" is dark green. The background behind it is ivory. So it IS visible. But the bottom part of "ITALIA" (and "À MESA.") is over the plate.
// Ah, the user's screenshot was TAKEN BEFORE my previous fixes were applied! 
// Let's verify: In the screenshot, "ITALIA" is dark green, but the right side of the screen is green, wait... No, the right side is green, and the text "ITALIA" is on the left side (ivory). 
// Wait, the green shape on the right cuts across behind the text! That's why "ITALIA" is hard to read.
// So yes, modifying the clip-path/height of the green shape on mobile to be lower is the correct fix. I've already done this in `patch_hero_fixes.cjs` by setting `h-[40%]` and `bottom-0` on mobile.

// But wait, in my previous fix I removed "Receitas generosas..." entirely. The user asked "as vezes ate tirar ele ficar melhor". So that's good.

// Let's refine the "Buon appetito!" placement for mobile so it's not hidden or overlapping badly.
code = code.replace(
  /className="absolute top-\[12%\] md:top-\[20%\] left-\[10%\] md:left-\[45%\] z-30 pointer-events-none"/,
  'className="absolute top-[8%] md:top-[20%] right-[10%] md:left-[45%] z-30 pointer-events-none"'
);

// We need to adjust the typography margin since we removed the text.
code = code.replace(
  /<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-30">/,
  '<div className="mt-4 md:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-30">'
);

// We need to ensure the plate is positioned correctly on mobile.
// top-[70%] might be too low. Let's make it top-[60%] on mobile.
code = code.replace(
  /top-\[70%\] md:top-\[55%\] -translate-y-1\/2 z-10 pointer-events-none md:opacity-100 opacity-90/,
  'top-[60%] md:top-[55%] -translate-y-1/2 z-10 pointer-events-none md:opacity-100 opacity-100'
);

// The green shape on mobile should also start around 60%
code = code.replace(
  /h-\[40%\] md:h-full bg-\[var\(--basil\)\] max-md:\[clip-path:polygon\(0_10%,100%_0,100%_100%,0_100%\)\]/,
  'h-[50%] md:h-full bg-[var(--basil)] max-md:[clip-path:polygon(0_20%,100%_0,100%_100%,0_100%)]'
);


fs.writeFileSync('src/components/Hero.tsx', code);
