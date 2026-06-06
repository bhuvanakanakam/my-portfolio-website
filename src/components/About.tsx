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
            Fully in, or not at all. That's been the pattern for most things in my
            life. I spent years learning Kuchipudi and ended up as part of a Guinness
            World Record performance. I graduated in the top 10 of my class, held a
            merit scholarship throughout college, competed nationally in fencing,
            led student initiatives, and somehow found time to pursue a dozen other
            interests along the way.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body font-light text-[#6b5744] leading-relaxed text-base"
          >
            That same mindset carries into my work. I like understanding systems,
            solving difficult problems, and building things that make a difference.
            Whether it's tracking down a stubborn bug, automating away manual work,
            or experimenting with a new idea just because it's interesting, I tend
            to go all the way down the rabbit hole. Curiosity has taken me far so
            far, and I'm not planning on stopping anytime soon.
          </motion.p>

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
