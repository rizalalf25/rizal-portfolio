import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/lib/skills";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-800 bg-zinc-900">
      <Container className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-base font-semibold text-zinc-50">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-zinc-400">
            © {year} · {site.role} · {site.years} experience
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-zinc-400">
          <Link href="/projects" className="hover:text-zinc-50">
            Work
          </Link>
          <Link href="/about" className="hover:text-zinc-50">
            About
          </Link>
          <Link href="/contact" className="hover:text-zinc-50">
            Contact
          </Link>
          <a href={`mailto:${site.email}`} className="hover:text-zinc-50">
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
