"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/projects", label: "Work" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex h-14 max-w-[1200px] items-center justify-between gap-4 rounded-2xl border px-3 transition-all duration-300 sm:px-4 ${
          scrolled || open
            ? "border-line-strong bg-ink-900/75 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link href="/" className="group flex items-center gap-3" aria-label="Rizal Alfiansyah — home">
          <span className="relative block h-9 w-9 overflow-hidden rounded-[10px] border border-line-strong bg-[#131313]">
            <Image
              src="/logo-mark.png"
              alt=""
              width={36}
              height={36}
              className="h-full w-full scale-[1.18] object-cover transition-transform duration-500 group-hover:rotate-[8deg]"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight text-fg">Rizal Alfiansyah</span>
            <span className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-dim">
              Data · AI · Markets
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-line bg-white/[0.02] p-1">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative block rounded-full px-4 py-1.5 text-sm transition-colors ${
                      active
                        ? "bg-white/[0.08] text-fg"
                        : "text-muted hover:text-fg"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="group inline-flex h-9 items-center gap-2 rounded-full bg-fg px-4 text-sm font-medium text-ink-950 transition hover:bg-signal"
          >
            Let&apos;s talk
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line-strong text-fg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="mx-auto mt-2 max-w-[1200px] rounded-2xl border border-line-strong bg-ink-900/95 p-2 backdrop-blur-xl md:hidden"
        >
          <nav aria-label="Mobile primary">
            <ul className="flex flex-col">
              {navLinks.map((link, i) => {
                const active = isActive(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base ${
                        active ? "bg-white/[0.06] text-fg" : "text-muted"
                      }`}
                    >
                      {link.label}
                      <span className="font-mono text-xs text-dim">0{i + 1}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
