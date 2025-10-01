import { Resend } from "resend";

export async function POST(req) {
  // Vérifie si la clé API est présente
  if (!process.env.RESEND_API_KEY) {
    console.warn("⚠️ RESEND_API_KEY manquante. L'email ne sera pas envoyé.");
    return new Response(
      JSON.stringify({ error: "RESEND_API_KEY manquante" }),
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM || "onboarding@resend.dev",
      to: process.env.RESEND_TO || "finox6040@gmail.com",
      subject: "Nouveau message depuis le formulaire",
      html: "<p>Hello depuis SP Computing</p>",
    });

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}
