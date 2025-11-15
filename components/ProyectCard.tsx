import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "../data/proyect";

type Props = {
  project: Project;
  index?: number;
};

function ProjectCard({ project, index = 0 }: Props) {
  return (
    <motion.article
      className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-sky-500/60 hover:bg-slate-900/90 transition-colors"
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      <h3 className="text-xl font-semibold mb-2 group-hover:text-sky-400 transition">
        {project.title}
      </h3>

      <p className="text-sm text-slate-300 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.techs.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>{project.role}</span>

        <div className="flex gap-3">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              className="flex items-center gap-1 hover:text-sky-400 transition"
            >
              <Github size={14} />
              Código
            </a>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              className="flex items-center gap-1 hover:text-sky-400 transition"
            >
              <ExternalLink size={14} />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
