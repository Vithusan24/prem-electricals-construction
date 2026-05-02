import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";

type Category = "All" | "Projects" | "Events" | "Team" | "Others";

const items: { src: string; title: string; category: Exclude<Category, "All"> }[] = [
  { src: g1, title: "Electrical Panel Installation", category: "Projects" },
  { src: g2, title: "Construction Site — Jaffna", category: "Projects" },
  { src: g3, title: "CCTV & Security Setup", category: "Others" },
  { src: g4, title: "Solar Rooftop System", category: "Projects" },
  { src: g5, title: "Engineering Team Meeting", category: "Team" },
  { src: g6, title: "Hotel Lobby Interior", category: "Projects" },
  { src: g7, title: "Plumbing System Build", category: "Others" },
  { src: g8, title: "Project Inauguration", category: "Events" },
];

const categories: Category[] = ["All", "Projects", "Events", "Team", "Others"];

const Gallery = () => {
  const [filter, setFilter] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = filter === "All" ? items : items.filter((i) => i.category === filter);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? null : (i + 1) % visible.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? null : (i - 1 + visible.length) % visible.length));
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightbox, visible.length]);

  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto py-16">
          <h1 className="text-4xl md:text-5xl font-bold">Gallery</h1>
          <p className="mt-3 text-primary-foreground/80 max-w-2xl">
            A visual journey through our projects, team, and milestones.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium border transition-all",
                filter === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground border-border hover:border-accent hover:text-accent",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {visible.map((item, idx) => (
            <button
              key={item.src}
              onClick={() => setLightbox(idx)}
              className="group relative overflow-hidden rounded-lg border border-border bg-card aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 text-left text-primary-foreground">
                  <span className="text-xs uppercase tracking-wider font-semibold text-accent-foreground bg-accent px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <div className="mt-2 font-heading font-semibold">{item.title}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No items in this category yet.</p>
        )}
      </section>

      {/* Lightbox */}
      {lightbox !== null && visible[lightbox] && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            className="absolute top-4 right-4 text-white p-2 hover:text-accent"
            aria-label="Close"
          >
            <X className="h-7 w-7" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? null : (i - 1 + visible.length) % visible.length)); }}
            className="absolute left-4 text-white p-2 hover:text-accent"
            aria-label="Previous"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? null : (i + 1) % visible.length)); }}
            className="absolute right-4 text-white p-2 hover:text-accent"
            aria-label="Next"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={visible[lightbox].src}
              alt={visible[lightbox].title}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <figcaption className="text-center text-white mt-4 font-heading">
              {visible[lightbox].title}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
};

export default Gallery;
