"use client"

import { Badge } from "@/components/ui/badge"
import { ExternalLink, Server, Shield, Brain, Database, Link2 } from "lucide-react"

type LiveService = {
  name: string
  url: string
}

type Project = {
  title: string
  icon: typeof Server
  problem: string
  built: string
  impact: string
  tags: string[]
  link?: string
  liveServices?: LiveService[]
}

type AdditionalProject = {
  title: string
  icon: typeof Server
  description: string
  tags: string[]
}

const mainProjects: Project[] = [
  {
    title: "USC - JnJ MedTech Portal",
    icon: Database,
    problem: "Researchers needed secure medical data handling for wound classification research.",
    built: "Next.js API routes + Azure Blob Storage with SAS tokens + GitHub Actions CI/CD.",
    impact: "Enabled surgeons to securely access and classify clinical images for J&J MedTech research.",
    tags: ["Next.js", "Azure", "GitHub Actions"],
  },
  {
    title: "Deloitte Security Automation",
    icon: Shield,
    problem: "Manual Jira ticket remediation was eating 20+ hours/week.",
    built: "Python module integrating Jira + Prisma Cloud APIs for auto-remediation.",
    impact: "90+ High-Severity issues prevented pre-production. 20 hrs/week saved.",
    tags: ["Python", "Jira API", "Prisma Cloud", "Checkov"],
  },
  {
    title: "Home Lab Infrastructure",
    icon: Server,
    problem: "Wanted private cloud storage without relying on third-party services.",
    built: "MinIO + Docker + Cloudflare Tunnels on Raspberry Pi 5. Portainer for container management.",
    impact: "Self-hosted S3-compatible storage with secure remote access.",
    tags: ["MinIO", "Docker", "Cloudflare", "Raspberry Pi"],
    liveServices: [
      { name: "MinIO", url: "https://s3.nikhilkudache.dev" },
      { name: "Portainer", url: "https://docker.nikhilkudache.dev" },
    ],
  },
]

const additionalProjects: AdditionalProject[] = [
  {
    title: "AI Academy - Talent Management",
    icon: Brain,
    description: "ML model predicting candidate attrition with 85% accuracy using PySpark and Power BI dashboards.",
    tags: ["Python", "PySpark", "SQL", "Azure", "Power BI"],
  },
  {
    title: "B-Certify: Blockchain Certificates",
    icon: Link2,
    description: "Decentralized DApp for tamper-proof certificate verification on Ethereum.",
    tags: ["React", "Solidity", "Ethereum", "Docker"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative px-6 py-20">
      <div className="absolute left-1/2 top-0 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What I Built
          </h2>
        </div>

        {/* Main Projects */}
        <div className="grid gap-6 md:grid-cols-3">
          {mainProjects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="border-b border-border bg-secondary/30 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <project.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <div className="mb-4 space-y-2.5 flex-1">
                  <div>
                     <p className="font-mono text-xs text-primary mb-0.5">Problem</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-primary mb-0.5">Built</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{project.built}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-primary mb-0.5">Impact</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{project.impact}</p>
                  </div>
                </div>
                {/* Live Services */}
                {project.liveServices && project.liveServices.length > 0 && (
                  <div className="mb-3 border-t border-border pt-3">
                    <p className="font-mono text-xs text-primary mb-2">Live Services</p>
                    <div className="flex flex-wrap gap-2">
                      {project.liveServices.map((service) => (
                        <a
                          key={service.name}
                          href={service.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-all hover:border-primary/40 hover:bg-secondary hover:text-foreground"
                        >
                          {service.name}
                          <ExternalLink className="h-2.5 w-2.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex flex-wrap gap-1 border-t border-border pt-3">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="font-mono text-xs px-1.5 py-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Additional Projects */}
        <div className="mt-8">
          <p className="mb-4 font-mono text-xs text-muted-foreground text-center">Other Projects</p>
          <div className="grid gap-4 md:grid-cols-2">
            {additionalProjects.map((project) => (
              <div
                key={project.title}
                className="flex items-start gap-3 rounded-lg border border-border bg-card/50 p-4 transition-all hover:border-primary/30"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <project.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium text-foreground text-sm">{project.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-mono text-xs px-1.5 py-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
