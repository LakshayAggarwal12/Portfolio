import { motion } from "motion/react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  {
    label: "Work",
    href: "#projects",
  },
  {
    label: "Stack",
    href: "#stack",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-5 py-4 md:px-8">
        <nav
          className="
            flex items-center justify-between
            rounded-full border
            border-[var(--line)]
            bg-[color-mix(in_srgb,var(--paper)_88%,transparent)]
            px-4 py-2.5
            shadow-sm
            backdrop-blur-xl
          "
        >
          {/* Logo */}
          <a
            href="#top"
            className="group flex items-center gap-3"
          >
            <span
              className="
                flex h-8 w-8 items-center justify-center
                rounded-full
                bg-[var(--ink)]
                text-xs font-black
                text-[var(--paper)]
              "
            >
              LA
            </span>

            <div className="hidden sm:block">
              <p className="text-sm font-bold tracking-tight">
                Lakshay Aggarwal
              </p>

              <p
                className="
                  text-[9px] uppercase tracking-[0.2em]
                  text-[var(--accent)]
                "
              >
                Software • AI
              </p>
            </div>
          </a>

          {/* Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  text-xs font-medium
                  text-[var(--ink-soft)]
                  transition-colors
                  hover:text-[var(--ink)]
                "
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="
                hidden rounded-full
                bg-[var(--ink)]
                px-4 py-2.5
                text-xs font-semibold
                text-[var(--paper)]
                sm:block
              "
            >
              Let's talk →
            </motion.a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;