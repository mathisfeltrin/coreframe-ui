import type { TextareaHTMLAttributes } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  resize?: "none" | "vertical" | "horizontal" | "both";
}

export const Textarea = ({
  label,
  error,
  helperText,
  resize = "vertical",
  disabled = false,
  className = "",
  id,
  ...props
}: TextareaProps) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

  const baseStyles =
    "w-full px-4 py-3 font-normal text-base rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-1 border-2 border-neutral-300 bg-white hover:border-neutral-400 focus:border-brand-500";

  const resizeStyles = {
    none: "resize-none",
    vertical: "resize-y",
    horizontal: "resize-x",
    both: "resize",
  };

  const errorStyles = error
    ? "border-error-500 focus:ring-error-500 focus:border-error-500"
    : "";

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed bg-neutral-100"
    : "cursor-text";

  const textareaClasses = `${baseStyles} ${resizeStyles[resize]} ${errorStyles} ${disabledStyles} ${className}`;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="block mb-2 text-sm font-medium text-neutral-900"
        >
          {label}
        </label>
      )}

      <textarea
        id={textareaId}
        disabled={disabled}
        className={textareaClasses}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={
          error
            ? `${textareaId}-error`
            : helperText
              ? `${textareaId}-helper`
              : undefined
        }
        {...props}
      />

      {error && (
        <p id={`${textareaId}-error`} className="mt-1.5 text-sm text-error-600">
          {error}
        </p>
      )}

      {helperText && !error && (
        <p
          id={`${textareaId}-helper`}
          className="mt-1.5 text-sm text-neutral-600"
        >
          {helperText}
        </p>
      )}
    </div>
  );
};
