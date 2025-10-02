"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"
import { TrendingUp, Users, Award, Shield, Clock, FileText } from "lucide-react"
import GoogleReviewsCarousel from "@/components/google-reviews-carousel" // Assuming this component exists

// CSS Icon Components
const Zap = ({ className }: { className?: string }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <div className="relative">
      <div className="w-2 h-3 border-l-2 border-t-2 border-current transform rotate-12"></div>
      <div className="absolute top-1 left-1 w-1 h-1 bg-current transform rotate-45"></div>
    </div>
  </div>
)

const PhoneIcon = ({ className }: { className?: string }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <div className="w-3 h-4 border-2 border-current rounded-sm relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-0.5 bg-current rounded-full"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-0.5 bg-current rounded-full"></div>
    </div>
  </div>
)

const SparklesIcon = ({ className }: { className?: string }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <div className="relative">
      <div className="w-1 h-1 bg-current rounded-full"></div>
      <div className="absolute -top-1 -left-1 w-0.5 h-2 bg-current transform rotate-45"></div>
      <div className="absolute -top-1 -right-1 w-0.5 h-2 bg-current transform -rotate-45"></div>
      <div className="absolute top-1 -left-0.5 w-2 h-0.5 bg-current"></div>
    </div>
  </div>
)

const MessageCircle = ({ className }: { className?: string }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <div className="relative">
      <div className="w-4 h-3 border-2 border-current rounded-full relative">
        <div className="absolute -bottom-1 left-1 w-0 h-0 border-l-2 border-r-2 border-t-2 border-l-transparent border-r-transparent border-t-current"></div>
      </div>
    </div>
  </div>
)

const User = ({ className }: { className?: string }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <div className="relative">
      <div className="w-2 h-2 bg-current rounded-full mb-1"></div>
      <div className="w-3 h-2 bg-current rounded-t-full"></div>
    </div>
  </div>
)

const Mail = ({ className }: { className?: string }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <div className="relative">
      <div className="w-4 h-3 border-2 border-current relative">
        <div className="absolute top-0 left-0 w-0 h-0 border-l-2 border-r-2 border-b-2 border-l-transparent border-r-transparent border-b-current"></div>
      </div>
    </div>
  </div>
)

