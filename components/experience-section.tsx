"use client"

import { Badge } from "@/components/ui/badge"
import { Building2, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from "@/lib/animations"

type Achievement = {
  problem: string
  built: string
  impact: string
}

type Experience = {
  role: string
  company: string
  location: string
  period: string
  summary: string
  achievements: Achievement[]
  tags: string[]
  type: "work" | "research"
}

const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "USC - Human Technology Interaction Lab",
    location: "Los Angeles, CA",
    period: "Oct 2025 - Present",
    type: "research",
    summary: "Building backend services for clinical research data platform",
    achievements: [
      {
        problem: "Surgeons needed secure medical data handling for wound classification.",
        built: "Next.js API routes + Azure Blob Storage with SAS tokens + GitHub Actions CI/CD.",
        impact: "Enabled surgeons to securely classify clinical images.",
      },
    ],
    tags: ["Next.js", "Azure", "GitHub Actions"],
  },
  {
    role: "Graduate Researcher",
    company: "USC - Information Sciences Institute (ISI)",
    location: "Los Angeles, CA",
    period: "Aug 2025 - Present",
    type: "research",
    summary: "Researching DNS resolver optimization strategies",
    achievements: [
      {
        problem: "Root servers receive unnecessary traffic from negative caching misses.",
        built: "BIND9 recursive resolver testbed with negative caching and local root mirroring.",
        impact: "Designed experiments to measure root server load reduction.",
      },
    ],
    tags: ["DNS", "BIND9", "Network Systems"],
  },
  {
    role: "Analyst - Cloud Infrastructure",
    company: "Deloitte USI",
    location: "Hyderabad, India",
    period: "Jan 2023 - Jul 2025",
    type: "work",
    summary: "Built security automation saving 20 hrs/week for the team",
    achievements: [
      {
        problem: "Manual Jira ticket remediation was costing 20+ hours/week.",
        built: "Python module integrating Jira + Prisma Cloud APIs for auto-remediation.",
        impact: "300+ tickets processed autonomously. 20 hrs/week saved. Applause Award.",
      },
      {
        problem: "Security vulnerabilities were reaching production environments.",
        built: "Integrated Checkov and Prisma Cloud into CI/CD pipelines.",
        impact: "90+ high-severity policies blocked pre-production.",
      },
      {
        problem: "Inconsistent infrastructure configurations across teams.",
        built: "Reusable Terraform modules for compliant resource provisioning.",
        impact: "Standardized deployments across multiple client environments.",
      },
    ],
    tags: ["Python", "AWS", "Terraform", "Prisma Cloud", "Jira API"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative px-6 py-24 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <motion.div 
        className="mx-auto max-w-4xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="mb-16 text-center">
          <motion.p variants={fadeIn} className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
            Experience
          </motion.p>
          <motion.h2 variants={fadeIn} className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Where I{"'"}ve Worked
          </motion.h2>
        </div>

        <div className="relative border-l-2 border-border/50 ml-4 md:ml-8 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div key={exp.role + exp.company} variants={fadeIn} className="relative pl-8 md:pl-12">
              {/* Stepper Dot */}
              <div className="absolute -left-[21px] top-1 flex h-10 w-10 items-center justify-center rounded-full border-4 border-background bg-secondary transition-colors group-hover:bg-primary/20">
                {exp.type === "research" ? (
                  <GraduationCap className="h-4 w-4 text-primary" />
                ) : (
                  <Building2 className="h-4 w-4 text-primary" />
                )}
              </div>

              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <Badge variant={exp.type === "research" ? "default" : "secondary"} className="font-mono text-[10px] uppercase">
                      {exp.type}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium text-primary">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-left md:text-right">
                  <p className="font-mono text-sm text-muted-foreground">{exp.period}</p>
                  <p className="text-xs text-muted-foreground">{exp.location}</p>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-foreground/80 mb-6 leading-relaxed border-l-2 border-primary/30 pl-4">{exp.summary}</p>

              {/* Achievements Grid (Not boxes, just clean text layout) */}
              <div className="space-y-4 mb-6">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="grid md:grid-cols-12 gap-2 md:gap-4 text-sm">
                    <div className="md:col-span-4">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-primary mr-2">Problem:</span>
                      <span className="text-muted-foreground">{achievement.problem}</span>
                    </div>
                    <div className="md:col-span-4">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-primary mr-2">Built:</span>
                      <span className="text-muted-foreground">{achievement.built}</span>
                    </div>
                    <div className="md:col-span-4">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-primary mr-2">Impact:</span>
                      <span className="text-foreground font-medium">{achievement.impact}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="font-mono text-[10px] px-2 py-0.5 bg-secondary/30 hover:bg-primary/10 transition-colors">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
