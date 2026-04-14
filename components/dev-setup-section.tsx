"use client"

import { Terminal, HardDrive, Wifi } from "lucide-react"

const setupCategories = [
  {
    title: "Editor & Tools",
    icon: Terminal,
    items: [
      { name: "VS Code", detail: "with Vim keybindings" },
      { name: "Docker Desktop", detail: "containerized dev" },
      { name: "Postman", detail: "API testing" },
    ],
  },
  {
    title: "Home Lab Stack",
    icon: HardDrive,
    items: [
      { name: "Raspberry Pi 5", detail: "1-node server" },
      { name: "MinIO", detail: "s3.nikhilkudache.dev", link: "https://s3.nikhilkudache.dev" },
      { name: "Portainer", detail: "docker.nikhilkudache.dev", link: "https://docker.nikhilkudache.dev" },
    ],
  },
  {
    title: "Cloud & Infra",
    icon: Wifi,
    items: [
      { name: "AWS", detail: "primary cloud" },
      { name: "Terraform", detail: "IaC everywhere" },
      { name: "GitHub Actions", detail: "CI/CD pipelines" },
    ],
  },
]

const asciiArt = `
   ____             __  ___          __   
  / __ \\___  _   __/  |/  /___  ____/ /__ 
 / / / / _ \\| | / / /|_/ / __ \\/ __  / _ \\
/ /_/ /  __/| |/ / /  / / /_/ / /_/ /  __/
\\____/\\___/ |___/_/  /_/\\____/\\__,_/\\___/ 
`

export function DevSetupSection() {
  return (
    <section id="setup" className="relative px-6 py-32">
      <div className="absolute left-1/2 top-0 h-px w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-primary">
            ./setup.sh
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            My Dev Environment
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            The tools and setup I use daily to ship code and experiment with new ideas.
          </p>
        </div>

        {/* ASCII Art Easter Egg */}
        <div className="mb-12 flex justify-center">
          <pre className="hidden font-mono text-[8px] leading-none text-primary/30 md:block md:text-[10px]">
            {asciiArt}
          </pre>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {setupCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <category.icon className="h-4 w-4" />
                </div>
                <h3 className="font-mono text-sm font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50" />
                    <div>
                      <span className="text-sm font-medium text-foreground">{item.name}</span>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="ml-1.5 text-xs text-primary hover:underline"
                        >
                          {item.detail}
                        </a>
                      ) : (
                        <span className="ml-1.5 text-xs text-muted-foreground">{item.detail}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Terminal Command */}
        <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card">
          <div className="flex items-center gap-2 border-b border-border bg-secondary/30 px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">zsh</span>
          </div>
          <div className="p-4 font-mono text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-green-500">nikhil@homelab</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-primary">~/projects</span>
              <span className="text-muted-foreground">$</span>
              <span className="text-foreground">neofetch</span>
            </div>
            <div className="mt-3 grid gap-1 text-xs text-muted-foreground md:grid-cols-2">
              <div><span className="text-primary">OS:</span> Ubuntu 22.04</div>
              {/* <div><span className="text-primary">Shell:</span> zsh 5.9</div> */}
              <div><span className="text-primary">Editor:</span> VS Code</div>
              {/* <div><span className="text-primary">Theme:</span> One Dark Pro</div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
