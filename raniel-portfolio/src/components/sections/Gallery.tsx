"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "@/data/content";
import Reveal from "../Reveal";
import Watermark from "../Watermark";
import Tile from "./Tile";

/** Reference gallery grid of flyers, with a lightbox to view each pubmat in full. */
export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + gallery.length) % gallery.length)),
    []
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  const current = index === null ? null : gallery[index];

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="panel border-t border-electric/10">
      <Watermark text="Gallery" className="left-6 top-14 text-7xl sm:text-8xl" />
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8">
        <Reveal>
          <h2 id="gallery-title" className="text-[clamp(2.2rem,5vw,3.75rem)] leading-none tracking-tight">
            <span className="font-light">Event </span>
            <span className="font-bold">Gallery</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm text-white/65">
            Publicity materials from initiatives under the Junior Management Executives and the Global City Council of Leaders.
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <li key={g.src}>
              <Reveal delay={0.04 * (i % 4)}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-gold"
                  aria-label={`Open ${g.caption}`}
                >
                  <Tile image={g} />
                  <span className="mt-2 block text-xs text-white/70 transition group-hover:text-gold sm:text-[0.8rem]">
                    {g.caption}
                  </span>
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/92 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button onClick={close} className="absolute right-4 top-4 text-white/80 hover:text-white" aria-label="Close">
            <X size={30} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            className="absolute left-2 grid h-11 w-11 place-items-center rounded-full bg-electric/80 text-white sm:left-6"
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>
          <figure className="max-h-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={current.src}
              width={current.width}
              height={current.height}
              alt={current.alt}
              className="mx-auto h-auto max-h-[80vh] w-auto rounded-md shadow-[0_0_50px_rgba(26,140,255,0.4)]"
            />
            <figcaption className="mt-3 text-center text-sm text-white/80">{current.caption}</figcaption>
          </figure>
          <button
            onClick={(e) => { e.stopPropagation(); step(1); }}
            className="absolute right-2 grid h-11 w-11 place-items-center rounded-full bg-electric/80 text-white sm:right-6"
            aria-label="Next"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}
