"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#themes", label: "Key Themes" },
  { href: "#experience", label: "Experience" },
  { href: "#agenda", label: "Agenda" },
  { href: "#venue", label: "Venue" },
  { href: "#register", label: "Register" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-panel/80 backdrop-blur-xl border-b border-border-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#" className="flex flex-col">
            <span className="text-xl font-bold text-main tracking-tight">SmartNationX</span>
            <span className="text-xs text-muted">Official Organiser</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-muted hover:text-main transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#register"
              className="ml-4 px-6 py-2.5 bg-accent-green hover:bg-accent-green/90 text-white text-sm font-medium rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-accent-green/25"
            >
              Register Interest
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-muted hover:text-main transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border-soft">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-muted hover:text-main hover:bg-panel-soft rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#register"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 mt-2 px-6 py-3 bg-accent-green text-white text-center font-medium rounded-full"
              >
                Register Interest
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
