"use client";
import { useEffect, useRef } from "react";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/mehtabkhanmks",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:mehtabkhanmks784@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mehtab-khan-521377429",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

function useTypewriter(words: string[], speed = 90, pause = 2000) {
  const el = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let wi = 0, ci = 0, deleting = false, timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[wi];
      if (el.current) el.current.textContent = word.slice(0, ci);
      if (!deleting) {
        ci++;
        if (ci > word.length) { deleting = true; timer = setTimeout(tick, pause); return; }
      } else {
        ci--;
        if (ci < 0) { deleting = false; wi = (wi + 1) % words.length; ci = 0; }
      }
      timer = setTimeout(tick, deleting ? speed / 2 : speed);
    };
    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [words, speed, pause]);
  return el;
}

export default function Hero() {
  const typedRef = useTypewriter([
    "Full Stack Developer",
    "DevOps Engineer",
    "AI Systems Explorer",
    "BSIT Student @ Air University",
  ]);

  return (
    <section
      id="hero"
      className="hero-section"
    >
      <div style={{ maxWidth: 1200, width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="hero-grid">

          {/* ── Left / Main Content ── */}
          <div className="hero-content">
            {/* Status badge */}
            <div
              className="animate-fade-up hero-badge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.2)",
                borderRadius: 100,
                marginBottom: 20,
              }}
            >
              <span className="status-dot" style={{ background: "#6366F1" }} />
              <span style={{ fontSize: "0.78rem", color: "#A5B4FC", fontWeight: 500 }}>
                BSIT Student · Air University Islamabad
              </span>
            </div>

            {/* Name */}
            <h1
              className="animate-fade-up delay-100 hero-title"
              style={{
                fontSize: "clamp(2.1rem, 5.5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: 12,
                color: "#F8FAFC",
                letterSpacing: "-0.02em",
              }}
            >
              Mehtab Khan
            </h1>

            {/* Typewriter */}
            <div
              className="animate-fade-up delay-200 hero-typewriter"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
                fontWeight: 600,
                color: "#94A3B8",
                marginBottom: 20,
                minHeight: "1.8em",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <span style={{ color: "#6366F1" }}>&gt;</span>{" "}
              <span ref={typedRef} />
              <span style={{
                display: "inline-block",
                width: 2,
                height: "1em",
                background: "#6366F1",
                marginLeft: 2,
                verticalAlign: "middle",
                animation: "blink 1s step-end infinite",
              }} />
            </div>

            {/* Bio */}
            <p
              className="animate-fade-up delay-300 hero-bio"
              style={{
                fontSize: "clamp(0.92rem, 1.8vw, 1rem)",
                color: "#94A3B8",
                lineHeight: 1.8,
                maxWidth: 580,
                marginBottom: 28,
              }}
            >
              I am a <strong style={{ color: "#F1F5F9" }}>BSIT student (5th Semester)</strong> at{" "}
              <strong style={{ color: "#F1F5F9" }}>Air University, Islamabad</strong> with an ADCs degree in Computer Science.
              I build scalable web applications, automate infrastructure with DevOps pipelines, and research{" "}
              <strong style={{ color: "#F1F5F9" }}>Multi-AI Agent Systems</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-up delay-400 hero-cta" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#research" className="btn-primary hero-btn">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Explore Research
              </a>
              <a href="#projects" className="btn-secondary hero-btn">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                View Engineering Work
              </a>
            </div>

            {/* Social Links */}
            <div className="animate-fade-up delay-500 hero-socials" style={{ display: "flex", gap: 12, marginTop: 26 }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  title={s.label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#94A3B8",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#F8FAFC";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.5)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#94A3B8";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right — Profile Photo (Circle) ── */}
          <div className="animate-fade-up delay-300 hero-avatar-wrap">
            <div className="hero-avatar-box">
              <div className="hero-avatar-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile_cropped.jpg"
                  alt="Mehtab Khan"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 25%",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint (hidden on tiny screens) */}
        <div className="scroll-hint animate-fade-in delay-600">
          <span style={{ fontSize: "0.68rem", color: "#64748B", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Scroll to explore
          </span>
          <div style={{ width: 22, height: 34, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: 3 }}>
            <div style={{ width: 4, height: 7, borderRadius: 2, background: "#6366F1", animation: "scrollDown 2s ease infinite" }} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justifyContent: center;
          padding: 100px 24px 60px;
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 48px;
          align-items: center;
        }

        .hero-avatar-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-avatar-box {
          position: relative;
          width: 270px;
          height: 270px;
          border-radius: 50%;
          padding: 6px;
          background: linear-gradient(145deg, rgba(99, 102, 241, 0.4), rgba(255, 255, 255, 0.08));
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.7), 0 0 30px rgba(99, 102, 241, 0.2);
        }

        .hero-avatar-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          background: #0F1219;
          border: 2px solid rgba(255, 255, 255, 0.08);
        }

        .scroll-hint {
          text-align: center;
          margin-top: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        @keyframes scrollDown {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(12px); opacity: 0.3; }
          100% { transform: translateY(0); opacity: 1; }
        }

        /* Tablets & Laptops */
        @media (max-width: 992px) {
          .hero-grid {
            gap: 32px;
          }
          .hero-avatar-box {
            width: 220px;
            height: 220px;
          }
        }

        /* Smartphones & Small Tablets (Below 768px) */
        @media (max-width: 768px) {
          .hero-section {
            padding: 85px 18px 40px;
            min-height: auto;
          }
          .hero-grid {
            display: flex;
            flex-direction: column-reverse;
            gap: 28px;
            text-align: center;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-badge {
            margin-bottom: 14px;
          }
          .hero-avatar-box {
            width: 160px;
            height: 160px;
          }
          .hero-cta {
            width: 100%;
            justify-content: center;
          }
          .hero-btn {
            flex: 1 1 140px;
            justify-content: center;
            padding: 11px 16px;
            font-size: 0.84rem;
          }
          .hero-socials {
            justify-content: center;
          }
          .scroll-hint {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
