import { useEffect, useState } from "react";

// Reads the class set by the script in index.html, then keeps it in sync with localStorage.
export default function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch { /* storage blocked */ }
  }, [dark]);

  return [dark, () => setDark((d) => !d)];
}
