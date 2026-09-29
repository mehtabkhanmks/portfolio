import DynamicBackground from "@/components/DynamicBackground";
import Navbar            from "@/components/Navbar";
import Hero              from "@/components/Hero";
import About             from "@/components/About";
import Skills            from "@/components/Skills";
import Projects          from "@/components/Projects";
import Certifications    from "@/components/Certifications";
import Research          from "@/components/Research";
import Contact           from "@/components/Contact";
import Footer            from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ position: "relative", minHeight: "100vh" }}>
      <DynamicBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Research />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
