"use client";
import { useState } from "react";

const COURSERA_CERTS = [
  {
    id: "c1",
    title: "Generative AI: Prompt Engineering Basics",
    issuer: "Coursera",
    provider: "IBM",
    date: "August 24, 2026",
    grade: "100%",
    hours: "9 hours",
    credentialUrl: "https://coursera.org/share/d3b51c202e5776df19c847d1c3934826",
    color: "#6366F1",
    skills: ["Prompt Engineering", "Generative AI", "LLM", "ChatGPT", "IBM Watson"],
  },
  {
    id: "c2",
    title: "Generative AI: Introduction and Applications",
    issuer: "Coursera",
    provider: "IBM",
    date: "August 21, 2026",
    grade: "95%",
    hours: "8 hours",
    credentialUrl: "https://coursera.org/share/818e8479b97734b3efe2d8d9d5aa11f2",
    color: "#22D3EE",
    skills: ["Generative AI", "NLP", "AI Applications", "IBM", "Text Generation"],
  },
  {
    id: "c3",
    title: "Introduction to Artificial Intelligence (AI)",
    issuer: "Coursera",
    provider: "IBM",
    date: "August 11, 2026",
    grade: "98%",
    hours: "13 hours",
    credentialUrl: "https://coursera.org/share/8ec180e5bdd874affb0f83612aeaade9",
    color: "#8B5CF6",
    skills: ["AI Fundamentals", "Machine Learning", "Deep Learning", "Neural Networks", "IBM"],
  },
  {
    id: "c4",
    title: "AI For Everyone",
    issuer: "Coursera",
    provider: "DeepLearning.AI",
    date: "July 23, 2026",
    grade: "96.25%",
    hours: "7 hours",
    credentialUrl: "https://coursera.org/share/78558e8eadf7410342892c882139dab4",
    color: "#F59E0B",
    skills: ["AI Strategy", "Machine Learning", "AI Ethics", "Data Science", "Applied ML"],
  },
];

const HUNARMAND_CERTS = [
  {
    id: "h1",
    title: "National Cyber Security (Batch-3)",
    issuer: "Hunarmand Punjab",
    provider: "Government of Punjab, Pakistan",
    platform: "lms.hunarmandpunjab.org.pk",
    progress: 65,
    status: "65% Completed",
    color: "#10B981",
    skills: ["Cyber Security", "Network Security", "Digital Infrastructure", "Threat Detection"],
  },
  {
    id: "h2",
    title: "Artificial Intelligence (Batch-3)",
    issuer: "Hunarmand Punjab",
    provider: "Government of Punjab, Pakistan",
    platform: "lms.hunarmandpunjab.org.pk",
    progress: 21,
    status: "21% Completed",
    color: "#6366F1",
    skills: ["Artificial Intelligence", "Machine Learning", "AI Applications", "Innovation"],
  },
];

type Tab = "coursera" | "hunarmand";

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
  </svg>
);

