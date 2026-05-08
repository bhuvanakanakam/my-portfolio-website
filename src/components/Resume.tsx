"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/data";

import SkillsGraph from "@/components/SkillsGraph";

const RESUME_URL = "/resume.pdf";

// ─── Main component ───────────────────────────────────────────────
export default function Resume() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const SUMMARIES: Record<string, string> = {
    "insightsoftware|Associate Software Engineer":
      "Building enterprise finance features on CALUMO — ASP.NET Core, Azure OpenAI, Microsoft Graph API.",
    "insightsoftware|Software Engineering Intern":
      "Backend APIs and services for CDM Next, a financial data management platform.",
    "Nebula|Software Engineering Intern":
      "Full-stack features in React and Node.js, shipped end-to-end.",
    "Nexus Info|Machine Learning Intern":
      "ML classification models and data pipelines in Python and scikit-learn.",
  };

  const workEntries = experience.filter(
    (e) => e.type === "work" && e.company !== "Mahindra University"
  );
  const eduEntry = experience.find((e) => e.type === "education");

  return (
    <motion.section
      ref={ref}
      id="resume"
      className="px-6 md:px-16 py-20 border-t border-[#ddd0bc]/60"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Ghost number */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-[7rem] md:text-[9rem] font-light leading-none text-[#ede4d4] mb-[-2rem] select-none pointer-events-none"
          aria-hidden="true"
        >
          05
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="font-body text-xs tracking-[0.3em] uppercase text-[#9e8468] mb-4 relative"
        >
          Resume
        </motion.p>

        {/* Heading + Download CV */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-light text-[#2a2118]"
          >
            Experience &amp; skills.
          </motion.h2>

          <motion.a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group inline-flex items-center gap-3 border border-[#2a2118] text-[#2a2118] px-6 py-3 font-body text-sm tracking-[0.15em] uppercase hover:bg-[#2a2118] hover:text-[#faf8f5] transition-all duration-300 self-start sm:self-auto shrink-0"
            data-cursor-hover
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
              className="transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden="true">
              <path d="M7 1v8M3.5 5.5 7 9l3.5-3.5M2 11h10"
                stroke="currentColor" strokeWidth="1.2"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download CV
          </motion.a>
        </div>

        {/* ── EXPERIENCE ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mb-4"
        >
          <p className="font-body text-[10px] tracking-[0.28em] uppercase text-[#9e8468] mb-8">
            Experience
          </p>
        </motion.div>

        <div className="mb-0">
          {workEntries.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.07 }}
              className={`flex gap-8 py-8 border-b border-[#ede4d4] ${
                entry.current
                  ? "border-l-2 border-l-[#c4a882] pl-4 -ml-4 md:-ml-[1.125rem]"
                  : ""
              }`}
            >
              {/* Left block */}
              <div className="w-36 md:w-48 shrink-0">
                <p className="font-body text-xs tracking-wide text-[#9e8468] uppercase leading-relaxed mb-1">
                  {entry.period}
                </p>
                <p className="font-body text-sm font-medium text-[#2a2118] leading-snug mb-0.5">
                  {entry.company}
                </p>
                <p className="font-body text-xs text-[#9e8468]">
                  {entry.location}
                </p>
              </div>

              {/* Right block */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                  <h3 className="font-display text-xl font-light text-[#2a2118] leading-snug">
                    {entry.role}
                  </h3>
                  <span
                    className="font-body text-[9px] tracking-widest uppercase px-2 py-0.5 font-medium"
                    style={{ background: "rgba(196,168,130,0.12)", color: "#9e8468" }}
                  >
                    {entry.initials}
                  </span>
                  {entry.current && (
                    <span
                      className="font-body text-[9px] tracking-widest uppercase px-2 py-0.5"
                      style={{ background: "rgba(196,168,130,0.15)", color: "#9e8468" }}
                    >
                      Current
                    </span>
                  )}
                </div>

                {(() => {
                  const summary = SUMMARIES[`${entry.company}|${entry.role}`];
                  return summary ? (
                    <p className="font-body font-light text-[#6b5744] text-sm leading-relaxed">
                      {summary}
                    </p>
                  ) : null;
                })()}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── EDUCATION ──────────────────────────────────────────── */}
        {eduEntry && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.55 }}
            className="mt-16"
          >
            <p className="font-body text-[10px] tracking-[0.28em] uppercase text-[#9e8468] mb-8">
              Education
            </p>

            <div className="bg-[#f5f0e8] rounded-lg px-8 py-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                {/* Left: institution info */}
                <div>
                  <div className="flex items-baseline gap-3 mb-1">
                    <span
                      className="font-body text-[9px] tracking-widest uppercase px-2 py-0.5 font-medium"
                      style={{ background: "rgba(196,168,130,0.18)", color: "#9e8468" }}
                    >
                      {eduEntry.initials}
                    </span>
                    <h3 className="font-display text-lg font-light text-[#2a2118]">
                      {eduEntry.role}
                    </h3>
                  </div>
                  <p className="font-body text-sm text-[#6b5744] mb-0.5">
                    {eduEntry.company}
                    <span className="mx-2 text-[#ddd0bc]">·</span>
                    {eduEntry.location}
                  </p>
                  <p className="font-body text-xs text-[#9e8468] uppercase tracking-wide">
                    {eduEntry.period}
                  </p>
                </div>

                {/* Right: achievement pills */}
                <div className="flex flex-wrap gap-2 sm:shrink-0">
                  {["Top 10 of batch", "4-Year Merit Scholar"].map((label) => (
                    <span
                      key={label}
                      className="font-body text-[11px] px-3 py-1 rounded-full border border-[#c4a882] text-[#9e8468] whitespace-nowrap"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Note */}
              <p className="font-body font-light text-[#6b5744] text-sm leading-relaxed mt-4 border-t border-[#ddd0bc]/60 pt-4">
                Bachelor of Technology in Computer Science. Strong focus on distributed
                systems, machine learning, and systems programming.
              </p>
            </div>
          </motion.div>
        )}

        {/* ── SKILLS ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-16"
        >
          <p className="font-body text-[10px] tracking-[0.28em] uppercase text-[#9e8468] mb-8">
            Skills
          </p>
          <SkillsGraph />
        </motion.div>

      </div>
    </motion.section>
  );
}
