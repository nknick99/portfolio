# Cloud-Native Portfolio & Homelab Orchestration

A high-performance, containerized portfolio website built with Next.js and cross-compiled for an ARM64-based homelab environment. This project serves as a live demonstration of distributed systems, secure networking, and cloud-native architecture.

## 🚀 Live Environment
- **Domain:** [nikhilkudache.dev](https://nikhilkudache.dev)
- **Infrastructure:** Self-hosted on a Raspberry Pi 5 (8GB)
- **Networking:** Zero-Trust Tunnel via Cloudflare
- **Storage:** S3-compatible object storage via MinIO

## 🛠 Tech Stack
- **Frontend:** Next.js (App Router), Tailwind CSS, TypeScript
- **Runtime:** Docker (Multi-stage build, Node 20-Alpine)
- **Orchestration:** Portainer CE
- **Storage:** MinIO (Object Storage for media and static assets)
- **CI/CD:** Manual Docker Buildx (Cross-compilation for linux/arm64)

## 🏗 Architecture Highlights
This isn't just a static site. The architecture reflects enterprise-grade principles:
- **ARM64 Optimization:** The image is cross-compiled on x86 hardware (Dell Inspiron 7570) specifically for the Raspberry Pi 5’s ARM architecture using `docker buildx`.
- **Zero-Trust Security:** No ports are opened on the local network. A Cloudflare Tunnel creates a secure outbound-only connection to the edge.
- **Port Mapping:** Hosted on internal port `3050` to avoid conflicts with other homelab services (MinIO/Portainer).

## 📂 Project Structure
```text
├── app/               # Next.js App Router logic
├── components/        # Bento Grid and UI components
├── public/            # Static assets
├── Dockerfile         # Multi-stage ARM64 build configuration
└── docker-compose.yml # Portainer stack definition