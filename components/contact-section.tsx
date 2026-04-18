"use client"

import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-20">
      {/* Decorative accent line */}
      <div className="absolute left-1/2 top-0 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Let{"'"}s Build Something Together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            I{"'"}m currently looking for SOftware Engineer Intern opportunities where I can contribute to building scalable systems and infrastructure. My inbox is always open.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact info card */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Contact Info
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:kudache@usc.edu"
                className="flex items-center gap-3 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium text-foreground">kudache@usc.edu</p>
                </div>
              </a>
              <a
                href="tel:+12138629670"
                className="flex items-center gap-3 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium text-foreground">(213) 862-9670</p>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-lg p-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-medium text-foreground">Los Angeles, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social links card */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Connect With Me
            </h3>
            <div className="space-y-3">
              <a
                href="https://github.com/nknick99"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border p-4 transition-all hover:border-primary/40 hover:bg-secondary"
              >
                <Github className="h-5 w-5 text-foreground" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">GitHub</p>
                  <p className="text-xs text-muted-foreground">github.com/nknick99</p>
                </div>
                <span className="text-xs text-muted-foreground">View Profile</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nikhilkudache/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border p-4 transition-all hover:border-primary/40 hover:bg-secondary"
              >
                <Linkedin className="h-5 w-5 text-foreground" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">LinkedIn</p>
                  <p className="text-xs text-muted-foreground">linkedin.com/in/nikhilkudache</p>
                </div>
                <span className="text-xs text-muted-foreground">Connect</span>
              </a>
            </div>
            <div className="mt-6">
              <Button asChild size="lg" className="w-full">
                <a href="mailto:kudache@usc.edu">
                  <Send className="mr-2 h-4 w-4" />
                  Send Me a Message
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
