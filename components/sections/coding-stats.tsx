"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { Code2, Layers, Medal, Rocket, Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";

const icons = { Code2, Layers, Medal, Rocket, Trophy };
const colors = ["#5B8CFF", "#F9C74F", "#1DD1A1", "#A78BFA", "#69D2FF"];
const durations = [1000, 1200, 1400, 1600, 1800];

export function CodingStats() {
  const reduce = Boolean(useReducedMotion());
  const section = profile.sections.statistics;

  return (
    <section id="metrics" className="section-space metrics-grid overflow-hidden border-y-[3px] border-[#2D3142] bg-white">
      <div className="container-page">
        <SectionHeading {...section} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {profile.codingStats.map((stat, index) => (
            <MetricCard
              key={stat.label}
              stat={stat}
              index={index}
              reduce={reduce}
              className={index < 2 ? "lg:col-span-3" : "lg:col-span-2"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type Stat = (typeof profile.codingStats)[number];

function MetricCard({ stat, index, reduce, className }: { stat: Stat; index: number; reduce: boolean; className: string }) {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref, { once: true, amount: .35 });
  const target = Number.parseInt(stat.value, 10);
  const suffix = stat.value.replace(/[\d,]/g, "");
  const start = stat.label === "AIR Rank" ? 10000 : 0;
  const value = useAnimatedNumber(start, target, durations[index], visible, reduce);
  const Icon = icons[stat.icon as keyof typeof icons] ?? Rocket;

  return (
    <motion.article
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .25 }}
      transition={{ duration: .4, delay: index * .07 }}
      whileHover={reduce ? undefined : { y: -7 }}
      className={`metric-card group relative overflow-hidden rounded-[20px] border-[3px] border-[#2D3142] bg-[#F8F8F8] p-6 shadow-[7px_7px_0_#2D3142] ${className}`}
    >
      <motion.span
        aria-hidden
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: .55, delay: index * .08 }}
        className="absolute inset-x-0 top-0 h-2 origin-left"
        style={{ backgroundColor: colors[index] }}
      />
      <div className="flex items-start justify-between gap-5">
        <motion.div
          className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border-[3px] border-[#2D3142] shadow-[4px_4px_0_#2D3142]"
          style={{ backgroundColor: colors[index] }}
          whileHover={reduce ? undefined : { rotate: 8, scale: 1.04 }}
        >
          <Icon size={26} aria-hidden />
        </motion.div>
        <span className="font-mono text-[10px] font-black tracking-[.16em] text-[#5b5c70]">METRIC_0{index + 1}</span>
      </div>

      <motion.strong
        aria-label={stat.value}
        whileHover={reduce ? undefined : { scale: 1.035 }}
        className="metric-number mt-8 block min-h-[1em] origin-left text-5xl font-black tabular-nums md:text-6xl"
      >
        <span aria-hidden>{value.toLocaleString("en-IN")}{suffix}</span>
      </motion.strong>
      <h3 className="mt-3 text-xl font-black">{stat.label}</h3>
      <p className="mt-2 text-sm font-semibold leading-relaxed text-[#5b5c70]">{stat.detail}</p>
    </motion.article>
  );
}

function useAnimatedNumber(start: number, target: number, duration: number, enabled: boolean, reduce: boolean) {
  const [value, setValue] = useState(reduce ? target : start);

  useEffect(() => {
    if (reduce) {
      setValue(target);
      return;
    }
    if (!enabled) return;

    let frame = 0;
    const began = window.performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - began) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(start + (target - start) * eased));
      if (progress < 1) frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [duration, enabled, reduce, start, target]);

  return value;
}
