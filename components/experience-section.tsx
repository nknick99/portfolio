"use client"

import { Badge } from "@/components/ui/badge"
import { Building2, GraduationCap, ChevronDown } from "lucide-react"
import { useState } from "react"

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

function ExperienceCard({ exp }: { exp: Experience }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left"
      >
        <div className="p-4">
          {/* Top row: Icon + Content + Chevron */}
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {exp.type === "research" ? (
                <GraduationCap className="h-5 w-5" />
              ) : (
                <Building2 className="h-5 w-5" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold text-foreground text-sm">{exp.role}</h3>
                <Badge
                  variant={exp.type === "research" ? "default" : "secondary"}
                  className="font-mono text-[10px]"
                >
                  {exp.type === "research" ? "Research" : "Industry"}
                </Badge>
              </div>
              <p className="text-xs text-primary mt-0.5">{exp.company}</p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{exp.summary}</p>
              {/* Date and Location - below summary on mobile */}
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                <span className="font-mono">{exp.period}</span>
                <span className="hidden sm:inline">|</span>
                <span>{exp.location}</span>
              </div>
            </div>
            <ChevronDown 
              className={`h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            />
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className="border-t border-border bg-secondary/20 p-4">
          <div className="space-y-4">
            {exp.achievements.map((achievement, index) => (
              <div key={index} className={index > 0 ? "border-t border-border/50 pt-4" : ""}>
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <p className="font-mono text-xs text-primary mb-1">Problem</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{achievement.problem}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-primary mb-1">Built</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{achievement.built}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-primary mb-1">Impact</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{achievement.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-1">
            {exp.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-mono text-xs px-1.5 py-0">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="relative px-6 py-20">
      <div className="absolute left-1/2 top-0 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
            Experience
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Where I{"'"}ve Worked
          </h2>
          <p className="mt-2 text-xs text-muted-foreground">Click to expand details</p>
        </div>

        <div className="space-y-3">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.role + exp.company} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
