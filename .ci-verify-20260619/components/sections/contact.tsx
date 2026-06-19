"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Mail,
  Phone,
} from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { getSocialPlatform, socialIcons, socialLabels } from "@/components/social-icons";

export function Contact() {
  const reduce = useReducedMotion();
  const section = profile.sections.contact;

  return (
    <section id="contact" className="section-space">
      <div className="container-page">
        <SectionHeading {...section} />

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="brutal-card relative overflow-hidden bg-[#5B8CFF] p-7 md:p-12"
        >
          <div
            aria-hidden
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[3px] border-[#2D3142] bg-[#F9C74F]"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">
                {profile.personal.headline}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  className="brutal-button bg-[#F9C74F]"
                  href={`mailto:${profile.personal.email}`}
                >
                  <Mail size={18} />
                  {profile.actions.email}
                </a>
                <a
                  className="brutal-button bg-white"
                  href={`tel:${profile.personal.phone.replace(/\s/g, "")}`}
                >
                  <Phone size={18} />
                  {profile.actions.call}
                </a>
              </div>
              <div className="mt-7 space-y-2 text-sm font-black text-white">
                <p>{profile.personal.email}</p>
                <p>{profile.personal.phone}</p>
              </div>
            </div>

            <div>
              <a className="brutal-button w-full bg-[#1DD1A1]" href={profile.personal.resume}>
                <Download size={18} />
                {profile.actions.resume}
              </a>
              <nav
                aria-label={profile.site.socialNav}
                className="mt-5 flex flex-wrap justify-center gap-2"
              >
                {Object.entries(profile.socials)
                  .filter(([, url]) => Boolean(url))
                  .flatMap(([key, url]) => {
                    const platform = getSocialPlatform(key);
                    if (!platform) return [];
                    const Icon = socialIcons[platform];
                    return (
                      <a
                        className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#2D3142] bg-white transition-transform hover:-translate-y-1"
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={socialLabels[platform]}
                        title={socialLabels[platform]}
                        key={key}
                      >
                        <Icon size={19} aria-hidden />
                      </a>
                    );
                  })}
              </nav>
            </div>
          </div>
          <ArrowUpRight
            aria-hidden
            className="absolute bottom-5 right-5 hidden text-white/20 md:block"
            size={110}
          />
        </motion.div>
      </div>
    </section>
  );
}
