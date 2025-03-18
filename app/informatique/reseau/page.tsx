import Image from "next/image"
import Link from "next/link"
import { Button } from "@/WebSite-GCInformatik/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/WebSite-GCInformatik/components/ui/card"
import { Network, Server, Lock, Wifi } from "lucide-react"

export default function ReseauPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-primary-light/5 py-20 md:py-32">
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-primary to-primary-light opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-primary-light to-primary opacity-10 blur-3xl"></div>

      <div className="container relative z-10 text-center">
        <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
        Services Réseau
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Solutions Réseau</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
        Installation et configuration de réseaux professionnels
        </p>
      </div>
    </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Des solutions réseau adaptées aux entreprises
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                GC Informatik vous propose des services d'installation et de configuration de réseaux informatiques pour
                les professionnels.
              </p>
              <p className="mt-4 text-muted-foreground">
                Nous concevons des infrastructures réseau fiables, sécurisées et évolutives pour répondre aux besoins
                spécifiques de votre entreprise.
              </p>
              <Button asChild className="mt-8">
                <Link href="/contact">Demander un devis</Link>
              </Button>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image
                src="/imgreseau.jpeg"
                alt="Installation réseau"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Nos services réseau</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Des solutions complètes pour votre infrastructure
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <Network className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Installation réseau d'entreprise</CardTitle>
                <CardDescription>Mise en place d'infrastructures complètes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous concevons et installons des réseaux d'entreprise complets, incluant le câblage, les équipements
                  actifs et la configuration des services réseau essentiels à votre activité.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <Server className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Baie réseau</CardTitle>
                <CardDescription>Installation et organisation de baies de brassage</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous installons et organisons vos baies de brassage pour une gestion optimale de votre infrastructure
                  réseau, avec un câblage propre et bien identifié pour faciliter la maintenance.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <Wifi className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Réseau sans fil</CardTitle>
                <CardDescription>Solutions Wi-Fi professionnelles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous déployons des solutions Wi-Fi professionnelles avec une couverture optimale, des performances
                  élevées et une sécurité renforcée pour répondre aux besoins de mobilité de votre entreprise.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <Lock className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Sécurisation réseau</CardTitle>
                <CardDescription>Protection de votre infrastructure</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous mettons en place des solutions de sécurité réseau adaptées à vos besoins : pare-feu, VPN,
                  segmentation réseau, contrôle d'accès et surveillance pour protéger vos données sensibles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

