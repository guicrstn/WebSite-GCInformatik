import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Smartphone, Search, Palette } from 'lucide-react'

export default function SiteWebPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-primary-light/5 py-20 md:py-32">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-primary to-primary-light opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-primary-light to-primary opacity-10 blur-3xl"></div>

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Services Développement
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Création de Sites Web</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Des sites web professionnels pour valoriser votre activité
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="relative h-[300px] overflow-hidden rounded-lg order-2 md:order-1">
              <Image src="/imgdev.jpeg" alt="Création de sites web" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Votre présence en ligne professionnelle</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                GC Informatik conçoit des sites web sur mesure pour les entreprises et auto-entrepreneurs.
              </p>
              <p className="mt-4 text-muted-foreground">
                Nous créons des sites vitrines élégants et fonctionnels qui mettent en valeur votre activité et attirent
                de nouveaux clients.
              </p>
              <Button
                asChild
                className="mt-8 bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/20"
              >
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Nos services web</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Des solutions web adaptées à vos besoins
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <Globe className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Sites vitrines</CardTitle>
                <CardDescription>Présentez votre activité en ligne</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous créons des sites vitrines élégants et professionnels qui présentent efficacement votre
                  entreprise, vos produits et services à vos clients potentiels.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <Smartphone className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Design responsive</CardTitle>
                <CardDescription>Adapté à tous les appareils</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tous nos sites sont conçus avec une approche &quot;mobile-first&quot; pour garantir une expérience utilisateur
                  optimale sur tous les appareils : smartphones, tablettes et ordinateurs.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <Search className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Référencement SEO</CardTitle>
                <CardDescription>Optimisation pour les moteurs de recherche</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous optimisons votre site pour les moteurs de recherche afin d&apos;améliorer sa visibilité et d&apos;attirer
                  plus de visiteurs qualifiés vers votre entreprise.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <Palette className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Design personnalisé</CardTitle>
                <CardDescription>Une identité visuelle unique</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous créons un design sur mesure qui reflète l&apos;identité de votre entreprise, avec une attention
                  particulière aux détails pour un résultat professionnel et attrayant.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Nos réalisations</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Découvrez quelques exemples de nos créations
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/logotechni.png"
                alt="Technidecors"
                width={800}
                height={600}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-xl font-bold text-white">Technidecors</h3>
                <p className="mt-2 text-sm text-gray-200">Décoration de pièces plastiques - Montreal-la-Cluse</p>
                <Button asChild variant="default" className="mt-4 bg-white text-primary hover:bg-white/90 font-medium">
                  <Link href="https://technidecors.com" target="_blank" rel="noopener noreferrer">
                    Visiter le site
                  </Link>
                </Button>
              </div>
            </div>
  
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/logo.png"
                alt="Taxi-Dumoulin"
                width={800}
                height={600}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-xl font-bold text-white">Taxi-Dumoulin</h3>
                <p className="mt-2 text-sm text-gray-200">Taxi - Nantua</p>
                <Button asChild variant="default" className="mt-4 bg-white text-primary hover:bg-white/90 font-medium">
                  <Link href="https://taxi-dumoulin.com" target="_blank" rel="noopener noreferrer">
                    Visiter le site
                  </Link>
                </Button>
              </div>
            </div>

            {/* Placeholder for future projects */}
            <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
              <div className="flex aspect-[4/3] w-full flex-col items-center justify-center p-6 text-center">
                <h3 className="text-xl font-bold">Votre projet ici ?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Contactez-nous pour discuter de votre projet de site web
                </p>
                <Button
                  asChild
                  className="mt-4 bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/20"
                >
                  <Link href="/contact">Nous contacter</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
