import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { primaryActions } from "@/data/site";

const onDark = {
  primary: "bg-white text-[#0A1A5C] hover:bg-[#f4f7fc]",
  secondary: "border border-white/40 bg-white/10 text-white hover:bg-white/20",
};

export function CtaGroup({
  className = "",
  tone = "default",
  layout = "stack",
}: {
  className?: string;
  tone?: "default" | "onDark";
  layout?: "stack" | "row";
}) {
  const layoutClass = layout === "row" ? "flex-row flex-wrap items-center" : "flex-col sm:flex-row sm:items-center";
  return (
    <div className={`flex gap-3 ${layoutClass} ${className}`}>
      {primaryActions.map((action) =>
        tone === "onDark" ? (
          <Link
            className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 font-label-lg text-label-lg font-semibold transition-colors ${onDark[action.variant]}`}
            href={action.href}
            key={action.label}
          >
            {action.label}
          </Link>
        ) : (
          <Button href={action.href} key={action.label} variant={action.variant}>
            {action.label}
          </Button>
        ),
      )}
    </div>
  );
}
