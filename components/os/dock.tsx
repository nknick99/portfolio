"use client"

import { motion } from "framer-motion"
import { Terminal, Folder, Globe, Settings, Mail, Github, Linkedin, Server } from "lucide-react"

export type AppId = "about" | "experience" | "projects" | "skills" | "homelab" | "contact"

interface DockProps {
  openApps: string[]
  activeApp: string | null
  onLaunchApp: (id: AppId) => void
}

export const DOCK_APPS = [
  { id: "about", icon: Terminal, name: "Terminal", color: "bg-gray-800 text-green-400" },
  { id: "experience", icon: Folder, name: "Finder", color: "bg-blue-500 text-white" },
  { id: "projects", icon: Globe, name: "Safari", color: "bg-blue-400 text-white" },
  { id: "skills", icon: Settings, name: "Settings", color: "bg-slate-600 text-white" },
  { id: "homelab", icon: Server, name: "Home Lab", color: "bg-purple-500 text-white" },
  { id: "contact", icon: Mail, name: "Mail", color: "bg-sky-500 text-white" },
]

export function Dock({ openApps, activeApp, onLaunchApp }: DockProps) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999]">
      <div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-white/10 p-2 backdrop-blur-xl shadow-2xl">
        {DOCK_APPS.map((app) => {
          const isOpen = openApps.includes(app.id)
          const isActive = activeApp === app.id

          return (
            <div key={app.id} className="group relative flex flex-col items-center">
              {/* Tooltip */}
              <div className="absolute -top-10 hidden whitespace-nowrap rounded-md bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-md group-hover:block">
                {app.name}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.3, y: -10 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                onClick={() => onLaunchApp(app.id as AppId)}
                className={`relative flex h-12 w-12 items-center justify-center rounded-xl shadow-lg transition-colors \${app.color} \${isActive ? 'ring-2 ring-white/50' : ''}`}
              >
                <app.icon className="h-6 w-6" />
              </motion.button>
              
              {/* Active Indicator */}
              <div className={`mt-1 h-1 w-1 rounded-full \${isOpen ? 'bg-white/80' : 'bg-transparent'}`} />
            </div>
          )
        })}

        <div className="mx-1 h-10 w-px bg-white/20" />

        {/* External Links */}
        <div className="group relative flex flex-col items-center">
          <div className="absolute -top-10 hidden whitespace-nowrap rounded-md bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-md group-hover:block">
            GitHub
          </div>
          <motion.a
            href="https://github.com/nknick99"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, y: -10 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-white shadow-lg"
          >
            <Github className="h-6 w-6" />
          </motion.a>
          <div className="mt-1 h-1 w-1 rounded-full bg-transparent" />
        </div>

        <div className="group relative flex flex-col items-center">
          <div className="absolute -top-10 hidden whitespace-nowrap rounded-md bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-md group-hover:block">
            LinkedIn
          </div>
          <motion.a
            href="https://www.linkedin.com/in/nikhilkudache/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, y: -10 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg"
          >
            <Linkedin className="h-6 w-6" />
          </motion.a>
          <div className="mt-1 h-1 w-1 rounded-full bg-transparent" />
        </div>

      </div>
    </div>
  )
}
