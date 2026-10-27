import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";
import useActiveSection from "../hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

const ids = navLinks.map(([id]) => id);

export default function Navbar({ dark, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(ids);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer with Escape for keyboard users.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{
        color: "var(--on-navy)",
        background: scrolled || open ? "rgba(11,27,58,.94)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "background .3s ease",
      }}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <a href="#home" className="text-xl font-bold no-underline" style={{ fontFamily: "Fraunces, serif", color: "var(--accent)" }}>
          {profile.initials}
        </a>

        <ul className="hidden lg:flex items-center gap-6 list-none m-0 p-0">
          {navLinks.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="nav-link" aria-current={active === id} style={{ color: "inherit" }}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle dark={dark} onToggle={onToggleTheme} />
          <button
            className="lg:hidden grid h-10 w-10 place-items-center cursor-pointer"
            style={{ background: "transparent", border: 0, color: "inherit" }}
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            className="lg:hidden list-none m-0 px-5 pb-5 grid gap-1"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: "hidden" }}
          >
            {navLinks.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setOpen(false)} className="block py-3 no-underline font-semibold"
                   style={{ color: active === id ? "var(--accent)" : "inherit" }}>
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <motion.div style={{ scaleX: progress, transformOrigin: "left", height: 3, background: "var(--accent)" }} />
    </header>
  );
}
