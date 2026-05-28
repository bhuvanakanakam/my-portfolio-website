"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Category = {
  label: string;
  description: string;
  skills: string[];
};

const categories: Category[] = [
  {
    label: "Backend",
    description: "server & systems",
    skills: ["C#", "ASP.NET Core", ".NET 8", "Node.js", "FastAPI", "Python", "SQL"],
  },
  {
    label: "Frontend",
    description: "ui & interfaces",
    skills: ["TypeScript", "JavaScript", "React.js", "Next.js", "HTML/CSS", "Framer Motion"],
  },
  {
    label: "ML & AI",
    description: "models & research",
    skills: ["PyTorch", "scikit-learn", "Transformers (HuggingFace)", "XLM-RoBERTa", "NumPy", "NLP", "Computer Vision", "Azure OpenAI"],
  },
  {
    label: "Data & Cloud",
    description: "infra & storage",
    skills: ["Azure", "AWS", "SQL Server", "MongoDB", "MySQL", "Microsoft Graph API", "Git", "CI/CD"],
  },
];

const pillStyle = "bg-[#ede4d4] text-[#5e4c3e] border border-[#c9b89e]";

export default function SkillsGraph() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
      {categories.map((cat, ci) => (
        <motion.div
          key={cat.label}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.05 * ci }}
        >
          {/* Category label */}
          <div className="border-b border-[#ede4d4] pb-2 mb-3 flex items-baseline gap-2">
            <p className="font-body text-sm tracking-[0.25em] uppercase text-[#9e8468] font-medium">
              {cat.label}
            </p>
            <p className="font-body text-xs text-[#b8a08a] normal-case tracking-normal">
              {cat.description}
            </p>
          </div>

          {/* Skill pills */}
          <div className="flex flex-wrap gap-1.5">
            {cat.skills.map((skill, si) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.05 * ci + 0.04 * si }}
                className={`font-body text-[11px] px-2.5 py-1 rounded-sm whitespace-nowrap ${pillStyle}`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
