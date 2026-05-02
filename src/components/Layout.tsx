import { Link, NavLink, Outlet } from "react-router-dom";
import { Menu, X, Zap, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import SocialLinks from "./SocialLinks";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top bar */}
      <div className="hidden md:block bg-primary text-primary-foreground text-xs">
        <div className="container mx-auto flex justify-between items-center py-2">
          <div className="flex gap-5">
            <span className="flex items-center gap-1.5"><Phone className="h-3 w-3" /> +94 77 804 8143</span>
            <span className="flex items-center gap-1.5"><Mail className="h-3 w-3" /> premelectrical7@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3" /> Kopay Junction, Jaffna, Sri Lanka</span>
            <SocialLinks className="gap-2" iconClassName="text-primary-foreground/80" />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="h-10 w-10 rounded-md bg-primary text-primary-foreground grid place-items-center">
              <Zap className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="font-heading font-bold text-primary text-base">Prem Electricals</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">& Construction Pvt. Ltd.</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  cn("nav-link", isActive && "nav-link-active")
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden border-t border-border bg-background">
            <div className="container mx-auto py-3 flex flex-col">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn("py-2 px-3 rounded-md text-sm font-medium", isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:text-accent")
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground mt-16">
        <div className="container mx-auto py-12 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-9 w-9 rounded-md bg-accent grid place-items-center"><Zap className="h-5 w-5" /></span>
              <span className="font-heading font-bold">Prem Electricals</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Your Power Solution Partner — delivering quality electrical, plumbing, and construction since 2014.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-primary-foreground/80 hover:text-accent">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Electrical Services</li>
              <li>Plumbing</li>
              <li>CCTV & Networking</li>
              <li>Construction & Interior</li>
              <li>Solar & HVAC</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" /> Kopay Junction, Kopay, Jaffna, Sri Lanka</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5" /> +94 77 804 8143</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5" /> premelectrical7@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10">
          <div className="container mx-auto py-4 text-xs text-primary-foreground/70 flex flex-col md:flex-row justify-between items-center gap-3">
            <span>© {new Date().getFullYear()} Prem Electricals and Construction Pvt. Ltd.</span>
            <SocialLinks iconClassName="text-primary-foreground/80" />
            <span>www.prem.lk</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
