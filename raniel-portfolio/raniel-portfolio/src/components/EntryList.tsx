import Reveal from "./Reveal";

export type Entry = { title: string; role: string; meta: string; points?: string[] };

/** Two-column list: gold dot · bold white title · blue role · small white meta (reference "Work Experience"). */
export default function EntryList({ entries, columns = 2 }: { entries: Entry[]; columns?: 1 | 2 }) {
  return (
    <ul className={`grid gap-x-10 gap-y-6 sm:gap-y-7 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {entries.map((e, i) => (
        <li key={e.title + e.role}>
          <Reveal delay={0.05 * i} y={16}>
            <div className="flex gap-2.5">
              <span className="dot mt-[0.55rem]" />
              <div>
                <h3 className="text-lg font-semibold leading-tight text-white sm:text-xl lg:text-[1.35rem]">{e.title}</h3>
                <p className="mt-1 text-sm text-sky sm:text-[0.95rem]">{e.role}</p>
                <p className="mt-0.5 text-xs text-white/85 sm:text-[0.8rem]">{e.meta}</p>
                {e.points && e.points.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {e.points.map((p) => (
                      <li key={p} className="text-[0.8rem] leading-snug text-white/60">
                        — {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
