export const projects = [
  {
    id: "kaybee-f1",
    title: "KayBee F1",
    description:
      "A personal Formula 1 dashboard for tracking race results, lap metrics, driver standings, and season performance — built because spreadsheets weren't cutting it anymore.",
    tags: ["Next.js", "TypeScript", "Data Viz", "F1 API"],
    github: "https://github.com/bhuvanakanakam",
    live: "https://kaybee-f1.vercel.app/",
    color: "#e8d5d5",
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
    github: "https://github.com/bhuvanakanakam",
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
    color: "#e8d8c0",
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
    color: "#ede4d4",
    year: "2024",
    story:
      "This started as a research question: can you algorithmically compose music that evokes a specific emotional state (Rasa) from Indian classical aesthetics? I implemented FC-means evolutionary clustering and an ALI-GAN pipeline, running experiments on a DGX supercomputer. The hardest bug was a multiprocessing seed replication issue that was silently killing result diversity; finding it took three days. The work contributed to an IEEE Transactions submission.",
  },
  // {
  //   id: "recon",
  //   title: "Project RECON",
  //   description:
  //     "An 8-node Raspberry Pi 4B compute cluster with VLAN networking, GlusterFS distributed storage, Slurm + OpenMPI for parallel computation, and LDAP for cross-node authentication. Fully funded ($2,000) by the university — used by 400+ students.",
  //   tags: ["Raspberry Pi", "Linux", "GlusterFS", "Slurm", "OpenMPI"],
  //   github: "https://github.com/bhuvanakanakam",
  //   color: "#f5f0e8",
  //   year: "2024",
  //   story:
  //     "RECON (Raspberry Pi Engineered Cluster Over Net) grew out of a frustration: students had no practical distributed computing environment to actually run coursework on. I pitched the idea to Enigma, our CS club, wrote the proposal, got $2,000 approved, and built the whole thing from scratch. Today it's used by 400+ students as their hands-on distributed computing lab. Nothing beats seeing it actually being used.",
  // },
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
    github: "https://github.com/bhuvanakanakam",
    color: "#f5f0e8",
    year: "2023",
    story:
      "Medical image segmentation is hard because labeled data is expensive and scarce. The few-shot approach lets the model generalize from a handful of annotated examples. U-Net's skip connections preserve spatial detail that gets lost in standard encoders, crucial for delineating cardiac boundaries accurately. The preprocessing pipeline (normalization, augmentation, registration) ended up being as important as the model architecture itself.",
  },
  {
    id: "5",
    title: "ANN from Scratch",
    description:
      "A fully vectorized artificial neural network built in pure Python (no deep learning libraries) for regression tasks: sin(x) approximation and Combined Cycle Power Plant prediction.",
    tags: ["Python", "NumPy", "Backpropagation", "Adam Optimizer"],
    github: "https://github.com/bhuvanakanakam",
    color: "#ddd0bc",
    year: "2023",
    story:
      "The constraint was simple: no PyTorch, no TensorFlow, no Keras. Just NumPy and math. Implementing vectorized backpropagation from first principles, then getting momentum and Adam to converge correctly, and this is where I really understood what a neural network is doing. Every framework abstraction I use now feels transparent because I've written it by hand.",
  },
  {
    id: "6",
    title: "Generating Paintings from Photographs with CycleGAN",
    description:
      "A CycleGAN implementation in PyTorch that learns to transfer Monet's painting style to photographs, achieving a Fréchet Inception Distance (FID) below 60 on Kaggle.",
    tags: ["Python", "PyTorch", "CycleGAN", "GANs"],
    github: "https://github.com/bhuvanakanakam",
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
    github: "https://github.com/bhuvanakanakam",
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

export const blogPosts = [
  {
    id: "enterprise-saas",
    title: "What building enterprise SaaS changed in how I engineer",
    date: "November 2024",
    readTime: "6 min",
    accent: "#d0d0d8",
    excerpt:
      "Working on software used by real finance teams taught me to optimize for reliability, clarity, and trust, not just speed.",
    content: `Before working on enterprise software, I mostly judged code by whether it was elegant and whether it shipped fast. Working on CALUMO at insightsoftware changed that.

When people rely on your product for financial reporting, the bar is different. A small change in behavior can ripple through workflows, support teams, and month-end processes. That forced me to think less like a builder showing off a feature and more like an engineer protecting a system people already trust.

**Backwards compatibility is part of the product.** I learned that migrations, feature flags, and careful rollout plans are not boring work around the real work. They are the real work when customers depend on stability.

**Context matters as much as code.** In older codebases, every unusual condition probably exists because somebody already got hurt by the simpler version. I became much more deliberate about reading history, tracing usage, and understanding why a decision was made before proposing a replacement.

**Good engineering is often invisible.** Some of my most useful work has been in reducing risk, simplifying workflows, and making the system easier for the next person to change. That kind of work rarely looks flashy from the outside, but it is exactly the kind of work I want to keep doing.

This experience made me a more grounded engineer. I still like moving fast. I just care much more now about whether what I build will hold up when real teams depend on it.`,
    tags: ["Engineering", "Career", "SaaS"],
  },
  {
    id: "distributed-systems-hard-parts",
    title: "What I actually learned from building distributed systems",
    date: "September 2024",
    readTime: "7 min",
    accent: "#c5cfe0",
    excerpt:
      "Distributed systems stopped being an academic topic for me when I started running into partial failures, timing issues, and observability gaps in real projects.",
    content: `I used to think distributed systems were mainly about knowing the terminology. Consistency models, CAP theorem, leader election, retries. Those ideas matter, but they only became real to me once I started building systems where things failed in messy ways.

**Partial failures are where the real complexity lives.** A service being fully down is obvious. A service that responds slowly, drops a small percentage of requests, or returns stale data is much harder to reason about. That is where careful timeouts, retries, and idempotency stop being textbook ideas and start becoming engineering discipline.

**Ordering and time are easy to underestimate.** I have spent enough time debugging race conditions and coordination issues to know that "it usually works" is not a real guarantee. Distributed systems taught me to be precise about event ordering, failure assumptions, and what the system should do when reality is messy.

**Observability is part of the design.** I no longer think of logging and monitoring as work you add after the system exists. If you cannot explain how you would detect drift, duplication, latency spikes, or downstream failure, the design is not finished.

The biggest lesson for me is that good distributed systems engineering is mostly about reducing uncertainty. Clear contracts, predictable failure handling, and useful visibility matter more than cleverness. That mindset shows up in almost every project I build now.`,
    tags: ["Distributed Systems", "Engineering", "Backend"],
  },
  // CMU_HIDDEN — re-enable by removing the comment markers when ready to go public
  /* {
    id: "cmu-journey",
    title: "Why I chose CMU for the next phase of my career",
    date: "March 2025",
    readTime: "5 min",
    accent: "#e8d5b7",
    excerpt:
      "CMU felt like the right next step because it strengthens the exact intersection I care about: software engineering, data systems, and product thinking.",
    content: `Getting into Carnegie Mellon was meaningful to me, but the part that matters most is why I chose it.

I want to build products that sit close to the data layer and still feel useful to end users. That means I need stronger depth in data systems, stronger product judgment, and stronger exposure to how technical decisions connect to business outcomes. CMU's MISM BIDA path felt aligned with that.

The application process also clarified something for me: the strongest parts of my profile were not abstract claims. They were specific things I had built, debugged, and shipped. When I wrote about projects, I was most effective when I explained the tradeoffs, what failed, and what I learned from solving it.

**That is probably the biggest lesson I am carrying forward.** The best story about my work is not a polished headline. It is a concrete example of how I think, how I work through ambiguity, and how I improve a system.

For me, CMU is not a trophy. It is a way to sharpen the kind of engineer I already know I want to become: someone who can move between implementation, architecture, and product context with confidence.`,
    tags: ["CMU", "Masters", "Career"],
  }, */
  {
    id: "national-sports",
    title: "What competitive sports taught me about how I work",
    date: "February 2025",
    readTime: "4 min",
    accent: "#c8d5c4",
    excerpt:
      "Years of fencing and softball shaped my work style: disciplined preparation, composure under pressure, and a bias toward consistent improvement.",
    content: `Before software became my career, sports taught me how I approach difficult work.

I competed in fencing and softball at the national level, and the biggest lesson I carried into engineering is that performance is usually built long before the high-pressure moment arrives. You do not become calm in competition by accident. You get there through repetition, preparation, and honest review.

**That maps directly to engineering for me.** When I am learning a new system or preparing for a complex feature, I like breaking it down, identifying the part I do not yet understand, and working on that deliberately instead of hoping repetition alone will fix it.

**Sports also made me comfortable with feedback.** You cannot improve if every loss feels personal. The same is true in engineering. Code review, failed experiments, and production issues are only useful if you can look at them clearly and ask what they are teaching you.

The result is a work style I value a lot: stay steady, prepare well, and keep getting a little better. That mindset has helped me in interviews, internships, project work, and every environment where the stakes felt high.`,
    tags: ["Sports", "Engineering", "Mindset"],
  },
  {
    id: "f1-data",
    title: "Why I like building around data I can interrogate",
    date: "January 2025",
    readTime: "6 min",
    accent: "#c5cfe0",
    excerpt:
      "My F1 telemetry project reminded me that the most interesting data work is not just collecting events; it is turning them into something a person can reason about quickly.",
    content: `One reason I enjoy Formula 1 data so much is that it makes engineering questions feel tangible. There is a clear event stream, a lot of nuance in the timing, and a very obvious payoff if you visualize it well.

When I worked with telemetry and lap data, the interesting part was not just pulling the numbers in. It was figuring out how to align feeds with different timing, make comparisons readable, and expose the moment where the story changes.

**That is what I like about data engineering in general.** The technical work matters, but the real goal is clarity. If the end result does not help someone make a better decision faster, the pipeline is incomplete.

This project also reinforced something I care about in my broader work: I like systems where there is a chain from raw data, to processing, to interpretation, to user value. Building that chain well is the kind of problem I want to keep solving.`,
    tags: ["F1", "Data Engineering", "Streaming"],
  },
  {
    id: "guinness-kuchipudi",
    title: "What a Guinness record taught me about coordination",
    date: "December 2024",
    readTime: "5 min",
    accent: "#dfc0b0",
    excerpt:
      "Taking part in a 10,000-person Kuchipudi performance made me appreciate coordination, timing, and the discipline required for a group to move as one.",
    content: `I have practiced Kuchipudi for most of my life, and being part of a Guinness World Record performance with thousands of dancers is still one of the clearest examples I have of what disciplined coordination looks like.

At that scale, individual talent is not enough. The outcome depends on timing, repetition, trust, and everyone understanding their role in the larger system. That is part of why the experience stays with me.

**I see the same pattern in team engineering work.** Strong teams are not impressive because one person does everything. They are impressive because people execute their part well, communicate clearly, and make the whole system feel coherent.

That experience taught me that I enjoy environments where precision and teamwork both matter. I like being accountable for my piece of the work, and I like contributing to outcomes that are bigger than anything one person could do alone.`,
    tags: ["Dance", "Kuchipudi", "Life"],
  },
  {
    id: "bad-leadership",
    title: "How living away from family changed me",
    date: "April 2026",
    readTime: "4 min",
    accent: "#c8d5c4",
    excerpt:
      "Moving away from family for college and work taught me way more than independence. It taught me ownership, resilience, and how to build a life from scratch.",
    content: `I used to think moving away from family was mostly about studies and career. New place, new people, new goals. I did not expect how much normal everyday life would shape me.

Cooking, cleaning, groceries, bills, laundry, planning my week: none of this sounds glamorous, but this is where I learned real ownership. You stop waiting for someone else to organize your life. You become the person who does it.

There were difficult days too. Days when everything felt heavy and I missed home badly. But those days taught me the most. I learned that confidence is not built on perfect days. It is built when you still show up on the messy ones.

I still call my family often, and I still miss home. But now I also trust myself in a very different way. Living away did not make me harder. It made me steadier.`,
    tags: ["Life", "Growth", "Reflection"],
  },
  {
    id: "fundraising-and-people",
    title: "Routine changed my life (but not in a robotic way)",
    date: "April 2026",
    readTime: "3 min",
    accent: "#dfc0b0",
    excerpt:
      "I am still figuring things out, especially sleep, but building a flexible routine has grounded me more than any short burst of motivation ever did.",
    content: `For a while, I thought discipline meant following a perfect time-table. Every hour planned. Zero deviation. It looked good on paper and failed in real life.

What actually worked for me was a routine with anchors, not a prison schedule. A few habits that keep me grounded: focused work blocks, movement, proper meals, and a wind-down at night.

I am still figuring out my sleep schedule properly. I do not think exact same-to-the-minute timing works every single day. We are not robots. Workload changes, life happens, energy shifts.

Now I optimize for consistency over perfection. If I can keep the basics steady most days, everything else becomes easier. Less guilt, better focus, better mood.`,
    tags: ["Routine", "Life", "Mindset"],
  },
  {
    id: "board-games-strangers",
    title: "Why I started doing more things alone",
    date: "April 2026",
    readTime: "4 min",
    accent: "#c5cfe0",
    excerpt:
      "Going to board game nights, dance events, and random plans alone felt awkward at first. Now it feels like freedom.",
    content: `A lot of times friends are busy, everyone has different plans, and if I wait for the perfect group plan, I end up doing nothing. So I started going alone.

Board game meetups. Dance events. Community things where I know nobody.

First 10 minutes are always weird. Then it gets fun. You meet strangers, you talk, you laugh, you play, and suddenly it feels natural.

Doing things alone gave me a sense of self-reliance I did not have before. It also gave me an escape from screens. My work is already online-heavy, so these offline moments with real people feel like a reset.

I used to think doing things alone would feel lonely. For me, it turned out to be the opposite. It made me more open to life.`,
    tags: ["Life", "People", "Board Games"],
  },
  {
    id: "packing-for-pittsburgh",
    title: "Leaving college made me realize what home really is",
    date: "April 2026",
    readTime: "4 min",
    accent: "#e8d5b7",
    excerpt:
      "In college, everyone knew me — from security staff to faculty. Walking away from that made me understand that home is something we build with people, not walls.",
    content: `College gave me a kind of belonging I did not fully appreciate while I was in it.

From the security guard at the gate to professors to classmates in the corridor, there was always someone who knew me and greeted me. That everyday warmth made campus feel like home, especially while staying away from family.

When I moved out, life became quieter and more independent. It was not easy. But it made me think deeply about what home means.

For me, home is now less about one fixed place and more about what you build around yourself: people, routines, little rituals, and meaning.

Life away from family is not a piece of cake. But I am learning to see beauty even in the rough phases. Sometimes the hardest moments are the ones that shape us the most.`,
    tags: ["Life", "College", "Reflection"],
  },
];

export const interests = [
  { label: "Dance", detail: "Kuchipudi · Guinness World Record" },
  { label: "Formula 1", detail: "Data nerd about it" },
  { label: "Basketball", detail: "Pick-up games, always" },
  { label: "Fencing", detail: "AP State gold, national competitor" },
  { label: "Photography", detail: "Events, travel, candid" },
  { label: "Travel", detail: "Always planning next trip" },
  { label: "Board Games", detail: "Strangers welcome, strategy preferred" },
  { label: "Fundraising", detail: "Community & outreach causes" },
  { label: "Movies", detail: "Wide taste, strong opinions" },
  { label: "Music", detail: "Classical to electronic" },
];

export const skills = {
  languages: ["C#", "Python", "TypeScript", "JavaScript", "Java", "SQL"],
  frameworks: ["ASP.NET Core", ".NET 8", "React.js", "FastAPI", "Node.js"],
  "ml / ai": ["Python", "PyTorch", "scikit-learn", "Transformers (HuggingFace)", "XLM-RoBERTa", "FastAPI", "NumPy", "Differential Evolution", "Computer Vision", "NLP"],
  data: ["SQL Server", "MongoDB", "MySQL", "Azure OpenAI", "SharePoint"],
  tools: ["Azure", "AWS", "Git", "CI/CD", "Microsoft Graph API"],
};

export type ExperienceEntry = {
  company: string;
  initials: string;
  role: string;
  period: string;
  location: string;
  type: "work" | "education";
  current?: boolean;
  bullets?: string[];
  note?: string;
};

export const experience: ExperienceEntry[] = [
  {
    company: "insightsoftware",
    initials: "ISW",
    role: "Associate Software Engineer",
    period: "Jul 2025 – Present",
    location: "Hyderabad, India",
    type: "work",
    current: true,
    bullets: [
      "Built enterprise features used by 120+ global clients across finance and operations teams on the CALUMO platform.",
      "Developed ASP.NET Core / .NET 8 services with CI/CD pipelines on Azure.",
      "Integrated Azure OpenAI and Microsoft Graph API into production workflows.",
    ],
  },
  {
    company: "insightsoftware",
    initials: "ISW",
    role: "Software Engineering Intern",
    period: "Jan 2025 – Jun 2025",
    location: "Hyderabad, India",
    type: "work",
    bullets: [
      "Contributed to CDM Next, a financial data management platform serving enterprise clients.",
      "Built backend APIs and services in C# / .NET 8 across feature development and production releases.",
    ],
  },
  {
    company: "Nebula",
    initials: "NB",
    role: "Software Engineering Intern",
    period: "May 2024 – Aug 2024",
    location: "Remote",
    type: "work",
    bullets: [
      "Built and shipped full-stack product features using React and Node.js.",
      "Worked across frontend and backend to deliver user-facing improvements end-to-end.",
    ],
  },
  {
    company: "Nexus Info",
    initials: "NX",
    role: "Machine Learning Intern",
    period: "Apr 2024 – May 2024",
    location: "Remote",
    type: "work",
    bullets: [
      "Developed ML classification models in Python using scikit-learn.",
      "Built data preprocessing pipelines and benchmarked model performance across datasets.",
    ],
  },
  {
    company: "Mahindra University",
    initials: "MU",
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
    initials: "CMU",
    role: "MISM BIDA",
    period: "Aug 2026",
    location: "Pittsburgh, PA",
    type: "education",
    note: "Master's in Information Systems Management, Business Intelligence & Data Analytics. Starting fall 2026.",
  }, */
  {
    company: "Mahindra University",
    initials: "MU",
    role: "B.Tech Computer Science",
    period: "2021 – Jun 2025",
    location: "Hyderabad, India",
    type: "education",
    note: "Bachelor of Technology in Computer Science. Graduated in the top 10 of my batch, holding a merit scholarship for all four years. Strong focus on distributed systems, machine learning, and systems programming.",
  },
];

export const timeline = [
  // CMU_HIDDEN — re-enable by removing the comment markers when ready to go public
  /* {
    year: "Aug 2026",
    event: "Carnegie Mellon University",
    detail: "Starting MISM BIDA, fall 2026",
    type: "education",
  }, */
  {
    year: "Jul 2025–Present",
    event: "Associate Software Engineer",
    detail: "insightsoftware",
    type: "work",
  },
  {
    year: "Jan–Jun 2025",
    event: "Software Engineering Intern",
    detail: "insightsoftware",
    type: "work",
  },
  {
    year: "Jun 2025",
    event: "Graduated",
    detail: "B.Tech Computer Science, Mahindra University",
    type: "education",
  },
  {
    year: "May–Aug 2024",
    event: "Software Engineering Intern",
    detail: "Nebula, remote",
    type: "work",
  },
  {
    year: "Apr–May 2024",
    event: "Machine Learning Intern",
    detail: "Nexus info, remote",
    type: "work",
  },
  {
    year: "2024",
    event: "Research Assistant",
    detail: "Mahindra University, AI music composition research",
    type: "work",
  },
];
