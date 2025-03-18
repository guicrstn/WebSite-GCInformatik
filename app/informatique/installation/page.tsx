import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Laptop, Database, Settings } from 'lucide-react'

export default function InstallationPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-primary-light/5 py-20 md:py-32">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-primary to-primary-light opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-primary-light to-primary opacity-10 blur-3xl"></div>

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Services Installation
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Installation Informatique</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Mise en place et configuration de votre matériel informatique
          </p>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="relative h-[300px] overflow-hidden rounded-lg order-2 md:order-1">
              <Image
                src="/imginfor.jpeg"
                alt="Installation informatique"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Des installations sur mesure pour vos besoins
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                GC Informatik vous accompagne dans l&apos;installation et la configuration de votre matériel informatique.
              </p>
              <p className="mt-4 text-muted-foreground">
                Nous vous proposons des solutions adaptées à vos besoins, que ce soit pour un usage personnel ou
                professionnel.
              </p>
              <Button asChild className="mt-8">
                <Link href="/contact">Demander une installation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Nos services d&apos;installation</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Des solutions complètes pour tous vos équipements
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <Monitor className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">PC Fixe</CardTitle>
                <CardDescription>Installation et configuration de PC de bureau</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous assemblons, installons et configurons votre PC fixe selon vos besoins spécifiques. Nous nous
                  occupons de l&apos;installation du système d&apos;exploitation et des logiciels essentiels.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <Laptop className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">PC Portable</CardTitle>
                <CardDescription>Configuration et optimisation de PC portables</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous configurons votre PC portable pour une utilisation optimale. Installation du système, des
                  pilotes, des logiciels nécessaires et optimisation des performances.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <Database className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Mise en place de sauvegarde</CardTitle>
                <CardDescription>Solutions de backup sécurisées</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous mettons en place des solutions de sauvegarde automatisées et sécurisées pour protéger vos données
                  importantes contre les pertes accidentelles ou les pannes matérielles.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-md">
              <CardHeader>
                <Settings className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">Configuration logicielle</CardTitle>
                <CardDescription>Installation et paramétrage de logiciels</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous installons et configurons tous les logiciels dont vous avez besoin pour votre activité
                  professionnelle ou personnelle, avec des paramètres optimisés pour votre utilisation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}