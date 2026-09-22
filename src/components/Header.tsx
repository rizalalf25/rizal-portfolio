"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./Container";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

function linkClass(pathname: string, href: string) {
  const active =
    pathname === href || (href !== "/" && pathname.startsWith(href));
  return [
    "text-sm font-medium transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
    active
      ? "text-cyan-400 underline decoration-2 underline-offset-8"
      : "text-zinc-50 hover:text-cyan-400",
  ].join(" ");
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950">
      <Container className="flex h-14 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <Image
            src="/logo-ra.png"
            alt="Rizal Alfiansyah"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="font-serif text-lg font-bold text-zinc-50">
            Rizal Alfiansyah
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass(pathname, link.href)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-800 text-zinc-50 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-zinc-800 bg-zinc-950 md:hidden"
        >
          <Container>
            <nav aria-label="Mobile primary" className="py-4">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block w-full rounded-md px-3 py-3 text-base ${linkClass(pathname, link.href)}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
