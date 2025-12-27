interface TagProps {
  label: string;
  variant?: "default" | "primary" | "success" | "warning";
}

export const Tag = ({ label, variant = "default" }: TagProps) => {
  const variantStyles = {
    default: "bg-gray-700 text-gray-100 border border-gray-600",
    primary: "bg-purple-900/60 text-purple-200 border border-purple-600",
    success: "bg-green-900/60 text-green-200 border border-green-600",
    warning: "bg-yellow-900/60 text-yellow-200 border border-yellow-600",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-body-xs font-medium rounded-full ${variantStyles[variant]}`}
    >
      {label}
    </span>
  );
};
