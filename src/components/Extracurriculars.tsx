"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "1",     label: "Guinness World Record" },
  { value: "$300K", label: "raised for disaster relief" },
  { value: "1st",   label: "Dell Hack-to-Hire · 2023" },
];

const allAwards = [
  "Guinness World Record · 2019",
  "AP State Gold, Fencing · 2019–22",
  "National Athlete, Modern Pentathlon · 2019",
  "1st Place, Dell Hack-to-Hire · 2023",
  "Raised $300K for Chennai Flood Relief · 2016",
  "Student Body President · 2019–20",
];

export default function Extracurriculars() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id="awards"
      className="py-28 md:py-36 border-t border-[var(--beige-300)]/60 bg-[var(--beige-100)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="px-6 md:px-16 max-w-6xl mx-auto">

        {/* Section ghost number */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-[7rem] md:text-[9rem] font-light leading-none text-[#ede4d4] mb-[-2rem] select-none pointer-events-none"
          aria-hidden="true"
        >
          03
        </motion.p>

        {/* Newspaper masthead */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-between items-end border-b-2 border-[var(--text-primary)] pb-3 mb-3"
        >
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[var(--text-secondary)]">
            Beyond the Code
          </span>
          <h2 className="font-display text-3xl text-[var(--text-primary)] leading-none">
            Awards &amp; achievements.
          </h2>
          <span className="font-body text-[11px] text-[var(--text-secondary)]">
            Vol. 1 · April 2026
          </span>
        </motion.div>

        {/* Second thin rule */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="border-b border-[var(--beige-300)] mb-6"
        />

        {/* Two-column body */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-[auto_1fr] gap-0 divide-x divide-[var(--beige-300)]"
        >
          {/* Column 1 — Stats */}
          <div className="pr-6 flex flex-col gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="border-l-2 border-[var(--accent)] pl-3">
                <p className="font-display text-4xl text-[var(--text-primary)] leading-none">
                  {stat.value}
                </p>
                <p className="font-body text-[12px] text-[var(--text-secondary)] mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Column 2 — Editorial copy */}
          <div className="px-6 space-y-4">
            <p className="font-body text-[10px] tracking-widest text-[var(--beige-500)] uppercase mb-2">
              Andhra Pradesh, India —
            </p>
            <p className="font-body text-[13px] leading-relaxed text-[var(--text-secondary)]">
              I&apos;ve always shown up fully for everything I&apos;ve taken on. Track meets,
              fencing bouts, a dance stage large enough to break a world record. I competed
              nationally in Modern Pentathlon, earned AP State gold in fencing across three
              consecutive years, and was featured in the regional press during my high school
              years. I was also elected Student Body President — not something I campaigned
              for lightly. The same instinct that pushes through a final lap is the same one
              that ships a feature at midnight.
            </p>
            <p className="font-body text-[13px] leading-relaxed text-[var(--text-secondary)]">
              I held a merit scholarship for all four years of my undergraduate degree. Outside
              of athletics and academics, I helped coordinate a fundraising effort that raised
              $300K for Chennai flood relief — one of the more grounding things I&apos;ve done,
              and a reminder that showing up matters beyond any scoreboard or sprint demo.
            </p>
          </div>
        </motion.div>

      </div>

      {/* Ticker — full bleed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="overflow-hidden mt-8 border-y border-[var(--beige-200)] py-3"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="flex w-max animate-ticker whitespace-nowrap">
          {[...allAwards, ...allAwards].map((item, i) => (
            <span
              key={i}
              className="mx-8 font-body text-[12px] tracking-wide text-[var(--text-secondary)] font-light"
