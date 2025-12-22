"use client";

import { Award, Lightbulb, Users, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const experiences = [
  {
    icon: Award,
    title: "Learn from award-winning CIOs",
    description:
      "Hear from CIOs and transformation leaders who have successfully delivered complex modernization programs. Gain frameworks, lessons and tools that you can immediately apply to your own roadmap.",
  },
  {
    icon: Lightbulb,
    title: "Explore real-world innovation",
    description:
      "Dive into cross-industry case studies showcasing AI, cloud, LCNC, data and cybersecurity initiatives that have created measurable business impact and improved enterprise agility.",
  },
  {
    icon: Users,
    title: "Connect with elite digital leaders",
    description:
      "Network with senior IT executives, regulators, innovators and ecosystem partners driving Riyadh's digital future. Build meaningful peer and partner relationships.",
  },
  {
    icon: Rocket,
    title: "Get inspired to lead the future",
    description:
      "Discover emerging technologies, trends and opportunities that will define the next decade of digital leadership. Leave equipped to lead boldly and innovate continuously.",
  },
];

export function Experience() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} id="experience" className="py-20 lg:py-32 bg-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 space-y-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-accent-emerald/10 border border-accent-emerald/30 text-accent-green text-xs font-semibold uppercase tracking-wider rounded-full">
            What You Will Experience
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white-900">
            Inside the SmartNationX CIO Awards & Conference
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`group bg-gray-50 border bg-panel-soft border-gray-200 rounded-2xl p-8 hover:border-accent-green/50 transition-all duration-500 hover:shadow-lg ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : index % 2 === 0
                  ? "opacity-0 -translate-x-8"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-accent-green/20 to-accent-emerald/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <exp.icon className="w-7 h-7 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-white-900 mb-3 group-hover:text-accent-green transition-colors duration-300">
                {exp.title}
              </h3>
              <p className="text-muted leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
