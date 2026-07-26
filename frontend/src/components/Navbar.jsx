import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="relative z-50 bg-white/80 backdrop-blur-md">

      {/* Bottom separation */}
      <div className="border-b border-black/[0.06]">

        {/* ================= DESKTOP / HEADER ================= */}
        <div
          className="
            mx-auto
            grid
            h-[90px]
            max-w-[1730px]
            grid-cols-[1fr_auto_1fr]
            items-center
            px-5
            sm:h-[105px]
            sm:px-8
            lg:h-[120px]
            lg:px-10
          "
        >

          {/* ================= LOGO ================= */}
          <div className="justify-self-start">
            <a
              href="#home"
              className="
                block
                text-[clamp(40px,3.2vw,60px)]
                font-black
                leading-none
                tracking-[-0.07em]
                text-[#171717]
                transition-opacity
                duration-300
                hover:opacity-70
              "
            >
              Lakshay<span className="text-pink-500">.</span>
            </a>
          </div>


          {/* ================= DESKTOP NAVIGATION ================= */}
          <nav className="hidden items-center gap-[clamp(24px,3vw,52px)] lg:flex">

            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`
                  relative
                  py-2
                  text-[clamp(15px,1.1vw,18px)]
                  font-medium
                  transition-colors
                  duration-300
                  ${
                    index === 0
                      ? "text-black"
                      : "text-neutral-500 hover:text-black"
                  }
                `}
              >
                {item.name}

                {/* Active underline */}
                {index === 0 && (
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-black" />
                )}
              </a>
            ))}

          </nav>


          {/* ================= EMAIL ICON ================= */}
          <div className="flex items-center justify-self-end">

            <a
              href="mailto:lakshaydev1205@gmail.com"
              aria-label="Email Lakshay"
              className="
                group
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-neutral-300
                bg-white
                text-[#171717]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#171717]
                hover:text-white
                sm:h-12
                sm:w-12
              "
            >

              {/* Mail icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-[18px] w-[18px] sm:h-5 sm:w-5"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                />

                <path d="m3 7 9 6 9-6" />
              </svg>


              {/* Green availability dot */}
              <span
                className="
                  absolute
                  right-0
                  top-0
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-green-500
                  ring-2
                  ring-white
                "
              />


              {/* Tooltip */}
              <span
                className="
                  pointer-events-none
                  absolute
                  right-0
                  top-14
                  whitespace-nowrap
                  rounded-md
                  bg-[#171717]
                  px-3
                  py-2
                  text-xs
                  font-normal
                  text-white
                  opacity-0
                  translate-y-1
                  transition-all
                  duration-200
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                lakshaydev1205@gmail.com
              </span>

            </a>

          </div>


          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="
              col-start-3
              hidden
              h-11
              w-11
              items-center
              justify-center
              justify-self-end
              rounded-full
              border
              border-neutral-300
              bg-white
              lg:hidden
            "
          >
            {menuOpen ? (
              <span className="text-2xl leading-none">
                ×
              </span>
            ) : (
              <div className="flex flex-col gap-[5px]">
                <span className="h-[1.5px] w-5 bg-black" />
                <span className="h-[1.5px] w-5 bg-black" />
              </div>
            )}
          </button>

        </div>


        {/* ================= MOBILE MENU ================= */}
        <div
          className={`
            overflow-hidden
            border-t
            border-black/[0.05]
            bg-white/95
            backdrop-blur-md
            transition-all
            duration-500
            ease-in-out
            lg:hidden
            ${
              menuOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <nav className="mx-auto flex max-w-[1730px] flex-col px-5 py-6 sm:px-8">

            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="
                  border-b
                  border-black/[0.06]
                  py-4
                  text-lg
                  font-medium
                  text-neutral-700
                  transition-colors
                  duration-200
                  hover:text-black
                "
              >
                <span className="mr-4 text-xs text-neutral-400">
                  0{index + 1}
                </span>

                {item.name}
              </a>
            ))}


            {/* Mobile email */}
            <a
              href="mailto:lakshaydev1205@gmail.com"
              className="
                mt-6
                flex
                items-center
                gap-3
                text-sm
                text-neutral-500
              "
            >

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#171717]
                  text-white
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-4 w-4"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>

              lakshaydev1205@gmail.com

            </a>

          </nav>

        </div>

      </div>
    </header>
  );
};

export default Navbar;