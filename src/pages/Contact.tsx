import { MapPin, Phone, Mail, Globe, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import SocialLinks from "@/components/SocialLinks";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(6, "Phone is required").max(30),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const initial = { name: "", email: "", phone: "", subject: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setErrors({});
    toast.success("Thank you! We'll get back to you shortly.");
    setForm(initial);
  };

  const field = (key: keyof typeof initial) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [key]: e.target.value }),
  });

  const inputCls = "mt-1 w-full border border-input rounded-md px-3 py-2 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary";

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

      {/* Info cards */}
      <section className="container mx-auto py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { Icon: MapPin, title: "Address", body: "Kopay Junction, Kopay,\nJaffna, Sri Lanka" },
          { Icon: Phone, title: "Phone", body: "+94 77 804 8143\n+94 21 223 2676" },
          { Icon: Mail, title: "Email", body: "premelectrical7@gmail.com\npremelectricalp@yahoo.com" },
          { Icon: Globe, title: "Website", body: "www.prem.lk" },
        ].map(({ Icon, title, body }) => (
          <div key={title} className="card-bordered text-center">
            <span className="mx-auto h-12 w-12 rounded-full bg-primary text-primary-foreground grid place-items-center mb-3">
              <Icon className="h-5 w-5" />
            </span>
            <div className="font-heading font-semibold text-primary">{title}</div>
            <p className="text-sm text-muted-foreground mt-1 whitespace-pre-line">{body}</p>
          </div>
        ))}
      </section>

      {/* Form + Map */}
      <section className="container mx-auto pb-16 grid lg:grid-cols-2 gap-8">
        <form onSubmit={submit} noValidate className="card-bordered space-y-4">
          <div>
            <h2 className="font-heading font-semibold text-2xl text-primary">Send us a message</h2>
            <div className="section-divider" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium" htmlFor="name">Name *</label>
              <input id="name" {...field("name")} className={inputCls} maxLength={100} />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="email">Email *</label>
              <input id="email" type="email" {...field("email")} className={inputCls} maxLength={255} />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="phone">Phone *</label>
              <input id="phone" type="tel" {...field("phone")} className={inputCls} maxLength={30} />
              {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="subject">Subject *</label>
              <input id="subject" {...field("subject")} className={inputCls} maxLength={150} />
              {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject}</p>}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium" htmlFor="message">Message *</label>
            <textarea id="message" rows={5} {...field("message")} className={inputCls} maxLength={1000} />
            {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-accent-foreground py-3 rounded-md font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
          >
            <Send className="h-4 w-4" /> Send Message
          </button>

          <div className="pt-3 border-t border-border flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Follow us</span>
            <SocialLinks iconClassName="text-muted-foreground" />
          </div>
        </form>

        <div className="card-bordered p-0 overflow-hidden">
          <iframe
            title="Prem Electricals location"
            src="https://www.google.com/maps?q=Kopay+Junction,+Jaffna,+Sri+Lanka&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "500px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
