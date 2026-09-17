const fs = require('fs');
let code = fs.readFileSync('src/components/MangiarteLogo.tsx', 'utf8');

code = code.replace(/const textColor = theme === 'dark'.*/, `const textColor = theme === 'dark' || isBadge ? 'text-[var(--paper-white)]' : 'text-[var(--basil)]';`);
code = code.replace(/bg-stone-950/, 'bg-[var(--espresso)]');
code = code.replace(/title: 'text-2xl'/, `title: 'text-3xl'`);

const spanRegex = /<span\s+className=\{`font-script \$\{textColor\} \$\{config\.title\}.*?<\/span>/s;
const newSpan = `<span className={\`font-serif-cormorant font-bold \$\{config.title\} leading-none select-none\`} style={{ color: theme === 'dark' || isBadge ? 'var(--paper-white)' : 'var(--basil)' }}>
        Mangi<span style={{ color: 'var(--tomato)' }}>arte</span>
      </span>`;
code = code.replace(spanRegex, newSpan);

code = code.replace(/bg-amber-500\/50/g, 'bg-[var(--saffron)]');
code = code.replace(/bg-stone-400/g, 'bg-[var(--espresso)]/30');
code = code.replace(/font-medium whitespace-nowrap select-none font-serif-cormorant/g, 'font-bold whitespace-nowrap select-none font-sans-body');

fs.writeFileSync('src/components/MangiarteLogo.tsx', code);
