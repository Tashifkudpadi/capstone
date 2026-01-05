"use client";

import {
  Calendar,
  Users,
  Presentation,
  Menu,
  X,
  ChevronDown,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { IframeModal } from "./IframeModal";

export function Hero() {
  const [modalUrl, setModalUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (url: string) => {
    setModalUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalUrl("");
  };

  const tags = [
    "AI & Data-led Transformation",
    "Cloud & Digital Infrastructure",
    "Cybersecurity & Trust",
    "LCNC & Intelligent Automation",
  ];

  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-800 border border-gray-700 rounded-full">
                <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
                <span className="text-sm text-gray-300">
                  <Calendar className="inline w-4 h-4 mr-1.5 text-accent-green-soft" />
                  6 April 2026 • Riyadh, Saudi Arabia
                </span>
              </div>

              {/* Title */}
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl m-0 font-bold text-white leading-tight">
                  <span className="text-accent-green-soft">SmartNationX</span>
                  <br />
                </h1>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl m-0 font-bold text-white leading-tight">
                  CIO Awards & Confex
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                  A premium Confex and CIO Awards platform celebrating visionary
                  technology leaders who are architecting intelligent, secure
                  and modern enterprises for a smarter digital future.
                </p>
              </div>

              {/* Meta Info */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-emerald-400/50 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1">
                  <Users className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">
                      Audience
                    </span>
                    <p className="text-sm text-white mt-1">
                      CIOs, CTOs, CDOs & digital leaders
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-emerald-400/50 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1">
                  <Presentation className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">
                      Format
                    </span>
                    <p className="text-sm text-white mt-1">
                      Keynotes • Awards • Leadership Dialogues
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() =>
                    openModal("https://saudi.idasummit.com/sponsors")
                  }
                  className="px-8 py-4 cursor-pointer bg-accent-green hover:bg-accent-green/90 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-accent-green/30 hover:-translate-y-1 hover:scale-105"
                >
                  Sponsors Enquiry
                </button>
                <button
                  onClick={() =>
                    openModal("https://saudi.idasummit.com/delegates")
                  }
                  className="px-8 py-4 cursor-pointer border border-gray-600 text-white hover:bg-gray-800 font-semibold rounded-full transition-all duration-300 hover:-translate-y-1"
                >
                  Delegate Enquiry
                </button>
                <button
                  onClick={() =>
                    openModal("https://saudi.idasummit.com/speakers")
                  }
                  className="px-8 py-4 cursor-pointer border border-gray-600 text-white hover:bg-gray-800 font-semibold rounded-full transition-all duration-300 hover:-translate-y-1"
                >
                  Speakers Enquiry
                </button>
              </div>

              <p className="text-xs text-gray-400">
                Independently curated CIO awards & high-impact Confex program
                for Riyadh's digital leadership community.
              </p>
            </div>

            {/* Right Panel */}
            <div
              className="relative transition-all duration-1000"
              style={{ transitionDelay: "300ms" }}
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-green/20 via-accent-emerald/10 to-transparent rounded-3xl blur-2xl animate-pulse" />
              <div className="relative bg-panel border border-border-soft rounded-2xl p-8 space-y-6 hover:border-emerald-400/40 transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 border border-accent-green/20 rounded-full -translate-y-1/2 translate-x-1/2 animate-[spin_20s_linear_infinite]" />

                <div className="inline-block px-3 py-1.5 bg-accent-gold/10 border border-accent-gold/30 rounded-full">
                  <span className="text-xs font-medium text-accent-gold uppercase tracking-wider">
                    Saudi Arabia CIO Awards 2026
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white">
                  A national benchmark of digital excellence
                </h2>

                <p className="text-gray-300 leading-relaxed">
                  SmartNationX recognizes CIOs, CTOs, CDOs and transformation
                  leaders who are driving AI innovation, data intelligence,
                  cloud modernization, cyber resilience and LCNC-powered
                  automation across government and enterprise.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium rounded-full hover:bg-emerald-500/20 hover:scale-105 transition-all duration-300 cursor-default"
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

      <IframeModal url={modalUrl} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
