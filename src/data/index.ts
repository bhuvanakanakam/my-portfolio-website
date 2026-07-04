export const projects = [
  {
    id: "kaybee-f1",
    title: "KayBee F1",
    description:
      "A personal Formula 1 dashboard for tracking race results, lap metrics, driver standings, and season performance — built because spreadsheets weren't cutting it anymore.",
    tags: ["Next.js", "TypeScript", "Data Viz", "F1 API"],
    github: "https://github.com/bhuvanakanakam/kaybee-f1",
    live: "https://kaybee-f1.vercel.app/",
    color: "#f5f0e8",
    year: "2025",
    story:
      "I've followed F1 obsessively for years and kept notes on races in a scattered mix of spreadsheets and mental bookmarks. At some point that stopped being enough. I wanted one place to see standings, lap-by-lap deltas, and season arcs without hunting through the official app. So I built it. The interesting engineering problem was aligning data from different sources with mismatched timing and inconsistent driver/team identifiers across seasons. The visualization layer was the fun part: making it immediately readable, not just technically accurate. It's a personal tool first, but I kept it clean enough to share.",
  },
  {
    id: "gaze-ui",
    title: "Gaze-Conditioned UI Adaptation",
    description:
      "A real-time system that uses webcam iris tracking (MediaPipe FaceMesh) to infer user intent from gaze fixations and dynamically restructure web interfaces, surfacing content, collapsing what's been read, prompting when hesitant. Runs entirely in-browser, no data leaves the device.",
    tags: ["React", "TypeScript", "MediaPipe", "Framer Motion"],
    github: "https://github.com/bhuvanakanakam/nucleus-gaze-ui",
    color: "#ddd0bc",
    year: "2025",
    story:
      "The question I started with: what if a UI could read what you're thinking about, without you clicking or typing anything? The architecture has three layers: perception (MediaPipe extracts iris coordinates at 30fps), understanding (a fixation detector identifies when you're dwelling on a specific DOM element for 800ms+), and action (a rule engine maps those fixation events to UI adaptations). Exponential moving average smoothing handles the natural jitter in eye position. The whole pipeline runs locally in the browser, which matters architecturally for any enterprise use. Rule-based inference over ML for now, interpretable, fast to build, and good enough for a constrained UI. The ML version is future work.",
  },
  {
    id: "baes-kankan",
    title: "Bae's Kankan — E-Commerce",
    description:
      "A full-stack premium fashion e-commerce website with 30 curated products, cart, wishlist, checkout, user auth, and a Node.js + SQL Server backend. Deployed live on Vercel.",
    tags: ["JavaScript", "Node.js", "SQL Server", "HTML/CSS", "Vercel"],
    github: "https://github.com/bhuvanakanakam/baes-kankan-ecommerce",
    live: "https://bae-kankan.vercel.app",
    color: "#ede4d4",
    year: "2025",
    story:
      "I built this from scratch as a personal project to practice full-stack web development end-to-end. The frontend is vanilla HTML, CSS, and JavaScript with a custom design — no frameworks, just clean code. The backend is a Node.js + Express REST API connected to SQL Server, handling products, user authentication (JWT), and order management.\n\nThe product catalogue has 30 real items across shoes, bags, apparel, accessories, and make-up, each with individual CDN-hosted images from actual brand websites and hand-written product descriptions. The cart, wishlist, filters, sorting, search, and checkout all work client-side with localStorage persistence.\n\nOne interesting challenge was deploying a site that normally needs a local backend to Vercel (a static/serverless host). I solved it by adding a smart fallback: when the API is unreachable (i.e. not running locally), the frontend seamlessly loads from a hardcoded product catalogue instead. The result is a site that works fully on Vercel for demo purposes, and switches to live backend data when running locally.\n\nThe biggest headache was getting the images and code pushed to GitHub — the project folder was on a Windows CIFS mount that caused binary file lock errors with Git. I worked around it by rsync-copying the project to a temp Linux directory, then running git from there.",
  },
  {
    id: "1",
    title: "Emotion-Aligned Music Composition",
    description:
      "An AI system that generates Rasa Theory-aligned music using multi-objective Differential Evolution, variable crossover, and Fourier-based emotion-attribute encoding.",
    tags: ["Python", "Differential Evolution", "FFT", "SOM", "ALI-GAN"],
    github: "https://github.com/bhuvanakanakam",
    color: "#f5f0e8",
    year: "2024",
    story:
      "This started as a research question: can you algorithmically compose music that evokes a specific emotional state (Rasa) from Indian classical aesthetics? I implemented FC-means evolutionary clustering and an ALI-GAN pipeline, running experiments on a DGX supercomputer. The hardest bug was a multiprocessing seed replication issue that was silently killing result diversity; finding it took three days. The work contributed to an IEEE Transactions submission.",
  },
  {
    id: "3",
    title: "Decentralized File Storage System",
    description:
      "A distributed storage network inspired by IPFS/Filecoin, implementing content-addressed retrieval, cryptographic hash-based integrity verification, and custom replication and lookup protocols.",
    tags: ["Python", "Content-Addressed Retrieval", "Cryptographic Hashing", "Distributed Protocols"],
    github: "https://github.com/bhuvanakanakam",
    color: "#ddd0bc",
    year: "2024",
    story:
      "I wanted to understand how IPFS actually works under the hood, so I built a stripped-down version from scratch. Designing the replication protocol was the most interesting part, balancing redundancy against storage overhead. Benchmarked 99% retrieval success across 500+ files. The hardest thing was making node failures graceful, not catastrophic.",
  },
  {
    id: "4",
    title: "Regional Language Toxic Comment Classification",
    description:
      "A multilingual toxicity detection model using MuBERT and XLM-RoBERTa, trained on regional Indian language datasets and deployed as a real-time web application.",
    tags: ["Python", "MuBERT", "XLM-RoBERTa", "NLP"],
    github: "https://github.com/bhuvanakanakam",
    color: "#ede4d4",
    year: "2023",
    story:
      "Most toxicity classifiers are English-only. I wanted to tackle the harder problem: detecting hate speech in Telugu, Hindi, and Tamil, languages with very different morphology. Fine-tuning XLM-RoBERTa on domain-specific data was the key unlock. Deploying it as a live web app made it concrete and usable, not just a notebook experiment.",
  },
  {
    id: "cardiac-mri",
    title: "Semantic Segmentation of Cardiac MRI",
    description:
      "Few-shot learning applied to cardiac MRI segmentation using U-Net and encoder-decoder models, with advanced preprocessing to improve accuracy on limited labeled data.",
    tags: ["Python", "PyTorch", "U-Net", "Few-Shot Learning"],
    github: "https://github.com/bhuvanakanakam/semantic-segmentation-cardiac-images",
    color: "#f5f0e8",
    year: "2023",
    story:
      "Medical image segmentation is hard because labeled data is expensive and scarce. The few-shot approach lets the model generalize from a handful of annotated examples. U-Net's skip connections preserve spatial detail that gets lost in standard encoders, crucial for delineating cardiac boundaries accurately. The preprocessing pipeline (normalization, augmentation, registration) ended up being as important as the model architecture itself.",
  },
  // {
  //   id: "5",
  //   title: "ANN from Scratch",
  //   description:
  //     "A fully vectorized artificial neural network built in pure Python (no deep learning libraries) for regression tasks: sin(x) approximation and Combined Cycle Power Plant prediction.",
  //   tags: ["Python", "NumPy", "Backpropagation", "Adam Optimizer"],
  //   github: "https://github.com/bhuvanakanakam/ANN-Implementation",
  //   color: "#ddd0bc",
  //   year: "2023",
  //   story:
  //     "The constraint was simple: no PyTorch, no TensorFlow, no Keras. Just NumPy and math. Implementing vectorized backpropagation from first principles, then getting momentum and Adam to converge correctly, and this is where I really understood what a neural network is doing. Every framework abstraction I use now feels transparent because I've written it by hand.",
  // },
  {
    id: "6",
    title: "Generating Paintings from Photographs with CycleGAN",
    description:
      "A CycleGAN implementation in PyTorch that learns to transfer Monet's painting style to photographs, achieving a Fréchet Inception Distance (FID) below 60 on Kaggle.",
    tags: ["Python", "PyTorch", "CycleGAN", "GANs"],
    github: "https://github.com/bhuvanakanakam/genarate-paintings-photograph",
    color: "#ede4d4",
    year: "2023",
    story:
      "CycleGAN is elegant: two generators, two discriminators, a cycle-consistency loss, and no paired training data needed. Getting the loss balance right between adversarial and cycle-consistency terms was trial and error at first; then I found a rhythm. Hitting FID < 60 on Kaggle felt like crossing a real finish line. Style transfer is one of those results that's genuinely beautiful to look at.",
  },
  {
    id: "bandwidth",
    title: "Network Bandwidth Monitoring System",
    description:
      "A real-time tool to analyze and visualize live network bandwidth usage across interfaces, enabling traffic insights and anomaly detection for infrastructure optimization.",
    tags: ["Python", "Networking", "Real-time", "Visualization"],
    github: "https://github.com/bhuvanakanakam/network-bandwidth-monitoring-system",
    color: "#f5f0e8",
    year: "2023",
    story:
      "Built during a stretch of network instability where nobody had good visibility into what was actually consuming bandwidth. The challenge was keeping the monitoring overhead low enough that the tool wasn't itself distorting the measurements. Real-time visualization makes patterns instantly readable in ways raw logs never can: you see bursty behavior, steady-state baselines, and anomalies at a glance.",
  },
  {
    id: "pest",
    title: "Pest Detection in Orchards (Drone Imagery)",
    description:
      "A greedy-based algorithm for automated pest detection from drone imagery, benchmarked against established research algorithms for comparative performance evaluation.",
    tags: ["Python", "Computer Vision", "Drone Imagery", "Algorithms"],
    github: "https://github.com/bhuvanakanakam/drone-bug-detection-orchard-project",
    color: "#ddd0bc",
    year: "2023",
    story:
      "The agricultural context made this project interesting: drones are cheap, but processing their imagery intelligently isn't. The greedy detection approach prioritizes high-confidence regions first, which speeds up full-image scanning significantly. Benchmarking against existing algorithms was as much about understanding their failure modes as measuring raw accuracy; knowing where each method breaks down is the real insight.",
  },
  {
    id: "synthi-gen",
    title: "SynthiGen: Synthetic Data Generator",
    description:
      "A data synthesis platform (1st place, Dell Hack-to-Hire 2023) that lets users define complex schemas with customizable distributions, relationships, and constraints, generating datasets in Parquet format with token-based authentication.",
    tags: ["Python", "React", "Parquet", "Data Engineering", "Hackathon"],
    github: "https://github.com/bhuvanakanakam/synthi-gen",
    color: "#ede4d4",
    year: "2023",
    story:
      "Dell Technologies ran a Hack-to-Hire at Mahindra University and we won first place. The problem was interesting: build a platform that generates realistic synthetic datasets for industries that can't share real data for testing: healthcare, finance, logistics. The core challenge was making distributions composable: a user defines a schema, picks distributions per column, adds inter-column constraints, and the engine produces statistically plausible data. We stored output in Parquet for efficient columnar retrieval and bolted on token-based auth so teams could share generated datasets securely. Building something judges could actually use in 24 hours; that pressure is different from coursework.",
  },
  {
    id: "nlp-representations",
    title: "NLP: Word, Phrase & Sentence Representations",
    description:
      "A deep-dive into representation learning for natural language — implementing word similarity (Word2Vec, GloVe), phrase-level composition, and sentence similarity using transformer-based embeddings.",
    tags: ["Python", "NLP", "Word2Vec", "Transformers", "Jupyter"],
    github: "https://github.com/bhuvanakanakam/representations-words-phrases-sentences",
    color: "#f5f0e8",
    year: "2023",
    story:
      "This was the project that made NLP click for me at a mathematical level. Starting with word vectors and cosine similarity sounds simple, until you're implementing it from scratch and staring at why 'king - man + woman ≈ queen' actually works in the vector space. Moving up to phrase and sentence representations forced me to think about compositionality: words combine in ways that aren't just addition. The transformer-based sentence similarity models at the end of this series are fundamentally different in architecture from the word-level models at the start, and tracing that evolution in a single project gave me an intuition I still rely on.",
  },
];

