"use client";

const PROJECTS = [
  {
    id: 1,
    title: "V.I.B.E — Validated Intelligent Bidding Engine",
    description:
      "A real-time intelligent auction platform featuring machine-learning-driven fraud and shill-bidding detection, ultra-low latency WebSocket bidding, role-based multi-tier dashboard, and an administrative telemetry control center. Built as Final Year Capstone (FYP) at Air University Islamabad.",
    tech: ["React 18", "Redux Toolkit", "Node.js", "Express", "Socket.IO", "Python", "Scikit-Learn", "MySQL 8.0", "Redis 7"],
    github: "https://github.com/mehtabkhanmks/vibe-auction-platform",
    live: "https://vibe-auction-platform.vercel.app",
    status: "Completed",
    highlight: true,
    color: "#6366F1",
    badge: "FYP Project",
  },
  {
    id: 2,
    title: "Creativity — IP & Creative Asset Marketplace",
    description:
      "A high-performance web platform designed to empower creators, authors, screenplay writers, audio producers, and software architects to publish, protect, monetize, and co-build original intellectual property. Features a curated marketplace, collaboration hub, and master admin gate.",
    tech: ["React 19", "Vite", "Node.js", "Express", "JWT Auth", "JavaScript", "CSS"],
    github: "https://github.com/mehtabkhanmks/Creativity",
    live: "https://creativity-puce.vercel.app",
    status: "Completed",
    highlight: false,
    color: "#22D3EE",
    badge: "Live on Vercel",
  },
  {
    id: 3,
    title: "DevOps Engineering Project",
    description:
      "Three-tier polyglot microservices architecture deployed with Docker containerization, Jenkins CI/CD pipeline automation, and Cloud Infrastructure (Azure). Includes frontend (JS), backend (.NET), Python worker service, and full GitHub Actions workflow.",
    tech: ["Docker", "Jenkins", "CI/CD", ".NET", "Python", "JavaScript", "GitHub Actions", "Azure"],
    github: "https://github.com/mehtabkhanmks/devops-engineering-project",
    live: "https://github.com/mehtabkhanmks/devops-engineering-project",
    status: "Completed",
    highlight: false,
    color: "#8B5CF6",
    badge: "19 Commits · CI/CD",
  },
];

const STATUS_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "Completed":   { bg: "rgba(34,197,94,0.1)",  text: "#22C55E", border: "rgba(34,197,94,0.25)"  },
  "In Progress": { bg: "rgba(99,102,241,0.1)",  text: "#6366F1", border: "rgba(99,102,241,0.25)" },
};

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);
const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 52 }}>
          <p className="section-label">What I&apos;ve Built</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#F1F5F9", marginBottom: 14 }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: "#94A3B8", maxWidth: 520, lineHeight: 1.75, fontSize: "0.95rem" }}>
            Real-world projects spanning full-stack development, DevOps infrastructure, and AI-driven systems.
          </p>
        </div>

        {/* GitHub profile banner */}
        <a
          href="https://github.com/mehtabkhanmks"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card"
          style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 26px", marginBottom: 36, textDecoration: "none", cursor: "pointer" }}
        >
          <div style={{ color: "#94A3B8" }}><GitHubIcon /></div>
          <div style={{ flex: 1 }}>
            <p style={{ color: "#F1F5F9", fontWeight: 600, margin: 0, fontSize: "0.93rem" }}>github.com/mehtabkhanmks</p>
            <p style={{ color: "#64748B", fontSize: "0.78rem", margin: 0 }}>View all repositories & contributions</p>
          </div>
          <ExternalIcon />
        </a>

        {/* Projects */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {PROJECTS.map((project) => {
            const sc = STATUS_COLORS[project.status] ?? STATUS_COLORS["In Progress"];
            return (
              <div
                key={project.id}
                className="glass-card"
                style={{
                  padding: 0, overflow: "hidden",
                  borderColor: project.highlight ? `${project.color}35` : undefined,
                  boxShadow: project.highlight ? `0 0 0 1px ${project.color}15` : undefined,
                }}
              >
                {/* Top colour strip */}
                <div style={{ height: 3, background: `linear-gradient(90deg, ${project.color}, ${project.color}55)` }} />

                <div style={{ padding: "28px 32px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "start" }} className="proj-inner">

                    {/* Left */}
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 10 }}>
                        <h3 style={{ fontWeight: 700, color: "#F1F5F9", fontSize: "1.05rem" }}>{project.title}</h3>
                        <span style={{ fontSize: "0.68rem", padding: "2px 10px", borderRadius: 100, background: sc.bg, border: `1px solid ${sc.border}`, color: sc.text, fontWeight: 600 }}>
                          {project.status}
                        </span>
                        {project.badge && (
                          <span style={{ fontSize: "0.68rem", padding: "2px 10px", borderRadius: 100, background: `${project.color}15`, border: `1px solid ${project.color}30`, color: project.color, fontWeight: 600 }}>
                            {project.badge}
                          </span>
                        )}
                      </div>
                      <p style={{ color: "#94A3B8", fontSize: "0.88rem", lineHeight: 1.72, marginBottom: 18 }}>{project.description}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                        {project.tech.map((t) => (<span key={t} className="tech-tag">{t}</span>))}
                      </div>
                    </div>

                    {/* Right — links */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-end" }}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                        style={{ padding: "9px 18px", fontSize: "0.8rem", gap: 6, whiteSpace: "nowrap" }}
                      >
                        <GitHubIcon /> Code
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                          style={{ padding: "9px 18px", fontSize: "0.8rem", gap: 6, whiteSpace: "nowrap" }}
                        >
                          <ExternalIcon /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .proj-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
