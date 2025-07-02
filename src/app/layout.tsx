import type { Metadata } from "next";
import { Footer, Layout,LastUpdated, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Universitetsmuseet i Bergen 200 år",
  description: "Kommer snart",
};
 
 
const banner = <Banner storageKey="some-key">Lansering snart 🎉</Banner>

const navbar = (
  <Navbar
    logo={<b>Universitetsmuseet i Bergen 200 år</b>}
    // ... Your additional navbar options
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Universitetet i Bergen.</Footer>
 
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      >
        <meta name="description" content="Universitetsmuseet i Bergen 200 år" />
        <meta name="keywords" content="Universitetsmuseet i Bergen, 200 år, nettutstilling" />
        <meta name="author" content="Universitetet i Bergen" />
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
          footer={footer}
          feedback={{
            content: 'Spørsmål eller kommentarer? Send oss en e-post!',
          }}
          editLink="Rediger denne siden"
          lastUpdated={<LastUpdated locale="nb">Sist oppdatert</LastUpdated>}
          themeSwitch={{
            dark: "Mørk",
            light: "Lys",
            system: "System",
          }}
          search={<Search placeholder="Søk" emptyResult="Ingen resultater" loading="Søker..." errorText="Feil ved søk" />}          
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}