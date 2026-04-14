"use client"

import { Badge } from "@/components/ui/badge"
import { Briefcase, Building2, GraduationCap } from "lucide-react"

type Experience = {
  role: string
  company: string
  location: string
  period: string
  highlights: string[]
  tags: string[]
  type: "work" | "research"
}

const experiences: Experience[] = [
  {
    role: "Lead Research Engineer (Data Systems)",
    company: "University of Southern California - Human Technology Interaction Lab",
    location: "Los Angeles, CA",
    period: "Oct 2025 - Present",
    type: "research",
    highlights: [
      "Architected the dataflow infrastructure for J&J MedTech research initiative, building a secure clinical portal to assist surgeons with wound classification using Azure Blob Storage and Azure ML Studio",
      "Leading backend and cloud development for the $1M IYA-Verizon Learning Innovation Research Initiative, architecting a database backend for Challenge-Based Reflective Learning (CBRL) model",
      "Implemented Azure Function to generate delegated, short-lived SAS tokens for controlled access to private Blob Storage integrated with WordPress CMS",
      "Designing secure cloud architecture to enforce data isolation and RBAC controls aligned with data protection guidelines",
    ],
    tags: ["Azure", "Azure ML Studio", "Blob Storage", "WordPress"],
  },
  {
    role: "Graduate Researcher (Network Systems)",
    company: "University of Southern California - Information Sciences Institute (ISI)",
    location: "Los Angeles, CA",
    period: "Aug 2025 - Present",
    type: "research",
    highlights: [
      "Configured a BIND9 recursive resolver testbed to simulate DNS query chains, researching configuration strategies to filter invalid TLD queries (NXDOMAIN) locally",
      "Evaluating the efficacy of negative caching parameters and local root mirroring (Hyperlocal) to stop junk traffic at the edge",
      "Optimizing resolver latency and reducing upstream query volume to Root Servers",
    ],
    tags: ["DNS", "BIND9", "Network Systems", "Research"],
  },
  {
    role: "Analyst",
    company: "Deloitte USI",
    location: "Hyderabad, India",
    period: "Jan 2023 - Jul 2025",
    type: "work",
    highlights: [
      "Engineered a Python automation module integrating Jira and Prisma Cloud APIs to automatically remediate stale tickets for resolved alerts, processing 300+ tickets autonomously and reducing manual operations by 20 hours/week",
      "Developed Terraform modules for AWS services pre-configured to comply with Prisma (Cortex) Cloud security policies, eliminating build-time blocks and ensuring seamless, compliant deployments",
      "Secured Kubernetes clusters by integrating vulnerability scanning into CI/CD pipelines, preventing 100% of high-severity violations",
      "Utilized Prisma Cloud API to automate batch acknowledgment of hundreds of alerts, streamlining incident management workflows",
      "Managed firewall policies using Palo Alto Panorama during a financial firm demerger, maintaining zero downtime across 50+ applications",
      "Researched and analyzed the impact of Agentic AI on cyber operations, assessing security risks for enterprise services",
    ],
    tags: ["Python", "AWS", "Terraform", "Kubernetes", "Jira", "Prisma Cloud", "Palo Alto"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative px-6 py-32">
      {/* Decorative accent line */}
      <div className="absolute left-1/2 top-0 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
            Experience
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Where I{"'"}ve Worked
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From enterprise consulting to academic research, here{"'"}s my professional journey.
          </p>
        </div>

        <div className="relative space-y-6">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-border to-transparent md:block" />

          {experiences.map((exp, index) => (
            <div key={exp.role + exp.company} className="relative md:pl-16">
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background md:flex">
                {exp.type === "research" ? (
                  <GraduationCap className="h-5 w-5 text-primary" />
                ) : (
                  <Building2 className="h-5 w-5 text-primary" />
                )}
              </div>

              <div className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                {/* Card header */}
                 <div className="flex flex-col gap-3 border-b border-border bg-secondary/30 p-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold text-foreground sm:text-lg">
                        {exp.role}
                      </h3>
                      <Badge variant={exp.type === "research" ? "default" : "secondary"} className="font-mono text-xs">
                        {exp.type === "research" ? "Research" : "Industry"}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground sm:gap-3 sm:text-sm">
                    <span className="font-mono">{exp.period}</span>
                    <span className="h-4 w-px bg-border" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <ul className="mb-4 space-y-2">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 border-t border-border pt-4">
                    {exp.tags.map((tag) => (
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
