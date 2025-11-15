import { motion } from "framer-motion";
import { mainStack, tools, softSkills } from "../data/skills";
import SkillGroup from "../components/SkillGroup";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      // sin ease
    },
  },
};

const blockVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      // sin ease
    },
  }),
};

function AboutPage() {
  return (
    <section className="space-y-8">
      {/* Intro */}
      <motion.div
        className="space-y-3 max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl font-semibold">
          Sobre mí
        </h1>
        <p className="text-slate-300 leading-relaxed">
          Soy Ingeniero en Sistemas y desarrollador con enfoque en
          aplicaciones web modernas. Me gusta trabajar con React y TypeScript
          para construir interfaces claras, rápidas y fáciles de mantener.
        </p>
        <p className="text-slate-300 leading-relaxed">
          Disfruto mucho optimizar procesos, automatizar tareas repetitivas y
          convertir ideas en productos funcionales, especialmente en contextos
          de ventas, marketing y herramientas internas para equipos.
        </p>
      </motion.div>

      {/* Timeline + Skills */}
      <div className="grid gap-6 md:grid-cols-[2fr,1.2fr]">
        {/* Timeline */}
        <motion.div
          className="space-y-4"
          custom={0.1}
          variants={blockVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-lg font-semibold">
            Experiencia y enfoque
          </h2>

          <div className="space-y-4 border-l border-slate-800 pl-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-sky-400">
                Desarrollo web
              </p>
              <p className="text-sm text-slate-200 font-medium">
                Aplicaciones con React, TypeScript y Vite
              </p>
              <p className="text-sm text-slate-400">
                Construcción de interfaces SPA, manejo de rutas, consumo de APIs
                REST y uso de TailwindCSS para diseño consistente.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-sky-400">
                Automatización y herramientas
              </p>
              <p className="text-sm text-slate-200 font-medium">
                Extensiones y paneles internos
              </p>
              <p className="text-sm text-slate-400">
                Desarrollo de herramientas para mejorar procesos comerciales:
                segmentación de clientes, envíos masivos y dashboards internos.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="space-y-4"
          custom={0.2}
          variants={blockVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-lg font-semibold">
            Stack y habilidades
          </h2>
          <SkillGroup title="Stack principal" items={mainStack} />
          <SkillGroup title="Herramientas" items={tools} />
          <SkillGroup title="Habilidades blandas" items={softSkills} />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPage;
