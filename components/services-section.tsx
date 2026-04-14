"use client"

import { Cloud, Shield, Server, Database, Code2, Cpu } from "lucide-react"

const services = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description:
      "Designing secure, scalable cloud infrastructure on AWS and Azure with Terraform-based IaC.",
    tags: ["AWS", "Azure", "Terraform", "IaC"],
  },
  {
    icon: Shield,
    title: "Security Engineering",
    description:
      "Integrating security into CI/CD pipelines, managing Prisma Cloud policies, and hardening Kubernetes clusters.",
    tags: ["Prisma Cloud", "Kubernetes", "DevSecOps"],
  },
  {
    icon: Server,
    title: "Infrastructure Automation",
    description:
      "Building Python-based automation modules that integrate with APIs to eliminate manual operations.",
    tags: ["Python", "REST APIs", "Jira", "Automation"],
  },
  {
    icon: Database,
    title: "Data Systems",
    description:
      "Architecting data pipelines, database backends, and storage solutions for research and enterprise.",
    tags: ["PostgreSQL", "Azure ML", "PySpark"],
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building web applications with React, Node.js, and modern frameworks from concept to deployment.",
    tags: ["React", "Node.js", "GraphQL", "REST"],
  },
  {
    icon: Cpu,
    title: "Home Lab & Self-Hosting",
    description:
      "Running private cloud infrastructure with MinIO, Docker, and Cloudflare Tunnels on Raspberry Pi.",
    tags: ["Docker", "MinIO", "Cloudflare", "Raspberry Pi"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative px-6 py-32">
      {/* Decorative accent line */}
      <div className="absolute left-1/2 top-0 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
            Services
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What I Can Do For You
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From cloud architecture to automation pipelines, I bring hands-on experience across the full stack of modern infrastructure.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
