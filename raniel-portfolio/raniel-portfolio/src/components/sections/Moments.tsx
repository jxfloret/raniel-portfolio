"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Camera } from "lucide-react";
import { momentEvents } from "@/data/content";
import Lightbox, { type LightboxItem } from "../Lightbox";
import { MOMENTS_FILTER_EVENT } from "../MomentLink";
import Reveal from "../Reveal";
import Watermark from "../Watermark";

type Flat = LightboxItem & { slug: string; kind: "photo" | "poster" };

/**
 * Selected Moments: event photography grouped by event.
 * Same tile treatment as the reference gallery (sharp corners, deep shadow,
 * blue glow on hover), but every image keeps its original aspect ratio.
 */
export default function Moments() {
  const [filter, setFilter] = useState<string>("all");
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    const onFilter = (e: Event) => setFilter((e as CustomEvent<string>).detail);
    window.addEventListener(MOMENTS_FILTER_EVENT, onFilter);
    return () => window.removeEventListener(MOMENTS_FILTER_EVENT, onFilter);
  }, []);

  const events = momentEvents.filter((e) => e.photos.length > 0);
  const visible = filter === "all" ? events : events.filter((e) => e.slug === filter);

  // Real photographs first, then official posters, so moments with people lead.
  const flat: Flat[] = useMemo(() => {
    const rows = visible.flatMap((e) =>
      e.photos.map((p) => ({
        ...p,
        slug: e.slug,
        title: e.title,
        subtitle: [e.role, e.date, e.org].filter(Boolean).join(" · "),
        caption: p.caption,
      }))
    );
    return [...rows.filter((r) => r.kind === "photo"), ...rows.filter((r) => r.kind === "poster")];
  }, [visible]);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + flat.length) % flat.length)), [flat.length]);
  const active = filter === "all" ? null : events.find((e) => e.slug === filter);

  return (
    <section id="moments" aria-labelledby="moments-title" className="panel panel--left-glow border-t border-electric/10">
      <Watermark text="Moments" className="right-6 top-14 text-7xl sm:text-8xl" />
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8">
        <Reveal>
          <h2 id="moments-title" className="text-[clamp(2.2rem,5vw,3.75rem)] leading-none tracking-tight">
            <span className="font-light">Selected </span>
            <span className="font-bold">Moments</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm text-white/65">
            The people, stages, and teams behind the work. Pick an event to see its photos, then tap any image to view it full size.
          </p>
        </Reveal>

        {/* Event filter */}
        <Reveal delay={0.05}>
          <div role="tablist" aria-label="Filter moments by event" className="mt-8 flex flex-wrap gap-2">
            {[{ slug: "all", title: "All events" }, ...events].map((e) => {
              const on = filter === e.slug;
              return (
                <button
                  key={e.slug}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setFilter(e.slug)}
                  className={`rounded-[3px] px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition ${
                    on ? "bg-gold text-navy-950" : "border border-white/15 text-white/80 hover:border-gold hover:text-gold"
                  }`}
                >
                  {e.title.split(" — ")[0]}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Event detail when one event is selected */}
        {active && (
          <div className="mt-8 flex gap-2.5">
            <span className="dot mt-[0.55rem]" />
            <div>
              <h3 className="text-xl font-semibold leading-tight lg:text-[1.35rem]">{active.title}</h3>
              <p className="mt-1 text-[0.95rem] text-sky">{active.role}</p>
              <p className="mt-0.5 text-[0.8rem] text-white/85">{[active.date, active.org].filter(Boolean).join(" · ")}</p>
              <p className="mt-2 max-w-2xl text-sm text-white/65">{active.story}</p>
            </div>
          </div>
        )}

        {/* Masonry grid, original aspect ratios */}
        <ul className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {flat.map((m, i) => (
            <li key={m.src} className="mb-6 break-inside-avoid">
              <button type="button" onClick={() => setIndex(i)} className="group block w-full text-left" aria-label={`View photo: ${m.title}. ${m.caption}`}>
                <div className="tile relative overflow-hidden rounded-sm bg-navy-900">
                  <Image
                    src={m.src}
                    width={m.width}
                    height={m.height}
                    alt={m.alt}
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                    className="h-auto w-full"
                  />
                  {m.kind === "photo" && (
                    <span className="absolute left-3 top-3 flex items-center gap-1 rounded-[3px] bg-gold px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-navy-950">
                      <Camera size={11} /> Photo
                    </span>
                  )}
                </div>
                <div className="mt-3 flex gap-2.5">
                  <span className="dot mt-[0.4rem]" />
                  <div>
                    <p className="text-[0.98rem] font-semibold leading-tight text-white transition group-hover:text-gold">{m.title}</p>
                    <p className="mt-0.5 text-[0.82rem] text-sky">{m.subtitle}</p>
                    <p className="mt-1 text-[0.8rem] leading-snug text-white/65">{m.caption}</p>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Lightbox items={flat} index={index} onClose={close} onStep={step} />
    </section>
  );
}
