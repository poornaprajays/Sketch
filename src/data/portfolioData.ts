export interface PersonalInfo {
  name: string;
  shortName: string;
  location: string;
  college: string;
  degree: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  tagline: string[];
  wordRotateLabels: string[];
  chips: { text: string; icon: string }[];
  marquee: string[];
  aboutTitle: string;
  aboutMe: string;
  aboutInternship: string;
  languagesSpoken: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  location: string;
  degree: string;
  timeline: string;
  scoreType: string;
  scoreValue: string;
}

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  timeline: string;
  letterLink: string;
  logoChar: string;
  responsibilities: string[];
  skills: string[];
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  timeline: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  description: string;
}

export interface SkillsData {
  languages: string[];
  frontendUi: string[];
  backendSystems: string[];
  deployment: string[];
  packaging: string[];
  aiMlIot: string[];
  databases: string[];
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillsData;
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Poorna Prajay S",
    shortName: "poornaprajay_",
    location: "Mandya, Karnataka, India",
    college: "PES College of Engineering (PESCE), Mandya",
    degree: "BE Computer Science Engineering",
    phone: "+91 83105449918",
    email: "prajays.work@gmail.com",
    linkedin: "https://www.linkedin.com/in/poorna-prajay-s/",
    github: "https://github.com/poornaprajays",
    tagline: [],
    wordRotateLabels: [
      "a Fullstack Developer",
      "an AI/ML Engineer Intern",
      "a Tech Enthusiast",
      "a Restful sleep innovator",
      "a Studio Ghibli adorer"
    ],
    chips: [
      { text: "Mandya, India", icon: "📍" },
      { text: "BE CSE, PESCE", icon: "🎓" }
    ],
    marquee: [
      "💻 Fullstack Dev",
      "🤖 AI/ML Intern",
      "🗣️ English, Hindi, Kannada, Telugu"
    ],
    aboutTitle: "Software Engineer & AI/ML Developer",
    aboutMe: "I’m a Computer Science & Engineering student building real-world, scalable systems that combine software engineering, artificial intelligence, machine learning, and data.",
    aboutInternship: "Currently working as an Intern at Anamtya Technologies Pvt. Ltd., contributing to the 3D Bio-Acoustic Wildlife data acquisition and data processing platform (SonicWild) that detects and classifies a vast variety of birds, mammals, and other animals in the jungle through their vocalizations using machine learning, artificial intelligence, MFCC, CNN, and live triangulation techniques using distributed IoT systems such as Raspberry Pi and ReSpeaker USB Mic Arrays.",
    languagesSpoken: ["English", "Kannada", "Hindi", "Telugu"]
  },
  
  education: [
    {
      id: "01",
      institution: "PES College of Engineering",
      location: "Mandya, India",
      degree: "Bachelor of Engineering in Computer Science",
      timeline: "2023 – 2027",
      scoreType: "CGPA",
      scoreValue: "8.23"
    },
    {
      id: "02",
      institution: "Cauvery Public School",
      location: "Mandya, India",
      degree: "Matriculation",
      timeline: "2020 – 2021",
      scoreType: "Percentage",
      scoreValue: "96%"
    }
  ],

  experience: [
    {
      company: "Anamtya Technologies Pvt. Ltd.",
      location: "Bengaluru, India",
      role: "Software Engineering Intern (AI/ML)",
      timeline: "Jan, 2026 – Ongoing",
      letterLink: "https://www.dropbox.com/scl/fi/eqwvmie4reradduuiahea/intership_prajay.jpeg?rlkey=q8sqiu7ckdj7d1pzskw53546l&st=tw88otqy&dl=0",
      logoChar: "A",
      responsibilities: [
        "Contributing to SonicWild, a production-grade Electron desktop application for wildlife eco-acoustic monitoring, managing real-time data from distributed IoT devices deployed in the field.",
        "Handles a real-time acoustic ingestion pipeline processing 60 FPS TCP data streams, reducing packet fragmentation errors by ~40% using a custom brace-counting JSON parser.",
        "Managed UDP broadcast network scanning with SSE streaming, enabling automatic discovery of field microphone arrays across dynamic subnets in under 3 seconds.",
        "Designed a file-based offline database (zodas_database.txt) managing project metadata, GPS mic coordinates, and device credentials—eliminating external DB dependencies for offline field deployment."
      ],
      skills: ["Electron.js", "Node.js", "Express", "React", "TypeScript", "Socket.IO", "TCP/UDP", "SQLite", "Three.js", "LightningChart JS", "Leaflet", "Raspberry Pi", "ODAS", "SSH (node-ssh)", "Python", "Playwright", "Vitest", "electron-builder", "NSIS", "WebSockets", "Real-time Systems", "Embedded IoT", "GIS / Offline Maps", "AI/RAG", "Wildlife Tech"]
    }
  ],

  projects: [
    {
      title: "Chirply-AI",
      subtitle: "Bird Species Identification via Acoustic Fingerprinting",
      timeline: "Feb 2026",
      technologies: ["Python", "FastAPI", "BirdNET", "React 18", "Raspberry Pi", "SQLite"],
      githubLink: "https://github.com/poornaprajays/Chirply-AI",
      liveLink: "",
      description: "Designed an edge-to-cloud bird identification system: Raspberry Pi runs BirdNET inference on-device with <200ms per detection, streaming results to a FastAPI backend via REST polling. Built a React 18 frontend with live spectrogram rendering, species cards, and geospatial maps; architected a 5-stage modular pipeline from audio capture to SQLite logging supporting 50+ concurrent species detections."
    },
    {
      title: "AI-Assisted Blind Navigation System",
      subtitle: "Real-Time Assistive Navigation",
      timeline: "Mar 2026",
      technologies: ["Python", "YOLOv8", "CNN", "Computer Vision", "TTS"],
      githubLink: "https://github.com/poornaprajays/VisionMate-AI",
      liveLink: "",
      description: "Engineered VisionMate AI—a real-time YOLOv8-based obstacle detection system achieving ~30 FPS inference, translating spatial detections into structured auditory safety alerts for visually impaired users. Implemented a Spatial Context Engine with obstacle priority ranking and alert cooldowns, reducing redundant audio alerts by ~70%."
    },
    {
      title: "Acoustic Event Detection (AED)",
      subtitle: "Environmental Sound Classification",
      timeline: "May 2026",
      technologies: ["Python", "MFCC", "CNN", "LSTM", "Audio DSP"],
      githubLink: "https://github.com/poornaprajays/Acoustic-Event-Detection-AED.git",
      liveLink: "",
      description: "Developed a multi-label AED pipeline achieving 85%+ classification accuracy for temporally overlapping environmental sounds using MFCC/spectrogram features with CNN/LSTM classifiers. Designed as a modular research-grade component for integration into distributed IoT wildlife monitoring, building directly on production acoustic work."
    },
    {
      title: "AI PDF Generator",
      subtitle: "Online PDF Summarizer",
      timeline: "Jun 2026",
      technologies: ["React Vite", "Express", "PostgreSQL", "Google Gemini API", "Railway"],
      githubLink: "https://github.com/poornaprajays/AI-PDF-Summarizer-.git",
      liveLink: "https://aipdfsummarizer.netlify.app/",
      description: "A full-stack AI-powered PDF summarization application built with Node.js, Express, PostgreSQL, Google Gemini API, and React (Vite). Allows users to upload documents, extract content, and fetch dynamic AI summaries via Google Gemini. Deployed frontend on Netlify and backend on Railway database pipelines."
    }
  ],

  skills: {
    languages: ["C", "Python", "Java", "JavaScript", "TypeScript"],
    frontendUi: ["React 18", "Vite", "Shadcn UI", "TanStack Query", "Three.js", "HTML5", "CSS3"],
    backendSystems: ["Node.js", "Express.js", "Electron.js", "WebSockets", "Socket.IO", "SSH Device Control", "Linux Terminal"],
    deployment: ["Vercel", "Netlify", "Render", "Railway"],
    packaging: ["Electron Builder", "NSIS Installer", "Desktop Packaging"],
    aiMlIot: ["Machine Learning", "Artificial Intelligence", "MFCC", "CNN", "RAG", "Distributed IoT", "Raspberry Pi IoT"],
    databases: ["MongoDB", "MySQL", "PostgreSQL", "Supabase"]
  }
};
