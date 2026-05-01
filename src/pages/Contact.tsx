import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto py-16">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-3 text-primary-foreground/80 max-w-2xl">
            We'd love to hear about your project. Get in touch with our team today.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-16 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="section-title">Get in touch</h2>
          <div className="section-divider" />
          <div className="space-y-5">
            <div className="card-bordered flex gap-4">
              <span className="h-11 w-11 rounded-md bg-primary text-primary-foreground grid place-items-center shrink-0">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="font-heading font-semibold text-primary">Address</div>
                <p className="text-sm text-muted-foreground mt-1">
                  Prem Electricals and Construction Pvt. Ltd.<br />
                  Kopay Junction, Kopay, Jaffna, Sri Lanka
                </p>
              </div>
            </div>
            <div className="card-bordered flex gap-4">
              <span className="h-11 w-11 rounded-md bg-primary text-primary-foreground grid place-items-center shrink-0">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="font-heading font-semibold text-primary">Phone</div>
                <p className="text-sm mt-1 space-x-3">
                  <a href="tel:+94778048143" className="text-link">+94 77 804 8143</a>
                  <a href="tel:+94212232676" className="text-link">+94 21 223 2676</a>
                </p>
              </div>
            </div>
            <div className="card-bordered flex gap-4">
              <span className="h-11 w-11 rounded-md bg-primary text-primary-foreground grid place-items-center shrink-0">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="font-heading font-semibold text-primary">Email</div>
                <p className="text-sm mt-1 flex flex-col">
                  <a href="mailto:premelectrical7@gmail.com" className="text-link">premelectrical7@gmail.com</a>
                  <a href="mailto:premelectricalp@yahoo.com" className="text-link">premelectricalp@yahoo.com</a>
                </p>
              </div>
            </div>
            <div className="card-bordered flex gap-4">
              <span className="h-11 w-11 rounded-md bg-primary text-primary-foreground grid place-items-center shrink-0">
                <Globe className="h-5 w-5" />
              </span>
              <div>
                <div className="font-heading font-semibold text-primary">Website</div>
                <a href="https://www.prem.lk" className="text-link text-sm">www.prem.lk</a>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="card-bordered space-y-4 self-start">
          <h2 className="font-heading font-semibold text-xl text-primary">Send us a message</h2>
          <div>
            <label className="text-sm font-medium" htmlFor="name">Name</label>
            <input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1 w-full border border-input rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1 w-full border border-input rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="message">Message</label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1 w-full border border-input rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button type="submit" className="w-full bg-accent text-accent-foreground py-3 rounded-md font-medium hover:opacity-90 transition">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
