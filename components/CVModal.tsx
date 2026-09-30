"use client";
import React, { useState } from "react";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    // Generate clean, dedicated printable HTML document in an isolated frame/window
    const printWindow = window.open("", "_blank", "width=850,height=1100");
    if (!printWindow) {
      window.print();
      return;
    }

    const cvHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Mehtab Khan — Curriculum Vitae</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 10mm 12mm;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #0f172a;
      background: #ffffff;
      line-height: 1.4;
      font-size: 8.8pt;
      padding: 0;
    }
    .header {
      border-bottom: 2px solid #2563eb;
      padding-bottom: 8px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .name {
      font-size: 18pt;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.02em;
    }
    .title {
      color: #2563eb;
      font-weight: 700;
      font-size: 9.5pt;
      margin-top: 2px;
    }
    .sub {
      color: #64748b;
      font-size: 8pt;
      margin-top: 1px;
    }
    .contact-info {
      text-align: right;
      font-size: 8pt;
      color: #334155;
      line-height: 1.35;
    }
    .contact-info a {
      color: #2563eb;
      text-decoration: none;
    }
    .section {
      margin-bottom: 9px;
    }
    .section-title {
      font-size: 9pt;
      font-weight: 800;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      border-left: 3px solid #2563eb;
      padding-left: 6px;
      margin-bottom: 4px;
    }
    .summary {
      color: #334155;
      font-size: 8.4pt;
      line-height: 1.42;
    }
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }
    .card {
      border: 1px solid #e2e8f0;
      border-radius: 4px;
      padding: 5px 8px;
      background: #f8fafc;
    }
    .card-title {
      display: flex;
      justify-content: space-between;
      font-weight: 700;
      font-size: 8.5pt;
      color: #0f172a;
    }
    .card-sub {
      color: #475569;
      font-size: 7.8pt;
      margin-top: 1px;
    }
    .skill-group {
      font-size: 8pt;
      line-height: 1.35;
      margin-bottom: 3px;
    }
    .skill-group strong {
      color: #0f172a;
    }
    .skill-group span {
      color: #334155;
    }
    .project-item {
      margin-bottom: 6px;
    }
    .project-header {
      display: flex;
      justify-content: space-between;
      font-size: 8.4pt;
      font-weight: 700;
      color: #0f172a;
    }
    .project-tag {
      color: #2563eb;
      font-size: 7.6pt;
      font-weight: 600;
    }
    .project-desc {
      color: #334155;
      font-size: 8pt;
      line-height: 1.35;
      margin-top: 1px;
    }
    .cert-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4px 10px;
      font-size: 8pt;
      color: #334155;
    }
    .cert-item strong {
      color: #0f172a;
    }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <div class="name">Mehtab Khan</div>
      <div class="title">Full Stack Developer &bull; DevOps Engineer &bull; AI Systems</div>
      <div class="sub">Air University Islamabad (BSIT 5th Semester &bull; ADCs Computer Science)</div>
    </div>
    <div class="contact-info">
      <div><strong>Email:</strong> mehtabkhanmks784@gmail.com</div>
      <div><strong>Phone:</strong> +92 324 0120522 &bull; +92 328 0406784</div>
      <div><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mehtab-khan-521377429">linkedin.com/in/mehtab-khan-521377429</a></div>
      <div><strong>GitHub:</strong> <a href="https://github.com/mehtabkhanmks">github.com/mehtabkhanmks</a></div>
      <div><strong>Location:</strong> Islamabad, Pakistan</div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Professional Summary</div>
    <div class="summary">
      BSIT student at Air University Islamabad with strong practical engineering experience in Full Stack Web Development (React, Node.js, Next.js, Express) and DevOps infrastructure (Docker, Jenkins, Azure, CI/CD). Experienced in building scalable real-time distributed platforms and researching autonomous Multi-AI Agent architectures and generative media workflows.
    </div>
  </div>

  <div class="section">
    <div class="section-title">Education</div>
    <div class="grid-2">
      <div class="card">
        <div class="card-title">
          <span>BS in Information Technology (BSIT)</span>
          <span style="color: #2563eb;">2023 – Present</span>
        </div>
        <div class="card-sub">Air University Islamabad — <strong>5th Semester (Current)</strong></div>
      </div>
      <div class="card">
        <div class="card-title">
          <span>Associate Degree in Computing (CS)</span>
          <span style="color: #16a34a;">Completed</span>
        </div>
        <div class="card-sub">Air University Islamabad — <strong>2021 – 2023</strong></div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Technical Core Competencies</div>
    <div class="grid-2">
      <div>
        <div class="skill-group"><strong>Frontend & Web:</strong> <span>React.js (18/19), Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Redux, Vite</span></div>
        <div class="skill-group"><strong>Backend & APIs:</strong> <span>Node.js, Express.js, Python, .NET Core, RESTful APIs, WebSockets (Socket.IO)</span></div>
      </div>
      <div>
        <div class="skill-group"><strong>DevOps & Cloud:</strong> <span>Docker, Jenkins CI/CD, GitHub Actions, Microsoft Azure, Linux/Bash, Nginx, Vercel</span></div>
        <div class="skill-group"><strong>Databases & AI:</strong> <span>MySQL 8.0, PostgreSQL, MongoDB, Redis, Generative AI, Prompt Engineering, Multi-Agent Systems</span></div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Selected Engineering & Research Projects</div>
    
    <div class="project-item">
      <div class="project-header">
        <span>1. V.I.B.E — Validated Intelligent Bidding Engine (Final Year Capstone - FYP)</span>
        <span class="project-tag">React &bull; Node.js &bull; Python &bull; Redis &bull; MySQL</span>
      </div>
      <div class="project-desc">
        • Architected real-time intelligent auction engine featuring ML fraud/shill-bidding detection, ultra-low latency WebSocket bidding synchronization, and telemetry dashboards.
      </div>
    </div>

    <div class="project-item">
      <div class="project-header">
        <span>2. Creativity — IP &amp; Digital Asset Marketplace</span>
        <span class="project-tag">React 19 &bull; Vite &bull; Node.js &bull; Express &bull; JWT</span>
      </div>
      <div class="project-desc">
        • Developed creator marketplace allowing software engineers, authors, and artists to protect, publish, and monetize intellectual assets with secure JWT authorization.
      </div>
    </div>

    <div class="project-item">
      <div class="project-header">
        <span>3. DevOps Polyglot 3-Tier Microservices Pipeline</span>
        <span class="project-tag">Docker &bull; Jenkins &bull; Azure &bull; .NET Core &bull; Python</span>
      </div>
      <div class="project-desc">
        • Engineered containerized 3-tier polyglot architecture (.NET API, JavaScript UI, Python worker) deployed to Azure with automated Jenkins CI/CD pipelines.
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Verified Professional Certifications</div>
    <div class="cert-list">
      <div class="cert-item">• <strong>Generative AI: Prompt Engineering Basics</strong> — IBM (Coursera: 100%)</div>
      <div class="cert-item">• <strong>Generative AI: Applications</strong> — IBM (Coursera: 95%)</div>
      <div class="cert-item">• <strong>Introduction to Artificial Intelligence</strong> — IBM (Coursera: 98%)</div>
      <div class="cert-item">• <strong>AI For Everyone</strong> — DeepLearning.AI (Coursera: 96.25%)</div>
      <div class="cert-item">• <strong>National Cyber Security</strong> — Hunarmand Punjab Program</div>
      <div class="cert-item">• <strong>Artificial Intelligence (Batch-3)</strong> — Hunarmand Punjab Program</div>
    </div>
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 250);
    };
  </script>
