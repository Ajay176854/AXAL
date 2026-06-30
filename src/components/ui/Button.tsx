import React from 'react';
import { cn } from '../../lib/utils';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  showArrow?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  variant = 'primary',
  children,
  showArrow = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'px-10 py-5 text-sm uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-3 group rounded-sm',
        variant === 'primary' &&
          'bg-white text-neutral-950 hover:bg-neutral-200 shadow-xl',
        variant === 'secondary' &&
          'bg-neutral-950 text-white hover:bg-neutral-800',
        className,
      )}
      {...props}
    >
      {children}
      {showArrow && (
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      )}
    </button>
  );
}
