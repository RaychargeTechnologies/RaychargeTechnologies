type SpinnerProps = {
  className?: string;
  label?: string;
};

const base =
  "stitch-spinner inline-block rounded-full border-2 border-current border-t-transparent animate-spin";

export function Spinner({ className = "h-8 w-8 text-primary-container", label = "Loading" }: SpinnerProps) {
  return (
    <span className={`${base} ${className}`} role="status" aria-label={label}>
      <span className="sr-only">{label}</span>
    </span>
  );
}

export function spinnerMarkup(className = "h-5 w-5 text-primary-container") {
  return `<span class="${base} ${className}" role="status" aria-label="Loading"></span>`;
}
