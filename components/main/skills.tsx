import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-section"
    >
      <SkillText />

      {/* Frontend Skills Section */}
      <div className="w-full max-w-5xl mt-8 px-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <h3 className="text-heading-5 md:text-heading-4 text-transparent bg-clip-text bg-gradient-accent whitespace-nowrap">
            Frontend Development
          </h3>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {FRONTEND_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Backend Skills Section */}
      <div className="w-full max-w-5xl mt-12 px-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
          <h3 className="text-heading-5 md:text-heading-4 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500 whitespace-nowrap">
            Backend & Database
          </h3>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {BACKEND_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Full Stack & Tools Section */}
      <div className="w-full max-w-5xl mt-12 mb-8 px-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          <h3 className="text-heading-5 md:text-heading-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 whitespace-nowrap">
            Tools & Technologies
          </h3>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {FULLSTACK_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
          {OTHER_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i + FULLSTACK_SKILL.length}
            />
          ))}
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
