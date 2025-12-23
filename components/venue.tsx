"use client";

import { MapPin, Building2, Plane, Hotel } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Venue() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} id="venue" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - slides in from left */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-accent-emerald/10 border border-accent-emerald/30 text-accent-green-soft text-xs font-semibold uppercase tracking-wider rounded-full">
                Event Venue
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-main">
                Riyadh, Saudi Arabia
              </h2>
              <p className="text-muted leading-relaxed">
                Join us in the heart of Saudi Arabia's capital city, a thriving
                hub of innovation and digital transformation. The venue will be
                announced soon.
              </p>
              <p className="text-muted leading-relaxed">
                It will offer a world-class setting designed to facilitate
                high-impact discussions, executive networking, and knowledge
                exchange among CIOs and digital leaders.
              </p>
            </div>

            {/* <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Building2,
                  title: "Premium Venue",
                  desc: "World-class conference facilities",
                },
                {
                  icon: Plane,
                  title: "Easy Access",
                  desc: "Near King Khalid International Airport",
                },
                {
                  icon: Hotel,
                  title: "Accommodation",
                  desc: "Partner hotels nearby",
                },
                {
                  icon: MapPin,
                  title: "Central Location",
                  desc: "Heart of Riyadh's business district",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-4 p-4 bg-panel border border-border-soft rounded-xl hover:border-accent-green/50 hover:bg-panel-soft transition-all duration-300 hover:-translate-y-1 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <item.icon className="w-6 h-6 text-accent-green-soft flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-main text-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Map/Visual - slides in from right */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-accent-green/10 via-transparent to-accent-emerald/10 rounded-3xl blur-2xl animate-pulse" />
            <div className="relative aspect-[4/3] bg-panel border border-border-soft rounded-2xl overflow-hidden hover:border-accent-green/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-green/5 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto animate-float">
                    <MapPin className="w-10 h-10 text-accent-green-soft" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-main">Riyadh</h3>
                    <p className="text-muted">Saudi Arabia</p>
                  </div>
                  <p className="text-sm text-accent-green-soft font-medium">
                    6 April 2026
                  </p>
                </div>
              </div>
              {/* Decorative elements - animated */}
              <div className="absolute top-4 left-4 w-24 h-24 border border-accent-green/20 rounded-full animate-[spin_15s_linear_infinite]" />
              <div className="absolute bottom-4 right-4 w-32 h-32 border border-accent-emerald/20 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
