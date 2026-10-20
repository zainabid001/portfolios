"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  X,
  Zap,
  Globe,
  Layers3,
  Boxes,
  Brain,
  Cloud,
  GitBranch,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  skillGroups,
  experience,
  projects,
  education,
  achievements,
} from "../data/portfolio-data";

const filters = ["All", "Frontend", "Backend", "Database", "Tools"];
const filterMatches: Record<string, string[]> = {
  Frontend: [
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
  Backend: ["Node.js", "Express.js", "GraphQL", "REST APIs"],
  Database: ["MySQL", "MongoDB", "Firebase"],
  Tools: [
    "AWS S3",
    "AWS EC2",
    "CI/CD",
    "Git",
    "GitHub",
    "Bitbucket",
    "JIRA",
    "Postman",
    "VS Code",
  ],
};

function SectionMark() {
  return <span className="section-mark" />;
}
function TechPill({ children }: { children: React.ReactNode }) {
  return <span className="tech-pill">{children}</span>;
}

export default function HomePage() {
  const [filter, setFilter] = useState("All");
  const [year, setYear] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => setYear(new Date().getFullYear()), []);

  const filteredSkills = skillGroups
    .map((group) => ({
      ...group,
      skills:
        filter === "All"
          ? group.skills
          : group.skills.filter((skill) =>
              (filterMatches[filter] || []).includes(skill),
            ),
    }))
    .filter((group) => group.skills.length > 0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="navbar">
        <Link className="brand" href="/" onClick={closeMenu}>
          <span className="brand-mark">JA</span>
          <b>Jenul Abedeen</b>
        </Link>
        <button
          className="mobile-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
              >
                {item}
              </Link>
            ),
          )}
          <Link className="nav-resume" href="/Jenul_resume.pdf" download>
            <Download size={14} /> Download Resume
          </Link>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="availability">
            Available for new opportunities <span />
          </div>
          <h1>
            Hi, I’m
            <br />
            <span>Jenul Abedeen</span>
          </h1>
          <h2>Full Stack Software Developer </h2>
          <p className="hero-description">
            Crafting modern, scalable, and high-performance web experiences with
            React.js, Next.js, Vue.js, and Node.js. I combine strong engineering
            practices, intuitive UI development, and AI-assisted workflows to
            deliver efficient, reliable, and user-focused digital solutions.
          </p>
          <div className="hero-tech">
            {["React.js", "Next.js", "Vue.js", "Node.js", "TypeScript"].map(
              (t) => (
                <TechPill key={t}>{t}</TechPill>
              ),
            )}
          </div>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="#projects">
              View My Projects <ArrowRight size={16} />
            </Link>
            <Link className="btn btn-outline" href="/Jenul_resume.pdf" download>
              Download Resume <ArrowDownToLine size={16} />
            </Link>
          </div>
          <div className="stats">
            <div>
              <strong>4+</strong>
              <span>Years Experience</span>
            </div>
            <div>
              <strong>10+</strong>
              <span>Projects Delivered</span>
            </div>
            <div>
              <strong>3+</strong>
              <span>Companies</span>
            </div>
            <div>
              <strong>Full Stack</strong>
              <span>Development</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-orbit" aria-hidden="true" />
          <div className="hero-dots" aria-hidden="true" />

          <div className="profile-photo">
            <Image
              src="/j_image.jpeg"
              alt="Jenul Abedeen - Full Stack Developer"
              fill
              priority
              sizes="(max-width: 760px) 230px, 300px"
              className="profile-photo-image"
            />
          </div>

          <div className="code-card">
            <span>const developer = {"{"}</span>
            <p>
              {" "}
              name: <b>"Jenul Abedeen"</b>,
            </p>
            <p>
              {" "}
              passion: <b>"Building Web Apps"</b>,
            </p>
            <p>
              {" "}
              focus: <b>"Clean Code"</b>,
            </p>
            <p>
              {" "}
              goal: <b>"Create Impact"</b>
            </p>
            <span>{"}"}</span>
          </div>
        </div>
      </section>

      <section className="about section-light" id="about">
        <div className="section-main">
          <SectionMark />
          <h2>About Me</h2>
          <p className="section-subtitle">
            Get to know more about me and my journey
          </p>
          <div className="about-text">
            <p>
              I'm a Full Stack Software Developer with around 4 years of
              experience building modern, responsive, and scalable web
              applications. I work with{" "}
              <b> React.js, Next.js, Vue.js, Node.js, TypeScript, </b> and other
              modern web technologies to create user-friendly interfaces and
              efficient backend systems.
            </p>
            <p>
              I leverage AI-powered development tools such as{" "}
              <b> ChatGPT, Claude AI, Cursor AI, and Lovable AI </b> to support
              coding, debugging, exploring implementation approaches, and
              improving development efficiency across selected projects.
            </p>
            <p>
              I'm passionate about solving real-world problems, writing clean
              code, learning emerging technologies, and exploring how{" "}
              <b>AI and large language models (LLMs)</b> can improve the
              software development process.
            </p>
          </div>
          <div className="values-grid">
            {[
              {
                icon: Brain,
                title: "Problem Solving",
                text: "Turning ideas into real solutions.",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                text: "Working in agile environments.",
              },
              {
                icon: Sparkles,
                title: "Continuous Learning",
                text: "Exploring new technologies.",
              },
              {
                icon: ShieldCheck,
                title: "AI-Assisted Development",
                text: "Using AI-powered tools to support",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div className="value-card" key={title}>
                <Icon />
                <b>{title}</b>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <aside className="contact-card">
          <div>
            <Users />
            <p>
              <b>Name</b>
              <span>Jenul Abedeen</span>
            </p>
          </div>
          <div>
            <MapPin />
            <p>
              <b>Location</b>
              <span>Saharanpur, UP (India)</span>
            </p>
          </div>
          <div>
            <Mail />
            <p>
              <b>Email</b>
              <span>jenulabedeen001@gmail.com</span>
            </p>
          </div>
          <div>
            <Phone />
            <p>
              <b>Phone</b>
              <span>9084943136</span>
            </p>
          </div>
          <div>
            <FaLinkedin size={24} />
            <p>
              <b>LinkedIn</b>
              <span>linkedin.com/in/syed-jenul-abedeen/</span>
            </p>
          </div>
          <div>
            <FaGithub size={24} />
            <p>
              <b>GitHub</b>
              <span>github.com/zainabid001</span>
            </p>
          </div>
        </aside>
      </section>

      <section className="skills section-light" id="skills">
        <div className="section-heading">
          <div>
            <SectionMark />
            <h2>Skills &amp; Technologies</h2>
            <p className="section-subtitle">Technologies I work with</p>
          </div>
          <div className="filters">
            {filters.map((f) => (
              <button
                key={f}
                className={filter === f ? "active" : ""}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="skills-grid">
          {filteredSkills.map(({ title, icon: Icon, skills }) => (
            <article className="skill-card" key={title}>
              <h3>
                <span className="skill-icon">
                  <Icon />
                </span>
                {title}
              </h3>
              <div className="skill-pills">
                {skills.map((s) => (
                  <TechPill key={s}>{s}</TechPill>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience section-dark" id="experience">
        <SectionMark />
        <h2>Work Experience</h2>
        <p className="section-subtitle">My professional journey</p>
        <div className="timeline">
          {experience.map((job, i) => (
            <article className="job" key={job.company}>
              <div className={`job-avatar avatar-${i}`}>{job.mark}</div>
              <div className="job-content">
                <div className="job-top">
                  <div>
                    <h3>{job.company}</h3>
                    <b>{job.role}</b>
                  </div>
                  <div className="job-meta">
                    <span>{job.date}</span>
                    <span>
                      <MapPin size={12} />
                      {job.place}
                    </span>
                  </div>
                </div>
                <ul>
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects section-light" id="projects">
        <div className="section-heading">
          <div>
            <SectionMark />
            <h2>Featured Projects</h2>
            <p className="section-subtitle">
              Some of the key projects I have worked on
            </p>
          </div>
          <Link className="btn btn-small btn-white" href="/projects">
            View All Projects <ArrowRight size={14} />
          </Link>
        </div>
        <div className="projects-grid">
          {projects.slice(0, 4).map((project) => (
            <article className="project-card" key={project.name}>
              <div className={`project-preview preview-${project.tone}`}>
                <Image
                  src={project.image}
                  alt="Jenul Abedeen - Full Stack Developer"
                  fill
                  priority
                  sizes="(max-width: 760px) 230px, 300px"
                  className="profile-photo-image fill"
                />
              </div>
              <div className="project-info">
                <h3>{project.name}</h3>
                <span className="project-type">{project.type}</span>
                <p>{project.desc}</p>

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <TechPill key={t}>{t}</TechPill>
                  ))}
                </div>
                <div className="project-actions">
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-demo"
                  >
                    {project.label} <ExternalLink size={12} />
                  </Link>
                  <Link
                    href={`/projects#${project.name.toLowerCase().replaceAll(" ", "-")}`}
                    className="btn btn-detail"
                  >
                    View Details <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="education section-light">
        <article className="education-card">
          <SectionMark />
          <h2>Education</h2>
          {education.map((e) => (
            <div className="education-row" key={e.title}>
              <span className="education-icon">
                <GraduationCap />
              </span>
              <div>
                <b>{e.title}</b>
                <p>{e.school}</p>
              </div>
              <span className="education-year">{e.year}</span>
            </div>
          ))}
        </article>
        <article className="achievements-card">
          <SectionMark />
          <h2>Key Achievements</h2>
          {achievements.map((t, i) => (
            <div className="achievement" key={t}>
              <span>
                {
                  [
                    <ShieldCheck key="a" />,
                    <Zap key="b" />,
                    <Sparkles key="c" />,
                    <Layers3 key="d" />,
                    <HeartHandshake key="e" />,
                  ][i]
                }
              </span>
              {t}
            </div>
          ))}
        </article>
      </section>

      <section className="contact section-dark" id="contact">
        <div className="contact-intro">
          <SectionMark />
          <h2>Get In Touch</h2>
          <p className="section-subtitle">Let's work together</p>
          <p>
            I'm always open to discussing new opportunities, collaborations or
            interesting projects. Feel free to reach out to me.
          </p>
          <Link
            className="btn btn-primary"
            href="mailto:jenulabedeen001@gmail.com"
          >
            <Send size={14} /> Send a Message
          </Link>
          <Link className="btn btn-outline" href="/Jenul_resume.pdf" download>
            <Download size={14} /> Download Resume
          </Link>
        </div>
        <div className="contact-links">
          <Link href="mailto:jenulabedeen001@gmail.com">
            <span>
              <Mail />
            </span>
            <p>
              <b>Email</b>
              <small>jenulabedeen001@gmail.com</small>
            </p>
          </Link>
          <Link href="tel:9084943136">
            <span>
              <Phone />
            </span>
            <p>
              <b>Phone</b>
              <small>9084943136</small>
            </p>
          </Link>
          <div>
            <span>
              <MapPin />
            </span>
            <p>
              <b>Location</b>
              <small>Saharanpur, UP, India</small>
            </p>
          </div>
          <Link
            href="https://linkedin.com/in/syed-jenul-abedeen/"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <FaLinkedin size={24} />
            </span>
            <p>
              <b>LinkedIn</b>
              <small>linkedin.com/in/syed-jenul-abedeen/</small>
            </p>
          </Link>
          <Link
            href="https://github.com/zainabid001"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <FaGithub size={24} />
            </span>
            <p>
              <b>GitHub</b>
              <small>github.com/zainabid001</small>
            </p>
          </Link>
        </div>
      </section>
      <footer>© {year ?? 2026} Jenul Abedeen. All rights reserved.</footer>
    </main>
  );
}
