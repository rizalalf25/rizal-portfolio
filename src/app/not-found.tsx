import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-down">Error 404 · no signal</p>
      <h1 className="font-display mt-5 text-[clamp(3.5rem,11vw,8rem)] leading-[0.9] tracking-[-0.03em] text-fg">
        Off the <span className="italic text-gradient">chart.</span>
      </h1>
      <p className="mt-6 max-w-md text-[17px] text-muted">
        That route does not exist on this portfolio. Let&apos;s get you back to
        something useful.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex h-12 items-center rounded-full bg-fg px-6 text-[15px] font-medium text-ink-950 transition hover:bg-signal"
        >
          Back home
        </Link>
        <Link
          href="/projects"
          className="inline-flex h-12 items-center rounded-full border border-line-strong px-6 text-[15px] text-fg transition hover:border-fg"
        >
          See the work
        </Link>
      </div>
    </Container>
  );
}
