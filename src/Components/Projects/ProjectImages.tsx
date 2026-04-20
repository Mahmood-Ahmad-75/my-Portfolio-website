"use client";
import React, { useRef } from "react";
import Link from "next/link";

import { projectsData, ProjectDetail } from "../../data/projects";
import SectionHeader from "../common/SectionHeader";

interface RowProps {
  label: string;
  titleLead: string;
  titleAccent: string;
  description: string;
  watermark: string;
  projects: ProjectDetail[];
}

const ProjectCard: React.FC<{ project: ProjectDetail; featured?: boolean }> = ({
  project,
  featured,
}) => {
  const base = featured
    ? "bg-[--color-ember] text-black border-[--color-ember]"
    : "bg-[#0D1815] text-white border-[#1C2924] hover:border-[--color-ember]/60";

  const metaText = featured ? "text-black/70" : "text-white/60";
  const titleColor = featured ? "text-black" : "text-white group-hover:text-[--color-ember]";

  return (
    <div
      className={`group relative border ${base} transition-colors flex flex-col min-w-[320px] md:min-w-0 w-full overflow-hidden`}
    >
      {/* Image */}
      <div className="relative h-56 md:h-64 overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.imgSrc}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-500 ${
            featured ? "opacity-90 group-hover:opacity-100" : "grayscale group-hover:grayscale-0"
          }`}
        />
        {featured && (
          <div className="absolute inset-0 bg-[--color-ember]/30 mix-blend-multiply pointer-events-none" />
        )}
      </div>

      {/* Body */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span
              key={tag + i}
              className={`font-label text-xs font-bold uppercase tracking-wider px-3 py-1 ${
                featured
                  ? "bg-black/10 text-black"
                  : "bg-[#1C2924] text-[--color-ember]"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className={`glint-headline text-2xl md:text-3xl mb-4 leading-tight transition-colors ${titleColor}`}>
          {project.title}
        </h3>
        <p className={`text-sm leading-relaxed mb-6 ${metaText}`}>
          {project.heroDescription}
        </p>

        <div className="mt-auto flex gap-3">
          <Link href={`/projects/${project.id}`} className="flex-1">
            <button
              className={`w-full py-3 uppercase tracking-widest text-xs font-black transition-colors ${
                featured
                  ? "bg-black text-[--color-ember] hover:bg-[#0D1815]"
                  : "bg-[--color-ember] text-black hover:bg-[--color-spark]"
              }`}
            >
              Case Study ›
            </button>
          </Link>
          {project.liveUrl && project.liveUrl !== "#" && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <button
                className={`h-full px-4 border uppercase tracking-widest text-xs font-bold transition-colors ${
                  featured
                    ? "border-black/30 text-black hover:bg-black hover:text-[--color-ember]"
                    : "border-white/20 text-white/80 hover:border-[--color-ember] hover:text-[--color-ember]"
                }`}
              >
                ↗
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectRow: React.FC<RowProps> = ({
  label,
  titleLead,
  titleAccent,
  description,
  watermark,
  projects,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({ left: dir === "prev" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="mb-24">
      <SectionHeader
        label={label}
        titleLead={titleLead}
        titleAccent={titleAccent}
        description={description}
        watermark={watermark}
        onPrev={() => scroll("prev")}
        onNext={() => scroll("next")}
      />

      {/* Horizontal scroller of Glint-style cards, 3 per row on desktop */}
      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth snap-x snap-mandatory md:snap-none"
        style={{ scrollbarWidth: "none" }}
      >
        {projects.map((p, i) => (
          <div
            key={p.id}
            className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[calc((100%-3rem)/3)]"
          >
            <ProjectCard project={p} featured={i === 1} />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectImages = () => {
  const mobile = projectsData.filter((p) => p.platform === "mobile");
  const web = projectsData.filter((p) => p.platform === "web");

  return (
    <>
      <ProjectRow
        label="Working Process"
        titleLead="Latest React Native"
        titleAccent="Projects"
        description="Production iOS + Android case studies with Redux Toolkit, Firebase, Stripe, and Node.js backends — layered with practical AI integrations (LLM coaching, STS/TTS voice, AI agents, prompt guardrails)."
        watermark="PROJECTS"
        projects={mobile}
      />

      <ProjectRow
        label="Working Process"
        titleLead="Latest React & Next.js"
        titleAccent="Projects"
        description="Production web builds on React and Next.js — component architecture, Redux Toolkit state, Tailwind design tokens, SSR, and Vercel/Netlify deployments. The foundation that scales into the mobile case studies above."
        watermark="WEB"
        projects={web}
      />
    </>
  );
};

export default ProjectImages;
