import Watermark from "./Watermark";

/** The glowing blue rounded title box ("Work Experience" in the reference). */
export default function PillTitle({ children, script }: { children: React.ReactNode; script?: string }) {
  return (
    <div className="relative inline-block">
      {script && <Watermark text={script} className="-top-6 left-1/2 -translate-x-1/2 text-6xl sm:text-7xl" />}
      <h2 className="pill relative rounded-lg px-8 py-3 text-2xl font-normal tracking-wide text-white sm:px-12 sm:text-3xl lg:px-16 lg:text-[2.15rem]">
        {children}
      </h2>
    </div>
  );
}
