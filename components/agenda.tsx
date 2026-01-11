"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* =========================
   TYPES
========================= */

type SubSection = {
  heading: string;
  description?: string;
};

type AgendaDescription =
  | string
  | {
      intro?: string;
      sections?: SubSection[];
    };

type AgendaItem = {
  id: string;
  time: string;
  title: string;
  description?: AgendaDescription;
};

const agendaItems: AgendaItem[] = [
  {
    id: "1",
    time: "08:30 – 09:45",
    title: "Registrations & Welcome Refreshments",
    // description: {
    //   intro:
    //     "A high-impact keynote focused on the evolving role of CIOs in shaping digitally resilient and innovation-driven enterprises.",
    //   sections: [
    //     {
    //       heading: "Business Context",
    //       description:
    //         "As AI investments accelerate globally, organizations must align leadership, governance, and digital strategy to remain competitive.",
    //     },
    //     {
    //       heading: "Key Takeaways",
    //       description:
    //         "How CIOs can prioritize AI use cases, prepare data foundations, and enable scalable innovation.",
    //     },
    //   ],
    // },
  },
  {
    id: "2",
    time: "09:45– 09:50",
    title: "Welcome Address by Organizer",
  },
  {
    id: "3",
    time: "09:50 – 10:00",
    title:
      "Opening Keynote : The Evolving Role of the CIO in a Digital-First World",
    description:
      "As organizations accelerate digital adoption, the CIO’s role is shifting from technology oversight to strategic business leadership. This session examines how CIOs are balancing innovation, governance, and value creation while shaping enterprise-wide transformation, resilience, and long-term growth in an increasingly digital-first environment.",
  },
  {
    id: "4",
    time: "10:00 – 10:15",
    title: "Keynote : The Evolving Role of the CIO in a Digital-First World",
    description:
      "As organizations accelerate digital adoption, the CIO’s role is shifting from technology oversight to strategic business leadership. This session examines how CIOs are balancing innovation, governance, and value creation while shaping enterprise-wide transformation, resilience, and long-term growth in an increasingly digital-first environment.",
  },
  {
    id: "5",
    time: "10:15 – 10:30",
    title:
      "Keynote : Agentic AI in the Enterprise: Turning Experimentation into Scalable Impact",
    description:
      "As enterprises move beyond pilots and proofs of concept, agentic AI is redefining how decisions, workflows, and systems operate autonomously. This session explores how organizations can overcome organizational, technical, and governance barriers to deploy agentic AI responsibly at scale, ensuring alignment with business objectives, trust frameworks, and enterprise control.",
  },
  {
    id: "6",
    time: "10:30 – 10:50",
    title:
      "Leadership Panel : The CIO’s Mandate: Building an AI-Ready Data Ecosystem",
    description:
      "As Saudi Arabia advances toward its Vision 2030 digital transformation goals, CIOs stand at the intersection of technology, strategy, and intelligence. Their new mandate extends far beyond IT modernization it is about creating the data foundations and AI-ready ecosystems that will define the Kingdom’s next decade of innovation.This session explores how visionary CIOs are reshaping enterprise architecture, modernizing data infrastructure, and enabling seamless data flow across business units and government entities. By integrating cloud, governance, and AI-driven automation, they are transforming fragmented data landscapes into intelligent, secure, and insight-driven environments that fuel smarter decisions and sustainable growth.",
  },
  {
    id: "7",
    time: "10:50 – 11:05",
    title: "Keynote : Building Enterprise Applications for the AI Era",
    description:
      "As AI becomes integral to business operations, enterprise applications must evolve beyond traditional architectures. This session explores how CIOs and technology leaders can design AI-ready applications that are scalable, secure, and adaptable, enabling intelligent workflows, improved decision-making, and sustained business value.",
  },
  {
    id: "8",
    time: "11:05 – 11:30",
    title:
      "Digital Transformation Leader Awards : Recognizing Pioneers of Innovation and Intelligent Change",
    description:
      "The Digital Transformation Leader Awards honor visionary executives who are shaping the future of business through bold leadership, strategic innovation, and technology-driven excellence. These leaders have successfully bridged business and technology to drive enterprise-wide modernization, empower data-driven cultures, and accelerate national digital agendas.",
  },
  {
    id: "9",
    time: "11:30 – 12:00",
    title: "Coffee & Networking Break ",
  },
  {
    id: "10",
    time: "12:00 – 12:10",
    title: "Keynote : Leading Trustworthy AI in the Enterprise",
    description:
      "As AI becomes embedded across core business processes, CIOs play a critical role in ensuring it is deployed responsibly and transparently. This session explores how leaders can establish strong governance, ethical frameworks, and accountability models to build trust, manage risk, and enable sustainable enterprise AI adoption.",
  },
  {
    id: "11",
    time: "12:10 – 12:20",
    title:
      "Keynote : Modernizing Legacy Systems Without Disrupting the Business",
    description:
      "As organizations accelerate digital transformation, CIOs face the challenge of upgrading legacy systems while ensuring uninterrupted operations. This session explores practical modernization strategies such as phased migration, hybrid architectures, and API-led integration that enable innovation, scalability, and resilience without impacting core business continuity.",
  },
  {
    id: "12",
    time: "12:20 – 12:35",
    title:
      "Fireside Chat : Smart Governance Systems: Leveraging AI to Enhance Public Services",
    description:
      "As governments accelerate digital transformation, AI is becoming central to building smarter, more responsive public services. This session explores how AI-enabled platforms, data intelligence, and automation can improve service delivery, enhance decision-making, and enable scalable, citizen-centric governance while ensuring trust, security, and accountability.",
  },
  {
    id: "13",
    time: "12:35 – 12:50",
    title: "Technology-Driven Roundtable",
    description: {
      intro: "",
      sections: [
        {
          heading: "Table A1 : Agile Automation & Low-Code/No-Code Empowerment",
        },
        {
          heading: "Table A2 : Intelligent Data Architecture & Platforms",
        },
        {
          heading: "Table A3 : Customer-Centric Data Innovation",
        },
        {
          heading: "Table B1 : Future Workforce & Digital Enablement",
        },
        {
          heading: "Table B2 : Cloud Modernization & Value Optimization",
        },
        {
          heading: "Table B3 : Cybersecurity, Trust & Digital Assurance",
        },
        {
          heading:
            "Table C1 : AI-Driven Customer Experience Platforms & Human-Centric Design",
        },
        {
          heading:
            "Table C2 : AI & Data Intelligence as Catalysts for Digital Transformation",
        },
        {
          heading: "Table C3 : AI-Enabled Applications & Digital Experiences",
        },
      ],
    },
  },
  {
    id: "14",
    time: "13:00 – 13:20",
    title:
      "CIO Leadership Panel : AI as the Experience Engine: Connecting Customers, Employees, and Operations",
    description:
      "AI is rapidly evolving from isolated use cases into a core driver of enterprise-wide experiences. In this CIO-led discussion, leaders explore how AI-enabled platforms are aligning customer expectations with employee enablement unlocking operational efficiency, intelligent decision-making, and cohesive digital experiences across the organization.",
  },
  {
    id: "15",
    time: "13:30– 14:00",
    title: "SmartNationX Visionary CIO Awards",
    description:
      "To thrive in today’s digital economy, visionary CIOs are transforming organizations by leveraging AI, data, cloud, automation, and modern digital platforms to drive innovation, resilience, and measurable business impact. The SmartNationX Visionary CIO Awards recognize outstanding CIOs and technology leaders who have successfully delivered high-impact digital transformation initiatives through strategic leadership and execution. Each nomination is evaluated through a structured and impartial multi-stage review process, ensuring recognition is based on merit, innovation, and real-world outcomes.",
  },
  {
    id: "16",
    time: "14:00 - 14:10",
    title: "Closing Ceremony & Vote of Thanks ",
  },
  {
    id: "17",
    time: "14:10 – 15:10",
    title: "Networking Lunch & Close of Confex",
  },
];

