import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Monitor, Server, Wrench, Globe, CheckCircle, Shield, Zap, Network, Wifi, Lock } from "lucide-react"
import { HeroButtons } from "@/components/home-hero-buttons"

export const metadata: Metadata = {
  title: "GC Informatik - Dépannage Informatique & Création de Sites Web à Martignat (01100)",
  description:
    "GC Informatik, votre expert informatique à Martignat (Ain, 01). Dépannage PC, installation réseau, création de sites web professionnels pour entreprises et auto-entrepreneurs. Devis gratuit.",
  alternates: {
    canonical: "https://gcinformatik.fr",
  },
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-primary-light/5 py-20 md:py-32">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-primary to-primary-light opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-primary-light to-primary opacity-10 blur-3xl"></div>

        <div className="container relative z-10">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                <span className="block">Solutions informatiques</span>
                <span className="mt-2 block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  professionnelles
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Dépannage, installation, réseau et création de sites web pour les entreprises et auto-entrepreneurs à Martignat et dans l{"'"}Ain.
              </p>
              <HeroButtons />
            </div>
            <div className="relative mx-auto h-[400px] w-full max-w-[500px] md:mx-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-64 w-64 rounded-full bg-gradient-to-br from-primary to-primary-light opacity-20 blur-3xl"></div>
              </div>
              <div className="relative z-10 h-full w-full rounded-2xl bg-white/80 p-6 shadow-2xl backdrop-blur-sm dark:bg-gray-900/80">
                <div className="grid h-full grid-cols-2 gap-4">
                  <div className="flex flex-col gap-4">
                    <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary-light/20 p-4">
                      <div className="flex h-full flex-col items-center justify-center rounded-lg bg-white shadow-md dark:bg-gray-800">
                        <Monitor className="h-10 w-10 text-primary" />
                        <p className="mt-2 text-center text-sm font-medium">Installation PC</p>
                      </div>
                    </div>
                    <div className="flex-1 overflow-hidden rounded-xl bg-gradient-to-br from-primary-light/20 to-primary/20 p-4">
                      <div className="flex h-full flex-col items-center justify-center rounded-lg bg-white shadow-md dark:bg-gray-800">
                        <Server className="h-10 w-10 text-primary-light" />
                        <p className="mt-2 text-center text-sm font-medium">Réseau</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex-1 overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary-light/20 p-4">
                      <div className="flex h-full flex-col items-center justify-center rounded-lg bg-white shadow-md dark:bg-gray-800">
                        <Wrench className="h-10 w-10 text-primary" />
                        <p className="mt-2 text-center text-sm font-medium">Dépannage</p>
                      </div>
                    </div>
                    <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-primary-light/20 to-primary/20 p-4">
                      <div className="flex h-full flex-col items-center justify-center rounded-lg bg-white shadow-md dark:bg-gray-800">
                        <Globe className="h-10 w-10 text-primary-light" />
                        <p className="mt-2 text-center text-sm font-medium">Sites Web</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Nos Services
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Des solutions complètes pour tous vos besoins
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              GC Informatik vous accompagne dans tous vos projets informatiques
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Carte Depannage */}
            <a
              href="/informatique/depannage"
              className="cursor-pointer group relative overflow-hidden rounded-lg border-none bg-gradient-to-br from-primary/5 to-primary-light/5 transition-all hover:shadow-xl hover:shadow-primary/10 no-underline"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-0 transition-opacity group-hover:opacity-10"></div>
              <div className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Wrench className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-foreground">Dépannage informatique</h3>
                <p className="mt-2 text-muted-foreground">Résolution rapide de vos problèmes informatiques à Martignat et alentours</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-foreground">Réinstallation du système</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-foreground">Nettoyage de virus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-foreground">Remplacement de disque dur</span>
                  </li>
                </ul>
                <div className="mt-6 inline-flex items-center gap-1 text-primary hover:text-primary-light transition-colors">
                  En savoir plus →
                </div>
              </div>
            </a>

            {/* Carte Installation */}
            <a
              href="/informatique/installation"
              className="cursor-pointer group relative overflow-hidden rounded-lg border-none bg-gradient-to-br from-primary/5 to-primary-light/5 transition-all hover:shadow-xl hover:shadow-primary/10 no-underline"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-0 transition-opacity group-hover:opacity-10"></div>
              <div className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Monitor className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-foreground">Installation informatique</h3>
                <p className="mt-2 text-muted-foreground">Mise en place de votre matériel informatique</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-foreground">PC Fixe</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-foreground">PC Portable</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-foreground">Mise en place de sauvegarde</span>
                  </li>
                </ul>
                <div className="mt-6 inline-flex items-center gap-1 text-primary hover:text-primary-light transition-colors">
                  En savoir plus →
                </div>
              </div>
            </a>

            {/* Carte Reseau */}
            <a
              href="#reseau"
              className="cursor-pointer group relative overflow-hidden rounded-lg border-none bg-gradient-to-br from-primary/5 to-primary-light/5 transition-all hover:shadow-xl hover:shadow-primary/10 no-underline"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-0 transition-opacity group-hover:opacity-10"></div>
              <div className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Server className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-foreground">Installation réseau</h3>
                <p className="mt-2 text-muted-foreground">Solutions réseau pour les professionnels</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-foreground">Installation réseau d{"'"}entreprise</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-foreground">Baie réseau</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-foreground">Configuration routeur/switch</span>
                  </li>
                </ul>
                <div className="mt-6 inline-flex items-center gap-1 text-primary hover:text-primary-light transition-colors">
                  Voir ci-dessous ↓
                </div>
              </div>
            </a>

            {/* Carte Site Web */}
            <a
              href="/site-web"
              className="cursor-pointer group relative overflow-hidden rounded-lg border-none bg-gradient-to-br from-primary/5 to-primary-light/5 transition-all hover:shadow-xl hover:shadow-primary/10 no-underline"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-0 transition-opacity group-hover:opacity-10"></div>
              <div className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-foreground">Création de sites web</h3>
                <p className="mt-2 text-muted-foreground">Création de sites web professionnels</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-foreground">Sites vitrines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-foreground">Design responsive</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-foreground">Référencement SEO</span>
                  </li>
                </ul>
                <div className="mt-6 inline-flex items-center gap-1 text-primary hover:text-primary-light transition-colors">
                  En savoir plus →
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Section Reseau */}
      <section id="reseau" className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary-light/5 py-20 md:py-32">
        <div className="container">
          <div className="text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Services Réseau
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Installation et configuration réseau à Martignat</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Des solutions complètes pour votre infrastructure réseau d{"'"}entreprise
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-0 transition-opacity group-hover:opacity-5"></div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Network className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Installation réseau d{"'"}entreprise</h3>
              <p className="mt-2 text-muted-foreground">
                Nous concevons et installons des réseaux d{"'"}entreprise complets, incluant le câblage, les équipements
                actifs et la configuration des services réseau essentiels à votre activité.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-0 transition-opacity group-hover:opacity-5"></div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Server className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Baie réseau et brassage</h3>
              <p className="mt-2 text-muted-foreground">
                Nous installons et organisons vos baies de brassage pour une gestion optimale de votre infrastructure
                réseau, avec un câblage propre et bien identifié pour faciliter la maintenance.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-0 transition-opacity group-hover:opacity-5"></div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Wifi className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Réseau sans fil professionnel</h3>
              <p className="mt-2 text-muted-foreground">
                Nous déployons des solutions Wi-Fi professionnelles avec une couverture optimale, des performances
                élevées et une sécurité renforcée pour répondre aux besoins de mobilité de votre entreprise.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-0 transition-opacity group-hover:opacity-5"></div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Sécurisation réseau</h3>
              <p className="mt-2 text-muted-foreground">
                Nous mettons en place des solutions de sécurité réseau adaptées à vos besoins : pare-feu, VPN,
                segmentation réseau, contrôle d{"'"}accès et surveillance pour protéger vos données sensibles.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary transition-all duration-300 shadow-lg hover:shadow-primary/20"
              asChild
            >
              <a href="/contact">Demander un devis pour votre réseau</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Pourquoi nous choisir
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Votre partenaire informatique de confiance à Martignat
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                GC Informatik vous accompagne dans tous vos projets informatiques, du dépannage à la création de sites
                web, dans l{"'"}Ain et en Auvergne-Rhône-Alpes.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Réactivité</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Intervention rapide pour résoudre vos problèmes informatiques
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Fiabilité</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Des solutions durables et adaptées à vos besoins</p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Monitor className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Expertise</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Des compétences techniques pour tous vos projets</p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Innovation</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Des solutions modernes et performantes</p>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary transition-all duration-300 shadow-lg hover:shadow-primary/20"
                  asChild
                >
                  <a href="/contact">Contactez-nous</a>
                </Button>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative mx-auto h-[500px] w-full max-w-[500px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-64 w-64 rounded-full bg-gradient-to-br from-primary to-primary-light opacity-20 blur-3xl"></div>
                </div>
                <div className="relative z-10 h-full w-full rounded-2xl bg-white/80 p-6 shadow-2xl backdrop-blur-sm dark:bg-gray-900/80">
                  <Image
                    src="/imgpartenaire.png"
                    alt="GC Informatik - Partenaire informatique de confiance à Martignat dans l'Ain"
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary-light p-8 md:p-12">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white opacity-10 blur-3xl"></div>

            <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Prêt à démarrer votre projet ?
                </h2>
                <p className="mt-4 text-lg text-white/80">
                  Contactez-nous dès aujourd{"'"}hui pour discuter de vos besoins et obtenir un devis personnalisé.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-end">
                <Button
                  size="lg"
                  className="w-full bg-white text-primary hover:bg-white/90 sm:w-auto"
                  asChild
                >
                  <a href="/contact">Demander un devis</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-white text-white hover:bg-white/10 sm:w-auto"
                  asChild
                >
                  <a href="tel:+33607413111">Nous appeler</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
