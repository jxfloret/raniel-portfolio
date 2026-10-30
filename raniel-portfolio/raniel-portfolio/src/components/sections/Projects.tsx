import { otherInitiatives, projects, site } from "@/data/content";
import Reveal from "../Reveal";
import Watermark from "../Watermark";
import Tile from "./Tile";
import MomentLink from "../MomentLink";

/** Reference "Gallery" grid, used for Selected Projects with details under each tile. */
export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="panel panel--left-glow border-t border-electric/10">
      <Watermark text="Projects" className="right-6 top-14 text-7xl sm:text-8xl" />
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8">
        <Reveal>
          <h2 id="projects-title" className="text-[clamp(2.2rem,5vw,3.75rem)] leading-none tracking-tight">
            <span className="font-light">Selected </span>
            <span className="font-bold">Projects</span>
          </h2>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={0.05 * (i % 4)}>
                <article>
                  {p.slug ? (
                    <MomentLink slug={p.slug} label={`See moments from ${p.title}`} className="block">
                      <Tile image={p.image} label={p.image ? undefined : p.title} />
                    </MomentLink>
                  ) : (
                    <Tile image={p.image} label={p.image ? undefined : p.title} />
                  )}
                  <div className="mt-4 flex gap-2.5">
                    <span className="dot mt-[0.45rem]" />
                    <div>
                      <h3 className="text-[1.05rem] font-semibold leading-tight">{p.title}</h3>
                      {p.role && <p className="mt-1 text-sm text-sky">{p.role}</p>}
                      <p className="mt-0.5 text-xs text-white/85">{p.date}</p>
                      <p className="mt-2 text-[0.82rem] leading-snug text-white/65">{p.description}</p>
                      {p.stats && <p className="mt-1.5 text-[0.8rem] font-medium text-gold">{p.stats}</p>}
                      {p.slug && (
                        <MomentLink slug={p.slug} label={`See moments from ${p.title}`} className="mt-2 inline-block text-xs font-medium text-sky underline-offset-4 hover:text-gold hover:underline">
                          View moments →
                        </MomentLink>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">Other projects & initiatives</p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {otherInitiatives.map((o) => (
              <li key={o} className="rounded-md border border-electric/40 bg-electric/10 px-3.5 py-1.5 text-sm text-white/90">
                {o}
              </li>
            ))}
          </ul>
        </Reveal>
        <span className="sr-only">{site.name}</span>
      </div>
    </section>
  );
}
