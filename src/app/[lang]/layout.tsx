import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import './globals.css'
import { customPageMap, localizePagemap } from '@/lib/customNextra'

export const metadata = {
  description: 'Universitet i Bergen 200 år',
  title: 'Universitet i Bergen 200 år',
  openGraph: {
    title: 'Universitet i Bergen 200 år',
    description: 'Universitet i Bergen 200 år',
    url: 'https://universitetibergen200.no',
    siteName: 'Universitet i Bergen 200 år',
    images: [
      { url: 'https://universitetibergen200.no/og.png' },
    ],
  },
  metadataBase: new URL('https://universitetibergen200.no'),
}

const navbar = (lang: string) => (
  <Navbar
    logo={<b>UM 200 år</b>}
    logoLink={`/${lang}`}
  />
)
const footer = <Footer>UiB {new Date().getFullYear()} © Nextra.</Footer>

export default async function RootLayout({ children, params }: { children: React.ReactNode, params: { lang: string } }) {
  const { lang } = await params;
  const firstPassPageMap = await getPageMap(`/${lang}`)
  const localizedPageMap = localizePagemap(firstPassPageMap, lang)
  const pageMap = customPageMap(localizedPageMap, {
    works: {
      type: "page",
      title: "Works"
    },
    metadata: {
      type: "page",
      title: "Metadata"
    }
  })

  return (
    <html
      lang={lang}
      // Should be set by getDirection function
      dir="ltr"
      suppressHydrationWarning
    >
      <body>
        <Layout
          navbar={navbar(lang)}
          pageMap={pageMap}
          editLink={null}
          feedback={{
            content: null
          }}
          footer={footer}
          i18n={[{ locale: 'no', name: 'Norsk' }, { locale: 'en', name: 'English' }]}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}