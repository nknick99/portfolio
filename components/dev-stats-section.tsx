"use client"

import { ShieldCheck, Briefcase, Zap, Terminal } from "lucide-react"
import { useEffect, useState } from "react"

const stats = [
  { icon: ShieldCheck, label: "High & Critical Vulnerabilities Blocked", value: "100", suffix: "%" },
  { icon: Briefcase, label: "Years Enterprise Exp.", value: "2.5", suffix: "+" },
  { icon: Zap, label: "Manual Effort Saved", value: "20", suffix: " hrs/wk" },
]

const currentlyBuilding = [
  "Private Cloud Infrastructure on Raspberry Pi 5",
  "Clinical Data Pipeline for J&J MedTech",
  "Reducing NX domain queries on root servers at USC ISI",
  "Building Challenge-Based-Refective-Learning initiative with Verizon",
]

export function DevStatsSection() {
  const [buildingIndex, setBuildingIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = currentlyBuilding[buildingIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setBuildingIndex((prev) => (prev + 1) % currentlyBuilding.length)
        }
      }
    }, isDeleting ? 30 : 50)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, buildingIndex])

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Currently Building Ticker */}
        <div className="mb-12 overflow-hidden rounded-lg border border-border bg-card/50 backdrop-blur-sm">
           <div className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:gap-3 md:px-6">
            <div className="flex flex-shrink-0 items-center gap-2 rounded-md bg-green-500/10 px-2.5 py-1 self-start">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="font-mono text-xs font-medium text-green-500">BUILDING</span>
            </div>
            <div className="flex min-w-0 items-center font-mono text-xs text-muted-foreground sm:text-sm">
              <Terminal className="mr-2 h-4 w-4 flex-shrink-0 text-primary" />
              <span className="truncate text-foreground">{displayedText}</span>
              <span className="ml-0.5 flex-shrink-0 animate-pulse text-primary">_</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 md:p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <stat.icon className="h-5 w-5" />
              </div>
              <div className="font-mono text-2xl font-bold text-foreground md:text-3xl">
                {stat.value}{stat.suffix}
              </div>
              <p className="mt-1 text-xs text-muted-foreground md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


