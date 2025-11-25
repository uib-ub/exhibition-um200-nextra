import type { Metadata } from "next";
import { LastUpdated, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { Footer } from "@/components/footer";
import { getPageMap } from 'nextra/page-map'
import { Crimson_Pro, IM_Fell_Great_Primer } from "next/font/google";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
});

const imFellGreatPrimer = IM_Fell_Great_Primer({
  variable: "--font-marcus",
  subsets: ["latin"],
  weight: ['400']
});

export const metadata: Metadata = {
  title: "200 år med vidunderlig vitenskap",
  keywords: ["Universitetsmuseet i Bergen", "200 år", "nettutstilling", "vitenskap"],
  description: "Kommer snart",
};

const banner = <Banner storageKey="some-key">Lansering snart 🎉</Banner>

const navbar = (
  <Navbar
    logo={<div className='font-medium uppercase'>200 år med vidunderlig vitenskap</div>}
  // ... Your additional navbar options
  />
)

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      // Not required, but good for SEO
      lang="no"
      // Required to be set
      dir="ltr"
      className={`${crimsonPro.variable} ${imFellGreatPrimer.variable} antialiased`}
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="google" content="notranslate" />
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/uib-ub/exhibition-um200-nextra"
          toc={{
            title: "Innhold",
            backToTop: "Til toppen",
          }}
          feedback={{
            content: null,
          }}
          editLink={null}
          lastUpdated={<LastUpdated locale="nb">Sist oppdatert</LastUpdated>}
          darkMode={false}
          nextThemes={{
            forcedTheme: "light",
          }}
          search={<Search placeholder="Søk" emptyResult="Ingen resultater" loading="Søker..." errorText="Feil ved søk" />}
        >
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  )
}