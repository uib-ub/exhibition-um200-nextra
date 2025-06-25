'use client'
import React from 'react';
import { CloverViewerProps } from '@samvera/clover-iiif';
import dynamic from "next/dynamic";
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

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

interface IIIFViewerProps extends VariantProps<typeof viewerVariants> {
  /** IIIF manifest URL */
  manifestUrl: string;
  /** Clover viewer configuration options */
  config?: CloverViewerProps;
  /** Additional CSS classes */
  className?: string;
}

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

export function IIIFViewer({
  manifestUrl,
  config,
  className,
  size,
  ...props
}: IIIFViewerProps) {
  return (
    <div className={cn(viewerVariants({ size }), className)} {...props}>
      <Viewer
        iiifContent={manifestUrl}
        options={{
          canvasHeight: '100%',
          informationPanel: { open: false },
          ...config,
        }}
      />
    </div>
  );
} 