</body>
</html>`;

    printWindow.document.open();
    printWindow.document.write(cvHTML);
    printWindow.document.close();
  };

  const handleDownloadDoc = () => {
    const textCV = `===================================================================
MEHTAB KHAN — CURRICULUM VITAE
Full Stack Developer | DevOps Engineer | AI Systems
===================================================================
Email: mehtabkhanmks784@gmail.com
Phone: +92 324 0120522 | +92 328 0406784
LinkedIn: https://www.linkedin.com/in/mehtab-khan-521377429
GitHub: https://github.com/mehtabkhanmks
Location: Islamabad, Pakistan

PROFESSIONAL SUMMARY
--------------------
BSIT student (5th Semester) at Air University Islamabad with an Associate Degree in Computing (ADCs in Computer Science). Strong foundation in Full Stack Web Development (React, Node.js, Next.js, Express) and DevOps infrastructure (Docker, Jenkins, Azure, CI/CD). Actively researching Multi-AI Agent architectures and generative AI pipelines.

EDUCATION
---------
• Bachelor of Science in Information Technology (BSIT) — 5th Semester (Current)
  Air University, Islamabad | 2023 – Present
  Focus: Software Engineering, Cloud Architecture, DevOps & Distributed Systems.

• Associate Degree in Computing — ADCs (Computer Science)
  Air University, Islamabad | 2021 – 2023
  Foundations in Data Structures, OOP, Database Systems, and Networking.

