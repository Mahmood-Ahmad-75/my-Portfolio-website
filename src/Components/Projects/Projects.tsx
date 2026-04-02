import ProjectImages from "./ProjectImages";

const Projects = () => {
  return (
    <div id="projects" className="bg-surface text-on-surface font-body w-full" data-aos="fade-up">
      <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-16">
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-gradient-to-br from-on-surface to-outline-variant bg-clip-text text-transparent">
            Selected Works
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            A curated gallery of engineering feats, ranging from specialized healthcare systems to high-performance fintech architectures.
          </p>
        </header>

        <ProjectImages />
      </main>
    </div>
  );
};

export default Projects;
