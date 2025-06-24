'use client'
import React from 'react';
import { CloverViewerProps } from '@samvera/clover-iiif';
import dynamic from "next/dynamic";
import type { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

const Viewer = dynamic(
  () => import("@samvera/clover-iiif/viewer").then((Clover) => Clover.default),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-800">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    ),
  },
);

// Enhanced interface with better types and documentation
interface WorkProps extends VariantProps<typeof workVariants> {
  /** Content to display below the viewer */
  children?: ReactNode;
  /** IIIF manifest ID from UB API */
  id?: string;
  /** Direct IIIF manifest URL */
  url?: string;
  /** Marcus database URL for additional information */
  marcus?: string;
  /** Clover viewer configuration options */
  config?: CloverViewerProps;
  /** Additional CSS classes */
  className?: string;
}

// Modern variant system with better organization
const workVariants = cva(
  'w-full rounded-b-lg border bg-card text-card-foreground shadow-sm my-10',
  {
    variants: {
      size: {
        sm: 'min-h-[400px]',
        default: 'min-h-[500px] md:min-h-[600px]',
        lg: 'min-h-[700px]',
      },
      variant: {
        default: 'border-border',
        elevated: 'border-border shadow-lg',
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
  }
);

const viewerVariants = cva('w-full relative bg-background', {
  variants: {
    size: {
      sm: 'h-[300px]',
      default: 'h-[500px] md:h-[600px]',
      lg: 'h-[700px]',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

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

const marcusButtonVariants = cva(
  'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export function Work({
  children,
  id,
  url,
  marcus,
  config,
  className,
  size,
  variant,
  ...props
}: WorkProps) {
  // Better URL construction with validation
  const manifestId = React.useMemo(() => {
    if (url) return url;
    if (id) return `https://api.ub.uib.no/items/${id}?as=iiif`;
    return null;
  }, [id, url]);

  // Detect if content is minimal (single line or very short)
  const isMinimalContent = React.useMemo(() => {
    if (!children) return false;
    const textContent = typeof children === 'string' ? children : '';
    // Check if it's a single line or very short content
    return textContent.length < 100 && !textContent.includes('\n');
  }, [children]);

  // Error handling for missing manifest
  if (!manifestId) {
    return (
      <div className={cn(workVariants({ size, variant }), className)}>
        <div className="flex items-center justify-center h-64 text-muted-foreground">
          <p>No IIIF manifest provided</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(workVariants({ size, variant }), className)} {...props}>
      {/* Viewer Section */}
      <div className={viewerVariants({ size })}>
        <Viewer
          iiifContent={manifestId}
          options={{
            canvasHeight: '100%',
            informationPanel: { open: false },
            ...config,
          }}
        />
      </div>

      {/* Content Section - Always render if marcus URL exists */}
      {(children || marcus) && (
        <div className={contentVariants({
          layout: children && marcus ? 'compact' : 'default',
          hasContent: !!children,
          contentDensity: isMinimalContent ? 'minimal' : 'default'
        })}>
          {children && (
            <div className="prose prose-sm dark:prose-invert max-w-none flex-1">
              {children}
            </div>
          )}

          {marcus && (
            <a
              href={marcus}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                marcusButtonVariants({ variant: 'default' }),
                'self-end w-fit shrink-0'
              )}
            >
              Se mer i Marcus
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
