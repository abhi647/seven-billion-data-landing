import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Calendar, PlayCircle } from "lucide-react";
import AnimatedFlowchart from "./AnimatedFlowchart";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-background text-foreground">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-white/40"></div>
      
      {/* Simple, subtle accents instead of glowing dark mode blobs */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[700px] max-h-[600px] bg-teal-100 rounded-full opacity-60 blur-[100px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-cyan-50 rounded-full opacity-60 blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          {/* Target Audience Call Out */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-200 bg-teal-50 text-teal-800 text-sm font-body font-medium mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
            </span>
            ATTENTION: CIOs & Digital Transformation Heads in Enterprises
          </div>

          {/* Specific Benefit Driven Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-navy mb-6 tracking-tight">
            Stop Relying on <em className="italic text-primary font-light">Guesswork & Excel</em>: Build a <br className="hidden lg:block" />
            <em className="italic text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500 font-light tracking-normal">
              Single Source of Truth
            </em>
          </h1>

          {/* Subheadline (USP & Pain Points) */}
          <p className="font-body text-foreground/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            We help enterprises unify fragmented ERP, distributor, and sales operations data into 
            an automated Decision Intelligence system—without hiring an expensive internal data team.
          </p>

          <div className="flex justify-center">
            {/* CTA */}
            <Link
              to="/apply"
              className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-primary text-white font-body font-semibold text-xl hover:scale-105 transition-all duration-300 shadow-xl shadow-teal-500/20"
            >
              Book Your Free 1:1 Strategy Call
              <ArrowRight
                size={22}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* Image/B2B VSL Section */}
        <div
          className="relative mx-auto w-full max-w-5xl rounded-2xl overflow-hidden border border-gray-200 shadow-2xl mt-12 animate-fade-in-up group bg-white"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Overlay to dim VSL placeholder slightly */}
          <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>

          {/* Animated Flowchart Component */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-sm">
            <AnimatedFlowchart />
          </div>
        </div>

        {/* VSL Value Props Grid */}
        <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-white border border-gray-100 shadow-sm p-6 rounded-2xl">
                <h4 className="text-navy font-semibold mb-2 font-display text-lg">Clarity</h4>
                <p className="text-foreground/70 text-sm leading-relaxed font-body font-light">Map exactly where your data leakages are happening across supply chain and sales.</p>
            </div>
            <div className="bg-white border border-gray-100 shadow-sm p-6 rounded-2xl">
                <h4 className="text-navy font-semibold mb-2 font-display text-lg">Sustainable Gameplan</h4>
                <p className="text-foreground/70 text-sm leading-relaxed font-body font-light">A governed data architecture that scales with your business complexity.</p>
            </div>
            <div className="bg-white border border-gray-100 shadow-sm p-6 rounded-2xl">
                <h4 className="text-navy font-semibold mb-2 font-display text-lg">Time-Saving Hacks</h4>
                <p className="text-foreground/70 text-sm leading-relaxed font-body font-light">Automated ETL pipelines that instantly cut 80% of manual reporting effort.</p>
            </div>
            <div className="bg-white border border-gray-100 shadow-sm p-6 rounded-2xl">
                <h4 className="text-navy font-semibold mb-2 font-display text-lg">90-Day Pathway</h4>
                <p className="text-foreground/70 text-sm leading-relaxed font-body font-light">Step-by-step roadmap to a fully functional executive command center.</p>
            </div>
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <Link
              to="/apply"
              className="inline-flex items-center justify-center text-primary hover:text-teal-700 font-semibold underline underline-offset-4 transition-all"
            >
              Claim your 1:1 session today
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
