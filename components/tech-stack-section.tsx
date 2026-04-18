"use client"

import { Badge } from "@/components/ui/badge"
import { Code2, Globe, Cloud, ShieldCheck, Wrench } from "lucide-react"

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

export function TechStackSection() {
  return (
    <section id="skills" className="relative px-6 py-20">
      {/* Decorative accent line */}
      <div className="absolute left-1/2 top-0 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
            Skills
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Tech Stack
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-secondary ${cat.color}`}>
                  <cat.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="font-mono text-xs transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
