import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowEffect?: boolean;
}

export const Card = ({
  children,
  className = "",
  hoverEffect = true,
  glowEffect = true,
}: CardProps) => {
  const baseStyles = "bg-gray-800/50 border border-gray-700 rounded-xl p-6 md:p-8";
  const hoverStyles = hoverEffect ? "hover:border-purple-500 transition-all duration-300" : "";
  const glowStyles = glowEffect
    ? "group relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/20 before:to-cyan-500/20 before:rounded-xl before:blur-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
    : "";

  return (
    <div className={`${baseStyles} ${hoverStyles} ${glowStyles} ${className}`}>
      {glowEffect ? <div className="relative z-10">{children}</div> : children}
    </div>
  );
};
