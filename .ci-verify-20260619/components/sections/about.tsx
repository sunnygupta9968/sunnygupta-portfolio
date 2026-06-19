import { Check, Heart, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  const section = profile.sections.about;

  return (
    <section id="about" className="section-space">
      <div className="container-page">
        <SectionHeading {...section} />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <Reveal className="brutal-card bg-[#F9C74F] p-7 md:p-10">
            <Sparkles size={34} />
            <p className="mt-16 text-2xl font-black leading-tight md:text-4xl">
              {profile.about.highlight}
            </p>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.1}>
              <p className="text-lg font-semibold leading-8 text-[#4d4e63] md:text-xl">
                {profile.about.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {profile.about.interests.map((item) => (
                  <span
                    className="chip transition-transform hover:-rotate-2 hover:scale-105"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2} className="brutal-card bg-white p-6">
              <div className="mb-5 flex items-center gap-3">
                <Heart className="fill-[#A78BFA]" />
                <h3 className="text-xl font-black">
                  {profile.about.values.title}
                </h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {profile.about.values.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-bold">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1DD1A1]">
                      <Check size={14} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {profile.about.storyCards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 0.08}
              className="brutal-card bg-white p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#2D3142] bg-[#69D2FF] text-sm font-black">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-2xl font-black">{card.title}</h3>
              <p className="mt-3 font-semibold leading-relaxed text-[#5b5c70]">
                {card.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
