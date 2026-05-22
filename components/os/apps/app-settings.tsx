import { useState } from "react"
import { Settings as SettingsIcon, Cloud, Code, Database, Shield, Zap, Tool } from "lucide-react"

export function AppSettings() {
  const [activeTab, setActiveTab] = useState<'installed' | 'skills'>('installed')

  const capabilities = [
    {
      id: "cloud",
      icon: <Cloud className="h-6 w-6 text-blue-400" />,
      title: "Cloud Architecture & DevOps",
      desc: "Designing zero-trust secure infrastructure on AWS & Azure using Terraform, Docker, and Kubernetes.",
      specs: ["AWS (EC2, S3, ECS, Lambda)", "Azure App Service", "Docker / K8s", "Terraform", "GitHub Actions / Jenkins CI/CD"]
    },
    {
      id: "backend",
      icon: <Code className="h-6 w-6 text-emerald-400" />,
      title: "Backend Engineering",
      desc: "Building scalable REST APIs, microservices, and complex entity relationship models.",
      specs: ["Python / Django", "Java / Spring Boot", "Node.js / Next.js", "C++", "JWT / OAuth Auth"]
    },
    {
      id: "data",
      icon: <Database className="h-6 w-6 text-orange-400" />,
      title: "Data Engineering & AI",
      desc: "Building data pipelines with PySpark, optimizing SQL queries, and deploying local LLMs.",
      specs: ["PostgreSQL / MySQL / MongoDB", "PySpark / Pandas", "Scikit-learn", "Llama 3.1 / Ollama", "Power BI"]
    },
    {
      id: "security",
      icon: <Shield className="h-6 w-6 text-indigo-400" />,
      title: "DevSecOps & Automation",
      desc: "Integrating Checkov and Prisma Cloud for automated vulnerability blocking.",
      specs: ["Prisma Cloud", "Checkov", "NIST / CIS Benchmarks", "Bash Scripting", "Jira Automation"]
    }
  ]

  const rawSkills = [
    { category: "Languages", items: "Python, Java, C++, JavaScript, TypeScript, SQL, Bash" },
    { category: "Web & Backend", items: "REST APIs, Node.js, Next.js, React.js, PostgreSQL, MySQL, MongoDB" },
    { category: "Cloud & DevOps", items: "AWS, Azure, Docker, Kubernetes, Terraform, GitHub Actions, CI/CD, Linux/Unix" },
    { category: "AI & Tools", items: "Scikit-learn, Pandas, Git, Jira" }
  ]

  return (
    <div className="flex flex-col sm:flex-row h-full w-full bg-zinc-900/95 text-white font-sans">
      {/* Mobile Tab Bar */}
      <div className="flex sm:hidden overflow-x-auto border-b border-white/10 bg-black/40 p-2 gap-2">
        <button 
          onClick={() => setActiveTab('installed')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeTab === 'installed' ? 'bg-blue-500 text-white' : 'bg-white/5 text-zinc-400'}`}
        >
          Installed
        </button>
        <button 
          onClick={() => setActiveTab('skills')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeTab === 'skills' ? 'bg-blue-500 text-white' : 'bg-white/5 text-zinc-400'}`}
        >
          Skills
        </button>
      </div>

      {/* Sidebar (Desktop) */}
      <div className="hidden sm:block w-56 shrink-0 border-r border-white/10 bg-black/40 p-4">
        <div className="flex items-center gap-2 mb-8">
          <SettingsIcon className="h-5 w-5 text-zinc-400" />
          <h2 className="font-semibold text-lg">Settings</h2>
        </div>
        
        <div className="space-y-1 text-sm">
          <div 
            onClick={() => setActiveTab('installed')}
            className={`rounded-md px-3 py-2 font-medium cursor-pointer transition-colors ${activeTab === 'installed' ? 'bg-blue-500 text-white shadow-md' : 'text-zinc-400 hover:bg-white/5'}`}
          >
            Installed
          </div>
          <div 
            onClick={() => setActiveTab('skills')}
            className={`rounded-md px-3 py-2 font-medium cursor-pointer transition-colors ${activeTab === 'skills' ? 'bg-blue-500 text-white shadow-md' : 'text-zinc-400 hover:bg-white/5'}`}
          >
            Skills
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          {activeTab === 'installed' && (
            <>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">Capabilities Matrix</h1>
              <p className="text-sm sm:text-base text-zinc-400 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-white/10">Installed skill modules and core competencies configuring this OS.</p>
              
              <div 
                className="grid gap-4 sm:gap-6"
                style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
              >
                {capabilities.map(cap => (
                  <div key={cap.id} className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 hover:bg-white/10 transition-colors flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-black/30 p-2 rounded-lg border border-white/5 shrink-0">
                        {cap.icon}
                      </div>
                      <h3 className="font-bold text-base sm:text-lg text-white leading-tight">{cap.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 mb-4 flex-1">{cap.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {cap.specs.map(spec => (
                        <span key={spec} className="px-2 py-1 bg-black/40 text-[10px] sm:text-xs text-white/80 rounded border border-white/5">{spec}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'skills' && (
            <>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">Technical Skills</h1>
              <p className="text-sm sm:text-base text-zinc-400 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-white/10">Comprehensive overview of technical capabilities and specialized tools.</p>
              
              <div className="space-y-4">
                {rawSkills.map((skill, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5">
                    <h3 className="font-bold text-blue-400 mb-3">{skill.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.split(', ').map(item => (
                        <span key={item} className="px-3 py-1.5 bg-black/40 text-xs sm:text-sm text-white rounded-lg border border-white/5">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
