export const devvyhacPersonalInfo = {
  name: 'Abdulqudus Ismail',
  nickname: 'Devvyhac',
  brandName: 'Abdulqudus Ismail',
  role: 'Backend Developer & Systems Engineer',
  tagline: 'Got an idea?\nLet’s make it real.',
  bio: 'I engineer reliable backend systems, APIs, real-time socket infrastructure,\nand distributed services in Go and C#/.NET.',
  introduceTag: 'Introduce',
  introduceTitle: "Hello! I'm Abdulqudus\nIsmail (Devvyhac)",
  introducePhilosophy: 'Reliability, high concurrency, and clean domain architecture by default',
  introduceDescription:
    "I am a backend-focused software engineer with a strong foundation in systems programming, distributed architecture, and resilient API design. I specialize in Go and C#/.NET, engineering services that process high-concurrency workloads with predictable latency and guaranteed data integrity. From webhook reliability queues and TCP/TLS socket servers to event-driven architectures and scalable e-commerce backends, I build software that performs under pressure.",
  ctaText: "LET'S CHAT!",
  stats: [
    {
      value: '5+',
      lines: ['YEARS', 'EXPERIENCE'],
    },
    {
      value: '38+',
      lines: ['REPOSITORIES &', 'SYSTEMS DELIVERED'],
    },
  ],
  socials: {
    twitter: 'https://x.com/0xLism',
    github: 'https://github.com/devvyhac',
    linkedin: 'https://linkedin.com/in/devvyhac',
    email: 'realdevvyhac@gmail.com',
    portfolio: 'https://devvyhac.netlify.app/',
  },
};

export const devvyhacServices = [
  {
    id: 'backend-systems',
    title: 'Backend & Systems',
    description: 'C# / .NET 8, ASP.NET Core, Go concurrency, Clean Architecture & DDD',
    projectsCount: '18 PROJECTS',
    icon: 'code',
    highlight: true,
  },
  {
    id: 'realtime-networking',
    title: 'Real-Time & Sockets',
    description: 'Low-latency TCP/TLS servers, WebSockets, event queues & reliable delivery',
    projectsCount: '9 PROJECTS',
    icon: 'server',
    highlight: false,
  },
  {
    id: 'databases-cloud',
    title: 'Databases & Cloud',
    description: 'Schema modeling, ACID transactions, Entity Framework Core, Docker & CI/CD',
    projectsCount: '14 PROJECTS',
    icon: 'database',
    highlight: false,
  },
];

export const clientLogos = [
  {
    id: 'dotnet',
    name: 'ASP.NET Core',
    sub: '.NET 8',
    type: 'crest',
  },
  {
    id: 'golang',
    name: 'Go / Golang',
    sub: 'Go 1.23+',
    type: 'tech',
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    sub: 'ACID / Relational',
    type: 'clean',
  },
  {
    id: 'docker',
    name: 'Docker',
    sub: 'Containers & Compose',
    type: 'interactive',
  },
  {
    id: 'react-vite',
    name: 'React + Vite',
    sub: 'Frontend Dashboards',
    type: 'monogram',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    sub: 'Strict Type Safety',
    type: 'gallery',
  },
  {
    id: 'zuri-i4g',
    name: 'Zuri x i4G',
    sub: 'Backend Internship',
    type: 'hotel',
  },
  {
    id: 'farm-apropos',
    name: 'Farm Apropos',
    sub: 'Agro Investment LTD',
    type: 'script',
  },
];