TECHNICAL SKILLS
----------------
• Frontend: React.js (v18/v19), Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Redux
• Backend: Node.js, Express.js, Python, .NET Core, REST APIs, WebSockets (Socket.IO)
• Databases: MySQL 8.0, PostgreSQL, MongoDB, Redis
• DevOps & Cloud: Docker, Jenkins, CI/CD Pipelines, GitHub Actions, Microsoft Azure, Linux/Bash, Nginx
• AI & Applied: Generative AI, Prompt Engineering, Multi-AI Agent Systems, Scikit-Learn

FEATURED PROJECTS
-----------------
1. V.I.B.E — Validated Intelligent Bidding Engine (Final Year Project - FYP)
   - Real-time auction engine with ML-driven fraud and shill-bidding detection.
   - Low-latency WebSocket bidding synchronization and telemetry control center.
   - Stack: React 18, Node.js, Socket.IO, Python, Scikit-Learn, MySQL, Redis.
   - Repo: https://github.com/mehtabkhanmks/vibe-auction-platform
   - Live: https://vibe-auction-platform.vercel.app

2. Creativity — IP & Creative Asset Marketplace
   - Creator platform to publish, monetize, and protect digital assets with JWT auth.
   - Stack: React 19, Vite, Node.js, Express, JWT, Tailwind CSS.
   - Repo: https://github.com/mehtabkhanmks/Creativity
   - Live: https://creativity-puce.vercel.app

3. DevOps Polyglot 3-Tier Microservices Pipeline
   - Containerized 3-tier polyglot architecture (.NET, JS, Python) on Microsoft Azure.
   - Automated Jenkins CI/CD pipeline and GitHub Actions workflow.
   - Stack: Docker, Jenkins, GitHub Actions, Microsoft Azure, .NET, Python.
   - Repo: https://github.com/mehtabkhanmks/devops-engineering-project

VERIFIED CERTIFICATIONS
-----------------------
• Generative AI: Prompt Engineering Basics — IBM (Coursera, Grade: 100%)
• Generative AI: Introduction and Applications — IBM (Coursera, Grade: 95%)
• Introduction to Artificial Intelligence (AI) — IBM (Coursera, Grade: 98%)
• AI For Everyone — DeepLearning.AI (Coursera, Grade: 96.25%)
• National Cyber Security & AI — Hunarmand Punjab Program
===================================================================`;

    const blob = new Blob([textCV], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Mehtab_Khan_CV.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    const textCV = `
MEHTAB KHAN
Full Stack Developer | DevOps Engineer | AI Systems
Email: mehtabkhanmks784@gmail.com
Phone: +92 324 0120522 | +92 328 0406784
LinkedIn: https://www.linkedin.com/in/mehtab-khan-521377429
GitHub: https://github.com/mehtabkhanmks
Location: Islamabad, Pakistan

EDUCATION:
• BSIT (5th Semester) — Air University Islamabad (2023 - Present)
• ADCs in Computer Science — Air University Islamabad (2021 - 2023)

