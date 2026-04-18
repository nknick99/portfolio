"use client"

import { Github, Linkedin, Mail, FileText, ArrowDown, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const codeSnippet = `nikhil = {
    "role": "Software Engineer",
    "education": "MSCS @ USC",
    "experience": "2.5 yrs @ Deloitte",
    "strengths": ["Systems", "Backend", "Cloud"],
    "seeking": "Summer 2026 Internships"
}`

export function HeroSection() {
  const [displayedCode, setDisplayedCode] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < codeSnippet.length) {
        setDisplayedCode(codeSnippet.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
      }
    }, 25)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20"
    >
      {/* Animated gradient orb */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
      
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Terminal-style code block */}
        <div className="mx-auto mb-10 w-full max-w-2xl overflow-hidden rounded-lg border border-border bg-card/80 backdrop-blur-sm">
          <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">about.py</span>
          </div>
          <div className="overflow-hidden">
              <pre className="whitespace-pre-wrap break-all p-4 font-mono text-xs leading-relaxed text-foreground sm:whitespace-pre sm:break-normal sm:text-sm">
              <code className="block">
                {displayedCode}
                <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-primary`}>|</span>
              </code>
            </pre>
          </div>
        </div>

        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            Los Angeles, CA
            <span className="mx-2 h-4 w-px bg-border" />
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Open to SDE roles
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Hi, I{"'"}m{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Nikhil Kudache
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Building {" "}
            <span className="font-medium text-foreground">backend systems</span>,{" "}
            <span className="font-medium text-foreground">full-stack applications</span>, and{" "}
            <span className="font-medium text-foreground">cloud infrastructure</span> that solve real problems. 
             Currently pursuing my MSCS at USC and developing research platforms.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="group">
              <a href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-1">
            <a
              href="https://github.com/nknick99"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg p-3 text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nikhilkudache/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg p-3 text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:kudache@usc.edu"
              aria-label="Email"
              className="rounded-lg p-3 text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://drive.google.com/file/d/1hL8gGigZfIz_dytGitAYVKFSxq96-9pN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="rounded-lg p-3 text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
            >
              <FileText className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile to prevent overlap with social icons */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  )
}
