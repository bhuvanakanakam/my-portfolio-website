"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const scrollItems = [
  { label: "About", href: "#about" },
  // { label: "Skills", href: "#skills" },
  { label: "Work", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const prevScrollY = useRef(0);

  // timeout refs
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const showNavbarTemporarily = () => {
      // show navbar
      setHidden(false);

      // clear previous timeout
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }

      // hide again after delay
      hideTimeout.current = setTimeout(() => {
        if (window.scrollY > 100) {
          setHidden(true);
        }
      }, 1800); // visible for 1.8s
    };

    const onScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 40);

      // Always visible near top
      if (currentY < 80) {
        setHidden(false);
      }

      // scrolling UP
      else if (currentY < prevScrollY.current) {
        showNavbarTemporarily();
      }

      // scrolling DOWN
      else if (currentY > prevScrollY.current) {
        setHidden(true);
      }

      prevScrollY.current = currentY;
    };

    // show navbar when cursor goes near top
    const onMouseMove = (e: MouseEvent) => {
    const isNearTop = e.clientY <= 80;

    // detect if cursor is hovering navbar
    const navbar = document.querySelector("header");
    const isHoveringNavbar =
      navbar &&
      e.clientY <= (navbar as HTMLElement).offsetHeight + 20;

    if (isNearTop || isHoveringNavbar) {
      // show navbar
      setHidden(false);

      // clear auto hide timeout while hovering
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
    } else {
      // restart auto hide after leaving navbar
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }

      hideTimeout.current = setTimeout(() => {
        if (window.scrollY > 100) {
          setHidden(true);
        }
      }, 1200);
    }
  };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);

      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);

    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.header
        animate={{
          y: hidden ? -100 : 0,
        }}  
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className={`fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-300 ${
          scrolled
            ? "bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#ddd0bc]/40"
            : ""
        }`}
      >
        <div className="px-6 md:px-16 max-w-6xl mx-auto flex items-center justify-between">
          <div />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {scrollItems.map((item, i) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.08,
                }}
                onClick={() => handleNavClick(item.href)}
                className="font-body text-sm font-light tracking-[0.15em] text-[#6b5744] hover:text-[#2a2118] transition-colors uppercase relative group"
                data-cursor-hover
              >
                {item.label}

                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#2a2118] transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}

            {/* Writing */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3 + scrollItems.length * 0.08,
              }}
            >
              <Link
                href="/writing"
                className="font-body text-sm font-light tracking-[0.15em] text-[#6b5744] hover:text-[#2a2118] transition-colors uppercase relative group inline-flex"
                data-cursor-hover
              >
                Writing

                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#2a2118] transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            data-cursor-hover
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-[#2a2118] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />

            <span
              className={`block w-4 h-px bg-[#2a2118] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block w-6 h-px bg-[#2a2118] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#faf8f5] flex flex-col items-center justify-center gap-10"
          >
            {scrollItems.map((item, i) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => handleNavClick(item.href)}
                className="font-display text-4xl font-light text-[#2a2118] tracking-widest"
                data-cursor-hover
              >
                {item.label}
              </motion.button>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: scrollItems.length * 0.08 }}
            >
              <Link
                href="/writing"
                onClick={() => setMenuOpen(false)}
                className="font-display text-4xl font-light text-[#2a2118] tracking-widest"
                data-cursor-hover
              >
                Writing
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}