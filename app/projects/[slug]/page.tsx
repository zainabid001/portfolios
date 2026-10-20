import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Code2, ExternalLink, Layers3, Sparkles } from "lucide-react";
import Navbar from "../../../app/components/Navbar";
import { projects } from "@/data/projects";
import "../project-details.css";

export const instant = false;
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const relatedProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 3);
  const features = project.features ?? [
    "Responsive interface designed for desktop and mobile",
    "Clear navigation and structured content",
    "Reusable UI patterns and maintainable components",
  ];

  return (
    <>
      <Navbar />
      <main className="pd-page">
        <section className="pd-hero">
          <div className="pd-hero-glow" aria-hidden="true" />
          <div className="pd-container pd-hero-inner">
            <Link href="/projects" className="pd-back"><ArrowLeft size={16} /> Back to all projects</Link>
            <div className="pd-hero-grid">
              <div className="pd-hero-copy">
                <div className="pd-eyebrow"><span className="pd-eyebrow-dot" /> PROJECT SHOWCASE</div>
                <span className="pd-category">{project.type}</span>
                <h1>Thoughtfully built.<br /><span>{project.name}</span></h1>
                <p className="pd-description">{project.desc}</p>
                <div className="pd-tech-list" aria-label="Technologies used">
                  {project.tech.map((tech) => <span className="pd-tech-chip" key={tech}><Code2 size={13} /> {tech}</span>)}
                </div>
                <div className="pd-hero-actions">
                  {project.url && project.url !== "#" ? (
                    <a className="pd-button pd-button-primary" href={project.url} target="_blank" rel="noopener noreferrer">View live project <ArrowUpRight size={17} /></a>
                  ) : <span className="pd-private-note"><span /> Private / preview unavailable</span>}
                  <Link href="/projects" className="pd-button pd-button-ghost">Explore projects <ArrowRight size={16} /></Link>
                </div>
              </div>
              <div className={`pd-visual pd-tone-${project.tone || "default"}`}>
                <div className="pd-visual-topbar">
                  <div className="pd-window-dots"><i /><i /><i /></div>
                  <span>{project.name.toLowerCase().replace(/\s+/g, "")}.com</span><ExternalLink size={14} />
                </div>
                <div className="pd-image-wrap">
                  <Image src={project.image} alt={`${project.name} website preview`} fill priority sizes="(max-width: 900px) 100vw, 54vw" className="pd-project-image" />
                </div>
                <div className="pd-visual-caption"><span><Sparkles size={14} /> Selected work</span><strong>{project.name}</strong></div>
                <div className="pd-floating-tag"><Layers3 size={16} /> Built with care</div>
              </div>
            </div>
            <div className="pd-hero-foot"><span><i /> Case study</span><span>01 <b>/</b> PROJECT DETAIL</span></div>
          </div>
        </section>

        <section className="pd-body">
          <div className="pd-container">
            <div className="pd-section-heading">
              <div><span className="pd-kicker">THE PROJECT</span><h2>Behind the build<span>.</span></h2></div>
              <p>A closer look at the purpose, experience, and details that shape this project.</p>
            </div>
            <div className="pd-content-grid">
              <article className="pd-overview-card">
                <div className="pd-card-icon"><Layers3 size={19} /></div>
                <span className="pd-kicker">OVERVIEW</span><h3>About this project</h3>
                <p>{project.overview || project.desc}</p>
                <div className="pd-card-divider" />
                <div className="pd-project-meta">
                  <div><span>Project type</span><strong>{project.type}</strong></div>
                  <div><span>Technologies</span><strong>{project.tech.length} tools & technologies</strong></div>
                </div>
              </article>
              <article className="pd-features-card">
                <div className="pd-features-heading">
                  <div className="pd-card-icon pd-card-icon-blue"><CheckCircle2 size={19} /></div>
                  <div><span className="pd-kicker">HIGHLIGHTS</span><h3>What stands out</h3></div>
                </div>
                <ul className="pd-feature-list">
                  {features.map((feature) => <li key={feature}><span><CheckCircle2 size={15} /></span>{feature}</li>)}
                </ul>
              </article>
            </div>

            <section className="pd-stack-section">
              <div><span className="pd-kicker">TOOLS OF THE TRADE</span><h2>The technology stack<span>.</span></h2><p>The tools used to shape the experience and bring the project to life.</p></div>
              <div className="pd-stack-grid">
                {project.tech.map((tech, index) => <div className="pd-stack-item" key={tech}><span className="pd-stack-number">{String(index + 1).padStart(2, "0")}</span><strong>{tech}</strong><Code2 size={17} /></div>)}
              </div>
            </section>

            <section className="pd-more-work">
              <div className="pd-more-heading">
                <div><span className="pd-kicker">KEEP EXPLORING</span><h2>More selected work<span>.</span></h2></div>
                <Link href="/projects" className="pd-all-link">All projects <ArrowUpRight size={16} /></Link>
              </div>
              <div className="pd-related-grid">
                {relatedProjects.map((item, index) => (
                  <Link className="pd-related-card" key={item.slug} href={`/projects/${item.slug}`}>
                    <div className={`pd-related-image pd-tone-${item.tone || "default"}`}>
                      <Image src={item.image} alt={`${item.name} preview`} fill sizes="(max-width: 700px) 100vw, 33vw" />
                      <span className="pd-related-index">0{index + 1}</span><span className="pd-related-arrow"><ArrowUpRight size={18} /></span>
                    </div>
                    <div className="pd-related-info"><span>{item.type}</span><strong>{item.name}</strong><p>{item.desc}</p></div>
                  </Link>
                ))}
              </div>
            </section>

            <div className="pd-bottom-cta">
              <div className="pd-cta-mark"><Code2 size={20} /></div>
              <div><span>HAVE A PROJECT IN MIND?</span><h2>Let&apos;s build something great.</h2></div>
              <Link href="/#contact" className="pd-button pd-button-primary">Get in touch <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
