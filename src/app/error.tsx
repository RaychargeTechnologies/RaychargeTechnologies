"use client";

import { Button } from "@/components/ui/Button";
import { SystemState } from "@/components/ui/SystemState";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <SystemState
      action={<Button onClick={reset}>Try again</Button>}
      body="The screen failed to load. Try again, or return home."
      eyebrow="Couldn’t load"
      title="Something interrupted this page."
    />
  );
}
