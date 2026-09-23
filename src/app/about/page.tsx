import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { LocalTime } from "@/components/LocalTime";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutBackground, aboutIntro, experienceTimeline, principles } from "@/lib/about";
import { site } from "@/lib/skills";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}, a builder and analyst based in ${site.location}.`,
};

export default function AboutPage() {
  const introParagraphs = aboutIntro.split("\n\n");

  return (
    <>
      <Container className="pt-14 sm:pt-20">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div className="rise">
            <SectionHeading
              eyebrow="About"
              index="03"
              title={
                <>
                  Less vanity dashboards. <span className="italic text-gradient">More process.</span>
                </>
              }
            />
          </div>

          <aside
            className="rise card overflow-hidden"
            style={{ ["--delay" as string]: "120ms" }}
          >
            <div className="flex items-center gap-4 border-b border-line p-5">
              <span className="block h-14 w-14 overflow-hidden rounded-2xl border border-line-strong bg-[#131313]">
                <Image src="/logo-mark.png" alt="" width={56} height={56} className="h-full w-full scale-[1.18] object-cover" />
              </span>
              <div>
                <p className="text-[16px] font-medium text-fg">{site.name}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">{site.role}</p>
              </div>
            </div>
            <dl className="divide-y divide-line text-[14px]">
              {[
                ["Focus", site.years],
                ["Based in", site.location],
                ["Local time", <LocalTime key="t" />],
                ["Study path", "CSA · OJK / WMI"],
              ].map(([k, v]) => (
                <div key={String(k)} className="flex justify-between gap-4 px-5 py-3">
                  <dt className="text-dim">{k}</dt>
                  <dd className="text-right text-fg">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <div className="mt-24 grid gap-14 lg:grid-cols-[260px_1fr] lg:gap-20">
          <p className="eyebrow lg:pt-3" data-reveal>
            <span className="text-signal">A</span> — Who I am
          </p>
          <div className="max-w-[64ch] space-y-7" data-reveal>
            <p className="font-display text-[clamp(1.7rem,3.2vw,2.3rem)] leading-[1.25] text-fg">
              {introParagraphs[0]}
            </p>
            {introParagraphs.slice(1).map((p) => (
              <p key={p.slice(0, 24)} className="text-[17px] leading-[1.8] text-muted">
                {p}
              </p>
            ))}
            <p className="text-[17px] leading-[1.8] text-muted">{aboutBackground}</p>
          </div>
        </div>

        <div className="mt-24 grid gap-14 lg:grid-cols-[260px_1fr] lg:gap-20">
          <p className="eyebrow lg:pt-3" data-reveal>
            <span className="text-signal">B</span> — Path so far
          </p>
          <ol className="border-t border-line">
            {experienceTimeline.map((item) => (
              <li
                key={item.title}
                data-reveal
                className="group grid gap-3 border-b border-line py-8 md:grid-cols-[170px_1fr] md:gap-8"
              >
                <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-signal md:pt-1.5">{item.period}</p>
                <div>
                  <h2 className="font-display text-[1.85rem] leading-[1.1] text-fg">{item.title}</h2>
                  <p className="mt-1 font-mono text-[12px] text-dim">{item.org}</p>
                  <p className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-muted">{item.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-24 grid gap-14 lg:grid-cols-[260px_1fr] lg:gap-20">
          <p className="eyebrow lg:pt-3" data-reveal>
            <span className="text-signal">C</span> — Principles
          </p>
          <ul className="grid gap-5 md:grid-cols-3">
            {principles.map((p, i) => (
              <li key={p.title} data-reveal style={{ ["--delay" as string]: `${i * 90}ms` }} className="card p-6">
                <span className="font-mono text-[11px] text-signal">0{i + 1}</span>
                <h3 className="font-display mt-6 text-[1.6rem] leading-[1.1] text-fg">{p.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
