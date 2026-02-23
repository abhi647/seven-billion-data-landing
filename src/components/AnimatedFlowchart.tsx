import { useEffect, useState } from 'react';
import { 
  FileSpreadsheet, Database, Cloud, 
  Server, GitMerge, LayoutDashboard, 
  TrendingUp, BarChart3, Fingerprint, Lock
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AnimatedFlowchart = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full bg-[#04080F] rounded-2xl overflow-hidden shadow-2xl p-6 md:p-12 text-white font-body border border-slate-800/50">
      
      {/* Dynamic Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }}
      ></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <h3 className="text-center text-slate-400 font-display font-light text-xl md:text-2xl mb-12 md:mb-20">
          The <span className="text-slate-100 font-normal">Evolution</span> of Enterprise Data Architecture
        </h3>

          {/* Main Diagram Area */}
          <div className="relative w-full flex flex-col lg:flex-row items-center justify-between mt-12 mb-20 z-10 px-4 md:px-0">
            
            {/* STAGE 1: THE CHAOS (Left Node) */}
            <div className={`relative w-full lg:w-[260px] flex-shrink-0 transition-all duration-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              
              {/* Floating Header */}
              <div className="lg:absolute lg:bottom-[100%] lg:left-0 lg:mb-8 mb-4 lg:w-[300px]">
                 <p className="text-red-400 text-xs font-bold tracking-[0.2em] uppercase">Current State: Chaos</p>
              </div>

              {/* The Visual Node (Grid Core) */}
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center bg-slate-900/50 border border-red-500/20 p-4 rounded-xl shadow-[0_0_15px_rgba(239,68,68,0.05)] cursor-help hover:border-red-500/40 transition-colors">
                      <FileSpreadsheet className="text-red-400 mb-2" size={24} />
                      <span className="text-[10px] text-slate-400 font-medium">Excel/CSVs</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-slate-900 border-slate-700 text-slate-200">
                    <p>Scattered spreadsheets causing manual work and errors.</p>
                  </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center bg-slate-900/50 border border-orange-500/20 p-4 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.05)] cursor-help hover:border-orange-500/40 transition-colors">
                      <Database className="text-orange-400 mb-2" size={24} />
                      <span className="text-[10px] text-slate-400 font-medium">Legacy ERPs</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-slate-900 border-slate-700 text-slate-200">
                    <p>Outdated systems trapping your core operational data.</p>
                  </TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center bg-slate-900/50 border border-amber-500/20 p-4 rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.05)] cursor-help hover:border-amber-500/40 transition-colors">
                      <Cloud className="text-amber-400 mb-2" size={24} />
                      <span className="text-[10px] text-slate-400 font-medium">SaaS Tools</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-slate-900 border-slate-700 text-slate-200">
                    <p>Disparate cloud apps that don't talk to each other.</p>
                  </TooltipContent>
                </Tooltip>

                <div className="flex flex-col items-center justify-center bg-slate-900/30 border border-slate-700/50 p-4 rounded-xl">
                  <span className="text-2xl font-bold text-slate-500">+12</span>
                  <span className="text-[9px] text-slate-500 uppercase mt-1">Sources</span>
                </div>
              </div>

              {/* Floating Footer */}
              <div className="lg:absolute lg:top-[100%] lg:left-1/2 lg:-translate-x-1/2 lg:mt-6 mt-6 text-center w-full">
                 <span className="inline-block px-3 py-1 bg-red-500/10 text-red-400 text-[10px] uppercase font-bold rounded-md border border-red-500/20">Data Silos</span>
              </div>
            </div>

            {/* CONNECTION LINE 1 */}
            <div className="hidden lg:block relative flex-1 h-px bg-gradient-to-r from-red-500/30 to-primary/30 mx-4">
               <div className="absolute top-[-2.5px] w-1.5 h-1.5 rounded-full bg-red-400 animate-flow shadow-[0_0_10px_#ef4444]"></div>
               <div className="absolute top-[-2.5px] w-1.5 h-1.5 rounded-full bg-orange-400 animate-flow shadow-[0_0_10px_#f97316]" style={{ animationDelay: '1s' }}></div>
               <div className="absolute top-[-2.5px] w-1.5 h-1.5 rounded-full bg-amber-400 animate-flow shadow-[0_0_10px_#f59e0b]" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* STAGE 2: THE ENGINE (Center Node) */}
            <div className={`relative flex-shrink-0 transition-all duration-1000 delay-500 my-16 lg:my-0 ${mounted ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
              
              {/* Engine Core */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="relative w-36 h-36 rounded-3xl bg-slate-900 border border-slate-700 shadow-[0_0_30px_rgba(0,199,209,0.2)] flex flex-col items-center justify-center isolate overflow-hidden cursor-help hover:border-primary/50 transition-colors duration-300 mx-auto">
                    <div className="absolute inset-0 bg-primary/20 scale-150 animate-pulse-ring blur-xl"></div>
                    <Server className="text-primary mb-2 relative z-10" size={32} />
                    <span className="text-[10px] font-bold text-white relative z-10 tracking-widest leading-none text-center px-1">SEVEN BILLION'S<br/>DATA ENGINE</span>
                    
                    {/* Dots */}
                    <div className="absolute bottom-4 flex gap-1 z-10">
                       <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse"></div>
                       <div className="w-1.5 h-1.5 rounded-full bg-primary/80 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                       <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-slate-900 border-slate-700 text-slate-200">
                  <p>Our proprietary intelligence layer that connects, cleanses, and structures all your data.</p>
                </TooltipContent>
              </Tooltip>

              {/* Floating Footer */}
              <div className="lg:absolute lg:top-[100%] lg:left-1/2 lg:-translate-x-1/2 lg:mt-6 mt-6 w-[200px] flex justify-center text-center">
                 <Tooltip>
                   <TooltipTrigger asChild>
                     <div className="flex items-center gap-2 cursor-help group">
                       <GitMerge size={14} className="text-primary group-hover:scale-110 transition-transform" />
                       <span className="text-[9px] text-slate-400 font-bold tracking-[0.15em] uppercase group-hover:text-primary transition-colors">Transform Sequence</span>
                     </div>
                   </TooltipTrigger>
                   <TooltipContent className="bg-slate-900 border-slate-700 text-slate-200 w-48 text-center">
                     <p>Automated pipelines ensuring data is normalized and error-free.</p>
                   </TooltipContent>
                 </Tooltip>
              </div>
            </div>

            {/* CONNECTION LINE 2 */}
            <div className="hidden lg:block relative flex-1 h-px bg-gradient-to-r from-primary/30 to-emerald-500/30 mx-4">
               <div className="absolute top-[-2.5px] w-1.5 h-1.5 rounded-full bg-primary animate-flow shadow-[0_0_10px_#00C7D1]"></div>
               <div className="absolute top-[-2.5px] w-1.5 h-1.5 rounded-full bg-primary animate-flow shadow-[0_0_10px_#00C7D1]" style={{ animationDelay: '0.8s' }}></div>
               <div className="absolute top-[-2.5px] w-1.5 h-1.5 rounded-full bg-emerald-400 animate-flow shadow-[0_0_10px_#10b981]" style={{ animationDelay: '1.6s' }}></div>
            </div>

            {/* STAGE 3: THE CLARITY (Right Node) */}
            <div className={`relative w-full lg:w-[280px] flex-shrink-0 transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              
              {/* Floating Header */}
              <div className="lg:absolute lg:bottom-[100%] lg:right-0 lg:mb-8 mb-4 lg:w-[300px] text-left lg:text-right">
                 <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Future State: Clarity</p>
              </div>

              {/* Clarity Core */}
              <div className="w-full relative z-10">
                 <Tooltip>
                   <TooltipTrigger asChild>
                     <div className="bg-slate-900/80 border border-primary/30 p-5 rounded-2xl w-full shadow-[0_0_30px_rgba(0,199,209,0.1)] flex items-center gap-4 cursor-help hover:border-primary/50 transition-colors">
                       <div className="p-3 bg-primary/10 rounded-xl">
                         <LayoutDashboard className="text-primary" size={28} />
                       </div>
                       <div>
                         <p className="text-sm font-bold text-white leading-tight text-left">Single Source<br/>of Truth</p>
                         <p className="text-[10px] text-slate-400 mt-1 text-left">Real-time Executive View</p>
                       </div>
                     </div>
                   </TooltipTrigger>
                   <TooltipContent className="bg-slate-900 border-slate-700 text-slate-200">
                     <p>A unified, accurate dashboard you can trust for daily decisions.</p>
                   </TooltipContent>
                 </Tooltip>
              </div>

              {/* Floating Footer Area (Metrics & Lock) */}
              <div className="lg:absolute lg:top-[100%] lg:right-0 lg:mt-6 mt-6 w-full">
                <div className="grid grid-cols-3 gap-2 w-full mb-4">
                  <div className="flex flex-col items-center bg-slate-900/40 border border-slate-700/50 p-2 rounded-lg hover:border-primary/50 transition-colors">
                    <TrendingUp className="text-emerald-400 mb-1" size={14} />
                    <span className="text-[8px] text-slate-300 font-semibold uppercase tracking-widest">Revenue</span>
                  </div>
                  <div className="flex flex-col items-center bg-slate-900/40 border border-slate-700/50 p-2 rounded-lg hover:border-primary/50 transition-colors">
                    <BarChart3 className="text-blue-400 mb-1" size={14} />
                    <span className="text-[8px] text-slate-300 font-semibold uppercase tracking-widest">Margins</span>
                  </div>
                  <div className="flex flex-col items-center bg-slate-900/40 border border-slate-700/50 p-2 rounded-lg hover:border-primary/50 transition-colors">
                    <Fingerprint className="text-purple-400 mb-1" size={14} />
                    <span className="text-[8px] text-slate-300 font-semibold uppercase tracking-widest">Audits</span>
                  </div>
                </div>
                
                <div className="text-center flex justify-center items-center gap-2 px-3 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
                   <Lock size={12} className="text-emerald-500" />
                   <span className="text-emerald-400 text-[9px] uppercase font-bold tracking-widest">100% Data Confidence</span>
                </div>
              </div>
            </div>

          </div>
      </div>
    </div>
  );
};

export default AnimatedFlowchart;
