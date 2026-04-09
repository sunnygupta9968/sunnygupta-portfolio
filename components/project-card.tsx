"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  demoUrl: string
  repoUrl: string
}

export function ProjectCard({ title, description, tags, image, demoUrl, repoUrl }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="relative h-full overflow-hidden rounded-xl dark:bg-zinc-800/50 dark:border-zinc-700/50 bg-white/50 border-gray-200/50 backdrop-blur-sm border transition-all duration-300 dark:hover:border-purple-500/50 hover:border-purple-300/50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative h-full flex flex-col">
          <div className="relative overflow-hidden h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
            />
          </div>

          <div className="p-6 flex-grow">
            <h3 className="text-xl font-bold mb-2 dark:text-white text-zinc-900">{title}</h3>
            <p className="dark:text-zinc-400 text-gray-600 mb-4">{description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="dark:bg-zinc-700/50 dark:hover:bg-zinc-700 dark:text-zinc-300 bg-gray-200/50 hover:bg-gray-300 text-gray-700">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex justify-between mt-auto pt-4 dark:border-zinc-700/50 border-gray-300/50 border-t">
              <Button variant="ghost" size="sm" className="dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-700/50 text-gray-700 hover:text-zinc-900 hover:bg-gray-300/50" asChild>
                <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0"
                asChild
              >
                <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="absolute top-3 right-3 z-20">
            <div
              className={`w-3 h-3 rounded-full ${isHovered ? "bg-green-500" : "dark:bg-zinc-500 bg-gray-400"} transition-colors duration-300`}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
