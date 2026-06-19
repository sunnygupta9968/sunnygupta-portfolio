import { CheckCircle2, FileText } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ResumeHighlights() {
  const section = profile.sections.highlights;
  const recruiter = profile.sections.recruiter;

  return (
    <section className="section-space border-y-[3px] border-[#2D3142] bg-white">
      <div className="container-page">
        <SectionHeading {...section} />

        <div className="grid gap-7 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal className="brutal-card bg-[#F9C74F] p-7">
            <div className="mb-6 flex items-center gap-3">
              <FileText size={30} />
              <div>
                <span className="eyebrow text-[#22223B]">{recruiter.label}</span>
                <h3 className="mt-2 text-3xl font-black">{recruiter.title}</h3>
              </div>
            </div>
            <div className="grid gap-3">
              {profile.recruiterQuickView.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border-2 border-[#2D3142] bg-white p-4"
                >
                  <p className="text-xs font-black uppercase tracking-widest text-[#5B8CFF]">
                    {item.label}
                  </p>
                  <p className="mt-1 font-black">{item.value}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="brutal-card bg-[#22223B] p-7 text-white">
            <p className="mb-6 max-w-2xl text-lg font-semibold leading-relaxed text-white/80">
              {recruiter.subtitle}
            </p>
            <ul className="grid gap-4">
              {profile.resumeHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 font-bold leading-relaxed">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#1DD1A1]" size={21} />
                  {highlight}
                </li>
              ))}
            </ul>

            {profile.certifications.map((certification) => (
              <div
                key={certification.title}
                className="mt-7 rounded-2xl border-[3px] border-white bg-[#A78BFA] p-5 text-[#22223B]"
              >
                <p className="text-xs font-black uppercase tracking-widest">
                  {certification.issuer}
                </p>
                <h3 className="mt-2 text-xl font-black">{certification.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-relaxed">
                  {certification.description}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
