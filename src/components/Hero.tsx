import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Calendar } from "lucide-react";
import heroMain from "@/assets/hero-main.jpg";

const benefits = [
  "Why your ERP & sales systems don't talk to each other — and what it costs you monthly",
  "A gameplan to move from Excel to automated, governed BI",
  "Workflows to cut 70–80% of manual reporting effort",
  "A 90–120 day implementation pathway using the FMCG Decision Engine™",
];

const Hero = () => {
  return (
    <section className="relative pt-16 overflow-hidden bg-background">
      {/* Top ambient blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-teal-light rounded-full opacity-50 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Audience tag */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal/30 bg-teal-light text-teal text-xs font-body font-medium">
            For CIOs, IT Leaders & Digital Transformation Heads in Indian FMCG
          </div>
        </div>

        {/* Headline */}
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h1 className="font-display text-4xl lg:text-5xl xl:text-[3.25rem] font-semibold leading-tight text-navy">
            Turn Fragmented FMCG Data into a{" "}
            <em className="not-italic gradient-text">Single Source of Truth</em>{" "}
            in 90–120 Days
          </h1>
        </div>
        <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto text-center mb-10">
          A complete BI & Decision Intelligence system so your leadership gets one reliable view of sales, inventory & supply chain — without a large internal data team.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-teal text-primary-foreground font-body font-semibold text-base hover:opacity-90 transition-all shadow-teal"
          >
            Book Your Free Data Strategy Call
            <ArrowRight size={18} />
          </Link>
          <a href="#case-studies" className="font-body text-sm text-muted-foreground hover:text-teal transition-colors underline underline-offset-4">
            See client results →
          </a>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-md border border-border max-w-5xl mx-auto">
          <img
            src={heroMain}
            alt="Executive team reviewing FMCG BI dashboard in boardroom"
            className="w-full object-cover h-[340px] lg:h-[460px]"
          />
          {/* Overlay strip */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-6 flex items-end justify-between gap-4">
            <p className="font-display text-primary-foreground text-base font-medium max-w-xs">
              "Finally, one dashboard our entire leadership trusts."
            </p>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal/90 text-primary-foreground text-xs font-body font-semibold shrink-0">
              <Calendar size={13} />
              Delivered in 90 days
            </div>
          </div>
        </div>

        {/* 4 benefits row below image */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-2.5 bg-card border border-border rounded-xl px-4 py-4 shadow-card">
              <CheckCircle2 size={16} className="text-teal mt-0.5 shrink-0" />
              <span className="font-body text-xs text-muted-foreground leading-snug">{b}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-border" />
    </section>
  );
};

export default Hero;
