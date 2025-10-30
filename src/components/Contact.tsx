import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Mail, label: "Email", value: "mihirkatakdhond@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91 9702683961" },
            { icon: MapPin, label: "Location", value: "India, Mumbai" },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{item.label}</h3>
              <p className="text-muted-foreground text-sm">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            <Mail className="mr-2 h-5 w-5" />
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
