"use client"

import { Mic, Award, Coffee, MessageSquare } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const agendaItems = [
  { time: "08:00 – 09:00", title: "Registration & Networking Breakfast", icon: Coffee, type: "break" },
  { time: "09:00 – 09:15", title: "Welcome & Opening Remarks", icon: Mic, type: "session" },
  { time: "09:15 – 10:00", title: "Visionary Keynote: The Future of CIO Leadership", icon: Mic, type: "keynote" },
  { time: "10:00 – 10:45", title: "Panel: AI-Driven Enterprise Transformation", icon: MessageSquare, type: "session" },
  { time: "10:45 – 11:15", title: "Networking Break", icon: Coffee, type: "break" },
  {
    time: "11:15 – 12:00",
    title: "Leadership Dialogue: Cloud & Digital Infrastructure",
    icon: MessageSquare,
    type: "session",
  },
  { time: "12:00 – 12:45", title: "Case Study: Cybersecurity Excellence", icon: Mic, type: "session" },
  { time: "12:45 – 14:00", title: "Networking Lunch", icon: Coffee, type: "break" },
  { time: "14:00 – 15:30", title: "SmartNationX CIO Awards Ceremony", icon: Award, type: "awards" },
  { time: "15:30 – 16:00", title: "Closing Keynote & Networking", icon: Mic, type: "keynote" },
]

export function Agenda() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref} id="agenda" className="py-20 lg:py-32 bg-panel-soft/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 space-y-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-accent-emerald/10 border border-accent-emerald/30 text-accent-green-soft text-xs font-semibold uppercase tracking-wider rounded-full">
            Event Agenda
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-main">A day of insights, recognition & connection</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line - animated */}
            <div
              className={`absolute left-8 top-0 bottom-0 w-px bg-border-soft hidden sm:block transition-all duration-1000 origin-top ${
                isVisible ? "scale-y-100" : "scale-y-0"
              }`}
            />

            <div className="space-y-4">
              {agendaItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex gap-6 p-4 sm:p-6 rounded-xl border transition-all duration-500 hover:-translate-x-2 hover:shadow-lg ${
                    item.type === "awards"
                      ? "bg-accent-gold/5 border-accent-gold/30 hover:bg-accent-gold/10"
                      : item.type === "keynote"
                        ? "bg-accent-green/5 border-accent-green/30 hover:bg-accent-green/10"
                        : "bg-panel border-border-soft hover:bg-panel-soft"
                  } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                  style={{ transitionDelay: `${300 + index * 80}ms` }}
                >
                  {/* Icon */}
                  <div
                    className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110 ${
                      item.type === "awards"
                        ? "bg-accent-gold/20"
                        : item.type === "keynote"
                          ? "bg-accent-green/20"
                          : item.type === "break"
                            ? "bg-panel-soft"
                            : "bg-accent-emerald/20"
                    }`}
                  >
                    <item.icon
                      className={`w-5 h-5 ${item.type === "awards" ? "text-accent-gold" : "text-accent-green-soft"}`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <span
                        className={`text-sm font-mono ${
                          item.type === "awards" ? "text-accent-gold" : "text-accent-green-soft"
                        }`}
                      >
                        {item.time}
                      </span>
                      <h3 className={`font-semibold ${item.type === "break" ? "text-muted" : "text-main"}`}>
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
