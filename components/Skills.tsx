"use client";
import { useState } from "react";

const CATEGORIES = [
  {
    id: "frontend", label: "Frontend", icon: "🎨", color: "#0EA5E9",
    skills: [
      { name: "React.js / React 18-19", level: 88 },
      { name: "Next.js",                level: 82 },
      { name: "TypeScript",             level: 78 },
      { name: "JavaScript (ES6+)",      level: 90 },
      { name: "HTML5 & CSS3",           level: 92 },
      { name: "Tailwind CSS",           level: 85 },
      { name: "Redux Toolkit",          level: 78 },
      { name: "Vite",                   level: 80 },
    ],
  },
  {
    id: "backend", label: "Backend", icon: "⚙️", color: "#10B981",
    skills: [
      { name: "Node.js",        level: 85 },
      { name: "Express.js",     level: 83 },
      { name: "REST APIs",      level: 88 },
      { name: "Socket.IO",      level: 75 },
      { name: "Python",         level: 76 },
      { name: "MySQL / Redis",  level: 72 },
      { name: "MongoDB",        level: 74 },
      { name: "JWT Auth",       level: 80 },
    ],
  },
  {
    id: "devops", label: "DevOps", icon: "🚀", color: "#F59E0B",
    skills: [
      { name: "Docker",         level: 80 },
      { name: "Jenkins CI/CD",  level: 76 },
      { name: "GitHub Actions", level: 78 },
      { name: "Linux",          level: 78 },
      { name: "Nginx",          level: 70 },
      { name: "Cloud Deploy",   level: 74 },
      { name: "Vercel",         level: 88 },
      { name: "Azure",          level: 68 },
    ],
  },
  {
    id: "ai", label: "AI & Research", icon: "🧠", color: "#06B6D4",
    skills: [
      { name: "Generative AI",       level: 72 },
      { name: "Prompt Engineering",  level: 78 },
      { name: "Scikit-Learn / ML",   level: 68 },
      { name: "AI Agent Systems",    level: 65 },
      { name: "National Cyber Sec",  level: 65 },
      { name: "Networking",          level: 72 },
      { name: "Research (arXiv)",    level: 70 },
      { name: "Data Science Basics", level: 62 },
    ],
  },
];

const TECH_STACK = [
  "React 18/19","Next.js","Node.js","TypeScript","Python","Docker",
  "MySQL","Redis","MongoDB","Git","Linux","REST API","CI/CD","Socket.IO",
  "Tailwind","Express","Scikit-Learn","Vite","Redux","JWT","Jenkins","Vercel",
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const cat = CATEGORIES.find((c) => c.id === activeCategory)!;

  return (
    <section id="skills" className="skills-section">
      <div className="section-divider" />
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 44, textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>What I Know</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#F1F5F9", marginBottom: 12 }}>
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p style={{ color: "#94A3B8", maxWidth: 480, margin: "0 auto", lineHeight: 1.75, fontSize: "0.95rem" }}>
            End-to-end developer with expertise across the full software stack — from pixel-perfect
            frontends to containerized cloud deployments.
          </p>
        </div>

        {/* Tabs */}
        <div className="skills-tabs">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "8px 18px", borderRadius: 100, border: "1px solid",
                borderColor: activeCategory === c.id ? c.color : "rgba(255,255,255,0.08)",
                background: activeCategory === c.id ? `${c.color}18` : "rgba(255,255,255,0.03)",
                color: activeCategory === c.id ? c.color : "#94A3B8",
                fontWeight: 600, fontSize: "0.82rem", cursor: "pointer", transition: "all 0.25s ease",
              }}
            >
              <span>{c.icon}</span>{c.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="skills-grid">
          {cat.skills.map((skill, i) => (
            <div key={skill.name} className="glass-card" style={{ padding: "16px 20px", animationDelay: `${i * 0.05}s` }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: "0.86rem", fontWeight: 600, color: "#F1F5F9" }}>{skill.name}</span>
                <span style={{ fontSize: "0.78rem", fontWeight: 700, color: cat.color, fontFamily: "'JetBrains Mono', monospace" }}>{skill.level}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${skill.level}%`, background: `linear-gradient(90deg, ${cat.color}, ${cat.color}80)` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Full tech stack */}
        <div className="glass-card" style={{ padding: "24px 28px" }}>
          <p style={{ fontSize: "0.74rem", color: "#64748B", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16 }}>
            // Complete Tech Stack
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {TECH_STACK.map((tech) => (<span key={tech} className="skill-badge" style={{ fontSize: "0.75rem", padding: "4px 10px" }}>{tech}</span>))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          padding: 90px 24px;
          background: rgba(255,255,255,0.01);
          position: relative;
        }

        .skills-tabs {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-bottom: 40px;
        }

        @media (max-width: 768px) {
          .skills-section {
            padding: 60px 16px;
          }
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .skills-tabs {
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
}
