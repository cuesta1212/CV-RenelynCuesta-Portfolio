import { MotionConfig } from "framer-motion";
import useTheme from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import GitHub from "./sections/GitHub";
import Achievements from "./sections/Achievements";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

export default function App() {
  const [dark, toggleTheme] = useTheme();
  return (
    // reducedMotion="user" makes Framer Motion obey the visitor's OS motion setting.
    <MotionConfig reducedMotion="user">
      <Navbar dark={dark} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <GitHub />
        <Achievements />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
