import ProjectCard from "../components/ProyectCard";
import { projects } from "../data/proyect";

function ProjectsPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">
          Proyectos destacados
        </h1>
        <p className="text-slate-300 max-w-2xl">
          Algunos de los proyectos en los que he trabajado, enfocados en
          automatización, herramientas para ventas y aplicaciones web modernas
          con React y TypeScript.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
