import type { LabelHTMLAttributes, ReactNode } from "react";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  required?: boolean;
  optional?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Label = ({
  children,
  required = false,
  optional = false,
  size = "md",
  className = "",
  ...props
}: LabelProps) => {
  const sizeStyles = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const baseStyles = "block font-medium text-neutral-900";

  const labelClasses = `${baseStyles} ${sizeStyles[size]} ${className}`;

  return (
    <label className={labelClasses} {...props}>
      {children}
      {required && (
        <span className="ml-1 text-error-600" aria-label="required">
          *
        </span>
      )}
      {optional && !required && (
        <span className="ml-1 text-neutral-500 font-normal" aria-label="optional">
          (optional)
        </span>
      )}
    </label>
  );
};