const Briefcase = ({ className }: { className?: string }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <div className="relative">
      <div className="w-4 h-3 border-2 border-current rounded-sm"></div>
      <div className="absolute -top-1 left-1 w-2 h-1 border-2 border-current rounded-t-sm"></div>
    </div>
  </div>
)

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isMenuHovered, setIsMenuHovered] = useState(false)
  const [activeMenuItem, setActiveMenuItem] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <header>
        <nav
          className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-2xl border-b border-emerald-500/20 shadow-2xl"
          role="navigation"
          aria-label="Navigation principale"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16 sm:h-20">
              {/* Logo with revolutionary effects */}
              <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-emerald-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <span className="text-white font-black text-base sm:text-lg">SP</span>
                    <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  </div>
                  {/* Floating particles around logo */}
                  <div className="absolute -top-1.5 -left-1.5 sm:-top-2 sm:-left-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400/60 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-teal-400/60 rounded-full animate-bounce delay-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="hidden sm:block">
                  <span className="text-xl sm:text-2xl font-black text-white group-hover:text-emerald-400 transition-colors duration-300">
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

                    <span className="relative z-10 transition-all duration-300 group-hover:font-bold">
                      {item.label}
                    </span>

                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-sm transition-all duration-500 ${activeMenuItem === item.label ? "w-full" : "w-0"}`}
                    ></div>
                  </Link>
                ))}
              </div>

              <div className="lg:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center backdrop-blur-xl border border-emerald-500/30 group"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center gap-1 sm:gap-1.5 group-hover:gap-2 transition-all duration-300">
                    <div
                      className={`w-4 h-0.5 sm:w-5 sm:h-0.5 bg-emerald-400 rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5 sm:translate-y-2" : "group-hover:w-5 sm:group-hover:w-6"}`}
                    ></div>
                    <div
                      className={`w-3 h-0.5 sm:w-4 sm:h-0.5 bg-teal-400 rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "group-hover:w-5 sm:group-hover:w-6"}`}
                    ></div>
                    <div
                      className={`w-2.5 h-0.5 sm:w-3 sm:h-0.5 bg-cyan-400 rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5 sm:-translate-y-2" : "group-hover:w-5 sm:group-hover:w-6"}`}
                    ></div>
                  </div>
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-emerald-400/50 animate-ping opacity-0 group-hover:opacity-100"></div>
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
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                </button>
              </Link>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-2xl border-b border-emerald-500/20 shadow-2xl">
              <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
                <div className="flex flex-col gap-2 sm:gap-4">
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
                      className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 text-white hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg sm:rounded-xl transition-all duration-300 border border-transparent hover:border-emerald-500/20"
                    >
                      <span className="text-xl sm:text-2xl">{item.icon}</span>
                      <span className="font-semibold text-base sm:text-lg">{item.label}</span>
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mt-2 sm:mt-4 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-full text-center shadow-xl text-sm sm:text-base"
                  >
                    Devis gratuit
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Revolutionary floating breadcrumbs */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-slate-800/80 backdrop-blur-xl rounded-full px-6 py-2 border border-emerald-500/20 shadow-xl opacity-0 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <span className="text-emerald-400">SP Computing</span>
              <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
              <span className="text-white">Solutions IT & Télécommunications</span>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-16 sm:pt-20">
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/20 overflow-hidden px-4 sm:px-6 lg:px-8"
          aria-labelledby="hero-title"
        >
          {/* Geometric background pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/10"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

            {/* Geometric shapes */}
            <div
              className="absolute top-20 right-20 w-32 h-32 border border-emerald-500/20 rotate-45 animate-spin"
              style={{ animationDuration: "20s" }}
            ></div>
            <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rotate-12"></div>
            <div className="absolute top-1/2 right-1/3 w-16 h-16 border-2 border-teal-500/30 rounded-full"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 lg:mb-12 border border-emerald-500/20 backdrop-blur-sm mt-12 sm:mt-16">
                <div
                  className="w-3 h-3 sm:w-4 sm:h-4 bg-emerald-400 transform rotate-12"
                  style={{ clipPath: "polygon(20% 0%, 60% 0%, 40% 50%, 80% 50%, 40% 100%, 0% 50%, 20% 50%)" }}
                ></div>
                <span className="text-white">Votre partenaire technologique de confiance</span>
              </div>

              <h1
                id="hero-title"
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-4 sm:mb-6 lg:mb-8 leading-tight"
              >
                <span className="block text-white">SP</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-pulse">
                  COMPUTING
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-slate-300 mb-8 sm:mb-12 lg:mb-16 leading-relaxed max-w-4xl mx-auto font-light px-4">
                <span className="text-white">Accélérez votre </span>
                <strong className="text-white font-semibold">transformation digitale </strong>
                <span className="text-white">avec des solutions </span>
                <strong className="text-white font-semibold">IT et télécommunications </strong>
                <span className="text-white">sur mesure</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center px-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 text-base sm:text-lg lg:text-xl rounded-full group shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Démarrer votre projet
                    <span className="ml-2 sm:ml-3 text-lg sm:text-xl">→</span>
                  </Button>
                </Link>

                <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 p-3 sm:p-4 lg:p-6 bg-slate-800/30 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl border border-emerald-500/20 shadow-2xl w-full sm:w-auto max-w-sm sm:max-w-none">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center backdrop-blur-sm border border-emerald-500/30 flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-emerald-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm font-medium text-slate-400">Appelez-nous maintenant</div>
                    <a
                      href="tel:+3271496478"
                      className="text-base sm:text-lg lg:text-2xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      +32 71 49 64 78
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 relative overflow-hidden" aria-labelledby="why-choose-us">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div
            className="absolute top-20 left-20 w-28 h-28 border border-emerald-500/20 rotate-45 animate-spin"
            style={{ animationDuration: "25s" }}
          ></div>
          <div className="absolute bottom-32 right-20 w-20 h-20 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rotate-12 animate-pulse"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <header className="text-center mb-16 sm:mb-20">
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-8 py-4 rounded-full text-sm font-semibold mb-8 sm:mb-12 border border-emerald-500/20 backdrop-blur-sm">
                  <SparklesIcon className="w-4 h-4 text-emerald-300" />{" "}
                  <span className="text-emerald-300">Pourquoi nous choisir</span>
                </div>
                <h2
                  id="why-choose-us"
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 sm:mb-12 leading-tight space-y-2 sm:space-y-4"
                >
                  <span className="block text-white">3 raisons de nous</span>
                  <span className="block text-white font-black">faire confiance</span>
                </h2>
                <p className="text-xl sm:text-2xl md:text-3xl text-white mb-16 sm:mb-20 leading-relaxed max-w-4xl mx-auto font-light space-y-2">
                  <span className="block">
                    Découvrez ce qui fait de <span className="text-white font-semibold">SP Computing</span> le
                    partenaire
                  </span>
                  <span className="block">
                    idéal pour accompagner votre{" "}
                    <span className="text-white font-semibold">croissance technologique</span> et garantir votre succès
                    digital
                  </span>
                </p>
              </header>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="relative">
                      <div className="w-4 h-8 bg-white rounded-t-full relative">
                        <div
                          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-emerald-400"
                          style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-400 mb-3">Méthodologie Éprouvée</h3>
                  <p className="text-slate-300">
                    Nos <span className="text-emerald-300">processus rodés</span> et notre approche structurée
                    garantissent des résultats fiables et durables pour chaque projet.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="relative">
                      <div className="w-3 h-6 bg-white rounded-lg"></div>
                      <div className="absolute top-2 -right-2 w-3 h-6 bg-blue-400 rounded-lg transform rotate-45"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3">Accompagnement Personnalisé</h3>
                  <p className="text-slate-300">
                    Chaque entreprise est unique. Nous adaptons nos{" "}
                    <span className="text-blue-300">solutions à vos besoins spécifiques</span> et vous accompagnons à
                    chaque étape.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="relative flex items-end gap-1">
                      <div className="w-1.5 h-4 bg-white rounded-t"></div>
                      <div className="w-1.5 h-6 bg-white rounded-t"></div>
                      <div className="w-1.5 h-3 bg-white rounded-t"></div>
                      <div className="w-1.5 h-7 bg-white rounded-t"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-orange-400 mb-3">ROI Démontré</h3>
                  <p className="text-slate-300">
                    Nos clients constatent en moyenne une{" "}
                    <span className="text-emerald-400 font-semibold">amélioration de 40% de leur productivité</span>{" "}
                    après implémentation de nos solutions.
                  </p>
                </div>
              </div>

              {/* Témoignage client */}
              {/* Section removed as requested by user */}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 lg:py-32 relative overflow-hidden" aria-labelledby="our-results">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>

          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div
            className="absolute top-20 right-20 w-28 h-28 border border-teal-500/15 rotate-45 animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
          <div className="absolute bottom-20 left-20 w-18 h-18 bg-gradient-to-r from-emerald-500/8 to-teal-500/8 rotate-12 animate-pulse"></div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <header className="text-center mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-6 py-3 rounded-full text-sm font-semibold mb-8 sm:mb-12 border border-emerald-500/20 backdrop-blur-sm">
                <TrendingUp className="w-4 h-4 text-emerald-300" />
                <span className="text-emerald-300">Nos Résultats</span>
              </div>
              <h2
                id="our-results"
                className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 sm:mb-12 leading-tight text-white space-y-2"
              >
                <span className="block text-white">Une tranquillité d'esprit</span>{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  totale
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed">
                Un service qui va au-delà de vos attentes avec des{" "}
                <span className="text-emerald-400 font-semibold">résultats concrets</span>
              </p>
            </header>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-center mb-12 sm:mb-16 lg:mb-20 px-2 sm:px-4">
              <div className="bg-slate-800/30 backdrop-blur-xl p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-emerald-500/20 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-2 sm:hover:-translate-y-4 group h-full flex flex-col justify-center">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  13+
                </div>
                <div className="text-slate-300 font-medium text-xs sm:text-sm md:text-base leading-tight">
                  Années d'expérience
                </div>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-xl p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-teal-500/20 shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-2 sm:hover:-translate-y-4 group h-full flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 leading-none">
                  1000+
                </div>
                <div className="text-slate-300 font-medium text-xs sm:text-sm md:text-base leading-tight">
                  Projets réalisés
                </div>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-xl p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-cyan-500/20 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-2 sm:hover:-translate-y-4 group h-full flex flex-col justify-center">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-slate-300 font-medium text-xs sm:text-sm md:text-base leading-tight">
                  Clients satisfaits
                </div>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-xl p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-emerald-500/20 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-2 sm:hover:-translate-y-4 group h-full flex flex-col justify-center">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  24h
                </div>
                <div className="text-slate-300 font-medium text-xs sm:text-sm md:text-base leading-tight">
                  Support réactif
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="text-center p-10 bg-slate-800/30 backdrop-blur-xl rounded-3xl border border-emerald-500/20 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-4 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">Service client exceptionnel</h3>
                <p className="text-slate-300 leading-relaxed">
                  Avec notre service client, vous bénéficiez d'une expérience{" "}
                  <span className="text-emerald-300">sur-mesure</span>, alliant qualité, réactivité et performance pour
                  votre totale satisfaction.
                </p>
              </div>

              <div className="text-center p-10 bg-slate-800/30 backdrop-blur-xl rounded-3xl border border-teal-500/20 shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-4 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-teal-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-10 h-10 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-teal-400">Tarification transparente</h3>
                <p className="text-slate-300 leading-relaxed">
                  Chez nous, la <span className="text-teal-300">transparence et l'équité</span> sont essentielles. Nous
                  proposons des tarifs justes, adaptés à la qualité des services que nous offrons, sans frais cachés.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="py-20 sm:py-32 relative overflow-hidden bg-slate-900"
          aria-labelledby="our-services"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

          {/* Geometric shapes */}
          <div
            className="absolute top-20 right-20 w-32 h-32 border border-emerald-500/20 rotate-45 animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
          <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rotate-12"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 border-2 border-teal-500/30 rounded-full"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <header className="text-center mb-16 sm:mb-20">
                <h2
                  id="our-services"
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 sm:mb-12 leading-tight space-y-2 sm:space-y-4"
                >
                  <span className="block text-white">Nos</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                    Services
                  </span>
                </h2>
                <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-12 sm:mb-16 leading-relaxed max-w-4xl mx-auto font-light text-slate-400 space-y-2">
                  <span className="block">
                    Des <span className="text-emerald-400 font-semibold">solutions complètes</span> pour vos besoins en
                  </span>
                  <span className="block">
                    <span className="text-teal-400 font-semibold">télécommunication et informatique</span>.
                  </span>
                </p>
              </header>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {/* Centrale téléphonique */}
                <div className="group relative">
                  <div className="bg-slate-800/40 backdrop-blur-xl p-8 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/40 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:-translate-y-6 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                      <PhoneIcon className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                      Centrale téléphonique
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      Optimisez vos communications internes et externes avec des solutions de téléphonie fiables et
                      évolutives.
                    </p>
                  </div>
                </div>

                {/* Câblage réseau */}
                <div className="group relative">
                  <div className="bg-slate-800/40 backdrop-blur-xl p-8 rounded-3xl border border-teal-500/20 hover:border-teal-400/40 shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 hover:-translate-y-6 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                      <div className="relative">
                        <div className="w-8 h-6 border-2 border-teal-400 rounded-lg"></div>
                        <div className="absolute top-2 left-2 w-4 h-2 border border-teal-400"></div>
                        <div className="absolute -right-1 top-1 w-2 h-4 border-l-2 border-teal-400"></div>
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-4 group-hover:text-teal-400 transition-colors duration-300">
                      Câblage réseau
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      Nous assurons un câblage structuré et performant, garantissant la rapidité et la stabilité de
                      votre infrastructure informatique.
                    </p>
                  </div>
                </div>

                {/* Wi-Fi */}
                <div className="group relative">
                  <div className="bg-slate-800/40 backdrop-blur-xl p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-400/40 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-6 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                      <div className="relative">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <div className="absolute -top-1 -left-1 w-4 h-4 border-2 border-cyan-400 rounded-full"></div>
                        <div className="absolute -top-2 -left-2 w-6 h-6 border-2 border-cyan-400/60 rounded-full"></div>
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      Wi-Fi
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      Une couverture sans fil optimale pour vos locaux, assurant mobilité et performance en toute
                      sécurité.
                    </p>
                  </div>
                </div>

                {/* Sécurité informatique */}
                <div className="group relative">
                  <div className="bg-slate-800/40 backdrop-blur-xl p-8 rounded-3xl border border-orange-500/20 hover:border-orange-400/40 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-6 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                      <Shield className="w-8 h-8 text-orange-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-4 group-hover:text-orange-400 transition-colors duration-300">
                      Sécurité informatique
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      Protégez vos données et vos systèmes contre les menaces grâce à nos solutions de cybersécurité
                      adaptées.
                    </p>
                  </div>
                </div>

                {/* Caméra de surveillance */}
                <div className="group relative">
                  <div className="bg-slate-800/40 backdrop-blur-xl p-8 rounded-3xl border border-purple-500/20 hover:border-purple-400/40 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-6 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                      <div className="relative">
                        <div className="w-6 h-4 bg-purple-400 rounded-lg"></div>
                        <div className="absolute top-1 left-1 w-2 h-2 bg-slate-800 rounded-full"></div>
                        <div className="absolute -right-1 top-0 w-2 h-1 bg-purple-400"></div>
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-4 group-hover:text-purple-400 transition-colors duration-300">
                      Caméra de surveillance
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      Surveillez vos espaces en toute sérénité avec des systèmes de vidéosurveillance performants et
                      connectés.
                    </p>
                  </div>
                </div>

                {/* Parlophonie */}
                <div className="group relative">
                  <div className="bg-slate-800/40 backdrop-blur-xl p-8 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-6 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                      <div className="relative">
                        <div className="w-4 h-5 bg-blue-400 rounded-t-full"></div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-blue-400"></div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-blue-400 rounded-full"></div>
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      Parlophonie
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      Améliorez l'accès et la communication dans vos bâtiments grâce à des solutions de parlophonie
                      modernes.
                    </p>
                  </div>
                </div>

                {/* Nettoyage / Clearing rack informatique */}
                <div className="group relative md:col-span-2 lg:col-span-3">
                  <div className="bg-slate-800/40 backdrop-blur-xl p-8 rounded-3xl border border-green-500/20 hover:border-green-400/40 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-6 h-full">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 flex-shrink-0">
                        <div className="relative">
                          <div className="w-6 h-8 border-2 border-green-400 rounded"></div>
                          <div className="absolute top-1 left-1 w-4 h-1 bg-green-400"></div>
                          <div className="absolute top-3 left-1 w-4 h-1 bg-green-400"></div>
                          <div className="absolute top-5 left-1 w-4 h-1 bg-green-400"></div>
                        </div>
                      </div>
                      <div className="text-center lg:text-left">
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                          Nettoyage / Cleaning rack informatique
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                          Un entretien professionnel de vos racks et baies informatiques pour assurer organisation,
                          performance et longévité de votre matériel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="brands"
          className="py-20 sm:py-32 relative overflow-hidden bg-slate-950"
          aria-labelledby="our-brands"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>

          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

          {/* Geometric shapes */}
          <div
            className="absolute top-20 right-20 w-32 h-32 border border-emerald-500/20 rotate-45 animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
          <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rotate-12"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <header className="text-center mb-16 sm:mb-20">
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-6 py-3 rounded-full text-sm font-semibold mb-8 sm:mb-12 border border-emerald-500/20 backdrop-blur-sm">
                  <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-300">Nos Marques Partenaires</span>
                </div>
                <h2
                  id="our-brands"
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 sm:mb-12 leading-tight space-y-2 sm:space-y-4"
                >
                  <span className="block text-white">Des partenaires</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                    de confiance
                  </span>
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-12 sm:mb-16 leading-relaxed max-w-4xl mx-auto font-light space-y-2">
                  <span className="block">
                    Nous travaillons avec les <span className="text-emerald-400 font-semibold">leaders du marché</span>
                  </span>
                  <span className="block">
                    pour vous offrir des{" "}
                    <span className="text-teal-400 font-semibold">solutions de qualité supérieure</span>
                  </span>
                </p>
              </header>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 items-center justify-items-center">
                {/* TP-Link */}
                <div className="group relative">
                  <div className="bg-white backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-emerald-500/20 hover:border-emerald-400/40 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:-translate-y-4 hover:scale-105">
                    <img
                      src="/tp-link-logo.png"
                      alt="TP-Link"
                      className="w-full h-12 sm:h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Yealink */}
                <div className="group relative">
                  <div className="bg-white backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-teal-500/20 hover:border-teal-400/40 shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 hover:-translate-y-4 hover:scale-105">
                    <img
                      src="/yealink-logo.png"
                      alt="Yealink"
                      className="w-full h-12 sm:h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Ubiquiti */}
                <div className="group relative">
                  <div className="bg-white backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-cyan-500/20 hover:border-cyan-400/40 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-4 hover:scale-105">
                    <img
                      src="/ubiquiti-logo.jpg"
                      alt="Ubiquiti Networks"
                      className="w-full h-12 sm:h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Fanvil */}
                <div className="group relative">
                  <div className="bg-white backdrop-blur-xl p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-orange-500/20 hover:border-orange-400/40 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-4 hover:scale-105">
                    <img
                      src="/fanvil-logo.jpg"
                      alt="Fanvil"
                      className="w-full h-12 sm:h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Additional text */}
              <div className="text-center mt-16 sm:mt-20">
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                  Ces partenariats stratégiques nous permettent de vous proposer des{" "}
                  <span className="text-emerald-400 font-semibold">équipements de pointe</span> et des{" "}
                  <span className="text-teal-400 font-semibold">solutions innovantes</span> adaptées à vos besoins
                  spécifiques.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="maintenance"
          className="py-20 sm:py-32 relative overflow-hidden bg-slate-900"
          aria-labelledby="maintenance-support"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16 sm:mb-24">
              <div className="inline-flex items-center gap-3 bg-emerald-500/10 text-emerald-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold mb-8 sm:mb-12 border border-emerald-500/20 backdrop-blur-sm shadow-2xl">
                <span className="text-emerald-300">Maintenance & Support</span>
              </div>
              <h2
                id="maintenance-support"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 sm:mb-12 leading-tight space-y-2 sm:space-y-4"
              >
                <span className="block text-white">Support technique</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                  24h/24 7j/7
                </span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-12 sm:mb-16 leading-relaxed max-w-4xl mx-auto font-light space-y-2">
                <span className="block">
                  Une <span className="text-emerald-400 font-semibold">assistance technique réactive</span> et des
                </span>
                <span className="block">
                  <span className="text-teal-400 font-semibold">contrats de maintenance sur mesure</span> pour garantir
                  la continuité de vos activités
                </span>
              </p>
            </header>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {/* Support 24/7 */}
              <div className="group relative h-full">
                <div className="bg-slate-800/40 backdrop-blur-xl p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-emerald-500/20 hover:border-emerald-400/40 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-6 h-full flex flex-col">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-all duration-500">
                    <Clock className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-emerald-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300">
                    Support 24/7
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base lg:text-lg flex-1">
                    Assistance technique disponible en permanence pour résoudre vos problèmes informatiques en urgence
                  </p>
                </div>
              </div>

              {/* Maintenance préventive */}
              <div className="group relative h-full">
                <div className="bg-slate-800/40 backdrop-blur-xl p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-teal-500/20 hover:border-teal-400/40 shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-6 h-full flex flex-col">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-all duration-500">
                    <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-teal-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 text-white group-hover:text-teal-400 transition-colors duration-300">
                    Maintenance préventive
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base lg:text-lg flex-1">
                    Interventions programmées pour éviter les pannes et optimiser les performances de votre
                    infrastructure
                  </p>
                </div>
              </div>

              {/* Contrats sur mesure */}
              <div className="group relative h-full sm:col-span-2 lg:col-span-1">
                <div className="bg-slate-800/40 backdrop-blur-xl p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-cyan-500/20 hover:border-cyan-400/40 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-6 h-full flex flex-col">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-all duration-500">
                    <FileText className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-cyan-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    Contrats sur mesure
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base lg:text-lg flex-1">
                    Solutions de maintenance adaptées à votre budget et vos besoins spécifiques avec SLA garantis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 relative" aria-labelledby="contact-us">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>

          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div
            className="absolute top-20 right-20 w-28 h-28 border border-teal-500/15 rotate-45 animate-spin"
            style={{ animationDuration: "35s" }}
          ></div>
          <div className="absolute bottom-20 left-20 w-18 h-18 bg-gradient-to-r from-emerald-500/8 to-teal-500/8 rotate-12 animate-pulse"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-emerald-500/20 backdrop-blur-sm">
                <span className="text-white">Contactez-nous</span>
              </div>
              <h2
                id="contact-us"
                className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 sm:mb-12 leading-tight text-white space-y-2"
              >
                <span className="block">
                  Un <span className="text-emerald-400">projet</span> en tête ?
                </span>
                <span className="block text-white">Réalisons-le ensemble !</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed space-y-2">
                <span className="block">Nous mettons un point d'honneur à proposer des</span>
                <span className="block">
                  <span className="text-emerald-400 font-semibold">offres transparentes</span>, claires et adaptées à
                  votre besoins spécifiques.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-12 py-4 text-lg font-bold rounded-full group shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Demander un devis gratuit
                  </Button>
                </Link>
                <div className="flex items-center gap-4 p-6 bg-slate-800/30 backdrop-blur-xl rounded-2xl border border-emerald-500/20 shadow-2xl">
                  <PhoneIcon className="w-8 h-8 text-emerald-400" />
                  <div className="text-left">
                    <div className="text-sm text-slate-400 font-medium">Appelez-nous directement</div>
                    <a
                      href="tel:+3271496478"
                      className="text-xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      +32 71 49 64 78
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center p-8 bg-slate-800/30 backdrop-blur-xl rounded-3xl border border-emerald-500/20 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-4">
                  <div className="font-bold mb-2 text-white">Email</div>
                  <div className="text-slate-300 text-sm">Réponse sous 24h</div>
                </div>
                <div className="text-center p-8 bg-slate-800/30 backdrop-blur-xl rounded-3xl border border-teal-500/20 shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-4">
                  <div className="font-bold mb-2 text-white">Téléphone</div>
                  <div className="text-slate-300 text-sm">Support immédiat</div>
                </div>
                <div className="text-center p-8 bg-slate-800/30 backdrop-blur-xl rounded-3xl border border-cyan-500/20 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-4">
                  <div className="font-bold mb-2 text-white">Sur site</div>
                  <div className="text-slate-300 text-sm">Intervention rapide</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-32 relative overflow-hidden bg-slate-900" aria-labelledby="google-reviews">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Carousel d'avis Google */}
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl p-16 border border-emerald-500/20 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <MessageCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Avis Google</h3>
                    <div className="flex items-center justify-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-6 h-6 text-yellow-400">
                          ⭐
                        </div>
                      ))}
                      <span className="text-slate-300 ml-2">4.9/5</span>
                    </div>
                  </div>

                  <GoogleReviewsCarousel />
                </div>
              </div>
            </div>
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
                    <PhoneIcon className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
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
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-teal-400" />
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

              {/* Floating breadcrumbs - hidden on mobile */}
              <div className="hidden sm:block absolute -top-8 sm:-top-12 left-1/2 transform -translate-x-1/2 bg-slate-800/80 backdrop-blur-xl rounded-full px-4 sm:px-6 py-2 border border-emerald-500/20 shadow-xl opacity-0 hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <span className="text-emerald-400">SP Computing</span>
                  <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                  <span className="text-white">Votre partenaire technologique</span>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Modern scroll-to-top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
            aria-label="Retour en haut"
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 border-t-2 border-r-2 border-white transform -rotate-45 group-hover:-translate-y-0.5 transition-transform duration-200"></div>
          </button>
        )}
      </main>
    </div>
  )
}
