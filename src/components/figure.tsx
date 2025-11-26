import React from 'react';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

// Modern variant system with better organization
const figureVariants = cva(
  'w-full xl:max-w-5/6 mx-auto bg-card text-card-foreground border shadow-sm my-10',
  {
    variants: {
      mode: {
        landscape: '',
        portrait: 'lg:flex flex-row items-start',
      },
      size: {
        default: '',
        popout: 'popout',
        feature: 'feature',
        full: 'full',
      },
    },
    /*     compoundVariants: [
          {
            mode: 'portrait',
            size: 'feature',
            class: '',
          },
        ], */
    defaultVariants: {
      mode: 'landscape',
      size: 'popout',
    },
  }
);

const contentVariants = cva(
  'p-4 md:p-5 flex flex-col gap-3 md:gap-4',
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
  size,
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
    <figure className={cn(figureVariants({ mode, size }), className)} {...props}>
      {/* Image Section */}
      <Zoom>
        <Image src={image} alt={alt} width={width} height={height} className="object-cover" />
      </Zoom>

      {/* Content Section - Always render if description or link exists */}
      {children}
    </figure>
  );
}

// Work.Content component - simple wrapper
function FigureContent({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & VariantProps<typeof contentVariants>) {
  if (!children) {
    return null;
  }

  return (
    <figcaption
      className={cn(contentVariants(), className)}
      {...props}
    >
      {children}
    </figcaption>
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
      <ExternalLink className="h-3 w-3" />
    </a>
  );
}

// Attach compound components to Work
Figure.Content = FigureContent;
Figure.Description = FigureDescription;
Figure.Link = FigureLink;
