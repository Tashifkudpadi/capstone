import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { KeyThemes } from "@/components/key-themes";
import { Experience } from "@/components/experience";
import { Agenda } from "@/components/agenda";
import { Venue } from "@/components/venue";
import { Register } from "@/components/register";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-body text-main relative overflow-hidden">
      {/* Background effects */}
      {/* <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-green/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-emerald/5 rounded-full blur-[120px]" />
      </div> */}

      {/* Grid overlay */}
      {/* <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(163, 230, 180, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(163, 230, 180, 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      /> */}

      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <KeyThemes />
        <Experience />
        <Agenda />
        <Venue />
        <Register />
      </main>
      <Footer />
    </div>
  );
}
