import Image from "next/image";
import { ImagePlus } from "lucide-react";
import type { Img } from "@/data/content";

/**
 * Portrait tile matching the reference gallery grid.
 * The whole image stays visible (no cropping) over a blurred copy of itself,
 * so square and tall pubmats sit in the same tile shape.
 */
export default function Tile({ image, label }: { image?: Img; label?: string }) {
  if (!image) {
    return (
      <div className="tile relative grid aspect-[16/10] place-items-center sm:aspect-[3/4] overflow-hidden rounded-sm border border-dashed border-electric/40 bg-gradient-to-b from-navy-800 to-navy-950">
        <div className="flex flex-col items-center gap-2 px-4 text-center text-white/50">
          <ImagePlus size={30} className="text-electric/80" />
          <span className="text-xs uppercase tracking-wider">Photo coming soon</span>
          {label && <span className="text-sm font-medium text-white/70">{label}</span>}
        </div>
      </div>
    );
  }
  return (
    <div className="tile relative aspect-[3/4] overflow-hidden rounded-sm bg-navy-900">
      <Image src={image.src} alt="" aria-hidden fill sizes="25vw" className="scale-125 object-cover opacity-60 blur-xl" />
      <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw" className="relative object-contain" />
    </div>
  );
}
