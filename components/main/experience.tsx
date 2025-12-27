"use client";

import { motion } from "framer-motion";

export const Experience = () => {
  const experienceData = [
    {
      company: "Umbrella Infocare Private Limited",
      position: "Software Intern",
      department: "Cloud Native Application Department",
      duration: "Dec 2024 – Feb 2025",
      location: "Noida, India",
      responsibilities: [
        "Architected and deployed cloud-native microservices on Azure, reducing deployment time by 40%",
        "Implemented CI/CD pipelines using GitHub Actions and Azure DevOps, automating 90% of release processes",
        "Collaborated with cross-functional teams to migrate legacy applications to containerized architecture using Docker and Kubernetes",
        "Optimized database queries and API endpoints, improving application response time by 25%",
      ],
    },
  ];

  return (
    <section id="experience" className="py-section relative">
      <div className="flex flex-col items-center justify-center gap-8 max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <h2 className="text-heading-2 md:text-heading-1 mb-4 text-white">
            Experience <span className="text-transparent bg-clip-text bg-gradient-accent">&</span> Internship
          </h2>
          <p className="text-body text-gray-100 max-w-3xl">
            Professional experience and internships that shaped my technical expertise
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="w-full grid grid-cols-1 gap-6">
          {experienceData.map((exp, index) => (
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
                        {exp.position}, <span className="text-transparent bg-clip-text bg-gradient-accent">{exp.company}</span>
                      </h4>
                      <p className="text-body text-gray-100 mb-3">
                        {exp.department}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <time className="text-body-sm text-gray-100 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                          {exp.duration}
                        </time>
                        <p className="text-body-sm text-gray-100 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                          {exp.location}
                        </p>
                      </div>
                    </div>
                  </header>

                  {/* Responsibilities */}
                  <div className="border-t border-gray-700 pt-5">
                    <ul className="list-disc list-inside space-y-3 text-body text-gray-50 leading-relaxed">
                      {exp.responsibilities.map((point, idx) => (
                        <li key={idx} className="pl-2">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
