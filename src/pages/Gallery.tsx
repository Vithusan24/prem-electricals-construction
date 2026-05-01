import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import elec1 from "@/assets/gallery-electrical-1.jpg";
import elec2 from "@/assets/gallery-electrical-2.jpg";
import plumb1 from "@/assets/gallery-plumbing-1.jpg";
import plumb2 from "@/assets/gallery-plumbing-2.jpg";
import constr1 from "@/assets/gallery-construction-1.jpg";
import constr2 from "@/assets/gallery-construction-2.jpg";

type Category = "Electrical" | "Plumbing" | "Construction";

interface GalleryItem {
  title: string;
  category: Category;
  image: string;
  description: string;
}

const items: GalleryItem[] = [
  {
    title: "Bank of Ceylon — Kopay",
    category: "Electrical",
    image: elec1,
    description:
      "Complete internal wiring, distribution board installation and lighting design for the branch upgrade.",
  },
  {
    title: "Mega Mall — Jaffna",
    category: "Electrical",
    image: elec2,
    description:
      "High-voltage transformer setup and main distribution panel for the commercial complex.",
  },
  {
    title: "Jetwing Hotel — Jaffna",
    category: "Plumbing",
    image: plumb1,
    description:
      "Full hot & cold water piping network using copper and PVC across guest floors and service areas.",
  },
  {
    title: "NSR Wedding Hall",
    category: "Plumbing",
    image: plumb2,
    description:
      "Premium sanitary fixtures, drainage and water-supply systems for restrooms and kitchen blocks.",
  },
  {
    title: "Jaffna Cultural Center",
    category: "Construction",
    image: constr1,
    description:
      "Civil works including structural support, scaffolding management and finishing for the landmark project.",
  },
  {
    title: "SS Complex — Jaffna",
    category: "Construction",
    image: constr2,
    description:
      "Modern commercial building delivered turnkey — from foundation to glass facade and interior fit-out.",
  },
];

const filters: Array<"All" | Category> = ["All", "Electrical", "Plumbing", "Construction"];

const Gallery = () => {
  const [active, setActive] = useState<"All" | Category>("All");

  const visible = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.category === active)),
    [active],
  );

  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto py-16">
          <h1 className="text-4xl md:text-5xl font-bold">Project Gallery</h1>
          <p className="mt-3 text-primary-foreground/80 max-w-2xl">
            Explore a visual showcase of our work across electrical, plumbing and construction services.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium border border-border transition-colors",
                active === f
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground hover:text-accent",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((item) => (
            <article
              key={item.title}
              className="border border-border rounded-lg overflow-hidden bg-card transition-shadow hover:shadow-lg flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={`${item.title} — ${item.category} project by Prem Electricals`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <span className="text-xs uppercase tracking-wider font-semibold text-accent">
                  {item.category}
                </span>
                <h2 className="font-heading font-semibold text-lg text-primary mt-1">
                  {item.title}
                </h2>
                <p className="text-sm text-muted-foreground mt-2 flex-1">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No projects in this category yet.</p>
        )}
      </section>
    </div>
  );
};

export default Gallery;
