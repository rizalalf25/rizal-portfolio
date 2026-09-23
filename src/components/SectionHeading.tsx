import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  index?: string;
  title: ReactNode;
  description?: ReactNode;
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  as: Tag = "h1",
  className = "",
}: SectionHeadingProps) {
  const big = Tag === "h1";
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className="eyebrow flex items-center gap-3">
          {index ? <span className="text-signal">{index}</span> : null}
          <span className="h-px w-8 bg-line-strong" aria-hidden />
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={`font-display mt-5 text-fg ${
          big
            ? "text-[clamp(2.75rem,7vw,5.25rem)] leading-[0.98] tracking-[-0.02em]"
            : "text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.02] tracking-[-0.015em]"
        }`}
      >
        {title}
      </Tag>
      {description ? (
        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
