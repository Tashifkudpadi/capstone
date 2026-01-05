"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";
import { IframeModal } from "./IframeModal";

export function Register() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
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

  return (
    <>
      <section ref={ref} id="register" className="py-20 lg:py-32 bg-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`max-w-3xl mx-auto text-center space-y-8 transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="space-y-4">
              <span
                className={`inline-flex items-center gap-2 px-4 py-1.5 bg-accent-emerald/10 border border-accent-emerald/30 text-accent-green text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <Sparkles className="w-3 h-3 animate-pulse" />
                Register Interest
              </span>

              <h2
                className={`text-3xl lg:text-4xl font-bold text-white-900 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                Be part of SmartNationX 2026
              </h2>
              <p
                className={`text-gray-600 text-lg max-w-2xl mx-auto transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                Join us at the premier platform for CIOs and technology leaders
                shaping the future of digital transformation. Register your
                interest to attend, speak, sponsor, or nominate for awards.
              </p>
            </div>
            <button
              onClick={() => openModal("https://saudi.idasummit.com/delegates")}
              className={`inline-flex items-center cursor-pointer gap-3 px-8 py-4 bg-accent-green hover:bg-accent-green/90 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-accent-green/30 hover:-translate-y-1 hover:scale-105 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              Register Interest
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </button>

            <p
              className={`text-gray-500 text-sm transition-all duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              For sponsorship inquiries, please contact us at{" "}
              <a
                href="mailto:sponsors@smartnationx.com"
                className="text-accent-green hover:underline hover:text-accent-green/80 transition-colors"
              >
                sponsors@smartnationx.com
              </a>
            </p>
          </div>
        </div>
      </section>
      <IframeModal url={modalUrl} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
