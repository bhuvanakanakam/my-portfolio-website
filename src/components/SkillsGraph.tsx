"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Server, Monitor, BrainCircuit, Cloud } from "lucide-react";

type Category = {
  label: string;
  icon: React.ElementType;
  skills: string[];
};

const categories: Category[] = [
  {
    label: "Backend",
    icon: Server,
    skills: [
      "C#",
      "ASP.NET Core",
      ".NET 8",
      "Node.js",
      "FastAPI",
      "Python",
      "SQL",
    ],
  },
  {
    label: "Frontend",
    icon: Monitor,
    skills: [
      "TypeScript",
      "JavaScript",
      "React.js",
      "Next.js",
      "HTML/CSS",
      "Framer Motion",
    ],
  },
  {
    label: "ML & AI",
    icon: BrainCircuit,
    skills: [
      "PyTorch",
      "scikit-learn",
      "Transformers (HuggingFace)",
      "XLM-RoBERTa",
      "NumPy",
      "NLP",
      "Computer Vision",
      "Azure OpenAI",
    ],
  },
  {
    label: "Data & Cloud",
    icon: Cloud,
    skills: [
      "Azure",
      "AWS",
      "SQL Server",
      "MongoDB",
      "MySQL",
      "Microsoft Graph API",
      "Git",
      "CI/CD",
    ],
  },
];

export default function SkillsGraph() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {categories.map((cat, ci) => {
        const Icon = cat.icon;
        return (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.05 * ci }}
            className="group rounded-xl border border-[#ddd0bc]/70 bg-[#f5f0e8] p-6 flex flex-col items-center justify-start gap-4 min-h-[140px] text-center hover:border-[#c4a882] hover:bg-[#ede4d4]/50 transition-colors duration-200"
          >
            {/* Icon */}
            <Icon
              size={28}
              strokeWidth={1.5}
              stroke="#9e8468"
              className="shrink-0"
            />

            {/* Domain label */}
            <p className="font-body text-sm tracking-[0.2em] uppercase font-medium text-[#5e4c3e]">
              {cat.label}
            </p>

            {/* Skill pills */}
            <div className="flex flex-wrap justify-center gap-1 mt-1">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-body text-[10px] px-2 py-0.5 rounded-full bg-[#ede4d4] text-[#7d6550] border border-[#c9b89e]/60 whitespace-nowrap"
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
