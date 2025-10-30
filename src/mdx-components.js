import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs' // nextra-theme-blog or your custom theme
import { Work } from '@/components/work'
import { IIIFViewer } from '@/components/iiif-viewer'
import { IIIFManifest } from '@/components/ui/chc/iiif-manifest'
import { ContentGrid } from '@/components/ui/chc/content-grid/content-grid'

// Get the default MDX components
const themeComponents = getThemeComponents()

// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    Work,
    IIIFViewer,
    IIIFManifest,
    ContentGrid,
    ...components
  }
}