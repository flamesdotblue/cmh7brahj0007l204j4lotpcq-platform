import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.08),transparent_55%)]" />
      <div className="mx-auto max-w-3xl px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center"
        >
          Let’s Team Up
        </motion.h2>
        <p className="mt-3 text-center text-white/70">
          Open to collaborations, freelance projects, and full-time roles. Tell me about your idea and we’ll make it sparkle.
        </p>

        <div className="mt-10 grid gap-4">
          <a
            href="mailto:hello@example.com"
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 hover:bg-white/10 transition-colors"
          >
            <Mail className="size-5 text-fuchsia-300" /> hello@example.com
          </a>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition-colors"
            >
              <Github className="size-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition-colors"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
