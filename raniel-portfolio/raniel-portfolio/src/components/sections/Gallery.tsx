"use client";

import { useCallback, useState } from "react";
import { gallery } from "@/data/content";
import Lightbox from "../Lightbox";
import Reveal from "../Reveal";
import Watermark from "../Watermark";
import Tile from "./Tile";

/** Reference gallery grid of flyers, with a lightbox to view each pubmat in full. */
export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + gallery.length) % gallery.length)), []);
  const items = gallery.map((g) => ({ ...g, title: g.caption }));

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="panel border-t border-electric/10">
      <Watermark text="Gallery" className="left-6 top-14 text-7xl sm:text-8xl" />
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8">
        <Reveal>
          <h2 id="gallery-title" className="text-[clamp(2.2rem,5vw,3.75rem)] leading-none tracking-tight">
            <span className="font-light">Publicity </span>
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
                  <span className="mt-2 block text-xs text-white/70 transition group-hover:text-gold sm:text-[0.8rem]">{g.caption}</span>
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
      <Lightbox items={items} index={index} onClose={close} onStep={step} />
    </section>
  );
}
