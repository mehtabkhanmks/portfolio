"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ padding: "32px 20px 40px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="footer-inner" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 7, background: "linear-gradient(135deg, #0284C7, #0EA5E9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 800, color: "#fff" }}>MK</div>
          <span style={{ fontSize: "0.82rem", color: "#64748B" }}>
            © {year} <strong style={{ color: "#94A3B8" }}>Mehtab Khan</strong>. All rights reserved.
          </span>
        </div>

        <p style={{ fontSize: "0.74rem", color: "#475569", fontFamily: "monospace" }}>
          Built with <span style={{ color: "#38BDF8" }}>Next.js</span> · Deployed on <span style={{ color: "#10B981" }}>Vercel</span>
        </p>

        <a
          href="#hero"
          style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.8rem", color: "#64748B", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F1F5F9")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#64748B")}
        >
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
          Back to top
        </a>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .footer-inner {
            flex-direction: column;
            text-align: center;
            gap: 12px;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}
