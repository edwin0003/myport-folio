import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/myport-folio/",   // exactamente el nombre del repo en GitHub
  plugins: [
    react(),
    tailwindcss(),
  ],
});
