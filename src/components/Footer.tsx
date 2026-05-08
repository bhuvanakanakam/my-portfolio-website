"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const contactLinks = [
  {
    label: "Email",
    value: "bkanakam03@gmail.com",
    href: "mailto:bkanakam03@gmail.com",
    cta: "Write",
  },
  {
    label: "LinkedIn",
    value: "bhuvana-kanakam",
    href: "https://linkedin.com/in/bhuvana-kanakam",
    cta: "Connect",
  },
  {
    label: "GitHub",
    value: "bhuvanakanakam",
    href: "https://github.com/bhuvanakanakam",
    cta: "Browse code",
  },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer ref={ref} className="w-full bg-[var(--beige-50)] border-t border-[var(--beige-300)] px-8 md:px-16 pt-24 pb-12">
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-[var(--beige-600)] mb-6"
        >
          Get in touch
        </motion.p>

        {/* Big heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-display text-[var(--text-primary)] leading-none font-light mb-16"
          style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
        >
          Let&apos;s Talk.
        </motion.h2>

        {/* Contact grid */}
        <div className="grid sm:grid-cols-3 gap-px bg-[var(--beige-200)] border border-[var(--beige-200)] mb-16">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.22 + i * 0.09 }}
              className="group flex flex-col justify-between p-8 bg-[var(--beige-100)] hover:bg-[var(--beige-200)] transition-colors duration-300 min-h-[11rem]"
              data-cursor-hover
            >
              <div>
                <p className="font-body text-[10px] tracking-[0.28em] uppercase text-[var(--beige-600)] mb-3 group-hover:text-[var(--text-secondary)] transition-colors duration-200">
                  {link.label}
                </p>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-snug break-all">
                  {link.value}
                </p>
              </div>
              <span className="font-body text-xs tracking-[0.2em] uppercase text-[var(--beige-500)] group-hover:text-[var(--text-primary)] transition-colors duration-300 mt-8 flex items-center gap-2">
                {link.cta}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </span>
            </motion.a>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-[var(--beige-300)]"
        >
          <p className="font-body text-xs tracking-[0.2em] uppercase text-[var(--beige-500)]">
            KBT
          </p>
          <p className="font-body text-xs text-[var(--beige-500)] text-center">
            Open to connecting · SWE / MLE · backend, full-stack, and ML engineering
          </p>
          <p className="font-body text-xs text-[var(--beige-500)]">
            © 2026 Bhuvana Kanakam
          </p>
        </motion.div>

      </div>
    </footer>
  );
}