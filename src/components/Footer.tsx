import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/lib/skills";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-stone-200 bg-stone-100/60">
      <Container className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-base font-semibold text-stone-900">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-stone-500">
            © {year} · {site.role} · {site.years} experience
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-stone-600">
          <Link href="/projects" className="hover:text-stone-900">
            Work
          </Link>
          <Link href="/about" className="hover:text-stone-900">
            About
          </Link>
          <Link href="/contact" className="hover:text-stone-900">
            Contact
          </Link>
          <a href={`mailto:${site.email}`} className="hover:text-stone-900">
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
