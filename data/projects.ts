export type Project = {
  name: string;
  slug: string;
  image: string;
  type: string;
  desc: string;
  tech: string[];
  url: string;
  tone: string;
  label: string;
  overview: string;
  features: string[];
};

export const projects: Project[] = [
  {
    name: "Rigmeds",
    slug: "rigmeds",
    image: "/rigmeds.png",
    type: "E-Pharmacy & Healthcare",
    desc: "An online pharmacy experience for discovering medicines, healthcare devices, personal care products and wellness essentials.",
    tech: ["React.js", "Next.js", "Node.js", "Redux"],
    url: "https://rigmeds.com/",
    tone: "rigmeds",
    label: "Live Demo",
    overview: "A healthcare commerce platform focused on helping customers browse pharmacy and wellness products, explore categories and access convenient online ordering.",
    features: [
      "Medicine and healthcare product discovery",
      "Category-based browsing and product pages",
      "Responsive shopping experience",
      "Prescription and order-related user journeys",
    ],
  },
  {
    name: "Leatt",
    slug: "leatt",
    image: "/leatt.png",
    type: "Motorsports & Sports Gear",
    desc: "A premium product browsing experience for Moto, MTB and ADV riding gear, including helmets, protection, apparel and accessories.",
    tech: ["Vue.js", "Nuxt.js", "GraphQL"],
    url: "https://int.leatt.com/",
    tone: "leatt",
    label: "Live Demo",
    overview: "A product-focused experience for riders to explore specialist gear and accessories with clear category navigation and responsive layouts.",
    features: [
      "Product and category discovery",
      "Responsive product presentation",
      "Structured navigation",
      "SEO-conscious page structure",
    ],
  },
  {
    name: "Nawin CH",
    slug: "nawin-ch",
    image: "/nawinCH.png",
    type: "Real Estate & Property Services",
    desc: "A property-focused business website designed to present real estate services and residential properties through a polished responsive interface.",
    tech: ["React.js", "JavaScript", "CSS3"],
    url: "https://nawin.ch/",
    tone: "nawin",
    label: "Live Demo",
    overview: "A real estate web experience centered on property presentation, service discovery and straightforward navigation across screen sizes.",
    features: [
      "Property and service presentation",
      "Responsive layouts",
      "Clear content hierarchy",
      "Mobile-friendly navigation",
    ],
  },
  {
    name: "Molitics India",
    slug: "molitics-india",
    image: "/moliticsIndia.png",
    type: "Politics, News & Media",
    desc: "A digital news platform covering Indian politics, public policy and current affairs with structured content discovery.",
    tech: ["Vue.js", "Nuxt.js", "SEO"],
    url: "https://www.molitics.in/",
    tone: "molitics",
    label: "Live Demo",
    overview: "A content-heavy news and media platform designed to organize stories and make current affairs easier to discover.",
    features: [
      "News and category navigation",
      "Structured article presentation",
      "Responsive content layouts",
      "SEO-friendly page organization",
    ],
  },
  {
    name: "Akati Bird",
    slug: "akati-bird",
    image: "/akatiBird.png",
    type: "Digital Books & Online Reading",
    desc: "An online reading platform for discovering books, exploring genres and finding stories from different authors.",
    tech: ["JavaScript", "E-book Platform", "Responsive UI"],
    url: "https://akatibird.com/fr",
    tone: "akati",
    label: "Live Demo",
    overview: "A digital reading experience that emphasizes book discovery, curated content and convenient browsing through a library of stories.",
    features: [
      "Book and genre discovery",
      "Book-focused content presentation",
      "Responsive reading discovery experience",
      "Simple navigation between content",
    ],
  },
  {
    name: "Jamtech Technologies",
    slug: "jamtech-technologies",
    image: "/jamtech.png",
    type: "IT Services & Technology Solutions",
    desc: "A corporate technology website presenting software, web, mobile and digital solutions for business customers.",
    tech: ["Web Development", "Mobile Apps", "AI Development", "Responsive UI"],
    url: "https://www.jamtechtechnologies.com/",
    tone: "jamtech",
    label: "Live Demo",
    overview: "A corporate services website focused on explaining technology capabilities, helping visitors explore service offerings and encouraging enquiries.",
    features: [
      "Service-focused navigation",
      "Business and solution content",
      "Responsive corporate presentation",
      "Contact-oriented user journey",
    ],
  },
  {
    name: "Rehabloop",
    slug: "rehabloop",
    image: "/rehabloop.png",
    type: "Real Estate & Property Management",
    desc: "A property management workflow for listing submissions, moderation, publication status and property discovery.",
    tech: ["React.js", "Next.js", "Node.js", "Socket.io"],
    url: "#",
    tone: "rehab",
    label: "Private Project",
    overview: "A real estate workflow supporting property submission and moderation, with different statuses used to manage listing progress.",
    features: [
      "Property listing workflows",
      "Moderator review and status management",
      "Property search and filters",
      "Real-time communication features",
    ],
  },
  {
    name: "QTN Vault",
    slug: "qtn-vault",
    image: "/qtnVault.png",
    type: "Kids E-learning",
    desc: "An interactive learning platform for children with learning modules, progress tracking and parent-focused insights.",
    tech: ["React.js", "Next.js", "Node.js", "MySQL"],
    url: "#",
    tone: "qtn",
    label: "Private Project",
    overview: "A learning experience designed to make educational content accessible to children while helping parents follow learning progress.",
    features: [
      "Educational modules and course content",
      "Authentication and user-specific experiences",
      "Parent dashboard concepts",
      "Learning progress and performance insights",
    ],
  },
];
