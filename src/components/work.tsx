import React from 'react';
import { CloverViewerProps } from '@samvera/clover-iiif';
import type { ReactNode, ReactElement } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import { IIIFViewer } from './iiif-viewer';

// Enhanced interface with better types and documentation
interface WorkProps extends VariantProps<typeof workVariants> {
  /** IIIF manifest ID from UB API or direct URL */
  manifest: string;
  /** Clover viewer configuration options */
  config?: CloverViewerProps;
  /** Additional CSS classes */
  className?: string;
}

interface WorkDescriptionProps {
  /** Content to display in the description */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

interface WorkLinkProps {
  /** URL to link to */
  href: string;
  /** Link text (optional, defaults to "Se mer...") */
  children?: ReactNode;
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

// Helper function to normalize manifest input to URL
function normalizeManifestToUrl(manifest: string): string {
  // If it's already a URL, return as is
  if (manifest.startsWith('http://') || manifest.startsWith('https://')) {
    return manifest;
  }
  // If it's an ID, construct the UB API URL
  return `https://api.ub.uib.no/items/${manifest}?as=iiif`;
}

// Main Work component
export function Work({
  manifest,
  config,
  className,
  size,
  variant,
  children,
  ...props
}: WorkProps & { children?: ReactNode }) {
  // Normalize manifest input to URL
  const manifestUrl: string = React.useMemo(() => {
    return normalizeManifestToUrl(manifest);
  }, [manifest]);

  // Find Work.Description and Work.Link components in children
  const descriptionElement: ReactElement<WorkDescriptionProps> | null | undefined = React.useMemo(() => {
    if (!children) return null;

    const childrenArray = React.Children.toArray(children);
    return childrenArray.find(child =>
      React.isValidElement(child) && child.type === WorkDescription
    ) as ReactElement<WorkDescriptionProps> | undefined;
  }, [children]);

  const linkElement: ReactElement<WorkLinkProps> | null | undefined = React.useMemo(() => {
    if (!children) return null;

    const childrenArray = React.Children.toArray(children);
    return childrenArray.find(child =>
      React.isValidElement(child) && child.type === WorkLink
    ) as ReactElement<WorkLinkProps> | undefined;
  }, [children]);

  // Detect if content is minimal
  const isMinimalContent: boolean = React.useMemo(() => {
    if (!descriptionElement) return false;
    const textContent = React.Children.toArray(descriptionElement.props.children)
      .filter(child => typeof child === 'string')
      .join(' ');
    return textContent.length < 100 && !textContent.includes('\n');
  }, [descriptionElement]);

  // Error handling for missing manifest
  if (!manifestUrl) {
    return (
      <div className={cn(workVariants({ size, variant }), className)}>
        <div className="flex items-center justify-center h-64 text-muted-foreground">
          <p>Invalid IIIF manifest provided</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(workVariants({ size, variant }), className)} {...props}>
      {/* Viewer Section */}
      <IIIFViewer
        manifestUrl={manifestUrl}
        config={config}
        size={size}
      />

      {/* Content Section - Always render if description or link exists */}
      {(descriptionElement || linkElement) && (
        <div className={contentVariants({
          layout: descriptionElement && linkElement ? 'compact' : 'default',
          hasContent: !!descriptionElement,
          contentDensity: isMinimalContent ? 'minimal' : 'default'
        })}>
          {descriptionElement && (
            <div className={cn(
              descriptionVariants({
                density: isMinimalContent ? 'minimal' : 'default'
              }),
              descriptionElement.props.className
            )}>
              {descriptionElement.props.children}
            </div>
          )}

          {linkElement && (
            <a
              href={linkElement.props.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                marcusButtonVariants({ variant: 'default' }),
                'self-end w-fit shrink-0',
                linkElement.props.className
              )}
            >
              {linkElement.props.children || 'Se mer...'}
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

// Work.Description component
function WorkDescription({ children }: WorkDescriptionProps) {
  // This component is just a marker - the actual rendering is handled in the parent Work component
  return <>{children}</>;
}

// Work.Link component
function WorkLink({ children }: WorkLinkProps) {
  // This component is just a marker - the actual rendering is handled in the parent Work component
  return <>{children}</>;
}

// Attach compound components to Work
Work.Description = WorkDescription;
Work.Link = WorkLink;
