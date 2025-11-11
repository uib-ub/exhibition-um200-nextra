import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props: { params: Promise<{ mdxPath: string[] }> }) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  console.log("🚀 ~ generateMetadata ~ metadata:", metadata)
  return {
    ...metadata,
    keywords: Array.isArray(metadata.keywords) ? metadata.keywords.join(', ') : metadata.keywords || '',
    description: metadata.description || '',
    title: metadata.title || '',
  }
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props: { params: Promise<{ mdxPath: string[] }> }) {
  const params = await props.params
  const result = await importPage(params.mdxPath)
  const { default: MDXContent, toc, metadata } = result
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}