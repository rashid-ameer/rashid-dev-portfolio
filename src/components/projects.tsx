import { PROJECTS } from "@/content/projects";
import Project from "./project";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container max-w-6xl mx-auto transition-all duration-1000 delay-100 ">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
