"use client"

import { Server, Shield, Microscope, Database, Rocket, BookOpen } from "lucide-react"

const interests = [
  {
    icon: Server,
    title: "Home Lab Enthusiast",
    description: "Running a Raspberry Pi 5 server with MinIO, Docker, and Cloudflare Tunnels. Always experimenting with self-hosted alternatives.",
    tags: ["Raspberry Pi", "Docker", "MinIO"],
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Shield,
    title: "Cloud Security Nerd",
    description: "Passionate about IaC security scanning, Prisma Cloud, and building secure-by-default infrastructure.",
    tags: ["Terraform", "Checkov", "Zero Trust"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Microscope,
    title: "Research Driven",
    description: "Currently working on reducing NX queries on root servers at USC ISI and clinical data systems at HTI Lab. Love bridging academia and industry.",
    tags: ["USC ISI", "HTI Lab", "Data Systems"],
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Database,
    title: "Data Pipeline Architect",
    description: "Fascinated by how data flows through systems. From PySpark ETL jobs to real-time streaming, I love making data accessible.",
    tags: ["PySpark", "ETL", "Data Lakes"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Rocket,
    title: "System Design Obsessed",
    description: "Can talk for hours about CAP theorem, and why distributed systems are both beautiful and terrifying.",
    tags: ["Distributed Systems", "Scalability"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: BookOpen,
    title: "Continuous Learner",
    description: "Always reading about new tech. Currently diving deep into advanced Kubernetes patterns, cloud security, and infrastructure automation.",
    tags: ["K8s", "Cloud Security", "IaC"],
    color: "from-yellow-500 to-amber-500",
  },
]

export function InterestsSection() {
  return (
    <section className="relative px-6 py-32">
      <div className="absolute left-1/2 top-0 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
            {"// What I'm Passionate About"}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Beyond the Resume
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            The technical obsessions and curiosities that drive me to keep building and learning.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {interests.map((interest, index) => (
            <div
              key={interest.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Gradient top bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${interest.color}`} />
              
              <div className="p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${interest.color} text-white transition-transform group-hover:scale-110`}>
                    <interest.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {interest.title}
                  </h3>
                </div>
                
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {interest.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  {interest.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
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
