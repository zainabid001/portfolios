"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import Image from "next/image";
import Navbar from "../components/Navbar";

const categories = ["All", "Frontend", "Backend", "Full Stack"];
// const categories = ["All Projects", "E-commerce", "Real Estate", "News & Media", "Education", "Technology"];

function SectionMark() {
  return <span className="section-mark" />;
}
function TechPill({ children }: { children: React.ReactNode }) {
  return <span className="tech-pill">{children}</span>;
}

export default function ProjectsPage() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <main>
      <Navbar />

      <section className="projects section-light" id="projects">
        <div className="section-heading">
          <div>
            <SectionMark />
            <h2>Featured Projects</h2>
            <p className="section-subtitle">
              Some of the key projects I have worked on
            </p>
          </div>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
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
                    href={`/projects/${project.name.toLowerCase().replaceAll(" ", "-")}`}
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

      <footer className="site-footer">
        <div className="container footer-inner">
          <Link className="brand" href="/">
            <span className="brand-mark">JA</span>
            <span>Jenul Abedeen</span>
          </Link>
          <span>© {year ?? 2026} Jenul Abedeen</span>
          <Link href="/#contact">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
