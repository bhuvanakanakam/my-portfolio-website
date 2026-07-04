"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
// NOTE: re-add BarChart3 to this import if you re-enable the Data Science category below
import { Code, Monitor, BrainCircuit, Cloud } from "lucide-react";

type Category = {
  label: string;
  icon: React.ElementType;
  skills: string[];
};

const categories: Category[] = [
  {
    label: "AI & Machine Learning",
    icon: BrainCircuit,
    skills: [
      "Large Language Models",
      "Generative AI",
      "Fine-tuning",
      "Deep Learning",
      "Neural Networks",
      "Reinforcement Learning",
      "Computer Vision",
      "NLP",
      "Hugging Face",
      "LangChain",
      "Azure OpenAI",
    ],
  },
  {
    label: "Programming",
    icon: Code,
    skills: [
      "Python",
      "C#",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "LaTeX",
    ],
  },
  // {
  //   label: "Data Science",
  //   icon: BarChart3,
  //   skills: [
  //     "Feature Engineering",
  //     "Statistical Modeling",
  //     "Clustering",
  //     "Data Visualization",
  //     "Jupyter",
  //     "Matplotlib",
  //     "Spark",
  //   ],
  // },
  {
    label: "Web Development",
    icon: Monitor,
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "ASP.NET Core",
      ".NET 8",
      "Flask",
      "FastAPI",
      "Angular",
      "HTML/CSS",
      "MongoDB",
      "MySQL",
      "SQL Server",
    ],
  },
  {
    label: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS",
      "Docker",
      "CI/CD",
      "Git",
      "Jenkins",
      "Microsoft Graph API",
    ],
  },
];

export default function SkillsGraph() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
      {categories.map((cat, ci) => {
        const Icon = cat.icon;
        return (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.07 * ci }}
            className="rounded-lg border border-[#ddd0bc]/70 bg-[#f8f5ef] p-6 md:p-7 hover:border-[#b59f84] transition-colors duration-200"
          >
            {/* Icon + category title */}
            <div className="flex items-center gap-3 mb-5">
              <Icon
                size={18}
                strokeWidth={1.5}
                stroke="#9e8468"
                className="shrink-0"
              />
              <p className="font-body text-sm tracking-[0.2em] uppercase font-semibold text-[#2a2118]">
                {cat.label}
              </p>
            </div>

            {/* Skill pills — wrap inside the card */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-body text-xs font-medium text-[#2a2118] border border-[#c9b89e]/70 rounded-full px-3 py-1 whitespace-nowrap bg-[#faf8f5] hover:border-[#b59f84] transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
