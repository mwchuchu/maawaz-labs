import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Mail,
  ExternalLink,
  Brain,
  Sparkles,
  ArrowUpRight,
  Terminal,
  Layers,
  Cpu,
  Database,
  CheckCircle2,
  Copy,
  Check,
  FileDown,
  MapPin,
  Phone,
  GraduationCap,
  Award,
  Send,
  Code2,
  Bot,
  Zap,
  ArrowUp,
  Workflow,
  Search,
  Network,
  Server
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython,
  faJsSquare,
  faDocker,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import {
  SiScikitlearn,
  SiNumpy,
  SiPytorch,
  SiTensorflow,
  SiFastapi,
  SiPostgresql,
  SiPandas,
  SiRedis,
  SiMongodb,
  SiFlask,
  SiGoogle,
  SiAnthropic,
  SiCplusplus,
} from 'react-icons/si';

import Navbar from './components/Navbar';
import { CameraFlightText } from './components/visuals';

// Modern Kinetic Animated Heading Component
const AnimatedHeading = ({ text, className = '', as = 'h2' }) => {
  const words = text.split(' ');
  const Component = motion[as] || motion.h2;

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: '100%',
      rotate: 3,
    },
    visible: {
      opacity: 1,
      y: '0%',
      rotate: 0,
      transition: {
        type: 'spring',
        damping: 14,
        stiffness: 100,
      },
    },
  };

  return (
    <Component
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={`overflow-hidden flex flex-wrap gap-x-2.5 gap-y-1 ${className}`}
    >
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden inline-block py-0.5">
          <motion.span variants={child} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
};

