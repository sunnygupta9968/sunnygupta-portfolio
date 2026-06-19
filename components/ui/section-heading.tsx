import { Reveal } from "@/components/ui/reveal";

export function SectionHeading({label,title,subtitle,dark = false}:{label:string;title:string;subtitle:string;dark?:boolean}) {
  return <Reveal className="mb-12 md:mb-16"><span className={`eyebrow ${dark ? "text-[#69D2FF]" : "text-[#5B8CFF]"}`}>{label}</span><div className="mt-5 grid gap-4 md:grid-cols-[1.2fr_.8fr] md:items-end"><h2 className="section-title">{title}</h2><p className={`max-w-lg text-base font-semibold leading-relaxed md:justify-self-end md:text-lg ${dark ? "text-white/70" : "text-[#55566b]"}`}>{subtitle}</p></div></Reveal>;
}
