import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const outcomes = [
  "Single source of truth for leadership",
  "Faster monthly closing & board reporting",
  "Better demand & supply visibility",
  "Stronger forecasting & ML use cases",
];

const Apply = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    revenue: "",
    role: "",
    situation: "",
    challenge: "",
    outcome: [] as string[],
    timeline: "",
    budget: "",
    success: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleOutcome = (item: string) => {
    setForm((prev) => ({
      ...prev,
      outcome: prev.outcome.includes(item)
        ? prev.outcome.filter((o) => o !== item)
        : [...prev.outcome, item],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/thank-you");
  };

  const inputClass =
    "w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/20 transition-all";
  const labelClass = "block font-body text-sm font-medium text-foreground mb-1.5";
  const selectClass = `${inputClass} appearance-none cursor-pointer`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="font-body text-teal text-sm font-medium uppercase tracking-widest mb-3">Free Strategy Session</p>
            <h1 className="font-display text-3xl lg:text-4xl font-semibold text-navy mb-4">
              Schedule a Free 1:1{" "}
              <em className="not-italic gradient-text">FMCG Decision Engine™</em>{" "}
              Discovery Call
            </h1>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              In this 45-minute session, we'll audit your current data & BI setup and map a 90–120 day pathway to a single source of truth for your leadership team.
            </p>
          </div>

          {/* What we'll cover */}
          <div className="bg-teal-light border border-teal/20 rounded-2xl p-6 mb-10">
            <h3 className="font-display font-semibold text-navy mb-4 text-sm uppercase tracking-wider">On this call, we will:</h3>
            <ul className="space-y-3">
              {[
                "Audit your current ERP, distributor & sales data flows and identify key integration gaps.",
                "Review your existing reports, dashboards & KPIs and highlight where they fail business users.",
                "Outline a BI infrastructure blueprint: data warehouse, ETL/ELT, governance & KPI alignment.",
                "Share how the FMCG Decision Engine™ framework can be deployed over the next 3–4 months.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-teal mt-0.5 shrink-0" />
                  <span className="font-body text-sm text-navy-soft">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 shadow-card space-y-6">
            <h3 className="font-display font-semibold text-navy text-xl mb-2">Tell us about yourself</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>First Name *</label>
                <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder="First name" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Last Name *</label>
                <input name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Last name" className={inputClass} />
              </div>
            </div>

            <div>
              <label className={labelClass}>Work Email *</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" className={inputClass} />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Company Name *</label>
                <input name="company" value={form.company} onChange={handleChange} required placeholder="Company name" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Annual Revenue Bracket *</label>
                <select name="revenue" value={form.revenue} onChange={handleChange} required className={selectClass}>
                  <option value="">Select revenue range</option>
                  <option value="50-250">₹50–250 Cr</option>
                  <option value="250-750">₹250–750 Cr</option>
                  <option value="750-2000">₹750–2,000 Cr</option>
                  <option value="2000+">₹2,000 Cr+</option>
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass}>Your Role *</label>
              <select name="role" value={form.role} onChange={handleChange} required className={selectClass}>
                <option value="">Select your role</option>
                <option value="cio">CIO</option>
                <option value="cdo">CDO</option>
                <option value="vp-it">VP-IT</option>
                <option value="digital-transformation">Head – Digital Transformation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Which best describes your current data situation? *</label>
              <select name="situation" value={form.situation} onChange={handleChange} required className={selectClass}>
                <option value="">Select a situation</option>
                <option value="excel">We rely heavily on manual Excel-based reporting.</option>
                <option value="integration">Our systems (ERP, distributor, sales) are not well integrated.</option>
                <option value="low-adoption">We have BI tools, but adoption is low.</option>
                <option value="conflict">Leadership often gets conflicting numbers from different teams.</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>What's your biggest challenge with data & reporting right now? *</label>
              <textarea
                name="challenge"
                value={form.challenge}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Describe your main challenge..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <div>
              <label className={labelClass}>What outcomes are you aiming for in the next 6–12 months?</label>
              <div className="grid sm:grid-cols-2 gap-2 mt-2">
                {outcomes.map((o) => (
                  <button
                    key={o}
                    type="button"
                    onClick={() => toggleOutcome(o)}
                    className={`text-left px-3 py-2.5 rounded-lg border font-body text-sm transition-all ${
                      form.outcome.includes(o)
                        ? "border-teal bg-teal-light text-teal"
                        : "border-border text-muted-foreground hover:border-teal/40"
                    }`}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className={labelClass}>How soon are you looking to start? *</label>
              <select name="timeline" value={form.timeline} onChange={handleChange} required className={selectClass}>
                <option value="">Select timeline</option>
                <option value="immediately">Immediately (this quarter)</option>
                <option value="3-6months">Within 3–6 months</option>
                <option value="6plus">6+ months</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Do you have an allocated budget for BI / Data / Analytics this year? *</label>
              <select name="budget" value={form.budget} onChange={handleChange} required className={selectClass}>
                <option value="">Select budget status</option>
                <option value="approved">Yes, already approved</option>
                <option value="planned">Planned but not yet approved</option>
                <option value="exploring">No specific budget yet, exploring</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>What would make this project a clear success 12 months from now?</label>
              <textarea
                name="success"
                value={form.success}
                onChange={handleChange}
                rows={3}
                placeholder="Describe your definition of success..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-teal text-primary-foreground font-body font-semibold text-base hover:opacity-90 transition-all shadow-teal"
            >
              Confirm My Strategy Call
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Apply;
