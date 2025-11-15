import { motion } from "framer-motion";

const wrapperVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      // sin ease para evitar el error de tipos
    },
  },
};

const formVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.1,
      // sin ease
    },
  },
};

function ContactPage() {
  return (
    <section className="max-w-xl space-y-6">
      <motion.div
        className="space-y-2"
        variants={wrapperVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl font-semibold">
          Contacto
        </h1>
        <p className="text-slate-300">
          Si quieres hablar sobre un proyecto, colaboración o una posible
          oportunidad laboral, puedes escribirme usando este formulario.
        </p>
      </motion.div>

      <motion.form
        className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
        variants={formVariants}
        initial="hidden"
        animate="visible"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Aquí luego conectaremos el envío real del formulario.");
        }}
      >
        <div className="space-y-1">
          <label
            htmlFor="name"
            className="text-sm font-medium text-slate-200"
          >
            Nombre completo
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500"
            placeholder="Ing. Juan Pérez"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="email"
            className="text-sm font-medium text-slate-200"
          >
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500"
            placeholder="tu-correo@example.com"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="message"
            className="text-sm font-medium text-slate-200"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500 resize-none"
            placeholder="Cuéntame brevemente sobre tu proyecto o consulta."
          />
        </div>

        <motion.button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-sky-500 hover:bg-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          Enviar mensaje
        </motion.button>
      </motion.form>

      <motion.p
        className="text-xs text-slate-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Más adelante conectaré este formulario para que envíe correos reales
        usando un servicio como EmailJS o Resend.
      </motion.p>
    </section>
  );
}

export default ContactPage;
