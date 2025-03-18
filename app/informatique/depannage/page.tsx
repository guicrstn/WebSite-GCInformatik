import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HardDrive, Shield, Cpu, Wrench, ArrowRight } from 'lucide-react'

export default function DepannagePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-primary-light/5 py-20 md:py-32">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-primary to-primary-light opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-primary-light to-primary opacity-10 blur-3xl"></div>

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Services Dépannage
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Dépannage Informatique</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Solutions rapides et efficaces pour tous vos problèmes informatiques
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Expertise Technique
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Résolution de tous vos problèmes informatiques
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                GC Informatik vous propose des services de dépannage informatique complets pour résoudre rapidement vos
                problèmes techniques.
              </p>
              <p className="mt-4 text-muted-foreground">
                Que vous soyez un particulier ou une entreprise, nous intervenons pour diagnostiquer et réparer vos
                équipements informatiques.
              </p>
              <Button
                asChild
                className="mt-8 bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary transition-all duration-300 shadow-lg hover:shadow-primary/20"
              >
                <Link href="/contact">Demander un dépannage</Link>
              </Button>
            </div>
            <div className="relative mx-auto h-[400px] w-full max-w-[500px] md:mx-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-64 w-64 rounded-full bg-gradient-to-br from-primary to-primary-light opacity-20 blur-3xl"></div>
              </div>
              <div className="relative z-10 h-full w-full rounded-2xl bg-white/80 p-6 shadow-2xl backdrop-blur-sm dark:bg-gray-900/80">
                <Image
                  src="/imginstall.jpeg"
                  alt="Dépannage informatique"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary-light/5 py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Nos Solutions
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Nos services de dépannage</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Des solutions adaptées à tous vos besoins
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group relative overflow-hidden border-none bg-white transition-all hover:shadow-xl hover:shadow-primary/10 dark:bg-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-0 transition-opacity group-hover:opacity-5"></div>
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Réinstallation du système</h3>
                <p className="mt-2 text-muted-foreground">
                  Nous réinstallons votre système d&apos;exploitation (Windows, macOS, Linux) tout en préservant vos données
                  importantes. Une solution idéale pour les ordinateurs lents ou instables.
                </p>
                <Button
                  asChild
                  variant="ghost"
                  className="mt-6 px-0 text-primary hover:bg-transparent hover:text-primary-light"
                >
                  <Link href="/contact" className="flex items-center gap-1">
                    Demander un devis <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-none bg-white transition-all hover:shadow-xl hover:shadow-primary/10 dark:bg-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-0 transition-opacity group-hover:opacity-5"></div>
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Nettoyage de virus</h3>
                <p className="mt-2 text-muted-foreground">
                  Nous détectons et supprimons tous types de virus, malwares, ransomwares et autres logiciels
                  malveillants qui peuvent compromettre la sécurité de vos données et la performance de votre
                  ordinateur.
                </p>
                <Button
                  asChild
                  variant="ghost"
                  className="mt-6 px-0 text-primary hover:bg-transparent hover:text-primary-light"
                >
                  <Link href="/contact" className="flex items-center gap-1">
                    Demander un devis <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-none bg-white transition-all hover:shadow-xl hover:shadow-primary/10 dark:bg-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-0 transition-opacity group-hover:opacity-5"></div>
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <HardDrive className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Remplacement de disque dur</h3>
                <p className="mt-2 text-muted-foreground">
                  Nous remplaçons votre disque dur défectueux ou obsolète par un nouveau modèle plus performant (SSD),
                  tout en transférant vos données et en réinstallant votre système d&apos;exploitation.
                </p>
                <Button
                  asChild
                  variant="ghost"
                  className="mt-6 px-0 text-primary hover:bg-transparent hover:text-primary-light"
                >
                  <Link href="/contact" className="flex items-center gap-1">
                    Demander un devis <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-none bg-white transition-all hover:shadow-xl hover:shadow-primary/10 dark:bg-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-0 transition-opacity group-hover:opacity-5"></div>
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Wrench className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Réparation matérielle</h3>
                <p className="mt-2 text-muted-foreground">
                  Nous diagnostiquons et réparons les problèmes matériels de votre ordinateur : remplacement de
                  composants défectueux, réparation de connecteurs, nettoyage interne, etc.
                </p>
                <Button
                  asChild
                  variant="ghost"
                  className="mt-6 px-0 text-primary hover:bg-transparent hover:text-primary-light"
                >
                  <Link href="/contact" className="flex items-center gap-1">
                    Demander un devis <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary-light p-8 md:p-12">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white opacity-10 blur-3xl"></div>

            <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Un problème informatique ?</h2>
                <p className="mt-4 text-lg text-white/80">
                  Contactez-nous dès maintenant pour une intervention rapide et efficace.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-end">
                <Button asChild size="lg" className="w-full bg-white text-primary hover:bg-white/90 sm:w-auto">
                  <Link href="/contact">Demander un dépannage</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full border-white text-white hover:bg-white/10 sm:w-auto"
                >
                  <Link href="/contact">Nous appeler</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}