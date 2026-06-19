"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Braces,
  Code2,
  Database,
  GitBranch,
  Monitor,
  Server,
  Terminal,
  Trophy,
} from "lucide-react";
import type { ReactNode } from "react";

const techCards = [
  { label: "Java", Icon: Braces, className: "left-[6%] top-[20%] bg-[#F9C74F]", delay: 0 },
  { label: "Spring Boot", Icon: Server, className: "right-[4%] top-[16%] bg-white", delay: .25 },
  { label: "React", Icon: Code2, className: "left-[3%] top-[52%] bg-[#69D2FF]", delay: .5 },
  { label: "PostgreSQL", Icon: Database, className: "left-[39%] top-[7%] bg-white", delay: .75 },
  { label: "Docker", Icon: Boxes, className: "right-[34%] bottom-[6%] bg-[#F9C74F]", delay: 1 },
] as const;

const achievementCards = [
  { value: "Hackathon", label: "Winner", Icon: Trophy, className: "left-[5%] bottom-[30%] bg-white shadow-[5px_5px_0_#F9C74F]" },
] as const;

const codeLines = [
  "const developer = {",
  '  name: "Sunny Gupta",',
  '  role: "Software Engineer",',
  '  stack: ["Java", "React", "Spring Boot"],',
  "  builds: products => ship(products)",
  "};",
] as const;

