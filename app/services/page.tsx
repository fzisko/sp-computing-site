"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0)
  const [isMenuHovered, setIsMenuHovered] = useState(false)
  const [activeMenuItem, setActiveMenuItem] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const services = [
    {
      id: 0,
      title: "Câblage Réseau",
      icon: "🖥️",
      color: "emerald",
      description:
        "Installation et organisation des câbles (cuivre ou fibre optique) reliant ordinateurs, serveurs et équipements à Internet.",
      why: "Garantit une connexion rapide, stable et sans interruption.",
      solution:
        "Investissement qualité qui réduit les pannes, évite les pertes de données et assure la performance long terme.",
      features: ["Câblage structuré", "Fibre optique", "Tests de performance", "Documentation complète"],
    },
    {
      id: 1,
      title: "Wi-Fi Professionnel",
      icon: "📶",
      color: "teal",
      description: "Réseau sans fil permettant la connexion à Internet et aux ressources d'entreprise sans câble.",
      why: "Offre mobilité et flexibilité dans bureaux, entrepôts ou pour les clients.",
      solution: "Configuration optimale qui améliore la productivité et évite les problèmes de lenteur ou sécurité.",
      features: ["Couverture optimisée", "Sécurité WPA3", "Gestion centralisée", "Support multi-appareils"],
    },
    {
      id: 2,
      title: "Sécurité Informatique",
      icon: "🛡️",
      color: "orange",
      description: "Ensemble des mesures de protection : antivirus, pare-feu, sauvegardes, gestion des accès.",
      why: "Les cyberattaques sont fréquentes. Sans protection, risque de perte d'argent, réputation et données.",
      solution: "Assure confidentialité, disponibilité et intégrité des informations de l'entreprise.",
      features: ["Pare-feu avancé", "Antivirus entreprise", "Sauvegardes automatiques", "Audit sécurité"],
    },
    {
      id: 3,
      title: "Caméras de Surveillance",
      icon: "📹",
      color: "purple",
      description: "Système de vidéosurveillance pour surveiller et sécuriser les locaux.",
      why: "Prévention contre intrusions, vols ou incidents internes.",
      solution: "Tranquillité d'esprit, preuve en cas de litige, sécurité du personnel et matériel.",
      features: ["Caméras HD/4K", "Vision nocturne", "Stockage cloud", "Accès mobile"],
    },
    {
      id: 4,
      title: "Parlophonie",
      icon: "🔔",
      color: "cyan",
      description: "Système d'interphone (audio et vidéo) pour contrôler l'accès aux bâtiments.",
      why: "Filtrer les entrées et limiter l'accès aux personnes autorisées.",
      solution: "Renforce la sécurité des locaux et améliore l'accueil des visiteurs.",
      features: ["Interphone vidéo", "Contrôle d'accès", "Badges RFID", "Historique des entrées"],
    },
    {
      id: 5,
      title: "Nettoyage Rack",
      icon: "🗄️",
      color: "blue",
      description: "Organisation, nettoyage et remise en ordre des baies/racks informatiques.",
      why: "Un rack mal entretenu entraîne surchauffes, pannes, difficultés de maintenance.",
      solution: "Améliore circulation d'air, prolonge durée de vie, simplifie dépannages, image professionnelle.",
      features: ["Câblage organisé", "Étiquetage complet", "Ventilation optimisée", "Documentation technique"],
    },
  ]

  const nextService = () => {
    setActiveService((prev) => (prev + 1) % services.length)
  }

  const prevService = () => {
    setActiveService((prev) => (prev - 1 + services.length) % services.length)
  }

  const goToService = (index: number) => {
    setActiveService(index)
  }

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: "from-emerald-500 to-teal-500",
        border: "border-emerald-400/50",
        text: "text-emerald-400",
        glow: "shadow-emerald-500/25",
      },
      teal: {
        bg: "from-teal-500 to-cyan-500",
        border: "border-teal-400/50",
        text: "text-teal-400",
        glow: "shadow-teal-500/25",
      },
      orange: {
        bg: "from-orange-500 to-red-500",
        border: "border-orange-400/50",
        text: "text-orange-400",
        glow: "shadow-orange-500/25",
      },
      purple: {
        bg: "from-purple-500 to-pink-500",
        border: "border-purple-400/50",
        text: "text-purple-400",
        glow: "shadow-purple-500/25",
      },
      cyan: {
        bg: "from-cyan-400 to-teal-500",
        border: "border-cyan-400/50",
        text: "text-cyan-400",
        glow: "shadow-cyan-500/25",
      },
      blue: {
        bg: "from-blue-500 to-indigo-500",
        border: "border-blue-400/50",
        text: "text-blue-400",
        glow: "shadow-blue-500/25",
      },
    }
    return colors[color as keyof typeof colors] || colors.emerald
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-2xl border-b border-emerald-500/20 shadow-2xl">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo with revolutionary effects */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-emerald-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <span className="text-white font-black text-lg">SP</span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                </div>
                {/* Floating particles around logo */}
                <div className="absolute -top-2 -left-2 w-2 h-2 bg-emerald-400/60 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-teal-400/60 rounded-full animate-bounce delay-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-black text-white group-hover:text-emerald-400 transition-colors duration-300">
                  SP Computing
                </span>
              </div>
            </Link>

            {/* Revolutionary navigation links */}
            <div
              className="hidden lg:flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl rounded-2xl px-8 py-4 border border-emerald-500/20 shadow-2xl mt-2"
              onMouseEnter={() => setIsMenuHovered(true)}
              onMouseLeave={() => setIsMenuHovered(false)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl transition-all duration-700 ${isMenuHovered ? "opacity-100 scale-105" : "opacity-0 scale-95"}`}
              ></div>

              {[
                { href: "/", label: "Accueil", icon: "🏠" },
                { href: "/services", label: "Services", icon: "⚡" },
                { href: "/standard-telephonique", label: "Standard téléphonique", icon: "📞" },
                { href: "/contact", label: "Contact", icon: "💬" },
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-6 py-3 text-white hover:text-emerald-400 transition-all duration-500 group font-semibold"
                  onMouseEnter={() => setActiveMenuItem(item.label)}
                  onMouseLeave={() => setActiveMenuItem("")}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-lg transition-all duration-500 ${activeMenuItem === item.label ? "opacity-100 scale-110" : "opacity-0 scale-90"}`}
                  ></div>

                  <span
                    className={`absolute -top-6 left-1/2 transform -translate-x-1/2 text-2xl transition-all duration-500 ${activeMenuItem === item.label ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                  >
                    {item.icon}
                  </span>

                  <span className="relative z-10 transition-all duration-300 group-hover:font-bold">{item.label}</span>

                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-sm transition-all duration-500 ${activeMenuItem === item.label ? "w-full" : "w-0"}`}
                  ></div>
                </Link>
              ))}
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-12 h-12 bg-gradient-to-br from-emerald-500/40 to-teal-500/40 rounded-2xl flex items-center justify-center backdrop-blur-xl border-2 border-emerald-400/50 group shadow-lg"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5 group-hover:gap-2 transition-all duration-300">
                  <div
                    className={`w-5 h-0.5 bg-emerald-300 rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : "group-hover:w-6"}`}
                  ></div>
                  <div
                    className={`w-4 h-0.5 bg-teal-300 rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "group-hover:w-6"}`}
                  ></div>
                  <div
                    className={`w-3 h-0.5 bg-cyan-300 rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : "group-hover:w-6"}`}
                  ></div>
                </div>
              </button>
            </div>

            {/* Revolutionary CTA button */}
            <Link href="/contact" className="hidden xl:block">
              <button className="relative px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-full group shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 transform hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Devis gratuit
                  <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                    <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  </div>
                </span>
              </button>
            </Link>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-2xl border-b border-emerald-500/20 shadow-2xl z-50">
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col gap-4">
                {[
                  { href: "/", label: "Accueil", icon: "🏠" },
                  { href: "/services", label: "Services", icon: "⚡" },
                  { href: "/standard-telephonique", label: "Standard téléphonique", icon: "📞" },
                  { href: "/contact", label: "Contact", icon: "💬" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-4 px-6 py-4 text-white hover:text-emerald-400 hover:bg-emerald-500/10 rounded-xl transition-all duration-300 border border-transparent hover:border-emerald-500/20"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-semibold text-lg">{item.label}</span>
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-full text-center shadow-xl"
                >
                  Devis gratuit
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-semibold mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
              Nos Services Informatiques
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="block text-white mb-4">Solutions IT</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                Professionnelles
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
              Découvrez notre gamme complète de{" "}
              <span className="text-emerald-400 font-semibold">services informatiques</span> conçus pour optimiser votre
              infrastructure technologique et{" "}
              <span className="text-teal-400 font-semibold">sécuriser votre entreprise</span>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {services.map((service, index) => {
              const colorClasses = getColorClasses(service.color)
              return (
                <div
                  key={service.id}
                  className="bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-6 border border-emerald-500/20 hover:border-emerald-400/40 group w-full max-w-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${colorClasses.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg ${colorClasses.glow}`}
                  >
                    <span className="text-2xl">{service.icon}</span>
                  </div>

                  <h3
                    className={`text-2xl font-black mb-4 text-white group-hover:${colorClasses.text} transition-colors duration-300`}
                  >
                    {service.title}
                  </h3>

                  <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-4 mb-6">
                    <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                      <h4 className="font-semibold text-white mb-2">Pourquoi c'est important ?</h4>
                      <p className="text-sm text-slate-300">{service.why}</p>
                    </div>

                    <div
                      className={`bg-gradient-to-r ${colorClasses.bg} bg-opacity-5 rounded-lg p-4 border ${colorClasses.border}`}
                    >
                      <h4 className={`font-semibold ${colorClasses.text} mb-2`}>✨ Notre solution</h4>
                      <p className="text-sm text-white">{service.solution}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">Fonctionnalités incluses :</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-300">
                          <div
                            className={`w-1.5 h-1.5 ${colorClasses.text.replace("text-", "bg-")} rounded-full mr-3`}
                          ></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact">
                    <button
                      className={`w-full mt-6 px-6 py-3 bg-gradient-to-r ${colorClasses.bg} hover:opacity-90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${colorClasses.glow}`}
                    >
                      En savoir plus
                    </button>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-semibold mb-8 backdrop-blur-sm">
            <span>Contactez-nous</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Un <span className="text-emerald-400">service</span> vous intéresse ?
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Contactez nos experts pour discuter de vos besoins et obtenir un{" "}
            <span className="text-emerald-400 font-semibold">devis personnalisé gratuit</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-emerald-500/20 hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-emerald-500/30">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Appelez-nous</h3>
              <p className="text-slate-300 mb-4">Réponse garantie sous 2h en jours ouvrés</p>
              <a
                href="tel:+3271496478"
                className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors text-lg"
              >
                +32 71 49 64 78
              </a>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-teal-500/20 hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-teal-500/30">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Écrivez-nous</h3>
              <p className="text-slate-300 mb-4">Devis personnalisé gratuit</p>
              <a
                href="mailto:info@sp-computing.be"
                className="text-teal-400 font-semibold hover:text-teal-300 transition-colors text-lg"
              >
                info@sp-computing.be
              </a>
            </div>
          </div>

          <Link href="/contact">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25 text-lg">
              Demander un devis gratuit
            </button>
          </Link>
        </div>
      </section>

      <footer className="relative bg-slate-950/80 backdrop-blur-2xl border-t border-emerald-500/20 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-emerald-950/20"></div>

        {/* Floating particles background */}
        <div className="absolute top-4 left-1/4 w-2 h-2 bg-emerald-400/60 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-8 right-1/3 w-1.5 h-1.5 bg-teal-400/60 rounded-full animate-bounce delay-300 opacity-60"></div>
        <div className="absolute bottom-6 left-1/3 w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse opacity-60"></div>

        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
          <div className="flex flex-col space-y-8 lg:flex-row lg:justify-between lg:items-center lg:space-y-0 lg:gap-8">
            {/* Revolutionary Logo Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 group">
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-emerald-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <span className="text-white font-black text-base sm:text-lg lg:text-xl">SP</span>
                  <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-orange-500 rounded-full animate-pulse"></div>
                </div>
                {/* Floating particles around logo */}
                <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400/60 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-teal-400/60 rounded-full animate-bounce delay-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-xl sm:text-2xl font-black text-white group-hover:text-emerald-400 transition-colors duration-300 block">
                  SP Computing
                </span>
                <p className="text-slate-400 text-xs sm:text-sm font-medium">Solutions IT & Télécommunications</p>
              </div>
            </div>

            {/* Revolutionary Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-1 sm:gap-2 bg-slate-800/50 backdrop-blur-xl rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border border-emerald-500/20 shadow-2xl max-w-full overflow-hidden">
              {[
                { href: "/", label: "Accueil", icon: "🏠" },
                { href: "/services", label: "Services", icon: "⚡" },
                { href: "/standard-telephonique", label: "Standard téléphonique", icon: "📞" },
                { href: "/contact", label: "Contact", icon: "💬" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-2 sm:px-3 lg:px-4 py-2 text-white hover:text-emerald-400 transition-all duration-500 group font-semibold text-xs sm:text-sm flex-shrink-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-lg opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-110 transition-all duration-500"></div>

                  <span className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 text-sm sm:text-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    {item.icon}
                  </span>

                  <span className="relative z-10 transition-all duration-300 group-hover:font-bold whitespace-nowrap">
                    {item.label}
                  </span>

                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-sm w-0 group-hover:w-full transition-all duration-500"></div>
                </Link>
              ))}
            </nav>

            {/* Revolutionary Contact Info */}
            <div className="text-center lg:text-right bg-slate-800/30 backdrop-blur-xl rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 border border-emerald-500/20 shadow-2xl group hover:shadow-emerald-500/20 transition-all duration-500 max-w-full">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-2 sm:gap-3 mb-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-emerald-500/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <span className="text-emerald-400">📞</span>
                </div>
                <a
                  href="tel:+3271496478"
                  className="text-emerald-400 font-bold text-base sm:text-lg hover:text-emerald-300 transition-colors"
                >
                  +32 71 49 64 78
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-teal-500/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <span className="text-teal-400">✉️</span>
                </div>
                <a
                  href="mailto:info@sp-computing.be"
                  className="text-teal-400 font-medium text-sm sm:text-base hover:text-teal-300 transition-colors break-all sm:break-normal"
                >
                  info@sp-computing.be
                </a>
              </div>
            </div>
          </div>

          {/* Revolutionary Copyright Section */}
          <div className="border-t border-emerald-500/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent"></div>
            <p className="text-slate-400 text-xs sm:text-sm relative z-10 leading-relaxed">
              © 2025 <span className="text-emerald-400 font-semibold">SP Computing</span>. Tous droits réservés.
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> | </span>
              <span className="text-teal-400 font-medium">Région Brabant Wallon</span>
            </p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
          aria-label="Retour en haut"
        >
          <div className="w-4 h-4 sm:w-5 sm:h-5 border-t-2 border-r-2 border-white transform -rotate-45 group-hover:-translate-y-0.5 transition-transform duration-200"></div>
        </button>
      )}
    </div>
  )
}
