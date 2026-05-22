import { useState } from "react"
import { Folder, FileText, ChevronRight, Award, GraduationCap, FileBadge } from "lucide-react"

export function AppFinder() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'certifications' | 'awards'>('experience')

  const certs = [
    { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", date: "May 2023" },
    { name: "Data Engineering - Foundation 2023", issuer: "Deloitte", date: "Mar 2023" },
    { name: "Machine Learning - Foundation 2023", issuer: "Deloitte", date: "Mar 2023" },
    { name: "AWS: Getting Started with Cloud Security", issuer: "edX", date: "Jul 2021" },
    { name: "Developing Cloud Applications with Node.js and React", issuer: "edX", date: "Jul 2021" },
    { name: "Google Android Development Workshop", issuer: "Techfest, IIT Bombay", date: "Jan 2020" },
    { name: "AI Summit, Techfest 2018", issuer: "Indian Institute of Technology, Bombay", date: "Dec 2018" },
    { name: "Barclays Tech Innovation Challenge 2018", issuer: "Barclays", date: "Sep 2018" },
    { name: "Blockchain Basics", issuer: "Coursera", date: "Nov 2020" },
    { name: "Google Cloud Program (GCP)", issuer: "Google", date: "Sep 2020" },
    { name: "Front-End Web UI Frameworks and Tools: Bootstrap 4", issuer: "Coursera", date: "Jul 2020" },
    { name: "Blockchain For Business", issuer: "edX", date: "Apr 2019" },
    { name: "Python Data Structures", issuer: "Coursera", date: "Jul 2018" },
    { name: "Programming for Everybody (Getting Started with Python)", issuer: "Coursera", date: "May 2018" }
  ]

  return (
    <div className="flex h-full w-full bg-zinc-900/90 text-white font-sans">
      {/* Sidebar */}
      <div className="w-48 shrink-0 border-r border-white/10 bg-black/20 p-2 hidden sm:block">
        <div className="mb-4 px-2 text-xs font-semibold text-white/50">Favorites</div>
        <div className="space-y-1 text-sm">
          <div 
            onClick={() => setActiveTab('experience')}
            className={`flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 transition-colors \${activeTab === 'experience' ? 'bg-blue-500 text-white' : 'hover:bg-white/10'}`}
          >
            <Folder className={`h-4 w-4 \${activeTab === 'experience' ? 'fill-blue-300 text-blue-300' : 'fill-blue-400 text-blue-400'}`} />
            Experience
          </div>
          <div 
            onClick={() => setActiveTab('education')}
            className={`flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 transition-colors \${activeTab === 'education' ? 'bg-blue-500 text-white' : 'hover:bg-white/10'}`}
          >
            <Folder className={`h-4 w-4 \${activeTab === 'education' ? 'fill-blue-300 text-blue-300' : 'fill-blue-400 text-blue-400'}`} />
            Education
          </div>
          <div 
            onClick={() => setActiveTab('certifications')}
            className={`flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 transition-colors \${activeTab === 'certifications' ? 'bg-blue-500 text-white' : 'hover:bg-white/10'}`}
          >
            <Folder className={`h-4 w-4 \${activeTab === 'certifications' ? 'fill-blue-300 text-blue-300' : 'fill-blue-400 text-blue-400'}`} />
            Certifications
          </div>
          <div 
            onClick={() => setActiveTab('awards')}
            className={`flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 transition-colors \${activeTab === 'awards' ? 'bg-blue-500 text-white' : 'hover:bg-white/10'}`}
          >
            <Folder className={`h-4 w-4 \${activeTab === 'awards' ? 'fill-blue-300 text-blue-300' : 'fill-blue-400 text-blue-400'}`} />
            Awards
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex items-center gap-2 border-b border-white/10 bg-black/10 px-4 py-2 text-sm capitalize">
          <span className="text-white/50">Nikhil Kudache</span>
          <ChevronRight className="h-4 w-4 text-white/50" />
          <span>{activeTab}</span>
        </div>

        <div className="p-6 space-y-6">
          {activeTab === 'experience' && (
            <>
              {/* Experience Item 1 */}
              <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-blue-400" />
                    <div>
                      <h3 className="font-bold text-lg">Software Engineer (Student)</h3>
                      <p className="text-sm text-blue-300">USC Human Technology Interaction Lab</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-medium text-white/50 bg-white/10 px-2 py-1 rounded-full">Oct 2025 - Present</span>
                  </div>
                </div>
                
                <div className="space-y-3 mt-2 text-sm text-zinc-300">
                  <div className="bg-black/30 rounded-lg p-3 border border-white/5">
                    <p className="font-semibold text-white mb-1 border-b border-white/10 pb-1 inline-block">Problem</p>
                    <p>Medical data sharing and analysis for surgical outcome digital twins lacked a secure, RBAC-enforced cloud infrastructure, making cross-functional innovation difficult.</p>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                    <p className="font-semibold text-blue-400 mb-1 border-b border-blue-500/20 pb-1 inline-block">Built</p>
                    <ul className="list-disc list-outside ml-4 space-y-1">
                      <li>Developed secure RESTful API endpoints and JWT-based authentication for Phase 1 of a J&J MedTech surgical outcome platform used by 50+ surgeons.</li>
                      <li>Engineered server-side SAS token generation providing time-limited delegated access to sensitive medical data on Azure Blob Storage.</li>
                      <li>Deployed the platform on Azure App Service with a GitHub Actions CI/CD pipeline, enforcing RBAC-only storage access via Managed Identity.</li>
                      <li>Designed the data model and entity relationships for 4 core domain services (Surgeons, Scenarios, Images, Responses).</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-purple-400" />
                    <div>
                      <h3 className="font-bold text-lg">Analyst - Cloud Infrastructure</h3>
                      <p className="text-sm text-purple-300">Deloitte USI</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-medium text-white/50 bg-white/10 px-2 py-1 rounded-full">Jan 2023 - Jul 2025</span>
                  </div>
                </div>
                
                <div className="space-y-3 mt-2 text-sm text-zinc-300">
                  <div className="bg-black/30 rounded-lg p-3 border border-white/5">
                    <p className="font-semibold text-white mb-1 border-b border-white/10 pb-1 inline-block">Problem</p>
                    <p>Manual resolution of Prisma Cloud security alerts in Jira was costing 20+ hours weekly, and inconsistent AWS deployments were causing manual configuration errors.</p>
                  </div>
                  <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                    <p className="font-semibold text-purple-400 mb-1 border-b border-purple-500/20 pb-1 inline-block">Built</p>
                    <ul className="list-disc list-outside ml-4 space-y-1">
                      <li>Engineered a Python automation tool connecting Prisma Cloud and Jira to auto-close stale tickets, clearing 300+ backlogged items in one run and saving 20 hours/week (Won Deloitte Applause Award).</li>
                      <li>Developed reusable Terraform modules for AWS networking, permissions, and compute, aligning with NIST and CIS benchmarks and eliminating manual errors.</li>
                      <li>Integrated Checkov and Prisma Cloud into a dedicated security scanning stage of the Jenkins CI/CD pipeline, blocking 90+ high-severity vulnerabilities per release cycle.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'education' && (
            <div className="space-y-4">
              <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="h-8 w-8 text-yellow-400" />
                  <div>
                    <h3 className="font-bold text-lg">Master of Science in Computer Science</h3>
                    <p className="text-sm text-yellow-300">University of Southern California, Los Angeles</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm text-zinc-400">
                  <span>Aug 2025 - May 2027</span>
                </div>
                <p className="text-sm mt-2"><strong>Coursework:</strong> Analysis of Algorithms, Database Systems, Machine Learning for Data Science, Applied Natural Language Processing</p>
              </div>

              <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="h-8 w-8 text-white/50" />
                  <div>
                    <h3 className="font-bold text-lg">Bachelor of Technology in Computer Science</h3>
                    <p className="text-sm text-white/60">Walchand Institute of Technology, India</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm text-zinc-400">
                  <span>Aug 2018 - Jul 2022</span>
                  <span className="bg-white/10 px-2 py-0.5 rounded text-xs">GPA: 3.94/4.0</span>
                </div>
                <p className="text-sm mt-2 text-zinc-400"><strong>Coursework:</strong> Data Structures & Algorithms, OS, DBMS, OOP (Java/C++), Software Engineering, Cloud Computing, Distributed Systems, Big Data.</p>
              </div>
            </div>
          )}

          {activeTab === 'awards' && (
            <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-8 w-8 text-yellow-500" />
                <div>
                  <h3 className="font-bold text-lg text-white">Deloitte Applause Award</h3>
                  <p className="text-sm text-yellow-400">Deloitte USI</p>
                </div>
              </div>
              <p className="text-sm text-zinc-300">
                Awarded for engineering a Python automation tool connecting Prisma Cloud and Jira to auto-close stale tickets, clearing 300+ backlogged items in one run and saving 20 hours/week.
              </p>
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              {certs.map((cert, idx) => (
                <div key={idx} className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                  <div className="flex items-start gap-3">
                    <FileBadge className="h-6 w-6 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-sm text-white leading-tight mb-1">{cert.name}</h3>
                      <div className="flex items-center gap-2 text-xs text-zinc-400">
                        <span className="text-indigo-300">{cert.issuer}</span>
                        <span>•</span>
                        <span>Issued {cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
