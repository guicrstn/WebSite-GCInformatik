import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { nom, prenom, email, telephone, typeDemande, message } = data

    // Vérifier si les variables d'environnement sont définies
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("Variables d'environnement EMAIL_USER ou EMAIL_PASSWORD non définies")
      return NextResponse.json({ error: "Configuration du serveur d'email incomplète" }, { status: 500 })
    }

    // Créer un transporteur pour Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Obtenir le libellé du type de demande
    let typeDemandeLibelle = "Non spécifié"
    let typeDemandeIcon = "❓"

    if (typeDemande === "informatique") {
      typeDemandeLibelle = "Service Informatique"
      typeDemandeIcon = "💻"
    }
    if (typeDemande === "siteweb") {
      typeDemandeLibelle = "Développement de Site Web"
      typeDemandeIcon = "🌐"
    }
    if (typeDemande === "autre") {
      typeDemandeLibelle = "Autre demande"
      typeDemandeIcon = "📋"
    }

    // Date actuelle formatée
    const dateOptions: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
    const formattedDate = new Date().toLocaleDateString("fr-FR", dateOptions)

    // Créer le template HTML moderne
    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nouveau message de contact</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      </style>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Poppins', Arial, sans-serif; background-color: #f5f5f5; color: #333;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-top: 20px; margin-bottom: 20px;">
        <!-- En-tête -->
        <tr>
          <td style="background: linear-gradient(to right, #3b82f6, #60a5fa); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">Nouveau message de contact</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Reçu le ${formattedDate}</p>
          </td>
        </tr>
        
        <!-- Type de demande -->
        <tr>
          <td style="padding: 20px; text-align: center; background-color: rgba(59, 130, 246, 0.05);">
            <div style="display: inline-block; padding: 10px 20px; background-color: rgba(59, 130, 246, 0.1); border-radius: 50px; color: #3b82f6; font-weight: 500;">
              ${typeDemandeIcon} ${typeDemandeLibelle}
            </div>
          </td>
        </tr>
        
        <!-- Informations de contact -->
        <tr>
          <td style="padding: 30px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="padding: 0 0 20px 0;">
                  <h2 style="margin: 0 0 15px 0; color: #333; font-size: 18px; font-weight: 600; border-bottom: 1px solid #eee; padding-bottom: 10px;">Informations de contact</h2>
                  
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td width="120" style="padding: 8px 0; color: #666; font-weight: 500;">Nom:</td>
                      <td style="padding: 8px 0;">${nom}</td>
                    </tr>
                    <tr>
                      <td width="120" style="padding: 8px 0; color: #666; font-weight: 500;">Prénom:</td>
                      <td style="padding: 8px 0;">${prenom}</td>
                    </tr>
                    <tr>
                      <td width="120" style="padding: 8px 0; color: #666; font-weight: 500;">Email:</td>
                      <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
                    </tr>
                    <tr>
                      <td width="120" style="padding: 8px 0; color: #666; font-weight: 500;">Téléphone:</td>
                      <td style="padding: 8px 0;"><a href="tel:${telephone}" style="color: #3b82f6; text-decoration: none;">${telephone}</a></td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Message -->
              <tr>
                <td style="padding: 0;">
                  <h2 style="margin: 0 0 15px 0; color: #333; font-size: 18px; font-weight: 600; border-bottom: 1px solid #eee; padding-bottom: 10px;">Message</h2>
                  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 6px; line-height: 1.6;">
                    ${message.replace(/\n/g, "<br>")}
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- Pied de page -->
        <tr>
          <td style="background-color: #f5f5f5; padding: 20px; text-align: center; color: #666; font-size: 14px;">
            <p style="margin: 0 0 10px 0;">© ${new Date().getFullYear()} GC Informatik. Tous droits réservés.</p>
            <p style="margin: 0;">Ce message a été envoyé depuis le formulaire de contact de votre site web.</p>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `

    // Créer le message email
    const mailOptions = {
      from: process.env.EMAIL_USER, // votre adresse Gmail
      to: "contact@gcinformatik.fr", // adresse de réception
      replyTo: email, // pour que vous puissiez répondre directement au client
      subject: `${typeDemandeIcon} Nouveau message de ${prenom} ${nom} - ${typeDemandeLibelle}`,
      text: `
      Nom: ${nom}
      Prénom: ${prenom}
      Email: ${email}
      Téléphone: ${telephone}
      Type de demande: ${typeDemandeLibelle}
      
      Message:
      ${message}
    `,
      html: htmlTemplate,
    }

    try {
      // Envoyer l'email
      await transporter.sendMail(mailOptions)
      return NextResponse.json({ success: true })
    } catch (emailError) {
      console.error("Erreur lors de l'envoi de l'email:", emailError)
      // Gérer l'erreur de type unknown
      const errorMessage =
        emailError instanceof Error ? emailError.message : "Erreur inconnue lors de l'envoi de l'email"

      return NextResponse.json({ error: "Erreur lors de l'envoi de l'email: " + errorMessage }, { status: 500 })
    }
  } catch (error) {
    console.error("Erreur lors du traitement de la requête:", error)
    // Gérer l'erreur de type unknown
    const errorMessage = error instanceof Error ? error.message : "Erreur inconnue lors du traitement de la demande"

    return NextResponse.json(
      { error: "Une erreur est survenue lors du traitement de la demande: " + errorMessage },
      { status: 500 },
    )
  }
}

