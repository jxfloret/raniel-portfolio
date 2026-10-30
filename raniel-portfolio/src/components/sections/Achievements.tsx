import Image from "next/image";
import { achievements } from "@/data/content";
import EntryList from "../EntryList";
import PillTitle from "../PillTitle";
import Reveal from "../Reveal";

export default function Achievements() {
  return (
    <section id="achievements" aria-labelledby="achievements-title" className="panel panel--left-glow border-t border-electric/10">
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-20 sm:px-8 lg:grid-cols-[1.45fr_1fr] lg:pt-24">
        <div>
          <Reveal className="flex justify-center lg:pr-16">
            <div id="achievements-title">
              <PillTitle script="Recognition">Achievements</PillTitle>
            </div>
          </Reveal>
          <div className="mt-12">
            <EntryList entries={achievements.entries} />
          </div>
        </div>

        {/* Fanned recognition pubmats, echoing the hero */}
        <Reveal className="relative mx-auto h-[24rem] w-full max-w-[24rem] self-center sm:h-[28rem]" x={30} y={0}>
          <div className="portrait-glow absolute inset-0" />
          {achievements.fan.map((img, i) => (
            <div
              key={img.src}
              className="absolute w-[72%] overflow-hidden rounded-md shadow-[0_15px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(26,140,255,0.3)]"
              style={{ left: i === 0 ? "0%" : "28%", top: i === 0 ? "4%" : "26%", transform: `rotate(${i === 0 ? -7 : 6}deg)`, zIndex: 2 - i }}
            >
              <Image src={img.src} width={img.width} height={img.height} alt={img.alt} sizes="18rem" className="h-auto w-full" />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
