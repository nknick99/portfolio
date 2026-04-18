"use client"

import { Briefcase, Wrench, CheckCircle } from "lucide-react"

const reasons = [
  {
    icon: Briefcase,
    title: "Real Experience",
    description:
      "2.5 years at Deloitte building production systems. Not just coursework.",
  },
  {
    icon: Wrench,
    title: "Systems Builder",
    description:
      "I build infrastructure: cloud, automation, pipelines. I ship things that work.",
  },
  {
    icon: CheckCircle,
    title: "Ownership",
    description:
      "I take projects end-to-end. From design to deployment to maintenance.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative px-6 py-20">
      <div className="absolute left-1/2 top-0 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
            Why Me
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What I Bring
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
