"use client"

import type React from "react"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Send, CheckCircle } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  nom: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  prenom: z.string().min(2, {
    message: "Le prénom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  telephone: z.string().min(10, {
    message: "Veuillez entrer un numéro de téléphone valide.",
  }),
  typeDemande: z.string({
    required_error: "Veuillez sélectionner un type de demande.",
  }),
  message: z.string().min(10, {
    message: "Le message doit contenir au moins 10 caractères.",
  }),
})

// Fonction pour formater le numéro de téléphone
const formatPhoneNumber = (value: string) => {
  // Supprimer tous les caractères non numériques
  const numbers = value.replace(/\D/g, "")

  // Ajouter des points après chaque paire de chiffres
  const formatted = numbers.replace(/(\d{2})(?=\d)/g, "$1.")

  return formatted
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      typeDemande: "",
      message: "",
    },
  })

  // Fonction pour gérer le formatage du téléphone pendant la saisie
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
    const value = e.target.value
    const formattedValue = formatPhoneNumber(value)
    onChange(formattedValue)
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      // Appel à l'API d'envoi d'email
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      const data = await response.json()
      console.log("Réponse API:", data) // Ajout de log pour le débogage

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue")
      }

      // Afficher le succès
      setIsSuccess(true)
      toast({
        description: "Message envoyé ! Nous vous répondrons dans les plus brefs délais.",
      })

      // Réinitialiser le formulaire
      form.reset()

      // Réinitialiser l'état de succès après 5 secondes
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error("Erreur détaillée:", error)
      toast({
        variant: "destructive",
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-primary-light/5 py-20 md:py-32">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-primary to-primary-light opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-primary-light to-primary opacity-10 blur-3xl"></div>

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Nous Contacter
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Contactez-nous</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Vous avez une question ou un projet ? N&apos;hésitez pas à nous contacter. Nous vous répondrons dans les plus
            brefs délais.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">Nos coordonnées</h2>
              <p className="mt-4 text-muted-foreground">
                N&apos;hésitez pas à nous contacter par téléphone, email ou en remplissant le formulaire ci-contre.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Téléphone</h3>
                    <p className="mt-1 text-muted-foreground">+33 (0)6 07 41 31 11</p>
                    <p className="mt-1 text-sm text-muted-foreground">Du lundi au vendredi, de 9h à 18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="mt-1 text-muted-foreground">
                      <a href="mailto:contact@gcinformatik.fr" className="text-primary hover:underline">
                        contact@gcinformatik.fr
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">Nous vous répondons sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Adresse</h3>
                    <p className="mt-1 text-muted-foreground">255 route de talour, 01100 MARTIGNAT, France</p>
                    <p className="mt-1 text-sm text-muted-foreground">Intervention dans toute la région</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-lg font-medium">Suivez-nous</h3>
                <div className="mt-4 flex space-x-4">
                  <Button
                    asChild
                    variant="outline"
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
                    variant="outline"
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
                    variant="outline"
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
            </div>

            <div className="rounded-xl bg-white p-8 shadow-xl dark:bg-gray-800">
              <h2 className="text-2xl font-bold">Envoyez-nous un message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Remplissez le formulaire ci-dessous et nous vous contacterons rapidement.
              </p>

              {isSuccess ? (
                <div className="mt-8 flex flex-col items-center justify-center rounded-lg bg-primary/10 p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-primary" />
                  <h3 className="mt-4 text-xl font-medium">Message envoyé !</h3>
                  <p className="mt-2 text-muted-foreground">
                    Merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="nom"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nom</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Dupont"
                                {...field}
                                className="border-primary/20 focus-visible:ring-primary"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="prenom"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Prénom</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Jean"
                                {...field}
                                className="border-primary/20 focus-visible:ring-primary"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="jean.dupont@example.com"
                              {...field}
                              className="border-primary/20 focus-visible:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="telephone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Téléphone</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="06.12.34.56.78"
                              {...field}
                              onChange={(e) => handlePhoneChange(e, field.onChange)}
                              className="border-primary/20 focus-visible:ring-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="typeDemande"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type de demande</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-primary/20 focus-visible:ring-primary">
                                <SelectValue placeholder="Sélectionnez le type de demande" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="devis">Demande de devis</SelectItem>
                              <SelectItem value="informatique">Service Informatique</SelectItem>
                              <SelectItem value="siteweb">Développement de Site Web</SelectItem>
                              <SelectItem value="autre">Autre demande</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Décrivez votre problème ou votre projet..."
                              className="min-h-[120px] border-primary/20 focus-visible:ring-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary transition-all duration-300 shadow-lg hover:shadow-primary/20"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Envoi en cours...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Envoyer le message
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}