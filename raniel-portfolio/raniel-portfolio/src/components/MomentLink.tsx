"use client";

/** Jumps to "Selected Moments" with that event's photos filtered in. */
export const MOMENTS_FILTER_EVENT = "moments:filter";

export default function MomentLink({ slug, children, className, label }: { slug: string; children: React.ReactNode; className?: string; label: string }) {
  return (
    <a
      href="#moments"
      aria-label={label}
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent(MOMENTS_FILTER_EVENT, { detail: slug }))}
    >
      {children}
    </a>
  );
}
