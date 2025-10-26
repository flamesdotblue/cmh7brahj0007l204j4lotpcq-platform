import { motion } from 'framer-motion';
import { Sparkles, Code2, Palette, Cpu } from 'lucide-react';

export default function About() {
  const items = [
    { icon: Sparkles, title: 'Style', text: 'Neon gradients, cosmic vibes, and anime motion principles.' },
    { icon: Code2, title: 'Code', text: 'React, TypeScript, Tailwind, and GLSL experiments.' },
    { icon: Palette, title: 'Design', text: 'UI kits, iconography, and animated compositions.' },
    { icon: Cpu, title: '3D & Motion', text: 'Spline scenes, WebGL shaders, micro-interactions.' },
  ];

  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(236,72,153,0.08),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          About Me
        </motion.h2>
        <p className="mt-3 max-w-2xl text-white/70">
          I’m a front-end developer and motion designer weaving anime energy into modern web apps. My workflow mixes rapid prototyping with detail-obsessed polish.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <item.icon className="size-6 text-fuchsia-300" />
              <h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
