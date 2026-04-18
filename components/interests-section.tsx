"use client"

import { Server, Database, Cloud, Shield } from "lucide-react"

const explorations = [
  {
    icon: Server,
    title: "Distributed Systems",
    description: "CAP theorem, consensus algorithms, fault tolerance.",
  },
  {
    icon: Database,
    title: "Storage Systems",
    description: "Object storage, caching layers, data replication.",
  },
  {
    icon: Cloud,
    title: "Cloud Reliability",
    description: "High availability, disaster recovery, SRE practices.",
  },
  {
    icon: Shield,
    title: "Security Automation",
    description: "Policy-as-code, IaC scanning, zero-trust architecture.",
  },
]

export function InterestsSection() {
  return (
    <section className="relative px-6 py-20">
      <div className="absolute left-1/2 top-0 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
            Learning
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Currently Exploring
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {explorations.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-1 font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
