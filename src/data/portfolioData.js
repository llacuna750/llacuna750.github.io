export const certificatesData = [
  {
    id: "sololearn-html",
    title: "Introduction to HTML",
    provider: "SoloLearn",
    credentialId: "CC-LXZ3PTWZ",
    category: "Web",
    symbol: "<>",
    date: "Feb 22, 2025",
    accentColor: "blue",
    skills: [
      "Semantic HTML",
      "DOM Structure",
      "Forms & Inputs",
      "Accessibility Basics",
    ],
    url: "https://www.sololearn.com/en/certificates/CC-LXZ3PTWZ",
    description:
      "Foundations of web document structure, semantic tags, forms, tables, and browser rendering principles.",
  },
  {
    id: "sololearn-css",
    title: "Introduction to CSS",
    provider: "SoloLearn",
    credentialId: "CC-Y4RUSTTH",
    category: "Web",
    symbol: "#",
    date: "April 20, 2025",
    accentColor: "indigo",
    skills: ["Box Model", "Flexbox", "CSS Grid", "Responsive Layouts"],
    url: "https://www.sololearn.com/certificates/CC-Y4RUSTTH",
    description:
      "Styling interfaces, box model architecture, cascade specificity, flexbox alignments, and media queries.",
  },
  {
    id: "sololearn-java-intro",
    title: "Introduction to Java",
    provider: "SoloLearn",
    credentialId: "CC-WH6NXDX5",
    category: "Programming",
    symbol: "Java",
    date: "September 27, 2024",
    accentColor: "cyan",
    skills: ["Syntax & Types", "Control Flow", "Methods", "Basic OOP"],
    url: "https://www.sololearn.com/en/certificates/CC-WH6NXDX5",
    description:
      "Object-oriented programming fundamentals in Java, covering static typing, data structures, and algorithmic logic.",
  },
  {
    id: "sololearn-js-intro",
    title: "Introduction to JavaScript",
    provider: "SoloLearn",
    credentialId: "CC-ZP0LA5TU",
    category: "Programming",
    symbol: "JS",
    date: "May 15, 2025",
    accentColor: "amber",
    skills: [
      "Variables & Scopes",
      "Functions & Closures",
      "DOM Manipulation",
      "Event Handling",
    ],
    url: "https://www.sololearn.com/en/certificates/CC-ZP0LA5TU",
    description:
      "Core ECMAScript capabilities, functional programming patterns, event-driven web behavior, and asynchronous execution.",
  },
  {
    id: "sololearn-js-inter",
    title: "JavaScript Intermediate",
    provider: "SoloLearn",
    credentialId: "CC-F6HWAJFZ",
    category: "Programming",
    symbol: "JS++",
    date: "May 31, 2025",
    accentColor: "emerald",
    skills: [
      "ES6+ Modules",
      "Promises & Async/Await",
      "Error Handling",
      "Prototypes",
    ],
    url: "https://www.sololearn.com/certificates/CC-F6HWAJFZ",
    description:
      "Advanced JavaScript paradigms including asynchronous promise chains, object modeling, and modern browser APIs.",
  },
  {
    id: "sololearn-java-inter",
    title: "Java Intermediate",
    provider: "SoloLearn",
    credentialId: "CC-WJD14OUO",
    category: "Programming",
    symbol: "Java",
    date: "June 20, 2025",
    accentColor: "blue",
    skills: [
      "Inheritance & Polymorphism",
      "Exceptions",
      "Collections Framework",
      "Generics",
    ],
    url: "https://www.sololearn.com/certificates/CC-WJD14OUO",
    description:
      "Intermediate enterprise Java architecture, object inheritance trees, encapsulation, and the Collections API.",
  },
  {
    id: "coddy-js-fundamentals",
    title: "JavaScript Fundamentals",
    provider: "Coddy",
    credentialId: "CtLK6K-Bi8cmJ",
    category: "Programming",
    symbol: "JS",
    date: "February 25, 2026",
    accentColor: "indigo",
    skills: [
      "Problem Solving",
      "Data Structures",
      "String Manipulation",
      "Array Methods",
    ],
    url: "https://coddy.tech/certifications/CtLK6K-javascript-Bi8cmJ",
    description:
      "Hands-on coding challenges validating algorithmic thinking, data filtering, and practical problem solving.",
  },
  {
    id: "coddy-js-logic",
    title: "JavaScript Logic & Flow",
    provider: "Coddy",
    credentialId: "CtLK6K-pIPeoH",
    category: "Programming",
    symbol: "{ }",
    date: "February 19, 2026",
    accentColor: "rose",
    skills: [
      "Boolean Logic",
      "Recursion & Loops",
      "Conditionals",
      "Edge Case Analysis",
    ],
    url: "https://coddy.tech/certifications/CtLK6K-javascript-pIPeoH",
    description:
      "Deep dive into computational control flow, boundary conditions, truthy/falsy evaluation, and iterative algorithms.",
  },
];

