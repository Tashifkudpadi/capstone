import Link from "next/link"
import { Mail, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="space-y-2">
            <div className="text-xl font-bold text-main">SmartNationX</div>
            <p className="text-sm text-muted">CIO Awards & Conference 2026</p>
            <p className="text-xs text-muted">Organised by Capstone Business Intelligence</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
            <Link href="#about" className="hover:text-main transition-colors">
              About
            </Link>
            <Link href="#themes" className="hover:text-main transition-colors">
              Themes
            </Link>
            <Link href="#agenda" className="hover:text-main transition-colors">
              Agenda
            </Link>
            <Link href="#venue" className="hover:text-main transition-colors">
              Venue
            </Link>
            <Link href="#register" className="hover:text-main transition-colors">
              Register
            </Link>
          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-panel-soft border border-border-soft rounded-full flex items-center justify-center text-muted hover:text-main hover:border-accent-green transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-panel-soft border border-border-soft rounded-full flex items-center justify-center text-muted hover:text-main hover:border-accent-green transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-panel-soft border border-border-soft rounded-full flex items-center justify-center text-muted hover:text-main hover:border-accent-green transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border-soft text-center text-xs text-muted">
          © 2026 SmartNationX CIO Awards & Conference. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
