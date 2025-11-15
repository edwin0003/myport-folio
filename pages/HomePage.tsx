import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center gap-10">
      {/* Bloque de texto principal */}
      <motion.div
        className="space-y-4 max-w-3xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-sky-400 font-medium tracking-wide">
          Portafolio • React | TypeScript | TailwindCSS
        </p>

        <h1 className="text-5xl font-extrabold leading-tight">
          Hola, soy <span className="text-sky-400">Edwin Crespo</span>
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed">
          Ingeniero en Sistemas y desarrollador especializado en React,
          TypeScript y Node. Me enfoco en construir aplicaciones rápidas,
          escalables y con diseño profesional. Aquí comparto mi experiencia,
          proyectos reales y la forma en la que puedo aportar valor a tu equipo.
        </p>

        <motion.div
          className="flex gap-4 pt-4 flex-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Link
            to="projects"
            className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold flex items-center gap-2 transition"
          >
            Ver proyectos
            <ArrowRight size={18} />
          </Link>

          <Link
            to="contact"
            className="px-6 py-3 rounded-xl border border-sky-500 text-sky-400 hover:bg-slate-800 transition font-semibold"
          >
            Contactar
          </Link>
        </motion.div>
      </motion.div>

      {/* Redes sociales */}
      <motion.div
        className="flex items-center gap-6 pt-4 text-slate-400"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
      >
        <a
          href="https://github.com/"
          target="_blank"
          className="hover:text-sky-400 transition"
        >
          <Github size={26} />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          className="hover:text-sky-400 transition"
        >
          <Linkedin size={26} />
        </a>
        <a
          href="mailto:correo@ejemplo.com"
          className="hover:text-sky-400 transition"
        >
          <Mail size={26} />
        </a>
      </motion.div>
    </section>
  );
}

export default HomePage;
