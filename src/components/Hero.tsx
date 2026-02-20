import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Calendar } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const benefits = [
  "Why your ERP & sales systems don't talk to each other — and what it costs you monthly",
  "A gameplan to move from Excel-based reporting to automated, governed BI",
  "Time-saving workflows to cut 70–80% of manual reporting effort",
  "A 90–120 day implementation pathway using the FMCG Decision Engine™",
];

const Hero = () => {
  return (
    <section className="relative pt-16 overflow-hidden bg-gradient-hero">
      {/* Subtle teal blob top right */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-teal-light rounded-full opacity-40 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-light rounded-full opacity-30 blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Column */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal/30 bg-teal-light text-teal text-xs font-body font-medium mb-6">
              For CIOs, IT Leaders & Digital Transformation Heads in Indian FMCG
            </div>

            <h1 className="font-display text-4xl lg:text-5xl xl:text-[3.5rem] font-semibold leading-tight text-navy mb-6">
              Turn Fragmented FMCG Data into a{" "}
              <em className="not-italic gradient-text">Single Source of Truth</em>{" "}
              in 90–120 Days
            </h1>

            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
              Implement a complete BI & Decision Intelligence system so your leadership finally gets a single, reliable view of sales, inventory & supply chain — without hiring a large internal data team or struggling with Excel-based reports.
            </p>

            <Link
              to="/apply"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-teal text-primary-foreground font-body font-semibold text-base hover:opacity-90 transition-all shadow-teal animate-glow-pulse"
            >
              Book Your Free Data Strategy Call
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right Column – Strategy Call Card */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-teal-light border border-teal/20">
                <Calendar className="text-teal" size={22} />
              </div>
              <div>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Claim Your</p>
                <h3 className="font-display font-semibold text-navy text-base">FMCG Decision Engine™ Session</h3>
              </div>
            </div>

            <p className="font-body text-muted-foreground text-sm mb-6">
              In this <span className="text-foreground font-medium">45-minute strategy call</span>, you'll get:
            </p>

            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-teal mt-0.5 shrink-0" />
                  <span className="font-body text-sm text-muted-foreground leading-snug">{b}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/apply"
              className="mt-8 w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-teal text-teal font-body font-semibold text-sm hover:bg-teal hover:text-primary-foreground transition-all"
            >
              Schedule My Free Strategy Session
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="h-px bg-border mx-6" />
    </section>
  );
};

export default Hero;
