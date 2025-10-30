import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ICode",
      description:
        "An innovative web platform designed to empower developers by providing a centralized ecosystem for tracking, learning, and collaborating. The platform integrates multiple coding platforms and development tools to offer a holistic progress tracking experience.",
      tags: ["React", "Node.js", "MongoDB", "GraphSQL"],
      image:
        "https://www.hostinger.com/in/tutorials/wp-content/uploads/sites/52/2021/08/learn-coding-online-for-free.png",
      github: "https://github.com/mihir-k64/iCode",
      demo: "https://icode-anti.vercel.app",
    },
    {
      title: "Finance Management App",
      description:
        "An AI-powered finance assistant that helps users analyze their financial records by generating interactive visual reports. It enables users to better understand their spending habits and investments, providing clear insights to make smarter financial decisions.",
      tags: ["Next.js", "React", "Express.js", "Tailwind"],
      image:
        "https://static.vecteezy.com/system/resources/previews/001/974/655/non_2x/financial-management-banner-vector.jpg",
      github: "https://github.com/mihir-k64/Hackaurora",
      demo: "https://github.com/mihir-k64/Hackaurora",
    },
    {
      title: "Internship Recommendation System",
      description:
        "An AI-powered system that recommends suitable internships by analyzing users region of stay, skills, and interests to match them with relevant internships in a sea full of opportunities.",
      tags: ["React", "Express.js", "LightGBM", "MongoDB"],
      image:
        "https://images.shiksha.com/mediadata/images/articles/1741585129phpQ9KUdL.jpeg",
      github: "https://github.com/kevinzb56/SIH-2025",
      demo: "https://github.com/kevinzb56/SIH-2025",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-[1.02] bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons Section */}
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>

                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
