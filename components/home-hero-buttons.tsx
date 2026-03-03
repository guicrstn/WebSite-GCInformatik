"use client"

import { Button } from "@/components/ui/button"

export function HeroButtons() {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
      <Button
        size="lg"
        className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary transition-all duration-300 shadow-lg hover:shadow-primary/20"
        asChild
      >
        <a href="/contact">Demander un devis</a>
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
  )
}
