"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "@/data";

const INITIAL_VISIBLE = 6;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: "easeOut" as const },
  }),
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const activeProject = projects.find((p) => p.id === active);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_VISIBLE);
  const hasMore = projects.length > INITIAL_VISIBLE;

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="py-28 md:py-36 border-t border-[#ddd0bc]/60"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="px-6 md:px-16 max-w-6xl mx-auto">
        <div className="mb-16">
          {/* Large decorative number */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="font-display text-[7rem] md:text-[9rem] font-light leading-none text-[#ede4d4] mb-[-2rem] select-none pointer-events-none"
            aria-hidden="true"
          >
            01
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-body text-xs tracking-[0.3em] uppercase text-[#9e8468] mb-4 relative"
          >
            Selected Work
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-light text-[#2a2118] relative"
          >
            Things I&apos;ve built.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              onClick={() => setActive(project.id)}
              className="group relative overflow-hidden border border-[#ddd0bc]/70 hover:border-[#b59f84] transition-all duration-300 bg-[#faf8f5] hover:shadow-[4px_4px_0px_#ddd0bc]"
              style={{ cursor: "none" }}
              data-cursor-hover
            >
              {/* Color swatch top */}
              <div
                className="h-32 w-full relative overflow-hidden"
                style={{ backgroundColor: project.color }}
              >
                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #9e8468 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                {/* Year tag */}
                <span className="absolute top-4 right-4 font-body text-[10px] tracking-widest text-[#7d6550] bg-[#faf8f5]/70 px-2 py-1">
                  {project.year}
                </span>
              </div>

              {/* Card content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-medium text-[#2a2118] mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="font-body font-light text-[#6b5744] text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-[10px] tracking-widest uppercase text-[#9e8468] border border-[#ddd0bc] px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                  <button
                    className="font-body text-xs tracking-[0.15em] uppercase text-[#2a2118] border-b border-[#2a2118] pb-0.5 hover:text-[#9e8468] hover:border-[#9e8468] transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActive(project.id);
                    }}
                    data-cursor-hover
                  >
                    Read story →
                  </button>
                  {(project as { live?: string }).live ? (
                    <a
                      href={(project as { live?: string }).live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-xs tracking-[0.15em] uppercase text-[#9e8468] hover:text-[#2a2118] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                      data-cursor-hover
                    >
                      Live ↗
                    </a>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-xs tracking-[0.15em] uppercase text-[#9e8468] hover:text-[#2a2118] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                      data-cursor-hover
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show more / less */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={() => setShowAll((v) => !v)}
              className="font-body text-sm tracking-[0.2em] uppercase text-[#6b5744] border border-[#ddd0bc] px-8 py-3 hover:border-[#b59f84] hover:text-[#2a2118] transition-all duration-300"
              data-cursor-hover
            >
              {showAll
                ? `Show less ↑`
                : `Show all ${projects.length} projects ↓`}
            </button>
          </motion.div>
        )}
      </div>

      {/* Story modal */}
      <AnimatePresence>
        {active && activeProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#2a2118]/40 backdrop-blur-sm z-50"
              onClick={() => setActive(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed inset-x-4 bottom-0 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl bg-[#faf8f5] z-50 p-8 md:p-12 border-t-2 border-[#c4a882] max-h-[80vh] overflow-y-auto"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-5 right-5 font-body text-xs tracking-widest text-[#9e8468] hover:text-[#2a2118] transition-colors uppercase"
                data-cursor-hover
              >
                Close ×
              </button>

              <p className="font-body text-xs tracking-[0.25em] uppercase text-[#9e8468] mb-3">
                {activeProject.year} · Project story
              </p>
              <h3 className="font-display text-3xl font-light text-[#2a2118] mb-6 leading-tight">
                {activeProject.title}
              </h3>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-[10px] tracking-widest uppercase text-[#9e8468] border border-[#ddd0bc] px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="font-body font-light text-[#6b5744] leading-relaxed text-sm whitespace-pre-line mb-8">
                {activeProject.story}
              </p>

              <div className="flex items-center gap-4">
                {(activeProject as { live?: string }).live && (
                  <a
                    href={(activeProject as { live?: string }).live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-body text-sm tracking-[0.15em] uppercase border border-[#2a2118] text-[#2a2118] px-6 py-2.5 hover:bg-[#2a2118] hover:text-[#faf8f5] transition-all duration-300"
                    data-cursor-hover
         
                  >
                    View Live ↗
                  </a>
                )}
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-body text-sm tracking-[0.15em] uppercase text-[#9e8468] hover:text-[#2a2118] transition-colors"
                  data-cursor-hover
                >
                  GitHub ↗
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
