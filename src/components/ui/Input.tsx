import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, id, className = "", ...props }: InputProps) {
  const fieldId = id ?? props.name;
  return (
    <label className="flex flex-col gap-1.5 font-label-lg text-label-lg text-on-surface font-semibold" htmlFor={fieldId}>
      <span>{label}</span>
      <input
        className={`h-12 w-full px-space-md rounded-lg bg-surface-bright text-on-surface font-body-md text-body-md placeholder-outline border border-[#D6DFEB] focus:outline-none focus:border-primary-container focus:shadow-[0_0_0_3px_rgba(11,99,197,0.15)] transition-all ${className}`}
        id={fieldId}
        {...props}
      />
    </label>
  );
}
