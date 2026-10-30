import { Mail, Phone } from "lucide-react";
import { contact, site, socials } from "@/data/content";
import { LinkedInLogo, SocialLinks } from "../Icons";
import Portrait from "../Portrait";
import Reveal from "../Reveal";
import Watermark from "../Watermark";

/** Closing screen: same composition as the hero (big text, CTA, dark card, portrait). */
export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="panel border-t border-electric/10">
      <Watermark text={site.shortName} className="left-[38%] top-6 text-7xl sm:text-8xl" />
      <div className="relative mx-auto grid max-w-7xl items-end gap-10 px-5 pt-24 sm:px-8 lg:grid-cols-[1fr_1.05fr_1fr]">
        <Reveal className="self-center" x={-30} y={0}>
          <h2 id="contact-title" className="text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] tracking-tight">
            {contact.lines.map((l) => (
              <span key={l.text} className={`block ${l.weight === "bold" ? "font-bold" : "font-light"}`}>
                {l.text}
              </span>
            ))}
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${contact.email}`} className="cta inline-block rounded-md px-7 py-3 text-base text-white">
              Send me an Email
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Raniel Capon on LinkedIn (opens in a new tab)"
              className="inline-flex items-center gap-2 rounded-md border border-[#0A66C2] bg-[#0A66C2]/15 px-5 py-3 text-base text-white transition hover:bg-[#0A66C2]"
            >
              <LinkedInLogo size={22} /> Connect on LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="self-center">
          <div className="relative rounded-xl border border-white/10 bg-[#0a1430]/90 px-6 pb-6 pt-7 shadow-2xl backdrop-blur">
            <span className="absolute -top-3 right-4 grid h-10 w-10 place-items-center rounded-md bg-electric text-white shadow-[0_0_18px_rgba(26,140,255,0.6)]">
              <Mail size={20} />
            </span>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">Open to</p>
            <ul className="mt-3 space-y-2">
              {contact.openTo.map((o) => (
                <li key={o} className="flex items-center gap-2.5 text-[0.92rem] text-white">
                  <span className="dot" /> {o}
                </li>
              ))}
            </ul>
            <div className="mt-5 space-y-2 border-t border-white/10 pt-5 text-sm">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 break-all text-sky hover:text-gold">
                <Mail size={16} className="shrink-0" /> {contact.email}
              </a>
              {contact.phone && (
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sky hover:text-gold">
                  <Phone size={16} className="shrink-0" /> {contact.phone}
                </a>
              )}
            </div>
            <p className="mt-5 text-xs text-white/55">Or connect with me on</p>
            <SocialLinks withLabels size={24} className="mt-2" />
          </div>
        </Reveal>

        <Reveal className="-mb-px self-end" x={30} y={0}>
          <Portrait className="mx-auto w-[min(100%,34rem)] lg:w-[125%] lg:max-w-none" />
        </Reveal>
      </div>

      <footer className="relative border-t border-white/10 bg-navy-950/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 text-xs text-white/55 sm:flex-row sm:px-8">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <SocialLinks size={24} />
          <a href={`mailto:${contact.email}`} className="hover:text-gold">{contact.email}</a>
        </div>
      </footer>
    </section>
  );
}
