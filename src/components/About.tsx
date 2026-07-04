"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import InterestsGrid from "@/components/InterestsGrid";
import SkillsGraph from "@/components/SkillsGraph";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-28 md:py-36"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="px-6 md:px-16 max-w-6xl mx-auto">
        {/* Section number */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-[7rem] md:text-[9rem] font-light leading-none text-[#ede4d4] mb-4 select-none pointer-events-none"
          aria-hidden="true"
        >
          01
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="font-body text-sm tracking-[0.25em] uppercase text-[#9e8468] font-medium mb-12 relative"
        >
          About
        </motion.p>

        {/* Bio copy */}
        <div className="max-w-2xl mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-light text-[#2a2118] leading-tight mb-8"
          >
            <span className="italic text-[#9e8468]">Fully in,</span> or not at all.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body font-light text-[#6b5744] leading-relaxed text-base mb-5"
          >
            Hi! I&apos;m Bhuvana, a software engineer focused on backend systems,
            applied AI, and infrastructure that just works. I most recently
            worked at insightsoftware, where I built enterprise finance
            software used by 120+ global clients &mdash; backend services in C#
            and .NET, frontend systems in React and TypeScript, and the Azure
            infrastructure between them.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-body font-light text-[#6b5744] leading-relaxed text-base mb-5"
          >
            What I care about most is end-to-end ownership: understanding a
            system deeply enough to change it with confidence, and leaving it
            easier to work on than I found it.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body font-light text-[#6b5744] leading-relaxed text-base"
          >
            The pattern behind everything I do is depth over dabbling. Years of
            Kuchipudi led to a Guinness World Record performance. Fencing took
            me to national championships. Four years of sustained academic work
            earned a merit scholarship and a top-10 finish in my graduating
            batch. I bring that same discipline to engineering &mdash; when a
            problem matters, I stay with it until I understand it completely.
          </motion.p>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="border-t border-[#ddd0bc]/60 pt-14 mb-24"
          id="skills"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-[#9e8468] font-medium mb-8">
            Skills
          </p>
          <SkillsGraph />
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-[#ddd0bc]/60 pt-14"
        >
          <p className="font-body text-sm tracking-[0.25em] uppercase text-[#9e8468] font-medium mb-8">
            Outside the terminal
          </p>
          <InterestsGrid />
        </motion.div>
      </div>
    </motion.section>
  );
}
