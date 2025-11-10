import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    name: 'Samvidhan Setu',
    role: 'Founder & Frontend + AI Integration Lead',
    desc: 'AI-powered legal research platform. Won “Best Freshers Team” at OSSome Hacks 2.0.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'LLM APIs'],
    github: '#',
    demo: '#',
  },
  {
    name: 'MargSetu',
    role: 'System Designer',
    desc: 'Digital road infrastructure system. Top-10 project in CodeNex Hackathon.',
    stack: ['React', 'GIS', 'Node.js', 'MongoDB'],
    github: '#',
    demo: '#',
  },
  {
    name: 'LMS Website',
    role: 'Full‑Stack Developer',
    desc: 'MERN-based learning platform with consistent UI and robust auth flows.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: '#',
    demo: '#',
  },
];

function ProjectCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
      <div>
        <div className="text-xl font-semibold text-slate-100">{item.name}</div>
        <div className="mt-1 text-sm text-cyan-300">{item.role}</div>
        <p className="mt-3 text-slate-300">{item.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.stack.map((s) => (
            <span key={s} className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-200">
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <a href={item.github} className="inline-flex items-center gap-2 text-sm text-slate-200 hover:text-cyan-400">
          <Github className="h-4 w-4" /> Code
        </a>
        <a href={item.demo} className="inline-flex items-center gap-2 text-sm text-slate-200 hover:text-cyan-400">
          <ExternalLink className="h-4 w-4" /> Live
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-24 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex items-baseline justify-between">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Projects</h2>
          <a href="#contact" className="text-sm text-cyan-300 hover:text-cyan-200">Let’s build something impactful →</a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.name} item={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