export const devvyhacProjects = [
  {
    id: 'relayledger',
    title: 'RelayLedger',
    subtitle: 'Webhook Reliability Infrastructure & Queue System',
    category: 'Enterprise Reliability Platform',
    tags: ['ASP.NET Core', 'C#', 'PostgreSQL', 'React+Vite', 'DDD'],
    image: '/assets/project-relayledger.png',
    description:
      'Highly advanced webhook reliability and event delivery platform built with ASP.NET Core and React+Vite. Features queues, events, concurrency with async/await, Domain-Driven Design (DDD), Clean Architecture, PostgreSQL, Entity Framework Core, exponential backoff with randomized jitter, and Dead-Letter Queue (DLQ) automated replay.',
    liveDemo: 'https://relayledger.vercel.app',
    github: 'https://github.com/devvyhac/RelayLedger',
    featured: true,
    highlightTitle: true,
  },
  {
    id: 'go-tcp-chat',
    title: 'Go TCP/TLS Chat',
    subtitle: 'High-Concurrency Terminal Socket Forum & TUI Client',
    category: 'Systems & Network Engineering',
    tags: ['Go', 'TCP/TLS', 'Bubble Tea', 'Goroutines', 'TUI'],
    image: '/assets/project-gotcp.jpg',
    description:
      'High-concurrency Golang TCP/TLS terminal chat forum server using goroutines, channels, zero-allocation buffer parsing, and self-signed TLS certificates. Paired with /go-forum-client, a secured terminal chat application exposing an interactive TUI interface powered by Charm’s Bubble-Tea over encrypted TCP/TLS socket connections.',
    liveDemo: null,
    github: 'https://github.com/devvyhac/go-forum-client',
    featured: true,
  },
  {
    id: 'tradefy-empire',
    title: 'Tradefy / Empire',
    subtitle: 'Full-Stack Scalable E-Commerce & Transaction Platform',
    category: 'Full Stack & APIs',
    tags: ['Node.js', 'Express', 'React', 'PostgreSQL', 'REST'],
    image: '/assets/project-empire.png',
    description:
      'Production-ready full-stack e-commerce system featuring an interactive React storefront (/empire) and a modular REST API backend (/empire-server) with persistent cart sessions, inventory transaction locks, and relational order management.',
    liveDemo: 'https://tradefy.netlify.app',
    github: 'https://github.com/devvyhac/empire',
    featured: true,
  },
  {
    id: 'syncvault',
    title: 'SyncVault',
    subtitle: 'Intelligent File & Folder Synchronization Service',
    category: 'Distributed Cloud Storage',
    tags: ['C#', '.NET', 'File Sync', 'Async I/O', 'AES-256'],
    image: '/assets/project-syncvault.jpg',
    description:
      'Dropbox-style file and directory synchronization service built with .NET. Implements local directory change watchers, delta file synchronization, AES-256 chunk encryption, and conflict resolution algorithms.',
    liveDemo: null,
    github: 'https://github.com/devvyhac/syncvault',
    featured: true,
  },
  {
    id: 'hackster',
    title: 'Hackster',
    subtitle: 'Modular Python CLI Toolkit, Route Crawler & SQLite Leaderboard Game',
    category: 'CLI Tools & Python Systems',
    tags: ['Python', 'CLI', 'SQLite', 'Web Scraper', 'Algorithms'],
    image: '/assets/project-hackster.png',
    description:
      'A versatile Python-based command-line suite featuring modular sub-programs: cryptographic password generator, recursive web crawler/scraper discovering all website routes, simulated ATM banking workflow, and an endless level-scaling number guessing game with persistent SQLite database leaderboards tracking all-time high scores.',
    liveDemo: null,
    github: 'https://github.com/devvyhac/hackster',
    featured: false,
  },
  {
    id: 'devvyhac-portfolio',
    title: 'Devvyhac Portfolio',
    subtitle: 'Developer Portfolio & Systems Showcase',
    category: 'Frontend Engineering',
    tags: ['React', 'TypeScript', 'CSS3', 'Vite'],
    image: '/assets/devvyhac2.png',
    description:
      'Personal engineering portfolio and systems showcase built with React, modern CSS design tokens, and fast client-side performance.',
    liveDemo: 'https://devvyhac.netlify.app/',
    github: 'https://github.com/devvyhac/devvyhac',
    featured: false,
  },
];

export const devvyhacTestimonials = [
  {
    id: 'peer-1',
    quote:
      "Abdulqudus is a phenomenal backend engineer. His work on RelayLedger's webhook delivery guarantees and queue architecture saved us hours of debugging dropped events. His grasp of C#/.NET and Go concurrency is top-tier.",
    rating: '5.0 Rating',
    stars: 5,
    name: 'David Adeleke',
    role: 'Lead Architect',
    company: 'TechFlow Systems',
    avatar: '/assets/client-benjamin.jpg',
  },
  {
    id: 'peer-2',
    quote:
      "He is a great developer but his modesty is out of this world. He is a funny team mate and always active. He can clone Facebook in just 2 weeks.",
    rating: '5.0 Rating',
    stars: 5,
    name: 'John Adepelumi',
    role: 'Full Stack Engineer',
    company: 'Zuri Chat',
    avatar: '/assets/client-raaid.jpg',
  },
  {
    id: 'peer-3',
    quote:
      "Abdulqudus delivered our e-commerce backend and database models with impeccable clean architecture. Queries are lightning-fast and the code is structured cleanly for scale.",
    rating: '5.0 Rating',
    stars: 5,
    name: 'Sarah Williams',
    role: 'Product Director',
    company: 'ScaleCommerce',
    avatar: '/assets/client-logan.jpg',
  },
];

export const devvyhacAwards = [
  {
    id: 'relayledger-award',
    year: '2025',
    title: 'Webhook Infrastructure Milestone',
    organization: 'RelayLedger Open Source',
    project: 'Guaranteed At-Least-Once Delivery Engine',
    category: 'Distributed Reliability',
  },
  {
    id: 'gotcp-award',
    year: '2025',
    title: 'High-Concurrency Network System',
    organization: 'Go Systems Lab',
    project: 'Go TCP/TLS + Bubble Tea TUI Client',
    category: 'Socket Networking & Concurrency',
  },
  {
    id: 'tradefy-award',
    year: '2024',
    title: 'Full-Stack E-Commerce Architecture',
    organization: 'Empire Commerce',
    project: 'Transactional Checkout & REST Backend',
    category: 'Clean Architecture & PostgreSQL',
  },
  {
    id: 'zuri-award',
    year: '2021',
    title: 'Backend Engineering Honors',
    organization: 'Zuri x Ingressive for Good',
    project: 'Intensive Node.js & API Engineering Cohort',
    category: 'Top Backend Graduate',
  },
];

