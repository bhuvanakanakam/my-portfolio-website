"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const SHOW_CMU = false;

const TYPE_PHRASES = [
  "I build things I care about.",
  "I build things that scale.",
  "I ship things that matter.",
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  // Start typing once entrance animations are done (~1700ms)
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 1700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!started) return;

    const currentPhrase = TYPE_PHRASES[phraseIndex];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < currentPhrase.length) {
      timeoutId = setTimeout(() => setCharIndex((p) => p + 1), 60);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      timeoutId = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex > 0) {
      timeoutId = setTimeout(() => setCharIndex((p) => p - 1), 35);
    } else {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((p) => (p + 1) % TYPE_PHRASES.length);
      }, 400);
    }

    return () => clearTimeout(timeoutId);
  }, [started, phraseIndex, charIndex, isDeleting]);

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
        transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
        className="absolute top-[42%] left-0 right-0 h-px bg-[#ddd0bc]/60"
      />

      <div className="relative z-10">
        {/* Overline */}
        <div className="overflow-hidden mb-6">
          <motion.p
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
            className="font-body text-xs tracking-[0.3em] uppercase text-[#9e8468]"
          >
            Software Engineer{SHOW_CMU && " · CMU Master's in Information Systems, 2026"}
          </motion.p>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.08] text-[#2a2118] tracking-tight break-words max-w-full">
          {/* Line 1 — slides up at 0.68s */}
          <div className="overflow-hidden leading-[1.12]">
            <motion.div
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.88, delay: 0.68, ease: EASE }}
            >
              Hi, I&apos;m Bhuvana.
            </motion.div>
          </div>

          {/* Line 2 — slides up at 0.8s, typewriter starts at 1.8s */}
          <div className="overflow-visible leading-[1.12]">
            <motion.div
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.88, delay: 0.8, ease: EASE }}
            >
              <span className="italic text-[#9e8468]">
                {typedText}
              </span>
              {started && <span className="hero-type-cursor text-[#9e8468]">|</span>}
            </motion.div>
          </div>
        </h1>

        {/* Sub copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
          className="font-body font-light text-[#6b5744] text-base md:text-lg mt-8 max-w-lg leading-relaxed"
        >
          Building, exploring, and figuring life out in my 20s{SHOW_CMU && ", incoming grad at CMU"}.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.22, ease: "easeOut" }}
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
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .hero-type-cursor {
          animation: heroBlink 0.7s infinite;
        }
      `}</style>
    </section>
  );
}
