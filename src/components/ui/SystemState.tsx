import type { ReactNode } from "react";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Card } from "./Card";

type SystemStateProps = {
  eyebrow: string;
  tone?: "alert" | "progress";
  title: string;
  body: string;
  action?: ReactNode;
};

export function SystemState({ eyebrow, tone = "alert", title, body, action }: SystemStateProps) {
  return (
    <main className="min-h-screen bg-background px-margin-mobile py-24 grid place-items-center">
      <Card className="max-w-lg w-full flex flex-col gap-space-md">
        <Badge tone={tone}>{eyebrow}</Badge>
        <h1 className="font-headline-sm text-headline-sm text-[#0A1A5C]">{title}</h1>
        <p className="font-body-md text-body-md text-on-surface-variant">{body}</p>
        {action ?? <Button href="/">Back to RayCharge</Button>}
      </Card>
    </main>
  );
}
