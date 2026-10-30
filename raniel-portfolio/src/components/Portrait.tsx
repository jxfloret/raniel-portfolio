import Image from "next/image";
import { portrait } from "@/data/content";

/** Raniel's portrait anchored to the bottom-right with a blue rim glow, like the reference. */
export default function Portrait({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <div className={`pointer-events-none relative ${className}`}>
      <div className="portrait-glow absolute inset-[6%_4%_0_8%]" />
      <Image
        src={portrait.src}
        width={portrait.width}
        height={portrait.height}
        alt={portrait.alt}
        priority={priority}
        sizes="(min-width: 1024px) 40vw, 80vw"
        className="portrait-img relative h-auto w-full"
      />
    </div>
  );
}
