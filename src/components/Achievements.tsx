import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Users, Rocket } from "lucide-react";

const Achievements = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6 text-yellow-400" />,
      tag: "Open Source",
      title: "Hacktoberfest Contributor 2024",
      organization: "GitHub",
      description:
        "Recognized for outstanding contributions to open source during Hacktoberfest 2024 by actively contributing to multiple repositories.",
      color: "from-yellow-500/20 to-yellow-600/10 border-yellow-400/30",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      tag: "Leadership",
      title: "Department Head - ECELL",
      organization: "VJTI Entrepreneurship Cell",
      description:
        "Drove cross-departmental collaboration to encourage maximum participation. Managed design team interviews and built a high-performing creative unit across branches.",
      color: "from-purple-500/20 to-purple-600/10 border-purple-400/30",
    },
    {
      icon: <Rocket className="w-6 h-6 text-green-400" />,
      tag: "Coding",
      title: "400+ Coding Problems Solved",
      organization: "LeetCode • CodeChef • HackerRank",
      description:
        "Demonstrating a strong grasp of data structures, algorithms, and consistent problem-solving skills across multiple platforms.",
      color: "from-green-500/20 to-green-600/10 border-green-400/30",
    },
  ];

  return (
    <section
      id="achievements"
      className="relative py-20 px-4 bg-gradient-to-b from-[#050505] via-[#0b0b16] to-[#101010] text-white overflow-hidden"
    >
      {/* Gradient glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,212,255,0.15),transparent_70%)]"></div>

      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Achievements
        </motion.h2>

        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Recognitions that highlight leadership, open-source contribution, and problem-solving excellence
        </p>

        {/* Animated underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full mb-12"
        />

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                className={`p-6 rounded-2xl border bg-gradient-to-br ${item.color} backdrop-blur-md 
                hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <div className="p-2 rounded-full bg-white/10">{item.icon}</div>
                  <span className="text-sm px-3 py-1 bg-white/10 rounded-full text-gray-300 font-medium">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-cyan-300">{item.title}</h3>
                <p className="text-sm text-blue-400 font-medium mb-3">
                  {item.organization}
                </p>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
