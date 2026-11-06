import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-surface-container-lowest rounded-2xl p-6 border border-[rgba(15,27,51,0.06)] shadow-[0_4px_16px_-2px_rgba(10,26,92,0.04),0_2px_6px_-1px_rgba(10,26,92,0.02)] ${className}`}
    >
      {children}
    </div>
  );
}
