import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import InfoPanel from "@/components/sections/InfoPanel";
import Projects from "@/components/sections/Projects";
import Gallery from "@/components/sections/Gallery";
import Achievements from "@/components/sections/Achievements";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { about, experience, leadership } from "@/data/content";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <InfoPanel id="about" title="About Me" script="Raniel" intro={about.intro} entries={about.entries} image="portrait" />

        <InfoPanel id="leadership" title="Leadership Journey" script="Leadership" entries={leadership.entries} image={leadership.image} glow="both" />

        <InfoPanel id="experience" title="Work Experience" script="Experience" entries={experience.entries} image="portrait">
          <div className="mt-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">Core capabilities</p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {experience.capabilities.map((c) => (
                <li key={c} className="rounded-md border border-electric/40 bg-electric/10 px-3 py-1.5 text-sm text-white/90">
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs italic text-white/45">{experience.note}</p>
          </div>
        </InfoPanel>

        <Projects />
        <Gallery />
        <Achievements />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
