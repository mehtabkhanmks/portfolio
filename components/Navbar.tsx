"use client";
import { useState, useEffect } from "react";
import CVModal from "./CVModal";

const navLinks = [
  { href: "#about",          label: "About"          },
  { href: "#skills",         label: "Skills"         },
  { href: "#projects",       label: "Projects"       },
  { href: "#certifications", label: "Certifications" },
  { href: "#research",       label: "Research"       },
  { href: "#contact",        label: "Contact"        },
];

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [cvModalOpen,   setCvModalOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Highlight active section
      const ids = navLinks.map((l) => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: "0 24px",
          transition: "all 0.3s ease",
          background: scrolled
            ? "rgba(9, 11, 16, 0.94)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: "0.98rem",
              color: "#fff",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "#4F46E5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.85rem",
                fontWeight: 800,
                color: "#fff",
              }}
            >
              MK
            </span>
            <span style={{ color: "#F8FAFC", letterSpacing: "-0.01em" }}>Mehtab Khan</span>
          </a>

          {/* Desktop links */}
          <div
            style={{
              display: "flex",
              gap: 26,
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
                }}
              >
                {link.label}
              </a>
            ))}

            {/* CV Button */}
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
                background: "rgba(99,102,241,0.1)",
                color: "#A5B4FC",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#4F46E5";
                e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(99,102,241,0.1)";
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

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              color: "#F1F5F9",
            }}
            className="hamburger"
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              {menuOpen ? (
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M6 6l12 12M6 18L18 6"
                />
              ) : (
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 99,
          }}
        />
      )}

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div style={{ marginBottom: 20 }}>
          <p style={{ fontSize: "0.7rem", fontFamily: "monospace", color: "#818CF8", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>Navigation</p>
        </div>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-nav-link"
            onClick={handleNavClick}
          >
            {link.label}
          </a>
        ))}
        
        <button
          onClick={() => {
            setMenuOpen(false);
            setCvModalOpen(true);
          }}
          style={{
            marginTop: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "12px",
            background: "rgba(99,102,241,0.12)",
            border: "1px solid rgba(99,102,241,0.3)",
            borderRadius: "8px",
            color: "#A5B4FC",
            fontWeight: 600,
            fontSize: "0.9rem",
            cursor: "pointer",
          }}
        >
          📄 View Professional CV
        </button>

        <a
          href="#contact"
          className="btn-primary"
          onClick={handleNavClick}
          style={{ marginTop: 12, justifyContent: "center" }}
        >
          Contact Me
        </a>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: flex !important; }
        }
      `}</style>
    </>
  );
}
