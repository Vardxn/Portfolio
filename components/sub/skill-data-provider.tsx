"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const techIconStyles = `
  .tech-icon {
    opacity: 0.5;
    transition: all 0.3s ease;
  }

  .tech-icon:hover {
    opacity: 1;
    transform: scale(1.1);
  }

  .skill-card {
    transition: all 0.3s ease;
  }

  .skill-card:hover {
    transform: scale(1.05);
  }
`;

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <>
      <style suppressHydrationWarning>{techIconStyles}</style>
      <motion.div
        ref={ref}
        initial="hidden"
        variants={imageVariants}
        animate={inView ? "visible" : "hidden"}
        custom={index}
        transition={{ delay: index * animationDelay }}
        className="skill-card flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500/50 min-w-[100px] min-h-[120px]"
        role="figure"
        aria-label={`${name} skill`}
      >
        <div className="tech-icon mb-2">
          <Image src={`/skills/${src}`} width={width} height={height} alt={`${name} icon`} />
        </div>
        <span className="text-white text-sm font-medium text-center">{name}</span>
      </motion.div>
    </>
  );
};
