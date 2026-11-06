import { SystemState } from "@/components/ui/SystemState";

export default function NotFound() {
  return (
    <SystemState
      body="This address is not one of the RayCharge screens. Head back to the homepage."
      eyebrow="Page not found"
      title="That link doesn’t lead anywhere yet."
    />
  );
}
