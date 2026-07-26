import React from "react";
import profileImage from "../assets/images/Profile.png";

const skills = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "Generative AI",
  "REST APIs",
  "JavaScript",
  "Tailwind CSS",
  "Python",
  "Git & GitHub",
];

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-120px)] overflow-hidden bg-white">

      <div className="mx-auto flex min-h-[calc(100vh-120px)] max-w-[1500px] flex-col items-center justify-center px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:px-12 lg:py-16">

        {/* ================= LEFT CONTENT ================= */}
        <div className="relative z-10 w-full lg:w-[58%]">

          {/* Intro */}
          <p className="hero-fade mb-5 text-[clamp(18px,1.6vw,26px)] font-light text-neutral-600">
            <span className="inline-block animate-wave">👋</span>{" "}
            Hi, I'm Lakshay
          </p>

          {/* Heading */}
          <h1 className="hero-title max-w-[900px] text-[clamp(55px,7vw,115px)] font-black leading-[0.85] tracking-[-0.07em] text-[#171717]">
            Full Stack
            <br />

            <span className="outline-text">
              Developer
            </span>
          </h1>

          {/* Description */}
          <p className="hero-description mt-8 max-w-[650px] text-[clamp(17px,1.4vw,24px)] leading-[1.5] text-neutral-600 sm:mt-10">
            I build modern web applications and turn ideas into
            practical digital products using{" "}
            <span className="font-medium text-black">
              MERN, Generative AI
            </span>{" "}
            and intelligent APIs.
          </p>

          {/* Buttons */}
          <div className="hero-buttons mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">

            <a
              href="#projects"
              className="
                rounded-[4px]
                border-2 border-black
                bg-[#171717]
                px-5 py-3
                text-sm text-white
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-black
                sm:px-7 sm:py-4 sm:text-base
              "
            >
              View my work
            </a>

            <a
              href="#contact"
              className="
                rounded-[4px]
                border-2 border-black
                bg-white
                px-5 py-3
                text-sm text-black
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-neutral-100
                sm:px-7 sm:py-4 sm:text-base
              "
            >
              Let's talk
            </a>

          </div>

          {/* ================= SKILLS MARQUEE ================= */}
          <div className="hero-skills mt-12 w-full max-w-[650px] overflow-hidden border-y border-neutral-200 py-4">

            <div className="skills-track">

              {/* First set */}
              {skills.map((skill, index) => (
                <React.Fragment key={`first-${skill}`}>
                  <span className="skill-item">
                    {skill}
                  </span>

                  <span className="skill-dot">
                    •
                  </span>
                </React.Fragment>
              ))}

              {/* Duplicate set for seamless loop */}
              {skills.map((skill, index) => (
                <React.Fragment key={`second-${skill}`}>
                  <span className="skill-item">
                    {skill}
                  </span>

                  <span className="skill-dot">
                    •
                  </span>
                </React.Fragment>
              ))}

            </div>

          </div>

        </div>


        {/* ================= RIGHT IMAGE ================= */}
        <div className="mt-20 flex w-full justify-center lg:mt-0 lg:w-[42%]">

          <div className="relative">

            {/* Decorative circle */}
            <div
              className="
                absolute
                -right-5 -top-5
                h-[clamp(260px,28vw,480px)]
                w-[clamp(260px,28vw,480px)]
                rounded-full
                border border-neutral-200
                animate-pulse-slow
                sm:-right-8 sm:-top-8
              "
            />

            {/* Secondary decorative circle */}
            <div
              className="
                absolute
                -bottom-8 -left-8
                h-20 w-20
                rounded-full
                border border-neutral-300
                sm:h-28 sm:w-28
              "
            />

            {/* Image */}
            <div
              className="
                hero-image
                relative z-10
                w-[clamp(260px,38vw,500px)]
                overflow-hidden
                rounded-[4px]
                bg-neutral-100
              "
            >
              <img
                src={profileImage}
                alt="Lakshay"
                className="
                  h-auto
                  w-full
                  object-cover
                  grayscale
                  transition-all
                  duration-700
                  hover:scale-[1.03]
                  hover:grayscale-0
                "
              />
            </div>

            {/* Floating label */}
            <div
              className="
                hero-label
                absolute
                -bottom-5
                -left-4
                z-20
                bg-[#171717]
                px-4 py-3
                text-xs
                text-white
                shadow-lg
                sm:-left-6
                sm:px-5 sm:py-4
                sm:text-sm
              "
            >
              Developer · Builder · Learner
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;