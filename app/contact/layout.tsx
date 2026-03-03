import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - Demandez un Devis Gratuit",
  description:
    "Contactez GC Informatik pour un devis gratuit. Dépannage informatique, installation réseau, création de site web à Martignat (01). Réponse rapide garantie.",
  keywords: [
    "contact informaticien Martignat",
    "devis informatique Oyonnax",
    "devis site web Ain",
    "devis dépannage informatique",
    "contact GC Informatik",
  ],
  alternates: {
    canonical: "https://gcinformatik.fr/contact",
  },
  openGraph: {
    title: "Contactez GC Informatik - Devis Gratuit",
    description: "Demandez un devis gratuit pour vos besoins informatiques. Dépannage, installation, création de site web à Martignat (01).",
    url: "https://gcinformatik.fr/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
