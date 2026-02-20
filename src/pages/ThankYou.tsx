import { Link } from "react-router-dom";
import { CheckCircle2, Calendar, FileText, Wifi, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  {
    icon: Calendar,
    title: "Check your email for calendar invite & meeting link.",
    desc: "We've sent you a confirmation with the date, time & video call link. Please add it to your calendar.",
  },
  {
    icon: FileText,
    title: "Prepare key reports you're currently using.",
    desc: "Monthly sales reports, inventory & supply chain reports, and any existing BI dashboards or Excel sheets used by leadership.",
  },
  {
    icon: Wifi,
    title: "Ensure your internet & audio/video setup is working.",
    desc: "We typically host the call on Zoom / Google Meet. Please test your connection 5 minutes before the call.",
  },
  {
    icon: MessageSquare,
    title: "Come ready with your top 3 questions.",
    desc: `Example: "How do we integrate distributor data?", "How do we reduce month-end closing time?", "How do we build forecasting without an internal data science team?"`,
  },
];

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-teal/10 border border-teal/30 teal-glow">
              <CheckCircle2 size={48} className="text-teal" />
            </div>
          </div>

          <p className="text-teal text-sm font-medium uppercase tracking-widest mb-3">You're Confirmed</p>
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Congratulations – Your Strategy Call with{" "}
            <span className="gradient-text">Seven Billion Data</span>{" "}
            is Confirmed
          </h1>
          <p className="text-muted-foreground text-lg mb-12">
            Here's what happens next (and how to get the most value from our time together):
          </p>

          <div className="space-y-4 text-left mb-12">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-gradient-card border border-navy-border rounded-xl p-5 card-glow"
              >
                <div className="p-2.5 rounded-lg bg-teal/10 border border-teal/20 shrink-0">
                  <step.icon size={20} className="text-teal" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground text-sm mb-1">
                    {i + 1}. {step.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-card border border-teal/20 rounded-2xl p-8 teal-glow">
            <p className="text-foreground text-base leading-relaxed">
              We're excited to show you exactly how the{" "}
              <span className="text-teal font-semibold">FMCG Decision Engine™</span>{" "}
              can turn your messy enterprise data into a structured decision system — and map out a clear{" "}
              <span className="text-foreground font-semibold">90–120 day implementation path</span>{" "}
              for your organisation.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-navy-border text-muted-foreground text-sm font-medium hover:text-foreground hover:border-teal/30 transition-all"
            >
              Back to Home
            </Link>
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal/10 border border-teal/30 text-teal text-sm font-medium hover:bg-teal hover:text-navy-deep transition-all"
            >
              Book Another Session
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;
