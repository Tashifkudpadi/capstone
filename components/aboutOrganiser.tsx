"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import capstoneLogo from "../assets/images/capstoneLogo.png";

export function AboutOrganiser() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      id="organiser"
      className="py-20 lg:py-32 bg-body border-b border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-[220px_1fr] gap-10 items-start transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Logo */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="bg-panel border border-border-soft rounded-xl p-6">
              <Image
                src={capstoneLogo}
                alt="Capstone Business Intelligence"
                width={180}
                height={100}
                className="object-contain"
              />
            </div>
            <div>
              <p
                className="
                mt-4 pl-3 border-l-2 border-accent-emerald
                text-xs text-muted italic
              "
              >
                Leading the way with intelligence
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 bg-accent-emerald/10 border border-accent-emerald/30 text-accent-emerald text-xs font-semibold uppercase tracking-wider rounded-full">
              About the Organiser
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-main">
              Capstone Business Intelligence
            </h2>

            <div className="space-y-4 text-muted leading-relaxed text-base">
              <p>
                Capstone Business Intelligence is a global platform provider
                specializing in high-impact business intelligence and emerging
                technology conferences.
              </p>

              <p>
                We curate executive-level forums that empower senior leaders
                with actionable insights, strategic knowledge, and meaningful
                networks. With deep industry expertise and a strong global
                network, Capstone delivers meticulously designed conferences,
                leadership forums, and knowledge platforms.
              </p>

              <p>
                Our platforms connect decision-makers from enterprises,
                government bodies, and technology providers, driving innovation,
                collaboration, and long-term business value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
