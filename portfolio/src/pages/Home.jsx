import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Navbar from "../components/Navbar";
import InkAvatar from "../components/InkAvatar";

const name = "LAKSHAY";

const techStack = [
  "React",
  "Python",
  "AI / ML",
  "FastAPI",
  "PostgreSQL",
];

function Home() {
  return (
    <main
      id="top"
      className="
        paper-texture
        min-h-screen
        overflow-hidden
        bg-[var(--paper)]
        text-[var(--ink)]
      "
    >
      <Navbar />

      {/* Hero */}
      <section
        className="
          relative mx-auto flex min-h-screen
          max-w-7xl items-center
          px-5 pb-16 pt-32
          md:px-8 md:pt-28
        "
      >
        {/* Decorative ink line */}
        <div
          className="
            pointer-events-none absolute
            left-[-100px] top-[35%]
            hidden h-px w-64
            bg-[var(--line)]
            lg:block
          "
        />

        <div
          className="
            grid w-full
            grid-cols-1 items-center
            gap-12
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-8
          "
        >
          {/* LEFT */}
          <div className="relative z-10">

            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                mb-7 flex items-center gap-2
                font-mono text-[10px]
                uppercase tracking-[0.22em]
                text-[var(--accent)]
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute inline-flex h-full w-full
                    animate-ping rounded-full
                    bg-[var(--accent)] opacity-40
                  "
                />
                <span
                  className="
                    relative inline-flex h-2 w-2
                    rounded-full bg-[var(--accent)]
                  "
                />
              </span>

              Available for opportunities · 2026
            </motion.div>

            {/* Heading */}
            <div className="overflow-hidden">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="
                  mb-3 text-sm font-medium
                  text-[var(--ink-soft)]
                  md:text-base
                "
              >
                Hi, I'm
              </motion.p>

              <h1
                className="
                  max-w-3xl
                  text-[clamp(4rem,10vw,8rem)]
                  font-black
                  leading-[0.82]
                  tracking-[-0.075em]
                "
              >
                {name.split("").map((letter, index) => (
                  <motion.span
                    key={`${letter}-${index}`}
                    initial={{
                      opacity: 0,
                      y: 70,
                      rotate: 5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.12 + index * 0.055,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>

              <motion.h2
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.7,
                  duration: 0.6,
                }}
                className="
                  mt-3
                  text-[clamp(2.5rem,6vw,5rem)]
                  font-medium
                  leading-none
                  tracking-[-0.055em]
                  text-[var(--ink-soft)]
                "
              >
                Engineer.
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.95,
                duration: 0.6,
              }}
              className="
                mt-8 max-w-xl
                text-base leading-7
                text-[var(--ink-soft)]
                md:text-lg
              "
            >
              I build intelligent software and AI-powered
              products — combining machine learning,
              backend engineering, and thoughtful interfaces.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.1,
                duration: 0.6,
              }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <motion.a
                whileHover={{
                  y: -3,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  bg-[var(--ink)]
                  px-6 py-3.5
                  text-sm font-semibold
                  text-[var(--paper)]
                "
              >
                View my work
                <ArrowUpRight size={16} />
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                href="/resume.pdf"
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-[var(--line)]
                  px-6 py-3.5
                  text-sm font-semibold
                  text-[var(--ink)]
                  transition-colors
                  hover:border-[var(--accent)]
                "
              >
                <Download size={16} />
                Resume
              </motion.a>
            </motion.div>

            {/* Tech */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="
                mt-9 flex max-w-xl
                flex-wrap gap-2
              "
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border border-[var(--line)]
                    bg-[var(--paper-soft)]
                    px-3 py-1.5
                    font-mono text-[10px]
                    uppercase tracking-wider
                    text-[var(--ink-soft)]
                  "
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-8 flex items-center gap-4"
            >
              <a
                href="https://github.com/LakshayAggarwal12"
                target="_blank"
                rel="noreferrer"
                className="
                  text-[var(--ink-soft)]
                  transition-colors
                  hover:text-[var(--ink)]
                "
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://linkedin.com/in/lakshay-aggarwal-dev"
                target="_blank"
                rel="noreferrer"
                className="
                  text-[var(--ink-soft)]
                  transition-colors
                  hover:text-[var(--ink)]
                "
              >
                <FaLinkedin size={18} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.45,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <InkAvatar />

            {/* Caption */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="
                absolute bottom-[5%] right-[5%]
                hidden max-w-[180px]
                border-l-2 border-[var(--accent)]
                pl-3
                font-mono text-[9px]
                uppercase leading-4
                tracking-wider
                text-[var(--ink-soft)]
                sm:block
              "
            >
              Turning ideas
              <br />
              into useful things.
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#projects"
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute bottom-7 left-1/2
            hidden -translate-x-1/2
            flex-col items-center gap-2
            text-[var(--ink-soft)]
            md:flex
          "
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.25em]">
            Scroll
          </span>
          <ArrowDown size={15} />
        </motion.a>
      </section>

      {/* Temporary spacer — Projects will replace this */}
      <section
        id="projects"
        className="
          flex min-h-[30vh]
          items-center justify-center
          border-t border-[var(--line)]
          px-5
        "
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)]">
          Projects section coming next →
        </p>
      </section>
    </main>
  );
}

export default Home;