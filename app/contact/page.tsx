"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      service: formData.get("service"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const responseData = await response.json()

      if (response.ok && responseData.success) {
        setSubmitStatus("success")
        setShowSuccessPopup(true)
        e.currentTarget.reset()
        setTimeout(() => setShowSuccessPopup(false), 5000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {showSuccessPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-slate-800 border border-emerald-500/30 rounded-2xl p-8 max-w-md mx-4 shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 text-white">
                  <div className="w-full h-1 bg-white rounded-full transform rotate-45 translate-y-3"></div>
                  <div className="w-4 h-1 bg-white rounded-full transform -rotate-45 translate-x-2 translate-y-2"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
              <p className="text-slate-300 mb-6">
                Votre demande a été transmise avec succès. Nous vous recontacterons dans les 48 heures.
              </p>
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
              >
                Parfait !
              </button>
            </div>
          </div>
        </div>
      )}

      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-2xl border-b border-emerald-500/20 shadow-2xl">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-emerald-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <span className="text-white font-black text-lg">SP</span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute -top-2 -left-2 w-2 h-2 bg-emerald-400/60 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-teal-400/60 rounded-full animate-bounce delay-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-black text-white group-hover:text-emerald-400 transition-colors duration-300">
                  SP Computing
                </span>
              </div>
            </Link>

            <div
              className="hidden lg:flex items-center gap-2 bg-slate-800/50 backdrop-blur-xl rounded-xl px-8 py-3 border border-emerald-500/20 shadow-2xl"
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
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-6 py-3 text-white hover:text-emerald-400 transition-all duration-500 group font-semibold"
                  onMouseEnter={() => setActiveMenuItem(item.label)}
                  onMouseLeave={() => setActiveMenuItem("")}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-xl transition-all duration-500 ${activeMenuItem === item.label ? "opacity-100 scale-110" : "opacity-0 scale-90"}`}
                  ></div>

                  <span
                    className={`absolute -top-6 left-1/2 transform -translate-x-1/2 text-2xl transition-all duration-500 ${activeMenuItem === item.label ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                  >
                    {item.icon}
                  </span>

                  <span className="relative z-10 transition-all duration-300 group-hover:font-bold">{item.label}</span>

                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-500 ${activeMenuItem === item.label ? "w-full" : "w-0"}`}
                  ></div>
                </Link>
              ))}
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-emerald-500/30 group"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5 group-hover:gap-2 transition-all duration-300">
                  <div
                    className={`w-5 h-0.5 bg-emerald-400 rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : "group-hover:w-6"}`}
                  ></div>
                  <div
                    className={`w-4 h-0.5 bg-teal-400 rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "group-hover:w-6"}`}
                  ></div>
                  <div
                    className={`w-3 h-0.5 bg-cyan-400 rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : "group-hover:w-6"}`}
                  ></div>
                </div>
                <div className="absolute inset-0 rounded-2xl border-2 border-emerald-400/50 animate-ping opacity-0 group-hover:opacity-100"></div>
              </button>
            </div>

            <Link href="/contact" className="hidden xl:block">
              <button className="relative px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-full group shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
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

          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-slate-800/80 backdrop-blur-xl rounded-full px-6 py-2 border border-emerald-500/20 shadow-xl opacity-0 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <span className="text-emerald-400">SP Computing</span>
              <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
              <span className="text-white">Solutions IT & Télécommunications</span>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden fixed top-20 left-0 right-0 bg-slate-950/95 backdrop-blur-2xl border-b border-emerald-500/20 shadow-2xl z-40">
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

      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/20"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-6 py-3 rounded-full text-sm sm:text-base font-semibold mb-8 border border-emerald-500/20 backdrop-blur-sm">
              <div className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 relative">
                <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
                <div className="relative w-full h-full bg-emerald-400 rounded-full"></div>
              </div>
              Contactez-nous
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-tight">
              Un projet en tête ?<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-pulse">
                Réalisons-le ensemble !
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
              Nous mettons un point d'honneur à proposer des offres transparentes, claires et adaptées à vos besoins
              spécifiques. Contactez-nous dès aujourd'hui pour discuter de votre projet.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 sm:gap-16 max-w-7xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-emerald-500/20 shadow-2xl">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">Demandez votre devis gratuit</h2>
                <p className="text-slate-300 text-sm sm:text-base">
                  Remplissez ce formulaire et nous vous recontacterons dans les plus brefs délais.
                </p>
              </div>

              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm sm:text-base font-medium text-slate-300 mb-2 sm:mb-3"
                    >
                      Prénom *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-emerald-400 focus:ring-emerald-400/20"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm sm:text-base font-medium text-slate-300 mb-2 sm:mb-3"
                    >
                      Nom *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-emerald-400 focus:ring-emerald-400/20"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-medium text-slate-300 mb-2 sm:mb-3">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:border-emerald-400 focus:ring-emerald-400/20"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-slate-300 mb-2 sm:mb-3">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:border-emerald-400 focus:ring-emerald-400/20"
                    placeholder="+32 XX XX XX XX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm sm:text-base font-medium text-slate-300 mb-2 sm:mb-3"
                  >
                    Entreprise
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    className="bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 focus:border-emerald-400 focus:ring-emerald-400/20"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm sm:text-base font-medium text-slate-300 mb-2 sm:mb-3"
                  >
                    Service souhaité
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full bg-slate-700/50 border border-slate-600 text-white rounded-lg px-4 py-3 focus:border-emerald-400 focus:ring-emerald-400/20 focus:outline-none"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="consultance">Consultance informatique</option>
                    <option value="telecom">Solutions Télécom</option>
                    <option value="wifi">Wi-Fi et infrastructures</option>
                    <option value="security">Sécurité IT</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm sm:text-base font-medium text-slate-300 mb-2 sm:mb-3"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-emerald-400 focus:ring-emerald-400/20 resize-none"
                    placeholder="Décrivez votre projet ou vos besoins..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-3 sm:py-4 rounded-full group shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                  <div className="w-4 h-4 sm:w-5 sm:h-5 ml-2 text-white group-hover:translate-x-2 transition-transform duration-300">
                    <div className="w-full h-0.5 bg-white rounded-full"></div>
                    <div className="w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45 -mt-1 ml-auto"></div>
                  </div>
                </Button>
              </form>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="bg-slate-800/30 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-emerald-500/20 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-2 sm:hover:-translate-y-4 group">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl sm:rounded-3xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 relative">
                      <div className="w-full h-full border-2 border-emerald-400 rounded-lg"></div>
                      <div className="absolute top-1 left-1 right-1 h-1 bg-emerald-400 rounded-full"></div>
                      <div className="absolute bottom-1 left-1 right-1 h-1 bg-emerald-400 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">Téléphone</h3>
                    <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">
                      Appelez-nous directement pour une réponse immédiate à vos questions.
                    </p>
                    <a
                      href="tel:+3271496478"
                      className="text-xl sm:text-2xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      +32 71 49 64 78
                    </a>
                    <div className="flex items-center gap-2 mt-2 text-slate-400">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400 rounded-full border border-slate-400 relative">
                        <div className="absolute top-0.5 left-1/2 w-0.5 h-1 bg-slate-400 transform -translate-x-1/2"></div>
                        <div className="absolute top-1/2 left-1/2 w-1 h-0.5 bg-slate-400 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                      <span className="text-xs sm:text-sm">Lun-Ven 8h-18h</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-teal-500/20 shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-2 sm:hover:-translate-y-4 group">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl sm:rounded-3xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-teal-500/30 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400 relative">
                      <div className="w-full h-full border-2 border-teal-400 rounded-lg"></div>
                      <div className="absolute top-1 left-1 right-1 h-1 bg-teal-400 rounded-full"></div>
                      <div className="absolute bottom-1 left-1 right-1 h-1 bg-teal-400 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">Email</h3>
                    <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">
                      Envoyez-nous un email détaillé pour une consultation personnalisée.
                    </p>
                    <a
                      href="mailto:info@sp-computing.be"
                      className="text-xl sm:text-2xl font-bold text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      info@sp-computing.be
                    </a>
                    <div className="flex items-center gap-2 mt-2 text-slate-400">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400 rounded-full border border-slate-400 relative">
                        <div className="absolute top-0.5 left-1/2 w-0.5 h-1 bg-slate-400 transform -translate-x-1/2"></div>
                        <div className="absolute top-1/2 left-1/2 w-1 h-0.5 bg-slate-400 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                      <span className="text-xs sm:text-sm">Réponse sous 24h</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-cyan-500/20 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-2 sm:hover:-translate-y-4 group">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl sm:rounded-3xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 relative">
                      <div className="w-full h-full border-2 border-cyan-400 rounded-lg"></div>
                      <div className="absolute top-1 left-1 right-1 h-1 bg-cyan-400 rounded-full"></div>
                      <div className="absolute bottom-1 left-1 right-1 h-1 bg-cyan-400 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">Intervention sur site</h3>
                    <p className="text-slate-300 mb-3 sm:mb-4 text-sm sm:text-base">
                      Nous nous déplaçons chez vous pour une intervention rapide et efficace.
                    </p>
                    <div className="space-y-1">
                      <div className="text-xl sm:text-2xl font-bold text-cyan-400">Dans toute la Wallonie.</div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-slate-400">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400 rounded-full border border-slate-400 relative">
                        <div className="absolute top-0.5 left-1/2 w-0.5 h-1 bg-slate-400 transform -translate-x-1/2"></div>
                        <div className="absolute top-1/2 left-1/2 w-1 h-0.5 bg-slate-400 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                      <span className="text-xs sm:text-sm">Intervention rapide</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-xl p-8 rounded-3xl border border-emerald-500/20 shadow-2xl mt-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 !text-white">Pourquoi nous choisir ?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 rounded-full border-2 border-emerald-400 flex-shrink-0">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    </div>
                    <span>Plus de 13 ans d'expérience</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 rounded-full border-2 border-emerald-400 flex-shrink-0">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    </div>
                    <span>Devis gratuit et sans engagement</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 rounded-full border-2 border-emerald-400 flex-shrink-0">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    </div>
                    <span>Solutions sur mesure</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 rounded-full border-2 border-emerald-400 flex-shrink-0">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    </div>
                    <span>Support technique réactif</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative bg-slate-950/80 backdrop-blur-2xl border-t border-emerald-500/20 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-emerald-950/20"></div>

        <div className="absolute top-4 left-1/4 w-2 h-2 bg-emerald-400/60 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-8 right-1/3 w-1.5 h-1.5 bg-teal-400/60 rounded-full animate-bounce delay-300 opacity-60"></div>
        <div className="absolute bottom-6 left-1/3 w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse opacity-60"></div>

        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4 group">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-emerald-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <span className="text-white font-black text-xl">SP</span>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute -top-2 -left-2 w-2 h-2 bg-emerald-400/60 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-teal-400/60 rounded-full animate-bounce delay-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="text-left">
                <span className="text-2xl font-black text-white group-hover:text-emerald-400 transition-colors duration-300">
                  SP Computing
                </span>
                <p className="text-white text-sm font-medium">Solutions IT & Télécommunications</p>
              </div>
            </div>

            <nav className="flex flex-wrap justify-center gap-2 bg-slate-800/50 backdrop-blur-xl rounded-2xl px-8 py-4 border border-emerald-500/20 shadow-2xl">
              {[
                { href: "/", label: "Accueil", icon: "🏠" },
                { href: "/services", label: "Services", icon: "⚡" },
                { href: "/standard-telephonique", label: "Standard téléphonique", icon: "📞" },
                { href: "/contact", label: "Contact", icon: "💬" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-white hover:text-emerald-400 transition-all duration-500 group font-semibold text-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-lg opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-110 transition-all duration-500"></div>
                  <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    {item.icon}
                  </span>
                  <span className="relative z-10 transition-all duration-300 group-hover:font-bold">{item.label}</span>
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-sm w-0 group-hover:w-full transition-all duration-500"></div>
                </Link>
              ))}
            </nav>

            <div className="text-center lg:text-right bg-slate-800/30 backdrop-blur-xl rounded-2xl px-6 py-4 border border-emerald-500/20 shadow-2xl group hover:shadow-emerald-500/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-4 h-4 text-emerald-400 relative">
                    <div className="w-full h-full border-2 border-emerald-400 rounded-lg"></div>
                    <div className="absolute top-1 left-1 right-1 h-1 bg-emerald-400 rounded-full"></div>
                    <div className="absolute bottom-1 left-1 right-1 h-1 bg-emerald-400 rounded-full"></div>
                  </div>
                </div>
                <a
                  href="tel:+3271496478"
                  className="text-emerald-400 font-bold text-lg hover:text-emerald-300 transition-colors"
                >
                  +32 71 49 64 78
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-teal-500/30 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-4 h-4 text-teal-400 relative">
                    <div className="w-full h-full border-2 border-teal-400 rounded-lg"></div>
                    <div className="absolute top-1 left-1 right-1 h-1 bg-teal-400 rounded-full"></div>
                    <div className="absolute bottom-1 left-1 right-1 h-1 bg-teal-400 rounded-full"></div>
                  </div>
                </div>
                <a
                  href="mailto:info@sp-computing.be"
                  className="text-teal-400 font-medium hover:text-teal-300 transition-colors"
                >
                  info@sp-computing.be
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-emerald-500/20 mt-8 pt-8 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent"></div>
            <p className="text-slate-400 text-sm relative z-10">
              © 2025 <span className="text-emerald-400 font-semibold">SP Computing</span>. Tous droits réservés. |
              <span className="text-teal-400 font-medium"> Région Brabant Wallon</span>
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
