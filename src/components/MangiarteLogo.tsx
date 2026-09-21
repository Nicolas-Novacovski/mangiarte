import React from 'react';

interface MangiarteLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'dark' | 'light';
  variant?: 'transparent' | 'badge';
}

export const MangiarteLogo: React.FC<MangiarteLogoProps> = ({
  className = '',
  size = 'md',
  theme = 'dark',
  variant = 'transparent',
}) => {
  const isBadge = variant === 'badge';
  
  // Use high-contrast dark-mode logo on dark backgrounds (like the footer)
  // and light-mode logo on light backgrounds (like the header or ivory cards)
  const logoSrc = theme === 'dark' || isBadge 
    ? '/logo-mangiarte-dark.png' 
    : '/logo-mangiarte-light.png';

  const badgeClasses = isBadge 
    ? 'bg-[var(--espresso)] px-4 py-2.5 rounded-xl border border-white/10 shadow-xl' 
    : 'bg-transparent';

  // Responsive height scale respecting the logo aspect ratio (~3.4:1)
  const sizeClasses = {
    sm: 'h-7 sm:h-8 max-h-8 w-auto',
    md: 'h-9 sm:h-11 md:h-12 max-h-12 w-auto',
    lg: 'h-12 sm:h-15 md:h-18 max-h-18 w-auto',
    xl: 'h-16 sm:h-20 md:h-24 max-h-24 w-auto',
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center transition-transform duration-300 hover:scale-[1.02] select-none ${badgeClasses} ${className}`}
    >
      <img
        src={logoSrc}
        alt="Mangiarte Cucina Italiana"
        className={`object-contain transition-all duration-300 drop-shadow-sm ${sizeClasses[size]}`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};


