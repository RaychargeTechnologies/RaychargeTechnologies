import type { ReactNode } from "react";

const tones = {
  operational: "bg-[#EAF8F1] text-[#107C41]",
  progress: "bg-[#EAF3FC] text-primary-container",
  alert: "bg-[#FDF2F2] text-[#D92D20]",
};

type BadgeProps = {
  children: ReactNode;
  tone?: keyof typeof tones;
};

export function Badge({ children, tone = "progress" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 font-label-sm text-label-sm font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}
