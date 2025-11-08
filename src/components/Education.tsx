import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "VJTI, Mumbai",
      period: "2023 - 2027",
      description: "CGPA: 8.63 / 10 (Till Sem 4)",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Khar Education Society, Mumbai",
      period: "2021 - 2023",
      description:
        "Grades: HSC: 76.14% | MHT-CET: 99.79 percentile | JEE-MAINS: 98.43 percentile",
    },
    {
      degree:
        "International General Certificate of Secondary Education (IGCSE)",
      institution: "Podar International School, Mumbai",
      period: "2015 - 2021",
      description: "Grades: 8 A* & 1 A",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-24 px-6 bg-gradient-to-b from-background via-background/95 to-background"
    >
      {/* Background glow (aesthetic depth) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-5xl">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-3 text-foreground">Education</h2>
          <div className="h-1 w-28 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey of continuous learning and academic excellence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (timeline spine) */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-0 md:pl-24"
              >
                {/* Timeline node (communicable visual cue) */}
                <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background hidden md:block shadow-[0_0_12px_rgba(99,102,241,0.4)]" />

                {/* Card */}
                <div className="bg-card/40 backdrop-blur-md p-6 rounded-xl border border-border/40 hover:shadow-[0_0_25px_var(--color-primary)/25] transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 md:hidden">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>

                    <div className="flex-1">
                      {/* Degree and Period (Hierarchy) */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-foreground">
                          {item.degree}
                        </h3>
                        <span className="text-sm text-accent/90 font-medium">
                          {item.period}
                        </span>
                      </div>

                      {/* Institution (Contrast emphasis) */}
                      <p className="text-primary font-medium mb-2 text-lg">
                        {item.institution}
                      </p>

                      {/* Description (Functional clarity) */}
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
