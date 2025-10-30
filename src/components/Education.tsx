import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "VJTI, Mumbai",
      period: "2018 - 2022",
      description: "Specialized in Software Engineering and Web Development",
    },
    {
      degree: "Full Stack Development Bootcamp",
      institution: "Tech Academy",
      period: "2022",
      description: "Intensive program covering modern web technologies",
    },
    {
      degree: "High School Diploma",
      institution: "School Name",
      period: "2014 - 2018",
      description: "Science and Mathematics focus",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className="relative pl-0 md:pl-24 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block" />
                
                <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 md:hidden">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold">{item.degree}</h3>
                        <span className="text-sm text-muted-foreground">{item.period}</span>
                      </div>
                      <p className="text-primary font-medium mb-2">{item.institution}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
