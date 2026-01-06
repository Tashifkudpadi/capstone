import Link from "next/link";
import { Mail, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import capstoneLogo from "../assets/images/capstoneLogo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="space-y-2">
            {/* <div className="text-xl font-bold text-main">SmartNationX</div> */}
            {/* <p className="text-sm text-muted">CIO Awards & Confex 2026</p> */}
            <p className="text-xs text-muted font-bold relative left-2.5 px-5">
              Organised by
            </p>
            <Image
              src={capstoneLogo}
              alt="SmartNationX"
              width={160}
              height={160}
            />
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
            <Link
              href="#about"
              className="hover:text-accent-gold transition-colors"
            >
              About
            </Link>
            <Link
              href="#themes"
              className="hover:text-accent-gold transition-colors"
            >
              Key Themes
            </Link>
            <Link
              href="#experience"
              className="hover:text-accent-gold transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#agenda"
              className="hover:text-accent-gold transition-colors"
            >
              Agenda
            </Link>
          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-end gap-4">
            {/* <a
              href="#"
              className="w-10 h-10 bg-panel-soft border border-border-soft rounded-full flex items-center justify-center text-muted hover:text-main hover:border-accent-green transition-all"
            >
              <Mail className="w-5 h-5" />
            </a> */}
            <a
              href="https://www.linkedin.com/company/capstonemena/?viewAsMember=true"
              target="_blank"
              className="w-10 h-10 bg-panel-soft border border-border-soft rounded-full flex items-center justify-center text-muted hover:text-main hover:border-accent-green transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border-soft text-center text-xs text-muted">
          © {currentYear} SmartNationX CIO Awards & Confex. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
