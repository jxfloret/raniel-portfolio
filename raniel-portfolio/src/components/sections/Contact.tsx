import { Mail, MapPin, Phone } from "lucide-react";
import { contact, site } from "@/data/content";
import { FacebookIcon, LinkedinIcon } from "../Icons";
import Portrait from "../Portrait";
import Reveal from "../Reveal";
import Watermark from "../Watermark";

/** Closing screen — same composition as the hero. */
export default function Contact() {
  const rows = [
    { icon: <Mail size={18} />, label: contact.email, href: `mailto:${contact.email}` },
    contact.phone && { icon: <Phone size={18} />, label: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    contact.location && { icon: <MapPin size={18} />, label: contact.location },
  ].filter(Boolean) as { icon: React.ReactNode; label: string; href?: string }[];

  return (
    <section id="contact" aria-labelledby="contact-title" className="panel border-t border-electric/10">
      <Watermark text={site.shortName} className="left-[38%] top-6 text-7xl sm:text-8xl" />
      <div className="relative mx-auto grid max-w-7xl items-end gap-10 px-5 pt-24 sm:px-8 md:grid-cols-[1.1fr_0.9fr_1.1fr]">
        <Reveal className="self-center" x={-30} y={0}>
          <h2 id="contact-title" className="text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] tracking-tight">
            {contact.lines.map((l) => (
              <span key={l.text} className={`block ${l.weight === "bold" ? "font-bold" : "font-light"}`}>
                {l.text}
              </span>
            ))}
          </h2>
          <a href={`mailto:${contact.email}`} className="cta mt-8 inline-block rounded-md px-8 py-3 text-base text-white sm:text-lg">
            Send me an Email
          </a>
        </Reveal>

        <Reveal delay={0.15} className="self-center">
          <div className="relative rounded-xl border border-white/10 bg-[#0a1430]/90 px-6 pb-6 pt-7 shadow-2xl backdrop-blur">
            <ul className="space-y-4">
              {rows.map((r) => (
                <li key={r.label} className="flex items-center gap-3 text-sm text-white">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-electric shadow-[0_0_14px_rgba(26,140,255,0.55)]">
                    {r.icon}
                  </span>
                  {r.href ? (
                    <a href={r.href} className="break-all hover:text-gold">{r.label}</a>
                  ) : (
                    <span>{r.label}</span>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3 border-t border-white/10 pt-5">
              <a href={contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                 className="grid h-10 w-10 place-items-center rounded-md border border-electric/50 text-white transition hover:bg-electric">
                <FacebookIcon />
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                 className="grid h-10 w-10 place-items-center rounded-md border border-electric/50 text-white transition hover:bg-electric">
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="-mb-px self-end" x={30} y={0}>
          <Portrait className="mx-auto w-[min(100%,36rem)] md:w-[125%] md:max-w-none" />
        </Reveal>
      </div>

      <footer className="relative border-t border-white/10 bg-navy-950/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-white/55 sm:flex-row sm:px-8">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>BSBA Operations Management · STI College Global City</span>
        </div>
      </footer>
    </section>
  );
}
