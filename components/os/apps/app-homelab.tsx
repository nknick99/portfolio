import { Server, ExternalLink, HardDrive, Cpu, Activity, Network } from "lucide-react"

export function AppHomelab() {
  return (
    <div className="flex h-full w-full flex-col bg-zinc-950 text-white font-sans p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-2">
          <Server className="h-8 w-8 text-indigo-400" />
          <h1 className="text-3xl font-bold">Private Cloud Gateway</h1>
        </div>
        <p className="text-zinc-400 mb-8 border-b border-white/10 pb-6">
          Raspberry Pi 5 Cluster Management Dashboard. All traffic routed through encrypted Cloudflare Tunnels and Tailscale. Zero public ports exposed.
        </p>

        {/* System Status Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <div className="flex items-center gap-2 text-zinc-400 mb-2"><Activity className="h-4 w-4 text-emerald-400" /> Status</div>
            <div className="text-xl font-bold text-white">Online</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <div className="flex items-center gap-2 text-zinc-400 mb-2"><Cpu className="h-4 w-4 text-blue-400" /> Nodes</div>
            <div className="text-xl font-bold text-white">1 (RPi 5)</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <div className="flex items-center gap-2 text-zinc-400 mb-2"><Network className="h-4 w-4 text-purple-400" /> Network</div>
            <div className="text-xl font-bold text-white">Tailscale VPN</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <div className="flex items-center gap-2 text-zinc-400 mb-2"><Server className="h-4 w-4 text-orange-400" /> Engine</div>
            <div className="text-xl font-bold text-white">Docker Swarm</div>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-4">Application Launchers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Portainer Launcher */}
          <div className="bg-gradient-to-br from-blue-900/40 to-blue-900/10 border border-blue-500/30 rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <HardDrive className="w-48 h-48" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-500/20 p-2 rounded-lg border border-blue-500/30">
                  <Server className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Portainer</h3>
              </div>
              <p className="text-sm text-blue-200 mb-6 max-w-[250px]">
                Container orchestration, real-time resource monitoring, and automated restarts across the backend cluster.
              </p>
              <a 
                href="https://docker.nikhilkudache.dev"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Launch Portainer <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* MinIO Launcher */}
          <div className="bg-gradient-to-br from-red-900/40 to-red-900/10 border border-red-500/30 rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <HardDrive className="w-48 h-48" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-red-500/20 p-2 rounded-lg border border-red-500/30">
                  <Database className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">MinIO Object Storage</h3>
              </div>
              <p className="text-sm text-red-200 mb-6 max-w-[250px]">
                Self-hosted S3-compatible storage system. Access internal buckets, policies, and storage metrics.
              </p>
              <a 
                href="https://s3.nikhilkudache.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Launch MinIO Console <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
