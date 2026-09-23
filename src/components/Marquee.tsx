type MarqueeProps = { items: string[] };

/** Infinite ticker strip. Content is duplicated once for a seamless loop. */
export function Marquee({ items }: MarqueeProps) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-center gap-6 pr-6 font-mono text-[13px] uppercase tracking-[0.12em] text-muted">
          <span className={i % 3 === 0 ? "text-up" : i % 3 === 1 ? "text-signal" : "text-dim"} aria-hidden>
            {i % 3 === 0 ? "▲" : i % 3 === 1 ? "◆" : "●"}
          </span>
          <span className="whitespace-nowrap">{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee relative overflow-hidden border-y border-line bg-ink-900/50 py-4 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
      <div className="marquee-track flex">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
