import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Universitet i Bergen 200 år'
}

export default async function Home(params: { lang: string }) {
  const lang = await params.lang || 'no';
  return (
    <div className="min-h-screen max-w-4xl mx-auto my-16 prose prose-lg dark:prose-invert">
      <h1 className="font-bold mb-6">
        Velkommen til UiB 200 år
      </h1>
      <p className="text-lg mb-8">
        Vi feirer Universitetet i Bergen sitt 200-årsjubileum i 2025. Utforsk historien og bli med på feiringen.
      </p>
      <Link
        href={`/${lang}/om`}
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Les mer
      </Link>
    </div>
  )
}