/* =========================
   HELPERS
========================= */

function isCurrentSession(timeRange: string) {
  const now = new Date();

  const parts = timeRange.split("–").map((t) => t.trim());
  if (parts.length !== 2) return false;

  const toMinutes = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    if (Number.isNaN(h) || Number.isNaN(m)) return NaN;
    return h * 60 + m;
  };

  const start = toMinutes(parts[0]);
  const end = toMinutes(parts[1]);
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  if (Number.isNaN(start) || Number.isNaN(end)) return false;

  return nowMinutes >= start && nowMinutes <= end;
}

/* =========================
   RENDER DESCRIPTION
========================= */

function RenderDescription({
  description,
}: {
  description: AgendaDescription;
}) {
  if (typeof description === "string") {
    return (
      <p className="text-muted leading-relaxed text-sm md:text-base">
        {description}
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {description.intro && (
        <p className="text-muted leading-relaxed text-sm md:text-base">
          {description.intro}
        </p>
      )}

      {description.sections && (
        <ul className="space-y-2">
          {description.sections.map((section, index) => (
            <li
              key={index}
              className="pl-4 border-l-2 border-accent-emerald text-sm text-muted"
            >
              {section.heading}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* =========================
   COMPONENT
========================= */

export function Agenda() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  useEffect(() => {
    const index = agendaItems.findIndex((item) => isCurrentSession(item.time));
    if (index >= 0) {
      setOpenItem(`agenda-${index}`);
    }
  }, []);

  return (
    <section
      id="agenda"
      className="py-20 lg:py-28 bg-body text-main border-b border-border-soft"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 text-center space-y-4">
          <span className="inline-block px-4 py-1.5 bg-accent-emerald/10 border border-accent-emerald/30 text-accent-emerald text-xs font-semibold uppercase tracking-wider rounded-full">
            Agenda
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            Event Agenda
          </h2>

          <p className="max-w-xl mx-auto text-muted">
            A day of insights, recognition & meaningful connections
          </p>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
          className="divide-y divide-border-soft"
        >
          {agendaItems.map((item, index) => {
            const expandable = Boolean(item.description);

            if (!expandable) {
              return (
                <div key={item.id} className="py-5">
                  <div className="grid md:grid-cols-[180px_1fr] gap-4">
                    <span className="font-mono text-muted">{item.time}</span>
                    <h3 className="font-medium">{item.title}</h3>
                  </div>
                </div>
              );
            }

            return (
              <AccordionItem
                key={item.id}
                value={`agenda-${index}`}
                className="border-none"
              >
                <AccordionTrigger className="group py-5 hover:no-underline [&>svg]:hidden">
                  <div className="grid md:grid-cols-[180px_1fr] gap-4 text-left">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-accent-emerald">
                        {item.time}
                      </span>
                      <svg
                        className="h-4 w-4 text-muted transition-transform group-data-[state=open]:rotate-90"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                  </div>
                </AccordionTrigger>

                <AccordionContent>
                  <div className="md:grid md:grid-cols-[180px_1fr] gap-4">
                    <div />
                    <div className="bg-panel-soft rounded-lg p-6">
                      <RenderDescription description={item.description!} />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
