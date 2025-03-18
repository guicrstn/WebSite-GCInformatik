export default function MentionsLegalesPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-primary-light/5 py-20 md:py-32">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-primary to-primary-light opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-primary-light to-primary opacity-10 blur-3xl"></div>

        <div className="container relative z-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Mentions Légales</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold">1. Informations légales</h2>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Raison sociale :</strong> GC Informatik
                </p>
                <p>
                  <strong>Siège social :</strong> 255 route de talour, 01100 MARTIGNAT, France
                </p>
                <p>
                  <strong>Téléphone :</strong> +33 (0)X XX XX XX XX
                </p>
                <p>
                  <strong>Email :</strong> contact@gcinformatik.fr
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold">2. Hébergement</h2>
              <div className="mt-4">
                <p>Ce site est hébergé par :</p>
                <p className="mt-2">
                  <strong>OVH SAS</strong>
                  <br />2 rue Kellermann
                  <br />
                  59100 Roubaix
                  <br />
                  France
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold">3. Propriété intellectuelle</h2>
              <p className="mt-4">
                L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la
                propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents
                téléchargeables et les représentations iconographiques et photographiques.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">4. Liens hypertextes</h2>
              <p className="mt-4">
                Le site GC Informatik peut contenir des liens hypertextes vers d&apos;autres sites présents sur le réseau
                Internet. Les liens vers ces autres ressources vous font quitter le site GC Informatik.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">5. Responsabilité</h2>
              <p className="mt-4">
                La société GC Informatik ne peut être tenue pour responsable des erreurs ou omissions dans les
                informations diffusées ou des problèmes techniques rencontrés sur le site et sur tous les autres sites
                vers lesquels elle établit des liens.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}