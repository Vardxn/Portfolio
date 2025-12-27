import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-section px-4"
    >
      <h1 className="text-heading-2 md:text-heading-1 text-transparent bg-clip-text bg-gradient-accent py-12 md:py-20 text-center">
        My Projects
      </h1>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              src={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
