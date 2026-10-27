import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid h-10 w-10 place-items-center rounded-full cursor-pointer"
      style={{ border: "1px solid rgba(238,241,247,.3)", color: "inherit", background: "transparent" }}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
