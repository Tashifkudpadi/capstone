"use client";

import { Menu, X, ChevronDown } from "lucide-react";

import { IframeModal } from "./IframeModal";
import { useState } from "react";
import capstoneLogo from "../assets/images/capstoneLogo.png";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (url: string) => {
    setModalUrl(url);
    setIsModalOpen(true);
    setEnquiryOpen(false);
    setMobileMenuOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalUrl("");
  };

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#themes", label: "Key Themes" },
    { href: "#experience", label: "Experience" },
    { href: "#agenda", label: "Agenda" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-body backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="#" className="flex flex-col">
              <Image
                src={capstoneLogo}
                alt="SmartNationX"
                width={160}
                height={160}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 relative">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="
                    relative px-4 py-2 text-sm font-medium
                    text-gray-300
                    transition-all duration-300 ease-out
                    hover:text-accent-gold
                    hover:text-bold
                  "
                >
                  {item.label}
                </a>
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
                  <div className="absolute right-0 mt-3 w-56 bg-gray-800 border border-gray-700 rounded-xl shadow-xl overflow-hidden">
                    <button
                      onClick={() =>
                        openModal("https://saudi.idasummit.com/speakers")
                      }
                      className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-700"
                    >
                      Speaker Enquiry
                    </button>
                    <button
                      onClick={() =>
                        openModal("https://saudi.idasummit.com/delegates")
                      }
                      className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-700"
                    >
                      Delegate Enquiry
                    </button>
                    <button
                      onClick={() =>
                        openModal("https://saudi.idasummit.com/sponsors")
                      }
                      className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-700"
                    >
                      Sponsor Enquiry
                    </button>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-800">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="
                      px-4 py-3 rounded-lg
                      text-gray-300
                      transition-all duration-200
                      hover:text-white hover:bg-gray-800
                      active:scale-[0.98]
                    "
                  >
                    {item.label}
                  </a>
                ))}

                {/* Mobile Enquiry Buttons */}
                <div className="mx-4 mt-3 space-y-2">
                  <button
                    onClick={() =>
                      openModal("https://saudi.idasummit.com/speakers")
                    }
                    className="block w-full px-6 py-3 text-center bg-emerald-500/10 text-emerald-400 font-medium rounded-full"
                  >
                    Speaker Enquiry
                  </button>
                  <button
                    onClick={() =>
                      openModal("https://saudi.idasummit.com/delegates")
                    }
                    className="block w-full px-6 py-3 text-center bg-emerald-500/10 text-emerald-400 font-medium rounded-full"
                  >
                    Delegate Enquiry
                  </button>
                  <button
                    onClick={() =>
                      openModal("https://saudi.idasummit.com/sponsors")
                    }
                    className="block w-full px-6 py-3 text-center bg-emerald-500 text-white font-medium rounded-full"
                  >
                    Sponsor Enquiry
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <IframeModal url={modalUrl} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
