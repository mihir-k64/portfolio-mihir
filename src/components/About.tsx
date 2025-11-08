import { Award, GraduationCap, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import "/src/index.css";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "MHT-CET",
      value: "99.79 Percentile",
      description:
        "Secured in the top percentile among over lakhs of candidates in Maharashtra.",
    },
    {
      icon: GraduationCap,
      title: "CGPA",
      value: "8.63 / 10",
      description:
        "Maintaining a strong academic performance throughout B.Tech in Computer Engineering at VJTI.",
    },
    {
      icon: Trophy,
      title: "JEE Mains",
      value: "98.43 Percentile",
      description:
        "Achieved a competitive national-level percentile among tens of thousands of applicants.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-b from-background via-background/95 to-background"
    >
      {/* Subtle glowing background accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[160px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-3 text-foreground">About Me</h2>
          <div className="h-1 w-28 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Turning ideas into interactive digital experiences through code and
            design.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-xl"
          >
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              <span className="inline-block animate-wave">👋</span>! I'm{" "}
              <span className="text-primary font-semibold">Mihir Katakdhond</span>, a{" "}
              <span className="text-accent font-medium">Computer Science Engineer</span> from{" "}
              <span className="text-foreground/90 font-semibold">
                Veermata Jijabai Technological Institute (VJTI)
              </span>
              , driven by a deep passion for{" "}
              <span className="text-blue-400 font-medium">Frontend</span>,{" "}
              <span className="text-green-400 font-medium">Backend</span>, and{" "}
              <span className="text-purple-400 font-medium">
                scalable software systems
              </span>
              . My journey in tech has been fueled by{" "}
              <span className="text-primary/90 font-medium">curiosity</span> and{" "}
              <span className="text-accent/90 font-medium">
                continuous learning
              </span>
              . I aim to craft projects that not only function flawlessly but also{" "}
              <span className="text-blue-300 font-medium">
                delight and empower users
              </span>
              .
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-balance mt-6">
              As a{" "}
              <span className="text-primary font-semibold">
                MERN Stack Developer
              </span>
              , I specialize in building{" "}
              <span className="text-accent font-medium">
                intelligent, scalable
              </span>
              , and{" "}
              <span className="text-blue-400 font-medium">user-centric</span>{" "}
              applications. Leveraging{" "}
              <span className="text-cyan-400 font-semibold">React</span> for
              dynamic interfaces and{" "}
              <span className="text-green-400 font-semibold">Node.js</span> with{" "}
              <span className="text-lime-400 font-semibold">Express</span> and{" "}
              <span className="text-emerald-400 font-semibold">MongoDB</span> for
              robust backends, I create seamless full-stack experiences. I’m
              passionate about{" "}
              <span className="text-primary/90 font-medium">
                integrating modern tech
              </span>{" "}
              — from{" "}
              <span className="text-purple-400 font-medium">AI automation</span>{" "}
              to{" "}
              <span className="text-indigo-400 font-medium">intuitive UI/UX</span>{" "}
              — to push the boundaries of what{" "}
              <span className="text-accent font-semibold">modern web apps</span>{" "}
              can do.
            </p>
          </motion.div>

          {/* Right Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid gap-8"
          >
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card/40 backdrop-blur-md border border-border/40 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_var(--color-primary)/20]"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-2xl font-bold text-primary mb-1">
                      {item.value}
                    </p>
                    <p className="text-muted-foreground text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
