"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Monitor, Wrench } from "lucide-react"

const informatiqueSections = [
  {
    title: "Dépannage",
    href: "/informatique/depannage",
    description: "Réinstallation du système, nettoyage de virus, remplacement de disque dur",
    icon: <Wrench className="h-5 w-5 text-primary" />,
  },
  {
    title: "Installation Informatique",
    href: "/informatique/installation",
    description: "PC Fixe, PC portable, mise en place de sauvegarde",
    icon: <Monitor className="h-5 w-5 text-primary" />,
  },
  // Suppression de la section réseau du menu de navigation
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md dark:bg-gray-900/95" : "bg-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-primary to-primary-light">
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">GC</div>
          </div>
          <span className="hidden font-bold text-xl bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent sm:inline-block">
            Informatik
          </span>
        </Link>

        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                      "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none",
                      "data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                    )}
                  >
                    Accueil
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="group">
                  <span className="flex items-center gap-1">Informatique</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                    {informatiqueSections.map((section) => (
                      <li key={section.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={section.href}
                            className="flex select-none items-center gap-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                              {section.icon}
                            </div>
                            <div>
                              <div className="text-sm font-medium leading-none">{section.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                {section.description}
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/site-web" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                      "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none",
                      "data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                    )}
                  >
                    Site Web
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                      "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none",
                      "data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                    )}
                  >
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:block">
          <Button
            asChild
            className="bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/20 font-medium"
          >
            <Link href="/contact">Demander un devis</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="relative h-9 w-9">
              <Menu className={cn("h-5 w-5 transition-opacity", isOpen ? "opacity-0" : "opacity-100")} />
              <X className={cn("absolute h-5 w-5 transition-opacity", isOpen ? "opacity-100" : "opacity-0")} />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-l-primary/20">
            <div className="flex flex-col gap-6 pt-6">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                Accueil
              </Link>

              <div className="space-y-4">
                <h2 className="text-lg font-medium">Informatique</h2>
                <div className="grid gap-3 pl-2">
                  {informatiqueSections.map((section) => (
                    <Link
                      key={section.title}
                      href={section.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {section.icon}
                      <span>{section.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/site-web"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                Site Web
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                Contact
              </Link>

              <Button
                asChild
                className="mt-4 bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/20 font-medium"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Demander un devis
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
