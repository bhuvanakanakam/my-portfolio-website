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
      ".NET 8",
      "ASP.NET Core",
      "Node.js",
      "Python",
      "SQL",
    ],
  },
  {
    label: "Frontend",
    icon: Monitor,
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "HTML/CSS",
    ],
  },
  {
    label: "ML & AI",
    icon: BrainCircuit,
    skills: [
      "PyTorch",
      "scikit-learn",
      "Hugging Face Transformers",
      "Azure OpenAI",
      "NLP",
      "Computer Vision",
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
      "CI/CD",
      "Microsoft Graph API",
    ],
  },
];

export default function SkillsGraph() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="border-t border-[#ddd0bc]/60">
      {categories.map((cat, ci) => {
        const Icon = cat.icon;
        return (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.07 * ci }}
            className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-3 md:gap-10 py-7 border-b border-[#ddd0bc]/60 items-start"
          >
            {/* Domain label */}
            <div className="flex items-center gap-3">
              <Icon
                size={16}
                strokeWidth={1.5}
                stroke="#9e8468"
                className="shrink-0"
              />
              <p className="font-body text-xs tracking-[0.25em] uppercase font-medium text-[#5e4c3e]">
                {cat.label}
              </p>
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-body text-[11px] tracking-wide text-[#7d6550] border border-[#ddd0bc] px-2.5 py-1 whitespace-nowrap hover:border-[#b59f84] hover:text-[#2a2118] transition-colors duration-200"
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
