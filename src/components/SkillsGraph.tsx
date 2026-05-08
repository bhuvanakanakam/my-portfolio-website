"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Category = {
  label: string;
  skills: string[];
};

const categories: Category[] = [
  {
    label: "Languages",
    skills: ["C#", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    label: "Frameworks & Runtimes",
    skills: ["ASP.NET Core", ".NET 8", "React.js", "FastAPI", "Node.js"],
  },
  {
    label: "ML / AI",
    skills: ["PyTorch", "scikit-learn", "Transformers", "XLM-RoBERTa", "NumPy", "NLP", "Computer Vision"],
  },
  {
    label: "Infrastructure & Tools",
    skills: ["Azure", "Azure OpenAI", "Microsoft Graph API", "SQL Server", "MongoDB", "AWS", "Git", "CI/CD"],
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
          <p className="font-body text-[9px] tracking-[0.28em] uppercase text-[#b59f84] mb-3 border-b border-[#ede4d4] pb-2">
            {cat.label}
          </p>

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
