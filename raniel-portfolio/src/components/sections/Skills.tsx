import { skills } from "@/data/content";
import PillTitle from "../PillTitle";
import Reveal from "../Reveal";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="panel border-t border-electric/10">
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 lg:pt-24">
        <Reveal className="flex justify-center">
          <div id="skills-title">
            <PillTitle script="Expertise">Skills &amp; Expertise</PillTitle>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {skills.map((group, gi) => (
            <Reveal key={group.category} delay={0.08 * gi}>
              <h3 className="text-xl font-semibold leading-tight lg:text-[1.35rem]">{group.category}</h3>
              <div className="mt-2 h-[2px] w-12 bg-electric shadow-[0_0_10px_rgba(26,140,255,0.8)]" />
              <ul className="mt-5 space-y-3.5">
                {group.items.map((s) => (
                  <li key={s} className="flex items-center gap-2.5 text-[0.95rem] text-sky">
                    <span className="dot" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
