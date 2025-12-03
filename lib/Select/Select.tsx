import type { SelectHTMLAttributes, ReactNode } from "react";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  options: SelectOption[];
  placeholder?: string;
  size?: "sm" | "md" | "lg";
}

export const Select = ({
  label,
  error,
  helperText,
  options,
  placeholder,
  size = "md",
  disabled = false,
  className = "",
  id,
  ...props
}: SelectProps) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

  const baseStyles =
    "w-full font-normal transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-1 border-2 border-neutral-300 bg-white hover:border-neutral-400 focus:border-brand-500 appearance-none cursor-pointer";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm rounded-md pr-9",
    md: "px-4 py-2 text-base rounded-lg pr-10",
    lg: "px-5 py-3 text-lg rounded-lg pr-12",
  };

  const errorStyles = error
    ? "border-error-500 focus:ring-error-500 focus:border-error-500"
    : "";

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed bg-neutral-100"
    : "";

  const selectClasses = `${baseStyles} ${sizeStyles[size]} ${errorStyles} ${disabledStyles} ${className}`;

  const iconSize = size === "sm" ? "12" : size === "md" ? "16" : "20";
  const iconPosition = size === "sm" ? "right-3" : size === "md" ? "right-3" : "right-4";

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={selectId}
          className="block mb-2 text-sm font-medium text-neutral-900"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <select
          id={selectId}
          disabled={disabled}
          className={selectClasses}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={
            error
              ? `${selectId}-error`
              : helperText
                ? `${selectId}-helper`
                : undefined
          }
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Custom chevron icon */}
        <div
          className={`absolute ${iconPosition} top-0 bottom-0 flex items-center text-neutral-500 pointer-events-none`}
        >
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {error && (
        <p id={`${selectId}-error`} className="mt-1.5 text-sm text-error-600">
          {error}
        </p>
      )}

      {helperText && !error && (
        <p
          id={`${selectId}-helper`}
          className="mt-1.5 text-sm text-neutral-600"
        >
          {helperText}
        </p>
      )}
    </div>
  );
};
