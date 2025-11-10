import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-8 lg:px-12">
          <a href="#home" className="font-semibold tracking-tight">
            Tanmay <span className="text-cyan-400">Singh</span>
          </a>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a href="#about" className="hover:text-cyan-300">About</a>
            <a href="#skills" className="hover:text-cyan-300">Skills</a>
            <a href="#projects" className="hover:text-cyan-300">Projects</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
          </nav>
          <a href="#projects" className="rounded-md bg-cyan-500 px-3 py-1.5 text-sm font-medium text-slate-900 hover:bg-cyan-400">
            View Work
          </a>
        </div>
      </header>

      <main className="[scrollbar-gutter:stable]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
