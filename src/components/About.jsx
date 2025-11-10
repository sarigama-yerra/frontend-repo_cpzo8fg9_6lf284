import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { label: 'Years of Learning', value: '2+' },
    { label: 'Projects Completed', value: '12+' },
    { label: 'Certifications Earned', value: '15+' },
    { label: 'Hackathons Participated', value: '5' },
  ];

  return (
    <section id="about" className="relative w-full bg-slate-950 py-24 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-start gap-12 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1400&auto=format&fit=crop"
                alt="Tanmay Singh portrait"
                className="h-full w-full object-cover opacity-90"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">About</h2>
            <p className="mt-4 text-slate-300">
              I’m Tanmay Singh — an aspiring full‑stack creator focused on automation, scalability, and human‑centric design. I build systems that speak for themselves: efficient, reliable, and ready for the future.
            </p>
            <p className="mt-3 text-slate-300">
              Currently deepening expertise in Node.js, MongoDB, and AI‑integrated architectures while honing leadership and execution discipline. My values are simple: Authenticity, Vision, Discipline, and Impact.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                  <div className="text-2xl font-semibold text-cyan-400">{s.value}</div>
                  <div className="text-sm text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
