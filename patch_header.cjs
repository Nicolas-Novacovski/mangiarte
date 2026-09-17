const fs = require('fs');
let code = fs.readFileSync('src/components/Header.tsx', 'utf8');

code = code.replace(
  /<MangiarteLogo size=\{isScrolled \? 'sm' : 'md'\} theme="dark" \/>/g,
  '<MangiarteLogo size={isScrolled ? \'sm\' : \'md\'} theme="light" />'
);

// We should also make sure the logo in footer uses theme="dark" since footer is dark. Let's check Footer.tsx in a moment.

fs.writeFileSync('src/components/Header.tsx', code);
