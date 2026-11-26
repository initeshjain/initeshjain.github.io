import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import Services from "./components/Services";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import { MarqueeTicker } from "./components/MarqueeTicker";
import { EngineeringBackground } from "./components/EngineeringBackground";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <MarqueeTicker />
      <Projects />
      <Experience />
      <Skills />
      <Publications />
      <Certifications />
    </>
  );
}

function App() {
  return (
    <div className="relative min-h-screen bg-[#F6F4EE] text-[#12131C] font-sans antialiased selection:bg-[#FEF08A] selection:text-[#12131C]">
      {/* Background Engineering Telemetry & Circuit Animation Canvas */}
      <EngineeringBackground />

      <ScrollToTop />
      <Header />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
