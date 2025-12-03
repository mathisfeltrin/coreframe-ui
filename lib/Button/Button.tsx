import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
}: ButtonProps): ReactNode => {
  const baseStyles =
    "font-medium rounded-lg transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800 focus:ring-brand-500 shadow-sm hover:shadow-md",
    secondary:
      "bg-neutral-700 text-white hover:bg-neutral-800 active:bg-neutral-900 focus:ring-neutral-500 shadow-sm hover:shadow-md",
    outline:
      "bg-transparent border-2 border-brand-600 text-brand-600 hover:bg-brand-50 active:bg-brand-100 focus:ring-brand-500",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed pointer-events-none";

  const className = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
    disabled ? disabledStyles : ""
  }`;

  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
};
