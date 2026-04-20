"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";

import { projectsData, ProjectDetail } from "../../data/projects";

const categories = [
  "All",
  "AI Integration",
  "Full Stack",
  "Health & Wellness",
  "Fintech",
  "Enterprise",
  "Creative",
];

interface SectionProps {
  title: string;
  subtitle: string;
  icon: string;
  projects: ProjectDetail[];
}

const ProjectSection: React.FC<SectionProps> = ({ title, subtitle, icon, projects }) => {
  if (projects.length === 0) return null;

  return (
    <section className="mb-20">
      <div className="flex items-center gap-4 mb-3">
        <span className="material-symbols-outlined text-primary text-3xl">{icon}</span>
        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
          {title}
        </h2>
        <div className="h-px grow bg-outline-variant/20 ml-4"></div>
        <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
          {projects.length} {projects.length === 1 ? "Project" : "Projects"}
        </span>
      </div>
      <p className="font-body text-base text-on-surface-variant max-w-3xl mb-10 leading-relaxed">
        {subtitle}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-surface-container rounded-xl overflow-hidden flex flex-col hover:bg-surface-container-high transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="h-52 w-full overflow-hidden bg-surface-container-highest">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                src={project.imgSrc}
                alt={project.title}
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 4).map((tag, i) => (
                  <span
                    key={tag + i}
                    className="font-label text-xs font-semibold px-3 py-1 bg-surface-container-highest text-primary-dim rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-headline text-2xl font-bold mb-3 text-on-surface group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="font-body text-on-surface-variant text-sm mb-8 leading-relaxed">
                {project.heroDescription}
              </p>
              <div className="mt-auto flex gap-3">
                <Link href={`/projects/${project.id}`} className="flex-1">
                  <button className="w-full py-3 rounded-lg border border-outline-variant/20 text-primary font-label text-sm font-bold tracking-widest uppercase hover:bg-primary/10 transition-colors">
                    Case Study
                  </button>
                </Link>
                {project.liveUrl && project.liveUrl !== "#" && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <button className="px-4 py-3 rounded-lg border border-outline-variant/20 text-primary-dim hover:text-primary hover:bg-primary/10 transition-colors">
                      <span className="material-symbols-outlined text-[18px] align-middle">
                        open_in_new
                      </span>
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProjectImages = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = useMemo(
    () =>
      projectsData.filter((project) =>
        activeCategory === "All" ? true : project.tags.includes(activeCategory)
      ),
    [activeCategory]
  );

  const mobileProjects = filteredProjects.filter((p) => p.platform === "mobile");
  const webProjects = filteredProjects.filter((p) => p.platform === "web");

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full font-label text-sm font-semibold transition-all ${
              activeCategory === cat
                ? "bg-primary text-on-primary-container"
                : "bg-surface-container-highest text-primary-dim hover:bg-surface-variant"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <ProjectSection
        title="React Native — Mobile Apps"
        subtitle="Production iOS + Android case studies built with React Native, Redux Toolkit, Firebase, and Node.js backends — with practical AI integrations (LLM coaching, STS/TTS voice, AI agents, prompt-engineered guardrails)."
        icon="smartphone"
        projects={mobileProjects}
      />

      <ProjectSection
        title="React.js & Next.js — Web Apps"
        subtitle="Production web builds on React and Next.js — component architecture, Redux Toolkit state, Tailwind design tokens, SSR, and Vercel/Netlify deployments. The foundation that scales into the mobile case studies above."
        icon="public"
        projects={webProjects}
      />
    </>
  );
};

export default ProjectImages;
