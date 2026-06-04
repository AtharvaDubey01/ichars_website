import React from 'react';
import { cn } from '../lib/utils';
import { ArrowRight, ChevronDown } from 'lucide-react';

// SEC: Core Section Wrapper
export const Section = ({ className, children, theme = 'white', id }: { className?: string, children: React.ReactNode, theme?: 'white' | 'neutral' | 'dark' | 'tint', id?: string }) => {
  const themes = {
    white: 'bg-brand-warm-white text-brand-primary-text',
    neutral: 'bg-brand-soft-neutral text-brand-primary-text',
    dark: 'bg-brand-structural-depth text-white',
    tint: 'bg-brand-reflective-tint text-brand-primary-text',
  };

  return (
    <section id={id} className={cn('py-24 md:py-32', themes[theme], className)}>
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        {children}
      </div>
    </section>
  );
};

// TXT: Typography Blocks
export const Heading = ({ className, children, level = 2, ...props }: { className?: string, children: React.ReactNode, level?: 1 | 2 | 3 | 4 } & React.HTMLAttributes<HTMLHeadingElement>) => {
  const Tag = `h${level}` as any;
  const sizes = {
    1: 'text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight',
    2: 'text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight',
    3: 'text-2xl md:text-3xl font-medium tracking-tight',
    4: 'text-xl font-medium tracking-tight',
  };

  return <Tag className={cn(sizes[level], className)} {...props}>{children}</Tag>;
};

export const Text = ({ className, children, size = 'base', muted = false, ...props }: { className?: string, children: React.ReactNode, size?: 'sm' | 'base' | 'lg' | 'xl', muted?: boolean } & React.HTMLAttributes<HTMLParagraphElement>) => {
  const sizes = {
    sm: 'text-base',
    base: 'text-base md:text-lg',
    lg: 'text-lg md:text-xl',
    xl: 'text-xl md:text-2xl',
  };

  return (
    <p className={cn(sizes[size], 'leading-relaxed', muted ? 'text-brand-secondary-text' : '', className)} {...props}>
      {children}
    </p>
  );
};

// CTA: Buttons
export const Button = ({ className, children, variant = 'primary', href, size = 'default', ...props }: { className?: string, children: React.ReactNode, variant?: 'primary' | 'secondary' | 'outline' | 'text', href?: string, size?: 'default' | 'sm' | 'lg' } & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const baseStyle = 'inline-flex items-center justify-center transition-all duration-200 font-medium rounded-sm gap-2';
  const variants = {
    primary: 'bg-brand-deep-teal text-white hover:bg-brand-structural-depth',
    secondary: 'bg-brand-soft-teal text-brand-structural-depth hover:bg-opacity-90',
    outline: 'border border-brand-deep-teal text-brand-deep-teal hover:bg-brand-deep-teal hover:text-white',
    text: 'text-brand-deep-teal hover:text-brand-structural-depth p-0',
  };
  const sizes = {
    default: 'px-6 py-3',
    sm: 'px-4 py-2 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const Component = href ? 'a' : 'button';
  
  if (variant === 'text') {
      return (
        <Component href={href} className={cn(baseStyle, variants[variant], className)} {...props as any}>
          {children}
        </Component>
      );
  }

  return (
    <Component href={href} className={cn(baseStyle, variants[variant], sizes[size], className)} {...props as any}>
      {children}
      <ArrowRight className="w-4 h-4 ml-1" />
    </Component>
  );
};

// CRD: Card Block
export const Card = ({ className, children, ...props }: { className?: string, children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('bg-white p-8 md:p-12 shadow-sm border border-brand-soft-neutral flex flex-col', className)} {...props}>
      {children}
    </div>
  );
};

// CMP: Composition (Grid/Columns)
export const Grid = ({ className, children, cols = 2 }: { className?: string, children: React.ReactNode, cols?: 1 | 2 | 3 | 4 }) => {
  const colStyles = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };
  return (
    <div className={cn('grid gap-8 md:gap-12', colStyles[cols as keyof typeof colStyles], className)}>
      {children}
    </div>
  );
};
