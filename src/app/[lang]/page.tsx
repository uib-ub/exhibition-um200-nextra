import { Metadata } from 'next'
import Link from 'next/link'
import { getDictionary, isValidLocale } from '@/i18n'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isValidLocale(lang)) {
    return { title: 'Error' }
  }
  const dict = await getDictionary(lang)
  return {
    title: dict.metadata.title
  }
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isValidLocale(lang)) {
    return null
  }

  const dict = await getDictionary(lang)

  return (
    <div className="max-w-[1200px] mx-auto px-6">
      <h1 className="text-4xl font-bold mb-6">
        {dict.homepage.title}
      </h1>
      <p className="text-lg mb-8">
        {dict.homepage.description}
      </p>
      <Link
        href={`/${lang}/about`}
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        {dict.common.readMore}
      </Link>
    </div>
  )
}
