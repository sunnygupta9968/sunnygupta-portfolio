"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Github, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";

type Project = (typeof profile.projects)[number];

export function Projects() {
  const reduce = Boolean(useReducedMotion());
  const section = profile.sections.projects;

  return (
    <section
      id="projects"
      className="projects-grid section-space relative overflow-hidden border-y-[3px] border-[#2D3142] bg-[#22223B] text-white"
    >
      <span aria-hidden className="absolute -left-10 top-44 h-24 w-24 rotate-12 rounded-[24px] border-[3px] border-[#F9C74F]/35" />
      <span aria-hidden className="absolute -right-10 bottom-24 h-28 w-28 rotate-45 border-[3px] border-[#69D2FF]/25" />

      <div className="container-page relative min-w-0">
        <SectionHeading {...section} dark />

        <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
          <p className="eyebrow text-[#F9C74F]">Selected work / 2024 - 26</p>
          <span className="font-mono text-xs font-bold text-white/55">[ BUILD_LOG: 03 PROJECTS ]</span>
        </div>

        <div className="grid min-w-0 grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          {profile.projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              reduce={reduce}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, reduce, featured }: { project: Project; index: number; reduce: boolean; featured: boolean }) {
  const destination = project.live || project.github || profile.socials.github;
  const wide = index === 2;

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: .45, delay: index * .06 }}
      className={`project-card group relative flex h-full w-full min-w-0 max-w-full flex-col overflow-hidden rounded-[22px] border-[3px] border-white bg-[#F8F8F8] text-[#22223B] shadow-[7px_7px_0_#5B8CFF] ${wide ? "md:col-span-2 md:grid md:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] md:grid-rows-[auto_1fr]" : ""}`}
    >
      <header className={`flex min-w-0 items-start justify-between gap-4 ${featured ? "p-5 lg:p-6" : "p-4 lg:p-5"} ${wide ? "md:col-start-2 md:row-start-1" : ""}`}>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border-2 border-[#2D3142] bg-[#F9C74F] px-3 py-1 text-[10px] font-black uppercase tracking-wider">
              {project.category}
            </span>
            <span className="font-mono text-[10px] font-black uppercase tracking-[.18em] text-[#5B8CFF]">CASE_0{index + 1}</span>
          </div>
          <h3 className={`break-words font-black leading-none ${featured ? "mt-4 text-3xl lg:text-4xl" : "mt-3 text-2xl"}`}>
            {project.title}
          </h3>
        </div>
        <a
          href={destination}
          target="_blank"
          rel="noreferrer"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-[3px] border-[#2D3142] bg-[#F9C74F] transition-transform group-hover:rotate-12"
          aria-label={`Open ${project.title}`}
        >
          <Sparkles size={18} aria-hidden />
        </a>
      </header>

      <div className={`relative w-full max-w-full overflow-hidden border-y-[3px] border-[#2D3142] bg-[#69D2FF] ${featured ? "aspect-[16/10]" : "aspect-[16/7]"} ${wide ? "md:col-start-1 md:row-span-2 md:row-start-1 md:aspect-auto md:border-y-0 md:border-r-[3px]" : ""}`}>
        <Image
          src={project.image}
          alt={`${profile.site.projectImageAlt} ${project.title}`}
          fill
          priority={index === 0}
          sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.035]"
        />
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-[#22223B]/95 px-4 py-3 text-white transition-transform duration-300 motion-reduce:transition-none group-hover:translate-y-0 group-focus-within:translate-y-0">
          <p className="font-mono text-[10px] font-black uppercase tracking-[.16em]">Preview / {project.title}</p>
        </div>
      </div>

      <div className={`flex min-w-0 flex-1 flex-col ${featured ? "p-5 lg:p-6" : "p-4 lg:p-5"} ${wide ? "md:col-start-2 md:row-start-2" : ""}`}>
        <p className="text-sm font-semibold leading-relaxed text-[#5b5c70]">{project.description}</p>

        <div className="mt-5 grid min-w-0 gap-2">
          {project.highlights.map((highlight) => (
            <div key={highlight} className="flex min-w-0 items-center gap-3 rounded-xl border-2 border-[#2D3142] bg-white px-3 py-2.5 transition-transform duration-300 group-hover:-translate-y-0.5">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#1DD1A1] ring-2 ring-[#2D3142]">
                <Check size={12} strokeWidth={4} aria-hidden />
              </span>
              <span className="min-w-0 break-words text-[11px] font-black leading-tight">{highlight}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto min-w-0 pt-5">
          <p className="mb-2 font-mono text-[9px] font-black uppercase tracking-[.16em] text-[#5B8CFF]">Stack</p>
          <div className="flex min-w-0 flex-1 flex-wrap gap-1.5" aria-label={`Technologies: ${project.technologies.join(", ")}`}>
            {project.technologies.map((tech) => (
              <span key={tech} className="max-w-full break-words rounded-full border-2 border-[#2D3142] bg-[#69D2FF] px-2 py-1 text-[9px] font-black">
                {tech}
              </span>
            ))}
          </div>
          <a
            href={destination}
            target="_blank"
            rel="noreferrer"
            className="brutal-button mt-5 min-h-11 shrink-0 bg-[#F9C74F] px-3 py-2 text-xs"
            aria-label={`Visit ${project.title}`}
          >
            {project.github ? <Github size={15} aria-hidden /> : null}
            Visit project
            <ArrowUpRight size={15} aria-hidden />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
