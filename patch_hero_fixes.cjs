const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// 1. Remove text "Receitas generosas..."
code = code.replace(
  /<p className="font-serif-cormorant text-2xl md:text-3xl text-\[var\(--espresso\)\] max-w-md leading-snug">\s*Receitas generosas, feitas para o ritmo da cidade\.\s*<\/p>/,
  ''
);

// 2. Fix the word "ITALIA" blending with the green background by adding mix-blend-mode or text-shadow
// Wait, a better way is to make the "ITALIA" text adapt to the background behind it or just not touch the green area.
// In the mobile screenshot, "ITALIA" is dark green, but the background behind it is ALSO dark green because the green shape covers the whole width of the bottom half.
// Let's adjust the green shape in mobile so it doesn't go all the way up, or better yet, make "ITALIA" a light color on mobile. 
// Actually, since "ITALIA" is --basil (dark green), it disappears against the --basil background.
// If we change "ITALIA" to be white or --ivory on mobile, it will be visible. 
// Or better yet, we can use `mix-blend-difference` or just adjust the background shape in mobile so it's lower down.

// Let's adjust the background shape in mobile to start much lower, like h-[45%] so it only covers behind the plate.
code = code.replace(
  /h-\[60%\] md:h-full bg-\[var\(--basil\)\] max-md:\[clip-path:polygon\(0_15%,100%_0,100%_100%,0_100%\)\]/,
  'h-[40%] md:h-full bg-[var(--basil)] max-md:[clip-path:polygon(0_10%,100%_0,100%_100%,0_100%)]'
);

// 3. Move the plate lower in mobile so it fits the new green shape.
code = code.replace(
  /top-\[65%\] md:top-\[55%\] -translate-y-1\/2 z-10 pointer-events-none md:opacity-100 opacity-90/,
  'top-[70%] md:top-[55%] -translate-y-1/2 z-10 pointer-events-none md:opacity-100 opacity-90'
);

// 4. Adjust left typography padding on mobile so it doesn't overlap the plate.
code = code.replace(
  /w-full md:w-\[50%\] flex flex-col justify-center pb-12 z-20/,
  'w-full md:w-[50%] flex flex-col justify-start md:justify-center pt-8 md:pt-0 pb-32 md:pb-12 z-20'
);

// 5. Change "Buon appetito!" placement for mobile so it's visible.
code = code.replace(
  /className="absolute top-\[18%\] md:top-\[20%\] left-\[20%\] md:left-\[45%\] z-30 pointer-events-none"/,
  'className="absolute top-[12%] md:top-[20%] left-[10%] md:left-[45%] z-30 pointer-events-none"'
);

fs.writeFileSync('src/components/Hero.tsx', code);
