"use client";

import { motion } from "framer-motion";
import { slideInFromLeft } from "@/lib/motion";

export const Education = () => {
  const educationData = [
    {
      institution: "National Institute of Technology, Srinagar",
      degree: "Bachelor of Technology in Information Technology",
      duration: "2022 – 2026",
      score: "Currently pursuing",
      highlights: [
        "Specialized in Full-Stack Web Development and Cloud Computing",
        "Active member of Coding Club, participated in 5+ hackathons",
        "Coursework: Data Structures, Algorithms, Database Systems, Cloud Architecture",
      ],
    },
    {
      institution: "Army Public School",
      degree: "Higher Secondary Education (12th Grade)",
      field: "Central Board of Secondary Education",
      duration: "2021",
      score: "87.4%",
      highlights: [
        "Focused on Mathematics, Physics, and Computer Science",
        "Participated in inter-school coding competitions",
      ],
    },
    {
      institution: "Army Public School",
      degree: "Secondary Education (10th Grade)",
      field: "Central Board of Secondary Education",
      duration: "2019",
      score: "91.2%",
      highlights: [
        "Excelled in Mathematics and Science stream",
        "School topper in Computer Applications",
      ],
    },
  ];

  return (
    <section id="education" className="py-section relative">
      <div className="flex flex-col items-center justify-center gap-8 max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <h2 className="text-heading-2 md:text-heading-1 mb-4 text-white">
            Education <span className="text-transparent bg-clip-text bg-gradient-accent">&</span> Qualifications
          </h2>
          <p className="text-body text-gray-100 max-w-3xl">
            Academic background and certifications that shaped my journey in technology
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="w-full grid grid-cols-1 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative bg-gray-800/50 border border-gray-700 rounded-xl p-6 md:p-8 hover:border-purple-500 transition-all duration-300">
                <article className="flex flex-col gap-5">
                  {/* Header */}
                  <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-heading-4 md:text-heading-3 text-white mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-body text-transparent bg-clip-text bg-gradient-accent font-semibold mb-2">
                        {edu.institution}
                      </p>
                      {edu.field && (
                        <p className="text-body-sm text-gray-100 mb-3">
                          {edu.field}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-3">
                        <time className="text-body-sm text-gray-100 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                          {edu.duration}
                        </time>
                        <p className="text-body-sm text-gray-100 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                          {edu.score}
                        </p>
                      </div>
                    </div>
                  </header>

                  {/* Highlights */}
                  {edu.highlights && edu.highlights.length > 0 && (
                    <div className="border-t border-gray-700 pt-5">
                      <ul className="list-disc list-inside space-y-2 text-body text-gray-50 leading-relaxed">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="pl-2">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
