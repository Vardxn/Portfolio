import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  external?: boolean;
  className?: string;
}

export const Button = ({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  external = false,
  className = "",
}: ButtonProps) => {
  const baseStyles = "font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center";

  const variantStyles = {
    primary: "bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105",
    secondary: "bg-gray-800 text-white border border-gray-700 hover:border-purple-500",
    outline: "border-2 border-gray-300 text-gray-50 hover:text-white hover:border-white",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-body-sm",
    md: "px-8 py-3 text-body",
    lg: "px-12 py-4 text-body-lg",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`;

  if (href) {
    const linkProps = external ? { target: "_blank", rel: "noreferrer noopener" } : {};
    return (
      <Link href={href} className={combinedStyles} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};
