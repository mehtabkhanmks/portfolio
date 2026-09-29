"use client";

const EDUCATION = [
  {
    degree: "Bachelor of Science in Information Technology (BSIT)",
    institution: "Air University — Main Campus, Islamabad, Pakistan",
    period: "2023 – Present",
    status: "5th Semester (Current)",
    color: "#6366F1",
    icon: "🎓",
    highlights: ["Continuation from ADCs (CS) program", "Core Focus: Software Engineering & Infrastructure", "AI Systems & Applied Tech Projects"],
  },
  {
    degree: "Associate Degree in Computing — ADCs (CS)",
    institution: "Air University — Main Campus, Islamabad, Pakistan",
    period: "2021 – 2023",
    status: "Completed",
    color: "#8B5CF6",
    icon: "🏛️",
    highlights: ["2-Year Computer Science Degree", "Solid Foundation in Programming & Networking", "Successfully Graduated"],
  },
];

const STATS = [
  { value: "3+",  label: "Live Projects",        icon: "💻" },
  { value: "5th", label: "BSIT Semester",        icon: "📚" },
  { value: "4",   label: "Coursera Certs",       icon: "🏆" },
  { value: "2",   label: "Government Courses",   icon: "🏛️" },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 24px", position: "relative" }}>
      <div className="section-divider" />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 54 }}>
          <p className="section-label">Background &amp; Profile</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#F8FAFC", marginBottom: 14, lineHeight: 1.2 }}>
            About <span className="gradient-text">Me</span>
          </h2>
          <p style={{ fontSize: "0.96rem", color: "#94A3B8", maxWidth: 580, lineHeight: 1.75 }}>
            A passionate computer science &amp; IT student based in Islamabad, Pakistan. Dedicated to building reliable
            full-stack software, maintaining DevOps pipelines, and studying modern AI agent systems.
          </p>
        </div>

        {/* Bio + Quick facts */}
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 28, marginBottom: 36 }} className="about-grid">
          {/* Bio */}
          <div className="glass-card" style={{ padding: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(99,102,241,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>👨‍💻</div>
              <h3 style={{ fontWeight: 700, color: "#F8FAFC", fontSize: "1.05rem" }}>My Background</h3>
            </div>
            <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "0.92rem", marginBottom: 14 }}>
              My name is <strong style={{ color: "#F1F5F9" }}>Mehtab Khan</strong>. I am currently enrolled in the
              <strong style={{ color: "#F1F5F9" }}> 5th semester of BSIT</strong> at <strong style={{ color: "#F1F5F9" }}>Air University, Islamabad</strong>, having previously completed my Associate Degree in Computing (ADCs in CS).
            </p>
            <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "0.92rem", marginBottom: 14 }}>
              My technical skills cover <strong style={{ color: "#F1F5F9" }}>Full Stack Web Development</strong> (React, Node.js, Next.js, Express) and <strong style={{ color: "#F1F5F9" }}>DevOps</strong> (Docker, Jenkins, Azure, CI/CD pipelines).
            </p>
            <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: "0.92rem" }}>
              I actively expand my knowledge through certified coursework on <strong style={{ color: "#F1F5F9" }}>Coursera</strong> (IBM &amp; DeepLearning.AI) and explore ongoing research in <strong style={{ color: "#F1F5F9" }}>Multi-AI Agent Architectures</strong> and generative workflows.
            </p>
          </div>

          {/* Quick facts */}
          <div className="glass-card" style={{ padding: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(56,189,248,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>📋</div>
              <h3 style={{ fontWeight: 700, color: "#F8FAFC", fontSize: "1.05rem" }}>Contact &amp; Details</h3>
            </div>
            {[
              { icon: "👤", label: "Name",      value: "Mehtab Khan", href: null },
              { icon: "📍", label: "Location",  value: "Islamabad, Pakistan", href: null },
              { icon: "🎓", label: "Education", value: "BSIT (5th Sem) — Air University", href: null },
              { icon: "📧", label: "Email",     value: "mehtabkhanmks784@gmail.com", href: "mailto:mehtabkhanmks784@gmail.com" },
              { icon: "📱", label: "Phone 1",   value: "0324-0120522", href: "tel:03240120522" },
              { icon: "📱", label: "Phone 2",   value: "0328-0406784", href: "tel:03280406784" },
              { icon: "💼", label: "LinkedIn",  value: "linkedin.com/in/mehtab-khan-521377429", href: "https://www.linkedin.com/in/mehtab-khan-521377429" },
              { icon: "🐙", label: "GitHub",    value: "github.com/mehtabkhanmks", href: "https://github.com/mehtabkhanmks" },
            ].map((fact) => (
              <div
                key={fact.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  cursor: fact.href ? "pointer" : "default",
                }}
                onClick={() => fact.href && window.open(fact.href, "_blank")}
              >
                <span style={{ fontSize: "0.95rem", width: 22, textAlign: "center" }}>{fact.icon}</span>
                <span style={{ fontSize: "0.78rem", color: "#64748B", width: 70, flexShrink: 0 }}>{fact.label}</span>
                <span style={{ fontSize: "0.85rem", color: fact.href ? "#A5B4FC" : "#cbd5e1", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {fact.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, marginBottom: 54 }} className="stats-grid">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div style={{ fontSize: "1.4rem", marginBottom: 6 }}>{stat.icon}</div>
              <div style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: "#F8FAFC", lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontSize: "0.76rem", color: "#64748B", marginTop: 6 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <p className="section-label">Degrees &amp; Qualifications</p>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#F8FAFC", marginBottom: 24 }}>
            Academic Background
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {EDUCATION.map((edu, i) => (
              <div key={i} className="glass-card" style={{ padding: "24px 28px", display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${edu.color}15`, border: `1px solid ${edu.color}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0 }}>
                  {edu.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                    <h4 style={{ fontWeight: 700, color: "#F8FAFC", fontSize: "0.96rem" }}>{edu.degree}</h4>
                    <span style={{ fontSize: "0.7rem", padding: "3px 12px", borderRadius: 100, background: edu.status === "Completed" ? "rgba(34,197,94,0.1)" : "rgba(99,102,241,0.1)", border: `1px solid ${edu.status === "Completed" ? "rgba(34,197,94,0.3)" : "rgba(99,102,241,0.3)"}`, color: edu.status === "Completed" ? "#22C55E" : "#818CF8", fontWeight: 600, flexShrink: 0 }}>
                      {edu.status}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "#818CF8", fontWeight: 500, marginBottom: 2 }}>{edu.institution}</p>
                  <p style={{ fontSize: "0.78rem", color: "#64748B", marginBottom: 10 }}>{edu.period}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {edu.highlights.map((h) => (<span key={h} className="skill-badge" style={{ fontSize: "0.72rem" }}>{h}</span>))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
