import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import { Suspense } from "react"
import StructuredData from "@/components/structured-data"

export const metadata: Metadata = {
  title: "SP Computing - Solutions IT et Télécommunications | Bruxelles & Brabant Wallon",
  description:
    "SP Computing : Expert en consultance IT, standard téléphonique, Wi-Fi, réseaux et sécurité informatique. Solutions sur mesure pour entreprises en Belgique. Devis gratuit.",
  keywords: [
    "SP Computing",
    "solutions IT",
    "télécommunications",
    "standard téléphonique",
    "Wi-Fi",
    "réseaux informatiques",
    "sécurité informatique",
    "câblage réseau",
    "maintenance informatique",
    "support technique",
    "Bruxelles",
    "Brabant Wallon",
    "Belgique",
    "entreprise",
    "consultation IT",
    "infrastructure réseau",
    "parlophonie",
    "caméras surveillance",
    "devis gratuit",
  ],
  authors: [{ name: "SP Computing" }],
  creator: "SP Computing",
  publisher: "SP Computing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sp-computing.be"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-BE": "/fr",
      fr: "/fr",
    },
  },
  openGraph: {
    title: "SP Computing - Solutions IT et Télécommunications",
    description:
      "Expert en solutions IT et télécommunications pour entreprises. Standard téléphonique, Wi-Fi, réseaux, sécurité informatique. Devis gratuit.",
    url: "https://sp-computing.be",
    siteName: "SP Computing",
    locale: "fr_BE",
    type: "website",
    images: [
      {
        url: "/logo-social.png",
        width: 1200,
        height: 630,
        alt: "SP Computing - Solutions IT et Télécommunications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SP Computing - Solutions IT et Télécommunications",
    description: "Expert en solutions IT et télécommunications pour entreprises. Devis gratuit.",
    images: ["/logo-social.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "Next.js",
  applicationName: "SP Computing",
  referrer: "origin-when-cross-origin",
  category: "technology",
  classification: "Business",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#10b981",
      },
    ],
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr-BE">
      <body>
        <StructuredData />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
