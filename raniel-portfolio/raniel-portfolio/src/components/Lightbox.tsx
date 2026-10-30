"use client";

import Image from "next/image";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxItem = {
  src: string;
  width: number;
  height: number;
  alt: string;
  title?: string;
  subtitle?: string;
  caption?: string;
};

/** Full-size viewer: keeps each image's original aspect ratio. Esc / ← / → supported. */
export default function Lightbox({
  items,
  index,
  onClose,
  onStep,
}: {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onStep: (d: number) => void;
}) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, onClose, onStep]);

  if (index === null || !items[index]) return null;
  const item = items[index];
  const many = items.length > 1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title ?? item.alt}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute right-4 top-4 text-white/80 hover:text-white" aria-label="Close">
        <X size={30} />
      </button>
      {many && (
        <button
          onClick={(e) => { e.stopPropagation(); onStep(-1); }}
          className="absolute left-2 z-10 grid h-11 w-11 place-items-center rounded-full bg-electric/85 text-white shadow-[0_0_18px_rgba(26,140,255,0.6)] sm:left-6"
          aria-label="Previous"
        >
          <ChevronLeft />
        </button>
      )}
      <figure className="flex max-h-full max-w-5xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <Image
          key={item.src}
          src={item.src}
          width={item.width}
          height={item.height}
          alt={item.alt}
          className="h-auto max-h-[78vh] w-auto max-w-full rounded-md shadow-[0_0_50px_rgba(26,140,255,0.4)]"
        />
        <figcaption className="mt-4 max-w-2xl text-center">
          {item.title && <span className="block text-base font-semibold text-white">{item.title}</span>}
          {item.subtitle && <span className="mt-0.5 block text-sm text-sky">{item.subtitle}</span>}
          {item.caption && <span className="mt-1 block text-sm text-white/75">{item.caption}</span>}
          {many && <span className="mt-2 block text-xs text-white/45">{index + 1} / {items.length}</span>}
        </figcaption>
      </figure>
      {many && (
        <button
          onClick={(e) => { e.stopPropagation(); onStep(1); }}
          className="absolute right-2 z-10 grid h-11 w-11 place-items-center rounded-full bg-electric/85 text-white shadow-[0_0_18px_rgba(26,140,255,0.6)] sm:right-6"
          aria-label="Next"
        >
          <ChevronRight />
        </button>
      )}
    </div>
  );
}
