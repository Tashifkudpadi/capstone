"use client";

import {
  Landmark,
  Banknote,
  ShieldCheck,
  ShoppingCart,
  Radio,
  Fuel,
  Building2,
  Store,
  HeartPulse,
  Pickaxe,
  Package,
  Trophy,
  Plane,
  Truck,
  HardHat,
  GraduationCap,
  Hotel,
  Car,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const industries = [
  { icon: Landmark, title: "Government" },
  { icon: Banknote, title: "Banking" },
  { icon: ShieldCheck, title: "Insurance" },
  { icon: ShoppingCart, title: "E-Commerce" },
  { icon: Radio, title: "Telecom" },
  { icon: Fuel, title: "Oil & Gas" },
  { icon: Building2, title: "Real Estate" },
  { icon: Store, title: "Retail" },
  { icon: HeartPulse, title: "Healthcare" },
  { icon: Pickaxe, title: "Mining" },
  { icon: Package, title: "FMCG" },
  { icon: Trophy, title: "Sports" },
  { icon: Plane, title: "Aviation" },
  { icon: Truck, title: "Logistics" },
  { icon: HardHat, title: "Construction" },
  { icon: GraduationCap, title: "Education" },
  { icon: Hotel, title: "Hospitality" },
  { icon: Car, title: "Automobile" },
];

export function Industries() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} id="industries" className="py-20 lg:py-32 bg-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 space-y-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-accent-emerald/10 border border-accent-emerald/30 text-accent-green-soft text-xs font-semibold uppercase tracking-wider rounded-full">
            Industries
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold text-main">
            Industries Represented
          </h2>

          <p className="max-w-2xl mx-auto text-muted">
            CIO leaders and decision-makers from diverse industry sectors
            shaping digital transformation across the ecosystem.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className={`group relative bg-panel-soft border border-border-soft rounded-xl p-6 flex flex-col items-center text-center
                transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-emerald/10 hover:border-accent-emerald/50
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${200 + index * 60}ms` }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 mb-4 rounded-xl bg-accent-emerald/10 flex items-center justify-center
                group-hover:bg-accent-emerald/20 group-hover:scale-110 transition-all duration-300"
              >
                <industry.icon className="w-6 h-6 text-accent-emerald" />
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-main">
                {industry.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
