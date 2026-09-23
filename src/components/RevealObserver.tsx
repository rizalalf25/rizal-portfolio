"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Adds a gentle fade-up to any element marked with `data-reveal`.
 * Content stays visible without JS: hiding only starts once this opts in.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    document.documentElement.dataset.reveal = "on";

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const nodes = document.querySelectorAll("[data-reveal]:not(.is-in)");
    nodes.forEach((n) => io.observe(n));

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
