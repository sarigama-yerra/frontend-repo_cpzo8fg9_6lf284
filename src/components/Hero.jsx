import { motion } from 'framer-motion';
import { Download, ArrowRight, Linkedin, Github, ExternalLink } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Interactive 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability (keeps 3D interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.15),transparent_60%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pb-24 pt-32 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/40 px-3 py-1 text-xs text-cyan-300 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Vision-Driven Creator
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Tanmay Singh — Building the Future of Scalable, Intelligent Web Experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 max-w-2xl text-slate-300">
            Full-Stack Developer | AI-Native Thinker | Vision-Driven Creator. From Code to Vision — I build what others imagine.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-900 transition hover:bg-cyan-400">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-2 font-medium text-slate-100 transition hover:border-slate-600 hover:bg-slate-800/80">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-2 font-medium text-slate-100 transition hover:border-slate-600 hover:bg-slate-800/80">
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-4 py-2 font-medium text-slate-100 transition hover:border-slate-600 hover:bg-slate-800/80">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
