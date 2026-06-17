# os.nikhilkudache.dev — macOS-Inspired Portfolio

A fully interactive portfolio website designed as a macOS desktop environment. Instead of scrolling through sections, visitors interact with draggable windows, a dock, a menu bar, and Spotlight search — just like using a Mac.

**Live:** [os.nikhilkudache.dev](https://os.nikhilkudache.dev)

---

## Overview

The entire site is a single-page macOS simulation. On load, a boot sequence plays before revealing a desktop with a dock, a top menu bar with real-time clock and control center, and application windows containing portfolio content.

Each "app" maps to a portfolio section:

| App | Window Title | Content |
|-----|-------------|---------|
| Terminal | `about.py` | Bio and quick-view JSON profile |
| Finder | Experience | Work history, certifications, and awards |
| Safari | Projects | Project showcase with problem/solution format |
| Settings | Capabilities | Tech stack and skill categories |
| Home Lab | Network | Self-hosted infrastructure details |
| Mail | Contact | Contact form and social links |

## Features

- **macOS Window Manager** — Draggable, resizable windows with traffic-light controls (close, minimize, maximize) and focus/z-index management
- **Dock** — Animated dock with spring physics, hover magnification, tooltips, and active-app indicators
- **Menu Bar** — Apple-style top bar with app-specific menus, clock, Wi-Fi/battery indicators, and a control center dropdown
- **Spotlight Search** — `Cmd+K` opens a fuzzy-search overlay to jump between apps
- **Boot Sequence** — Simulated startup animation before desktop reveal
- **Responsive** — Windows auto-maximize on mobile; dock and menu bar adapt to smaller screens
- **Dark Mode** — Native dark theme matching macOS aesthetics

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| UI Primitives | Radix UI + shadcn/ui |
| Runtime | Docker (Multi-stage, Node 20 Alpine) |
| Hosting | Raspberry Pi 5 (ARM64) |
| Networking | Cloudflare Zero-Trust Tunnel |
| Orchestration | Portainer CE |

## Project Structure

```
├── app/                    # Next.js App Router (single page)
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Renders <Desktop />
├── components/
│   ├── os/                 # macOS simulation layer
│   │   ├── desktop.tsx     # Desktop environment, menu bar, Spotlight
│   │   ├── dock.tsx        # Animated dock with app launchers
│   │   ├── window.tsx      # Draggable window component
│   │   └── apps/           # Individual app content
│   │       ├── app-terminal.tsx   # About / bio
│   │       ├── app-finder.tsx     # Experience & certs
│   │       ├── app-safari.tsx     # Projects
│   │       ├── app-settings.tsx   # Skills / capabilities
│   │       └── app-homelab.tsx    # Infrastructure
│   └── ui/                 # shadcn/ui components
├── public/
│   ├── images/             # Portrait and assets
│   └── resume.pdf          # Downloadable resume
├── Dockerfile              # Multi-stage ARM64 build
└── docker-compose.yml      # Portainer stack definition
```

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server (Turbopack)
npm run dev

# Production build
npm run build
npm start
```

## Deployment

The site is containerized and self-hosted on a Raspberry Pi 5:

```bash
# Cross-compile for ARM64
docker buildx build --platform linux/arm64 -t portfolio:latest .

# Deploy via docker-compose on the Pi
docker compose up -d
```

Traffic routes through a Cloudflare Tunnel — no ports exposed on the local network.

---

Built by [Nikhil Kudache](https://github.com/nknick99)
