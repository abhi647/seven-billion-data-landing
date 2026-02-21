import { Link } from "react-router-dom";
import { ArrowRight, TrendingDown, TrendingUp } from "lucide-react";

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-gray-50 text-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Top Section: Social Proof & Logos */}
        <div className="text-center mb-24 animate-fade-in-up">
          <p className="font-display text-2xl lg:text-3xl font-light text-navy mb-10">
            Join 150+ Enterprise Brands Running on <em className="italic text-primary">Seven Billion Data</em>
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <img src="/image 46.png" alt="Client Logo 1" className="w-28 md:w-36 h-10 md:h-12 object-contain mix-blend-multiply" />
             <img src="/image 80.png" alt="Client Logo 2" className="w-28 md:w-36 h-10 md:h-12 object-contain mix-blend-multiply" />
             <img src="/image 81.png" alt="Client Logo 3" className="w-28 md:w-36 h-10 md:h-12 object-contain mix-blend-multiply" />
             <img src="/image 82.png" alt="Client Logo 4" className="w-28 md:w-36 h-10 md:h-12 object-contain mix-blend-multiply hidden md:block" />
          </div>
        </div>

        {/* --- CASE STUDY #1 --- */}
        <div className="mb-24">
            <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                <div className="relative z-10">
                    <p className="font-body text-primary font-medium uppercase tracking-widest text-sm mb-2">Case Study #1</p>
                    <h3 className="font-display text-3xl font-light text-navy mb-2">60% Faster Monthly Closing Time</h3>
                    <p className="font-body text-gray-500 text-lg mb-8 font-light">National FMCG Brand (₹800 Cr+ Revenue)</p>

                    <div className="space-y-6 text-gray-700 font-body leading-relaxed mb-10">
                        <p>
                            <strong className="text-navy">The Problem:</strong> Before partnering with us, this FMCG giant had their ERP, distributor, and secondary sales systems running in complete silos. Their leadership struggled with visibility—monthly closing was a nightmare, taking 15–20 days purely due to manual, Excel-based data consolidation. They had absolutely no single version of the truth for revenue, stock, or promotions, leading to delayed board decisions and missed market opportunities.
                        </p>
                        <p>
                            <strong className="text-navy">The Solution & Result:</strong> We implemented the FMCG Decision Engine™, building a central enterprise data warehouse with automated pipelines connecting their ERP and secondary sales data. Within 120 days, we rolled out a one-click executive dashboard delivering real-time revenue vs. target tracking, region-wise sales, and inventory health. The result? Monthly closing time was slashed by 60%, and leadership now runs reviews off a single, fully-governed BI layer.
                        </p>
                    </div>

                    <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <p className="text-sm font-bold text-teal-800 uppercase tracking-widest mb-1">Impact Delivered</p>
                            <p className="text-2xl font-display font-bold text-teal-700">60% Reduction in Closing Time in 120 Days</p>
                        </div>
                        <Link to="/apply" className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-body text-base font-semibold hover:bg-teal-700 transition-all shadow-md">
                            I Want a Similar BI Setup <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        {/* --- CASE STUDY #2 --- */}
        <div className="mb-24">
            <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-50 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                <div className="relative z-10">
                    <p className="font-body text-cyan-600 font-medium uppercase tracking-widest text-sm mb-2">Case Study #2</p>
                    <h3 className="font-display text-3xl font-light text-navy mb-2">Eliminated Stock-out Blind Spots Regionally</h3>
                    <p className="font-body text-gray-500 text-lg mb-8 font-light">Regional FMCG Challenger (₹250 Cr Revenue)</p>

                    <div className="space-y-6 text-gray-700 font-body leading-relaxed mb-10">
                        <p>
                            <strong className="text-navy">The Problem:</strong> This rapidly growing regional FMCG brand was suffering from severe growing pains. Sales teams were sending data in entirely different formats depending on their region. This fragmented data caused extremely poor demand visibility, resulting in frequent, costly stock-outs in high-demand areas while simultaneously overstocking in slower regions. Forecasting was essentially done on guesswork using static spreadsheets.
                        </p>
                        <p>
                            <strong className="text-navy">The Solution & Result:</strong> We deployed Phases 1 & 2 of the FMCG Decision Engine (Data Foundation + Infrastructure Build). We standardized their KPIs and automated both sales and inventory dashboards across all regional branches. Within 90 days, we dramatically improved their forecast accuracy. They eliminated stock-out blind spots completely and stopped severe revenue leakage by catching supply chain bottlenecks weeks earlier than before.
                        </p>
                    </div>

                    <div className="bg-cyan-50 p-6 rounded-2xl border border-cyan-100 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <p className="text-sm font-bold text-cyan-800 uppercase tracking-widest mb-1">Impact Delivered</p>
                            <p className="text-2xl font-display font-bold text-cyan-700">Zero Stock-out Blind Spots in 90 Days</p>
                        </div>
                        <Link to="/apply" className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-600 border border-cyan-500 text-white font-body text-base font-semibold hover:bg-cyan-700 transition-all shadow-md">
                            Show Me This Framework <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        {/* CTA Interstitial */}
        <div className="text-center bg-teal-50 rounded-3xl p-12 border border-teal-100 shadow-md mb-24 max-w-4xl mx-auto">
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-navy mb-6">
              Ready to stop guessing and start running on real data?
            </h3>
            <p className="font-body text-teal-900 mb-8 max-w-xl mx-auto font-light">
              We have limited capacity. Book your free Decision Tool audit to see what's possible for your FMCG brand.
            </p>
            <Link
              to="/apply"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-body font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl shadow-teal-500/20"
            >
              Book Your Free 1:1 Strategy Call
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>

        {/* --- CASE STUDY #3 --- */}
        <div>
            <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                <div className="relative z-10">
                    <p className="font-body text-blue-600 font-medium uppercase tracking-widest text-sm mb-2">Case Study #3</p>
                    <h3 className="font-display text-3xl font-light text-navy mb-2">Automated Executive Command Center</h3>
                    <p className="font-body text-gray-500 text-lg mb-8 font-light">Diversified FMCG (Multi-Plant Manufacturing)</p>

                    <div className="space-y-6 text-gray-700 font-body leading-relaxed mb-10">
                        <p>
                            <strong className="text-navy">The Problem:</strong> This multi-plant manufacturing FMCG was crippled by conflicting data. Leadership was constantly receiving contradictory numbers from finance, sales, and operations. There was zero central governance; data definitions (like 'net revenue' or 'active SKUs') differed wildly across departments. Because of these chronic data conflicts, critical board decisions were routinely delayed while analysts spent weeks doing manual rework.
                        </p>
                        <p>
                            <strong className="text-navy">The Solution & Result:</strong> We stepped in and implemented a strictly governed data warehouse combined with rigorous KPI architecture alignment across all departments. In just 4 months, we successfully rolled out an executive KPI command center featuring a standardized one-page monthly summary for the entire CXO team. Decision-making velocity improved drastically because everyone was finally working off the exact same, irrefutable numbers.
                        </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <p className="text-sm font-bold text-blue-800 uppercase tracking-widest mb-1">Impact Delivered</p>
                            <p className="text-2xl font-display font-bold text-blue-700">Replaced 15+ Reports with 1 Command Center</p>
                        </div>
                        <Link to="/apply" className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 border border-blue-500 text-white font-body text-base font-semibold hover:bg-blue-700 transition-all shadow-md">
                            I want this Command Center <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
