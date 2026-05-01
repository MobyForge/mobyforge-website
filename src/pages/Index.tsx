import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import Projects from "@/components/site/Projects";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "MobyForge — Web Dev, Cloud & Automation Agency";
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "MobyForge is a digital solutions agency: custom web development, AWS cloud infrastructure and WhatsApp automation systems built to scale.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
