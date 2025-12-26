import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-purple-500 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative w-full h-64 flex-shrink-0">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="relative p-6 flex flex-col flex-grow bg-gradient-to-b from-transparent to-black/50">
        <h1 className="text-2xl font-semibold text-white mb-3">{title}</h1>
        <p className="text-gray-300 leading-relaxed flex-grow">{description}</p>
        <div className="mt-4 pt-4 border-t border-[#2A0E61]">
          <span className="text-purple-400 font-semibold hover:text-cyan-400 transition">
            View Project →
          </span>
        </div>
      </div>
    </Link>
  );
};
