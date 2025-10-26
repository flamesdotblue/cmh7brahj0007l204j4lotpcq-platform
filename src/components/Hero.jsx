import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,6,11,0)_0%,rgba(5,6,11,0.2)_40%,rgba(5,6,11,0.7)_70%,#05060b_100%)]" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-fuchsia-300/90 backdrop-blur">
              <Rocket className="size-3" />
              Futuristic Anime Aesthetic
            </span>
            <h1 className="mt-5 text-4xl leading-tight font-extrabold sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-violet-300 to-sky-300">
              Hi, I’m Nova. I build immersive, anime-inspired web experiences.
            </h1>
            <p className="mt-4 text-white/80 text-base sm:text-lg">
              Blending neon futurism with clean code. Scroll down to explore my world of projects, design, and animation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500/90 px-5 py-2.5 text-sm font-medium shadow-lg shadow-fuchsia-500/30 hover:bg-fuchsia-400 transition-colors">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors">
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
