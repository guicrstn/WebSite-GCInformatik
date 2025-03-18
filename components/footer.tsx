import Link from "next/link"
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/WebSite-GCInformatik/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-primary to-primary-light">
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">GC</div>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                GC Informatik
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Votre partenaire informatique de confiance pour le dépannage, l'installation et la création de sites web.
            </p>
            <div className="mt-6 flex space-x-4">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary"
              >
                <a href="https://www.facebook.com/profile.php?id=61559089580543&sk=about" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary"
              >
                <a href="https://www.linkedin.com/company/gc-informatik" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary"
              >
                <a href="https://www.instagram.com/gcinformatik" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/informatique/depannage"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Dépannage Informatique
                </Link>
              </li>
              <li>
                <Link
                  href="/informatique/installation"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Installation Informatique
                </Link>
              </li>
              <li>
                <Link
                  href="/informatique/reseau"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Réseau
                </Link>
              </li>
              <li>
                <Link href="/site-web" className="text-muted-foreground hover:text-primary transition-colors">
                  Création de Sites Web
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Liens Rapides</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-muted-foreground hover:text-primary transition-colors">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-de-confidentialite"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Politique de Confidentialité
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <a href="tel:+33XXXXXXXXXX" className="text-primary hover:text-primary font-medium">
                  +33 (0)6 07 41 31 11
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <a
                  href="mailto:contact@gcinformatik.fr"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  contact@gcinformatik.fr
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground">France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} GC Informatik. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

