"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { posts } from "@/lib/posts";

const featured = posts[0];

export default function Blog() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id="blog"
      className="py-28 md:py-36 border-t border-[#ddd0bc]/60 bg-[#f5f0e8]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="px-6 md:px-16 max-w-6xl mx-auto">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-[7rem] md:text-[9rem] font-light leading-none text-[#c9b89e]/50 mb-[-2rem] select-none pointer-events-none"
          aria-hidden="true"
        >
          04
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="font-body text-xs tracking-[0.3em] uppercase text-[#9e8468] mb-4 relative"
        >
          Writing
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-light text-[#2a2118] mb-14 relative"
        >
          How I build, learn, and work.
        </motion.h2>

        {/* Featured post — single card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="group mb-12"
        >
          <Link href={`/writing/${featured.slug}`} className="flex gap-0" data-cursor-hover>
            {/* Accent bar */}
            <div className="w-1 shrink-0 rounded-sm mr-8 bg-[#c4a882] transition-all duration-300 group-hover:w-1.5" />
            <div className="flex-1 min-w-0 py-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-body text-[11px] tracking-widest text-[#9e8468] uppercase">
                  {featured.date}
                </span>
                <span className="text-[#ddd0bc] text-xs select-none">·</span>
                <span className="font-body text-[11px] text-[#b59f84]">
                  {featured.readTime} read
                </span>
                {featured.tags && featured.tags.length > 0 && (
                  <div className="flex gap-1.5 ml-1">
                    {featured.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-[9px] tracking-widest uppercase text-[#9e8468] border border-[#ddd0bc] px-1.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-[#2a2118] leading-tight mb-4 group-hover:text-[#7d6550] transition-colors duration-200">
                {featured.title}
              </h3>
              {featured.excerpt && (
                <p className="font-body font-light text-[#6b5744] text-sm leading-[1.85] max-w-2xl mb-5">
                  {featured.excerpt}
                </p>
              )}
              <span className="font-body text-xs tracking-[0.2em] uppercase text-[#9e8468] group-hover:text-[#2a2118] transition-colors duration-200 flex items-center gap-2">
                Read →
              </span>
            </div>
          </Link>
        </motion.div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link
            href="/writing"
            className="font-body text-xs tracking-[0.28em] uppercase text-[#9e8468] hover:text-[#2a2118] transition-colors duration-200 flex items-center gap-2"
            data-cursor-hover
          >
            View all writing →
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
