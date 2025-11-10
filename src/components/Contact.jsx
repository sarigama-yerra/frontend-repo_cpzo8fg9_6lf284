import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Send, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-24 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Contact</h2>
        <p className="mt-3 max-w-2xl text-slate-300">Let’s build something impactful together. Reach out for collaborations, projects, or opportunities.</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-slate-300">Name</label>
                <input className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none focus:border-cyan-500" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none focus:border-cyan-500" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none focus:border-cyan-500" placeholder="Share a few details..." />
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-900 transition hover:bg-cyan-400">
                <Send className="h-4 w-4" /> Send Message
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="space-y-4">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/70 p-3 hover:border-cyan-500/40">
                <Linkedin className="h-5 w-5 text-cyan-400" />
                <span className="text-slate-200">LinkedIn</span>
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/70 p-3 hover:border-cyan-500/40">
                <Github className="h-5 w-5 text-cyan-400" />
                <span className="text-slate-200">GitHub</span>
              </a>
              <a href="mailto:hello@example.com" className="group flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/70 p-3 hover:border-cyan-500/40">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span className="text-slate-200">hello@example.com</span>
              </a>
              <a href="https://devfolio.co/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/70 p-3 hover:border-cyan-500/40">
                <Globe className="h-5 w-5 text-cyan-400" />
                <span className="text-slate-200">Devfolio</span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
          Crafted with vision by Tanmay Singh • Built with ❤️
        </div>
      </div>
    </section>
  );
}
