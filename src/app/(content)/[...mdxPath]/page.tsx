/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks -- false positive, useMDXComponents/useTOC are not react hooks */

import { useMDXComponents } from 'nextra-theme-docs'
import { generateStaticParamsFor, importPage } from 'nextra/pages'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props: { params: any }) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  return metadata
}

export default async function Page(props: { params: any }) {
  const params = await props.params
  const result = await importPage(params.mdxPath)
  const { default: MDXContent, toc, metadata } = result

  const Wrapper = useMDXComponents().wrapper

  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}