"use client";
import { useState, useEffect } from "react";
import CVModal from "./CVModal";

const navLinks = [
  {
    href: "#about",
    label: "About",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    href: "#skills",
    label: "Skills",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    href: "#projects",
    label: "Projects",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    href: "#certifications",
    label: "Certs",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    href: "#research",
    label: "Research",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    href: "#contact",
    label: "Contact",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [cvModalOpen, setCvModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Highlight active section
      const sectionIds = ["hero", "about", "skills", "projects", "certifications", "research", "contact"];
      const scrollPos = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />

      {/* ── TOP NAVBAR (Desktop & Mobile Brand Header) ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: "0 20px",
          transition: "all 0.3s ease",
          background: scrolled
            ? "rgba(9, 11, 16, 0.94)"
            : "rgba(9, 11, 16, 0.75)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 60,
          }}
        >
          {/* Logo / Brand */}
          <a
            href="#hero"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "#fff",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "linear-gradient(135deg, #4F46E5, #6366F1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.85rem",
                fontWeight: 800,
                color: "#fff",
                boxShadow: "0 2px 10px rgba(79, 70, 229, 0.4)",
              }}
            >
              MK
            </span>
            <span style={{ color: "#F8FAFC", letterSpacing: "-0.01em" }}>
              Mehtab Khan
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div
            style={{
              display: "flex",
              gap: 24,
              alignItems: "center",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                style={{
                  color:
                    activeSection === link.href.slice(1)
                      ? "#F8FAFC"
                      : undefined,
                  fontWeight: activeSection === link.href.slice(1) ? 600 : 500,
                }}
              >
                {link.label}
              </a>
            ))}

            {/* CV Modal Button */}
            <button
              onClick={() => setCvModalOpen(true)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "7px 16px",
                fontSize: "0.82rem",
                fontWeight: 600,
                borderRadius: "8px",
                border: "1px solid rgba(99,102,241,0.35)",
                background: "rgba(99,102,241,0.12)",
                color: "#A5B4FC",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#4F46E5";
                e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(99,102,241,0.12)";
                e.currentTarget.style.color = "#A5B4FC";
              }}
            >
              📄 View CV
            </button>

            <a
              href="#contact"
              className="btn-primary"
              style={{ padding: "8px 18px", fontSize: "0.82rem" }}
            >
              Contact
            </a>
          </div>

          {/* Mobile Top Actions (Quick CV & Contact buttons) */}
          <div className="mobile-top-action" style={{ display: "none", alignItems: "center", gap: 8 }}>
            <button
              onClick={() => setCvModalOpen(true)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                padding: "6px 12px",
                fontSize: "0.78rem",
                fontWeight: 600,
                borderRadius: "8px",
                border: "1px solid rgba(99,102,241,0.35)",
                background: "rgba(99,102,241,0.15)",
                color: "#C7D2FE",
                cursor: "pointer",
              }}
            >
              📄 CV
            </button>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "6px 12px",
                fontSize: "0.78rem",
                fontWeight: 600,
                borderRadius: "8px",
                background: "#4F46E5",
                color: "#FFFFFF",
                textDecoration: "none",
              }}
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* ── MOBILE BOTTOM NAVIGATION PANEL (Facebook / App Dock Style) ── */}
      <div className="mobile-bottom-panel">
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            maxWidth: 500,
            margin: "0 auto",
            padding: "6px 4px 8px",
          }}
        >
          {/* Home Tab */}
          <a
            href="#hero"
            className={`bottom-tab-item ${activeSection === "hero" ? "active" : ""}`}
            title="Home"
          >
            <span className="tab-icon">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </span>
            <span className="tab-label">Home</span>
          </a>

          {/* About Tab */}
          <a
            href="#about"
            className={`bottom-tab-item ${activeSection === "about" ? "active" : ""}`}
            title="About"
          >
            <span className="tab-icon">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            <span className="tab-label">About</span>
          </a>

          {/* Skills Tab */}
          <a
            href="#skills"
            className={`bottom-tab-item ${activeSection === "skills" ? "active" : ""}`}
            title="Skills"
          >
            <span className="tab-icon">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            <span className="tab-label">Skills</span>
          </a>

          {/* Projects Tab */}
          <a
            href="#projects"
            className={`bottom-tab-item ${activeSection === "projects" ? "active" : ""}`}
            title="Projects"
          >
            <span className="tab-icon">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </span>
            <span className="tab-label">Projects</span>
          </a>

          {/* Research Tab */}
          <a
            href="#research"
            className={`bottom-tab-item ${activeSection === "research" ? "active" : ""}`}
            title="Research"
          >
            <span className="tab-icon">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </span>
            <span className="tab-label">Research</span>
          </a>

          {/* Contact Tab */}
          <a
            href="#contact"
            className={`bottom-tab-item ${activeSection === "contact" ? "active" : ""}`}
            title="Contact"
          >
            <span className="tab-icon">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <span className="tab-label">Contact</span>
          </a>
        </nav>
      </div>

      <style jsx>{`
        .mobile-bottom-panel {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 60;
          background: rgba(10, 14, 23, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.5);
          padding-bottom: env(safe-area-inset-bottom, 0px);
        }

        .bottom-tab-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justifyContent: center;
          gap: 3px;
          text-decoration: none;
          color: #94A3B8;
          padding: 6px 8px;
          border-radius: 8px;
          transition: all 0.2s ease;
          flex: 1;
          min-width: 0;
        }

        .bottom-tab-item .tab-icon {
          display: flex;
          align-items: center;
          justifyContent: center;
          transition: transform 0.2s ease;
        }

        .bottom-tab-item .tab-label {
          font-size: 0.68rem;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .bottom-tab-item.active {
          color: #818CF8;
        }

        .bottom-tab-item.active .tab-icon {
          transform: translateY(-2px) scale(1.1);
          color: #818CF8;
          filter: drop-shadow(0 0 6px rgba(99, 102, 241, 0.6));
        }

        .bottom-tab-item.active .tab-label {
          font-weight: 700;
          color: #F8FAFC;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-top-action {
            display: flex !important;
          }
          .mobile-bottom-panel {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
