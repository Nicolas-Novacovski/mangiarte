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
  const textColor = theme === 'dark' || isBadge ? 'text-white' : 'text-stone-900';
  const badgeClasses = isBadge 
    ? 'bg-stone-950 px-6 py-3 rounded-xl border border-white/10 shadow-xl' 
    : 'bg-transparent';

  // Size mapping
  const sizeConfig = {
    sm: {
      title: 'text-2xl',
      subtitle: 'text-[8px] tracking-[0.2em]',
      gap: 'gap-1 mt-0.5',
    },
    md: {
      title: 'text-3xl sm:text-4xl',
      subtitle: 'text-[10px] tracking-[0.25em]',
      gap: 'gap-2 mt-1',
    },
    lg: {
      title: 'text-5xl sm:text-6xl md:text-7xl',
      subtitle: 'text-xs sm:text-sm tracking-[0.3em]',
      gap: 'gap-3 mt-1.5',
    },
    xl: {
      title: 'text-6xl sm:text-7xl md:text-8xl',
      subtitle: 'text-sm sm:text-base tracking-[0.35em]',
      gap: 'gap-4 mt-2',
    }
  };

  const config = sizeConfig[size];

  return (
    <div
      className={`relative inline-flex flex-col items-center justify-center transition-transform duration-300 hover:scale-[1.02] ${badgeClasses} ${className}`}
    >
      <span 
        className={`font-script ${textColor} ${config.title} leading-none font-normal select-none drop-shadow-md`}
      >
        Mangiarte
      </span>
      <div className={`flex items-center justify-center ${config.gap}`}>
        <div className={`h-[1px] w-6 sm:w-8 ${theme === 'dark' || isBadge ? 'bg-amber-500/50' : 'bg-stone-400'}`} />
        <span 
          className={`uppercase ${config.subtitle} ${textColor} font-medium whitespace-nowrap select-none font-serif-cormorant`}
        >
          Cucina Italiana
        </span>
        <div className={`h-[1px] w-6 sm:w-8 ${theme === 'dark' || isBadge ? 'bg-amber-500/50' : 'bg-stone-400'}`} />
      </div>
    </div>
  );
};

