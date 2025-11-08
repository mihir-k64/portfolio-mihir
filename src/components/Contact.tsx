import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Github, Linkedin, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "mihirkatakdhond@gmail.com",
      link: "mailto:mihirkatakdhond@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9702683961",
      link: "tel:+919702683961",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India, Mumbai",
      link: "https://www.google.com/maps/place/Mumbai,+India",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background relative">
      <div className="container mx-auto max-w-5xl text-center">
        {/* Heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground max-w-xl mx-auto mt-4 text-sm md:text-base">
            Have a question, idea, or collaboration in mind? Let’s create
            something amazing together.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactItems.map((item, index) => (
            <motion.a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group block p-6 rounded-2xl bg-gradient-to-br from-[#141414] to-[#1a1a1a]
                         border border-[#2a2a2a] hover:border-primary/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]
                         transition-all duration-300 transform hover:-translate-y-1"
            >
              <div
                className="inline-flex p-4 rounded-full bg-primary/10 mb-4
                           ring-1 ring-primary/20 group-hover:ring-primary/40
                           transition-all duration-300"
              >
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{item.label}</h3>
              <p className="text-muted-foreground text-sm">{item.value}</p>
              <p className="text-xs text-muted-foreground italic mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Tap to connect instantly
              </p>
            </motion.a>
          ))}
        </div>

        {/* Contact Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            size="lg"
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-primary to-accent text-white 
                       hover:scale-105 transition-transform duration-300"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </motion.div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-8">
          <a
            href="https://github.com/mihir-k64"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mihirkatakdhond"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showForm && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowForm(false)}
            />
            {/* Form Box */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-[#0b0b12]/70 backdrop-blur-lg border border-primary/20 rounded-2xl p-8 w-full max-w-lg shadow-2xl">
                <button
                  className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
                  onClick={() => setShowForm(false)}
                >
                  <X className="h-5 w-5" />
                </button>
                <h3 className="text-2xl font-semibold text-center mb-6">Say Hello 👋</h3>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full p-3 rounded-md bg-transparent border border-gray-700 focus:border-primary outline-none text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full p-3 rounded-md bg-transparent border border-gray-700 focus:border-primary outline-none text-sm"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-md bg-transparent border border-gray-700 focus:border-primary outline-none text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full p-3 rounded-md bg-transparent border border-gray-700 focus:border-primary outline-none text-sm"
                  />
                  <textarea
                    rows={4}
                    placeholder="Message"
                    className="w-full p-3 rounded-md bg-transparent border border-gray-700 focus:border-primary outline-none text-sm resize-none"
                  ></textarea>
                  <Button
                    type="submit"
                    className="w-full mt-2 bg-gradient-to-r from-primary to-accent text-white hover:scale-[1.02] transition-transform"
                  >
                    Say Hello
                  </Button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
