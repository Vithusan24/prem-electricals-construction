import { MapPin } from "lucide-react";

const projects = [
  { name: "Jaffna Cultural Center", category: "Cultural" },
  { name: "Bank of Ceylon — Kopay & Nainathivu", category: "Banking" },
  { name: "Jetwing — Jaffna", category: "Hospitality" },
  { name: "Mega Mall — Jaffna", category: "Commercial" },
  { name: "British Council — Jaffna", category: "Institutional" },
  { name: "NSR Wedding Hall — Jaffna", category: "Events" },
  { name: "Singer Finance — Jaffna", category: "Corporate" },
  { name: "SS Complex — Jaffna", category: "Commercial" },
  { name: "Thelipallai Cancer Hospital", category: "Healthcare" },
  { name: "Manipay Wedding Hall", category: "Events" },
];

const Projects = () => {
  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto py-16">
          <h1 className="text-4xl md:text-5xl font-bold">Our Projects</h1>
          <p className="mt-3 text-primary-foreground/80 max-w-2xl">
            A selection of landmark projects delivered across the Northern region.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <article key={p.name} className="card-bordered group">
              <div className="flex items-start justify-between gap-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-accent">{p.category}</span>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </div>
              <h2 className="font-heading font-semibold text-lg text-primary mt-3">{p.name}</h2>
              <div className="mt-4 h-1 w-10 bg-accent rounded-full group-hover:w-20 transition-all" />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
