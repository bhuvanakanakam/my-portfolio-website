"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Category = "Social Impact" | "Arts & Culture" | "Athletics" | "Tech" | "Academic";

type Award = {
  year: string;
  category: Category;
  title: string;
  description: string;
};

const awards: Award[] = [
  {
    year: "2013",
    category: "Arts & Culture",
    title: "Guinness World Record · Kuchipudi",
    description:
      "Part of the record-breaking Kuchipudi performance — danced Tharangam on the rim of a brass plate as part of one of the largest classical dance gatherings ever recorded.",
  },
  {
    year: "2016",
    category: "Social Impact",
    title: "Raised $300K for Chennai Flood Relief",
    description:
      "Coordinated a large-scale fundraising and relief initiative during the Chennai floods, helping channel resources and aid to affected communities.",
  },
  {
    year: "Jan 2019",
    category: "Athletics",
    title: "Modern Pentathlon · Seniors 2nd Place",
    description:
      "Took second at the Modern Pentathlon Seniors Championship — competing across swimming, fencing, horse riding, rifle shooting, and running among 100+ entrants.",
  },
  {
    year: "Jul 2019",
    category: "Athletics",
    title: "6th AP State Softball · Bronze",
    description:
      "Bronze medal at the Andhra Pradesh State Softball Championship — pitcher and second baseman through the run.",
  },
  {
    year: "Nov 2019",
    category: "Athletics",
    title: "27th Junior National Fencing Championship",
    description:
      "Competed at the Junior National Fencing Championship in Foil — representing Andhra Pradesh against fencers from across India.",
  },
  {
    year: "Dec 2019",
    category: "Athletics",
    title: "11th Federation Cup · National Softball",
    description:
      "Played for the Indian national softball team at the Federation Cup — pitcher and second baseman across the championship rounds.",
  },
  {
    year: "2019 · 2020 · 2022",
    category: "Athletics",
    title: "3× AP State Gold Medal · Fencing",
    description:
      "Three Gold medals at the Andhra Pradesh State Fencing Championship (U-20, Foil) across three separate years — sustained competitive performance under pressure.",
  },
  {
    year: "2021 – 2025",
    category: "Academic",
    title: "4-Year Merit Scholarship",
    description:
      "Held a full merit scholarship across all four years at Mahindra University, awarded for exceptional GPA — top 10 of the batch each academic year.",
  },
  {
    year: "Oct 2023",
    category: "Tech",
    title: "1st Place · Dell Hack-to-Hire",
    description:
      "Led the team to first at Dell's national Hack-to-Hire — built a synthetic data generation platform with schema control in a 24-hour sprint against hundreds of participants.",
  },
  {
    year: "Feb 2024",
    category: "Tech",
    title: "1st Place · Embedded Challenge",
    description:
      "Won the Mahindra University Embedded Challenge — designed an Arduino musical-note system (C, D, E, F) and a single-color pathway person counter alongside a team of three.",
  },
  {
    year: "Feb 2024",
    category: "Tech",
    title: "1st Place · UI/UX Challenge",
    description:
      "Won the Enigma Club UI/UX Challenge at Mahindra University — designed an interactive browser concept end-to-end in Figma.",
  },
];

// Subtle desaturated accents that stay inside the warm beige system.
// Each pair is (background fill, text colour) — chosen so the badge reads
// as a quiet category tag, not a UI alert.
const categoryStyles: Record<Category, { bg: string; color: string }> = {
  "Social Impact": { bg: "#ead6c0", color: "#8a5d3f" }, // warm terracotta
  "Arts & Culture": { bg: "#e6d2d6", color: "#8a5d6e" }, // dusty rose
  "Athletics": { bg: "#d8dcc8", color: "#5d6a4a" }, // muted sage
  "Tech": { bg: "#d6d4d0", color: "#6a6258" }, // warm slate
  "Academic": { bg: "#d4dce8", color: "#4a5d7a" }, // muted blue
};

const EYEBROW =
  "font-body text-sm tracking-[0.25em] uppercase text-[#9e8468] font-medium";

export default function Extracurriculars() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id="awards"
      className="py-28 md:py-36 border-t border-[var(--beige-300)]/60 bg-[var(--beige-100)] overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="px-6 md:px-16 max-w-6xl mx-auto">
        {/* Ghost Number */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-[7rem] md:text-[9rem] font-light leading-none text-[#ede4d4] mb-4 select-none pointer-events-none"
        >
          04
        </motion.p>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className={`${EYEBROW} mb-12`}
        >
          Awards
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-light text-[#2a2118] leading-tight mb-12 md:mb-16"
        >
          Awards &{" "}
          <span className="italic text-[#9e8468]">achievements</span>.
        </motion.h2>

        {/* Awards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {awards.map((award, i) => {
            const cat = categoryStyles[award.category];
            return (
              <motion.article
                key={award.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.07 }}
                className="rounded-lg border border-[#ddd0bc]/60 bg-[#faf8f5] p-6 md:p-7 flex flex-col gap-4"
              >
                {/* Year + Category */}
                <div className="flex items-center justify-between gap-3">
                  <p className="font-body text-xs tracking-[0.22em] uppercase text-[#9e8468] font-medium tabular-nums">
                    {award.year}
                  </p>
                  <span
                    className="font-body text-[10px] tracking-[0.18em] uppercase font-medium px-2.5 py-1 rounded-full whitespace-nowrap"
                    style={{ background: cat.bg, color: cat.color }}
                  >
                    {award.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl md:text-2xl font-light text-[#2a2118] leading-tight">
                  {award.title}
                </h3>

                {/* Description */}
                <p className="font-body font-light text-[#6b5744] leading-relaxed text-sm md:text-[15px]">
                  {award.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
