"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open,setOpen]=useState(false);
  const active=useActiveSection(profile.navigation.map(item=>item.href.slice(1)));
  return <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-[#2D3142]/10 bg-[#F8F8F8]/85 backdrop-blur-xl">
    <nav className="container-page flex h-[72px] items-center justify-between" aria-label={profile.site.primaryNav}>
      <a href="#top" className="flex h-11 w-11 items-center justify-center rounded-xl border-[3px] border-[#2D3142] bg-[#F9C74F] text-sm font-black shadow-[3px_3px_0_#2D3142]">{profile.personal.shortName}</a>
      <div className="hidden items-center gap-1 lg:flex">{profile.navigation.map(item=><a key={item.href} href={item.href} className={cn("relative rounded-lg px-3 py-2 text-sm font-bold transition-colors hover:bg-white",active===item.href.slice(1)&&"text-[#5B8CFF]")}>{item.label}{active===item.href.slice(1)&&<motion.span layoutId="active" className="absolute inset-x-3 -bottom-[17px] h-[3px] bg-[#5B8CFF]"/>}</a>)}</div>
      <a href={profile.personal.resume} className="brutal-button nav-resume bg-white text-sm" target="_blank"
  rel="noopener noreferrer">{profile.actions.resume}<ArrowUpRight size={16}/></a>
      <button className="flex h-11 w-11 items-center justify-center rounded-xl border-[3px] border-[#2D3142] bg-white lg:hidden" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label={open?profile.site.menuClose:profile.site.menuOpen}>{open?<X/>:<Menu/>}</button>
    </nav>
    <AnimatePresence>{open&&<motion.div initial={{height:0}} animate={{height:"auto"}} exit={{height:0}} className="overflow-hidden border-t-2 border-[#2D3142] bg-[#F8F8F8] lg:hidden"><div className="container-page flex flex-col gap-2 py-5">{profile.navigation.map(item=><a key={item.href} href={item.href} onClick={()=>setOpen(false)} className="rounded-xl border-2 border-transparent px-4 py-3 text-lg font-black hover:border-[#2D3142] hover:bg-white">{item.label}</a>)}<a href={profile.personal.resume} className="brutal-button mt-2 bg-[#F9C74F]">{profile.actions.resume}<ArrowUpRight size={17}/></a></div></motion.div>}</AnimatePresence>
  </header>;
}
