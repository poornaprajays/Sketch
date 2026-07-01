import React from 'react';

interface WobblyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  target?: string;
}

export const WobblyButton: React.FC<WobblyButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  href,
  target,
  ...props
}) => {
  const borderRadius = '180px 15px 150px 25px / 20px 140px 15px 150px';

  const baseClasses = 'font-body font-bold border-[3px] border-pencil shadow-[4px_4px_0px_0px_#2d2d2d] transition-all duration-100 ease-in-out active:translate-x-[4px] active:translate-y-[4px] active:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#2d2d2d] select-none text-center inline-flex items-center justify-center gap-2';

  const variantClasses = 
    variant === 'primary' 
      ? 'bg-white text-pencil hover:bg-correction hover:text-white' 
      : variant === 'secondary' 
      ? 'bg-[#e5e0d8] text-pencil hover:bg-ballpoint hover:text-white'
      : 'bg-white text-pencil hover:bg-pencil/10';

  const componentClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        style={{ borderRadius }}
        className={componentClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      style={{ borderRadius }}
      className={componentClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
