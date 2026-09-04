import { motion } from "motion/react";

function InkAvatar() {
  return (
    <div className="relative flex aspect-square w-full max-w-[560px] items-center justify-center">

      {/* Background circle */}
      <motion.div
        animate={{
          rotate: [0, 2, -2, 0],
          scale: [1, 1.015, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-[78%] w-[78%]
          rounded-full
          border
          border-[var(--line)]
          bg-[var(--paper-soft)]
        "
      />

      {/* Decorative orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[88%] w-[88%]
          rounded-full
          border border-dashed
          border-[var(--line)]
        "
      />

      {/* Floating paper */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          rotate: [-4, 3, -4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute right-[9%] top-[15%]
          h-16 w-12
          rotate-6
          border border-[var(--line)]
          bg-[var(--paper)]
          p-2
          shadow-md
        "
      >
        <div className="space-y-1">
          <div className="h-1 w-full bg-[var(--line)]" />
          <div className="h-1 w-4/5 bg-[var(--line)]" />
          <div className="h-1 w-3/5 bg-[var(--accent)]" />
        </div>
      </motion.div>

      {/* Main SVG */}
      <motion.svg
        viewBox="0 0 500 500"
        className="relative z-10 h-[82%] w-[82%] overflow-visible"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Ground shadow */}
        <ellipse
          cx="250"
          cy="425"
          rx="125"
          ry="18"
          fill="var(--ink)"
          opacity="0.08"
        />

        {/* Body */}
        <path
          d="M174 310
             C178 272 205 250 250 250
             C295 250 322 272 326 310
             L340 390
             C315 408 285 414 250 414
             C215 414 185 408 160 390 Z"
          fill="var(--paper)"
          stroke="var(--ink)"
          strokeWidth="7"
          strokeLinejoin="round"
        />

        {/* Shirt detail */}
        <path
          d="M211 285 L250 330 L289 285"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Neck */}
        <path
          d="M224 245 L224 275
             C235 286 265 286 276 275
             L276 245"
          fill="var(--paper)"
          stroke="var(--ink)"
          strokeWidth="7"
        />

        {/* Face */}
        <motion.ellipse
          cx="250"
          cy="205"
          rx="75"
          ry="88"
          fill="var(--paper)"
          stroke="var(--ink)"
          strokeWidth="7"
          animate={{
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Hair */}
        <path
          d="M180 190
             C178 126 208 105 252 108
             C302 110 326 145 319 194
             C302 169 286 154 260 151
             C238 151 214 162 180 190 Z"
          fill="var(--ink)"
        />

        {/* Glasses */}
        <rect
          x="196"
          y="190"
          width="45"
          height="30"
          rx="9"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="5"
        />

        <rect
          x="259"
          y="190"
          width="45"
          height="30"
          rx="9"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="5"
        />

        <path
          d="M241 202 L259 202"
          stroke="var(--ink)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Eyes */}
        <circle cx="222" cy="205" r="4" fill="var(--ink)" />
        <circle cx="278" cy="205" r="4" fill="var(--ink)" />

        {/* Smile */}
        <path
          d="M232 238 C242 246 258 246 268 238"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Left arm */}
        <motion.path
          d="M175 310
             C140 328 125 355 139 374"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="18"
          strokeLinecap="round"
          animate={{
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            transformOrigin: "175px 310px",
          }}
        />

        {/* Right arm */}
        <motion.path
          d="M325 310
             C360 328 375 355 361 374"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="18"
          strokeLinecap="round"
          animate={{
            rotate: [2, -2, 2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            transformOrigin: "325px 310px",
          }}
        />

        {/* Laptop */}
        <path
          d="M168 360 L332 360 L350 397 L150 397 Z"
          fill="var(--ink)"
          stroke="var(--ink)"
          strokeWidth="5"
        />

        <rect
          x="198"
          y="320"
          width="104"
          height="67"
          rx="5"
          fill="var(--paper)"
          stroke="var(--ink)"
          strokeWidth="6"
        />

        {/* Laptop screen */}
        <circle
          cx="215"
          cy="338"
          r="4"
          fill="var(--accent)"
        />

        <path
          d="M215 353 L250 353
             M215 364 L277 364
             M215 375 L260 375"
          stroke="var(--accent)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Ink accent */}
        <motion.circle
          cx="360"
          cy="145"
          r="9"
          fill="var(--accent)"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.svg>

      {/* Floating code tag */}
      <motion.div
        animate={{
          y: [5, -5, 5],
          rotate: [2, -1, 2],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute bottom-[12%] left-[3%]
          rounded-lg
          border border-[var(--line)]
          bg-[var(--paper)]
          px-3 py-2
          font-mono text-[10px]
          text-[var(--accent)]
          shadow-sm
        "
      >
        &lt;build /&gt;
      </motion.div>
    </div>
  );
}

export default InkAvatar;