"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import capstoneLogo from "../assets/images/capstoneLogo.webp";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#themes", label: "Key Themes" },
  { href: "#experience", label: "Experience" },
  { href: "#agenda", label: "Agenda" },
  { href: "#venue", label: "Venue" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-panel/80 backdrop-blur-xl border-b border-border-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#" className="flex flex-col">
            <Image
              src={capstoneLogo}
              alt="SmartNationX"
              width={140}
              height={140}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 relative">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-muted hover:text-main transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Enquiries Dropdown */}
            <div className="relative ml-4">
              <button
                onClick={() => setEnquiryOpen(!enquiryOpen)}
                className="flex items-center cursor-pointer gap-2 px-6 py-2.5 bg-accent-green hover:bg-accent-green/90 text-white text-sm font-medium rounded-full transition-all hover:shadow-lg hover:shadow-accent-green/25"
              >
                Enquiries
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    enquiryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {enquiryOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-panel border border-border-soft rounded-xl shadow-xl overflow-hidden">
                  <Link
                    href="https://saudi.idasummit.com/speakers"
                    target="_blank"
                    className="block px-4 py-3 text-sm text-main hover:bg-panel-soft"
                  >
                    Speaker Enquiry
                  </Link>
                  <Link
                    href="https://saudi.idasummit.com/delegates"
                    target="_blank"
                    className="block px-4 py-3 text-sm text-main hover:bg-panel-soft"
                  >
                    Delegate Enquiry
                  </Link>
                  <Link
                    href="https://saudi.idasummit.com/sponsors"
                    target="_blank"
                    className="block px-4 py-3 text-sm text-main hover:bg-panel-soft"
                  >
                    Sponsor Enquiry
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-muted hover:text-main"
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
                  className="px-4 py-3 text-muted hover:text-main hover:bg-panel-soft rounded-lg"
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Enquiry Buttons */}
              <div className="mx-4 mt-3 space-y-2">
                <Link
                  href="https://saudi.idasummit.com/speakers"
                  target="_blank"
                  className="block px-6 py-3 text-center bg-accent-emerald/10 text-accent-emerald font-medium rounded-full"
                >
                  Speaker Enquiry
                </Link>
                <Link
                  href="https://saudi.idasummit.com/delegates"
                  target="_blank"
                  className="block px-6 py-3 text-center bg-accent-emerald/10 text-accent-emerald font-medium rounded-full"
                >
                  Delegate Enquiry
                </Link>
                <Link
                  href="https://saudi.idasummit.com/sponsors"
                  target="_blank"
                  className="block px-6 py-3 text-center bg-accent-green text-white font-medium rounded-full"
                >
                  Sponsor Enquiry
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
