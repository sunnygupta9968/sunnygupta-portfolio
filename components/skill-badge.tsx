"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  level: number
  logo: string
}

export function SkillBadge({ name, level, logo }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <div className="relative overflow-hidden rounded-lg dark:bg-zinc-800/40 dark:border-zinc-700/50 bg-white/60 border-gray-200/60 backdrop-blur-sm border p-4 transition-all duration-300 dark:hover:border-purple-500/50 hover:border-purple-300/50 h-full flex flex-col">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>

        <div className="relative flex-1 flex flex-col">
          {/* Header with Icon and Name */}
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              className="flex items-center justify-center h-10 w-10 flex-shrink-0"
              whileHover={{ scale: 1.15, rotate: 8 }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
            >
              <img
                src={logo}
                alt={name}
                className="h-10 w-10 object-contain filter drop-shadow-sm"
              />
            </motion.div>
            <h3 className="font-semibold text-sm dark:text-white text-zinc-900 truncate">
              {name}
            </h3>
          </div>

          {/* Progress Bar Section */}
          <div className="flex-1 flex flex-col justify-end">
            <div className="relative h-1.5 w-full dark:bg-zinc-700/50 bg-gray-300/50 rounded-full overflow-hidden mb-2">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
            <div className="text-right text-xs dark:text-zinc-500 text-gray-600 font-medium">
              {level}%
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
