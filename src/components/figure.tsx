import React from 'react';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

// Modern variant system with better organization
const figureVariants = cva(
  'w-full border bg-card text-card-foreground shadow-sm my-10',
  {
    variants: {
      mode: {
        landscape: '',
        portrait: 'xl:flex flex-row gap-6 items-start',
      },
      variant: {
        default: 'border-border',
        elevated: 'border-border shadow-lg',
      },
    },
    defaultVariants: {
      mode: 'landscape',
      variant: 'default',
    },
  }
);

const contentVariants = cva(
  'px-4 md:px-6 pt-4 md:pt-6 pb-3 md:pb-4 border-t flex flex-col gap-3 md:gap-4',
  {
    variants: {
      layout: {
        default: 'justify-start',
        stacked: 'justify-start',
        compact: 'justify-between',
      },
      hasContent: {
        true: 'bg-muted/10',
        false: 'bg-transparent',
      },
      contentDensity: {
        default: '',
        minimal: 'bg-muted/5 pb-2 md:pb-3',
      },
    },
    defaultVariants: {
      layout: 'default',
      hasContent: true,
      contentDensity: 'default',
    },
  }
);

const linkVariants = cva(
  'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 self-end w-fit shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const descriptionVariants = cva(
  'prose prose-sm dark:prose-invert max-w-none flex-1',
  {
    variants: {
      density: {
        default: '',
        minimal: 'text-sm leading-relaxed',
      },
    },
    defaultVariants: {
      density: 'default',
    },
  }
);

// Main Work component
export function Figure({
  image,
  alt,
  width,
  height,
  className,
  mode,
  variant,
  children,
  ...props
}: {
  image: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  children?: ReactNode;
} & VariantProps<typeof figureVariants>) {


  return (
    <div className={cn(figureVariants({ mode, variant }), className)} {...props}>
      {/* Image Section */}
      <Image src={image} alt={alt} width={width} height={height} className="object-cover" />

      {/* Content Section - Always render if description or link exists */}
      {children}
    </div>
  );
}

// Work.Content component - simple wrapper
function FigureContent({
  children,
  className,
  layout,
  hasContent,
  contentDensity,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & VariantProps<typeof contentVariants>) {
  if (!children) {
    return null;
  }

  return (
    <div
      className={cn(contentVariants({ layout, hasContent, contentDensity }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

// Work.Description component
function FigureDescription({
  children,
  className,
  density,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & VariantProps<typeof descriptionVariants>) {
  if (!children) {
    console.warn('Work.Description: children is missing');
    return null;
  }

  return (
    <div
      className={cn(descriptionVariants({ density }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

// Work.Link component
function FigureLink({
  href,
  children,
  className,
  variant,
  ...props
}: {
  href: string;
  children?: ReactNode;
  className?: string;
} & VariantProps<typeof linkVariants>) {
  if (!href || !children) {
    console.warn('Work.Link: href or children is missing');
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(linkVariants({ variant }), className)}
      {...props}
    >
      {children || 'Se mer...'}
      <ExternalLink className="h-4 w-4" />
    </a>
  );
}

// Attach compound components to Work
Figure.Content = FigureContent;
Figure.Description = FigureDescription;
Figure.Link = FigureLink;
