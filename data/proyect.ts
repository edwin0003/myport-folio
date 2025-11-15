export type Project = {
  id: string;
  title: string;
  description: string;
  techs: string[];
  role: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    id: "black-crm",
    title: "BLACK CRM para WhatsApp Web",
    description:
      "Extensión tipo CRM para etiquetar contactos, enviar mensajes masivos por segmentos y automatizar seguimientos de ventas en WhatsApp Web.",
    techs: ["React", "TypeScript", "Vite", "Chrome Extension"],
    role: "Full-stack Developer",
    repo: "https://github.com/",
  },
  {
    id: "cecatec-landing",
    title: "Landing Page para Academia CECATEC",
    description:
      "Página de aterrizaje optimizada para campañas en redes sociales, enfocada en captación de alumnos para cursos técnicos presenciales.",
    techs: ["React", "TailwindCSS", "Vite"],
    role: "Frontend Developer",
  },
  {
    id: "wisp-dashboard",
    title: "Dashboard para WISP",
    description:
      "Panel interno para monitorear clientes, enlaces y estado de la red de un proveedor de internet inalámbrico.",
    techs: ["React", "TypeScript", "Node.js", "REST API"],
    role: "Full-stack Developer",
  },
];
