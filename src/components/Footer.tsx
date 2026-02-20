import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-7 w-7 rounded bg-gradient-teal flex items-center justify-center">
                <span className="font-display text-xs font-bold text-primary-foreground">7B</span>
              </div>
              <span className="font-display text-lg font-semibold text-navy">
                Seven Billion <span className="text-teal">Data</span>
              </span>
            </div>
            <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-xs">
              FMCG Decision Intelligence implementation partner. Single source of truth in 90–120 days.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-navy text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#case-studies" className="font-body text-sm text-muted-foreground hover:text-teal transition-colors">Case Studies</a></li>
              <li><a href="#why-us" className="font-body text-sm text-muted-foreground hover:text-teal transition-colors">Why Us</a></li>
              <li><Link to="/apply" className="font-body text-sm text-muted-foreground hover:text-teal transition-colors">Book Strategy Call</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-navy text-sm mb-4">Ready to get started?</h4>
            <p className="font-body text-muted-foreground text-sm mb-4">Claim your free 45-minute FMCG Decision Engine™ strategy session.</p>
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal text-primary-foreground font-body text-sm font-semibold hover:opacity-90 transition-all"
            >
              Book Free Call
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="font-body text-muted-foreground text-xs">© 2024 Seven Billion Data. All rights reserved.</p>
          <p className="font-body text-muted-foreground text-xs">FMCG Decision Intelligence · Built for Indian Enterprise</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
