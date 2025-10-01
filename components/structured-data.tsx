"use client"

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SP Computing",
            description: "Expert en solutions IT et télécommunications pour entreprises",
            url: "https://sp-computing.be",
            logo: "https://sp-computing.be/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+32-71-49-64-78",
              contactType: "customer service",
              availableLanguage: ["French"],
              areaServed: "BE",
            },
            address: {
              "@type": "PostalAddress",
              addressRegion: "Brabant Wallon",
              addressCountry: "BE",
            },
            sameAs: ["https://www.linkedin.com/company/sp-computing", "https://www.facebook.com/spcomputing"],
            serviceArea: {
              "@type": "Place",
              name: "Belgique",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Services IT et Télécommunications",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Standard téléphonique",
                    description: "Solutions de téléphonie pour entreprises",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Câblage réseau",
                    description: "Installation et maintenance de réseaux informatiques",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Wi-Fi",
                    description: "Solutions Wi-Fi professionnelles",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Sécurité informatique",
                    description: "Protection et sécurisation des systèmes informatiques",
                  },
                },
              ],
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "SP Computing",
            image: "https://sp-computing.be/logo.png",
            telephone: "+32-71-49-64-78",
            email: "info@sp-computing.be",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Brabant Wallon",
              addressCountry: "BE",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "50.6942",
              longitude: "4.3597",
            },
            url: "https://sp-computing.be",
            priceRange: "€€",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00",
              },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "127",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "SP Computing",
            url: "https://sp-computing.be",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://sp-computing.be/search?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Accueil",
                item: "https://sp-computing.be",
              },
            ],
          }),
        }}
      />
    </>
  )
}
