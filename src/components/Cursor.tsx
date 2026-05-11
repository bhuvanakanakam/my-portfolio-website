"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    // Don't run on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      rafId = requestAnimationFrame(animateRing);
    };

    const hoverTargets = document.querySelectorAll(
      "a, button, [role='button'], .project-card",
    );

    const onEnterHover = () => {
      dot.classList.add("is-hovering");
      ring.classList.add("is-hovering");
    };

    const onLeaveHover = () => {
      dot.classList.remove("is-hovering");
      ring.classList.remove("is-hovering");
    };

    const onMouseDown = () => {
      dot.classList.add("is-clicking");
      ring.classList.add("is-clicking");
    };

    const onMouseUp = () => {
      dot.classList.remove("is-clicking");
      ring.classList.remove("is-clicking");
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", onEnterHover);
      el.addEventListener("mouseleave", onLeaveHover);
    });
    rafId = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterHover);
        el.removeEventListener("mouseleave", onLeaveHover);
      });
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" />
      <div id="cursor-ring" />
    </>
  );
}