TECHNICAL SKILLS:
• Frontend: React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS
• Backend: Node.js, Express.js, Python, .NET Core, REST APIs, WebSockets
• Databases: MySQL, PostgreSQL, MongoDB, Redis
• DevOps: Docker, Jenkins, GitHub Actions, Microsoft Azure, Linux, CI/CD
• AI: Generative AI, Prompt Engineering, Multi-AI Agents, Scikit-Learn

PROJECTS:
• V.I.B.E (FYP): Real-time ML-powered auction engine (React, Node.js, Python, Redis)
• Creativity: Digital asset marketplace with JWT auth (React, Express, Node.js)
• DevOps Pipeline: Polyglot 3-tier microservices with Jenkins & Azure

CERTIFICATIONS:
• IBM Generative AI: Prompt Engineering Basics (Coursera, 100%)
• IBM Generative AI: Introduction and Applications (Coursera, 95%)
• IBM Introduction to Artificial Intelligence (Coursera, 98%)
• DeepLearning.AI: AI For Everyone (Coursera, 96.25%)
• Hunarmand Punjab: Cyber Security & AI
`;
    navigator.clipboard.writeText(textCV.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(5, 7, 12, 0.88)",
        backdropFilter: "blur(14px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        overflowY: "auto",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "860px",
          maxHeight: "92vh",
          backgroundColor: "#0D111A",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: "16px",
          boxShadow: "0 28px 70px rgba(0,0,0,0.85)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div
          className="cv-top-bar"
          style={{
            padding: "14px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(255,255,255,0.02)",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: "1.2rem" }}>📄</span>
            <div>
              <span style={{ fontWeight: 700, color: "#F8FAFC", fontSize: "0.96rem", display: "block" }}>
                Mehtab Khan — 1-Page Curriculum Vitae
              </span>
              <span style={{ fontSize: "0.72rem", color: "#64748B" }}>
                Clean Single Sheet Format &bull; Ready for Recruiter PDF
              </span>
            </div>
          </div>
          <div className="cv-actions" style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <button
              onClick={handleDownloadDoc}
              style={{
                padding: "7px 12px",
                fontSize: "0.78rem",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.04)",
                color: "#F1F5F9",
                cursor: "pointer",
                fontWeight: 500,
                transition: "all 0.2s",
              }}
              title="Download text document"
            >
              📥 Download File
            </button>
            <button
              onClick={handleCopy}
              style={{
                padding: "7px 12px",
                fontSize: "0.78rem",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.04)",
                color: "#F1F5F9",
                cursor: "pointer",
                fontWeight: 500,
                transition: "all 0.2s",
              }}
            >
              {copied ? "✓ Copied!" : "📋 Copy"}
            </button>
            <button
              onClick={handlePrint}
              style={{
                padding: "7px 15px",
                fontSize: "0.8rem",
                borderRadius: "8px",
                border: "1px solid #0284C7",
                background: "linear-gradient(135deg, #0284C7, #0EA5E9)",
                color: "#FFFFFF",
                cursor: "pointer",
                fontWeight: 600,
                transition: "all 0.2s",
                boxShadow: "0 2px 10px rgba(14, 165, 233, 0.35)",
              }}
            >
              🖨️ Save as PDF (1 Page)
            </button>
            <button
              onClick={onClose}
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.05)",
                color: "#94A3B8",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.95rem",
              }}
              title="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal On-Screen View */}
        <div
          className="cv-body-pad"
          style={{
            padding: "24px 28px",
            overflowY: "auto",
            color: "#CBD5E1",
            lineHeight: 1.45,
            fontSize: "0.84rem",
            backgroundColor: "#0D111A",
          }}
        >
          {/* Header */}
          <div style={{ borderBottom: "2px solid #0EA5E9", paddingBottom: 14, marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10 }}>
              <div>
                <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#F8FAFC", margin: 0, letterSpacing: "-0.02em" }}>
                  Mehtab Khan
                </h1>
                <p style={{ color: "#38BDF8", fontWeight: 600, fontSize: "0.92rem", marginTop: 2, marginBottom: 0 }}>
                  Full Stack Developer &bull; DevOps Engineer &bull; AI Systems
                </p>
                <p style={{ color: "#94A3B8", fontSize: "0.78rem", margin: "2px 0 0" }}>
                  Air University Islamabad — BSIT (5th Semester) &bull; ADCs (Computer Science)
                </p>
              </div>

              {/* Contact Block */}
              <div style={{ display: "flex", flexDirection: "column", gap: 3, fontSize: "0.78rem", color: "#94A3B8", textAlign: "right" }} className="cv-contact-col">
                <div>📧 <a href="mailto:mehtabkhanmks784@gmail.com" style={{ color: "#F1F5F9", textDecoration: "none" }}>mehtabkhanmks784@gmail.com</a></div>
                <div>📱 <span style={{ color: "#F1F5F9" }}>+92 324 0120522 &bull; +92 328 0406784</span></div>
                <div>💼 <a href="https://www.linkedin.com/in/mehtab-khan-521377429" target="_blank" rel="noopener noreferrer" style={{ color: "#38BDF8", textDecoration: "none" }}>linkedin.com/in/mehtab-khan-521377429</a></div>
                <div>🐙 <a href="https://github.com/mehtabkhanmks" target="_blank" rel="noopener noreferrer" style={{ color: "#38BDF8", textDecoration: "none" }}>github.com/mehtabkhanmks</a></div>
                <div>📍 <span style={{ color: "#F1F5F9" }}>Islamabad, Pakistan</span></div>
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <div style={{ marginBottom: 14 }}>
            <h2 style={{ fontSize: "0.86rem", fontWeight: 700, color: "#F8FAFC", textTransform: "uppercase", letterSpacing: "0.08em", borderLeft: "3px solid #0EA5E9", paddingLeft: 8, marginBottom: 4 }}>
              Professional Summary
            </h2>
            <p style={{ color: "#94A3B8", fontSize: "0.8rem", lineHeight: 1.5, margin: 0 }}>
              BSIT student at Air University Islamabad with strong practical expertise in Full Stack Web Development (React, Next.js, Node.js, Express) and DevOps (Docker, Jenkins, Azure, CI/CD). Experienced in building real-time distributed web systems and researching Multi-AI Agent architectures and generative AI media pipelines.
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: 14 }}>
            <h2 style={{ fontSize: "0.86rem", fontWeight: 700, color: "#F8FAFC", textTransform: "uppercase", letterSpacing: "0.08em", borderLeft: "3px solid #0EA5E9", paddingLeft: 8, marginBottom: 8 }}>
              Education
            </h2>
            <div className="cv-edu-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ padding: "8px 12px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 6 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ color: "#F8FAFC", fontSize: "0.82rem" }}>BS in Information Technology (BSIT)</strong>
                  <span style={{ fontSize: "0.72rem", color: "#38BDF8" }}>2023 – Present</span>
                </div>
                <p style={{ color: "#94A3B8", fontSize: "0.76rem", margin: "2px 0 0" }}>Air University Islamabad (5th Sem)</p>
              </div>
              <div style={{ padding: "8px 12px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 6 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <strong style={{ color: "#F8FAFC", fontSize: "0.82rem" }}>Associate Degree in Computing (CS)</strong>
                  <span style={{ fontSize: "0.72rem", color: "#10B981" }}>Completed</span>
                </div>
                <p style={{ color: "#94A3B8", fontSize: "0.76rem", margin: "2px 0 0" }}>Air University Islamabad (2021 – 2023)</p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: 14 }}>
            <h2 style={{ fontSize: "0.86rem", fontWeight: 700, color: "#F8FAFC", textTransform: "uppercase", letterSpacing: "0.08em", borderLeft: "3px solid #0EA5E9", paddingLeft: 8, marginBottom: 6 }}>
              Technical Core Competencies
            </h2>
            <div className="cv-skills-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, fontSize: "0.78rem" }}>
              <div>
                <strong style={{ color: "#F8FAFC" }}>Frontend &amp; Languages: </strong>
                <span style={{ color: "#94A3B8" }}>React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, Redux</span>
              </div>
              <div>
                <strong style={{ color: "#F8FAFC" }}>Backend &amp; DB: </strong>
                <span style={{ color: "#94A3B8" }}>Node.js, Express, Python, .NET Core, MySQL 8, Redis, MongoDB</span>
              </div>
              <div>
                <strong style={{ color: "#F8FAFC" }}>DevOps &amp; Cloud: </strong>
                <span style={{ color: "#94A3B8" }}>Docker, Jenkins CI/CD, GitHub Actions, Microsoft Azure, Linux, Nginx</span>
              </div>
              <div>
                <strong style={{ color: "#F8FAFC" }}>AI &amp; Research: </strong>
                <span style={{ color: "#94A3B8" }}>Generative AI, Prompt Engineering, Multi-AI Agents, Scikit-Learn</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div style={{ marginBottom: 14 }}>
            <h2 style={{ fontSize: "0.86rem", fontWeight: 700, color: "#F8FAFC", textTransform: "uppercase", letterSpacing: "0.08em", borderLeft: "3px solid #0EA5E9", paddingLeft: 8, marginBottom: 8 }}>
              Selected Projects
            </h2>

            <div style={{ marginBottom: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 4 }}>
                <strong style={{ color: "#F8FAFC", fontSize: "0.82rem" }}>
                  1. V.I.B.E — Validated Intelligent Bidding Engine (Final Year Project)
                </strong>
                <span style={{ fontSize: "0.72rem", color: "#0EA5E9" }}>React &bull; Node.js &bull; Python &bull; Redis</span>
              </div>
              <p style={{ fontSize: "0.76rem", color: "#94A3B8", margin: "2px 0 0" }}>
                • Built a real-time auction engine with ML fraud detection, sub-second WebSocket bidding synchronization, and admin telemetry.
              </p>
            </div>

            <div style={{ marginBottom: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 4 }}>
                <strong style={{ color: "#F8FAFC", fontSize: "0.82rem" }}>
                  2. Creativity — IP &amp; Creative Asset Marketplace
                </strong>
                <span style={{ fontSize: "0.72rem", color: "#10B981" }}>React 19 &bull; Vite &bull; JWT Auth &bull; Express</span>
              </div>
              <p style={{ fontSize: "0.76rem", color: "#94A3B8", margin: "2px 0 0" }}>
                • Developed a creator marketplace enabling authors and engineers to publish, monetize, and protect digital assets with JWT auth.
              </p>
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 4 }}>
                <strong style={{ color: "#F8FAFC", fontSize: "0.82rem" }}>
                  3. DevOps Polyglot 3-Tier Microservices Pipeline
                </strong>
                <span style={{ fontSize: "0.72rem", color: "#F59E0B" }}>Docker &bull; Jenkins &bull; Azure &bull; .NET</span>
              </div>
              <p style={{ fontSize: "0.76rem", color: "#94A3B8", margin: "2px 0 0" }}>
                • Architected a containerized 3-tier polyglot architecture with automated Jenkins CI/CD pipelines and Azure cloud hosting.
              </p>
            </div>
          </div>

          {/* Verified Certifications */}
          <div>
            <h2 style={{ fontSize: "0.86rem", fontWeight: 700, color: "#F8FAFC", textTransform: "uppercase", letterSpacing: "0.08em", borderLeft: "3px solid #0EA5E9", paddingLeft: 8, marginBottom: 6 }}>
              Verified Certifications (Coursera &amp; Punjab Govt)
            </h2>
            <div className="cv-certs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, fontSize: "0.76rem" }}>
              <div>• <strong>Generative AI: Prompt Engineering Basics</strong> — IBM (Coursera: 100%)</div>
              <div>• <strong>Generative AI: Applications</strong> — IBM (Coursera: 95%)</div>
              <div>• <strong>Introduction to Artificial Intelligence</strong> — IBM (Coursera: 98%)</div>
              <div>• <strong>AI For Everyone</strong> — DeepLearning.AI (Coursera: 96.25%)</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .cv-top-bar {
            padding: 10px 14px !important;
          }
          .cv-actions {
            width: 100%;
            justify-content: flex-start;
          }
          .cv-body-pad {
            padding: 16px !important;
          }
          .cv-contact-col {
            text-align: left !important;
          }
          .cv-edu-grid, .cv-skills-grid, .cv-certs-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
