import { Link } from "react-router-dom";
import { ArrowRight, Zap, Wrench, Camera, Building2, Flame, CheckCircle2 } from "lucide-react";
import hero from "@/assets/hero-electrical.jpg";

const features = [
  { icon: Zap, title: "Electrical", desc: "Wiring, panels, generators & lightning protection." },
  { icon: Wrench, title: "Plumbing", desc: "Cold & hot water systems, full plumbing solutions." },
  { icon: Camera, title: "CCTV & Networking", desc: "Surveillance, intercom & PA systems." },
  { icon: Building2, title: "Construction", desc: "Luxury homes, interiors & landscaping." },
  { icon: Flame, title: "Advanced Systems", desc: "Fire protection, HVAC & solar energy." },
];

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={hero} alt="Electrical engineering work" className="h-full w-full object-cover" width={1920} height={1024} />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative container mx-auto py-24 md:py-32 text-primary-foreground">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-accent text-accent-foreground px-3 py-1 rounded">
            Established 2014
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
            Your Power Solution Partner
          </h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-primary-foreground/85">
            Prem Electricals and Construction Pvt. Ltd. delivers quality Electrical, Plumbing,
            Construction, Networking and Interior Designing services across Sri Lanka.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/services" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition">
              Our Services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-primary-foreground/40 px-6 py-3 rounded-md font-medium hover:bg-primary-foreground/10 transition">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container mx-auto py-16 md:py-20 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="section-title">About Prem Electricals</h2>
          <div className="section-divider" />
          <p className="text-muted-foreground leading-relaxed">
            We are a Private Limited registered company established on 09/10/2014. We specialize in
            Electrical and Plumbing services and have expanded into Networking, Interior Designing,
            and Construction. Our skilled team is committed to delivering reliable, international-standard
            solutions.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "10+ years of trusted service",
              "International quality standards",
              "Skilled in-house engineering team",
              "End-to-end project execution",
            ].map((i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <Link to="/about" className="text-link inline-flex items-center gap-1 mt-6 font-medium">
            Learn more about us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="card-bordered text-center">
            <div className="text-4xl font-heading font-bold text-accent">10+</div>
            <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
          </div>
          <div className="card-bordered text-center bg-primary text-primary-foreground border-primary">
            <div className="text-4xl font-heading font-bold">100+</div>
            <div className="text-sm opacity-80 mt-1">Projects Delivered</div>
          </div>
          <div className="card-bordered text-center bg-primary text-primary-foreground border-primary">
            <div className="text-4xl font-heading font-bold">6</div>
            <div className="text-sm opacity-80 mt-1">Service Verticals</div>
          </div>
          <div className="card-bordered text-center">
            <div className="text-4xl font-heading font-bold text-accent">24/7</div>
            <div className="text-sm text-muted-foreground mt-1">Support</div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-secondary/50 border-y border-border">
        <div className="container mx-auto py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="section-title">What We Do</h2>
            <div className="section-divider mx-auto" />
            <p className="text-muted-foreground">
              From wiring a new home to building a complete commercial complex — we cover it all.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="card-bordered">
                <span className="inline-grid place-items-center h-11 w-11 rounded-md bg-primary text-primary-foreground mb-4">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading font-semibold text-lg text-primary">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
              </div>
            ))}
            <Link to="/services" className="card-bordered flex items-center justify-center bg-primary text-primary-foreground border-primary group">
              <span className="font-heading font-semibold flex items-center gap-2">
                View all services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto py-16 md:py-20">
        <div className="bg-primary text-primary-foreground rounded-xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold">Ready to start your next project?</h2>
            <p className="text-primary-foreground/80 mt-2">Talk to our engineering team today.</p>
          </div>
          <Link to="/contact" className="bg-accent text-accent-foreground px-7 py-3 rounded-md font-medium hover:opacity-90 transition inline-flex items-center gap-2">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
