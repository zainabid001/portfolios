import { Boxes, BrainCircuit, Cloud, Code2, Database, Layers3, Wrench } from "lucide-react";

export const skillGroups = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "Angular",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "CSS3",
    ],
  },
  {
    title: "State Management",
    icon: Boxes,
    skills: ["Redux", "Vuex", "React Query", "React Atoms"],
  },
  {
    title: "Backend Development",
    icon: Layers3,
    skills: ["Node.js", "Express.js", "GraphQL", "REST APIs"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS S3", "AWS EC2", "CI/CD"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "Bitbucket", "JIRA", "Postman", "VS Code"],
  },
  {
  title: "AI Tools & Development",
  icon: BrainCircuit,
  skills: [
    "ChatGPT",
    "Claude AI",
    "Cursor AI",
    "Lovable AI",
  ],
},
];
export const experience = [
  {
    mark: "J",
    company: "Jamtech Technologies Pvt. Ltd.",
    role: "Software Developer",
    date: "Jan 2023 – Mar 2026",
    place: "Lucknow, India",
    bullets: [
      "Worked on Rigmeds (E-commerce), Leatt (SEO Platform), Rehabloop (Real Estate) and QTN Vault (E-learning).",
      "Developed scalable web applications using React.js, Next.js, Vue.js and Node.js.",
      "Implemented real-time features, SEO optimization and reusable components.",
    ],
  },
  {
    mark: "M",
    company: "Molitics Infomedia Pvt. Ltd.",
    role: "Web Developer",
    date: "Mar 2022 – Jan 2023",
    place: "Gurugram, India",
    bullets: [
      "Developed the Molitics news and media platform using Vue.js and Nuxt.js.",
      "Improved SEO rankings and increased organic traffic by 30–40%.",
      "Streamlined front-end performance and built responsive, mobile-first layouts.",
    ],
  },
  {
    mark: "M",
    company: "Mityung Infotech Pvt Ltd",
    role: "Trainee",
    date: "Sep 2021 – Oct 2021",
    place: "Noida, India",
    bullets: [
      "Built reusable Angular and Vue.js components.",
      "Worked with MongoDB for backend operations.",
      "Completed sprint tasks and delivered project milestones.",
    ],
  },
];

export const aiTools = ["ChatGPT", "Claude AI", "Cursor AI", "Lovable AI"];

export const projects = [
  {
    name: "Rigmeds",
    image: "/rigmeds.png",
    type: "E-Pharmacy & Healthcare E-commerce",
    desc: "An online pharmacy platform that enables customers to browse medicines, healthcare devices, personal care products and wellness essentials. Features include product discovery, category-based navigation, prescription uploads, online ordering and convenient medicine delivery.",
    tech: ["React.js", "Next.js", "Node.js", "Redux"],
    aiTools: [...aiTools],
    url: "https://rigmeds.com/",
    tone: "rigmeds",
    label: "Live Demo",
  },
  {
    name: "Leatt",
    image: "/leatt.png",
    type: "Motorsports & Sports Gear E-commerce",
    desc: "A premium product showcase and shopping experience for Moto, MTB and ADV riding gear, including helmets, body protection, apparel and accessories. Focused on product discovery, category navigation, responsive layouts, SEO and a seamless browsing experience.",
    tech: ["Vue.js", "Nuxt.js", "GraphQL"],
    aiTools: [...aiTools],
    url: "https://int.leatt.com/",
    tone: "leatt",
    label: "Live Demo",
  },
  {
    name: "Nawin CH",
    image: "/nawinCH.png",
    type: "Real Estate & Property Services",
    desc: "A real estate website designed to showcase residential properties and property-related services through an elegant, responsive interface. Highlights property discovery, premium visual presentation, clear navigation and an accessible experience across desktop and mobile devices.",
    tech: ["React.js", "JavaScript", "CSS3"],
    aiTools: [...aiTools],
    url: "https://nawin.ch/",
    tone: "nawin",
    label: "Live Demo",
  },
  {
    name: "Molitics India",
    image: "/moliticsIndia.png",
    type: "Politics, News & Media",
    desc: "A digital news platform focused on Indian politics, public policy and current affairs. Designed to organize news stories, highlight important developments and improve content discoverability through structured layouts, category navigation, responsive article pages and SEO-friendly presentation.",
    tech: ["Vue.js", "Nuxt.js", "SEO"],
    aiTools: [...aiTools],
    url: "https://www.molitics.in/",
    tone: "molitics",
    label: "Live Demo",
  },
  {
    name: "Akati Bird",
    image: "/akatiBird.png",
    type: "Digital Books & Online Reading",
    desc: "An online reading platform that helps readers discover books, explore genres and access engaging stories from different authors. Features a book-focused browsing experience, curated content, responsive layouts and convenient navigation for exploring a digital library.",
    tech: ["JavaScript", "E-book Platform", "Responsive UI"],
    aiTools: [...aiTools],
    url: "https://akatibird.com/fr",
    tone: "akati",
    label: "Live Demo",
  },
  {
    name: "Jamtech Technologies",
    image: "/jamtech.png",
    type: "IT Services & Technology Solutions",
    desc: "A corporate technology website presenting IT services such as website development, UI/UX design, mobile application development, maintenance, digital marketing and AI development. Built around clear service discovery, business-focused content, project showcases and contact-driven lead generation.",
    tech: ["Web Development", "Mobile Apps", "AI Development", "Responsive UI"],
    aiTools: [...aiTools],
    url: "https://www.jamtechtechnologies.com/",
    tone: "jamtech",
    label: "Live Demo",
  },
  {
    name: "Rehabloop",
    image: "/rehabloop.png",
    type: "Real Estate & Property Management",
    desc: "A property management platform where users can submit and manage property listings while moderators review submissions and control their publication status. The workflow supports property review, publishing, contract, decline and sold statuses, with property discovery, search filters and real-time communication.",
    tech: ["React.js", "Next.js", "Node.js", "Socket.io"],
    aiTools: [...aiTools],
    url: "#",
    tone: "rehab",
    label: "Project Link",
  },
  {
    name: "QTN Vault",
    image: "/qtnVault.png",
    type: "Kids E-learning Platform",
    desc: "An interactive learning platform for children featuring educational courses, learning modules and progress tracking. Designed to provide an engaging learning experience with secure authentication, parent dashboards, performance analytics and tools to monitor children's learning progress.",
    tech: ["React.js", "Next.js", "Node.js", "MySQL"],
    aiTools: [...aiTools],
    url: "#",
    tone: "qtn",
    label: "Project Link",
  },
];


export const education = [
  {
    title: "Bachelor of Technology (Computer Science)",
    school: "H. N. B. Garhwal University, Uttarakhand",
    year: "2016 - 2020",
  },
  {
    title: "Senior Secondary (XII) – Science",
    school: "Dayanand Saraswati Inter College, Nagal",
    year: "2014",
  },
  {
    title: "Secondary (X)",
    school: "R. K. P. HSS, Nagal",
    year: "2012",
  },
]

export const achievements = [
  "4+ years of full-stack development experience.",
  "Improved SEO rankings by 15–20% for Leatt.",
  "Increased organic traffic by 30–40% for Molitics.",
  "Delivered multiple scalable web applications.",
  "Strong problem-solving and team collaboration skills.",
]