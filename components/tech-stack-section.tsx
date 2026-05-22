"use client"

import { Badge } from "@/components/ui/badge"
import { Code2, Globe, Cloud, ShieldCheck, Wrench } from "lucide-react"
import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { popIn } from "@/lib/animations"

const categories = [
  {
    icon: Code2,
    title: "Languages",
    items: ["Python", "Java", "C++", "JavaScript", "Bash", "SQL", "HTML", "CSS"],
    color: "text-blue-500",
  },
  {
    icon: Globe,
    title: "Web & Databases",
    items: ["React.js", "Node.js", "Next.js", "PostgreSQL", "MySQL", "MongoDB", "REST APIs"],
    color: "text-green-500",
  },
  {
    icon: Cloud,
    title: "Infrastructure & Cloud",
    items: ["Docker", "Kubernetes", "Terraform", "AWS", "Azure", "GCP"],
    color: "text-orange-500",
  },
  {
    icon: ShieldCheck,
    title: "Networking & Security",
    items: ["Palo Alto Panorama", "Prisma (Cortex) Cloud", "Checkov"],
    color: "text-red-500",
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "GitHub", "Jira", "Jenkins", "Linux/Unix", "Postman"],
    color: "text-purple-500",
  },
]

function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const rect = ref.current?.getBoundingClientRect()
    if (rect) {
      const middleX = clientX - (rect.left + rect.width / 2)
      const middleY = clientY - (rect.top + rect.height / 2)
      setPosition({ x: middleX * 0.3, y: middleY * 0.3 })
    }
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}

export function TechStackSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })

  // We have 5 cards. Translate them left based on scroll progress.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"])

  return (
    <section id="skills" ref={containerRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Background Decorative */}
        <div className="absolute left-1/2 top-10 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="absolute top-20 left-6 md:left-24 z-10">
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
            Skills
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Tech Stack
          </h2>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">Keep scrolling to explore the technologies I use to build scalable systems.</p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 pl-6 pt-32 md:pl-[30vw] md:pt-10">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="w-[300px] shrink-0 sm:w-[350px]"
            >
              <div className="group h-full rounded-2xl border border-border bg-card/80 p-8 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 cursor-default">
                <div className="mb-6 flex items-center gap-4">
                  <Magnetic>
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-primary/10 \${cat.color}`}>
                      <cat.icon className="h-7 w-7" />
                    </div>
                  </Magnetic>
                  <h3 className="font-bold text-lg text-foreground">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <motion.div key={item} whileHover={{ scale: 1.05, y: -2 }} className="inline-block">
                      <Badge
                        variant="secondary"
                        className="font-mono text-xs px-2.5 py-1 transition-colors hover:bg-primary/20 hover:text-primary cursor-default"
                      >
                        {item}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