export function DeveloperStation({ reduceMotion = false }: { reduceMotion?: boolean }) {
  return (
    <div
      className="hero-station grid-bg brutal-card relative aspect-[5/6] w-full overflow-hidden bg-[#F8F8F8] sm:aspect-square"
      role="img"
      aria-label="A premium developer command center illustration with monitor, laptop, code editor, terminal, git graph, technology cards, project cards, analytics cards, and achievement badges"
    >
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_48%_34%,rgba(105,210,255,.34),transparent_34%),radial-gradient(circle_at_77%_68%,rgba(167,139,250,.28),transparent_30%),radial-gradient(circle_at_24%_76%,rgba(249,199,79,.32),transparent_24%)]" />
      <div aria-hidden className="absolute inset-4 rounded-[18px] border-2 border-dashed border-[#5B8CFF]/25" />
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(rgba(45,49,66,.14)_1px,transparent_1px)] bg-[length:18px_18px] opacity-50" />

      <motion.div
        className="absolute inset-x-[9%] top-[20%] z-10"
        animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative mx-auto max-w-[390px]">
          <div className="absolute -inset-x-4 top-10 h-48 rounded-[26px] bg-[#5B8CFF]/18 blur-xl" />
          <div className="relative rounded-[22px] border-[4px] border-[#2D3142] bg-[#22223B] p-3 shadow-[10px_12px_0_#2D3142]">
            <div className="mb-3 flex items-center justify-between rounded-xl border-2 border-[#2D3142] bg-[#F9C74F] px-3 py-2">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#69D2FF]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#1DD1A1]" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[.16em] text-[#22223B]">Portfolio.ts</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-[1.25fr_.75fr]">
              <div className="min-h-[172px] rounded-2xl border-2 border-[#5B8CFF] bg-[#111827] p-3 font-mono text-[10px] font-bold leading-5 text-[#F8F8F8] sm:text-[11px]">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={line}
                    className="flex gap-2 whitespace-nowrap"
                    initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: .25 + index * .18, duration: .35 }}
                  >
                    <span className="w-4 shrink-0 text-[#69D2FF]">{index + 1}</span>
                    <span className={index % 2 ? "text-[#F9C74F]" : "text-[#F8F8F8]"}>{line}</span>
                  </motion.div>
                ))}
                <motion.span
                  className="mt-1 inline-block h-4 w-2 bg-[#1DD1A1]"
                  animate={reduceMotion ? undefined : { opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>

              <div className="grid gap-3">
                <PanelHeader icon={<Terminal size={13} />} title="terminal" color="bg-[#A78BFA]" />
                <div className="rounded-2xl border-2 border-[#2D3142] bg-[#F8F8F8] p-3 font-mono text-[10px] font-black leading-5">
                  <p className="text-[#5B8CFF]">$ npm run build</p>
                  <motion.p
                    className="text-[#1DD1A1]"
                    animate={reduceMotion ? undefined : { opacity: [.55, 1, .55] }}
                    transition={{ duration: 2.4, repeat: Infinity }}
                  >
                    Success
                  </motion.p>
                  <p>Portfolio deployed</p>
                </div>
                <div className="rounded-2xl border-2 border-[#2D3142] bg-white p-3">
                  <div className="mb-2 flex items-center gap-1.5 text-[10px] font-black uppercase">
                    <GitBranch size={13} />
                    git graph
                  </div>
                  <GitGraph />
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto h-12 w-20 border-x-[4px] border-[#2D3142] bg-[#5B8CFF]" />
          <div className="mx-auto h-5 w-44 rounded-b-[18px] border-[4px] border-[#2D3142] bg-[#F9C74F] shadow-[6px_6px_0_#2D3142]" />
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-x-[17%] bottom-[13%] z-20"
        animate={reduceMotion ? undefined : { y: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative mx-auto max-w-[330px]">
          <div className="rounded-t-[18px] border-[4px] border-[#2D3142] bg-white p-3 shadow-[8px_8px_0_#2D3142]">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase">
                <Monitor size={14} />
                command center
              </div>
              <span className="rounded-full border-2 border-[#2D3142] bg-[#1DD1A1] px-2 py-0.5 text-[9px] font-black">LIVE</span>
            </div>
            <div className="space-y-2">
              <div className="h-3 rounded-full border-2 border-[#2D3142] bg-[#69D2FF]" />
              <div className="flex gap-2">
                <span className="h-3 flex-1 rounded-full border-2 border-[#2D3142] bg-[#F9C74F]" />
                <span className="inline-flex items-center gap-1 rounded-full border-2 border-[#2D3142] bg-[#1DD1A1] px-2 text-[9px] font-black">
                  <Database size={10} />
                  MongoDB
                </span>
              </div>
            </div>
          </div>
          <div className="h-8 rounded-b-[22px] border-x-[4px] border-b-[4px] border-[#2D3142] bg-[#22223B]" />
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-30" aria-hidden>
        {techCards.map(({ label, Icon, className, delay }, index) => (
          <motion.div
            key={label}
            className={`absolute hidden items-center gap-1.5 rounded-xl border-[3px] border-[#2D3142] px-2.5 py-1.5 text-[10px] font-black shadow-[4px_4px_0_#2D3142] md:flex ${className}`}
            animate={reduceMotion ? undefined : { y: [0, index % 2 ? 4 : -4, 0] }}
            transition={{ duration: 6.4 + index * .25, delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon size={13} />
            {label}
          </motion.div>
        ))}

        {achievementCards.map(({ value, label, Icon, className }, index) => (
          <motion.div
            key={value}
            className={`absolute hidden max-w-[132px] items-center gap-2 rounded-2xl border-[3px] border-[#2D3142] px-3 py-2 sm:flex ${className}`}
            animate={reduceMotion ? undefined : { y: [0, 4, 0] }}
            transition={{ duration: 7.2 + index * .45, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl border-2 border-[#2D3142] bg-white">
              <Icon size={16} />
            </span>
            <span>
              <span className="block text-[11px] font-black leading-none">{value}</span>
              <span className="block text-[9px] font-bold uppercase leading-tight text-[#55566b]">{label}</span>
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PanelHeader({ icon, title, color }: { icon: ReactNode; title: string; color: string }) {
  return (
    <div className={`flex items-center gap-2 rounded-xl border-2 border-[#2D3142] px-3 py-2 text-[10px] font-black uppercase ${color}`}>
      {icon}
      {title}
    </div>
  );
}

function GitGraph() {
  return (
    <svg viewBox="0 0 160 58" className="h-14 w-full" fill="none" aria-hidden>
      <path d="M18 46 C 46 46, 40 12, 72 12 S 107 46, 142 16" stroke="#2D3142" strokeWidth="4" strokeLinecap="round" />
      <path d="M18 46 H142" stroke="#5B8CFF" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" />
      {[18, 52, 84, 116, 142].map((x, index) => (
        <circle key={x} cx={x} cy={index === 1 || index === 4 ? 18 : 46} r="7" fill={index % 2 ? "#F9C74F" : "#69D2FF"} stroke="#2D3142" strokeWidth="4" />
      ))}
    </svg>
  );
}