export const projectsData = [
  {
    id: 'subnet-calculator',
    path: '/projects/ipv4-subnet-cidr-calculator/',
    title: 'IPv4 Subnet & CIDR Lab Utility',
    category: 'Networking',
    type: 'Interactive Tool',
    summary: 'A fast visual CIDR calculator designed for IT networking labs to instantly compute network IDs, broadcast addresses, usable host counts, and binary subnet masks.',
    tags: ['Networking', 'IPv4', 'CIDR Math', 'React'],
    githubUrl: 'https://github.com/llacuna750',
    demoType: 'interactive',
    interactiveKind: 'subnet',
    details: [
      'Calculates usable host capacity from /8 to /30 CIDR notations.',
      'Renders visual bitmask decomposition into 4 octets with binary breakdown.',
      'Helps students verify subnet partitioning for Cisco Packet Tracer labs.'
    ],
    seo: {
      title: 'IPv4 Subnet Calculator Project | React Lab Tool',
      description: 'Explore a React IPv4 subnet and CIDR calculator for networking labs, including network IDs, broadcast addresses, host counts, and binary masks.',
      h1: 'IPv4 Subnet Calculator for Networking Labs',
      lead: 'An interactive React utility for checking IPv4 subnet calculations in networking labs. It computes network IDs, broadcast addresses, usable host counts, and binary subnet masks.',
    },
    caseStudy: {
      focus: 'IPv4 subnetting and CIDR',
      challenge: 'Subnetting requires several related values to be checked together, from a CIDR prefix and subnet mask to host capacity and address boundaries.',
      solution: 'I created a visual utility that brings those calculations into one workflow and exposes the binary mask breakdown used to reach each result.',
      learning: 'The project focuses on making CIDR calculations easier to inspect and verify during hands-on networking practice.',
      relatedProjectId: 'network-monitor',
    },
  },
  {
    id: 'network-monitor',
    path: '/projects/network-port-latency-diagnostic-simulator/',
    title: 'Network Port & Latency Diagnostic Sim',
    category: 'Networking',
    type: 'Systems & Diagnostics',
    summary: 'An interactive simulator modeling DNS lookup latency, standard port verification (HTTP, HTTPS, SSH, FTP), and packet round-trip time calculations.',
    tags: ['TCP/IP', 'Port Mapping', 'Diagnostics', 'JavaScript'],
    githubUrl: 'https://github.com/llacuna750',
    demoType: 'interactive',
    interactiveKind: 'ping',
    details: [
      'Demonstrates TCP 3-way handshake simulation and standard service port allocations.',
      'Simulates ICMP echo requests with jitter and round-trip time (RTT) calculation.',
      'Includes diagnostic error scenarios (timeout, refused, packet loss).'
    ],
    seo: {
      title: 'Network Diagnostic Simulator | TCP/IP Project',
      description: 'Explore a JavaScript network diagnostic simulator for DNS lookup latency, service ports, TCP/IP flow, and round-trip-time scenarios.',
      h1: 'Network Port and Latency Diagnostic Simulator',
      lead: 'An interactive JavaScript simulator for exploring DNS lookup latency, standard service ports, and packet round-trip time. It models diagnostic scenarios including timeouts, refused connections, and packet loss.',
    },
    caseStudy: {
      focus: 'TCP/IP, ports, and diagnostics',
      challenge: 'Network troubleshooting involves connected concepts such as name resolution, ports, packet flow, and timing that are often learned separately.',
      solution: 'I modeled those concepts in one diagnostic simulator so a learner can connect common service ports and packet behaviour with the outcomes of a network check.',
      learning: 'The project centers on how DNS, TCP/IP, and latency signals can be read together during basic network troubleshooting.',
      relatedProjectId: 'it-learning-notes',
    },
  },
  {
    id: 'it-learning-notes',
    path: '/projects/it-systems-architecture-lab-journal/',
    title: 'IT Systems & Architecture Lab Journal',
    category: 'Systems & Code',
    type: 'Documentation & Labs',
    summary: 'Curated technical reference logs detailing OSI 7-layer reference model, packet routing concepts, Java object-oriented principles, and CLI automation scripts.',
    tags: ['OSI Model', 'Linux CLI', 'Java OOP', 'Documentation'],
    githubUrl: 'https://github.com/llacuna750',
    demoType: 'interactive',
    interactiveKind: 'osi',
    details: [
      'Interactive OSI Layer explorer mapping protocols (HTTP, TCP, IP, Ethernet) to layers.',
      'Quick-reference cheat sheet for standard Linux bash networking commands (ifconfig, netstat, ping).',
      'Code snippets illustrating Java OOP inheritance and modular structuring.'
    ],
    seo: {
      title: 'IT Systems Lab Journal | Networking and Java',
      description: 'Browse an IT lab journal covering the OSI model, packet routing, Linux networking commands, and Java OOP examples.',
      h1: 'IT Systems and Architecture Lab Journal',
      lead: 'A technical reference journal that connects networking, systems, and programming fundamentals. It documents the OSI model, routing concepts, Linux networking commands, and Java OOP examples.',
    },
    caseStudy: {
      focus: 'OSI, Linux CLI, and Java OOP',
      challenge: 'Networking, systems, and programming topics are easier to revisit when their concepts and practical references are kept in one place.',
      solution: 'I organized technical reference notes and small interactive examples around the OSI model, routing, Linux networking commands, and Java object-oriented programming.',
      learning: 'The journal is a focused record of core concepts that support continued work across networking and software projects.',
      relatedProjectId: 'subnet-calculator',
    },
  }
]

