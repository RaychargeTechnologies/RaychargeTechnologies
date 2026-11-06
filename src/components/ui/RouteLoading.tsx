import { Spinner } from "./Spinner";

export default function RouteLoading({ label = "Loading page" }: { label?: string }) {
  return (
    <div className="min-h-screen w-full bg-background grid place-items-center" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-space-sm text-primary-container">
        <Spinner label={label} />
        <p className="font-label-md text-label-md text-on-surface-variant">{label}</p>
      </div>
    </div>
  );
}
