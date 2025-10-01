"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Users, DollarSign, Settings, Zap, Shield, Building, HardDrive, Phone } from "lucide-react"

export default function StandardTelephoniquePage() {
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
              className="hidden lg:flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl rounded-xl px-8 py-3 border border-emerald-500/20 shadow-2xl"
              onMouseEnter={() => setIsMenuHovered(true)}
              onMouseLeave={() => setIsMenuHovered(false)}
            >
              {/* Morphing background indicator */}
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
                  {/* Glowing background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-xl transition-all duration-500 ${activeMenuItem === item.label ? "opacity-100 scale-110" : "opacity-0 scale-90"}`}
                  ></div>

                  {/* Floating icon */}
                  <span
                    className={`absolute -top-6 left-1/2 transform -translate-x-1/2 text-2xl transition-all duration-500 ${activeMenuItem === item.label ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                  >
                    {item.icon}
                  </span>

                  {/* Text with morphing effect */}
                  <span className="relative z-10 transition-all duration-300 group-hover:font-bold">{item.label}</span>

                  {/* Underline animation */}
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-sm transition-all duration-500 ${activeMenuItem === item.label ? "w-full" : "w-0"}`}
                  ></div>
                </Link>
              ))}
            </div>

            {/* Revolutionary mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-12 h-12 bg-gradient-to-br from-emerald-500/40 to-teal-500/40 rounded-xl flex items-center justify-center backdrop-blur-xl border-2 border-emerald-400/50 group shadow-lg"
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
                <div className="absolute inset-0 rounded-xl border-2 border-emerald-400/50 animate-ping opacity-0 group-hover:opacity-100"></div>
              </button>
            </div>

            {/* Revolutionary CTA button */}
            <Link href="/contact" className="hidden xl:block">
              <button className="relative px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-full group shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 transform hover:scale-105 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Sliding text effect */}
                <span className="relative z-10 flex items-center gap-2">
                  Devis gratuit
                  <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
                    <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  </div>
                </span>

                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
              </button>
            </Link>
          </div>

          {/* Revolutionary floating breadcrumbs */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-slate-800/80 backdrop-blur-xl rounded-full px-6 py-2 border border-emerald-500/20 shadow-xl opacity-0 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <span className="text-emerald-400">SP Computing</span>
              <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
              <span>Solutions IT & Télécommunications</span>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden fixed top-20 left-0 right-0 bg-slate-950/98 backdrop-blur-2xl border-b border-emerald-500/20 shadow-2xl z-50">
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

      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-950 to-emerald-950/20 overflow-hidden px-4 sm:px-6 lg:px-8 mt-32 sm:mt-36 lg:mt-40">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/10"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div
            className="absolute top-20 right-20 w-32 h-32 border border-emerald-500/20 rotate-45 animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
          <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rotate-12"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 border-2 border-teal-500/30 rounded-full"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-emerald-500/10 text-emerald-400 px-6 py-4 rounded-full text-sm font-semibold mb-12 border border-emerald-500/20 backdrop-blur-sm">
              <div className="w-5 h-5 flex items-center justify-center">
                <div className="w-3 h-4 border-2 border-emerald-400 rounded-sm relative">
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full"></div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full"></div>
                </div>
              </div>
              <span className="text-emerald-300">Standard Téléphonique Moderne</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-tight">
              <span className="block text-white">Communication</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-pulse">
                Unifiée
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 mb-16 leading-relaxed max-w-4xl mx-auto font-light px-4">
              Modernisez vos communications avec une solution téléphonique{" "}
              <span className="text-emerald-400 font-semibold">intelligente</span>, sécurisée et{" "}
              <span className="text-teal-400 font-semibold">évolutive</span> qui transforme votre façon de collaborer.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center px-12 sm:px-16 lg:px-24 xl:px-40">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold px-12 py-6 text-xl rounded-full group shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Demander un devis
                  <span className="ml-3 text-xl">→</span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold px-12 py-6 text-xl rounded-full group shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 bg-transparent"
                >
                  Demander une démo
                  <span className="ml-3 text-xl">→</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-800 to-slate-900"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
                <span className="block text-white mb-4">Pourquoi choisir notre</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                  centrale téléphonique ?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 mb-16 leading-relaxed max-w-4xl mx-auto font-light">
                Une <span className="text-emerald-400 font-semibold">solution complète</span> qui révolutionne vos{" "}
                <span className="text-teal-400 font-semibold">communications d'entreprise</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center items-center px-4">
              {/* Communication unifiée */}
              <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors duration-300">
                    <Users className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Communication unifiée</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Appels, visioconférences, messagerie et collaboration intégrées dans une seule plateforme intuitive.
                  </p>
                </div>
              </div>

              {/* Économies substantielles */}
              <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors duration-300">
                    <DollarSign className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Économies substantielles</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Réduction jusqu'à <span className="text-emerald-400 font-semibold">70%</span> des coûts par rapport
                    à une téléphonie classique.
                  </p>
                </div>
              </div>

              {/* Flexibilité */}
              <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors duration-300">
                    <Settings className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Flexibilité totale</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Solution évolutive, parfaitement adaptée aux petites comme aux grandes entreprises.
                  </p>
                </div>
              </div>

              {/* Déploiement rapide */}
              <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors duration-300">
                    <Zap className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Déploiement rapide</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Installation sur site ou dans le cloud avec une configuration simplifiée et intuitive.
                  </p>
                </div>
              </div>

              {/* Sécurité */}
              <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors duration-300">
                    <Shield className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Sécurité avancée</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Chiffrement, authentification à deux facteurs et protection renforcée de vos données.
                  </p>
                </div>
              </div>

              {/* Gestion centralisée */}
              <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors duration-300">
                    <Building className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Gestion centralisée</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Pilotage facile et intuitif pour une ou plusieurs structures depuis une interface unique.
                  </p>
                </div>
              </div>

              {/* Intégration complète */}
              <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105 xl:col-span-3 xl:max-w-md xl:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors duration-300 mx-auto">
                    <HardDrive className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Intégration complète</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Messagerie instantanée, intégration CRM et synchronisation des contacts automatique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/10">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-teal-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div
            className="absolute top-20 right-20 w-32 h-32 border border-emerald-500/10 rotate-45 animate-spin"
            style={{ animationDuration: "30s" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 bg-emerald-500/10 text-emerald-400 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-emerald-500/20 backdrop-blur-sm">
                <Settings className="w-4 h-4" />
                <span>Fonctionnalités Avancées</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
                <span className="block text-white mb-4">Découvrez toutes les</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                  fonctionnalités
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 mb-16 leading-relaxed max-w-4xl mx-auto font-light">
                Une <span className="text-emerald-400 font-semibold">plateforme complète</span> avec plus de{" "}
                <span className="text-teal-400 font-semibold">50 fonctionnalités</span> pour transformer vos
                communications
              </p>
            </div>

            {/* Interactive Tabs */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-12 bg-slate-800/50 p-2 rounded-2xl">
                {[
                  { id: "base", label: "Base", icon: Phone },
                  { id: "auto", label: "Accueil", icon: Users },
                  { id: "collab", label: "Collaboration", icon: Building },
                  { id: "mobile", label: "Mobilité", icon: Zap },
                  { id: "unified", label: "Unifiée", icon: Settings },
                  { id: "integration", label: "API", icon: HardDrive },
                  { id: "security", label: "Sécurité", icon: Shield },
                  { id: "supervision", label: "Supervision", icon: Users },
                  { id: "connectivity", label: "Connectivité", icon: Phone },
                  { id: "maintenance", label: "Maintenance", icon: Settings },
                ].map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      const content = document.getElementById(`content-${tab.id}`)
                      const allContents = document.querySelectorAll('[id^="content-"]')
                      const allTabs = document.querySelectorAll("[data-tab]")

                      allContents.forEach((c) => c?.classList.add("hidden"))
                      allTabs.forEach((t) =>
                        t?.classList.remove("bg-emerald-500/20", "text-emerald-400", "border-emerald-500/30"),
                      )
                      allTabs.forEach((t) => t?.classList.add("text-slate-400", "hover:text-slate-300"))

                      content?.classList.remove("hidden")
                      const currentTab = document.querySelector(`[data-tab="${tab.id}"]`)
                      currentTab?.classList.add("bg-emerald-500/20", "text-emerald-400", "border-emerald-500/30")
                      currentTab?.classList.remove("text-slate-400", "hover:text-slate-300")
                    }}
                    data-tab={tab.id}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 border ${
                      index === 0
                        ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                        : "text-slate-400 hover:text-slate-300 border-transparent hover:border-slate-600/50"
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span className="text-xs font-medium">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Contents */}
              <div className="min-h-[400px]">
                {/* Fonctions de base */}
                <div id="content-base" className="space-y-6">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Phone className="w-8 h-8 text-emerald-400" />
                    Fonctions de base
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Gestion des appels</h4>
                      <p className="text-slate-300">
                        Émission, réception, transfert, mise en attente et mise en garde avec interface intuitive.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Routage intelligent</h4>
                      <p className="text-slate-300">
                        Acheminement selon règles personnalisées : menus vocaux, horaires, numéro de l'appelant.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Extensions internes</h4>
                      <p className="text-slate-300">
                        Chaque utilisateur dispose d'un numéro court pour une communication interne simplifiée.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Interphonie & Paging</h4>
                      <p className="text-slate-300">
                        Diffusion de messages vers un ou plusieurs postes avec gestion des urgences prioritaires.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Standard automatique */}
                <div id="content-auto" className="space-y-6 hidden">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Users className="w-8 h-8 text-emerald-400" />
                    Standard automatique & accueil
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Serveur vocal interactif (IVR)</h4>
                      <p className="text-slate-300">
                        Menus vocaux personnalisés pour guider vos appelants automatiquement.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Files d'attente</h4>
                      <p className="text-slate-300">
                        Mise en attente avec musique, messages personnalisés et rappel automatique.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Groupes d'appel</h4>
                      <p className="text-slate-300">
                        Sonnerie séquentielle ou simultanée selon la logique métier choisie.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Gestion des horaires</h4>
                      <p className="text-slate-300">
                        Configuration d'horaires d'ouverture/fermeture et gestion des jours fériés.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Collaboration */}
                <div id="content-collab" className="space-y-6 hidden">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Building className="w-8 h-8 text-emerald-400" />
                    Collaboration
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Conférences audio/vidéo</h4>
                      <p className="text-slate-300">
                        Conférences audio et visioconférence intégrées pour vos réunions d'équipe.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Messagerie vocale</h4>
                      <p className="text-slate-300">
                        Accessible par téléphone, email ou interface web avec notifications automatiques.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Voicemail-to-Email</h4>
                      <p className="text-slate-300">
                        Réception des messages vocaux directement dans votre boîte email.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Répertoire centralisé</h4>
                      <p className="text-slate-300">
                        Répertoire partagé avec fonction fax-to-email et email-to-fax intégrée.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobilité */}
                <div id="content-mobile" className="space-y-6 hidden">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Zap className="w-8 h-8 text-emerald-400" />
                    Mobilité & télétravail
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Applications softphone</h4>
                      <p className="text-slate-300">
                        Applications PC et mobile pour émettre et recevoir des appels où que vous soyez.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Extensions distantes</h4>
                      <p className="text-slate-300">
                        Collaborateurs en télétravail intégrés au système comme s'ils étaient au bureau.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Hot-Desking</h4>
                      <p className="text-slate-300">
                        Connexion à un poste téléphonique partagé avec vos paramètres personnels.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Client web</h4>
                      <p className="text-slate-300">
                        Appels et gestion des communications depuis un simple navigateur web.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Communications unifiées */}
                <div id="content-unified" className="space-y-6 hidden">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Settings className="w-8 h-8 text-emerald-400" />
                    Communications unifiées
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Visioconférence HD</h4>
                      <p className="text-slate-300">Visioconférence haute définition avec partage d'écran intégré.</p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Chat & messagerie</h4>
                      <p className="text-slate-300">
                        Chat interne et messagerie instantanée pour une communication fluide.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Notifications automatiques</h4>
                      <p className="text-slate-300">
                        Notifications par email pour appels manqués, messages vocaux et alarmes.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Intégration collaborative</h4>
                      <p className="text-slate-300">Intégration avec vos outils de collaboration existants.</p>
                    </div>
                  </div>
                </div>

                {/* Intégration & API */}
                <div id="content-integration" className="space-y-6 hidden">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <HardDrive className="w-8 h-8 text-emerald-400" />
                    Intégration & API
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">
                        CTI (Computer Telephony Integration)
                      </h4>
                      <p className="text-slate-300">
                        Contrôle complet du téléphone depuis votre PC avec interface unifiée.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Intégration CRM/ERP</h4>
                      <p className="text-slate-300">
                        Affichage automatique des fiches clients lors des appels entrants.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Microsoft Teams</h4>
                      <p className="text-slate-300">
                        Interopérabilité complète avec Microsoft Teams et outils similaires.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">API RESTful</h4>
                      <p className="text-slate-300">API complète pour développer des applications sur mesure.</p>
                    </div>
                  </div>
                </div>

                {/* Sécurité */}
                <div id="content-security" className="space-y-6 hidden">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Shield className="w-8 h-8 text-emerald-400" />
                    Sécurité & contrôle
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Pare-feu intégré</h4>
                      <p className="text-slate-300">Protection avancée contre la fraude VoIP avec pare-feu intégré.</p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Chiffrement TLS & SRTP</h4>
                      <p className="text-slate-300">
                        Sécurisation complète des appels avec chiffrement de bout en bout.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Filtrage géographique</h4>
                      <p className="text-slate-300">Filtrage par IP et géolocalisation pour contrôler les accès.</p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Listes de contrôle</h4>
                      <p className="text-slate-300">
                        Listes noires/blanches avec journaux et supervision en temps réel.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Supervision */}
                <div id="content-supervision" className="space-y-6 hidden">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Users className="w-8 h-8 text-emerald-400" />
                    Supervision & enregistrements
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Enregistrement des appels</h4>
                      <p className="text-slate-300">
                        Enregistrement automatique ou à la demande avec stockage sécurisé.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Supervision en direct</h4>
                      <p className="text-slate-300">
                        Écoute en direct, chuchotement et intervention pour encadrer les agents.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Rapports détaillés (CDR)</h4>
                      <p className="text-slate-300">
                        Historique complet des appels avec analyse détaillée des performances.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Tableaux de bord</h4>
                      <p className="text-slate-300">
                        Statistiques en temps réel spécialement conçues pour les centres d'appels.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connectivité */}
                <div id="content-connectivity" className="space-y-6 hidden">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Phone className="w-8 h-8 text-emerald-400" />
                    Connectivité
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Lignes SIP (VoIP)</h4>
                      <p className="text-slate-300">Connexion via opérateurs internet avec qualité garantie.</p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Lignes traditionnelles</h4>
                      <p className="text-slate-300">
                        Support des lignes analogiques et numériques (PRI, BRI) via passerelles.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Passerelles GSM/4G</h4>
                      <p className="text-slate-300">Connexion au réseau mobile pour une couverture complète.</p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Compatibilité étendue</h4>
                      <p className="text-slate-300">Compatible avec la majorité des téléphones IP du marché.</p>
                    </div>
                  </div>
                </div>

                {/* Maintenance */}
                <div id="content-maintenance" className="space-y-6 hidden">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <Settings className="w-8 h-8 text-emerald-400" />
                    Haute disponibilité & maintenance
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Redondance (HA)</h4>
                      <p className="text-slate-300">
                        Serveur de secours automatique qui prend le relais en cas de panne.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Sauvegarde automatique</h4>
                      <p className="text-slate-300">Sauvegarde et restauration automatiques des configurations.</p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Mises à jour automatiques</h4>
                      <p className="text-slate-300">
                        Mises à jour logicielles automatiques sans interruption de service.
                      </p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                      <h4 className="text-xl font-semibold text-emerald-400 mb-3">Monitoring 24/7</h4>
                      <p className="text-slate-300">
                        Surveillance continue avec alertes proactives et intervention rapide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-800 to-slate-900"></div>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="block text-white mb-4">Prêt à moderniser vos</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                communications ?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto font-light px-4">
              Transformez votre infrastructure téléphonique avec une solution{" "}
              <span className="text-emerald-400 font-semibold">intelligente</span>, sécurisée et évolutive.
              Contactez-nous dès aujourd'hui pour une{" "}
              <span className="text-teal-400 font-semibold">démonstration personnalisée</span>.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-full group shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Contactez-nous maintenant
                  <span className="ml-3 text-xl">→</span>
                </Button>
              </Link>
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
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
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
                  <div className="relative">
                    <div className="w-3 h-3 sm:w-4 sm:h-3 border-2 border-teal-400 relative">
                      <div className="absolute top-0 left-0 w-0 h-0 border-l-2 border-r-2 border-b-2 border-l-transparent border-r-transparent border-b-teal-400"></div>
                    </div>
                  </div>
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
              © 2024 <span className="text-emerald-400 font-semibold">SP Computing</span>. Tous droits réservés.
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
