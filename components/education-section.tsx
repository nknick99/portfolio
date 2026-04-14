"use client"

import { Badge } from "@/components/ui/badge"
import { Award, GraduationCap, MapPin, Calendar } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="relative px-6 py-32">
      {/* Decorative accent line */}
      <div className="absolute left-1/2 top-0 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
            Education {"&"} Honors
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Academic Background
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            My formal education spanning computer science fundamentals to advanced systems.
          </p>
        </div>

        {/* Education */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
            <div className="border-b border-border bg-gradient-to-r from-primary/10 to-transparent p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    University of Southern California
                  </h3>
                  <p className="text-sm text-primary">
                    Master of Science in Computer Science
                  </p>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  Aug 2025 - May 2027
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  Los Angeles, CA
                </span>
              </div>
              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Analysis of Algorithms", "Database Systems", "Applied NLP", "Machine Learning for Data Science"].map((course) => (
                    <Badge key={course} variant="secondary" className="font-mono text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
            <div className="border-b border-border bg-gradient-to-r from-primary/10 to-transparent p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Walchand Institute of Technology
                  </h3>
                  <p className="text-sm text-primary">
                    B.Tech in Computer Science (GPA: 3.94/4.0)
                  </p>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  Aug 2018 - Jul 2022
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  Solapur, India
                </span>
              </div>
              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Data Structures", "OS", "DBMS", "OOP", "Software Engineering", "ML", "Cloud Computing", "Distributed Systems"].map((course) => (
                    <Badge key={course} variant="secondary" className="font-mono text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards */}
        <div>
          <h3 className="mb-6 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <Award className="h-4 w-4 text-primary" />
            Awards {"&"} Recognition
          </h3>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40">
            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-500">
                <Award className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-semibold text-foreground">
                    Applause Award
                  </h4>
                  <Badge className="font-mono text-xs">Deloitte</Badge>
                  <span className="font-mono text-xs text-muted-foreground sm:ml-auto">
                    Apr 2025
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Spearheaded Jira Automation Module initiative, leading to a 30% reduction in manual task assignments, resulting in 20 hours saved per week for the cyber infrastructure team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
