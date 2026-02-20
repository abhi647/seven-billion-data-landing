import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-navy-border bg-navy-deep/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="h-7 w-7 rounded bg-gradient-teal flex items-center justify-center">
              <span className="font-display text-xs font-bold text-navy-deep">7B</span>
            </div>
            <span className="font-display text-lg font-700 text-foreground">
              Seven Billion <span className="text-teal">Data</span>
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#case-studies" className="text-sm text-muted-foreground hover:text-teal transition-colors">Case Studies</a>
          <a href="#why-us" className="text-sm text-muted-foreground hover:text-teal transition-colors">Why Us</a>
          <Link
            to="/apply"
            className="inline-flex items-center px-4 py-2 rounded-md bg-teal text-navy-deep text-sm font-semibold hover:bg-teal-glow transition-all teal-glow"
          >
            Book Free Strategy Call
          </Link>
        </nav>

        <button
          className="md:hidden text-muted-foreground hover:text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-navy-border bg-navy-deep/95 px-6 py-4 flex flex-col gap-4">
          <a href="#case-studies" className="text-sm text-muted-foreground hover:text-teal" onClick={() => setMobileOpen(false)}>Case Studies</a>
          <a href="#why-us" className="text-sm text-muted-foreground hover:text-teal" onClick={() => setMobileOpen(false)}>Why Us</a>
          <Link
            to="/apply"
            className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-teal text-navy-deep text-sm font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            Book Free Strategy Call
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