export default function Certifications() {
  const [activeTab, setActiveTab] = useState<Tab>("coursera");

  return (
    <section id="certifications" style={{ padding: "100px 24px", background: "rgba(255,255,255,0.01)", position: "relative" }}>
      <div className="section-divider" />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 52 }}>
          <p className="section-label">What I&apos;ve Earned</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#F1F5F9", marginBottom: 14 }}>
            <span className="gradient-text">Certifications</span> & Courses
          </h2>
          <p style={{ color: "#94A3B8", maxWidth: 520, lineHeight: 1.75, fontSize: "0.95rem" }}>
            Continuously upskilling through globally recognised platforms and the Government of Punjab&apos;s
            Hunarmand program — earning verified credentials in AI, ML, and Cyber Security.
          </p>
        </div>

        {/* Tab switcher */}
        <div style={{ display: "inline-flex", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: 4, marginBottom: 36 }}>
          {(["coursera", "hunarmand"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "10px 24px", borderRadius: 9, border: "none", cursor: "pointer",
                fontWeight: 600, fontSize: "0.84rem", transition: "all 0.25s ease",
                background: activeTab === tab ? "linear-gradient(135deg, #6366F1, #8B5CF6)" : "transparent",
                color: activeTab === tab ? "#fff" : "#64748B",
                boxShadow: activeTab === tab ? "0 4px 14px rgba(99,102,241,0.3)" : "none",
              }}
            >
              {tab === "coursera" ? "📜 Coursera (IBM & DeepLearning.AI)" : "🏛️ Hunarmand Punjab"}
            </button>
          ))}
        </div>

        {/* ─── Coursera ─── */}
        {activeTab === "coursera" && (
          <>
            {/* Summary row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 32 }} className="cert-stats">
              {[
                { label: "Certificates", value: "4", icon: "🏆" },
                { label: "Avg Grade",    value: "97.3%", icon: "⭐" },
                { label: "Total Hours",  value: "37 hrs", icon: "⏱️" },
                { label: "Providers",    value: "IBM + DeepLearning.AI", icon: "🏢" },
              ].map((s) => (
                <div key={s.label} className="stat-card" style={{ padding: "16px" }}>
                  <div style={{ fontSize: "1.3rem", marginBottom: 6 }}>{s.icon}</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#F1F5F9" }}>{s.value}</div>
                  <div style={{ fontSize: "0.72rem", color: "#64748B", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="certs-grid">
              {COURSERA_CERTS.map((cert) => (
                <div key={cert.id} className="cert-card">
                  {/* Header stripe */}
                  <div style={{ height: 3, background: `linear-gradient(90deg, ${cert.color}, ${cert.color}55)`, borderRadius: "2px 2px 0 0", margin: "-24px -24px 20px" }} />

                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: `${cert.color}18`, border: `1px solid ${cert.color}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0 }}>
                      🏆
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontWeight: 700, color: "#F1F5F9", fontSize: "0.93rem", lineHeight: 1.35, marginBottom: 4 }}>{cert.title}</h4>
                      <p style={{ fontSize: "0.8rem", color: cert.color, fontWeight: 600, margin: 0 }}>{cert.provider}</p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 16 }}>
                    {[
                      { label: "Grade",    value: cert.grade,  icon: "⭐" },
                      { label: "Duration", value: cert.hours,  icon: "⏱️" },
                      { label: "Issued",   value: cert.date.split(" ").slice(0,2).join(" "), icon: "📅" },
                    ].map((m) => (
                      <div key={m.label} style={{ padding: "10px 12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, textAlign: "center" }}>
                        <p style={{ fontSize: "0.65rem", color: "#64748B", margin: 0 }}>{m.label}</p>
                        <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "#F1F5F9", margin: 0 }}>{m.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 18 }}>
                    {cert.skills.map((s) => (
                      <span key={s} style={{ fontSize: "0.68rem", padding: "3px 10px", borderRadius: 7, background: `${cert.color}10`, border: `1px solid ${cert.color}20`, color: cert.color, fontWeight: 600 }}>{s}</span>
                    ))}
                  </div>

                  {/* Verified badge + link */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.72rem", color: "#22C55E" }}>
                      <CheckIcon /> Coursera Verified Certificate
                    </div>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: "0.78rem", color: cert.color, textDecoration: "none", fontWeight: 500, transition: "opacity 0.2s" }}
                    >
                      View <ExternalIcon />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ─── Hunarmand ─── */}
        {activeTab === "hunarmand" && (
          <>
            <div className="glass-card" style={{ padding: "20px 28px", marginBottom: 28, display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(16,185,129,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem" }}>🏛️</div>
              <div>
                <p style={{ fontWeight: 700, color: "#F1F5F9", margin: 0, fontSize: "0.95rem" }}>Hunarmand Punjab — Government Skills Initiative</p>
                <p style={{ color: "#64748B", fontSize: "0.78rem", margin: 0 }}>lms.hunarmandpunjab.org.pk · 2 Active Courses · Valid Lifetime</p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="certs-grid">
              {HUNARMAND_CERTS.map((cert) => (
                <div key={cert.id} className="cert-card" style={{ padding: "28px" }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 18 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: `${cert.color}15`, border: `1px solid ${cert.color}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>
                      {cert.id === "h1" ? "🔐" : "🤖"}
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 700, color: "#F1F5F9", fontSize: "1rem", marginBottom: 4 }}>{cert.title}</h4>
                      <p style={{ fontSize: "0.8rem", color: cert.color, fontWeight: 600, margin: 0 }}>{cert.issuer}</p>
                      <p style={{ fontSize: "0.75rem", color: "#64748B", margin: 0 }}>{cert.provider}</p>
                    </div>
                  </div>

                  {/* Progress */}
                  <div style={{ marginBottom: 18 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ fontSize: "0.78rem", color: "#94A3B8" }}>Course Progress</span>
                      <span style={{ fontSize: "0.82rem", fontWeight: 700, color: cert.color, fontFamily: "monospace" }}>{cert.progress}%</span>
                    </div>
                    <div className="progress-bar" style={{ height: 6 }}>
                      <div className="progress-fill" style={{ width: `${cert.progress}%`, background: `linear-gradient(90deg, ${cert.color}, ${cert.color}80)` }} />
                    </div>
                    <p style={{ fontSize: "0.7rem", color: "#64748B", marginTop: 6 }}>Valid Till: Lifetime · Batch-3</p>
                  </div>

                  {/* Skills */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {cert.skills.map((s) => (
                      <span key={s} style={{ fontSize: "0.68rem", padding: "3px 10px", borderRadius: 7, background: `${cert.color}10`, border: `1px solid ${cert.color}20`, color: cert.color, fontWeight: 600 }}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .certs-grid  { grid-template-columns: 1fr !important; }
          .cert-stats  { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .cert-stats  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
