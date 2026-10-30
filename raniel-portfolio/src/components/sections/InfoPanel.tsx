import Image from "next/image";
import type { Img } from "@/data/content";
import EntryList, { type Entry } from "../EntryList";
import PillTitle from "../PillTitle";
import Portrait from "../Portrait";
import Reveal from "../Reveal";

/**
 * The reference "Work Experience" screen: glowing pill title, two-column
 * entry list on the left, portrait (or a supplied image) on the right.
 */
export default function InfoPanel({
  id,
  title,
  script,
  intro,
  entries,
  image,
  children,
  glow = "right",
}: {
  id: string;
  title: string;
  script?: string;
  intro?: string;
  entries: Entry[];
  image?: Img | "portrait";
  children?: React.ReactNode;
  glow?: "right" | "both";
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`panel ${glow === "both" ? "panel--left-glow" : ""} border-t border-electric/10`}
    >
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pt-20 sm:px-8 lg:grid-cols-[1.45fr_1fr] lg:pt-24">
        <div className="pb-16 lg:pb-20">
          <Reveal className="flex justify-center lg:pr-16">
            <div id={`${id}-title`}>
              <PillTitle script={script}>{title}</PillTitle>
            </div>
          </Reveal>
          {intro && (
            <Reveal delay={0.1}>
              <p className="mt-10 max-w-2xl text-[0.95rem] leading-relaxed text-white/80 sm:text-base">{intro}</p>
            </Reveal>
          )}
          <div className={intro ? "mt-9" : "mt-12"}>
            <EntryList entries={entries} />
          </div>
          {children}
        </div>

        {image === "portrait" && (
          <Reveal className="relative -mb-px self-end" x={30} y={0}>
            <Portrait className="mx-auto w-[min(100%,30rem)] lg:mr-[-3rem] lg:w-[115%] lg:max-w-none" />
          </Reveal>
        )}
        {image && image !== "portrait" && (
          <Reveal className="relative self-center pb-16 lg:pb-0" x={30} y={0}>
            <div className="relative mx-auto w-[min(100%,22rem)]">
              <div className="portrait-glow absolute -inset-8" />
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
                sizes="(min-width: 1024px) 24rem, 80vw"
                className="relative h-auto w-full rounded-md shadow-[0_0_40px_rgba(26,140,255,0.35)]"
              />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
