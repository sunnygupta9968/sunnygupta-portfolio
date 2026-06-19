"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code2, Crown, Medal, Trophy } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";

const icons = { Code2, Crown, Medal, Trophy };
const colors = ["bg-[#F9C74F]", "bg-[#1DD1A1]", "bg-[#69D2FF]", "bg-[#A78BFA]"];

export function Achievements() {
  const reduce = useReducedMotion();
  const section = profile.sections.achievements;

  return (
    <section className="section-space">
      <div className="container-page">
        <SectionHeading {...section} />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {profile.achievements.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons] ?? Trophy;
            return (
              <motion.article
                initial={reduce ? false : { opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ rotate: index % 2 ? 2 : -2, y: -6 }}
                className={`brutal-card ${colors[index % colors.length]} p-5 md:p-7`}
                key={item.title}
              >
                <div className="flex items-start justify-between gap-3">
                  <Icon size={30} />
                  <span className="chip">{item.value}</span>
                </div>
                <h3 className="mt-10 text-2xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm font-bold leading-relaxed md:text-base">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
