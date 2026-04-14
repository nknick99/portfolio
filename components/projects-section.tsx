"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Server, Brain, Blocks } from "lucide-react"

type Project = {
  title: string
  description: string
  period: string
  highlights: string[]
  tags: string[]
  languages: string[]
  icon: typeof Server
  github?: string
  live?: string
}

const projects: Project[] = [
  {
    title: "Private Cloud Home Lab",
    description:
      "Self-hosted S3-compatible object storage system for personal cloud infrastructure.",
    period: "Jan 2026 - Present",
    icon: Server,
    highlights: [
      "Designed an S3-compatible object storage system using MinIO and Docker on Raspberry Pi 5",
      "Secured external access using Cloudflare Tunnels, eliminating open ports while maintaining encrypted remote connectivity",
      "Implemented Portainer for container orchestration and real-time resource monitoring of the private cloud cluster",
    ],
    tags: ["MinIO", "Docker", "Cloudflare", "Raspberry Pi 5", "Portainer"],
    languages: ["Infrastructure"],
  },
  {
    title: "AI Academy: Talent Management System",
    description:
      "ML-powered system to predict candidate drop-off during onboarding, helping HR teams reduce attrition risk.",
    period: "Jan 2023 - Mar 2023",
    icon: Brain,
    highlights: [
      "Implemented a machine learning model with 85% accuracy to predict candidate drop-off during onboarding, helping HR teams reduce attrition risk by up to 20%",
      "Engineered end-to-end data pipelines using PySpark and SQL on Oracle DB to process recruitment data",
      "Delivered real-time predictions and recruitment analytics dashboards via Power BI on Azure-hosted infrastructure",
    ],
    tags: ["Python", "PySpark", "SQL", "Azure", "Power BI", "Machine Learning"],
    languages: ["Python"],
  },
  {
    title: "B-Certify: Blockchain Certificate Platform",
    description:
      "A decentralized DApp for secure issuance and verification of digital certificates on Ethereum.",
    period: "Sep 2021 - Jun 2022",
    icon: Blocks,
    highlights: [
      "Built a decentralized DApp using React, Solidity, and MetaMask for secure issuance and verification of 25+ digital certificates on Ethereum blockchain",
      "Containerized the blockchain stack (Truffle, Ganache) using Docker, reducing environment setup time by 70%",
      "Ensured consistent deployment across local and cloud environments",
    ],
    tags: ["React", "Solidity", "Ethereum", "Docker", "Truffle", "Ganache", "MetaMask"],
    languages: ["JavaScript", "Solidity"],
  },
]

const allLanguages = Array.from(
  new Set(projects.flatMap((p) => p.languages))
).sort()

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All")

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.languages.includes(activeFilter))

  return (
    <section id="projects" className="relative px-6 py-32">
      {/* Decorative accent line */}
      <div className="absolute left-1/2 top-0 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
            Projects
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What I{"'"}ve Built
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A selection of projects showcasing my work across infrastructure, ML, and blockchain.
          </p>
        </div>

        {/* Filter bar */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <Button
            size="sm"
            variant={activeFilter === "All" ? "default" : "outline"}
            onClick={() => setActiveFilter("All")}
            className="rounded-full"
          >
            All
          </Button>
          {allLanguages.map((lang) => (
            <Button
              key={lang}
              size="sm"
              variant={activeFilter === lang ? "default" : "outline"}
              onClick={() => setActiveFilter(lang)}
              className="rounded-full"
            >
              {lang}
            </Button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {filtered.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Card header */}
              <div className="border-b border-border bg-secondary/30 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <project.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs text-muted-foreground">
                        {project.period}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repo for ${project.title}`}
                        className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo for ${project.title}`}
                        className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col p-5">
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mb-6 flex-1 space-y-2">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 border-t border-border pt-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="font-mono text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
