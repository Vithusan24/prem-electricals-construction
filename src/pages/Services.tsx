import { Zap, Droplets, Camera, Building2, Flame, Sun, Wind, Wrench } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Electrical Services",
    items: [
      "Complete Wiring (Single & Three Phase)",
      "Panel Boards & Industrial Electrical Work",
      "Generator Installation",
      "Lightning Protection Systems",
    ],
  },
  {
    icon: Droplets,
    title: "Plumbing",
    items: ["Cold Water Line Plumbing", "Hot Water Systems", "Full Plumbing Solutions"],
  },
  {
    icon: Camera,
    title: "CCTV & Networking",
    items: ["CCTV Installation", "Networking & Intercom Systems", "Public Address Systems"],
  },
  {
    icon: Building2,
    title: "Construction & Interior",
    items: ["Luxury Home Construction", "Interior Designing", "Ceiling & Wood Works", "Landscaping"],
  },
  {
    icon: Flame,
    title: "Fire Protection & Detection",
    items: ["Fire Alarm Systems", "Sprinkler & Suppression", "Detection & Monitoring"],
  },
  {
    icon: Wind,
    title: "HVAC",
    items: ["Air Conditioning", "Ventilation Design", "Maintenance Services"],
  },
  {
    icon: Sun,
    title: "Solar Energy Solutions",
    items: ["Rooftop Solar", "On-Grid & Off-Grid Systems", "Solar Maintenance"],
  },
  {
    icon: Wrench,
    title: "Maintenance",
    items: ["Annual Maintenance Contracts", "Emergency Repairs", "Preventive Inspections"],
  },
];

const Services = () => {
  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto py-16">
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="mt-3 text-primary-foreground/80 max-w-2xl">
            Complete engineering and construction solutions, delivered to international standards.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article key={s.title} className="card-bordered">
              <span className="inline-grid place-items-center h-12 w-12 rounded-md bg-primary text-primary-foreground mb-4">
                <s.icon className="h-5 w-5" />
              </span>
              <h2 className="font-heading font-semibold text-lg text-primary">{s.title}</h2>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {s.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent">›</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
