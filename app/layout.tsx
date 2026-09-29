import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0C0C10",
};

export const metadata: Metadata = {
  title: "Mehtab Khan | Full Stack Developer & DevOps Engineer",
  description:
    "Portfolio of Mehtab Khan — BSIT student at Air University Islamabad, Full Stack Developer, and DevOps Engineer.",
  keywords: [
    "Mehtab Khan", "Full Stack Developer", "DevOps Engineer", "AI Systems",
    "BSIT", "Air University", "Islamabad", "Pakistan", "React", "Node.js", "Portfolio",
  ],
  authors: [{ name: "Mehtab Khan" }],
  openGraph: {
    title: "Mehtab Khan | Full Stack Developer & DevOps Engineer",
    description: "BSIT student at Air University Islamabad — Full Stack Developer & DevOps Engineer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
