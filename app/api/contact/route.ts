import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY ?? 're_blablabla')

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { firstName, lastName, email, phone, company, service, message } = body

        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { success: false, message: "Veuillez remplir tous les champs obligatoires." },
                { status: 400 },
            )
        }

        const emailContent = `
Nouvelle demande de contact depuis le site SP Computing

Informations du contact :
- Nom : ${firstName} ${lastName}
- Email : ${email}
- Téléphone : ${phone || "Non renseigné"}
- Entreprise : ${company || "Non renseignée"}
- Service souhaité : ${service || "Non spécifié"}

Message :
${message}

---
Cette demande a été envoyée depuis le formulaire de contact du site web.
    `.trim()

        const result = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: ["finox6040@gmail.com"],
            subject: `Nouvelle demande de contact - ${firstName} ${lastName}`,
            text: emailContent,
            replyTo: email,
        })

        if (result.error) {
            console.error("Resend API error:", result.error)
            return NextResponse.json({ success: false, message: "Erreur lors de l'envoi de l'email" }, { status: 500 })
        }

        return NextResponse.json({
            success: true,
            message: "Message envoyé avec succès",
        })
    } catch (error) {
        console.error("Contact form error:", error)
        return NextResponse.json({ success: false, message: "Erreur serveur" }, { status: 500 })
    }
}
