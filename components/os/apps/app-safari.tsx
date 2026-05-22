import { ChevronLeft, ChevronRight, RotateCw, Plus, Globe, ExternalLink, ShieldAlert, Cpu, Cloud, Building2 } from "lucide-react"

export function AppSafari() {
  const projects = [
    {
      title: "Evaluating Reputation Effects in Multi-Issue LLM Negotiation",
      url: "github.com/nknick99",
      href: "https://github.com/nknick99/Multi-Issue-LLM-Negotiation",
      icon: <Cpu className="h-10 w-10 text-orange-400" />,
      tech: "Python, Llama 3.1, Ollama",
      problem: "Needed a structured way to evaluate LLM bargaining strategies and reputation effects across multiple inference backends.",
      solution: "Designed a multi-agent LLM negotiation framework using Llama 3.1 via Ollama. Agents bargain over price, delivery time, and warranty through structured Thought-Talk-Action prompt patterns across 100+ episodes.",
      impact: "Measured reputation visibility improved deal rate by 6% and buyer utility by 6% over a no-reputation baseline."
    },
    {
      title: "Private Cloud Infrastructure",
      url: "s3.nikhilkudache.dev",
      href: "https://s3.nikhilkudache.dev",
      icon: <Cloud className="h-10 w-10 text-blue-400" />,
      tech: "MinIO, Docker, Portainer, Cloudflare, Tailscale, Raspberry Pi 5",
      problem: "Needed secure, self-hosted scalable cloud storage and container orchestration without exposing local network ports.",
      solution: "Built a self-hosted S3-compatible storage system on a Raspberry Pi 5 with MinIO and Docker. Integrated Portainer for orchestration.",
      impact: "Managed full infrastructure lifecycle end-to-end with zero ports exposed to the public internet, routing traffic through encrypted tunnels between nodes in two countries."
    },
    {
      title: "Talent Management System (AI Academy)",
      url: "",
      href: "#",
      icon: <Building2 className="h-10 w-10 text-emerald-400" />,
      tech: "Python, PySpark, SQL, Scikit-learn, Azure, Power BI",
      problem: "High candidate drop-off during onboarding was causing severe talent acquisition inefficiencies and data silos.",
      solution: "Built scalable server-side data pipelines in PySpark and SQL to process large recruitment datasets, trained an ML model, and built real-time analytics dashboards in Power BI on Azure.",
      impact: "Predicted candidate drop-off with 85% accuracy, enabling HR teams to intervene early and reduce attrition by up to 20%."
    },
    {
      title: "Nagar and Associates",
      url: "nagarandassociates.netlify.app",
      href: "https://nagarandassociates.netlify.app/",
      icon: <ShieldAlert className="h-10 w-10 text-indigo-400" />,
      tech: "React.js, GatsbyJS, Tailwind CSS, Netlify CMS",
      problem: "A tax consultancy firm required a responsive digital presence that non-technical staff could update without developer assistance.",
      solution: "Developed a client-facing website in React.js and GatsbyJS, deeply integrating Netlify CMS, custom Netlify form workflows, and Google Analytics.",
      impact: "Enabled complete code-free content management for the staff and provided detailed user behavior tracking."
    }
  ]

  return (
    <div className="flex h-full w-full flex-col bg-[#1E1E1E] text-white">
      {/* Safari Toolbar */}
      <div className="flex items-center gap-4 border-b border-white/10 bg-[#2D2D2D] px-4 py-2">
        <div className="flex gap-2">
          <ChevronLeft className="h-5 w-5 text-white/50 cursor-not-allowed" />
          <ChevronRight className="h-5 w-5 text-white/50 cursor-not-allowed" />
          <RotateCw className="h-4 w-4 text-white/80 cursor-pointer ml-2 mt-0.5" />
        </div>
        
        {/* Address Bar */}
        <div className="flex flex-1 items-center justify-center gap-2 rounded-md bg-black/40 px-3 py-1.5 text-sm shadow-inner">
          <Globe className="h-4 w-4 text-white/50" />
          <span className="text-white/80">nikhilkudache.dev/projects</span>
        </div>

        <Plus className="h-5 w-5 text-white/80 cursor-pointer" />
      </div>

      {/* Safari Content */}
      <div className="flex-1 overflow-y-auto bg-black/20 p-8">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold mb-2">Technical Projects</h1>
          <p className="text-zinc-400 mb-8">Showcasing architecture, data pipelines, and intelligent systems.</p>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/10 group flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-black/30 p-3 rounded-xl border border-white/5 shrink-0">
                    {proj.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold text-white truncate">{proj.title}</h2>
                    <a href={proj.href !== '#' ? proj.href : undefined} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm mt-1 w-max">
                      {proj.url} {proj.href !== '#' && <ExternalLink className="w-3 h-3" />}
                    </a>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {proj.tech.split(', ').map(t => (
                        <span key={t} className="px-2 py-0.5 bg-white/10 text-white/80 rounded text-xs border border-white/10">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mt-auto pt-4 border-t border-white/10">
                  <div>
                    <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">Problem</span>
                    <p className="text-sm text-zinc-300">{proj.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">Solution</span>
                    <p className="text-sm text-zinc-300">{proj.solution}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">Impact</span>
                    <p className="text-sm text-white font-medium">{proj.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
