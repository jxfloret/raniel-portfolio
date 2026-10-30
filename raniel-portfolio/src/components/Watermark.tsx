/** Faint script signature that sits behind the header area, like the reference. */
export default function Watermark({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span aria-hidden className={`watermark absolute ${className}`}>
      {text}
    </span>
  );
}
