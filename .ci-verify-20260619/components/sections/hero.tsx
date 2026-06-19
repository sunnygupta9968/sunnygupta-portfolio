"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { getSocialPlatform, socialIcons, socialLabels } from "@/components/social-icons";

const DeveloperStation = dynamic(
  () => import("@/components/hero/developer-station").then((module) => module.DeveloperStation),
  { ssr: false, loading: () => <DeveloperStationFallback /> },
);

function DeveloperStationFallback() {
  return (
    <div className="grid-bg brutal-card relative aspect-[5/6] w-full overflow-hidden bg-[#F8F8F8] sm:aspect-square" aria-label="Loading developer command center illustration">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(105,210,255,.45),transparent_38%)]" />
      <div className="absolute inset-x-[14%] top-[24%] h-48 rounded-[24px] border-[4px] border-[#2D3142] bg-[#22223B] shadow-[8px_8px_0_#2D3142]" />
      <div className="absolute inset-x-[22%] bottom-[18%] h-24 rounded-t-2xl border-[4px] border-[#2D3142] bg-white shadow-[6px_6px_0_#2D3142]" />
      <span className="absolute bottom-4 right-4 rounded-full border-2 border-[#2D3142] bg-[#F9C74F] px-3 py-1 text-[10px] font-black">Loading command center...</span>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const activeRole = profile.roleSwitcher[roleIndex] ?? profile.personal.title;

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % profile.roleSwitcher.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <section
      id="top"
      className="noise grid-bg relative flex min-h-screen items-center overflow-hidden pt-28 pb-14"
    >
      <motion.div
        aria-hidden
        className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#69D2FF]/35 blur-3xl"
        animate={reduce ? {} : { x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-[#A78BFA]/30 blur-3xl"
        animate={reduce ? {} : { x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 11, repeat: Infinity }}
      />

      <div className="container-page relative grid items-center gap-16 lg:grid-cols-[1.12fr_.88fr]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border-2 border-[#2D3142] bg-white px-4 py-2 text-sm font-black shadow-[3px_3px_0_#2D3142]">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#1DD1A1]" />
            {profile.personal.greeting}
          </div>

          <h1 className="display max-w-4xl">{profile.personal.name}</h1>

          <p className="mt-6 max-w-3xl text-2xl font-black tracking-tight text-[#5B8CFF] md:text-4xl">
            {profile.personal.title}
          </p>

          <div className="mt-4 inline-flex max-w-full items-center gap-2 rounded-2xl border-[3px] border-[#2D3142] bg-white px-4 py-3 shadow-[5px_5px_0_#2D3142]">
            <Sparkles className="shrink-0 text-[#F9C74F]" size={20} />
            <motion.span
              key={activeRole}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-black md:text-base"
            >
              {activeRole}
            </motion.span>
          </div>

          <p className="mt-6 max-w-2xl text-base font-semibold leading-relaxed text-[#55566b] md:text-lg">
            {profile.personal.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a className="brutal-button bg-[#F9C74F]" href="#projects">
              {profile.actions.explore}
              <ArrowDownRight size={19} />
            </a>
            <a className="brutal-button bg-white" href="#contact">
              {profile.actions.contact}
              <ArrowUpRight size={19} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="mr-2 inline-flex items-center gap-1.5 text-sm font-bold text-[#55566b]">
              <MapPin size={16} />
              {profile.personal.location}
            </span>
            {Object.entries(profile.socials)
              .filter(([, url]) => Boolean(url))
              .flatMap(([key, url]) => {
                const platform = getSocialPlatform(key);
                if (!platform) return [];
                const Icon = socialIcons[platform];
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={socialLabels[platform]}
                    title={socialLabels[platform]}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#2D3142] bg-white transition-transform hover:-translate-y-1"
                  >
                    <Icon size={19} aria-hidden />
                  </a>
                );
              })}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[560px]"
          initial={reduce ? false : { opacity: 0, scale: 0.85, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <Suspense fallback={<DeveloperStationFallback />}>
            <DeveloperStation reduceMotion={Boolean(reduce)} />
          </Suspense>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 lg:col-span-2 lg:grid-cols-4">
          {profile.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + index * 0.08 }}
              className="rounded-2xl border-[3px] border-[#2D3142] bg-white p-4 shadow-[4px_4px_0_#2D3142]"
            >
              <strong className="block text-2xl font-black md:text-3xl">
                {stat.value}
              </strong>
              <span className="text-xs font-bold text-[#66677a]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
