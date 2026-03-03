import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://gcinformatik.fr"),
  title: {
    default: "GC Informatik - Dépannage Informatique & Création de Sites Web à Martignat (01100)",
    template: "%s | GC Informatik",
  },
  description:
    "GC Informatik, votre expert informatique à Martignat (Ain, 01). Dépannage PC, installation réseau, création de sites web professionnels pour entreprises et auto-entrepreneurs. Devis gratuit.",
  keywords: [
    "dépannage informatique",
    "réparation ordinateur",
    "création site web",
    "installation réseau",
    "informaticien",
    "Martignat",
    "Oyonnax",
    "Ain",
    "01",
    "Rhône-Alpes",
    "Auvergne-Rhône-Alpes",
    "dépannage PC",
    "maintenance informatique",
    "site vitrine",
    "réseau entreprise",
    "installation PC",
    "nettoyage virus",
    "sauvegarde données",
    "GC Informatik",
    "auto-entrepreneur informatique",
  ],
  authors: [{ name: "GC Informatik" }],
  creator: "GC Informatik",
  publisher: "GC Informatik",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://gcinformatik.fr",
    siteName: "GC Informatik",
    title: "GC Informatik - Dépannage Informatique & Création de Sites Web",
    description:
      "Expert informatique à Martignat (01). Dépannage PC, installation réseau, création de sites web. Devis gratuit pour entreprises et particuliers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GC Informatik - Services Informatiques",
    description:
      "Dépannage informatique, installation réseau et création de sites web à Martignat (01). Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://gcinformatik.fr",
  },
  verification: {
    // Ajoutez votre code de verification Google Search Console ici
    // google: "votre-code-verification",
  },
}

export const viewport: Viewport = {
  themeColor: "#3B82F6",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://gcinformatik.fr",
              name: "GC Informatik",
              description:
                "Expert informatique à Martignat (Ain, 01). Dépannage PC, installation réseau, création de sites web professionnels pour entreprises et auto-entrepreneurs.",
              url: "https://gcinformatik.fr",
              telephone: "+33607413111",
              email: "contact@gcinformatik.fr",
              address: {
                "@type": "PostalAddress",
                streetAddress: "255 route de Talour",
                addressLocality: "Martignat",
                postalCode: "01100",
                addressRegion: "Auvergne-Rhône-Alpes",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 46.2667,
                longitude: 5.6167,
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Martignat",
                },
                {
                  "@type": "City",
                  name: "Oyonnax",
                },
                {
                  "@type": "City",
                  name: "Bellegarde-sur-Valserine",
                },
                {
                  "@type": "City",
                  name: "Nantua",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Ain",
                },
              ],
              serviceType: [
                "Dépannage informatique",
                "Réparation ordinateur",
                "Installation réseau",
                "Création de sites web",
                "Maintenance informatique",
                "Installation PC",
                "Nettoyage virus",
                "Sauvegarde de données",
              ],
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/gcinformatik",
                "https://www.linkedin.com/company/gc-informatik",
                "https://www.instagram.com/gcinformatik",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "GC Informatik",
              url: "https://gcinformatik.fr",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://gcinformatik.fr/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Accueil",
                  item: "https://gcinformatik.fr",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Dépannage Informatique",
                  item: "https://gcinformatik.fr/informatique/depannage",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Installation Informatique",
                  item: "https://gcinformatik.fr/informatique/installation",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Création de Sites Web",
                  item: "https://gcinformatik.fr/site-web",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Contact",
                  item: "https://gcinformatik.fr/contact",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
