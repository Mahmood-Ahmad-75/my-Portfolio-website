"use client";
import React, { useState } from "react";
import Link from "next/link";

import { projectsData } from "../../data/projects";

const categories = ["All", "AI Integration", "Health & Wellness", "Fintech", "Enterprise", "Creative"];

const ProjectImages = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = projectsData.filter((project) =>
    activeCategory === "All" ? true : project.tags.includes(activeCategory)
  );

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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-surface-container rounded-xl overflow-hidden flex flex-col hover:bg-surface-container-high transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="h-52 w-full overflow-hidden bg-surface-container-highest">
              {/* Using standard img tags to avoid external hostname conf issues in next/image */}
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                src={project.imgSrc}
                alt={project.title}
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
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
              <div className="mt-auto">
                <Link href={`/projects/${project.id}`}>
                  <button className="w-full py-3 rounded-lg border border-outline-variant/20 text-primary font-label text-sm font-bold tracking-widest uppercase hover:bg-primary/10 transition-colors">
                    View Case Study
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectImages;
