"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

const heroStyles = `
  .hero-name {
    background-size: 200% 200%;
    animation: gradientMove 6s ease infinite;
  }

  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export const HeroContent = () => {
  return (
    <>
      <style suppressHydrationWarning>{heroStyles}</style>
      <motion.section
        initial="hidden"
        animate="visible"
        className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-center px-4 md:px-12 lg:px-16 pt-24 md:pt-32 pb-12 w-full z-[20]"
      >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto md:mx-0"
        >
          <SparklesIcon className="text-purple-300 mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] text-white">
            Full-Stack Developer | Cloud Technology | NIT Srinagar
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 md:gap-5 mt-2 md:mt-4 text-heading-4 md:text-heading-3 lg:text-heading-2 font-bold text-white max-w-[720px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-accent hero-name">
              Vardan Pal
            </span>
          </span>
          <span className="text-heading-5 md:text-heading-4 lg:text-heading-3">
            Crafting scalable web applications with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-accent">
              React, Node.js & Cloud
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-body md:text-body-lg text-gray-100 my-3 md:my-4 max-w-[680px]"
        >
          I build modern, performant web applications with beautiful UIs and robust backends. Currently a final-year IT student at NIT Srinagar with experience at Novetiq Umbrella.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center md:items-start mt-1 w-full sm:w-auto"
        >
          <Button href="#projects" variant="primary" size="md">
            View My Work
          </Button>
          <Button href="#contact" variant="outline" size="md">
            Get in Touch
          </Button>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden md:block transform hover:scale-105 transition-transform duration-500 w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.section>
    </>
  );
};
