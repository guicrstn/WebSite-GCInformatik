export default function PolitiqueConfidentialitePage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-primary-light/5 py-20 md:py-32">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-primary to-primary-light opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-primary-light to-primary opacity-10 blur-3xl"></div>

        <div className="container relative z-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Politique de Confidentialité</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold">1. Collecte des informations</h2>
              <p className="mt-4">Nous recueillons des informations lorsque vous :</p>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>Remplissez le formulaire de contact</li>
                <li>Naviguez sur notre site</li>
                <li>Utilisez nos services</li>
              </ul>
              <p className="mt-4">
                Les informations recueillies incluent votre nom, prénom, adresse e-mail et numéro de téléphone.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">2. Utilisation des informations</h2>
              <p className="mt-4">Les informations que nous collectons sont utilisées pour :</p>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>Répondre à vos demandes de contact</li>
                <li>Améliorer notre service client</li>
                <li>Vous contacter pour le suivi de votre demande</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold">3. Protection des informations</h2>
              <p className="mt-4">
                Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations
                personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations
                sensibles transmises en ligne.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">4. Cookies</h2>
              <p className="mt-4">
                Notre site utilise des cookies pour améliorer l&apos;expérience utilisateur. Un cookie est un petit fichier
                texte stocké sur votre ordinateur. Les cookies nous aident à analyser le trafic web et à améliorer notre
                site en fonction des besoins des visiteurs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">5. Divulgation à des tiers</h2>
              <p className="mt-4">
                Nous ne vendons, n&apos;échangeons et ne transférons pas vos informations personnelles identifiables à des
                tiers. Cela ne comprend pas les tierces parties de confiance qui nous aident à exploiter notre site web
                ou à mener nos affaires, tant que ces parties conviennent de garder ces informations confidentielles.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">6. Consentement</h2>
              <p className="mt-4">En utilisant notre site, vous consentez à notre politique de confidentialité.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">7. Droit d&apos;accès et de rectification</h2>
              <p className="mt-4">
                Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au Règlement européen
                n°2016/679/UE du 27 avril 2016, vous bénéficiez d&apos;un droit d&apos;accès, de rectification, de portabilité et
                d&apos;effacement de vos données personnelles. Vous pouvez exercer ces droits en nous contactant à l&apos;adresse
                : contact@gcinformatik.fr
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}