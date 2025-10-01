"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    id: 5,
    name: "Cloé Smets",
    company: "Google",
    role: "Cliente",
    rating: 5,
    text: "Travail très professionnel et de qualité personne de confiance et très sympathique....Travail rapide et efficace...Je recommande!",
    date: "Il y a 13 heures",
  },
  {
    id: 1,
    name: "Gwenaelle Oerlemans",
    company: "Google",
    role: "Cliente",
    rating: 5,
    text: "Très professionnel et service de qualité. Je recommande",
    date: "Il y a 2 semaines",
  },
  {
    id: 2,
    name: "Samir Sekri",
    company: "Google",
    role: "Client",
    rating: 5,
    text: "Super travail, bonne expertise et solutions adaptées. Très proactif et disponible merci pour vos conseils et votre professionnalisme.",
    date: "Il y a 10 semaines",
  },
  {
    id: 3,
    name: "Mika Terrones",
    company: "Google",
    role: "Client",
    rating: 5,
    text: "Nous avons fait appel à eux pour l'installation d'un service Wi-Fi dans notre entreprise, et nous sommes extrêmement satisfaits du résultat.",
    date: "Il y a 32 semaines",
  },
  {
    id: 4,
    name: "Marco Vicari",
    company: "Google",
    role: "Local Guide",
    rating: 5,
    text: "Société au top je conseil à 100 %, j'ai enfin pu avoir ma centrale téléphonique à prix normal et configurée sur mesure au petit oignon par le patron",
    date: "Il y a 33 semaines",
  },
]

export default function GoogleReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    setIsAutoPlaying(false)
  }

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
    setIsAutoPlaying(false)
  }

  const goToReview = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const currentReview = reviews[currentIndex]

  return (
    <div className="relative">
      {/* Review Content */}
      <div className="text-center min-h-[300px] flex flex-col justify-center">
        <blockquote className="text-xl md:text-2xl font-light text-slate-200 mb-6 leading-relaxed italic">
          "{currentReview.text}"
        </blockquote>

        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-emerald-500/30">
            <div className="w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">
              {currentReview.name.charAt(0)}
            </div>
          </div>
          <div className="text-left">
            <div className="font-bold text-white text-lg">{currentReview.name}</div>
            <div className="text-emerald-400">
              {currentReview.role}, {currentReview.company}
            </div>
            <div className="text-slate-400 text-sm">{currentReview.date}</div>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="flex items-center justify-center gap-1 mb-6">
          {[...Array(currentReview.rating)].map((_, i) => (
            <div key={i} className="w-5 h-5 text-yellow-400">
              ⭐
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full px-4">
        <Button
          onClick={prevReview}
          variant="outline"
          size="sm"
          className="w-10 h-10 rounded-full bg-slate-800/50 border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-400/50 text-emerald-400 hover:text-emerald-300 backdrop-blur-sm"
        >
          ←
        </Button>
        <Button
          onClick={nextReview}
          variant="outline"
          size="sm"
          className="w-10 h-10 rounded-full bg-slate-800/50 border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-400/50 text-emerald-400 hover:text-emerald-300 backdrop-blur-sm"
        >
          →
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToReview(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-emerald-400 scale-125" : "bg-slate-600 hover:bg-slate-500"
            }`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="text-center mt-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-300"
        >
          {isAutoPlaying ? "⏸️ Pause" : "▶️ Lecture auto"}
        </button>
      </div>
    </div>
  )
}
