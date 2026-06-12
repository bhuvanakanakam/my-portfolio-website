"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const SHOW_CMU = false;

const TYPE_PHRASES = [
  "I build what won't let go.",
  "Backend to browser.",
  "Data in, clarity out.",
  "Deep work, shipped.",
];

const TYPE_SPEED = 60; // ms per character typed
const DELETE_SPEED = 35; // ms per character deleted
const HOLD_FULL = 2400; // pause with full phrase on screen
const HOLD_EMPTY = 500; // pause before typing the next phrase

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  // Start typing once entrance animations are done (~900ms)
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 900);
    return () => clearTimeout(t);
  }, []);

  // Type → hold → delete → hold → next phrase, forever
  useEffect(() => {
    if (!started) return;

    const phrase = TYPE_PHRASES[phraseIndex];
    const delay = deleting
      ? charIndex === 0
        ? HOLD_EMPTY
        : DELETE_SPEED
      : charIndex === phrase.length
        ? HOLD_FULL
        : TYPE_SPEED;

    const t = setTimeout(() => {
      if (!deleting) {
        if (charIndex < phrase.length) setCharIndex((c) => c + 1);
        else setDeleting(true);
      } else if (charIndex > 0) {
        setCharIndex((c) => c - 1);
      } else {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % TYPE_PHRASES.length);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [started, charIndex, deleting, phraseIndex]);

  const typedText = TYPE_PHRASES[phraseIndex].slice(0, charIndex);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-start justify-end px-6 md:px-16 pb-20 md:pb-24 overflow-x-clip">
      {/* Large decorative letter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute top-1/2 right-0 -translate-y-1/2 select-none pointer-events-none z-0"
        aria-hidden="true"
      >
        <span className="font-display text-[22vw] font-light text-[#ede4d4] leading-none tracking-tight">
          KBT
        </span>
      </motion.div>

      {/* Horizontal rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
        className="absolute top-[42%] left-0 right-0 h-px bg-[#ddd0bc]/60"
      />

      <div className="relative z-10">
        {/* Overline */}
        <div className="overflow-hidden mb-6">
          <motion.p
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="font-body text-sm tracking-[0.25em] uppercase text-[#9e8468] font-medium"
          >
            Software Engineer · Backend, Data &amp; Applied AI{SHOW_CMU && " · CMU Master's in Information Systems, 2026"}
          </motion.p>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.08] text-[#2a2118] tracking-tight break-words max-w-full">
          {/* Line 1 — slides up at 0.68s */}
          <div className="overflow-hidden leading-[1.12]">
            <motion.div
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            >
              Hi, I&apos;m Bhuvana.
            </motion.div>
          </div>

          {/* Line 2 — slides up at 0.8s, typewriter starts at 1.8s */}
          <div className="overflow-visible leading-[1.12]">
            <motion.div
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
            >
              <span className="italic text-[#9e8468]">
                {typedText}
              </span>
              <span className="hero-type-cursor text-[#2a2118]">|</span>
            </motion.div>
          </div>
        </h1>

        {/* Sub copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
          className="font-body font-light text-[#6b5744] text-base md:text-lg mt-8 max-w-lg leading-relaxed"
        >
          Backend systems, AI tooling, and the production bugs I trace at midnight{SHOW_CMU && ", incoming grad at CMU"}.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
          className="flex items-center gap-6 mt-10"
        >
          <button
            onClick={scrollToProjects}
            className="font-body text-sm tracking-[0.15em] uppercase border border-[#2a2118] text-[#2a2118] px-7 py-3 hover:bg-[#2a2118] hover:text-[#faf8f5] transition-all duration-300"
            data-cursor-hover
          >
            View Work
          </button>
          <button
            onClick={() =>
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-body text-sm tracking-[0.15em] uppercase text-[#6b5744] hover:text-[#2a2118] transition-colors group flex items-center gap-2"
            data-cursor-hover
          >
            About me
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes heroBlink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }
        .hero-type-cursor {
          animation: heroBlink 1s steps(1, end) infinite;
        }
      `}</style>
    </section>
  );
}
