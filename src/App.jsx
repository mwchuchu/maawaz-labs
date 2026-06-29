import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, ExternalLink, Link2, GitBranch, Cpu, Database, Code, Brain } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJsSquare, faGit, faGithub, faDocker, faReact, faCodepen} from '@fortawesome/free-brands-svg-icons';
import { faDashboard, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { NeuralSphere } from './components/visuals';
import { SiRedis ,SiScikitlearn,SiNumpy, SiPytorch, SiTensorflow, SiFastapi, SiPostgresql, SiPandas } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

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
    <h2 className="text-3xl md:text-4xl font-semibold text-text">{title}</h2>
  </div>
);

const GlassCard = ({ children, className = '' }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className={`relative overflow-hidden rounded-[2rem] border border-[rgba(241,231,205,0.14)] bg-slate-950/60 p-10 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.95)] backdrop-blur-xl transition-all duration-300 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-50" />
    <div className="relative">{children}</div>
  </motion.div>
);

export default function App() {
  const experience = [
    {
      role: 'Machine Learning Intern',
      company: 'Dive Deep AI',
      period: 'July 2025 – August 2025',
      description:
        'Built a Retrieval-Augmented Generation (RAG) legal clause chatbot using FAISS for accurate semantic query retrieval.',
      highlights: [
        'Implemented semantic search with FAISS to deliver fast, relevant legal responses.',
        'Developed transfer learning image classification models using MobileNetV2 and ResNet101.',
        'Achieved 90%+ classification accuracy through model optimization and fine-tuning.',
      ],
    },
    {
      role: 'Data Science Intern',
      company: 'Developer’s Hub',
      period: 'September 2024 – December 2024',
      description:
        'Designed and deployed machine learning models integrated into production-level web applications.',
      highlights: [
        'Improved decision-making efficiency by 30% through optimized predictive modeling.',
        'Delivered end-to-end ML pipelines from data preprocessing to deployment.',
        'Built production-ready model APIs with FastAPI and Flask for web integration.',
      ],
    },
  ];

  const certifications = [
    { title: 'Machine Learning with Python', issuer: 'freeCodeCamp', year: '2025', image: '/certifications/freecodecamp.png' },
    { title: 'Full Stack AI Engineer', issuer: 'Udemy', year: '2025', image: '/certifications/udemy.png' },
    { title: 'Mastering PyTorch', issuer: 'Udemy', year: '2025', image: '/certifications/udemy.png' },
    { title: 'Certified AI Engineering Master Class', issuer: 'Udemy', year: '2025', image: '/certifications/udemy.png' },
    { title: 'TensorFlow Master Class', issuer: 'Udemy', year: '2025', image: '/certifications/udemy.png' },
    { title: 'Azure DevOps', issuer: 'Udemy', year: '2025', image: '/certifications/udemy.png' },
    { title: 'Claude 101', issuer: 'Anthropic', year: '2026', image: '/certifications/Claude 101.png' },
    { title: 'Introduction to MCP', issuer: 'Anthropic', year: '2026', image: '/certifications/anthropic.png' },
    { title: 'AI Fluency', issuer: 'Anthropic', year: '2026', image: '/certifications/AI-fluency certificate.png' },
    { title: 'Google AI Essentials', issuer: 'Coursera', year: '2026', image: '/certifications/Google AI essentails.png' },
    { title: 'Prompt Engineering', issuer: 'Coursera', year: '2026', image: '/certifications/coursera.png' },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science (BSCS)',
      institution: 'Bahria University Islamabad',
      year: '2021 – 2025',
    },
  ];

  const interests = [
    'Machine Learning Engineering',
    'Natural Language Processing',
    'Retrieval-Augmented Generation (RAG)',
    'AI Automation Systems',
    'Intelligent EdTech Platforms',
  ];

  const technologies = [
    { name: 'Python', icon: faPython, type: 'fa' },
    { name: 'JavaScript', icon: faJsSquare, type: 'fa' },
    { name: 'C++', icon: faJsSquare, type: 'fa' },
    { name: 'Git', icon: faGit, type: 'fa' },
    { name: 'GitHub', icon: faGithub, type: 'fa' },
    { name: 'Docker', icon: faDocker, type: 'fa' },
    { name: 'PyTorch', icon: SiPytorch, type: 'si' },
    { name: 'TensorFlow', icon: SiTensorflow, type: 'si' },
    { name: 'React', icon: faReact, type: 'fa' },
    { name: 'FastAPI', icon: SiFastapi, type: 'si' },
    { name: 'MongoDB', icon: faDatabase, type: 'fa' },
    { name: 'PostgreSQL', icon: SiPostgresql, type: 'si' },
    { name: 'VS Code', icon: VscVscode, type: 'vsc' },
    { name: 'Pandas', icon: SiPandas, type: 'si' },
    { name: 'NumPy', icon: SiNumpy, type: 'si' },
    { name: 'Scikit-learn', icon: SiScikitlearn, type: 'si' },
    { name: 'Redis', icon: SiRedis, type: 'si' }

  ];

  const skills = {
    'Programming & Tools': ['Python', 'JavaScript', 'C++', 'SQL', 'Git', 'GitHub', 'Docker', 'Pandas', 'NumPy', 'VS Code'],
    'AI & Machine Learning': ['Scikit-learn', 'PyTorch', 'TensorFlow', 'Deep Learning', 'Transfer Learning', 'Computer Vision', 'Predictive Modeling', 'Model Evaluation'],
    'NLP & Retrieval': ['Transformers', 'LLMs', 'Embeddings', 'RAG Pipelines', 'Sentence Transformers', 'Vector Databases', 'FAISS'],
  };

  const projects = [
    {
      title: 'AI-Based Skill Game',
      desc: ' Built an adaptive mobile quiz app using Gemini Flash 1.5 API with dynamic difficulty levels.',
      tech: ['React Native', 'MongoDB', 'Gemini Flash', 'Python'],
      github: 'https://github.com/mwchuchu/FYP',
      live: '#',
    },
    {
      title: 'Enhanced Smart Legal Clause Analyzer',
      desc: 'Designed a RAG system with FAISS for legal document chunking, embeddings, and semantic search.',
      tech: ['FastAPI', 'FAISS', 'Celery', 'Python'],
      github: 'https://github.com/mwchuchu/legalclauseanalyzer',
      live: '#',
    },
    {
      title: 'AI Automation Customer Support Agent',
      desc: 'Built a scalable conversational AI for ticket classification, routing, and context-aware responses.',
      tech: ['FastAPI', 'Gemini APIs', 'Python', 'NLP'],
      github: 'https://github.com/mwchuchu/haseemportfolio',
      live: '#',
    },
    {
      title:'A clients portfolio website',
      desc: 'Developed a responsive portfolio website for showcasing projects and skills, with a contact form integrated with EmailJS.',
      tech: ['React', 'Tailwind CSS', 'EmailJS', 'JavaScript'],
      github: 'https://github.com/mwchuchu/haseemportfolio',
      live: 'https://haseemx.vercel.app/',
    },
    {
      title: 'Video-to-Quiz AI Learning Platform',
      desc: 'Converted lecture videos into MCQs using Deepgram transcription and Gemini-powered question generation.',
      tech: ['Deepgram', 'Gemini', 'FastAPI', 'Python'],
      github: '#',
      live: '#',
    },
    {
      title: 'PDF Chatbot (RAG-Based System)',
      desc: 'Built a multi-document chatbot with embedding retrieval and semantic search across PDF datasets.',
      tech: ['FastAPI', 'Embeddings', 'Python', 'Vector Search'],
      github: '#',
      live: '#',
    },
    {
      title: 'Pokemon Classifier (Pytorch)',
      desc: 'Developed a PyTorch-based image classifier for identifying different Pokemon species.',
      tech: ['FastAPI', 'PyTorch', 'Python', 'HTML/CSS'],
      github: 'https://github.com/mwchuchu/pokemon-classifier',
      live: 'https://huggingface.co/spaces/maawaz/pokemon-classifier',
    },
    {
      title: "Spam SMS classifier",
      desc: "Built a machine learning model to classify SMS messages as spam or not spam using NLP techniques.",
      tech: ["Python", "Scikit-learn", "NLP"],
      github: "https://github.com/mwchuchu/spam-sms-classifier",
      live: "https://huggingface.co/spaces/maawaz/spam-classifier"
    }
  ];

  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleEmailSend = (event) => {
    event.preventDefault();
    setSending(true);
    setStatusMessage('');

    emailjs
      .sendForm(
        'service_qngik5p',
        'template_e7ne0wc',
        formRef.current,
        'DSBbfTAfTNs_THD4-'
      )
      .then(
        () => {
          setStatusMessage('Message sent successfully!');
          setSending(false);
          event.target.reset();
        },
        () => {
          setStatusMessage('Unable to send message at the moment. Please try again later.');
          setSending(false);
        }
      );
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(127,191,62,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(241,231,205,0.18),_transparent_18%),linear-gradient(180deg,_#081f14_0%,_#173624_100%)] text-text selection:bg-accent/30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 2, 2]} intensity={0.9} />
          <Suspense fallback={null}>
            <NeuralSphere />
          </Suspense>
        </Canvas>
      </div>

      <SectionWrapper id="home" className="pt-28">
        <div className="grid gap-10 lg:grid-cols-1 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-12"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight text-text">
                Muhammad Maawaz
                <br />AI, Machine Learning & NLP Engineer
              </h1>
              <p className="max-w-2xl text-lg text-[#d7c8a3] sm:text-xl leading-relaxed">
                Get your AI projects done today.<br></br>
                Experienced in building end-to-end AI systems including RAG pipelines, vector search, intelligent chatbots, and production-ready backend APIs.
              </p>

              <div className="flex flex-col gap-5 sm:flex-row">
                <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-slate-950 transition hover:scale-105">
                  View Projects
                </a>
                <button
                  type="button"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center rounded-full border border-accent/40 bg-[rgba(241,231,205,0.08)] px-8 py-3 text-sm font-semibold text-slate-100 transition hover:border-accent hover:bg-accent/10"
                >
                  Hire Me
                </button>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {['50+ Projects', '90%+ Accuracy', 'CS Graduate'].map((item, idx) => (
                <div key={idx} className="rounded-3xl border border-[rgba(241,231,205,0.14)] bg-slate-950/70 px-4 py-5 text-center shadow-xl shadow-slate-950/30 backdrop-blur-xl">
                  <p className="text-lg font-semibold text-text">{item.split(' ')[0]}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.24em] text-[#b8a983]">{item.replace(/^[^ ]+ /, '')}</p>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </SectionWrapper>

      <SectionWrapper id="about">
        <SectionTitle number="01." title="About Me" />
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <GlassCard className="space-y-6">
            <p className="text-[#d7c8a3] leading-relaxed">
              <br></br>I specialize in end-to-end solutions for NLP, Retrieval-Augmented Generation, and ML infrastructure.
            </p>
            <p className="text-[#d7c8a3] leading-relaxed">
              My work brings research-grade models into production, with a strong emphasis on clean interfaces,
              fast performance, and measurable business impact.
            </p>
          </GlassCard>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { header: 'Deep Learning', tagline: 'Advanced neural networks for complex pattern recognition' },
              { header: 'Machine Learning', tagline: 'Intelligent algorithms solving real-world problems' },
              { header: 'RAGs', tagline: 'Semantic retrieval powering intelligent search systems' },
              { header: 'Full Stack', tagline: 'End-to-end solutions from backend to production' }
            ].map((item, idx) => (
              <div key={idx} className="rounded-[1.75rem] border border-[rgba(241,231,205,0.14)] bg-slate-950/70 p-6 text-center shadow-[0_25px_60px_-40px_rgba(15,23,42,0.8)]">
                <p className="text-lg font-semibold text-text">{item.header}</p>
                <p className="mt-2 text-sm text-[#b8a983]">{item.tagline}</p>
                
              </div>
              
            ))
            }
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="experience">
        <SectionTitle number="02." title="Experience" />
        <div className="grid gap-6">
          {experience.map((item, idx) => (
            <GlassCard key={idx} className="space-y-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-text">{item.role}</h3>
                  <p className="text-sm text-[#b8a983]">{item.company}</p>
                </div>
                <span className="rounded-full border border-accent/20 bg-[rgba(241,231,205,0.08)] px-4 py-2 text-sm text-[#f1e7cd]">{item.period}</span>
              </div>
              <p className="text-[#d7c8a3] leading-relaxed">{item.description}</p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-[#d7c8a3]">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="skills">
        <SectionTitle number="03." title="Technical Arsenal" />
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .tech-slider {
            overflow: hidden;
            background: linear-gradient(90deg, rgba(15,23,42,0.8) 0%, transparent 10%, transparent 90%, rgba(15,23,42,0.8) 100%);
            border-radius: 2rem;
            padding: 2rem 0;
            border: 1px solid rgba(241,231,205,0.14);
          }
          .tech-track {
            display: flex;
            gap: 2rem;
            animation: scroll-left 25s linear infinite;
            width: max-content;
            padding: 0 2rem;
          }
          .tech-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="tech-slider">
          <div className="tech-track">
            {[...technologies, ...technologies].map((tech, idx) => {
              const IconComponent = tech.icon;
              return (
                <div key={idx} className="flex flex-col items-center gap-3 flex-shrink-0" style={{ width: '100px' }}>
                  <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-[rgba(241,231,205,0.08)] border border-[rgba(241,231,205,0.14)] shadow-lg hover:scale-110 transition-transform">
                    {tech.type === 'fa' ? (
                      <FontAwesomeIcon icon={IconComponent} size="2x" className="text-accent" />
                    ) : (
                      <IconComponent size={32} className="text-accent" />
                    )}
                  </div>
                  <span className="text-xs text-[#b8a983] text-center font-medium">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="projects">
        <SectionTitle number="04." title="Featured Work" />
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, idx) => (
            <GlassCard key={idx} className="group flex flex-col justify-between gap-8 p-8">
              <div className="flex items-center justify-between">
                <Code className="text-accent" size={30} />
                <ExternalLink className="text-[#b8a983] transition group-hover:text-accent" size={20} />
              </div>
              <div className="space-y-5">
                <h3 className="text-2xl font-semibold text-text">{project.title}</h3>
                <p className="text-sm leading-relaxed text-[#d7c8a3]">{project.desc}</p>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                {project.tech.map(t => (
                  <span key={t} className="rounded-full border border-[rgba(241,231,205,0.14)] bg-[rgba(241,231,205,0.08)] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-accent">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-6">
                {project.github && project.github !== '#' && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-105">
                    GitHub
                  </a>
                )}
                {project.live && project.live !== '#' && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-[rgba(241,231,205,0.14)] bg-[rgba(241,231,205,0.08)] px-4 py-2 text-sm font-semibold text-[#d7c8a3] transition hover:border-accent/50 hover:text-accent hover:scale-105">
                    Live Demo
                  </a>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="certifications">
        <SectionTitle number="05." title="Certifications" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <GlassCard key={idx} className="flex flex-col gap-4 p-6 text-[#d7c8a3]">
              {cert.image && (
                <img src={cert.image} alt={`${cert.issuer} logo`} className="h-16 w-16 rounded-lg object-cover" />
              )}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-text">{cert.title}</h3>
                <p className="text-sm text-[#b8a983]">{cert.issuer}</p>
                <span className="block rounded-full border border-accent/20 bg-[rgba(241,231,205,0.08)] px-3 py-2 text-xs uppercase tracking-[0.24em] text-accent">{cert.year}</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="education">
        <SectionTitle number="06." title="Education" />
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, idx) => (
            <GlassCard key={idx} className="space-y-3 p-6">
              <h3 className="text-2xl font-semibold text-text">{item.degree}</h3>
              <p className="text-[#b8a983]">{item.institution}</p>
              <span className="inline-flex rounded-full border border-accent/20 bg-[rgba(241,231,205,0.08)] px-3 py-2 text-xs uppercase tracking-[0.24em] text-accent">{item.year}</span>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="interests">
        <SectionTitle number="07." title="Areas of Interest" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((interest, idx) => (
            <GlassCard key={idx} className="p-5">
              <p className="text-[#f1e7cd]">{interest}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="contact">
        <SectionTitle number="08." title="Get In Touch" />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <GlassCard className="space-y-6 px-8 py-10">
            <p className="text-[#d7c8a3] leading-relaxed">
              Send a message and enter the creative world of AI, Machine Learning, and NLP. I am open to freelance projects, collaborations, and full-time opportunities.
            </p>
            <form ref={formRef} onSubmit={handleEmailSend} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-2xl border border-[rgba(241,231,205,0.14)] bg-slate-950/80 px-4 py-3 text-sm text-text outline-none transition focus:border-accent/60"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your email"
                  required
                  className="w-full rounded-2xl border border-[rgba(241,231,205,0.14)] bg-slate-950/80 px-4 py-3 text-sm text-text outline-none transition focus:border-accent/60"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full rounded-2xl border border-[rgba(241,231,205,0.14)] bg-slate-950/80 px-4 py-3 text-sm text-text outline-none transition focus:border-accent/60"
              />
              <textarea
                name="message"
                placeholder="Your message"
                rows="5"
                required
                className="w-full rounded-2xl border border-[rgba(241,231,205,0.14)] bg-slate-950/80 px-4 py-3 text-sm text-text outline-none transition focus:border-accent/60"
              />
              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-105 disabled:opacity-60"
              >
                {sending ? 'Sending...' : 'Send Message'}
              </button>
              {statusMessage && <p className="text-sm text-[#d7c8a3]">{statusMessage}</p>}
            </form>
          </GlassCard>

          <GlassCard className="space-y-6 px-8 py-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#f1e7cd]">
                <span className="inline-flex h-3 w-3 rounded-full bg-accent" />
                <span>Rawalpindi, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-[#f1e7cd]">
                <span className="inline-flex h-3 w-3 rounded-full bg-accent" />
                <span>+92 346 5120975</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-4 text-[#d7c8a3]">
              <a href="https://github.com/mwchuchu" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-[rgba(241,231,205,0.14)] bg-[rgba(241,231,205,0.08)] px-4 py-3 transition hover:border-accent/50 hover:text-accent">
                <GitBranch size={18} />
                GitHub
              </a>
              <a href="https://linkedin.com/in/maawaz" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-[rgba(241,231,205,0.14)] bg-[rgba(241,231,205,0.08)] px-4 py-3 transition hover:border-accent/50 hover:text-accent">
                <Link2 size={18} />
                LinkedIn
              </a>
              <a href="mailto:hello@maawaz.vercel.app" className="inline-flex items-center gap-2 rounded-2xl border border-[rgba(241,231,205,0.14)] bg-[rgba(241,231,205,0.08)] px-4 py-3 transition hover:border-accent/50 hover:text-accent">
                <Mail size={18} />
                Email
              </a>
              
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <footer className="border-t border-[rgba(241,231,205,0.14)] py-8 text-center text-sm text-[#b8a981]">
        © 2026 Muhammad Maawaz. Built with React, Three.js & Framer Motion.
      </footer>
    </div>
  );
}
