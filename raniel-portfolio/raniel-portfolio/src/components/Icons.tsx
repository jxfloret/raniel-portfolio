/**
 * Official-style brand marks (lucide doesn't ship brand logos).
 * Colors follow each platform's brand guidelines:
 * LinkedIn #0A66C2 · Facebook #0866FF · Instagram gradient.
 */
import { useId } from "react";
import { socials } from "@/data/content";

export function LinkedInLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        fill="#fff"
        d="M6.94 5a1.94 1.94 0 1 1 0 3.88 1.94 1.94 0 0 1 0-3.88zM5.3 10.2h3.28V19H5.3v-8.8zm5.3 0h3.14v1.2h.05c.44-.83 1.5-1.7 3.1-1.7 3.32 0 3.93 2.18 3.93 5.02V19h-3.27v-3.8c0-.9-.02-2.07-1.26-2.07-1.27 0-1.46.98-1.46 2V19H10.6v-8.8z"
      />
    </svg>
  );
}

export function FacebookLogo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="12" fill="#0866FF" />
      <path
        fill="#fff"
        d="M13.4 24v-8.6h2.75l.42-3.2H13.4v-2.03c0-.92.27-1.56 1.6-1.56h1.68V5.75c-.29-.04-1.29-.13-2.45-.13-2.43 0-4.1 1.48-4.1 4.2v2.38H7.38v3.2h2.75V24h3.27z"
      />
    </svg>
  );
}

export function InstagramLogo({ size = 24 }: { size?: number }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <defs>
        <radialGradient id={`ig${id}`} cx="0.3" cy="1.07" r="1.3">
          <stop offset="0" stopColor="#FFDD55" />
          <stop offset="0.1" stopColor="#FFDD55" />
          <stop offset="0.5" stopColor="#FF543E" />
          <stop offset="1" stopColor="#C837AB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill={`url(#ig${id})`} />
      <rect x="5" y="5" width="14" height="14" rx="4.2" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.4" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="16.3" cy="7.7" r="1.05" fill="#fff" />
    </svg>
  );
}

const items = [
  { key: "linkedin", href: socials.linkedin, label: "LinkedIn", Logo: LinkedInLogo },
  { key: "instagram", href: socials.instagram, label: "Instagram", Logo: InstagramLogo },
  { key: "facebook", href: socials.facebook, label: "Facebook", Logo: FacebookLogo },
] as const;

/** Row of brand icons that open each profile in a new tab. */
export function SocialLinks({ size = 26, withLabels = false, className = "" }: { size?: number; withLabels?: boolean; className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {items.map(({ key, href, label, Logo }) => (
        <li key={key}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Raniel Capon on ${label} (opens in a new tab)`}
            className={`group flex items-center gap-2 transition ${
              withLabels
                ? "rounded-md border border-white/10 bg-white/5 py-1.5 pl-1.5 pr-3 text-sm text-white/90 hover:border-electric/60 hover:bg-electric/10"
                : "rounded-md hover:-translate-y-0.5 hover:drop-shadow-[0_0_10px_rgba(26,140,255,0.7)]"
            }`}
          >
            <Logo size={size} />
            {withLabels && <span>{label}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
