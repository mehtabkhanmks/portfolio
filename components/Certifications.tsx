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
    color: "#0EA5E9",
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
    color: "#06B6D4",
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
    color: "#2563EB",
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
    color: "#10B981",
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
    color: "#0EA5E9",
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
    <section id="certifications" className="certs-section">
      <div className="section-divider" />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 44 }}>
          <p className="section-label">What I&apos;ve Earned</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#F1F5F9", marginBottom: 12 }}>
            <span className="gradient-text">Certifications</span> & Courses
          </h2>
          <p style={{ color: "#94A3B8", maxWidth: 520, lineHeight: 1.75, fontSize: "0.95rem" }}>
            Continuously upskilling through globally recognised platforms and the Government of Punjab&apos;s
            Hunarmand program — earning verified credentials in AI, ML, and Cyber Security.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="tab-switcher-wrap">
          {(["coursera", "hunarmand"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="cert-tab-btn"
              style={{
                padding: "9px 20px", borderRadius: 9, border: "none", cursor: "pointer",
                fontWeight: 600, fontSize: "0.82rem", transition: "all 0.25s ease",
                background: activeTab === tab ? "linear-gradient(135deg, #0284C7, #0EA5E9)" : "transparent",
                color: activeTab === tab ? "#fff" : "#94A3B8",
                boxShadow: activeTab === tab ? "0 4px 14px rgba(14,165,233,0.3)" : "none",
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
            <div className="cert-stats" style={{ marginBottom: 28 }}>
              {[
                { label: "Certificates", value: "4", icon: "🏆" },
                { label: "Avg Grade",    value: "97.3%", icon: "⭐" },
                { label: "Total Hours",  value: "37 hrs", icon: "⏱️" },
                { label: "Providers",    value: "IBM + DeepLearning", icon: "🏢" },
              ].map((s) => (
                <div key={s.label} className="stat-card" style={{ padding: "16px 12px" }}>
                  <div style={{ fontSize: "1.2rem", marginBottom: 4 }}>{s.icon}</div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "#F1F5F9" }}>{s.value}</div>
                  <div style={{ fontSize: "0.7rem", color: "#64748B", marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Certs grid */}
            <div className="certs-grid">
              {COURSERA_CERTS.map((cert) => (
                <div key={cert.id} className="cert-card" style={{ padding: "24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                    <span style={{ fontSize: "0.72rem", padding: "3px 10px", borderRadius: 100, background: `${cert.color}15`, border: `1px solid ${cert.color}30`, color: cert.color, fontWeight: 700 }}>
                      {cert.provider}
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "#22C55E", fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>
                      <CheckIcon /> Grade: {cert.grade}
                    </span>
                  </div>

                  <h3 style={{ fontWeight: 700, color: "#F1F5F9", fontSize: "0.98rem", lineHeight: 1.4, marginBottom: 12 }}>
                    {cert.title}
                  </h3>

                  <div style={{ display: "flex", gap: 14, color: "#64748B", fontSize: "0.76rem", marginBottom: 16 }}>
                    <span>📅 {cert.date}</span>
                    <span>⏱️ {cert.hours}</span>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                    {cert.skills.map((s) => (
                      <span key={s} style={{ fontSize: "0.68rem", padding: "3px 9px", borderRadius: 6, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", color: "#94A3B8" }}>
                        {s}
                      </span>
                    ))}
                  </div>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ width: "100%", justifyContent: "center", padding: "8px 14px", fontSize: "0.78rem", gap: 6 }}
                  >
                    View Credential <ExternalIcon />
                  </a>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ─── Hunarmand Punjab ─── */}
        {activeTab === "hunarmand" && (
          <div className="certs-grid">
            {HUNARMAND_CERTS.map((cert) => (
              <div key={cert.id} className="cert-card" style={{ padding: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <span style={{ fontSize: "0.72rem", padding: "3px 10px", borderRadius: 100, background: `${cert.color}15`, border: `1px solid ${cert.color}30`, color: cert.color, fontWeight: 700 }}>
                    Govt. of Punjab
                  </span>
                  <span style={{ fontSize: "0.75rem", color: cert.color, fontWeight: 600 }}>
                    {cert.status}
                  </span>
                </div>

                <h3 style={{ fontWeight: 700, color: "#F1F5F9", fontSize: "0.98rem", lineHeight: 1.4, marginBottom: 8 }}>
                  {cert.title}
                </h3>
                <p style={{ fontSize: "0.78rem", color: "#64748B", marginBottom: 16 }}>{cert.provider}</p>

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

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {cert.skills.map((s) => (
                    <span key={s} style={{ fontSize: "0.68rem", padding: "3px 9px", borderRadius: 7, background: `${cert.color}10`, border: `1px solid ${cert.color}20`, color: cert.color, fontWeight: 600 }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .certs-section {
          padding: 90px 24px;
          background: rgba(255,255,255,0.01);
          position: relative;
        }

        .tab-switcher-wrap {
          display: inline-flex;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          padding: 4px;
          margin-bottom: 32px;
          flex-wrap: wrap;
          gap: 4px;
        }

        .cert-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .certs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        @media (max-width: 900px) {
          .certs-grid {
            grid-template-columns: 1fr;
          }
          .cert-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .certs-section {
            padding: 60px 16px;
          }
          .tab-switcher-wrap {
            width: 100%;
          }
          .cert-tab-btn {
            flex: 1;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
