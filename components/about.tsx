"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 lg:py-32 bg-body border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div
            className={`bg-panel-soft border border-border-soft rounded-2xl p-8 lg:p-12 space-y-8 transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="space-y-4">
              <span
                className={`inline-block px-4 py-1.5 bg-accent-emerald/10 border border-accent-emerald/30 text-accent-green-soft text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                About the Confex
              </span>
              <h2
                className={`text-3xl lg:text-4xl font-bold text-white transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                Where national vision meets digital leadership
              </h2>
            </div>

            <div className="space-y-6 text-muted leading-relaxed">
              {[
                "The SmartNationX CIO Awards & Conference is a premier business driven platform dedicated to recognizing and empowering visionary CIOs and technology leaders who are shaping the next era of digital transformation, enterprise modernization and national competitiveness.",
                "As ambitious national digital agendas accelerate powered by AI innovation, cloud modernization, data intelligence, cybersecurity and Low Code/No Code (LCNC) adoption CIOs have become the central architects of future ready digital ecosystems. Their decisions directly influence productivity, resilience, citizen experiences and long-term growth.",
                "The Confex brings together the country's top CIOs, CTOs, CDOs, digital transformation leaders and global technology experts for a high impact agenda of insights, recognition and collaboration. Through visionary keynotes, leadership dialogues and an independently evaluated awards program, SmartNationX highlights achievements in AI integration, cloud transformation, data governance, LCNC driven automation, cyber resilience and innovation leadership.",
              ].map((text, index) => (
                <p
                  key={index}
                  className={`transition-all duration-500  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  {text}
                </p>
              ))}
              <p
                className={`transition-all duration-500  ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "700ms" }}
              >
                Serving as a national benchmark of digital excellence,
                SmartNationX CIO Awards & Conference spotlights leaders who are
                enabling intelligent enterprises, scaling innovation and shaping
                a smarter, more connected and globally competitive digital
                future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
