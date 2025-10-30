import { Trophy, Award, Star, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "50+ Projects",
      description: "Successfully delivered",
    },
    {
      icon: Award,
      title: "10+ Certifications",
      description: "Industry recognized",
    },
    {
      icon: Star,
      title: "5 Years",
      description: "Experience",
    },
    {
      icon: Target,
      title: "100% Success",
      description: "Client satisfaction",
    },
  ];

  const highlights = [
    {
      title: "Best Developer Award 2023",
      organization: "Tech Conference",
      description: "Recognized for outstanding contributions to open source",
    },
    {
      title: "Published Technical Articles",
      organization: "Medium & Dev.to",
      description: "Over 50K+ readers across various platforms",
    },
    {
      title: "Hackathon Winner",
      organization: "National Coding Championship",
      description: "First place in web development category",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((item, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-primary font-medium mb-3">{item.organization}</p>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
