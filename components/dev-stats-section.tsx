"use client"

import { ShieldCheck, Briefcase, Zap, Terminal } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useInView } from "framer-motion"
import { staggerContainer, fadeIn } from "@/lib/animations"

const stats = [
  { icon: ShieldCheck, label: "High-Severity Vulnerabilities Prevented", value: "90", suffix: "+" },
  { icon: Briefcase, label: "Years Enterprise Exp.", value: "2.5", suffix: "+" },
  { icon: Zap, label: "Manual Effort Saved", value: "20", suffix: " hrs/wk" },
]

const currentlyBuilding = [
  "Clinical Backend Portal at USC HTI Lab",
  "DNS Resolver Testbed at USC ISI",
  "Home Lab with MinIO + Portainer",
]

function Counter({ value, isDecimal = false }: { value: number; isDecimal?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 80,
  })
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, value, isInView])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        if (isDecimal) {
          ref.current.textContent = (Math.round(latest * 10) / 10).toFixed(1)
        } else {
          ref.current.textContent = Math.round(latest).toString()
        }
      }
    })
  }, [springValue, isDecimal])

  return <span ref={ref}>0</span>
}

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
    <section className="relative px-6 py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Currently Building Ticker */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 overflow-hidden rounded-lg border border-border bg-card/50 backdrop-blur-sm"
        >
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
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeIn}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 md:p-6 shadow-sm"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <stat.icon className="h-5 w-5" />
              </div>
              <div className="font-mono text-2xl font-bold text-foreground md:text-3xl">
                <Counter 
                  value={parseFloat(stat.value)} 
                  isDecimal={stat.value.includes(".")}
                />
                {stat.suffix}
              </div>
              <p className="mt-1 text-xs text-muted-foreground md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


