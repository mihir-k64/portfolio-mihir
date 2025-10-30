import { Card } from "@/components/ui/card";

const Achievements = () => {
  const highlights = [
    {
      title: "Hacktoberfest Contributor 2024",
      organization: "GITHUB",
      description: "Recognized for outstanding contributions to open source",
    },
    {
      href:"https://media.istockphoto.com/id/1160945754/vector/achievements-icon-symbol-in-outline-style-creative-sign-from-human-resources-icons.jpg?s=1024x1024&w=is&k=20&c=mtTlOQlUDjAzGfrFecmm8FN3UrRzrzyW3S2lx_1hZoo="
    },
    {
      title: "400+ Coding Problems Solved across multiple platforms",
      organization: "Leetcode, CodeChef, HackerRank",
      description: "Demonstrating strong grasp of DSA and problem-solving skills",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
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
