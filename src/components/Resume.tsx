"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { experience } from "@/data";

import SkillsGraph from "@/components/SkillsGraph";

const RESUME_URL = "/resume.pdf";

// ─── Inline icons (no extra dep) ──────────────────────────────────
function BriefcaseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.5" y="7" width="19" height="13.5" rx="2" />
      <path d="M16 7V5.5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2V7" />
      <path d="M2.5 12.5h19" />
    </svg>
  );
}

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

// ─── Main component ───────────────────────────────────────────────
export default function Resume() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const workEntries = experience.filter(
    (e) => e.type === "work" && e.company !== "Mahindra University"
  );
  const eduEntry = experience.find((e) => e.type === "education");

  const idOf = (e: (typeof workEntries)[number]) => `${e.company}|${e.role}`;
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <motion.section
      ref={ref}
      id="resume"
      className="py-20 border-t border-[#ddd0bc]/60"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="px-6 md:px-16 max-w-6xl mx-auto">

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

        <div className="space-y-3">
          {workEntries.map((entry, i) => {
            const id = idOf(entry);
            const isOpen = openId === id;

            return (
              <motion.article
                key={id}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.07 }}
                className={`bg-[#f5f0e8] rounded-lg overflow-hidden border transition-colors ${
                  isOpen
                    ? "border-[#c9b89e]"
                    : "border-[#ddd0bc]/60 hover:border-[#c9b89e]"
                }`}
              >
                {/* ── Header row ─────────────────────────────────────── */}
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : id)}
                  aria-expanded={isOpen}
                  aria-controls={`${id}-panel`}
                  data-cursor-hover
                  className="w-full flex items-center gap-4 md:gap-5 px-5 md:px-6 py-5 text-left group"
                >
                  {/* briefcase */}
                  <span
                    className="shrink-0 grid place-items-center w-11 h-11 rounded-md text-[#9e8468]"
                    style={{ background: "rgba(196,168,130,0.18)" }}
                  >
                    <BriefcaseIcon className="w-5 h-5" />
                  </span>

                  {/* title + company */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-lg md:text-xl font-light text-[#2a2118] leading-snug">
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
                          style={{ background: "rgba(196,168,130,0.18)", color: "#9e8468" }}
                        >
                          Current
                        </span>
                      )}
                    </div>
                    <p className="font-body text-sm mt-1">
                      <span className="text-[#7d6550] font-medium">{entry.company}</span>
                      <span className="text-[#9e8468]"> · {entry.location}</span>
                    </p>
                  </div>

                  {/* date range — flush right on desktop */}
                  <span className="hidden sm:block shrink-0 font-body text-xs uppercase tracking-wide text-[#9e8468] tabular-nums">
                    {entry.period}
                  </span>

                  {/* chevron */}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="ml-1 shrink-0 grid place-items-center w-8 h-8 rounded-full border text-[#9e8468]"
                    style={{ borderColor: "rgba(196,168,130,0.45)" }}
                    aria-hidden="true"
                  >
                    <ChevronIcon className="w-4 h-4" />
                  </motion.span>
                </button>

                {/* mobile-only date */}
                <div className="sm:hidden px-5 -mt-3 pb-1 ml-[60px]">
                  <span className="font-body text-[11px] uppercase tracking-wide text-[#9e8468] tabular-nums">
                    {entry.period}
                  </span>
                </div>

                {/* ── Expanded panel ────────────────────────────────── */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`${id}-panel`}
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.34, ease: [0.22, 1, 0.36, 1] },
                        opacity: { duration: 0.22, ease: "easeOut" },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-6 pt-1">
                        {entry.summary && (
                          <blockquote className="border-l-2 border-l-[#c4a882] pl-4 mb-6 font-body italic text-sm md:text-[15px] leading-relaxed text-[#6b5744]">
                            {entry.summary}
                          </blockquote>
                        )}

                        {entry.projects && entry.projects.length > 0 && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {entry.projects.map((p) => (
                              <div
                                key={p.title}
                                className="rounded-lg border border-[#ddd0bc]/60 bg-[#faf8f5] p-5 flex flex-col gap-3"
                              >
                                {p.category && (
                                  <p className="font-body text-[10px] tracking-[0.22em] uppercase text-[#9e8468]">
                                    {p.category}
                                  </p>
                                )}

                                <h4 className="font-display text-[16px] font-light text-[#2a2118] leading-snug">
                                  {p.title}
                                </h4>

                                <p className="font-body text-[13px] leading-relaxed text-[#6b5744]">
                                  {p.description}
                                </p>

                                {p.focusAreas && p.focusAreas.length > 0 && (
                                  <p className="font-body text-[11.5px] leading-relaxed text-[#9e8468]">
                                    {p.focusAreas.map((f, idx) => (
                                      <span key={f}>
                                        {idx > 0 && (
                                          <span className="mx-1.5 text-[#c4a882]">
                                            ·
                                          </span>
                                        )}
                                        {f}
                                      </span>
                                    ))}
                                  </p>
                                )}

                                <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                                  {p.tech.map((t) => (
                                    <span
                                      key={t}
                                      className="font-body text-[10.5px] px-2.5 py-1 rounded-full"
                                      style={{
                                        background: "rgba(196,168,130,0.18)",
                                        color: "#9e8468",
                                      }}
                                    >
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
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
