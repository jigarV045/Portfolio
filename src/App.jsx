import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import useBotpress from './hooks/useBotpress';
import CursorGlow from './components/CursorGlow';

export default function App() {
  useBotpress();
  return (
    <ThemeProvider>
      <CursorGlow />
      <LoadingScreen />
      <ScrollProgress />
      <div className="min-h-screen bg-[#0F172A] text-white overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}
