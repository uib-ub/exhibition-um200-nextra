import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'; // nextra-theme-blog or your custom theme
//import { Figure } from '@/components/figure'
//import { Work } from '@/components/work'
//import { Video } from '@/components/video'
//import { Quote } from '@/components/quote'
//import { IIIFViewer } from '@/components/iiif-viewer'
//import { IIIFManifest } from '@/components/ui/chc/iiif-manifest'
//import { ContentGrid } from '@/components/ui/chc/content-grid/content-grid'
//import { ImageCarousel } from '@/components/image-carousel'
import Link from 'next/link';
import Lorem from '@/components/lorem-ipsum.tsx';

// Get the default MDX components
const themeComponents = getThemeComponents()

// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    Link,
    Lorem,
    //Figure,
    //Work,
    //Video,
    //Quote,
    //IIIFViewer,
    //IIIFManifest,
    //ContentGrid,
    //ImageCarousel,
    ...components
  }
}