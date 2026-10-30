"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, sectionToNav, site } from "@/data/content";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = Object.keys(sectionToNav)
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(sectionToNav[e.target.id] ?? "home");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-navy-900/85 backdrop-blur-md shadow-[0_1px_0_rgba(80,150,255,0.15)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 md:h-[4.5rem]">
        {/* Menu — left, small uppercase, active item boxed in gold */}
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1 lg:gap-3">
            {nav.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`block rounded-[3px] px-2 py-[3px] text-[11px] font-medium uppercase tracking-wide transition-colors lg:text-xs ${
                      isActive ? "bg-gold text-navy-950" : "text-white/85 hover:text-gold"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Brand — right, name with gold tag tucked under it */}
        <a href="#home" className="relative flex flex-col items-end leading-none">
          <span className="text-xl font-medium tracking-tight text-white sm:text-2xl lg:text-[1.75rem]">
            {site.shortName}
          </span>
          <span className="-mt-0.5 mr-0.5 bg-gold px-1.5 py-[1px] text-[9px] font-medium text-navy-950 sm:text-[10px]">
            {site.tagline}
          </span>
        </a>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-white/10 px-5 pb-5 md:hidden">
          <ul className="flex flex-col gap-1 pt-3">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded px-3 py-2 text-sm font-medium uppercase tracking-wide ${
                    active === item.id ? "bg-gold text-navy-950" : "text-white/85"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
