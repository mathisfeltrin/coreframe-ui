import { useState } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "filled";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  showPasswordToggle?: boolean;
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
  type = "text",
  showPasswordToggle = false,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  // Determine if we should show the password toggle
  const isPasswordInput = type === "password";
  const shouldShowToggle = isPasswordInput && showPasswordToggle;

  // Determine the actual input type
  const inputType = shouldShowToggle && showPassword ? "text" : type;

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
    right: (rightIcon || shouldShowToggle) ? (size === "sm" ? "pr-9" : size === "md" ? "pr-10" : "pr-12") : "",
  };

  const inputClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${errorStyles} ${disabledStyles} ${iconPaddingStyles.left} ${iconPaddingStyles.right} ${className}`;

  const iconSize = size === "sm" ? 16 : size === "md" ? 18 : 20;

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
          type={inputType}
          disabled={disabled}
          className={inputClasses}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={
            error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
          }
          {...props}
        />

        {shouldShowToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={`absolute right-0 top-0 bottom-0 flex items-center ${
              size === "sm" ? "pr-3" : size === "md" ? "pr-3" : "pr-4"
            } text-neutral-500 hover:text-neutral-700 transition-colors focus:outline-none`}
            aria-label={showPassword ? "Hide password" : "Show password"}
            tabIndex={-1}
          >
            {showPassword ? (
              // Eye icon (visible)
              <svg
                width={iconSize}
                height={iconSize}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ) : (
              // Eye-off icon (hidden)
              <svg
                width={iconSize}
                height={iconSize}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            )}
          </button>
        )}

        {rightIcon && !shouldShowToggle && (
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
