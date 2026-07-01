import React from 'react';

interface WobblyCardProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  tiltType?: 'left' | 'right' | 'none';
  decoration?: 'tape' | 'tack' | 'none';
  onClick?: () => void;
  shadowSize?: 'sm' | 'md' | 'lg';
  hoverEffect?: boolean;
}

export const WobblyCard: React.FC<WobblyCardProps> = ({
  children,
  className = '',
  bgColor = 'bg-white',
  tiltType = 'none',
  decoration = 'none',
  onClick,
  shadowSize = 'md',
  hoverEffect = true,
}) => {
  const borderRadius = '20px 240px 20px 220px / 220px 20px 240px 20px';

  const tiltClass = 
    tiltType === 'left' ? '-rotate-1 hover:rotate-[0.5deg]' :
    tiltType === 'right' ? 'rotate-1 hover:rotate-[-0.5deg]' :
    'rotate-0';

  const shadowClass = 
    shadowSize === 'sm' ? 'shadow-[2px_2px_0px_0px_#2d2d2d]' :
    shadowSize === 'lg' ? 'shadow-[8px_8px_0px_0px_#2d2d2d]' :
    'shadow-[4px_4px_0px_0px_#2d2d2d]';

  const hoverClass = hoverEffect 
    ? 'transition-all duration-150 hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_#2d2d2d]' 
    : 'transition-all duration-150';

  return (
    <div
      onClick={onClick}
      style={{ borderRadius }}
      className={`relative border-[3px] border-pencil p-6 md:p-8 ${bgColor} ${shadowClass} ${tiltClass} ${hoverClass} ${className} ${onClick ? 'cursor-pointer' : ''}`}
    >
      {/* Tape Decoration */}
      {decoration === 'tape' && (
        <div className="absolute -top-3.5 left-[25%] right-[25%] h-5 bg-erased/65 border-x-2 border-dashed border-pencil/20 rotate-[-1deg] pointer-events-none z-10" />
      )}

      {/* Thumbtack Decoration */}
      {decoration === 'tack' && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-correction border-2 border-pencil rounded-full shadow-[2px_2px_0px_rgba(45,45,45,0.4)] pointer-events-none z-10">
          <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full opacity-60"></div>
        </div>
      )}

      {children}
    </div>
  );
};