export const devvyhacNotes = [
  {
    id: 'note-1',
    date: 'JAN 2026',
    readTime: '6 MIN READ',
    title: 'Designing Resilient Webhook Ingestion with Dead-Letter Queues & Jitter in .NET',
    category: 'Reliability',
    snippet:
      'How to build bulletproof webhook consumers in ASP.NET Core that prevent cascading timeouts and guarantee at-least-once message delivery.',
  },
  {
    id: 'note-2',
    date: 'NOV 2025',
    readTime: '8 MIN READ',
    title: 'Zero-Allocation Protocol Framing over TCP and TLS Sockets in Go',
    category: 'Go Systems',
    snippet:
      'Engineering high-throughput socket listeners in Go with custom buffer pools, sync.Pool, and secured TLS handshake pipelines.',
  },
  {
    id: 'note-3',
    date: 'AUG 2025',
    readTime: '5 MIN READ',
    title: 'Domain-Driven Design (DDD) & Clean Architecture for High-Volume Microservices',
    category: 'Architecture',
    snippet:
      'Separating domain entities, application commands, and persistence layers in Entity Framework Core to eliminate tight coupling.',
  },
];

export const fullCvData = {
  name: 'Abdulqudus Ismail',
  alias: 'Devvyhac',
  title: 'Backend Developer | Go & C#/.NET',
  location: 'Ilorin, Nigeria · Available for Remote Worldwide',
  email: 'realdevvyhac@gmail.com',
  github: 'https://github.com/devvyhac',
  linkedin: 'https://linkedin.com/in/devvyhac',
  summary:
    'Backend-focused software engineer with extensive experience in systems programming, distributed systems, and scalable API architecture. Core competencies include Go (goroutines, channels, TCP/TLS sockets), C#/.NET 8 (ASP.NET Core, Entity Framework Core, DDD, Clean Architecture), PostgreSQL, and containerized Docker environments.',
  skills: {
    languages: ['Go (Golang)', 'C#', '.NET 8', 'TypeScript', 'JavaScript (Node.js)', 'Python', 'SQL'],
    backendFrameworks: ['ASP.NET Core', 'Entity Framework Core', 'Express.js', 'REST APIs', 'WebSockets', 'gRPC (Basics)'],
    systemsNetworking: ['TCP Sockets', 'TLS Encryption', 'Concurrency & Goroutines', 'Dead-Letter Queues', 'Event Streams', 'Bubble Tea TUI'],
    databasesTools: ['PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'Docker Compose', 'Git', 'GitHub Actions', 'Linux (Bash)'],
  },
  experience: [
    {
      role: 'Backend & Systems Developer',
      company: 'Independent Contractor / Open Source',
      period: '2022 – Present',
      location: 'Remote',
      points: [
        'Architected RelayLedger (ASP.NET Core, React+Vite, PostgreSQL): an enterprise webhook reliability platform featuring exponential backoff retries with jitter and dead-letter queue isolation.',
        'Built a high-concurrency Go TCP/TLS chat forum server and Bubble-Tea TUI client (/go-forum-client) handling concurrent encrypted socket streams with custom protocol framing.',
        'Developed SyncVault (.NET / C#): a Dropbox-style folder sync daemon with delta synchronization and AES-256 chunk encryption.',
        'Engineered Tradefy / Empire: a full-stack e-commerce system with decoupled React frontend (/empire) and Node.js REST API backend (/empire-server).',
      ],
    },
    {
      role: 'Senior Web Developer',
      company: 'Farm Apropos Agro Investment L.T.D',
      period: 'Jan 2021 – Dec 2021',
      location: 'Ilorin, Nigeria',
      points: [
        'Architected and deployed a corporate agricultural investment portal bridging physical field metrics with central reporting dashboards.',
        'Optimized MySQL relational database queries and indexed lookup tables, reducing reporting latency by 40%.',
        'Managed server deployment, SSL configuration, and transactional database integrity.',
      ],
    },
    {
      role: 'Backend Engineering Intern',
      company: 'Zuri x Ingressive for Good (i4G)',
      period: 'Jan 2021 – Dec 2021',
      location: 'Remote',
      points: [
        'Engineered secure RESTful APIs in Node.js/Express for user authentication, transactional record storage, and queries.',
        'Integrated cloud storage bucket APIs for automated image and asset uploading.',
        'Collaborated with cross-functional agile teams of frontend developers and mobile engineers.',
      ],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Science / Engineering Background',
      school: 'University of Ilorin',
      location: 'Ilorin, Nigeria',
      notes: 'Focused on computation, software engineering principles, algorithms, and systems architecture.',
    },
  ],
};
