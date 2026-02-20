import { Link } from "react-router-dom";
import { ArrowRight, Building2, Layers, Clock, Target, BarChart3, Users } from "lucide-react";
import whyUsImg from "@/assets/why-us.jpg";

const reasons = [
  { icon: Building2, title: "Built for FMCG complexity, not generic BI.", desc: "We understand your distributor, channel & SKU-level realities already." },
  { icon: Layers, title: "End-to-end Decision Intelligence.", desc: "Data warehouse, ETL/ELT, governance & KPI architecture — not just dashboards." },
  { icon: Clock, title: "Single Source of Truth in 90–120 Days.", desc: "Robust BI layer in 3–4 months, not open-ended multi-year projects." },
  { icon: Target, title: "Business-first, technology-second.", desc: "Start with leadership KPIs, then design the architecture around those needs." },
  { icon: BarChart3, title: "Executive-friendly monthly outputs.", desc: "One-page Business Summary + Decision Workshop every month." },
  { icon: Users, title: "Implementation partner, not a body shop.", desc: "Dedicated technical lead & documentation without needing a full in-house team." },
];

const stats = [
  { value: "90–120", label: "Days to Single Source of Truth" },
  { value: "70–80%", label: "Reduction in Manual Reporting" },
  { value: "60%", label: "Faster Monthly Closing" },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-body text-teal text-sm font-medium uppercase tracking-widest mb-3">Why Seven Billion Data</p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-navy mb-4">
            Why FMCG Enterprises Partner with{" "}
            <em className="not-italic gradient-text">Seven Billion Data</em>
          </h2>
        </div>

        {/* Image + Stats */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="relative rounded-2xl overflow-hidden h-80 lg:h-96 shadow-card border border-border">
            <img
              src={whyUsImg}
              alt="Data engineer working on BI pipeline dashboards"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent" />
            <div className="absolute inset-0 flex items-end p-8">
              <div className="text-primary-foreground">
                <p className="font-display text-xl font-semibold mb-1">Your dedicated implementation partner.</p>
                <p className="font-body text-sm opacity-80">Not a consulting firm. Not a body shop.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-card rounded-xl border border-border p-5 shadow-card text-center">
                  <p className="font-display text-2xl font-semibold gradient-text mb-1">{s.value}</p>
                  <p className="font-body text-xs text-muted-foreground leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Built specifically for Indian FMCG enterprises with fragmented systems. Our FMCG Decision Engine™ framework takes you from chaos to a governed, executive-ready BI layer — in a structured 3-phase engagement.
            </p>
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-teal text-primary-foreground font-body font-semibold text-base hover:opacity-90 transition-all shadow-teal"
            >
              Schedule A Free Discovery Call
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 shadow-card hover:border-teal/30 hover:shadow-teal transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-teal-light border border-teal/20 w-fit mb-4 group-hover:bg-teal group-hover:border-teal transition-colors">
                <r.icon size={18} className="text-teal group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-navy text-base mb-1.5 leading-snug">{r.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