export const skillsCategories = [
  {
    id: 'all',
    label: 'All Skills'
  },
  {
    id: 'networking',
    label: 'Networking & Systems'
  },
  {
    id: 'programming',
    label: 'Programming'
  },
  {
    id: 'web',
    label: 'Web & Tools'
  }
]

export const skillsData = [
  { name: 'TCP/IP & OSI Model', category: 'networking', level: 'Core Foundation' },
  { name: 'IPv4 Subnetting & CIDR', category: 'networking', level: 'Practical Lab' },
  { name: 'Network Topology Design', category: 'networking', level: 'Academic' },
  { name: 'Packet Flow Analysis', category: 'networking', level: 'Foundation' },
  { name: 'Java OOP', category: 'programming', level: 'Intermediate' },
  { name: 'JavaScript (ES6+)', category: 'programming', level: 'Intermediate' },
  { name: 'Algorithms & Control Flow', category: 'programming', level: 'Core Foundation' },
  { name: 'React SPA', category: 'web', level: 'Hands-on' },
  { name: 'HTML5 Semantic Layouts', category: 'web', level: 'Proficient' },
  { name: 'Modern CSS & Flex/Grid', category: 'web', level: 'Proficient' },
  { name: 'Git & GitHub Version Control', category: 'web', level: 'Practical' },
  { name: 'Linux Terminal & CLI', category: 'networking', level: 'Essential' }
]
