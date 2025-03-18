import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/WebSite-GCInformatik/components/navbar"
import Footer from "@/WebSite-GCInformatik/components/footer"
import { ThemeProvider } from "@/WebSite-GCInformatik/components/theme-provider"
import { Toaster } from "@/WebSite-GCInformatik/components/ui/toaster"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "GC Informatik - Services Informatiques & Création de Sites Web",
  description:
    "GC Informatik - Votre partenaire pour le dépannage informatique, l'installation de réseaux et la création de sites web professionnels.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
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

