import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { ReactTyped } from "react-typed"; // 👈 import this

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%),radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg">Hello, I'm</p>

            {/* 👇 Typing animation for your name */}
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              <ReactTyped
                strings={["Mihir Katakdhond", "a Full Stack Developer", "a Tech Enthusiast 🚀"]}
                typeSpeed={60}
                backSpeed={40}
                loop
              />
            </h1>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating interesting, functional web experiences.
            Specializing in modern web technologies and user-centered design.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button variant="hero" size="lg" onClick={() => scrollToSection("projects")}>
              View My Work
            </Button>

            <a
              href="https://drive.google.com/file/d/1TALsJzyJQ3lI8eBQelaqvcV9ygwW41PM/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </a>
          </div>

          <div className="flex gap-4 justify-center pt-8">
            <a
              href="https://github.com/mihir-k64"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10"
              >
                <Github className="h-5 w-5" />
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/mihirkatakdhond"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>

            <a
              href="mailto:mihirkatakdhond@email.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
