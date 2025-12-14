"use client"

import { Calendar, Users, Presentation } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const tags = [
  "AI & Data-led Transformation",
  "Cloud & Digital Infrastructure",
  "Cybersecurity & Trust",
  "LCNC & Intelligent Automation",
]

export function Hero() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref} className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div
              className={`inline-flex items-center gap-3 px-4 py-2 bg-panel-soft border border-border-soft rounded-full transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
              <span className="text-sm text-muted">
                <Calendar className="inline w-4 h-4 mr-1.5 text-accent-green-soft" />5 April 2026 • Riyadh, Saudi Arabia
              </span>
            </div>

            {/* Title */}
            <div
              className={`space-y-4 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-main leading-tight">
                <span className="text-accent-green-soft">SmartNationX</span>
                <br />
                CIO Awards & Conference
              </h1>
              <p className="text-lg text-muted leading-relaxed max-w-xl">
                A premium Confex and CIO Awards platform celebrating visionary technology leaders who are architecting
                intelligent, secure and modern enterprises for a smarter digital future.
              </p>
            </div>

            {/* Meta Info */}
            <div
              className={`grid sm:grid-cols-2 gap-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="flex items-start gap-3 p-4 bg-panel-soft/50 border border-border-soft rounded-xl hover:border-accent-green/50 hover:bg-panel-soft transition-all duration-300 hover:-translate-y-1">
                <Users className="w-5 h-5 text-accent-green mt-0.5" />
                <div>
                  <span className="text-xs text-muted uppercase tracking-wider">Audience</span>
                  <p className="text-sm text-main mt-1">CIOs, CTOs, CDOs & digital leaders</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-panel-soft/50 border border-border-soft rounded-xl hover:border-accent-green/50 hover:bg-panel-soft transition-all duration-300 hover:-translate-y-1">
                <Presentation className="w-5 h-5 text-accent-green mt-0.5" />
                <div>
                  <span className="text-xs text-muted uppercase tracking-wider">Format</span>
                  <p className="text-sm text-main mt-1">Keynotes • Awards • Leadership Dialogues</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "450ms" }}
            >
              <Link
                href="#register"
                className="px-8 py-4 bg-accent-green hover:bg-accent-green/90 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent-green/30 hover:-translate-y-1 hover:scale-105"
              >
                Register Interest
              </Link>
              <Link
                href="#themes"
                className="px-8 py-4 border border-border-strong text-main hover:bg-panel-soft font-semibold rounded-full transition-all duration-300 hover:-translate-y-1"
              >
                Explore Key Themes
              </Link>
            </div>

            <p
              className={`text-xs text-muted transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: "600ms" }}
            >
              Independently curated CIO awards & high-impact Confex program for Riyadh's digital leadership community.
            </p>
          </div>

          {/* Right Panel */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-accent-green/20 via-accent-emerald/10 to-transparent rounded-3xl blur-2xl animate-pulse" />
            <div className="relative bg-panel border border-border-soft rounded-2xl p-8 space-y-6 hover:border-accent-green/40 transition-all duration-500">
              {/* Decorative orbit - animated */}
              <div className="absolute top-0 right-0 w-32 h-32 border border-accent-green/20 rounded-full -translate-y-1/2 translate-x-1/2 animate-[spin_20s_linear_infinite]" />

              <div className="inline-block px-3 py-1.5 bg-accent-gold/10 border border-accent-gold/30 rounded-full">
                <span className="text-xs font-medium text-accent-gold uppercase tracking-wider">
                  Saudi Arabia CIO Awards 2026
                </span>
              </div>

              <h2 className="text-2xl font-bold text-main">A national benchmark of digital excellence</h2>

              <p className="text-muted leading-relaxed">
                SmartNationX recognizes CIOs, CTOs, CDOs and transformation leaders who are driving AI innovation, data
                intelligence, cloud modernization, cyber resilience and LCNC-powered automation across government and
                enterprise.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag, index) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-accent-green/10 border border-accent-green/30 text-accent-green-soft text-xs font-medium rounded-full hover:bg-accent-green/20 hover:scale-105 transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
