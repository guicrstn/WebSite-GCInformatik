"use client"
import Image from "next/image"
import { Button } from "@/WebSite-GCInformatik/components/ui/button"
import { Monitor, Server, Wrench, Globe, CheckCircle, Shield, Zap, Phone } from "lucide-react"

export default function Home() {
  // Fonction pour forcer la redirection
  const navigateTo = (path: string) => {
    console.log("Tentative de navigation vers:", path)
    // Essayer plusieurs méthodes de redirection
    try {
      window.location.href = path
    } catch (error) {
      console.error("Erreur lors de la redirection:", error)
      // Fallback si la première méthode échoue
      document.location.href = path
    }
  }

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
                Dépannage, installation, réseau et création de sites web pour les entreprises et auto-entrepreneurs.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary transition-all duration-300 shadow-lg hover:shadow-primary/20"
                  onClick={() => navigateTo("/contact")}
                >
                  Demander un devis
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 hover:text-primary"
                  onClick={() => {
                    const servicesSection = document.getElementById("services")
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Découvrir nos services
                </Button>
              </div>
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
            {/* Carte Dépannage - Entièrement cliquable */}
            <div
              onClick={() => navigateTo("/informatique/depannage")}
              className="cursor-pointer group relative overflow-hidden rounded-lg border-none bg-gradient-to-br from-primary/5 to-primary-light/5 transition-all hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-0 transition-opacity group-hover:opacity-10"></div>
              <div className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Wrench className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Dépannage</h3>
                <p className="mt-2 text-muted-foreground">Résolution rapide de vos problèmes informatiques</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Réinstallation du système</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Nettoyage de virus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Remplacement de disque dur</span>
                  </li>
                </ul>
                <div className="mt-6 inline-flex items-center gap-1 text-primary hover:text-primary-light transition-colors">
                  En savoir plus →
                </div>
              </div>
            </div>

            {/* Carte Installation - Entièrement cliquable */}
            <div
              onClick={() => navigateTo("/informatique/installation")}
              className="cursor-pointer group relative overflow-hidden rounded-lg border-none bg-gradient-to-br from-primary/5 to-primary-light/5 transition-all hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-0 transition-opacity group-hover:opacity-10"></div>
              <div className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Monitor className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Installation</h3>
                <p className="mt-2 text-muted-foreground">Mise en place de votre matériel informatique</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>PC Fixe</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>PC Portable</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Mise en place de sauvegarde</span>
                  </li>
                </ul>
                <div className="mt-6 inline-flex items-center gap-1 text-primary hover:text-primary-light transition-colors">
                  En savoir plus →
                </div>
              </div>
            </div>

            {/* Carte Réseau - Entièrement cliquable */}
            <div
              onClick={() => navigateTo("/informatique/reseau")}
              className="cursor-pointer group relative overflow-hidden rounded-lg border-none bg-gradient-to-br from-primary/5 to-primary-light/5 transition-all hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-0 transition-opacity group-hover:opacity-10"></div>
              <div className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Server className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Réseau</h3>
                <p className="mt-2 text-muted-foreground">Solutions réseau pour les professionnels</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Installation réseau d'entreprise</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Baie réseau</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Configuration routeur/switch</span>
                  </li>
                </ul>
                <div className="mt-6 inline-flex items-center gap-1 text-primary hover:text-primary-light transition-colors">
                  En savoir plus →
                </div>
              </div>
            </div>

            {/* Carte Site Web - Entièrement cliquable */}
            <div
              onClick={() => navigateTo("/site-web")}
              className="cursor-pointer group relative overflow-hidden rounded-lg border-none bg-gradient-to-br from-primary/5 to-primary-light/5 transition-all hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-0 transition-opacity group-hover:opacity-10"></div>
              <div className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Site Web</h3>
                <p className="mt-2 text-muted-foreground">Création de sites web professionnels</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Sites vitrines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Design responsive</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Référencement SEO</span>
                  </li>
                </ul>
                <div className="mt-6 inline-flex items-center gap-1 text-primary hover:text-primary-light transition-colors">
                  En savoir plus →
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary-light/5 py-20 md:py-32">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Pourquoi nous choisir
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                Votre partenaire informatique de confiance
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                GC Informatik vous accompagne dans tous vos projets informatiques, du dépannage à la création de sites
                web.
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
                  onClick={() => navigateTo("/contact")}
                >
                  Contactez-nous
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
                    alt="GC Informatik services"
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
                  Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-end">
                <Button
                  size="lg"
                  className="w-full bg-white text-primary hover:bg-white/90 sm:w-auto"
                  onClick={() => navigateTo("/contact")}
                >
                  Demander un devis
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-transparent border-2 border-white text-white hover:bg-white/10 sm:w-auto"
                >
                  <a href="tel:+33XXXXXXXXXX" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                    <Phone className="h-4 w-4" />
                    Nous appeler
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

