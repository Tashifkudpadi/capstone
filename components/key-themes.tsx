"use client";

import {
  Brain,
  TrendingUp,
  Workflow,
  GitBranch,
  Cloud,
  Shield,
  Database,
  Heart,
  Network,
  Users,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const themes = [
  { icon: Brain, title: "AI-Powered Digital Enterprises" },
  {
    icon: TrendingUp,
    title: "Strategic Digital Transformation & Value Realization",
  },
  { icon: Workflow, title: "Agile Automation & Low-Code/No-Code Empowerment" },
  { icon: GitBranch, title: "Modern DevOps & Rapid Application Delivery" },
  { icon: Cloud, title: "Cloud Modernization & Digital Infrastructure" },
  { icon: Shield, title: "Cybersecurity, Zero-Trust & Digital Trust" },
  { icon: Database, title: "Intelligent Data Platforms & Governance" },
  { icon: Heart, title: "Customer-Centric Data & Experience Innovation" },
  { icon: Network, title: "Next-Gen Digital Infrastructure & Networks" },
  { icon: Users, title: "Future Workforce, Skills & Operating Models" },
];

export function KeyThemes() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} id="themes" className="py-20 lg:py-32 bg-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 space-y-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-accent-emerald/10 border border-accent-emerald/30 text-accent-green text-xs font-semibold uppercase tracking-wider rounded-full">
            Key Themes
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white-900">
            Strategic focus areas for CIO leadership
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {themes.map((theme, index) => (
            <div
              key={theme.title}
              className={`group relative bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-accent-green/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-green/10 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 80}ms` }}
            >
              <div className="absolute top-4 right-4 text-4xl font-bold text-gray-200 group-hover:text-accent-green/30 transition-colors duration-300">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-green/20 group-hover:scale-110 transition-all duration-300">
                <theme.icon className="w-6 h-6 text-accent-green" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 leading-snug pr-8">
                {theme.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
