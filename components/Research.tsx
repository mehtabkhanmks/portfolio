"use client";

const RESEARCH_AREAS = [
  {
    id: "r1",
    title: "Multi-AI Agent Systems & Recursive Self-Improvement",
    status: "In Progress",
    statusColor: "#6366F1",
    area: "AI Agent Research",
    icon: "🤖",
    color: "#6366F1",
    description:
      "Researching recursive self-improvement (RSI) in AI agents — systems where an AI agent rewrites and improves its own code in an ongoing loop. The architecture involves two loops: an inner loop agent that solves research tasks and an outer loop agent that rewrites the inner agent based on performance scores.",
    details: [
      "Studying inner/outer loop agent architectures for RSI",
      "Reading papers on AI Agent Swarms (arXiv:2609.35719)",
      "Exploring how agents propose, test, and accept rewrites",
      "Using Claude AI for research assistance and paper breakdowns",
      "Searching 3,600+ papers on multi-AI agent systems on arXiv",
    ],
    tools: ["Claude AI", "arXiv", "Python", "Multi-Agent Frameworks"],
  },
  {
    id: "r2",
    title: "AI-Driven Text-to-Video & Anime Generation (FYP Pipeline)",
    status: "In Progress",
    statusColor: "#22D3EE",
    area: "Generative AI / Computer Vision",
    icon: "🎬",
    color: "#22D3EE",
    description:
      "Building a text-to-video/anime pipeline as a Final Year Project concept — chaining existing free open-source models instead of training from scratch. The pipeline converts text into LLM script/scene breakdown, then keyframe images, then image-to-video clips, voice + music, and finally FFmpeg assembly into an episode.",
    details: [
      "Designed pipeline: Text → LLM → keyframes → video clips → episode",
      "Identified open-source models for each pipeline stage",
      "Research shows original contribution is the pipeline & consistency system",
      "Studying text-to-video model capabilities and limitations",
      "Reading Stanford HAI paper on Deep Neural Networks for High-Performance AI",
    ],
    tools: ["Python", "FFmpeg", "Open-Source LLMs", "Image-to-Video Models", "Stanford HAI"],
  },
];

const PAPERS = [
  {
    title: "AI Agent Swarms as Researchers: Progress, Challenges and Open Questions",
    source: "arXiv",
    id: "arXiv:2609.35719",
    area: "AI Agents",
    date: "Sep 2026",
    color: "#6366F1",
  },
  {
    title: "Reinforcing Agentic Creativity in Scientific Ideation with Night Science",
    source: "arXiv",
    id: "arXiv:2609.35706",
    area: "AI / Science",
    date: "Sep 2026",
    color: "#8B5CF6",
  },
  {
    title: "Deciphering the Feature Representation of Deep Neural Networks for High-Performance AI",
    source: "Stanford HAI",
    id: "HAI · Machine Learning",
    area: "Deep Learning",
    date: "Aug 2024",
    color: "#22D3EE",
  },
];

const PLATFORMS = [
  { name: "arXiv.org",  desc: "Reading latest CS & AI research papers",        icon: "📄", color: "#6366F1" },
  { name: "Stanford HAI", desc: "Human-Centered AI research and publications",  icon: "🏛️", color: "#22D3EE" },
  { name: "Claude AI",  desc: "AI-assisted research & paper breakdowns",        icon: "🤖", color: "#F59E0B" },
];

export default function Research() {
  return (
    <section id="research" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 52 }}>
          <p className="section-label">Academic Work</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#F1F5F9", marginBottom: 14 }}>
            Research & <span className="gradient-text">Innovation</span>
          </h2>
          <p style={{ color: "#94A3B8", maxWidth: 580, lineHeight: 1.75, fontSize: "0.95rem" }}>
            Actively reading academic papers on arXiv and Stanford HAI, using Claude AI for research assistance,
            and building experimental AI pipelines in <strong style={{ color: "#cbd5e1" }}>Multi-AI Agent Systems</strong> and{" "}
            <strong style={{ color: "#cbd5e1" }}>Text-to-Video generation</strong>.
          </p>
        </div>

        {/* Research area cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28, marginBottom: 48 }} className="research-grid">
          {RESEARCH_AREAS.map((r) => (
            <div key={r.id} className="research-card">
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 18 }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${r.color}14`, border: `1px solid ${r.color}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>
                  {r.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
                    <h3 style={{ fontWeight: 700, color: "#F1F5F9", fontSize: "0.98rem", lineHeight: 1.3 }}>{r.title}</h3>
                    <span style={{ fontSize: "0.67rem", padding: "2px 10px", borderRadius: 100, background: `${r.statusColor}14`, border: `1px solid ${r.statusColor}28`, color: r.statusColor, fontWeight: 600, flexShrink: 0 }}>
                      {r.status}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.78rem", color: r.color, fontWeight: 500, margin: 0 }}>{r.area}</p>
                </div>
              </div>

              <p style={{ color: "#94A3B8", fontSize: "0.87rem", lineHeight: 1.75, marginBottom: 18 }}>{r.description}</p>

              <div style={{ marginBottom: 18 }}>
                <p style={{ fontSize: "0.7rem", color: "#64748B", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Current Activities</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
                  {r.details.map((d) => (
                    <li key={d} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.83rem", color: "#94A3B8" }}>
                      <span style={{ color: r.color, marginTop: 2, flexShrink: 0 }}>▹</span>{d}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {r.tools.map((t) => (
                  <span key={t} style={{ fontSize: "0.7rem", padding: "4px 12px", borderRadius: 8, background: `${r.color}10`, border: `1px solid ${r.color}20`, color: r.color, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Research platforms */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 40 }} className="platforms-grid">
          {PLATFORMS.map((p) => (
            <div key={p.name} className="glass-card" style={{ padding: "20px 24px", display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: `${p.color}14`, border: `1px solid ${p.color}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>{p.icon}</div>
              <div>
                <p style={{ fontWeight: 700, color: "#F1F5F9", margin: 0, fontSize: "0.88rem" }}>{p.name}</p>
                <p style={{ color: "#64748B", fontSize: "0.75rem", margin: 0 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Papers read */}
        <div className="glass-card" style={{ padding: "28px 32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>📄</div>
            <div>
              <h3 style={{ fontWeight: 700, color: "#F1F5F9", margin: 0, fontSize: "0.97rem" }}>Research Papers Read</h3>
              <p style={{ color: "#64748B", fontSize: "0.75rem", margin: 0 }}>Academic papers studied across arXiv and Stanford HAI</p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {PAPERS.map((paper, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, transition: "all 0.25s ease", cursor: "default" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${paper.color}30`; (e.currentTarget as HTMLElement).style.background = `${paper.color}06`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"; }}
              >
                <span style={{ color: "#6366F1", fontFamily: "monospace", fontSize: "0.78rem", flexShrink: 0 }}>[{String(i + 1).padStart(2, "0")}]</span>
                <span style={{ color: "#cbd5e1", fontSize: "0.86rem", flex: 1 }}>{paper.title}</span>
                <span style={{ fontSize: "0.68rem", padding: "2px 9px", borderRadius: 6, background: `${paper.color}10`, border: `1px solid ${paper.color}20`, color: paper.color, fontWeight: 600, flexShrink: 0 }}>{paper.area}</span>
                <span style={{ color: "#475569", fontSize: "0.75rem", flexShrink: 0 }}>{paper.source} · {paper.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .research-grid   { grid-template-columns: 1fr !important; }
          .platforms-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
