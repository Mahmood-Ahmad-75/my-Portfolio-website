import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData } from '../../../data/projects';

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === parseInt(params.id));

  if (!project) {
    notFound();
  }

  // To easily split the Title and Highlight without breaking. If Highlight is missing, it falls back cleanly.
  const titleBase = project.title.replace(project.heroHighlight, "").trim();

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30 min-h-screen w-full relative z-0">
      <main className="pt-32 pb-20 max-w-7xl mx-auto px-6 md:px-12">
        {/* Back Link */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dim transition-colors mb-12 group"
        >
            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
            <span className="font-label text-sm uppercase tracking-widest">Back to Projects</span>
        </Link>
        
        {/* Hero Section */}
        <header className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
                <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
                    {project.subtitle}
                </span>
                <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
                    {titleBase} <span className="bg-gradient-to-r from-[#81ecff] to-[#10d5ff] bg-clip-text text-transparent">{project.heroHighlight}</span>
                </h1>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-xl">
                    {project.heroDescription}
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="bg-surface-container-highest text-primary-dim px-4 py-1.5 rounded-full font-label text-xs">
                          {tag}
                        </span>
                    ))}
                </div>
                {/* View Live Project Button */}
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <button className="bg-gradient-to-r from-primary to-secondary text-on-primary-fixed px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-primary/20 flex items-center gap-3">
                        View Live Platform
                        <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    </button>
                </Link>
            </div>
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl rounded-3xl opacity-50 group-hover:opacity-100 transition duration-1000">
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                    alt={project.title}
                    className="relative rounded-3xl w-full h-[500px] object-cover object-center border border-outline-variant/20 shadow-2xl"
                    src={project.imgSrc} 
                />
            </div>
        </header>
        
        {/* Problem / Solution Bento */}
        <section className="grid md:grid-cols-3 gap-6 mb-24">
            <div className="md:col-span-2 bg-surface-container-low p-10 rounded-3xl relative overflow-hidden group">
                <div className="relative z-10">
                    <h3 className="font-headline text-2xl font-bold mb-4">The Challenge</h3>
                    <p className="text-on-surface-variant leading-relaxed">
                        {project.challenge}
                    </p>
                </div>
                <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-surface-variant/20 select-none">troubleshoot</span>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-10 rounded-3xl border border-primary/20">
                <h3 className="font-headline text-2xl font-bold mb-4 text-primary">The Impact</h3>
                <div className="space-y-6">
                    <div>
                        <div className="text-3xl font-black font-headline">{project.impactScore1}</div>
                        <div className="text-xs font-label uppercase text-on-surface-variant tracking-tighter">{project.impactLabel1}</div>
                    </div>
                    <div>
                        <div className="text-3xl font-black font-headline">{project.impactScore2}</div>
                        <div className="text-xs font-label uppercase text-on-surface-variant tracking-tighter">{project.impactLabel2}</div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Key Features Asymmetric Grid */}
        <section className="mb-24">
            <h2 className="font-headline text-3xl font-bold mb-12 flex items-center gap-4">
                Core Architecture <div className="h-px grow bg-outline-variant/20"></div>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-12">
                    {project.architecture.filter(item => !item.isImageBlock).map((item, idx) => (
                        <div key={idx} className="group">
                            <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-surface transition-all duration-300">
                                <span className="material-symbols-outlined">{item.icon}</span>
                            </div>
                            <h4 className="font-headline text-xl font-bold mb-3">{item.title}</h4>
                            <p className="text-on-surface-variant leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Logic to render an image block if available */}
                {project.architecture.find(item => item.isImageBlock) && (
                    <div className="bg-surface-container rounded-3xl p-8 relative overflow-hidden">
                        {(() => {
                            const item = project.architecture.find(i => i.isImageBlock);
                            if (!item) return null;
                            return (
                              <>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-secondary">
                                        <span className="material-symbols-outlined">{item.icon}</span>
                                    </div>
                                    <h4 className="font-headline text-xl font-bold">{item.title}</h4>
                                </div>
                                <p className="text-on-surface-variant leading-relaxed mb-8">
                                    {item.description}
                                </p>
                                {item.imageSrc && (
                                  // eslint-disable-next-line @next/next/no-img-element
                                  <img alt={item.imageAlt || item.title}
                                      className="rounded-2xl w-full h-48 object-cover border border-outline-variant/10"
                                      src={item.imageSrc} 
                                  />
                                )}
                              </>
                            );
                        })()}
                    </div>
                )}
            </div>
        </section>
        
        {/* Project Types */}
        <section className="mb-16">
            <div className="flex flex-wrap gap-3">
                {project.types.map((t, idx) => (
                    <span
                        key={idx}
                        className="px-4 py-1.5 rounded-full font-label text-xs uppercase tracking-widest bg-primary/10 text-primary border border-primary/30"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </section>

        {/* AI Capabilities */}
        <section className="mb-24">
            <h2 className="font-headline text-3xl font-bold mb-12 flex items-center gap-4">
                AI Capabilities <div className="h-px grow bg-outline-variant/20"></div>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.aiCapabilities.map((cap, idx) => (
                    <div
                        key={idx}
                        className="p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 hover:border-primary/50 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined">{cap.icon}</span>
                        </div>
                        <h4 className="font-headline text-xl font-bold mb-3">{cap.title}</h4>
                        <p className="text-on-surface-variant leading-relaxed text-sm">{cap.description}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Full Stack Tech Stack */}
        <section className="bg-surface-container-low rounded-[2rem] p-8 md:p-16 mb-24">
            <h2 className="font-headline text-3xl font-bold mb-12">Full Stack Architecture</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center gap-3 mb-5">
                        <span className="material-symbols-outlined text-primary">dashboard</span>
                        <h3 className="font-headline text-lg font-bold">Frontend</h3>
                    </div>
                    <ul className="space-y-3 font-label text-xs uppercase tracking-wider text-on-surface-variant">
                        {project.techStack.frontend.map((t, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                {t}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <div className="flex items-center gap-3 mb-5">
                        <span className="material-symbols-outlined text-primary">dns</span>
                        <h3 className="font-headline text-lg font-bold">Backend</h3>
                    </div>
                    <ul className="space-y-3 font-label text-xs uppercase tracking-wider text-on-surface-variant">
                        {project.techStack.backend.map((t, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                {t}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <div className="flex items-center gap-3 mb-5">
                        <span className="material-symbols-outlined text-primary">cloud_sync</span>
                        <h3 className="font-headline text-lg font-bold">DevOps</h3>
                    </div>
                    <ul className="space-y-3 font-label text-xs uppercase tracking-wider text-on-surface-variant">
                        {project.techStack.devops.map((t, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                {t}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <div className="flex items-center gap-3 mb-5">
                        <span className="material-symbols-outlined text-primary">smart_toy</span>
                        <h3 className="font-headline text-lg font-bold">AI / ML</h3>
                    </div>
                    <ul className="space-y-3 font-label text-xs uppercase tracking-wider text-on-surface-variant">
                        {project.techStack.ai.map((t, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                {t}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

        {/* Stats */}
        <section className="mb-24">
            <h2 className="font-headline text-3xl font-bold mb-12 flex items-center gap-4">
                Key Metrics <div className="h-px grow bg-outline-variant/20"></div>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {project.stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className="p-8 rounded-2xl bg-surface-container border border-outline-variant/10 flex flex-col justify-between hover:bg-surface-container-high transition-colors"
                    >
                        <span className="material-symbols-outlined text-primary mb-4">{stat.icon}</span>
                        <div>
                            <div className="text-4xl font-bold mb-1 tracking-tighter">{stat.value}</div>
                            <p className="text-on-surface-variant text-xs font-label uppercase">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Contribution, Deployment, Outcome */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-surface-container-low p-10 rounded-3xl">
                <div className="flex items-center gap-3 mb-5">
                    <span className="material-symbols-outlined text-primary">engineering</span>
                    <h3 className="font-headline text-xl font-bold">My Contribution</h3>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">{project.contribution}</p>
            </div>
            <div className="bg-surface-container-low p-10 rounded-3xl">
                <div className="flex items-center gap-3 mb-5">
                    <span className="material-symbols-outlined text-primary">rocket_launch</span>
                    <h3 className="font-headline text-xl font-bold">Deployment</h3>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">{project.deployment}</p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-10 rounded-3xl border border-primary/20">
                <div className="flex items-center gap-3 mb-5">
                    <span className="material-symbols-outlined text-primary">trending_up</span>
                    <h3 className="font-headline text-xl font-bold text-primary">Impact & Outcome</h3>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">{project.outcome}</p>
            </div>
        </section>
      </main>
    </div>
  );
}
