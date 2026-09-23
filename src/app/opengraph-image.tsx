import { ImageResponse } from "next/og";
import { site } from "@/lib/skills";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(52,216,238,0.25), transparent 70%), #06080b",
          color: "#eef1f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22, color: "#9aa3b2", letterSpacing: 3 }}>
          <div style={{ width: 12, height: 12, borderRadius: 12, background: "#4ade80" }} />
          {`${site.role.toUpperCase()} · ${site.location.toUpperCase()}`}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, lineHeight: 1, letterSpacing: -3, fontWeight: 600 }}>{"Building AI & quant"}</div>
          <div style={{ fontSize: 88, lineHeight: 1.05, letterSpacing: -3, fontWeight: 600, color: "#34d8ee" }}>
            systems for markets.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#9aa3b2" }}>
          <span style={{ color: "#eef1f5" }}>{site.name}</span>
          <span>AlphaRadar · Kuanta · IDX research</span>
        </div>
      </div>
    ),
    size,
  );
}
