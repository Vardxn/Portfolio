import Image from "next/image";
import Link from "next/link";
import { Tag } from "@/components/ui";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  tech: readonly string[];
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  tech,
}: ProjectCardProps) => {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:border-purple-500 transition-all duration-300 flex flex-col md:flex-row h-full group relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

      {/* Image Section: enforce consistent aspect ratio for symmetry */}
      <div className="relative w-full md:w-2/5 aspect-video flex-shrink-0 overflow-hidden">
        <Image
          src={src}
          alt={`${title} screenshot`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-heading-4 md:text-heading-3 text-white mb-3">{title}</h3>
          <p className="text-body text-gray-100 leading-relaxed mb-4">{description}</p>
          
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((technology) => (
              <Tag key={technology} label={technology} variant="primary" />
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center text-accent-cyan font-semibold hover:text-accent-purple transition-colors group/link"
        >
          View Project 
          <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
};
