"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import {
  GraduationCap,
  HeartPulse,
  Medal,
  Rocket,
  Send,
  Trophy,
  Users,
} from "lucide-react";
import { useRef } from "react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";

export function DeveloperJourney() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start .85", "end .7"],
  });
  const pathProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const section = profile.sections.journey;

  return (
    <section
      id="journey"
      className="journey-blueprint section-space overflow-hidden border-y-[3px] border-[#2D3142] bg-white"
    >
      <div className="container-page">
        <SectionHeading {...section} />

        <div ref={ref}>
          <div className="relative hidden md:block">
            <div aria-hidden className="absolute bottom-8 left-6 top-8 w-[3px] bg-[#2D3142] lg:left-1/2 lg:-translate-x-1/2" />
            <motion.div
              aria-hidden
              style={reduce ? { scaleY: 1 } : { scaleY: pathProgress }}
              className="absolute bottom-8 left-6 top-8 z-[1] w-[3px] origin-top bg-[#F9C74F] lg:left-1/2 lg:-translate-x-1/2"
            />
            <ol className="relative space-y-8 lg:space-y-3">
              {profile.journey.map((item, index) => (
                <JourneyMilestone key={`${item.title}-${item.date}`} item={item} index={index} reduce={Boolean(reduce)} />
              ))}
            </ol>
            <div className="absolute -right-1 top-0 hidden h-full xl:block" aria-hidden>
              <div className="sticky top-28 flex items-center gap-2 text-[10px] font-black uppercase tracking-[.18em] [writing-mode:vertical-rl]">
                <span>Story progress</span>
                <span className="h-24 w-1 overflow-hidden rounded-full bg-[#2D3142]/15">
                  <motion.span style={{ scaleY: reduce ? 1 : pathProgress }} className="block h-full origin-top bg-[#5B8CFF]" />
                </span>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <div className="mb-5 flex items-center justify-between gap-3">
              <p className="text-sm font-black">Swipe through the chapters</p>
              <span className="chip bg-[#F9C74F]">01 - 0{profile.journey.length}</span>
            </div>
            <ol className="journey-snap -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5">
              {profile.journey.map((item, index) => (
                <li className="w-[88vw] shrink-0 snap-center" key={`${item.title}-${item.date}`}>
                  <JourneyCard item={item} index={index} mobile />
                </li>
              ))}
            </ol>
            <div className="mt-2 flex justify-center gap-2" aria-hidden>
              {profile.journey.map((item) => <span key={item.title} className="h-2 w-2 rounded-full border border-[#2D3142] first:w-7 first:bg-[#F9C74F]" />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type JourneyItem = (typeof profile.journey)[number];

const journeyIcons = { GraduationCap, HeartPulse, Users, Trophy, Send, Medal, Rocket };

function JourneyMilestone({ item, index, reduce }: { item: JourneyItem; index: number; reduce: boolean }) {
  const isLeft = index % 2 === 0;
  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: .45, delay: .04 }}
      className="relative grid min-h-36 grid-cols-[48px_1fr] items-center lg:grid-cols-[1fr_76px_1fr]"
    >
      <div className={`hidden lg:block ${isLeft ? "pr-5" : "col-start-3 pl-5"}`}><JourneyCard item={item} index={index} /></div>
      <span className="absolute left-6 top-1/2 z-10 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[3px] border-[#2D3142] shadow-[3px_3px_0_#2D3142] transition-[filter,transform] hover:brightness-110 lg:left-1/2" style={{ backgroundColor: item.color }}>
        <JourneyIcon name={item.icon} />
      </span>
      <span aria-hidden className={`absolute top-1/2 hidden h-8 w-12 -translate-y-1/2 border-[#2D3142] lg:block ${isLeft ? "left-[calc(50%-49px)] rounded-br-2xl border-b-[3px] border-r-[3px]" : "left-[calc(50%+1px)] rounded-tl-2xl border-l-[3px] border-t-[3px]"}`} />
      <div className="col-start-2 ml-3 lg:hidden"><JourneyCard item={item} index={index} /></div>
    </motion.li>
  );
}

function JourneyIcon({ name }: { name: JourneyItem["icon"] }) {
  const Icon = journeyIcons[name];
  return <Icon size={20} strokeWidth={2.8} aria-hidden />;
}

function JourneyCard({ item, index, mobile = false }: { item: JourneyItem; index: number; mobile?: boolean }) {
  return (
    <article className={`group rounded-[20px] border-[3px] border-[#2D3142] bg-[#F8F8F8] p-5 shadow-[7px_7px_0_#2D3142] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[7px_11px_0_#2D3142] ${mobile ? "min-h-[360px]" : ""}`}>
      <div className="flex items-center justify-between gap-3">
        <span className="chip" style={{ backgroundColor: item.color }}>{item.type}</span>
        <span className="font-mono text-xs font-black text-[#5b5c70]">0{index + 1} / {item.date}</span>
      </div>
      {mobile && <span className="mt-8 grid h-14 w-14 place-items-center rounded-2xl border-[3px] border-[#2D3142]" style={{ backgroundColor: item.color }}><JourneyIcon name={item.icon} /></span>}
      <h3 className="mt-5 text-xl font-black leading-tight md:text-2xl">{item.title}</h3>
      <p className="mt-3 text-sm font-semibold leading-relaxed text-[#5b5c70]">{item.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">{item.technologies.map((tech) => <span className="chip bg-white text-[11px]" key={tech}>{tech}</span>)}</div>
    </article>
  );
}
