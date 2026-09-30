"use client";
import { useState, FormEvent } from "react";

const CONTACT_INFO = [
  { icon: "📧", label: "Email",    value: "mehtabkhanmks784@gmail.com", href: "mailto:mehtabkhanmks784@gmail.com", color: "#0EA5E9" },
  { icon: "📱", label: "Phone 1",  value: "0324-0120522", href: "tel:03240120522", color: "#10B981" },
  { icon: "📱", label: "Phone 2",  value: "0328-0406784", href: "tel:03280406784", color: "#10B981" },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/mehtab-khan-521377429", href: "https://www.linkedin.com/in/mehtab-khan-521377429", color: "#0A66C2" },
  { icon: "🐙", label: "GitHub",   value: "github.com/mehtabkhanmks", href: "https://github.com/mehtabkhanmks", color: "#94A3B8" },
  { icon: "📍", label: "Location", value: "Islamabad, Pakistan", href: null, color: "#F59E0B" },
];

export default function Contact() {
  const [form,    setForm]    = useState({ name: "", email: "", subject: "", message: "" });
  const [sent,    setSent]    = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    const primaryRecipient = "mehtabkhanmks784@gmail.com";
    const subject = encodeURIComponent(form.subject || `Message from ${form.name} via Portfolio`);
    const body = encodeURIComponent(
      `Hello Mehtab,\n\n${form.message}\n\n---\nSender Name: ${form.name}\nSender Email: ${form.email}`
    );

    const mailtoUrl = `mailto:${primaryRecipient}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-divider" />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Get in Touch</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#F8FAFC", marginBottom: 12 }}>
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p style={{ color: "#94A3B8", maxWidth: 500, margin: "0 auto", lineHeight: 1.75, fontSize: "0.95rem" }}>
            Feel free to reach out for software projects, DevOps collaboration, or AI engineering opportunities.
          </p>
        </div>

        {/* Grid */}
        <div className="contact-grid">

          {/* Left info */}
          <div>
            <h3 style={{ fontWeight: 700, color: "#F8FAFC", fontSize: "1.05rem", marginBottom: 8 }}>Contact Details</h3>
            <p style={{ color: "#94A3B8", fontSize: "0.88rem", lineHeight: 1.75, marginBottom: 20 }}>
              Available for full-time, part-time, internship, and freelance roles in Islamabad or remotely.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 10, marginBottom: 20 }}>
              {CONTACT_INFO.map((c) => (
                <div
                  key={c.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "10px 14px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: 10,
                    transition: "all 0.2s ease",
                    cursor: c.href ? "pointer" : "default",
                  }}
                  onClick={() => c.href && window.open(c.href, "_blank")}
                  onMouseEnter={(e) => {
                    if (c.href) {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(14,165,233,0.4)";
                      (e.currentTarget as HTMLElement).style.background = "var(--bg-card-hover)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.background = "var(--bg-card)";
                  }}
                >
                  <div style={{ width: 34, height: 34, borderRadius: 8, background: `${c.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.95rem", flexShrink: 0 }}>
                    {c.icon}
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <p style={{ fontSize: "0.68rem", color: "#64748B", margin: 0 }}>{c.label}</p>
                    <p style={{ fontSize: "0.84rem", color: "#F1F5F9", fontWeight: 500, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability indicator */}
            <div style={{ padding: "12px 16px", background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.18)", borderRadius: 10, display: "flex", alignItems: "center", gap: 10 }}>
              <span className="status-dot" style={{ background: "#22C55E" }} />
              <div>
                <p style={{ fontWeight: 600, color: "#22C55E", margin: 0, fontSize: "0.84rem" }}>Ready for Opportunities</p>
                <p style={{ color: "#64748B", fontSize: "0.72rem", margin: 0 }}>Active response time within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="glass-card contact-form-card" style={{ padding: "28px" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "28px 0" }}>
                <div style={{ fontSize: "2.8rem", marginBottom: 12 }}>✉️</div>
                <h3 style={{ color: "#22C55E", fontWeight: 700, marginBottom: 6 }}>Email Prepared &amp; Sent!</h3>
                <p style={{ color: "#94A3B8", fontSize: "0.88rem", maxWidth: 360, margin: "0 auto" }}>
                  Your email client has been opened with the message to <strong>mehtabkhanmks784@gmail.com</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <h3 style={{ fontWeight: 700, color: "#F8FAFC", margin: 0, fontSize: "1rem" }}>Send Direct Message</h3>
                
                <div className="form-row">
                  <div>
                    <label style={{ fontSize: "0.74rem", color: "#94A3B8", display: "block", marginBottom: 5 }}>Your Name *</label>
                    <input
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid var(--border)",
                        borderRadius: 8,
                        color: "#F8FAFC",
                        fontSize: "0.86rem",
                        outline: "none",
                      }}
                      type="text"
                      placeholder="Mehtab"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.74rem", color: "#94A3B8", display: "block", marginBottom: 5 }}>Email *</label>
                    <input
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid var(--border)",
                        borderRadius: 8,
                        color: "#F8FAFC",
                        fontSize: "0.86rem",
                        outline: "none",
                      }}
                      type="email"
                      placeholder="your.email@domain.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: "0.74rem", color: "#94A3B8", display: "block", marginBottom: 5 }}>Subject</label>
                  <input
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--border)",
                      borderRadius: 8,
                      color: "#F8FAFC",
                      fontSize: "0.86rem",
                      outline: "none",
                    }}
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.74rem", color: "#94A3B8", display: "block", marginBottom: 5 }}>Message *</label>
                  <textarea
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--border)",
                      borderRadius: 8,
                      color: "#F8FAFC",
                      fontSize: "0.86rem",
                      outline: "none",
                      resize: "vertical",
                      minHeight: 110,
                    }}
                    placeholder="Write your message here..."
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary"
                  style={{ justifyContent: "center", padding: "12px", width: "100%" }}
                >
                  {sending ? "Opening Mailer..." : "✉️ Send Message to Mehtab"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 90px 24px;
          position: relative;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 36px;
          align-items: start;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        @media (max-width: 850px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 60px 16px;
          }
          .contact-form-card {
            padding: 20px !important;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