// Animated Section Header with Viewport Trigger & Kinetic Words
const SectionHeader = ({ badge, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className="mb-14 text-center max-w-3xl mx-auto space-y-3"
  >
    <div className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-900 bg-white px-3.5 py-1 text-xs font-mono font-bold text-slate-900 shadow-[2px_2px_0px_#ff2d87]">
      <Sparkles size={13} className="text-pink-600 animate-pulse" />
      <span>{badge}</span>
    </div>
    
    <div className="flex justify-center">
      <AnimatedHeading
        text={title}
        as="h2"
        className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 font-['Space_Grotesk'] justify-center"
      />
    </div>

    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium"
      >
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [projectFilter, setProjectFilter] = useState('All');
  const [hasEntered, setHasEntered] = useState(false);

  // Cinematic Hero Scroll / Click Dive-In Trigger
  useEffect(() => {
    const triggerEnter = () => {
      setHasEntered(true);
    };

    // Auto-dive in after 2.2s if no interaction
    const autoTimer = setTimeout(triggerEnter, 2200);

    const onScroll = () => {
      if (window.scrollY > 10) {
        triggerEnter();
      }
    };

    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > 2) {
        triggerEnter();
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchmove', triggerEnter, { passive: true });
    window.addEventListener('touchstart', triggerEnter, { passive: true });
    window.addEventListener('keydown', triggerEnter, { passive: true });
    window.addEventListener('click', triggerEnter, { passive: true });

    return () => {
      clearTimeout(autoTimer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchmove', triggerEnter);
      window.removeEventListener('touchstart', triggerEnter);
      window.removeEventListener('keydown', triggerEnter);
      window.removeEventListener('click', triggerEnter);
    };
  }, []);

  // Contact Form State
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('maawazali111@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleEmailSend = (e) => {
    e.preventDefault();
    setSending(true);
    setStatusMessage({ type: '', text: '' });

    emailjs
      .sendForm('service_qngik5p', 'template_e7ne0wc', formRef.current, 'DSBbfTAfTNs_THD4-')
      .then(
        () => {
          setStatusMessage({
            type: 'success',
            text: 'Thank you! Your note has been delivered. I will respond to your email promptly.',
          });
          setSending(false);
          formRef.current.reset();
        },
        () => {
          setStatusMessage({
            type: 'error',
            text: 'Something went wrong. Please write directly to maawazali111@gmail.com.',
          });
          setSending(false);
        }
      );
  };

  // Metrics
  const stats = [
    { value: '50+', label: 'ML Projects & Notebooks', tag: 'Experiments', color: '#ff2d87' },
    { value: '90%+', label: 'Model Accuracy Achieved', tag: 'CV & NLP', color: '#8b5cf6' },
    { value: '3+', label: 'Industry Internships', tag: 'Practical ML', color: '#0284c7' },
    { value: '11+', label: 'AI & ML Certifications', tag: 'Verified', color: '#ec4899' },
  ];

  // Marquee Technologies
  const marqueeTech = [
    { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
    { name: 'FAISS Vector DB', icon: Database, color: '#0284C7' },
    { name: 'Gemini 1.5 Flash', icon: SiGoogle, color: '#FF2D87' },
    { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
    { name: 'Transformers & LLMs', icon: Brain, color: '#8B5CF6' },
    { name: 'Docker', icon: faDocker, color: '#2496ED', isFa: true },
    { name: 'Python', icon: faPython, color: '#0284C7', isFa: true },
    { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
    { name: 'MongoDB', icon: SiMongodb, color: '#10B981' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    { name: 'Pandas', icon: SiPandas, color: '#150458' },
    { name: 'NumPy', icon: SiNumpy, color: '#013243' },
  ];

  // Core Pillars
  const pillars = [
    {
      icon: Network,
      title: 'RAG & Vector Search',
      desc: 'Architecting high-precision Retrieval-Augmented Generation pipelines using FAISS, semantic chunking, and embedding reranking.',
      stamp: 'FAISS • Embeddings',
      stampColor: 'border-pink-500 text-pink-600 bg-pink-50',
    },
    {
      icon: Brain,
      title: 'Deep Learning & Vision',
      desc: 'Developing computer vision classifiers and sequence models with PyTorch, MobileNetV2, ResNet101, and LSTM architectures.',
      stamp: 'PyTorch • 90%+ Acc',
      stampColor: 'border-purple-500 text-purple-600 bg-purple-50',
    },
    {
      icon: Zap,
      title: 'Scalable AI Backends',
      desc: 'Engineering high-throughput, low-latency microservices with FastAPI, Celery async task workers, and Docker containerization.',
      stamp: 'FastAPI • Celery',
      stampColor: 'border-sky-500 text-sky-600 bg-sky-50',
    },
    {
      icon: Bot,
      title: 'Intelligent AI Agents',
      desc: 'Building autonomous conversational agents and ticket resolution systems powered by Gemini Flash and Anthropic Claude.',
      stamp: 'Gemini • Claude MCP',
      stampColor: 'border-fuchsia-500 text-fuchsia-600 bg-fuchsia-50',
    },
  ];

  // Bento Skills
  const bentoSkills = [
    {
      id: 'rag-genai',
      title: 'Generative AI, LLMs & RAG',
      badge: 'Core Specialty',
      badgeColor: 'border-pink-500 bg-pink-100 text-pink-700',
      description: 'End-to-end generative AI systems, semantic vector search, prompt tuning, and real-time knowledge retrieval.',
      icon: Bot,
      skills: [
        { name: 'RAG Pipelines', level: 'Expert', icon: Search },
        { name: 'FAISS Vector DB', level: 'Expert', icon: Database },
        { name: 'LLMs & Prompting', level: 'Advanced', icon: Bot },
        { name: 'Transformers', level: 'Advanced', icon: Workflow },
        { name: 'Embeddings', level: 'Advanced', icon: Network },
        { name: 'Sentence Transformers', level: 'Advanced', icon: Brain },
        { name: 'Gemini API 1.5', level: 'Expert', icon: SiGoogle },
        { name: 'Claude 101 & MCP', level: 'Certified', icon: SiAnthropic },
      ],
    },
    {
      id: 'deep-learning',
      title: 'Machine Learning & Computer Vision',
      badge: '90%+ Accuracy',
      badgeColor: 'border-purple-500 bg-purple-100 text-purple-700',
      description: 'Supervised & unsupervised model engineering, deep convolutional networks, transfer learning, and sequence modeling.',
      icon: Cpu,
      skills: [
        { name: 'PyTorch', level: 'Advanced', icon: SiPytorch },
        { name: 'TensorFlow', level: 'Advanced', icon: SiTensorflow },
        { name: 'Scikit-learn', level: 'Expert', icon: SiScikitlearn },
        { name: 'Computer Vision', level: 'Advanced', icon: Cpu },
        { name: 'Transfer Learning', level: 'Advanced', icon: Layers },
        { name: 'LSTM & Bi-LSTM', level: 'Advanced', icon: Brain },
        { name: 'Model Evaluation', level: 'Expert', icon: CheckCircle2 },
        { name: 'Pandas & NumPy', level: 'Expert', icon: SiPandas },
      ],
    },
    {
      id: 'backend-mlops',
      title: 'Production Backend & MLOps',
      badge: 'Scalable APIs',
      badgeColor: 'border-sky-500 bg-sky-100 text-sky-700',
      description: 'Building low-latency model inference endpoints, asynchronous queue workers, and containerized deployments.',
      icon: Server,
      skills: [
        { name: 'FastAPI', level: 'Expert', icon: SiFastapi },
        { name: 'Flask', level: 'Advanced', icon: SiFlask },
        { name: 'Celery Workers', level: 'Advanced', icon: Zap },
        { name: 'REST API Design', level: 'Expert', icon: Terminal },
        { name: 'Docker', level: 'Advanced', icon: faDocker, isFa: true },
        { name: 'ML Pipelines', level: 'Advanced', icon: Layers },
        { name: 'Python', level: 'Expert', icon: faPython, isFa: true },
        { name: 'Git & CI/CD', level: 'Expert', icon: faDocker, isFa: true },
      ],
    },
    {
      id: 'data-fullstack',
      title: 'Databases, Frontend & Tools',
      badge: 'Full Stack',
      badgeColor: 'border-rose-500 bg-rose-100 text-rose-700',
      description: 'Data persistence layers, interactive reactive web dashboards, and mobile user interfaces.',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 'Advanced', icon: SiMongodb },
        { name: 'PostgreSQL & SQL', level: 'Advanced', icon: SiPostgresql },
        { name: 'Redis Cache', level: 'Intermediate', icon: SiRedis },
        { name: 'React', level: 'Advanced', icon: faReact, isFa: true },
        { name: 'React Native', level: 'Intermediate', icon: faReact, isFa: true },
        { name: 'JavaScript', level: 'Advanced', icon: faJsSquare, isFa: true },
        { name: 'C++', level: 'Intermediate', icon: SiCplusplus },
        { name: 'VS Code & Postman', level: 'Expert', icon: Terminal },
      ],
    },
  ];

  // Projects
  const projectCategories = ['All', 'RAG & LLMs', 'Deep Learning', 'Automation & Full Stack'];

  const projects = [
    {
      title: 'AI-Based Skill Game',
      category: 'Automation & Full Stack',
      type: 'Mobile AI App',
      tagColor: 'border-pink-500 bg-pink-50 text-pink-700',
      desc: 'Developed an intelligent adaptive quiz mobile application using Gemini Flash 1.5 API with dynamic difficulty adjustment (Beginner, Intermediate, Advanced) and a reactive mobile interface.',
      highlights: [
        'Integrated Gemini Flash 1.5 API for dynamic question generation & answer grading',
        'Implemented adaptive algorithm scaling difficulty with player performance',
        'Built full React Native frontend connected to MongoDB backend APIs',
      ],
      tech: ['React Native', 'Gemini Flash 1.5', 'MongoDB', 'Python', 'FastAPI'],
      github: 'https://github.com/mwchuchu/FYP',
      live: null,
    },
    {
      title: 'Smart Legal Clause Analyzer',
      category: 'RAG & LLMs',
      type: 'RAG Architecture',
      tagColor: 'border-purple-500 bg-purple-50 text-purple-700',
      desc: 'Designed a high-throughput Retrieval-Augmented Generation (RAG) system using FAISS vector database for contract and legal document chunking, semantic embeddings, and clause analysis.',
      highlights: [
        'FAISS vector store with customized sentence transformer embeddings',
        'Automated document chunking and semantic query ranking',
        'Asynchronous processing queue built with Celery and scalable FastAPI backend',
      ],
      tech: ['FastAPI', 'FAISS', 'Celery', 'Python', 'Sentence Transformers', 'Docker'],
      github: 'https://github.com/mwchuchu/legalclauseanalyzer',
      live: null,
    },
    {
      title: 'AI Customer Support Automation',
      category: 'Automation & Full Stack',
      type: 'Conversational Agent',
      tagColor: 'border-sky-500 bg-sky-50 text-sky-700',
      desc: 'Built an enterprise LLM customer support system featuring multi-query resolution, context-aware semantic retrieval, and an automated ticket classification and routing engine.',
      highlights: [
        'Reduced manual support triage and workload by 60% – 80%',
        'Automated intent classification and smart ticket routing engine in FastAPI',
        'Integrated Gemini conversational APIs for low-latency context-aware responses',
      ],
      tech: ['FastAPI', 'Gemini APIs', 'NLP', 'Python', 'Ticket Routing'],
      github: 'https://github.com/mwchuchu/haseemportfolio',
      live: null,
    },
    {
      title: 'Video-to-Quiz AI Platform',
      category: 'RAG & LLMs',
      type: 'EdTech AI Platform',
      tagColor: 'border-rose-500 bg-rose-50 text-rose-700',
      desc: 'Engineered an intelligent learning system that ingests lecture videos, transcribes audio to text via Deepgram API, and generates automated MCQs, True/False quizzes, and a contextual video chatbot.',
      highlights: [
        'Deepgram speech-to-text audio pipeline with automated timestamp indexing',
        'Gemini API prompt engineering for multi-format quiz creation & grading',
        'Interactive AI chatbot for asking context-specific questions on video material',
      ],
      tech: ['Deepgram API', 'Gemini API', 'FastAPI', 'Python', 'Speech-to-Text'],
      github: 'https://github.com/mwchuchu',
      live: null,
    },
    {
      title: 'Spam Message Detection System',
      category: 'Deep Learning',
      type: 'NLP Neural Classifier',
      tagColor: 'border-fuchsia-500 bg-fuchsia-50 text-fuchsia-700',
      desc: 'Engineered an NLP message classification pipeline comparing Dense, LSTM, and Bi-LSTM deep learning architectures for robust spam detection with deployed web inference API.',
      highlights: [
        'Trained and evaluated Dense, LSTM, and Bi-LSTM recurrent neural networks',
        'Comprehensive generalization benchmarks and tokenization preprocessing',
        'Deployed with lightweight Flask web interface for real-time message scoring',
      ],
      tech: ['Python', 'TensorFlow', 'LSTM', 'Scikit-learn', 'Flask', 'NLP'],
      github: 'https://github.com/mwchuchu/spam-sms-classifier',
      live: 'https://huggingface.co/spaces/maawaz/spam-classifier',
    },
    {
      title: 'Multi-Document PDF Chatbot',
      category: 'RAG & LLMs',
      type: 'RAG Pipeline',
      tagColor: 'border-blue-500 bg-blue-50 text-blue-700',
      desc: 'Built an end-to-end multi-document question answering system capable of semantic search and grounding over massive technical PDF collections with low latency.',
      highlights: [
        'Embedding-based retrieval architecture with document metadata tagging',
        'Vector similarity search over multi-page PDF documents',
        'Optimized pipeline for fast, hallucinations-resistant answer synthesis',
      ],
      tech: ['FastAPI', 'Embeddings', 'FAISS', 'Python', 'Vector Search'],
      github: 'https://github.com/mwchuchu',
      live: null,
    },
    {
      title: 'Pokémon Image Classifier',
      category: 'Deep Learning',
      type: 'Computer Vision',
      tagColor: 'border-pink-500 bg-pink-50 text-pink-700',
      desc: 'Trained and optimized deep transfer learning architectures including MobileNetV2 and ResNet101 in PyTorch, achieving over 90% classification accuracy on multi-class visual dataset.',
      highlights: [
        'PyTorch transfer learning pipeline with ResNet101 and MobileNetV2',
        'Achieved 90%+ classification accuracy after hyperparameter tuning',
        'Deployed interactive Hugging Face Space for live image uploads & inference',
      ],
      tech: ['PyTorch', 'MobileNetV2', 'ResNet101', 'FastAPI', 'Computer Vision'],
      github: 'https://github.com/mwchuchu/pokemon-classifier',
      live: 'https://huggingface.co/spaces/maawaz/pokemon-classifier',
    },
    {
      title: 'Modern Client Portfolio Platform',
      category: 'Automation & Full Stack',
      type: 'Web Application',
      tagColor: 'border-sky-500 bg-sky-50 text-sky-700',
      desc: 'Developed a high-performance, responsive portfolio web application featuring modern aesthetics, interactive project showcase, and seamless EmailJS integration.',
      highlights: [
        'Built with React, Tailwind CSS, and custom smooth UI micro-animations',
        'Integrated EmailJS API for frictionless direct client messaging',
        'Full responsive optimization across desktop, tablet, and mobile devices',
      ],
      tech: ['React', 'Tailwind CSS', 'EmailJS', 'JavaScript'],
      github: 'https://github.com/mwchuchu/haseemportfolio',
      live: 'https://haseemx.vercel.app/',
    },
  ];

  const filteredProjects =
    projectFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === projectFilter);

  // Experience
  const experiences = [
    {
      role: 'Machine Learning Intern',
      company: 'Fly Rank AI',
      location: 'Remote',
      period: 'July 2026 – Present',
      current: true,
      tagBg: 'bg-pink-100 text-pink-800 border-pink-500',
      description:
        'Working on core AI systems handling complex real-world data pipelines, semantic page grouping, and automated search intent intelligence.',
      achievements: [
        'Tackling messy, real-world data including nested JSON, anonymized records, and strict join constraints.',
        'Grouping queries and web pages semantically using NLP to uncover content gaps and traffic cannibalization.',
        'Classifying search intents deeply and scoring content quality to discover highest-impact business opportunities.',
        'Translating complex model inference outputs into practical, actionable business recommendations.',
      ],
      tags: ['NLP', 'Data Pipelines', 'Semantic Clustering', 'Python', 'ML Inference'],
    },
    {
      role: 'Machine Learning Intern',
      company: 'Dive Deep AI',
      location: 'Islamabad, Pakistan',
      period: 'July 2025 – August 2025',
      current: false,
      tagBg: 'bg-purple-100 text-purple-800 border-purple-500',
      description:
        'Built production RAG chatbot systems and developed computer vision transfer learning models for multi-class classification.',
      achievements: [
        'Built a Retrieval-Augmented Generation (RAG) legal clause chatbot using FAISS for accurate semantic query retrieval.',
        'Implemented transfer learning models including MobileNetV2 and ResNet101 in PyTorch for image classification.',
        'Achieved 90%+ classification accuracy through systematic model fine-tuning and optimization.',
      ],
      tags: ['FAISS', 'RAG', 'PyTorch', 'ResNet101', 'Transfer Learning', 'FastAPI'],
    },
    {
      role: 'Data Science Intern',
      company: "Developer's Hub",
      location: 'Remote',
      period: 'September 2024 – December 2024',
      current: false,
      tagBg: 'bg-sky-100 text-sky-800 border-sky-500',
      description:
        'Designed, evaluated, and deployed machine learning predictive models integrated directly into web application backends.',
      achievements: [
        'Designed and deployed predictive ML models integrated into production-level web applications.',
        'Improved system decision-making efficiency by 30% through optimized predictive modeling.',
        'Delivered end-to-end ML pipelines from raw data cleaning and preprocessing to API deployment.',
      ],
      tags: ['Machine Learning', 'Predictive Modeling', 'FastAPI', 'Flask', 'Scikit-learn'],
    },
  ];

  // Certifications
  const certifications = [
    { title: 'Claude 101', issuer: 'Anthropic', year: '2026', badge: 'Anthropic Certified', icon: SiAnthropic, color: '#ff2d87' },
    { title: 'Introduction to MCP', issuer: 'Anthropic', year: '2026', badge: 'Protocol Spec', icon: SiAnthropic, color: '#ff2d87' },
    { title: 'AI Fluency', issuer: 'Anthropic', year: '2026', badge: 'Anthropic AI', icon: SiAnthropic, color: '#ff2d87' },
    { title: 'Google AI Essentials', issuer: 'Google (Coursera)', year: '2026', badge: 'Google Certified', icon: SiGoogle, color: '#0284c7' },
    { title: 'Prompt Engineering', issuer: 'Coursera', year: '2026', badge: 'Prompt Design', icon: Award, color: '#0284c7' },
    { title: 'Machine Learning with Python', issuer: 'freeCodeCamp', year: '2025', badge: 'freeCodeCamp', icon: Award, color: '#8b5cf6' },
    { title: 'Full Stack AI Engineer', issuer: 'Udemy', year: '2025', badge: 'AI Engineering', icon: Brain, color: '#8b5cf6' },
    { title: 'Mastering PyTorch', issuer: 'Udemy', year: '2025', badge: 'Deep Learning', icon: SiPytorch, color: '#ff2d87' },
    { title: 'Certified AI Engineering Masterclass', issuer: 'Udemy', year: '2025', badge: 'Masterclass', icon: Award, color: '#8b5cf6' },
    { title: 'TensorFlow Master Class', issuer: 'Udemy', year: '2025', badge: 'Deep Learning', icon: SiTensorflow, color: '#ea580c' },
    { title: 'Azure DevOps', issuer: 'Udemy', year: '2025', badge: 'Cloud & CI/CD', icon: Award, color: '#0284c7' },
  ];

  return (
    <div className="relative min-h-screen bg-[#f8f6f0] paper-texture text-slate-900 font-['Plus_Jakarta_Sans'] overflow-x-hidden">
      {/* 3D Camera Flight Canvas in Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[4, 4, 4]} color="#0f172a" intensity={2.0} />
          <directionalLight position={[-4, -4, -2]} color="#ff2d87" intensity={1.5} />
          <Suspense fallback={null}>
            <CameraFlightText />
          </Suspense>
        </Canvas>
      </div>

      {/* Floating Navigation */}
      <Navbar />

      <main className="relative z-10">
        {/* =========================================================================
            HERO SECTION (FRONT SECTION WITH HIGH-ENERGY KINETIC ENTRANCE)
        ========================================================================== */}
        <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Bio & Hero Info */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-7 space-y-8"
              >
                {/* Available for hire badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center gap-2.5 rounded-xl border-2 border-slate-900 bg-white px-4 py-1.5 shadow-[3px_3px_0px_#ff2d87]"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-600"></span>
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-900">
                    Available for ML & AI Engineer Roles
                  </span>
                </motion.div>

                {/* Main Heading with Kinetic Word Reveal */}
                <div className="space-y-3">
                  <div className="overflow-hidden">
                    <motion.h1
                      initial={{ y: '100%', opacity: 0 }}
                      animate={{ y: '0%', opacity: 1 }}
                      transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight font-['Space_Grotesk'] text-slate-900 leading-tight"
                    >
                      Muhammad <br />
                      <span className="text-ink-gradient">Maawaz</span>
                    </motion.h1>
                  </div>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    className="text-xl sm:text-2xl font-bold text-slate-700"
                  >
                    Machine Learning, AI & NLP Engineer
                  </motion.p>
                </div>

                {/* Subtitle / Value Proposition */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.6 }}
                  className="max-w-2xl text-base sm:text-lg text-slate-700 leading-relaxed font-medium"
                >
                  Building end-to-end ML pipelines and intelligent AI systems — from data cleaning and RAG pipelines to scalable production deployment. Specializing in PyTorch, FAISS vector search, and LLM automation.
                </motion.p>

                {/* Quick Info Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                  className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-800"
                >
                  <span className="flex items-center gap-1.5 rounded-lg border-2 border-slate-900 bg-white px-3 py-1 shadow-[2px_2px_0px_#0f172a] font-bold">
                    <MapPin size={14} className="text-pink-600" />
                    Kahuta, Rawalpindi / Islamabad
                  </span>
                  <span className="flex items-center gap-1.5 rounded-lg border-2 border-slate-900 bg-white px-3 py-1 shadow-[2px_2px_0px_#0f172a] font-bold">
                    <GraduationCap size={14} className="text-purple-600" />
                    BSCS Bahria University
                  </span>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65, duration: 0.5 }}
                  className="flex flex-wrap items-center gap-4 pt-2"
                >
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-xl paper-btn-primary px-7 py-3.5 text-sm font-black active:scale-95"
                  >
                    Collaborate
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href="/Muhammad_Maawaz_CV.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-xl paper-btn-secondary px-6 py-3.5 text-sm font-black"
                  >
                    <FileDown size={16} className="text-pink-600" />
                    Download Resume
                  </a>

                  <a
                    href="#projects"
                    className="inline-flex items-center gap-1.5 px-4 py-3.5 text-sm font-bold text-slate-700 hover:text-slate-950 transition underline underline-offset-4"
                  >
                    Explore Projects →
                  </a>
                </motion.div>

                {/* Social Quick Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.75, duration: 0.5 }}
                  className="flex items-center gap-3 pt-4 border-t-2 border-slate-300"
                >
                  <span className="text-xs text-slate-600 font-mono font-bold">CONNECT:</span>
                  <a
                    href="https://github.com/mwchuchu"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-slate-900 bg-white text-slate-900 shadow-[2px_2px_0px_#0f172a] transition hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#0f172a]"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href="https://linkedin.com/in/maawaz"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-slate-900 bg-white text-slate-900 shadow-[2px_2px_0px_#0f172a] transition hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#0f172a]"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin size={18} className="text-blue-600" />
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-900 bg-white px-3.5 py-2 text-xs font-mono font-bold text-slate-900 shadow-[2px_2px_0px_#0f172a] transition hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#0f172a]"
                    title="Click to copy email"
                  >
                    {copiedEmail ? <Check size={14} className="text-pink-600" /> : <Copy size={14} />}
                    {copiedEmail ? 'Copied to Clipboard!' : 'maawazali111@gmail.com'}
                  </button>
                </motion.div>
              </motion.div>

              {/* Right Column: Display Picture with Spring Dive-In Entrance */}
              <motion.div
                initial={{ opacity: 0, scale: 0.75, rotate: -4, y: 50 }}
                animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-5 flex justify-center lg:justify-end"
              >
                <div className="relative w-72 sm:w-80 md:w-96">
                  {/* Washi Tape Accent */}
                  <div className="washi-tape washi-tape-pink"></div>

                  {/* Main Polaroid Paper Card */}
                  <div className="relative rounded-2xl border-2 border-slate-900 bg-white p-4 pb-6 shadow-[6px_6px_0px_#0f172a] transition-transform duration-300 hover:rotate-1">
                    <div className="relative overflow-hidden rounded-xl aspect-[4/5] border-2 border-slate-900 bg-slate-100">
                      <img
                        src="/DP/maawaz-DP.png"
                        alt="Muhammad Maawaz - Machine Learning, AI & NLP Engineer Portfolio"
                        className="h-full w-full object-cover object-top"
                        loading="eager"
                      />
                    </div>

                    {/* Polaroid Bottom Note */}
                    <div className="mt-4 flex items-center justify-between px-1">
                      <div>
                        <p className="text-sm font-black text-slate-900 font-['Space_Grotesk']">Muhammad Maawaz</p>
                        <p className="text-xs text-slate-600 font-mono font-bold">Applied ML & AI Engineer</p>
                      </div>
                      <span className="rounded-lg border-2 border-slate-900 bg-pink-100 px-2 py-0.5 text-[10px] font-mono font-bold text-pink-800 shadow-[1px_1px_0px_#0f172a]">
                        RAG / LLMs
                      </span>
                    </div>
                  </div>

                  {/* Floating Tag 1 with Spring Pop */}
                  <motion.div
                    initial={{ scale: 0, rotate: -12 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.7, type: 'spring', stiffness: 200, damping: 12 }}
                    className="absolute -top-3 -left-4 sm:-left-6 rounded-xl border-2 border-slate-900 bg-white px-3.5 py-2 shadow-[4px_4px_0px_#ff2d87] z-20"
                  >
                    <div className="flex items-center gap-2">
                      <Brain size={16} className="text-pink-600" />
                      <span className="text-xs font-black text-slate-900">RAG Specialist</span>
                    </div>
                  </motion.div>

                  {/* Floating Tag 2 with Spring Pop */}
                  <motion.div
                    initial={{ scale: 0, rotate: 12 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.85, type: 'spring', stiffness: 200, damping: 12 }}
                    className="absolute -bottom-3 -right-4 sm:-right-6 rounded-xl border-2 border-slate-900 bg-white px-3.5 py-2 shadow-[4px_4px_0px_#8b5cf6] z-20"
                  >
                    <div className="flex items-center gap-2">
                      <Cpu size={16} className="text-purple-600" />
                      <span className="text-xs font-black text-slate-900">90%+ Accuracy</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Metrics Counter Bar with Staggered Entrance */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                  className="paper-card p-6 text-center"
                >
                  <p className="text-3xl sm:text-4xl font-black font-['Space_Grotesk'] text-slate-900" style={{ color: stat.color }}>
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-slate-700 font-bold">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            ABOUT SECTION
        ========================================================================== */}
        <section id="about" className="py-24 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="About Me"
              title="Transforming ML Research into Production AI"
              subtitle="Specialized in building robust, end-to-end intelligent systems that solve real-world problems."
            />

            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              {/* Bio Card with Spring Entry */}
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-5 paper-card p-8 flex flex-col justify-between space-y-6"
              >
                <div className="washi-tape washi-tape-purple"></div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-pink-600 font-mono text-xs font-black">
                    <Terminal size={14} />
                    <span>ENGINEERING PHILOSOPHY</span>
                  </div>
                  
                  <AnimatedHeading
                    text="Bridging Machine Learning & Full-Stack Backend"
                    as="h3"
                    className="text-2xl font-black text-slate-900 font-['Space_Grotesk']"
                  />

                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    I am a Computer Science graduate specialized in Machine Learning, Artificial Intelligence, and Natural Language Processing.
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    Experienced in building end-to-end AI systems including RAG pipelines, vector database search systems, and intelligent chatbot applications. Strong focus on scalable backend systems, applied ML models, and production-ready AI solutions.
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-slate-200 space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500 font-bold">Location</span>
                    <span className="text-slate-900 font-bold">Kahuta, Rawalpindi, Pakistan</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500 font-bold">Education</span>
                    <span className="text-slate-900 font-bold">BS Computer Science (Bahria Univ)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500 font-bold">Core Focus</span>
                    <span className="text-pink-600 font-black">RAG, LLMs, PyTorch, FastAPI</span>
                  </div>
                </div>
              </motion.div>

              {/* 4 Pillars Grid with Staggered Entrance */}
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="paper-card p-6 flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-slate-900 bg-slate-900 text-white shadow-[2px_2px_0px_#ff2d87]">
                            <Icon size={20} />
                          </div>
                          <span className={`rounded-md border px-2 py-0.5 text-[10px] font-mono font-bold ${pillar.stampColor}`}>
                            {pillar.stamp}
                          </span>
                        </div>
                        <h4 className="text-lg font-black text-slate-900 font-['Space_Grotesk']">
                          {pillar.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                          {pillar.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SKILLS / TECHNICAL ARSENAL (ROUGH PAPER BENTO MATRIX)
        ========================================================================== */}
        <section id="skills" className="py-24 relative bg-white border-y-2 border-slate-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Technical Stack"
              title="Technical Arsenal & Tooling"
              subtitle="A structured domain breakdown of core machine learning libraries, LLM frameworks, vector stores, and backend infrastructure."
            />

            {/* Bento Tech Hub Cards with Staggered Slide In */}
            <div className="grid md:grid-cols-2 gap-6">
              {bentoSkills.map((group, groupIdx) => {
                const HeaderIcon = group.icon;
                return (
                  <motion.div
                    key={group.id}
                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: groupIdx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4 }}
                    className="paper-card p-7 flex flex-col justify-between space-y-6"
                  >
                    {/* Bento Header */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-slate-900 bg-slate-900 text-white shadow-[2px_2px_0px_#ff2d87]">
                            <HeaderIcon size={20} />
                          </div>
                          <h3 className="text-lg font-black text-slate-900 font-['Space_Grotesk']">
                            {group.title}
                          </h3>
                        </div>
                        <span className={`rounded-lg border-2 px-3 py-0.5 text-[11px] font-mono font-black ${group.badgeColor}`}>
                          {group.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {group.description}
                      </p>
                    </div>

                    {/* Compact Interactive Skill Chips */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3 border-t-2 border-slate-100">
                      {group.skills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                          <div
                            key={skill.name}
                            className="flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-slate-900 bg-[#faf8f5] p-2.5 text-center shadow-[2px_2px_0px_#0f172a] transition hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#ff2d87] group"
                          >
                            <div className="flex h-6 w-6 items-center justify-center text-slate-900 group-hover:text-pink-600 transition-colors">
                              {skill.isFa ? (
                                <FontAwesomeIcon icon={Icon} size="lg" />
                              ) : (
                                <Icon size={18} />
                              )}
                            </div>
                            <span className="text-xs font-black text-slate-900 leading-tight">
                              {skill.name}
                            </span>
                            <span className="text-[9px] font-mono font-bold text-slate-500 uppercase">
                              {skill.level}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            PROJECTS SECTION
        ========================================================================== */}
        <section id="projects" className="py-24 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Featured Projects"
              title="Engineered for Impact & Scale"
              subtitle="Explore production RAG pipelines, deep learning classifiers, and intelligent AI automation systems."
            />

            {/* Filter Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-2.5 mb-12"
            >
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setProjectFilter(cat)}
                  className={`rounded-xl px-5 py-2 text-xs font-black transition-all duration-200 border-2 border-slate-900 ${
                    projectFilter === cat
                      ? 'bg-slate-900 text-white shadow-[3px_3px_0px_#ff2d87]'
                      : 'bg-white text-slate-900 shadow-[2px_2px_0px_#0f172a] hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid with Cascade Entry */}
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 35, scale: 0.94 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: (idx % 3) * 0.1, ease: 'easeOut' }}
                    key={project.title}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="paper-card p-7 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Top Badges */}
                      <div className="flex items-center justify-between">
                        <span className={`rounded-md border-2 px-2.5 py-0.5 text-[10px] font-mono font-black ${project.tagColor}`}>
                          {project.type}
                        </span>
                        <Code2 size={18} className="text-slate-700" />
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-black text-slate-900 font-['Space_Grotesk']">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                          {project.desc}
                        </p>
                      </div>

                      {/* Bullet Highlights */}
                      {project.highlights && (
                        <ul className="space-y-1.5 pt-2 border-t border-slate-200 text-xs text-slate-700 font-medium">
                          {project.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-pink-600 font-black">•</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-slate-300 bg-slate-100 px-2 py-0.5 text-[10px] font-mono font-bold text-slate-800"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-5 mt-5 border-t-2 border-slate-100">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl border-2 border-slate-900 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-900 shadow-[2px_2px_0px_#0f172a] transition hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#0f172a]"
                        >
                          <FaGithub size={13} />
                          Source Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl border-2 border-slate-900 bg-slate-900 px-3.5 py-1.5 text-xs font-bold text-white shadow-[2px_2px_0px_#ff2d87] transition hover:translate-x-[-1px] hover:translate-y-[-1px]"
                        >
                          <ExternalLink size={13} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            EXPERIENCE TIMELINE
        ========================================================================== */}
        <section id="experience" className="py-24 relative bg-white border-y-2 border-slate-900">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Work Experience"
              title="Industry Experience"
              subtitle="Track record of engineering machine learning models, search intent classification, and production RAG pipelines."
            />

            <div className="relative border-l-2 border-slate-900 pl-6 sm:pl-10 ml-3 sm:ml-6 space-y-12">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
                  className="relative group"
                >
                  {/* Stamped Node on Timeline */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-slate-900 bg-slate-900 text-white shadow-[2px_2px_0px_#ff2d87]">
                    <div className="h-2 w-2 rounded-full bg-pink-500" />
                  </div>

                  {/* Experience Card */}
                  <div className="paper-card p-7 sm:p-8 space-y-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2.5">
                          <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-['Space_Grotesk']">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="rounded-md border-2 border-pink-500 bg-pink-100 px-2 py-0.5 text-[10px] font-mono font-black text-pink-700">
                              Present
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-bold text-slate-700 mt-0.5">
                          {exp.company} • <span className="text-slate-500 font-medium">{exp.location}</span>
                        </p>
                      </div>
                      <span className="rounded-lg border-2 border-slate-900 bg-[#faf8f5] px-3 py-1 text-xs font-mono font-bold text-slate-900 w-max shadow-[2px_2px_0px_#0f172a]">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      {exp.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-pink-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t-2 border-slate-100">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-slate-300 bg-slate-100 px-2.5 py-1 text-[11px] font-mono font-bold text-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            CERTIFICATIONS SECTION (11 CERTIFICATES)
        ========================================================================== */}
        <section id="certifications" className="py-24 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Credentials"
              title="Certifications & Accreditations"
              subtitle="Continuous learning and verified technical proficiency across Anthropic, Google, Coursera, and freeCodeCamp."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {certifications.map((cert, idx) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 25, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.45, delay: (idx % 4) * 0.08, ease: 'easeOut' }}
                    whileHover={{ y: -3 }}
                    className="paper-card p-5 flex flex-col justify-between gap-4"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-slate-900 bg-slate-900 text-white shadow-[2px_2px_0px_#ff2d87]">
                        <Icon size={20} style={{ color: cert.color }} />
                      </div>
                      <span className="rounded-md border border-slate-300 bg-slate-100 px-2 py-0.5 text-[10px] font-mono font-bold text-slate-700">
                        {cert.year}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm font-black text-slate-900">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-600 font-medium">{cert.issuer}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                      <span className="text-[10px] font-mono font-black text-pink-600">
                        {cert.badge}
                      </span>
                      <Check size={14} className="text-slate-900 font-black" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            EDUCATION SECTION
        ========================================================================== */}
        <section id="education" className="py-20 relative bg-white border-y-2 border-slate-900">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Academic Background"
              title="Education"
              subtitle="Formal foundation in computer science and machine learning theory."
            />

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="paper-card p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-slate-900 bg-slate-900 text-white shadow-[3px_3px_0px_#ff2d87] flex-shrink-0">
                  <GraduationCap size={28} />
                </div>
                <div className="space-y-1">
                  <span className="rounded-md border-2 border-pink-500 bg-pink-100 px-2.5 py-0.5 text-[10px] font-mono font-black text-pink-700">
                    Graduated
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-['Space_Grotesk']">
                    Bachelor of Science in Computer Science (BSCS)
                  </h3>
                  <p className="text-sm text-slate-700 font-bold">
                    Bahria University Islamabad
                  </p>
                  <p className="text-xs text-slate-600 font-medium">
                    Specialized coursework in AI, Machine Learning, Natural Language Processing, and Distributed Systems.
                  </p>
                </div>
              </div>

              <span className="rounded-xl border-2 border-slate-900 bg-[#faf8f5] px-4 py-2 text-xs font-mono font-black text-slate-900 shadow-[2px_2px_0px_#0f172a] whitespace-nowrap">
                Oct 2021 – Jul 2025
              </span>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            CONTACT SECTION
        ========================================================================== */}
        <section id="contact" className="py-24 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Let's Connect"
              title="Start a Collaboration"
              subtitle="Open to freelance AI projects, ML engineering internships, and full-time opportunities."
            />

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Direct Info Cards with Slide Animation */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="lg:col-span-5 space-y-4"
              >
                <div className="paper-card p-8 space-y-6">
                  <div className="washi-tape washi-tape-cyan"></div>
                  
                  <AnimatedHeading
                    text="Let's Build Something Intelligent"
                    as="h3"
                    className="text-2xl font-black text-slate-900 font-['Space_Grotesk']"
                  />

                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    Whether you need a full RAG retrieval pipeline, computer vision model training, or an intelligent customer automation chatbot — let's discuss how we can execute it.
                  </p>

                  <div className="space-y-3 pt-2">
                    {/* Email item with copy */}
                    <div className="flex items-center justify-between rounded-xl border-2 border-slate-900 bg-[#faf8f5] p-3.5 shadow-[2px_2px_0px_#0f172a]">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink-100 text-pink-700 border border-pink-300">
                          <Mail size={16} />
                        </div>
                        <div>
                          <p className="text-[10px] font-mono text-slate-500 uppercase font-bold">Direct Email</p>
                          <p className="text-xs sm:text-sm font-bold text-slate-900">maawazali111@gmail.com</p>
                        </div>
                      </div>
                      <button
                        onClick={handleCopyEmail}
                        className="rounded-lg border-2 border-slate-900 bg-white p-1.5 text-slate-900 shadow-[1px_1px_0px_#0f172a] hover:bg-slate-100 transition"
                        title="Copy email"
                      >
                        {copiedEmail ? <Check size={14} className="text-pink-600" /> : <Copy size={14} />}
                      </button>
                    </div>

                    {/* Phone item */}
                    <div className="flex items-center gap-3 rounded-xl border-2 border-slate-900 bg-[#faf8f5] p-3.5 shadow-[2px_2px_0px_#0f172a]">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100 text-sky-700 border border-sky-300">
                        <Phone size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono text-slate-500 uppercase font-bold">Phone / WhatsApp</p>
                        <p className="text-xs sm:text-sm font-bold text-slate-900">+92-346-5120975</p>
                      </div>
                    </div>

                    {/* Location item */}
                    <div className="flex items-center gap-3 rounded-xl border-2 border-slate-900 bg-[#faf8f5] p-3.5 shadow-[2px_2px_0px_#0f172a]">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100 text-purple-700 border border-purple-300">
                        <MapPin size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono text-slate-500 uppercase font-bold">Location</p>
                        <p className="text-xs sm:text-sm font-bold text-slate-900">Kahuta, Rawalpindi / Islamabad, Pakistan</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Profile Links */}
                  <div className="pt-4 border-t-2 border-slate-200 flex flex-wrap gap-3">
                    <a
                      href="https://github.com/mwchuchu"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-900 bg-white px-4 py-2 text-xs font-black text-slate-900 shadow-[2px_2px_0px_#0f172a] transition hover:translate-x-[-1px] hover:translate-y-[-1px]"
                    >
                      <FaGithub size={15} />
                      GitHub / mwchuchu
                    </a>
                    <a
                      href="https://linkedin.com/in/maawaz"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-900 bg-white px-4 py-2 text-xs font-black text-slate-900 shadow-[2px_2px_0px_#0f172a] transition hover:translate-x-[-1px] hover:translate-y-[-1px]"
                    >
                      <FaLinkedin size={15} className="text-blue-600" />
                      LinkedIn / in/maawaz
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Contact Form with Slide In */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="lg:col-span-7"
              >
                <div className="paper-card p-8 sm:p-10 space-y-6">
                  <div className="space-y-1">
                    <AnimatedHeading
                      text="Send a Message"
                      as="h3"
                      className="text-2xl font-black text-slate-900 font-['Space_Grotesk']"
                    />
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">
                      Fill out the notepad below and I'll respond within 24 hours.
                    </p>
                  </div>

                  <form ref={formRef} onSubmit={handleEmailSend} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-black text-slate-900">YOUR NAME</label>
                        <input
                          type="text"
                          name="user_name"
                          placeholder="e.g. John Doe"
                          required
                          className="w-full rounded-xl border-2 border-slate-900 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:shadow-[3px_3px_0px_#ff2d87]"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-black text-slate-900">YOUR EMAIL</label>
                        <input
                          type="email"
                          name="user_email"
                          placeholder="e.g. john@example.com"
                          required
                          className="w-full rounded-xl border-2 border-slate-900 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:shadow-[3px_3px_0px_#ff2d87]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-black text-slate-900">PROJECT SUBJECT</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="e.g. RAG Pipeline Development / ML Project"
                        required
                        className="w-full rounded-xl border-2 border-slate-900 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:shadow-[3px_3px_0px_#8b5cf6]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-black text-slate-900">MESSAGE</label>
                      <textarea
                        name="message"
                        rows="5"
                        placeholder="Tell me about your project, timeline, or requirements..."
                        required
                        className="w-full rounded-xl border-2 border-slate-900 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:shadow-[3px_3px_0px_#0284c7]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl paper-btn-primary py-3.5 text-sm font-black active:scale-95 disabled:opacity-60"
                    >
                      {sending ? (
                        <>
                          <span className="animate-spin">⏳</span> Sending message...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>

                    {statusMessage.text && (
                      <p
                        className={`text-xs font-mono text-center p-3 rounded-xl border-2 font-bold ${
                          statusMessage.type === 'success'
                            ? 'border-slate-900 bg-pink-100 text-pink-900 shadow-[2px_2px_0px_#ff2d87]'
                            : 'border-slate-900 bg-rose-100 text-rose-900'
                        }`}
                      >
                        {statusMessage.text}
                      </p>
                    )}
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================================
          FOOTER WITH SKILL DRAWER / TICKER
      ========================================================================== */}
      <footer className="relative z-10 border-t-2 border-slate-900 bg-white">
        {/* Skill Drawer / Ticker above footer content */}
        <div className="py-6 border-b-2 border-slate-900 bg-[#faf8f5] overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-3 flex items-center justify-between">
            <span className="text-xs font-mono font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-pink-500 animate-ping"></span>
              Core Technical Arsenal Drawer
            </span>
            <span className="text-[11px] font-mono font-bold text-slate-500 hidden sm:inline">
              14+ Core Frameworks & Tools
            </span>
          </div>
          <div className="relative flex overflow-x-hidden">
            <div className="animate-marquee flex items-center gap-4 py-1">
              {[...marqueeTech, ...marqueeTech].map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={idx}
                    className="flex-shrink-0 flex items-center gap-2.5 h-10 rounded-xl border-2 border-slate-900 bg-white px-4 shadow-[2px_2px_0px_#0f172a] whitespace-nowrap transition hover:shadow-[3px_3px_0px_#ff2d87]"
                  >
                    <span className="flex items-center justify-center flex-shrink-0">
                      {tech.isFa ? (
                        <FontAwesomeIcon icon={Icon} style={{ color: tech.color }} size="sm" />
                      ) : (
                        <Icon size={16} style={{ color: tech.color }} />
                      )}
                    </span>
                    <span className="text-xs font-black tracking-wide text-slate-900 whitespace-nowrap leading-none">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-slate-900 bg-slate-900 text-white font-mono font-black text-sm shadow-[2px_2px_0px_#ff2d87]">
                M
              </div>
              <div>
                <p className="text-sm font-black text-slate-900 font-['Space_Grotesk']">Muhammad Maawaz</p>
                <p className="text-[11px] text-slate-600 font-bold">Machine Learning, AI & NLP Engineer</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs font-black text-slate-700">
              <a href="#about" className="hover:text-pink-600 transition">About</a>
              <a href="#skills" className="hover:text-pink-600 transition">Skills</a>
              <a href="#projects" className="hover:text-pink-600 transition">Projects</a>
              <a href="#experience" className="hover:text-pink-600 transition">Experience</a>
              <a href="#contact" className="hover:text-pink-600 transition">Contact</a>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-slate-900 bg-[#faf8f5] text-slate-900 shadow-[2px_2px_0px_#0f172a] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#ff2d87] transition"
              aria-label="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>

          <div className="mt-8 pt-8 border-t-2 border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-600 font-bold">
            <p>© {new Date().getFullYear()} Muhammad Maawaz. All rights reserved.</p>
            <p>Engineered with React, Three.js & Tailwind CSS.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Floating WhatsApp Action Button */}
      <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/923465120975?text=Hi%20Muhammad%20Maawaz,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center gap-2.5 rounded-2xl border-2 border-slate-900 bg-emerald-500 text-slate-950 p-3.5 shadow-[4px_4px_0px_#0f172a] transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#ff2d87] hover:bg-emerald-400 active:scale-95"
          aria-label="Chat with Muhammad Maawaz on WhatsApp"
        >
          {/* Pulsing indicator dot */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-pink-600 border border-white"></span>
          </span>

          <FaWhatsapp size={24} className="text-white" />
          
          <span className="hidden sm:inline font-mono font-black text-xs text-white tracking-wide pr-1">
            Chat on WhatsApp
          </span>
        </a>
      </aside>
    </div>
  );
}
