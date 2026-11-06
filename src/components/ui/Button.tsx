import Link from "next/link";
import type { ReactNode } from "react";
import { Spinner } from "./Spinner";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-primary-container text-on-primary shadow-[0_4px_16px_-2px_rgba(10,26,92,0.12)] hover:bg-primary hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-primary-container border-[1.5px] border-primary-container hover:bg-[#EAF3FC]",
};

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  loading = false,
  disabled = false,
  onClick,
}: ButtonProps) {
  const className = `inline-flex items-center justify-center gap-2 min-h-12 h-12 px-6 rounded-full font-label-lg text-label-lg font-semibold transition-all duration-200 disabled:opacity-60 disabled:pointer-events-none ${variants[variant]}`;
  const content = (
    <>
      {loading ? <Spinner className="h-4 w-4" label="Loading" /> : null}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <Link className={className} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <button className={className} disabled={disabled || loading} onClick={onClick} type={type}>
      {content}
    </button>
  );
}
