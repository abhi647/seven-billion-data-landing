import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, XCircle, TrendingUp } from "lucide-react";

const objections = [
  {
    objection: "We tried building this internally, but IT took 8 months and the dashboards were unusable.",
    reality: "Internal IT teams are brilliant at infrastructure, but they aren't <strong class='text-teal-700'>commercial data specialists</strong>. We <em>only</em> build for FMCG. We bring pre-built data models for secondary sales, distributor margins, and inventory tracking, which is why our rollout takes 90-120 days, not absolute years."
  },
  {
    objection: "We use a big consulting firm (Big 4) and we still don't have a single source of truth.",
    reality: "Big consultancies charge for the <em>process</em> (hours billed), not the <em>outcome</em>. We deploy a specific framework, the FMCG Decision Engine. You aren't paying for juniors to learn on your dime; you're getting a <strong class='text-teal-700'>proven system implemented by veterans</strong> with zero bloated retainer fees."
  },
  {
    objection: "Our data is too messy. Distributors send manual Excel files. It's impossible to automate.",
    reality: "We hear this <em>every</em> time. <strong>Messy data is our starting line.</strong> We specialize in building automated ingestion pipelines that clean, standardize, and map unstructured Excel files into a governed data warehouse before it ever hits a dashboard."
  }
];

const WhyUs = () => {
    return (
        <section id="why-us" className="py-24 bg-white text-foreground overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                
                {/* Objections Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="font-display text-4xl lg:text-5xl font-light text-navy mb-8 tracking-tight">
                        Why Traditional Approaches Keep <br className="hidden md:block"/> 
                        <em className="italic text-primary">FMCG Brands Stuck</em>
                    </h2>
                    <p className="font-body text-gray-600 text-lg md:text-xl font-light max-w-2xl mx-auto">
                        We hear the same frustrations from CIOs every week. Here is why the standard playbook is failing you—and what we do differently.
                    </p>
                </div>

                <div className="space-y-6">
                    {objections.map((obj, i) => (
                        <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                            {/* Desktop/Tablet Layout */}
                            <div className="hidden md:flex gap-6 max-w-5xl mx-auto">
                                <div className="flex-[0.8] bg-red-50 rounded-2xl p-8 border border-red-100 flex flex-col justify-center shadow-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <XCircle className="text-red-500" size={24} />
                                        <h3 className="font-display text-xl font-light text-gray-900 leading-none">The Trap</h3>
                                    </div>
                                    <p className="font-body text-gray-700 italic text-lg leading-relaxed">
                                        "{obj.objection}"
                                    </p>
                                </div>

                                <div className="flex-[1.2] bg-teal-50 rounded-2xl p-8 border border-teal-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-teal-200 rounded-full blur-[60px] opacity-30 -mr-16 -mt-16 transition-opacity group-hover:opacity-60"></div>
                                    <div className="flex items-center gap-3 mb-4 relative z-10">
                                        <CheckCircle2 className="text-teal-600" size={24} />
                                        <h3 className="font-display text-xl font-light text-teal-900 leading-none">Our Reality</h3>
                                    </div>
                                    <p className="font-body text-gray-700 text-[1.1rem] leading-relaxed relative z-10 font-light" dangerouslySetInnerHTML={{ __html: obj.reality }}></p>
                                </div>
                            </div>

                            {/* Mobile Layout */}
                            <div className="md:hidden flex flex-col gap-3">
                                {/* Objection Side */}
                                <div className="flex-1 bg-red-50 rounded-2xl p-6 border border-red-100 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-red-100 p-2 rounded-lg">
                                            <XCircle className="text-red-500" size={24} />
                                        </div>
                                        <h3 className="font-display text-xl font-light text-gray-900">The Common Trap</h3>
                                    </div>
                                    <p className="font-body text-gray-700 italic text-lg leading-relaxed">
                                        "{obj.objection}"
                                    </p>
                                </div>

                                {/* Reality Side */}
                                <div className="flex-1 bg-teal-50 rounded-2xl p-6 border border-teal-100 flex flex-col justify-center relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-200 rounded-full blur-[50px] opacity-20 -mr-10 -mt-10"></div>
                                    <div className="flex items-center gap-3 mb-4 relative z-10">
                                        <div className="bg-teal-100 p-2 rounded-lg">
                                            <CheckCircle2 className="text-teal-600" size={24} />
                                        </div>
                                        <h3 className="font-display text-xl font-light text-teal-900">The Seven Billion Reality</h3>
                                    </div>
                                    <p className="font-body text-gray-700 leading-relaxed relative z-10 font-light" dangerouslySetInnerHTML={{ __html: obj.reality }}></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final Wrap-up */}
                <div className="mt-20 text-center animate-fade-in-up">
                    <div className="inline-block p-1 rounded-full bg-gradient-to-r from-gray-200 to-gray-100 mb-8">
                        <div className="bg-white rounded-full px-8 py-4 flex items-center gap-4 border border-gray-100">
                             <TrendingUp className="text-primary" size={28}/>
                             <p className="font-display text-xl text-navy font-light">
                                 We build the engine. <em className="italic text-primary">You drive the growth.</em>
                             </p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-6">
                    <Link
                        to="/apply"
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-body font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl shadow-teal-500/20"
                    >
                        Schedule A Free 1:1 Discovery Call
                        <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
