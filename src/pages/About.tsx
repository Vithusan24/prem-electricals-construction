import { Target, Eye, Award, Users } from "lucide-react";

const team = [
  { name: "N. Premakanthan", role: "CEO" },
  { name: "E. Rededin", role: "Managing Director" },
  { name: "S. Abitha", role: "Director & CFO" },
  { name: "S. Sree Ganathas", role: "Director" },
  { name: "S. Premila", role: "Civil Engineer" },
  { name: "T. Surender", role: "Electrical Engineer" },
];

const About = () => {
  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto py-16">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-3 text-primary-foreground/80 max-w-2xl">
            A trusted name in electrical and construction services across Sri Lanka since 2014.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="section-title">Who We Are</h2>
          <div className="section-divider" />
          <p className="text-muted-foreground leading-relaxed">
            Prem Electricals and Construction Pvt. Ltd. is a Private Limited Registered company
            established on 09/10/2014. We specialize in Electrical and Plumbing services and have
            expanded into Networking, Interior Designing, and Construction.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Our team is highly skilled and committed to delivering quality solutions that follow
            international standards.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="card-bordered">
            <Target className="h-7 w-7 text-accent" />
            <h3 className="font-heading font-semibold mt-3 text-primary">Our Mission</h3>
            <p className="text-sm text-muted-foreground mt-2">
              To raise electrical and electronic standards in the Northern region using
              international best practices.
            </p>
          </div>
          <div className="card-bordered">
            <Eye className="h-7 w-7 text-accent" />
            <h3 className="font-heading font-semibold mt-3 text-primary">Our Vision</h3>
            <p className="text-sm text-muted-foreground mt-2">
              To modernize the housing system without affecting nature.
            </p>
          </div>
          <div className="card-bordered">
            <Award className="h-7 w-7 text-accent" />
            <h3 className="font-heading font-semibold mt-3 text-primary">Quality</h3>
            <p className="text-sm text-muted-foreground mt-2">
              International standards across every project we deliver.
            </p>
          </div>
          <div className="card-bordered">
            <Users className="h-7 w-7 text-accent" />
            <h3 className="font-heading font-semibold mt-3 text-primary">Expert Team</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Skilled engineers, designers and technicians under one roof.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 border-y border-border">
        <div className="container mx-auto py-16">
          <h2 className="section-title">Leadership Team</h2>
          <div className="section-divider" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {team.map((m) => (
              <div key={m.name} className="card-bordered flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-primary text-primary-foreground grid place-items-center font-heading font-bold text-lg">
                  {m.name.split(" ").map(p => p[0]).join("").slice(0,2)}
                </div>
                <div>
                  <div className="font-heading font-semibold text-primary">{m.name}</div>
                  <div className="text-sm text-accent">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
