import ProjectImages from "./ProjectImages";

   
const Projects = () => {

  return (
    <>
      <div   data-aos="fade-up" className="w-full flex justify-center px-[50px] mb-[30px]">
        <div className="md:w-[55%] w-full text-center mt-[100px] ">
          <p className="text-[--color-primary] font-semibold text-[20px ] underline underline-offset-4 tracking-[2px] leading-normal mb-4">
            PROJECTS
          </p>
          <h1 className="text-[--color-secondary] font-bold text-[50px] leading-[50px] mb-5">
          Presenting My Design Portfolio and Case Studies
          </h1>
        </div>
      </div>
      <ProjectImages/>
      
    </>
  );
};

export default Projects;
