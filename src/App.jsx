import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink, Cpu, Database, Code, Brain } from 'lucide-react';
import { ParticleBackground, NeuralSphere } from './components/visuals';

const SectionWrapper = ({ children, id, className = '' }) => (
  <section id={id} className={`relative py-20 px-6 md:px-10 lg:px-20 ${className}`}>
    <div className="mx-auto max-w-7xl">{children}</div>
  </section>
);

const SectionTitle = ({ number, title }) => (
  <div className="mb-12 max-w-4xl">
    <div className="flex items-center gap-4 mb-4">
      <span className="inline-flex h-1.5 w-16 rounded-full bg-accent" />
      <span className="text-accent font-mono text-sm tracking-[0.4em]">{number}</span>
    </div>
    <h2 className="text-3xl md:text-4xl font-semibold text-white">{title}</h2>
  </div>
);

const GlassCard = ({ children, className = '' }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.95)] backdrop-blur-xl transition-all duration-300 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-50" />
    <div className="relative">{children}</div>
  </motion.div>
);

export default function App() {
  const skills = {
    'ML & Deep Learning': ['Scikit-Learn', 'PyTorch', 'TensorFlow', 'Model Evaluation'],
    'NLP & GenAI': ['LLMs', 'Transformers', 'RAG Pipelines', 'Prompt Engineering', 'FAISS'],
    'Backend & Tools': ['FastAPI', 'Flask', 'Docker', 'Git', 'Celery', 'MongoDB'],
  };

  const projects = [
    {
      title: 'Legal Clause Analyzer',
      desc: 'RAG-based legal assistant using FAISS and Gemini for semantic search.',
      tech: ['FastAPI', 'FAISS', 'Gemini', 'Python'],
      link: '#',
    },
    {
      title: 'AI Skill Game',
      desc: 'Adaptive quiz generation system with Gemini Flash integration.',
      tech: ['React Native', 'MongoDB', 'Gemini API'],
      link: '#',
    },
    {
      title: 'Video-to-Quiz Platform',
      desc: 'Automatic transcription and quiz generation from video content.',
      tech: ['Deepgram', 'Gemini', 'FastAPI'],
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_18%),linear-gradient(180deg,_#020617_0%,_#0f172a_100%)] text-text selection:bg-accent/30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <ParticleBackground />
          </Suspense>
        </Canvas>
      </div>

      <SectionWrapper id="home" className="pt-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="inline-flex items-center gap-3 rounded-full border border-accent/30 bg-slate-950/70 px-4 py-2 text-sm text-accent shadow-[0_15px_50px_-30px_rgba(56,189,248,0.85)]"
            >
              AI Portfolio · NLP · RAG Systems · Production-ready ML
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight text-white">
                Muhammad Maawaz <br></br>I build intelligent AI products with compelling user experiences.
              </h1>
              <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
                I help companies turn data into intelligent systems using NLP, RAG, and scalable ML architectures.
                My work blends modern engineering with clean product design.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-slate-950 transition hover:scale-105">
                  View Projects
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-accent/40 px-8 py-3 text-sm font-semibold text-slate-100 transition hover:border-accent hover:bg-accent/10">
                  Contact Me
                </a>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {['5+ Projects', '2 Internships', '90%+ Accuracy', 'CS Graduate'].map((item, idx) => (
                <div key={idx} className="rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-5 text-center shadow-xl shadow-slate-950/30 backdrop-blur-xl">
                  <p className="text-lg font-semibold text-white">{item.split(' ')[0]}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.24em] text-slate-400">{item.replace(/^[^ ]+ /, '')}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full overflow-hidden rounded-[2.5rem] shadow-[0_50px_120px_-70px_rgba(56,189,248,0.45)] bg-transparent">
            <div className="aspect-[4/5] min-h-[420px]">
              <Canvas camera={{ position: [0, 0, 2.6], fov: 35 }} className="h-full w-full">
                <ambientLight intensity={0.65} />
                <directionalLight position={[2, 2, 2]} intensity={1.1} />
                <pointLight position={[-3, 1.5, 5]} intensity={1.2} color="#A855F7" />
                <pointLight position={[3.5, -2, 4]} intensity={0.9} color="#38BDF8" />
                <Suspense fallback={null}>
                  <NeuralSphere />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="about">
        <SectionTitle number="01." title="About Me" />
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <GlassCard className="space-y-6">
            <p className="text-slate-300 leading-relaxed">
              I am a Computer Science graduate focused on AI-driven products and engineering.
              I specialize in end-to-end solutions for NLP, Retrieval-Augmented Generation, and ML infrastructure.
            </p>
            <p className="text-slate-300 leading-relaxed">
              My work brings research-grade models into production, with a strong emphasis on clean interfaces,
              fast performance, and measurable business impact.
            </p>
          </GlassCard>
          <div className="grid gap-4 sm:grid-cols-2">
            {['RAG Systems', 'Production APIs', 'Semantic Search', 'AI Automations'].map((label, idx) => (
              <div key={idx} className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6 text-center shadow-[0_25px_60px_-40px_rgba(15,23,42,0.8)]">
                <p className="text-lg font-semibold text-white">{label}</p>
                <p className="mt-2 text-sm text-slate-400">Handcrafted systems built for modern workflows.</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="skills">
        <SectionTitle number="02." title="Technical Arsenal" />
        <div className="grid gap-8 md:grid-cols-3">
          {Object.entries(skills).map(([category, items], idx) => (
            <GlassCard key={idx} className="space-y-6">
              <div className="flex items-center gap-3 text-accent">
                {idx === 0 && <Brain size={22} />}
                {idx === 1 && <Cpu size={22} />}
                {idx === 2 && <Database size={22} />}
                <h3 className="text-xl font-semibold text-white">{category}</h3>
              </div>
              <div className="grid gap-2">
                {items.map(skill => (
                  <span key={skill} className="rounded-2xl bg-white/5 px-3 py-2 text-sm text-slate-200 shadow-sm shadow-slate-950/10">
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="projects">
        <SectionTitle number="03." title="Featured Work" />
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, idx) => (
            <GlassCard key={idx} className="group flex flex-col justify-between gap-6 p-8">
              <div className="flex items-center justify-between">
                <Code className="text-accent" size={30} />
                <ExternalLink className="text-slate-400 transition group-hover:text-accent" size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">{project.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-accent">
                    {t}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="contact">
        <SectionTitle number="04." title="Get In Touch" />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <GlassCard className="space-y-6 px-10 py-12">
            <p className="text-slate-300 leading-relaxed">
              I'm actively looking for new opportunities in AI/ML Engineering. If you'd like to collaborate on a project or learn more about my work, send a message and let's connect.
            </p>
            <a href="mailto:maawazali111@gmail.com" className="inline-flex items-center gap-3 rounded-full bg-accent/95 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-105">
              <Mail /> Email Me
            </a>
          </GlassCard>

          <GlassCard className="space-y-6 px-8 py-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-200">
                <span className="inline-flex h-3 w-3 rounded-full bg-accent" />
                <span>maawazali111@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-200">
                <span className="inline-flex h-3 w-3 rounded-full bg-accent" />
                <span>+92 346 5120975</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-4 text-slate-300">
              <a href="https://github.com/mwchuchu" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-accent/50 hover:text-accent">
                GitHub
              </a>
              <a href="https://linkedin.com/in/maawaz" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-accent/50 hover:text-accent">
                LinkedIn
              </a>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        © 2025 Muhammad Maawaz. Built with React, Three.js & Framer Motion.
      </footer>
    </div>
  );
}
