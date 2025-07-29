import Alert from './components/Alert';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Services from "./components/Services";
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';

function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Education />
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
          <Alert />
        </div>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>

        <Footer />

      </main>
    </div>
  );
}

export default App;