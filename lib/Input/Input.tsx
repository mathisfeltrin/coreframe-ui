import type { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "filled";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Input = ({
  label,
  error,
  helperText,
  size = "md",
  variant = "outline",
  leftIcon,
  rightIcon,
  disabled = false,
  className = "",
  id,
  ...props
}: InputProps) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  const baseStyles =
    "w-full font-normal transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-1";

  const variantStyles = {
    outline:
      "border-2 border-neutral-300 bg-white hover:border-neutral-400 focus:border-brand-500",
    filled: "border-2 border-transparent bg-neutral-100 hover:bg-neutral-200 focus:bg-white focus:border-brand-500",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-4 py-2 text-base rounded-lg",
    lg: "px-5 py-3 text-lg rounded-lg",
  };

  const errorStyles = error
    ? "border-error-500 focus:ring-error-500 focus:border-error-500"
    : "";

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed bg-neutral-100"
    : "cursor-text";

  const iconPaddingStyles = {
    left: leftIcon ? (size === "sm" ? "pl-9" : size === "md" ? "pl-10" : "pl-12") : "",
    right: rightIcon ? (size === "sm" ? "pr-9" : size === "md" ? "pr-10" : "pr-12") : "",
  };

  const inputClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${errorStyles} ${disabledStyles} ${iconPaddingStyles.left} ${iconPaddingStyles.right} ${className}`;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block mb-2 text-sm font-medium text-neutral-900"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div
            className={`absolute left-0 top-0 bottom-0 flex items-center ${
              size === "sm" ? "pl-3" : size === "md" ? "pl-3" : "pl-4"
            } text-neutral-500 pointer-events-none`}
          >
            {leftIcon}
          </div>
        )}

        <input
          id={inputId}
          disabled={disabled}
          className={inputClasses}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={
            error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
          }
          {...props}
        />

        {rightIcon && (
          <div
            className={`absolute right-0 top-0 bottom-0 flex items-center ${
              size === "sm" ? "pr-3" : size === "md" ? "pr-3" : "pr-4"
            } text-neutral-500 pointer-events-none`}
          >
            {rightIcon}
          </div>
        )}
      </div>

      {error && (
        <p id={`${inputId}-error`} className="mt-1.5 text-sm text-error-600">
          {error}
        </p>
      )}

      {helperText && !error && (
        <p id={`${inputId}-helper`} className="mt-1.5 text-sm text-neutral-600">
          {helperText}
        </p>
      )}
    </div>
  );
};
