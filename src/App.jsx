import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Star } from 'lucide-react';

export default function App() {
  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash) {
        const el = document.querySelector(window.location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#05060b] text-white antialiased">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-sm bg-black/30">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <Star className="size-5 text-fuchsia-400" />
            <span className="font-semibold tracking-wide">AnimeVerse</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-fuchsia-300 transition-colors">About</a>
            <a href="#projects" className="hover:text-fuchsia-300 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-fuchsia-300 transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex md:hidden items-center gap-2 rounded-full bg-fuchsia-500/90 px-4 py-2 text-sm font-medium shadow-lg shadow-fuchsia-500/30 hover:bg-fuchsia-400 transition-colors">Say Hi</a>
        </div>
      </header>

      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>

      <footer className="mt-20 border-t border-white/10/ bg-black/30">
        <div className="mx-auto max-w-7xl px-4 py-10 text-center text-sm text-white/60">
          © {new Date().getFullYear()} AnimeVerse Portfolio. Crafted with cosmic vibes.
        </div>
      </footer>
    </div>
  );
}
