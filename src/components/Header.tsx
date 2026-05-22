import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoWhite from "@/assets/logo-white.webp";
import logoColor from "@/assets/logo-color.webp";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/marcas", label: "Marcas" },
  { to: "/contato", label: "Contato" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50",
        scrolled ? "scrolled bg-white shadow-[0_2px_20px_rgba(0,0,0,0.12)]" : "bg-black/85"
      )}
      style={{ transition: "all 0.35s ease" }}
    >
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3" aria-label="Pulso — Início">
          <img
            src={scrolled ? logoColor : logoWhite}
            alt="Pulso Tecnologia e Serviços"
            className="w-auto object-contain"
            style={{ height: 48, transition: "opacity 0.35s ease" }}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => cn(
                "relative px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors",
                isActive
                  ? "text-primary"
                  : scrolled
                    ? "text-[#1a1a1a] hover:text-primary"
                    : "text-white hover:text-primary"
              )}
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-primary" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          className={cn("md:hidden p-2", scrolled ? "text-[#1a1a1a]" : "text-white")}
          onClick={() => setOpen(v => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className={cn("md:hidden border-t", scrolled ? "bg-white border-black/10" : "bg-black/95 border-border")}>
          <nav className="container flex flex-col py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) => cn(
                  "py-3 text-sm font-medium uppercase tracking-wider border-b last:border-0",
                  scrolled ? "border-black/10" : "border-border/40",
                  isActive
                    ? "text-primary"
                    : scrolled ? "text-[#1a1a1a]" : "text-white"
                )}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
