import { GraduationCap, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Education() {
  const section = profile.sections.education;

  return (
    <section id="education" className="section-space border-y-[3px] border-[#2D3142] bg-white">
      <div className="container-page">
        <SectionHeading {...section} />

        <div className="grid gap-5">
          {profile.education.map((item, index) => (
            <Reveal
              key={item.institution}
              delay={index * 0.08}
              className="brutal-card bg-[#69D2FF] p-7 md:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl border-[3px] border-[#2D3142] bg-white shadow-[5px_5px_0_#2D3142]">
                  <GraduationCap size={36} />
                </div>
                <div>
                  <p className="font-black uppercase tracking-widest text-[#22223B]/70">
                    {item.duration}
                  </p>
                  <h3 className="mt-3 text-2xl font-black md:text-4xl">
                    {item.degree}
                  </h3>
                  <p className="mt-2 text-lg font-black">{item.institution}</p>
                  <p className="mt-4 max-w-3xl font-semibold leading-relaxed text-[#303247]">
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 lg:justify-end">
                  <span className="chip">{item.score}</span>
                  <span className="chip flex items-center gap-1">
                    <MapPin size={14} />
                    {item.location}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
