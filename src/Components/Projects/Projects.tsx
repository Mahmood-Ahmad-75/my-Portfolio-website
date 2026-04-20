import ProjectImages from "./ProjectImages";

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-black py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16">
        <ProjectImages />
      </div>
    </section>
  );
};

export default Projects;
