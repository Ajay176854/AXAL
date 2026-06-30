import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  pulse?: boolean;
}

export default function Badge({ children, pulse = false }: BadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
      {pulse && (
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
      )}
      {children}
    </div>
  );
}
