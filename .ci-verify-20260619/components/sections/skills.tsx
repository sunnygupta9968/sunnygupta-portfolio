"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";

export function Skills() {
  const reduce = useReducedMotion();
  const section = profile.sections.skills;

  return (
    <section id="skills" className="section-space">
      <div className="container-page">
        <SectionHeading {...section} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((group, index) => (
            <motion.article
              key={group.category}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -6, rotate: index % 2 ? 0.6 : -0.6 }}
              className="brutal-card relative overflow-hidden p-5"
              style={{ backgroundColor: group.color }}
            >
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-28 w-28 rounded-full border-[3px] border-[#2D3142] bg-white/45"
              />
              <div className="relative mb-8 flex items-center justify-between">
                <h3 className="text-xl font-black">{group.category}</h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#2D3142] bg-white text-xs font-black">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="relative flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.08, rotate: skillIndex % 2 ? 2 : -2 }}
                    className="chip"
                    title={skill}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
