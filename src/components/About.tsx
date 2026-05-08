"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import InterestsGrid from "@/components/InterestsGrid";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id="about"
      className="px-6 md:px-16 py-28 md:py-36 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Section number */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="font-display text-[7rem] md:text-[9rem] font-light leading-none text-[#ede4d4] mb-[-2rem] select-none pointer-events-none"
        aria-hidden="true"
      >
        02
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="font-body text-xs tracking-[0.3em] uppercase text-[#9e8468] mb-12 relative"
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
          Something catches me and I follow it all the way in. I danced
          Kuchipudi until my feet hurt and ended up with a Guinness World Record
          before I fully understood how that happened. I graduated in the top 10
          of my batch, held a merit scholarship all four years, and still found
          time to fence nationally, fundraise seriously, and lead a student body.
          When I care about something, I don&apos;t do it lightly.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body font-light text-[#6b5744] leading-relaxed text-base"
        >
          That same energy runs through how I work. Whether I&apos;m tracing a
          production bug at midnight or building something just to see if it
          can be done, I follow the same thread. I&apos;m always looking for people
          who bring that kind of intensity to what they love. If you want to
          compare F1 strategies, talk about what drives you, or just connect,
          I&apos;m absolutely your person.
        </motion.p>
      </div>

      {/* Interests */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="border-t border-[#ddd0bc]/60 pt-14"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-[#9e8468] mb-8">
          Outside the terminal

        </p>
        <InterestsGrid />
      </motion.div>
    </motion.section>
  );
}
