"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-semibold text-foreground">Nikhil Kudache</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Building secure, scalable systems.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/nknick99"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nikhilkudache/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:kudache@usc.edu"
              aria-label="Email"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            Designed {"&"} built with Next.js, Tailwind CSS, and a slightly overheated Raspberry Pi 5.
          </p>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            {currentYear} Nikhil Kudache. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
