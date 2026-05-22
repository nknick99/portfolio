"use client"

import { Badge } from "@/components/ui/badge"
import { ExternalLink, Server, Shield, Brain, Database, Link2 } from "lucide-react"
import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from "@/lib/animations"

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
    title: "USC - J&J MedTech Portal",
    icon: Database,
    problem: "Surgeons needed secure medical data handling for wound classification.",
    built: "Next.js API routes + Azure Blob Storage with SAS tokens + GitHub Actions CI/CD.",
    impact: "Enabled surgeons to securely access and classify clinical images for J&J MedTech research.",
    tags: ["Next.js", "Azure", "GitHub Actions"],
  },
  {
    title: "Deloitte Security Automation",
    icon: Shield,
    problem: "Manual Jira ticket remediation was eating 20+ hours/week.",
    built: "Python module integrating Jira + Prisma Cloud APIs for auto-remediation.",
    impact: "300+ security alerts auto-remediated. 20 hrs/week of manual effort eliminated.",
    tags: ["Python", "Jira API", "Prisma Cloud", "Checkov"],
  },
  {
    title: "Home Lab Infrastructure",
    icon: Server,
    problem: "Built private cloud storage to better understand how real cloud systems work underneath.",
    built: "Deployed MinIO and Portainer with Docker and Cloudflare Tunnels on Raspberry Pi 5.",
    impact: "Created a self-hosted S3-compatible platform with secure remote access and hands-on infrastructure experience.",
    tags: ["MinIO", "Portainer", "Docker", "Cloudflare", "Raspberry Pi"],
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
    <section id="projects" className="relative px-6 py-24 overflow-hidden bg-secondary/10">
      <div className="absolute left-1/2 top-0 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <motion.div 
        className="mx-auto max-w-5xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="mb-20 text-center">
          <motion.p variants={fadeIn} className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
            Portfolio
          </motion.p>
          <motion.h2 variants={fadeIn} className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What I Built
          </motion.h2>
        </div>

        {/* Main Projects Alternating Layout */}
        <div className="space-y-24">
          {mainProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={project.title} 
                variants={fadeIn}
                className={`flex flex-col gap-8 md:gap-12 md:flex-row \${isEven ? "" : "md:flex-row-reverse"}`}
              >
                {/* Left side: Title and Impact */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <project.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="relative border-l-2 border-primary/20 pl-4 py-1 my-4 text-foreground/90 font-medium text-lg leading-relaxed">
                    {project.impact}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="font-mono text-[10px] px-2 py-0.5 transition-colors hover:bg-primary/20 hover:text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Right side: Problem/Built details */}
                <div className="flex-1">
                  <div className="rounded-3xl bg-card border border-border/50 p-6 md:p-8 shadow-sm h-full flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
                          <span className="h-px w-4 bg-primary/50"></span> The Problem
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
                          <span className="h-px w-4 bg-primary/50"></span> What I Built
                        </p>
                        <p className="text-sm text-foreground/80 leading-relaxed">{project.built}</p>
                      </div>

                      {project.liveServices && project.liveServices.length > 0 && (
                        <div className="pt-6 mt-6 border-t border-border/30">
                          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Live Deployments</p>
                          <div className="flex flex-wrap gap-3">
                            {project.liveServices.map((service) => (
                              <a
                                key={service.name}
                                href={service.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                              >
                                {service.name}
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Projects - Clean List */}
        <motion.div className="mt-32 border-t border-border/50 pt-16" variants={fadeIn}>
          <p className="mb-10 font-mono text-sm text-muted-foreground text-center uppercase tracking-widest">Other Technical Builds</p>
          <div className="grid gap-6 md:grid-cols-2">
            {additionalProjects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ x: 5 }}
                className="group flex items-start gap-4 p-4 transition-all"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary/20">
                  <project.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-base group-hover:text-primary transition-colors">{project.title}</h4>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-mono text-[9px] px-1.5 py-0 bg-transparent border-border/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
