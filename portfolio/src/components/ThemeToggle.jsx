import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");

    if (saved) {
      return saved === "dark";
    }

    return window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      onClick={() => setDark((value) => !value)}
      aria-label="Toggle theme"
      className="
        flex h-10 w-10 items-center justify-center
        rounded-full border
        border-[var(--line)]
        bg-[var(--paper-soft)]
        text-[var(--ink)]
        transition-colors
        hover:border-[var(--accent)]
      "
    >
      {dark ? (
        <Sun size={17} strokeWidth={1.8} />
      ) : (
        <Moon size={17} strokeWidth={1.8} />
      )}
    </motion.button>
  );
}

export default ThemeToggle;