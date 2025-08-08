import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Services from "./components/Services";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Blogs from './components/Blogs';
import Announcement from './components/Announcement';

function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      {/* <Education /> */}
      <Publications />
      <Certifications />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-cream px-0 sm:px-8 md:px-16">
      <main className="py-5">
        <div className="container mx-auto px-4 mb-8">
          <Announcement />
        </div>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>

        <Footer />

      </main>
    </div>
  );
}

export default App;