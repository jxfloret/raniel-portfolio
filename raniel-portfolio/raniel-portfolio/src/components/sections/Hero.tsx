import Image from "next/image";
import { hero, site, socials } from "@/data/content";
import { LinkedInLogo } from "../Icons";
import Portrait from "../Portrait";
import Reveal from "../Reveal";
import Watermark from "../Watermark";

/** Mirrors the reference's "Social Media Flyers" screen. */
export default function Hero() {
  return (
    <section id="home" className="panel relative min-h-[100svh] pt-20" aria-label="Introduction">
      <Watermark text={site.shortName} className="left-[40%] top-4 text-7xl sm:text-8xl lg:text-9xl" />

      {/* Fanned pubmats behind the portrait */}
      <div aria-hidden className="pointer-events-none absolute right-[-4%] top-[14%] hidden h-[62%] w-[44%] md:block">
        {hero.fan.map((src, i) => (
          <div
            key={src}
            className="absolute aspect-[4/5] w-[46%] overflow-hidden rounded-md shadow-2xl brightness-[0.7]"
            style={{
              right: `${8 + i * 22}%`,
              top: `${i * 9}%`,
              transform: `rotate(${[14, -10, 6][i]}deg)`,
              zIndex: 3 - i,
            }}
          >
            <Image src={src} alt="" fill sizes="20vw" className="object-cover" />
          </div>
        ))}
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-5 sm:px-8 md:min-h-[calc(100svh-5rem)] md:justify-center">
        {/* Big three-line name */}
        <Reveal className="relative z-20 md:-mt-10" x={-30} y={0}>
          <h1 className="text-[clamp(3.2rem,8vw,7.25rem)] leading-[0.95] tracking-tight">
            {hero.lines.map((l) => (
              <span key={l.text} className={`block ${l.weight === "bold" ? "font-bold" : "font-light"}`}>
                {l.text}
              </span>
            ))}
          </h1>
          <a href={hero.cta.href} className="cta mt-8 inline-block rounded-md px-8 py-3 text-base font-normal text-white sm:text-lg">
            {hero.cta.label}
          </a>
        </Reveal>

        {/* Small dark card with blue icon tab — floats between the name and the portrait */}
        <Reveal delay={0.2} className="relative z-20 mt-10 md:absolute md:left-[40%] md:top-[64%] md:mt-0 lg:left-[46%] lg:top-[30%]">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with Raniel Capon on LinkedIn (opens in a new tab)"
            className="relative block max-w-[15rem] rounded-xl border border-white/10 bg-[#0a1430]/90 px-6 pb-6 pt-7 shadow-2xl backdrop-blur transition hover:border-electric/60"
          >
            <span className="absolute -top-3 right-4 shadow-[0_0_18px_rgba(10,102,194,0.7)]">
              <LinkedInLogo size={40} />
            </span>
            <p className="text-[0.95rem] leading-snug text-white">{hero.cardText}</p>
          </a>
        </Reveal>

        {/* Mobile portrait (in flow) */}
        <Reveal className="relative z-10 -mx-5 mt-6 md:hidden" y={20}>
          <Portrait priority className="mx-auto w-full max-w-md" />
        </Reveal>
      </div>

      {/* Desktop portrait — large, anchored to the bottom-right edge like the reference */}
      <Reveal className="absolute bottom-0 right-[-2vw] z-10 hidden w-[min(54vw,110svh)] md:block lg:right-[1vw] lg:w-[min(50vw,108svh)]" x={30} y={0}>
        <Portrait priority className="w-full" />
      </Reveal>
    </section>
  );
}
