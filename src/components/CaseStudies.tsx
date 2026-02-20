import { Link } from "react-router-dom";
import { ArrowRight, TrendingDown, TrendingUp } from "lucide-react";
import case1 from "@/assets/case1.jpg";
import case2 from "@/assets/case2.jpg";
import case3 from "@/assets/case3.jpg";

const cases = [
  {
    image: case1,
    imageAlt: "FMCG warehouse with organized inventory shelves",
    tag: "Case Study #1",
    subtitle: "National FMCG · ₹800 Cr+ Revenue",
    days: "120 days",
    metric: "60%",
    metricLabel: "Reduction in monthly closing time",
    before: [
      "ERP, distributor & sales systems running in silos.",
      "Monthly closing taking 15–20 days via manual Excel.",
      "No single version of truth for revenue, stock & promotions.",
    ],
    after: [
      "Central data warehouse with automated pipelines from ERP, distributor & secondary sales.",
      "One-click executive dashboard: revenue vs target, region-wise sales, inventory health.",
      "Monthly closing reduced 60%; leadership reviews on one BI layer.",
    ],
    cta: "I Want a Similar BI Setup",
  },
  {
    image: case2,
    imageAlt: "Indian sales manager reviewing regional data on a laptop",
    tag: "Case Study #2",
    subtitle: "Regional FMCG · ₹250 Cr Revenue",
    days: "90 days",
    metric: "0",
    metricLabel: "Stock-out blind spots after implementation",
    before: [
      "Sales teams sending data in different formats from different regions.",
      "Poor demand visibility causing frequent stock-outs & overstocking.",
      "Forecasting done on guesswork & static spreadsheets.",
    ],
    after: [
      "Implemented FMCG Decision Engine – Phase 1 & 2.",
      "Standardized KPIs & automated sales and inventory dashboards.",
      "Improved forecast accuracy; reduced revenue leakage significantly.",
    ],
    cta: "Show Me This Framework",
  },
  {
    image: case3,
    imageAlt: "Executive presenting KPI dashboard to boardroom",
    tag: "Case Study #3",
    subtitle: "Diversified FMCG · Multi-Plant Manufacturing",
    days: "4 months",
    metric: "1",
    metricLabel: "Page CXO summary replacing 15+ conflicting reports",
    before: [
      "Leadership receiving conflicting numbers from finance, sales & operations.",
      "No central governance; data definitions differed across departments.",
      "Board decisions delayed due to data conflicts and rework.",
    ],
    after: [
      "Implemented governed data warehouse + KPI architecture alignment.",
      "Rolled out executive KPI command center with one-page monthly CXO summary.",
      "Decisions now faster; everyone works off the same numbers.",
    ],
    cta: "Book Your Free 1:1 Strategy Call",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-body text-teal text-sm font-medium uppercase tracking-widest mb-3">Proven Results</p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-navy mb-4">
            Join FMCG Brands Streamlining Decisions with the{" "}
            <em className="not-italic gradient-text">FMCG Decision Engine™</em>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Real outcomes from real enterprise implementations — not generic BI projects.
          </p>
        </div>

        <div className="space-y-10">
          {cases.map((c, i) => (
            <div
              key={i}
              className={`grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-md transition-all ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Image */}
              <div className="relative h-64 lg:h-auto min-h-[280px] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
                {/* Metric badge */}
                <div className="absolute bottom-5 left-5">
                  <div className="bg-teal text-primary-foreground rounded-xl px-4 py-3 inline-block">
                    <p className="font-display text-3xl font-bold leading-none">{c.metric}</p>
                    <p className="font-body text-xs mt-1 opacity-90">{c.metricLabel}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="bg-card p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-body text-xs font-semibold px-3 py-1 rounded-full bg-teal-light text-teal border border-teal/20">{c.tag}</span>
                    <span className="font-body text-xs text-muted-foreground">{c.subtitle}</span>
                    <span className="font-body text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground ml-auto shrink-0">In {c.days}</span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <div className="flex items-center gap-1.5 mb-3">
                        <TrendingDown size={13} className="text-red-500" />
                        <h4 className="font-body text-xs font-semibold text-red-500 uppercase tracking-wider">Before</h4>
                      </div>
                      <ul className="space-y-2.5">
                        {c.before.map((b, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                            <span className="font-body text-sm text-muted-foreground leading-snug">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-3">
                        <TrendingUp size={13} className="text-teal" />
                        <h4 className="font-body text-xs font-semibold text-teal uppercase tracking-wider">After</h4>
                      </div>
                      <ul className="space-y-2.5">
                        {c.after.map((a, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
                            <span className="font-body text-sm text-muted-foreground leading-snug">{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border">
                  <Link
                    to="/apply"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-light border border-teal/30 text-teal font-body text-sm font-semibold hover:bg-teal hover:text-primary-foreground transition-all"
                  >
                    {c.cta}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