export type ExperienceProject = {
  category?: string;
  title: string;
  description: string;
  focusAreas?: string[];
  tech: string[];
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  type: "work" | "education";
  current?: boolean;
  bullets?: string[];
  note?: string;
  summary?: string;
  projects?: ExperienceProject[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "insightsoftware",
    role: "Associate Software Engineer",
    period: "Jun 2025 – Jul 2026",
    location: "Hyderabad, India",
    type: "work",
    current: true,
    bullets: [
      "Built enterprise features used by 120+ global clients across finance and operations teams on an enterprise reporting & planning platform.",
      "Developed ASP.NET Core / .NET 8 services with CI/CD pipelines on Azure.",
      "Integrated Azure OpenAI and Microsoft Graph API into production workflows.",
    ],
    summary:
      "Working on enterprise platform migration, reusable frontend infrastructure, and cloud platform engineering as part of insightsoftware's unified enterprise ecosystem.",
    projects: [
      {
        category: "Platform Migration",
        title: "Legacy Product → Unified Platform Migration",
        description:
          "Migrated a legacy enterprise product's experiences onto insightsoftware's shared enterprise platform using the company's shared design system and reusable UI standards.",
        focusAreas: [
          "Product modernisation",
          "Platformisation",
          "Shared UI infrastructure",
          "Enterprise migration workflows",
        ],
        tech: ["React", "TypeScript", "ASP.NET Core", "Azure"],
      },
      {
        category: "Universal UI & Design Systems",
        title: "Universal UI Engineering",
        description:
          "Built reusable enterprise UI systems including navigation, pagination, editable-grid interactions, and scalable theming architecture aligned with company-wide standards.",
        focusAreas: [
          "Data-grid UX",
          "Design systems",
          "Reusable components",
          "Tokenised theming",
        ],
        tech: ["React", "Storybook", "Sass", "Design Tokens"],
      },
      {
        category: "Enterprise Rendering Systems",
        title: "Notification & Rendering Architecture",
        description:
          "Worked on structured notification rendering systems, release-note workflows, and HTML-to-React parsing pipelines for dynamic enterprise content experiences.",
        focusAreas: [
          "Rendering systems",
          "Dynamic content pipelines",
          "Frontend parsing workflows",
          "Reusable rendering architecture",
        ],
        tech: ["React", "TypeScript", "APIs"],
      },
      // {
      //   category: "Cloud Platform Engineering",
      //   title: "Multi-Tenant Cloud Management Portal",
      //   description:
      //     "Built a self-service Azure-based cloud management platform with tenant-scoped access control and secure enterprise configuration workflows. Implemented domain-specific access isolation so enterprise customers manage only their own environments without dependency on DevOps or support teams.",
      //   focusAreas: [
      //     "Multi-tenant SaaS systems",
      //     "Access control & isolation",
      //     "Enterprise cloud tooling",
      //     "Self-service configuration workflows",
      //   ],
      //   tech: ["C#", ".NET 8", "ASP.NET Core", "Azure"],
      // },
      {
        category: "Enterprise Cloud Systems",
        title: "Cloud Management Export Systems",
        description:
          "Owned release-critical fixes for the platform's Cloud Management Export workflows across UI and backend service layers for a major platform release.",
        focusAreas: [
          "Full stack debugging",
          "Cloud workflow engineering",
          "Backend integrations",
          "Release engineering",
        ],
        tech: ["C#", "ASP.NET Core", "Azure"],
      },
      {
        category: "Security & Release Engineering",
        title: "Web Installer Security Hardening",
        description:
          "Implemented installer security improvements including credential masking, validation gating, and production regression fixes for enterprise deployments.",
        focusAreas: [
          "Security hardening",
          "Deployment workflows",
          "Release engineering",
        ],
        tech: ["C#", ".NET", "WIX"],
      },
      {
        category: "Developer Experience Tooling",
        title: "Engineer Onboarding Portal",
        description:
          "Designed and shipped an internal onboarding portal consolidating setup workflows, engineering documentation, KT videos, Jira workflows, and repository access into a unified experience. Reduced onboarding ramp-up time from 4+ weeks to under 1 week.",
        focusAreas: [
          "Developer experience",
          "Internal platform tooling",
          "Knowledge management",
          "Process optimisation",
        ],
        tech: ["React", "Next.js", "Node.js"],
      },
    ],
  },
  {
    company: "insightsoftware",
    role: "Software Engineer Intern",
    period: "Jan 2025 – Jul 2025",
    location: "Hyderabad, India",
    type: "work",
    bullets: [
      "Contributed to a financial data management platform serving enterprise clients.",
      "Built backend APIs and services in C# / .NET 8 across feature development and production releases.",
    ],
    summary:
      "Worked as a full stack engineering intern contributing to enterprise finance & planning product releases for a major platform modernization initiative.",
    projects: [
      {
        category: "Onboarding Bootcamp",
        title: "Full-Stack E-Commerce",
        description:
          "Built a full-stack e-commerce web app as the intern cohort's onboarding project — product catalogue, cart, ASP.NET Identity auth, and a SQL Server backend. Won Best Demo in the cohort showcase.",
        focusAreas: [
          "Full stack engineering",
          "Authentication & authorisation",
          "Relational data modelling",
          "End-to-end product shipping",
        ],
        tech: ["ASP.NET Core", "C#", "SQL Server", "JavaScript"],
      },
      {
        category: "GA Release Engineering",
        title: "Roll Forward & Export Systems",
        description:
          "Delivered full stack enterprise workflows as part of the platform's GA release, contributing across frontend and backend systems.",
        focusAreas: [
          "Full stack engineering",
          "Enterprise workflows",
          "Backend integrations",
          "Product feature delivery",
        ],
        tech: ["C#", ".NET", "React", "SQL"],
      },
      {
        category: "Product Telemetry",
        title: "Telemetry & Analytics Instrumentation",
        description:
          "Implemented telemetry and analytics integrations to improve workflow observability and engineering insights.",
        focusAreas: [
          "Product telemetry",
          "Analytics instrumentation",
          "Monitoring workflows",
        ],
        tech: ["React", "APIs", "Analytics"],
      },
      {
        category: "Customer-Facing Web Engineering",
        title: "Platform & Web Experiences",
        description:
          "Worked on customer-facing web workflows, platform integrations, and internal tooling initiatives across the platform ecosystem.",
        focusAreas: [
          "Frontend engineering",
          "Platform integrations",
          "Enterprise web workflows",
        ],
        tech: ["React", "TypeScript", "APIs"],
      },
    ],
  },
  {
    company: "Nebula",
    role: "Software Engineering Intern",
    period: "May 2024 – Aug 2024",
    location: "Remote",
    type: "work",
    bullets: [
      "Built and validated network infrastructure for next-generation firewall systems, designing lab topologies from scratch.",
      "Built an automated monitoring framework tracking 20+ real-time metrics — reduced system downtime by 30% and cut validation cycle time by 40%.",
    ],
    summary:
      "Built and validated network infrastructure for next-generation firewall systems — lab topology design, production-grade traffic simulation, and automated monitoring that cut validation cycle time by 40%.",
    projects: [
      {
        category: "Network Engineering",
        title: "Network Infrastructure Validation",
        description:
          "Designed lab topologies from scratch for next-generation firewall systems and simulated production-grade traffic loads to validate behavior under realistic conditions — cutting validation cycle time by 40%.",
        focusAreas: [
          "Lab topology design",
          "Traffic simulation",
          "Firewall system validation",
          "Test environment tooling",
        ],
        tech: ["Networking", "Firewall Systems", "Traffic Simulation", "Lab Tooling"],
      },
      {
        category: "Monitoring & Automation",
        title: "Automated Monitoring Framework",
        description:
          "Built an automated monitoring framework tracking 20+ real-time network and system metrics, surfacing failures early and reducing system downtime by 30%.",
        focusAreas: [
          "Real-time monitoring",
          "Automation frameworks",
          "Metrics & alerting",
          "Reliability engineering",
        ],
        tech: ["Monitoring", "Automation", "Networking", "Python"],
      },
    ],
  },
  {
    company: "Nexus Info",
    role: "Machine Learning Intern",
    period: "Apr 2024 – May 2024",
    location: "Remote",
    type: "work",
    bullets: [
      "Developed ML classification models in Python using scikit-learn.",
      "Built and trained a CNN-based deep learning model for cardiovascular risk prediction from heartbeat signals, reaching 83% accuracy.",
    ],
    summary:
      "Built classical-ML classification pipelines and a CNN-based deep learning model for cardiovascular risk prediction from heartbeat signal analysis.",
    projects: [
      {
        category: "Machine Learning",
        title: "Classification Model Pipelines",
        description:
          "Built end-to-end scikit-learn pipelines covering feature engineering, cross-validation, and model selection across logistic regression, random forest, and gradient boosting — packaged as reusable training scripts the team could re-run on new datasets.",
        focusAreas: [
          "Model selection",
          "Cross-validation",
          "Reproducible pipelines",
          "Performance benchmarking",
        ],
        tech: ["Python", "scikit-learn", "pandas", "NumPy"],
      },
      {
        category: "Deep Learning",
        title: "Cardiovascular Risk Prediction",
        description:
          "Built and trained a CNN-based deep learning model for cardiovascular risk prediction using heartbeat signal analysis, achieving 83% accuracy on held-out data.",
        focusAreas: [
          "Deep learning",
          "Signal processing",
          "Model training & evaluation",
          "Healthcare ML",
        ],
        tech: ["PyTorch", "CNNs", "Signal Processing", "Python"],
      },
    ],
  },
  {
    company: "Mahindra University",
    role: "Research Assistant",
    period: "2024",
    location: "Hyderabad, India",
    type: "work",
    bullets: [
      "Researched AI music composition using multi-objective Differential Evolution and evolutionary clustering.",
      "Contributed to an IEEE Transactions paper on emotion-aligned music generation.",
    ],
  },
  // CMU_HIDDEN — re-enable by removing the comment markers when ready to go public
  /* {
    company: "Carnegie Mellon University",
    role: "MISM BIDA",
    period: "Aug 2026",
    location: "Pittsburgh, PA",
    type: "education",
    note: "Master's in Information Systems Management, Business Intelligence & Data Analytics. Starting fall 2026.",
  }, */
  {
    company: "Mahindra University",
    role: "B.Tech Computer Science",
    period: "2021 – Jun 2025",
    location: "Hyderabad, India",
    type: "education",
    note: "Bachelor of Technology in Computer Science. Graduated in the top 10 of my batch, holding a merit scholarship for all four years. Strong focus on distributed systems, machine learning, and systems programming.",
  },
];
