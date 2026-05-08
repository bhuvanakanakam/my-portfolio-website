"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat =
  | { isStatic: true;  display: string;  label: string }
  | { isStatic?: false; value: number; suffix: string; label: string };

const stats: Stat[] = [
  { value: 11,  suffix: "+", label: "Projects Shipped" },
  { isStatic: true, display: "4yr",   label: "Merit Scholarship" },
  { value: 8,   suffix: "+", label: "Awards & Honors" },
  { value: 1,   suffix: "",  label: "Guinness Record" },
];

function AnimatedNumber({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    let rafId: number;
    let startTs: number | null = null;

    const step = (ts: number) => {
      if (!startTs) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [active, target]);

  return <>{count}{suffix}</>;
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="border-b border-[#ddd0bc]/60 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#ddd0bc]/50">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="py-8 md:py-10 px-6 first:pl-0 last:pr-0 text-center md:text-left"
            >
              <p className="font-display text-4xl md:text-5xl font-light text-[#2a2118] leading-none mb-2 tabular-nums">
                {stat.isStatic ? (
                  stat.display
                ) : (
                  <AnimatedNumber
                    target={stat.value}
                    suffix={stat.suffix}
                    active={inView}
                  />
                )}
              </p>
              <p className="font-body text-[10px] tracking-[0.28em] uppercase text-[#9e8468]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
