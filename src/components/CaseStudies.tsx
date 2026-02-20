import { Link } from "react-router-dom";
import { ArrowRight, TrendingDown, TrendingUp } from "lucide-react";

const cases = [
  {
    tag: "National FMCG · ₹800 Cr+ Revenue",
    days: "120 days",
    before: [
      "ERP, distributor & sales systems running in silos.",
      "Monthly closing taking 15–20 days due to manual Excel-based consolidation.",
      "Leadership had no single version of truth for revenue, stock & promotions.",
    ],
    after: [
      "Central enterprise data warehouse with automated pipelines from ERP, distributor & secondary sales.",
      "One-click executive dashboard: revenue vs target, region-wise sales, inventory health.",
      "Monthly closing time reduced by 60%; leadership reviews on a single BI layer.",
    ],
    metric: "60% reduction in monthly closing time",
    cta: "I Want a Similar BI Setup",
  },
  {
    tag: "Regional FMCG · ₹250 Cr Revenue",
    days: "90 days",
    before: [
      "Sales teams sending data in different formats from different regions.",
      "Poor demand visibility causing frequent stock-outs & overstocking.",
      "Forecasting was done on guesswork & static spreadsheets.",
    ],
    after: [
      "Implemented FMCG Decision Engine – Phase 1 & 2 (Data Foundation + Infrastructure Build).",
      "Standardized KPIs & automated sales and inventory dashboards across regions.",
      "Improved forecast accuracy and reduced revenue leakage by catching supply chain issues earlier.",
    ],
    metric: "Eliminated stock-out blind spots across all regions",
    cta: "Show Me This Framework",
  },
  {
    tag: "Diversified FMCG · Multi-Plant Manufacturing",
    days: "4 months",
    before: [
      "Leadership receiving conflicting numbers from finance, sales & operations.",
      "No central governance; data definitions differed across departments.",
      "Important board decisions delayed due to data conflicts and rework.",
    ],
    after: [
      "Implemented governed data warehouse + KPI architecture alignment.",
      "Rolled out executive KPI command center with one-page monthly summary for CXO team.",
      "Decision-making is now faster, with everyone working off the same numbers.",
    ],
    metric: "One-page CXO summary replacing 15+ conflicting reports",
    cta: "Book Your Free 1:1 Strategy Call",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-teal text-sm font-medium uppercase tracking-widest mb-3">Proven Results</p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-navy mb-4">
            Join FMCG Brands Streamlining Decisions with the{" "}
            <em className="not-italic gradient-text">FMCG Decision Engine™</em>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Real outcomes from real enterprise implementations — not generic BI projects.
          </p>
        </div>

        <div className="space-y-6">
          {cases.map((c, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-8 shadow-card hover:border-teal/30 hover:shadow-teal transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="font-body text-xs font-medium px-3 py-1 rounded-full bg-teal-light text-teal border border-teal/20">
                    Case Study #{i + 1}
                  </span>
                  <span className="font-body text-sm text-muted-foreground">{c.tag}</span>
                </div>
                <span className="font-body text-xs font-medium px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                  Delivered in {c.days}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                {/* Before */}
                <div className="bg-secondary/50 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingDown size={15} className="text-red-500" />
                    <h4 className="font-body text-xs font-semibold text-red-500 uppercase tracking-wider">Before</h4>
                  </div>
                  <ul className="space-y-3">
                    {c.before.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                        <span className="font-body text-sm text-muted-foreground leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* After */}
                <div className="bg-teal-light/60 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp size={15} className="text-teal" />
                    <h4 className="font-body text-xs font-semibold text-teal uppercase tracking-wider">After</h4>
                  </div>
                  <ul className="space-y-3">
                    {c.after.map((a, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
                        <span className="font-body text-sm text-muted-foreground leading-relaxed">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-teal" />
                  <span className="font-body text-sm font-medium text-teal">{c.metric}</span>
                </div>
                <Link
                  to="/apply"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-light border border-teal/30 text-teal font-body text-sm font-semibold hover:bg-teal hover:text-primary-foreground transition-all"
                >
                  {c.cta}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
