import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/lib/skills";

export function CtaBand() {
  return (
    <section className="relative z-10 mt-24">
      <Container>
        <div
          data-reveal
          className="card relative isolate overflow-hidden rounded-[28px] px-6 py-14 text-center sm:px-12 sm:py-20"
        >
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_80%_at_50%_120%,rgba(52,216,238,0.22),transparent_70%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-50 [background-image:linear-gradient(to_right,var(--line)_1px,transparent_1px),linear-gradient(to_bottom,var(--line)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_bottom,#000_10%,transparent_70%)]"
          />
          <p className="eyebrow">Open to scoped work & conversations</p>
          <h2 className="font-display mx-auto mt-5 max-w-3xl text-[clamp(2.4rem,6vw,4.5rem)] leading-[1] tracking-[-0.02em] text-fg">
            Have a noisy workflow? <span className="italic text-gradient">Let&apos;s make it precise.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-muted">
            AI agents and automation, markets tooling, or product collaboration.
            A short note with context is the best start.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${site.email}?subject=Hello%20from%20your%20portfolio`}
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-signal px-6 text-[15px] font-medium text-ink-950 transition hover:bg-white"
            >
              Email me
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center rounded-full border border-line-strong px-6 text-[15px] text-fg transition hover:border-fg"
            >
              Contact details
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
