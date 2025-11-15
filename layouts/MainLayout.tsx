import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";

function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);

  const linkBase =
    "px-2 py-1 rounded-md text-sm transition-colors";

  const getLinkClass = (isActive: boolean) => {
    if (isActive) {
      return `${linkBase} bg-sky-500/10 text-sky-400`;
    }
    return `${linkBase} text-slate-300 hover:text-sky-400 hover:bg-slate-800/60`;
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* NAVBAR */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-20">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="font-semibold tracking-tight">
            <span className="text-sky-400">{"<"}</span>
            Edwin Crespo
            <span className="text-sky-400">{"/>"}</span>
          </div>

          {/* Menú desktop */}
          <nav className="hidden md:flex gap-4">
            <NavLink to="/" end className={({ isActive }) => getLinkClass(isActive)}>
              Inicio
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => getLinkClass(isActive)}>
              Sobre mí
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => getLinkClass(isActive)}>
              Proyectos
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => getLinkClass(isActive)}>
              Contacto
            </NavLink>
          </nav>

          {/* Botón hamburguesa (mobile) */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-slate-800/70 text-slate-200"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Menú mobile */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950/95">
            <nav className="mx-auto max-w-5xl px-4 py-3 flex flex-col gap-2">
              <NavLink
                to="/"
                end
                className={({ isActive }) => getLinkClass(isActive)}
                onClick={closeMenu}
              >
                Inicio
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => getLinkClass(isActive)}
                onClick={closeMenu}
              >
                Sobre mí
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) => getLinkClass(isActive)}
                onClick={closeMenu}
              >
                Proyectos
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => getLinkClass(isActive)}
                onClick={closeMenu}
              >
                Contacto
              </NavLink>
            </nav>
          </div>
        )}
      </header>

      {/* CONTENIDO */}
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <Outlet />
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        Portafolio de Ing. Edwin Crespo · {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default MainLayout;
