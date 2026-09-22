type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-cyan-400">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
