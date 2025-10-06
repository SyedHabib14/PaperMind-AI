import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'intense' | 'glow';
  hover?: boolean;
}

export function GlassCard({ 
  children, 
  className, 
  variant = 'default',
  hover = true 
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl p-6 transition-all duration-300',
        {
          'glass': variant === 'default',
          'glass-intense': variant === 'intense',
          'glow': variant === 'glow',
        },
        hover && 'hover:scale-105 hover:-translate-y-2 hover:shadow-glow',
        className
      )}
    >
      {children}
    </div>
  );
}