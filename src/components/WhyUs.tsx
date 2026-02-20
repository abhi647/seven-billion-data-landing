import { Link } from "react-router-dom";
import { ArrowRight, Building2, Layers, Clock, Target, BarChart3, Users } from "lucide-react";

const reasons = [
  {
    icon: Building2,
    title: "Built for FMCG complexity, not generic BI.",
    desc: "We specialise in FMCG enterprises with fragmented systems & under-utilised BI infrastructure. We already understand your distributor, channel & SKU-level realities.",
  },
  {
    icon: Layers,
    title: "End-to-end Decision Intelligence, not just dashboards.",
    desc: "We don't stop at visualisation. We design data warehouse, ETL/ELT, governance & KPI architecture, and connect it all the way to your leadership decision workflows.",
  },
  {
    icon: Clock,
    title: "Single Source of Truth in 90–120 Days.",
    desc: "Using our FMCG Decision Engine™ framework (Data Foundation → Infrastructure Build → Insight & Decision Layer), we build a robust BI layer in 3–4 months.",
  },
  {
    icon: Target,
    title: "Business-first, technology-second approach.",
    desc: "We start with leadership KPIs & decision needs, then design the data architecture around that — so the system actually gets adopted instead of becoming another unused dashboard project.",
  },
  {
    icon: BarChart3,
    title: "Executive-friendly outputs every month.",
    desc: "You get a Monthly Executive One-Page Business Summary and a Decision Workshop with leadership so insights are turned into real commercial decisions.",
  },
  {
    icon: Users,
    title: "Technical implementation partner, not a body shop.",
    desc: "We act as your Decision Intelligence implementation partner, giving you a dedicated technical lead and structured documentation — without you needing to hire a full in-house data team.",
  },
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
        <div className="text-center mb-16">
          <p className="font-body text-teal text-sm font-medium uppercase tracking-widest mb-3">Why Seven Billion Data</p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-navy mb-4">
            Why FMCG Enterprises Partner with{" "}
            <em className="not-italic gradient-text">Seven Billion Data</em>
          </h2>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 mb-16 max-w-xl mx-auto">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-3xl font-semibold gradient-text mb-1">{s.value}</p>
              <p className="font-body text-xs text-muted-foreground leading-tight">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 shadow-card hover:border-teal/30 hover:shadow-teal transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-teal-light border border-teal/20 w-fit mb-4 group-hover:bg-teal group-hover:border-teal transition-colors">
                <r.icon size={19} className="text-teal group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-navy text-base mb-2 leading-snug">{r.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-teal text-primary-foreground font-body font-semibold text-base hover:opacity-90 transition-all shadow-teal"
          >
            Schedule A Free 1:1 Discovery Call
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
