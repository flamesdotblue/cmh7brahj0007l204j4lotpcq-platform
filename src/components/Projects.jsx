import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Cosmic UI Kit',
    desc: 'A neon, anime-inspired component library built with Tailwind and Radix.',
    tags: ['React', 'Tailwind', 'Radix'],
    href: '#',
    repo: '#',
  },
  {
    title: 'Hologram Portfolio',
    desc: 'Framer Motion powered portfolio with holographic gradients and 3D overlays.',
    tags: ['Framer Motion', 'Spline', 'Vite'],
    href: '#',
    repo: '#',
  },
  {
    title: 'Shader Playground',
    desc: 'Experimental WebGL shaders inspired by anime FX: speed lines, bloom trails.',
    tags: ['GLSL', 'WebGL', 'Canvas'],
    href: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.08),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Featured Projects
        </motion.h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Selected works that fuse performance, accessibility, and stylish anime aesthetics.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="relative h-40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-400/40 via-purple-400/30 to-sky-400/40 group-hover:opacity-100 opacity-80 transition-opacity" />
                <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_2px,transparent_2px,transparent_6px)]" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70 flex-1">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs rounded-full border border-white/10 bg-white/5 px-2 py-1 text-white/70">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a href={p.href} className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-xs hover:bg-white/20 transition-colors">
                    <ExternalLink className="size-3" /> Live
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-xs hover:bg-white/20 transition-colors">
                    <Github className="size-3" /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
