import { Footer, Layout, LocaleSwitch, Navbar, ThemeSwitch } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import './globals.css'
import { customPageMap } from '@/lib/customNextra'
import { getDictionary, isValidLocale, type Locale } from '@/i18n'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isValidLocale(lang)) {
    return {}
  }
  const dict = await getDictionary(lang)

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      url: 'https://universitetibergen200.no',
      siteName: dict.metadata.title,
      images: [
        { url: 'https://universitetibergen200.no/og.png' },
      ],
    },
    metadataBase: new URL('https://universitetibergen200.no'),
  }
}

const navbar = async (lang: Locale) => {
  const dict = await getDictionary(lang)
  return (
    <Navbar
      logo={<b>{dict.metadata.title}</b>}
    >
      <>
        {/* <div className="flex items-center gap-2">
          <LocaleSwitch />
          <ThemeSwitch />
        </div> */}
        {/*  <div className="flex items-center gap-2">
          <Link href={`/${lang}/works`}>{dict.navigation.works}</Link>
        </div> */}
      </>
    </Navbar>
  )
}

const footer = (
  <Footer>
    <LocaleSwitch />
    <ThemeSwitch />
    UiB {new Date().getFullYear()} © Nextra.
  </Footer>
)

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang: string }
}) {
  const lang = await params.lang
  if (!isValidLocale(lang)) {
    // Handle invalid locale, maybe redirect or show 404
    return null
  }

  const firstPassPageMap = await getPageMap(`/${lang}`)
  const pageMap = customPageMap(firstPassPageMap, {
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
      <body className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <Layout
          navbar={await navbar(lang)}
          pageMap={pageMap}
          editLink={null}
          feedback={{
            content: null
          }}
          footer={footer}
          i18n={[
            { locale: 'no', name: 'Norsk' },
            { locale: 'en', name: 'English' }
          ]}
        >
          <div className=" py-12">
            {children}
          </div>
        </Layout>
      </body>
    </html>
  )
}