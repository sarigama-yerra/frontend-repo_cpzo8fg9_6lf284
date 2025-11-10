import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const SkillPill = ({ name }: { name: string }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1 text-sm text-slate-200">
    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
    {name}
  </span>
);

export default function Skills() {
  const stack = {
    Frontend: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    Backend: ['Node.js', 'Express', 'MongoDB'],
    'AI / Cloud': ['Google Cloud', 'IBM Cloud', 'AWS'],
    Tools: ['Git', 'VS Code', 'Postman', 'Figma'],
  } as Record<string, string[]>;

  const exploring = ['Agentic AI', 'Automation Systems', 'Scalable Architectures'];

  return (
    <section id="skills" className="relative w-full bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Skills & Tech Stack</h2>
          <Sparkles className="h-5 w-5 text-cyan-400" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {Object.entries(stack).map(([category, items]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/70 to-slate-900/30 p-6">
              <div className="text-sm font-medium text-cyan-300">{category}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((n) => (
                  <SkillPill key={n} name={n} />
                ))}
              </div>
              <div className="mt-6 h-2 w-full overflow-hidden rounded bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '92%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full rounded bg-gradient-to-r from-cyan-400 to-blue-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <div className="text-sm font-medium text-cyan-300">Currently Exploring</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {exploring.map((e) => (
              <SkillPill key={e} name={e} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
