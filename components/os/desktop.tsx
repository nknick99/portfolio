"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Window } from "./window"
import { Dock, AppId, DOCK_APPS } from "./dock"
import { motion, AnimatePresence } from "framer-motion"
import { Wifi, WifiOff, Battery, BatteryFull, BatteryMedium, BatteryLow, Search, Command, FileText, X, Database, Server, Terminal } from "lucide-react"

// We will map AppIds to their React Components later
import { AppTerminal } from "./apps/app-terminal"
import { AppFinder } from "./apps/app-finder"
import { AppSafari } from "./apps/app-safari"
import { AppSettings } from "./apps/app-settings"
import { AppHomelab } from "./apps/app-homelab"

interface AppState {
  id: AppId
  title: string
  isOpen: boolean
  isMinimized: boolean
  zIndex: number
  Component: React.ComponentType
  defaultSize?: { width: number | string; height: number | string }
}

const initialApps: AppState[] = [
  { id: "about", title: "Terminal - about.py", isOpen: true, isMinimized: false, zIndex: 1, Component: AppTerminal, defaultSize: { width: 700, height: 450 } },
  { id: "experience", title: "Finder - Experience", isOpen: false, isMinimized: false, zIndex: 0, Component: AppFinder, defaultSize: { width: 800, height: 600 } },
  { id: "projects", title: "Safari - Projects", isOpen: false, isMinimized: false, zIndex: 0, Component: AppSafari, defaultSize: { width: 900, height: 650 } },
  { id: "skills", title: "Capabilities", isOpen: false, isMinimized: false, zIndex: 0, Component: AppSettings, defaultSize: { width: 600, height: 500 } },
  { id: "homelab", title: "Home Lab Network", isOpen: false, isMinimized: false, zIndex: 0, Component: AppHomelab, defaultSize: { width: 800, height: 500 } },
]

export function Desktop() {
  const desktopRef = useRef<HTMLDivElement>(null)
  const [apps, setApps] = useState<AppState[]>(initialApps)
  const [activeApp, setActiveApp] = useState<AppId | null>("about")
  const [time, setTime] = useState<Date | null>(null)
  const [isBooting, setIsBooting] = useState(true)
  const [showSpotlight, setShowSpotlight] = useState(false)
  const [spotlightQuery, setSpotlightQuery] = useState("")
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [showAboutModal, setShowAboutModal] = useState(false)
  const [isAboutExpanded, setIsAboutExpanded] = useState(false)
  
  // Control Center States
  const [brightness, setBrightness] = useState(100)
  const [wifiEnabled, setWifiEnabled] = useState(true)
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null)

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3000)
  }

  useEffect(() => {
    // Boot sequence timer
    const bootTimer = setTimeout(() => {
      setIsBooting(false)
    }, 2500)
    
    setTime(new Date())
    const timer = setInterval(() => setTime(new Date()), 1000)
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setShowSpotlight(prev => !prev)
      }
      if (e.key === 'Escape') {
        setShowSpotlight(false)
        setActiveMenu(null)
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    
    // Battery Status API
    if ('getBattery' in navigator) {
      // @ts-expect-error - getBattery is not in standard lib yet
      navigator.getBattery().then((battery: any) => {
        setBatteryLevel(Math.round(battery.level * 100))
        battery.addEventListener('levelchange', () => {
          setBatteryLevel(Math.round(battery.level * 100))
        })
      }).catch(() => setBatteryLevel(82))
    } else {
      setBatteryLevel(82)
    }
    
    return () => {
      clearTimeout(bootTimer)
      clearInterval(timer)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const bringToFront = (id: AppId) => {
    setApps((prev) => {
      const highestZ = Math.max(...prev.map((a) => a.zIndex), 0)
      return prev.map((app) =>
        app.id === id ? { ...app, zIndex: highestZ + 1, isMinimized: false } : app
      )
    })
    setActiveApp(id)
  }

  const handleLaunchApp = (id: AppId) => {
    if (id === "contact") {
      window.location.href = "mailto:kudache@usc.edu"
      return
    }
    setApps((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, isOpen: true, isMinimized: false } : app
      )
    )
    bringToFront(id)
  }

  const handleClose = (id: AppId) => {
    setApps((prev) =>
      prev.map((app) => (app.id === id ? { ...app, isOpen: false } : app))
    )
    if (activeApp === id) setActiveApp(null)
  }

  const handleMinimize = (id: AppId) => {
    setApps((prev) =>
      prev.map((app) => (app.id === id ? { ...app, isMinimized: true } : app))
    )
    if (activeApp === id) setActiveApp(null)
  }

  return (
    <div 
      ref={desktopRef} 
      className="fixed inset-0 overflow-hidden bg-black text-foreground"
      style={{ filter: `brightness(${brightness}%)` }}
    >
      {/* Boot Sequence Overlay */}
      {isBooting && (
        <div className="absolute inset-0 z-[99999] bg-black flex flex-col items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center border border-white/20">
              <span className="text-6xl font-bold text-white">N</span>
            </div>
          </motion.div>
          <div className="w-48 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-white rounded-full"
            />
          </div>
        </div>
      )}

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            className="fixed top-12 left-1/2 z-[20000] bg-zinc-800/90 text-white px-6 py-3 rounded-full backdrop-blur-md shadow-2xl border border-white/10 text-sm font-medium"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* About OS Modal */}
      <AnimatePresence>
        {showAboutModal && (
          <div className="absolute top-7 bottom-0 left-0 right-0 z-[20000] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4" onClick={() => { setShowAboutModal(false); setIsAboutExpanded(false); }}>
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className={`w-full bg-zinc-800/90 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden flex flex-col \${isAboutExpanded ? 'max-w-4xl h-[80vh]' : 'max-w-sm'}`}
            >
              <div className="flex justify-between items-center px-4 py-2 border-b border-white/10 shrink-0">
                <span className="text-xs font-semibold text-white/50">{isAboutExpanded ? 'System Profiler: Nikhil Kudache' : 'About Me'}</span>
                <button onClick={() => { setShowAboutModal(false); setIsAboutExpanded(false); }} className="text-white/50 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              {!isAboutExpanded ? (
                <motion.div layout className="p-6 flex flex-col items-center text-center">
                  <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-white/20 shadow-xl mb-4">
                    <Image
                      src="/images/portrait.jpg"
                      alt="Nikhil Kudache"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-1">Nikhil OS</h2>
                  <p className="text-xs text-white/50 mb-4">Version 1.0.0</p>
                    <div className="text-sm text-zinc-300 space-y-2">
                      <p><strong>Software Engineer</strong></p>
                      <p>Strengths: Backend Systems, Cloud Infrastructure, Full-Stack Applications.</p>
                    </div>
                  <div className="flex gap-2 mt-6">
                    <button 
                      onClick={() => setIsAboutExpanded(true)}
                      className="px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-xs font-medium transition-colors"
                    >
                      Learn More...
                    </button>
                    <a 
                      href="/resume.pdf" 
                      target="_blank"
                      download="Nikhil_Kudache_Resume.pdf"
                      className="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-medium transition-colors border border-white/10"
                    >
                      Download Resume
                    </a>
                  </div>
                  <p className="mt-8 text-[10px] text-zinc-500 max-w-xs text-center border-t border-white/10 pt-4">
                    Inspired by macOS.
                  </p>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex-1 overflow-y-auto p-8"
                >
                  <div className="flex flex-col md:flex-row gap-8 mb-12">
                    <div className="relative h-48 w-48 rounded-2xl overflow-hidden border-4 border-white/10 shrink-0">
                      <Image src="/images/portrait.jpg" alt="Nikhil Kudache" fill className="object-cover" />
                    </div>
                    <div>
                      <h1 className="text-4xl font-bold text-white mb-2">Nikhil Kudache</h1>
                      <h2 className="text-xl text-blue-400 mb-4">Software Engineer & Systems Architect</h2>
                      <p className="text-zinc-300 leading-relaxed max-w-2xl">
                        I am a software engineer specializing in scalable backend systems, cloud infrastructure, and full-stack applications. With a foundation built during my MSCS at the University of Southern California (Aug 2025 - May 2027) and practical experience engineering high-impact solutions at Deloitte (Jan 2023 - Jul 2025), I bridge the gap between complex architectural design and intuitive user experiences.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Experience Log */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                        <Command className="w-5 h-5 text-blue-400" />
                        <h3 className="text-lg font-bold text-white">Execution Log (Experience)</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                          <h4 className="text-white font-bold">Software Engineer (Student)</h4>
                          <p className="text-xs text-blue-400 mb-2">USC Human Technology Interaction Lab • Aug 2025 - Present</p>
                          <p className="text-sm text-zinc-400">Architected backend systems, secure APIs, and database structures for medical digital twin and transdisciplinary learning platforms.</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                          <h4 className="text-white font-bold">Cloud Infrastructure Analyst</h4>
                          <p className="text-xs text-blue-400 mb-2">Deloitte • Jan 2023 - Jul 2025</p>
                          <p className="text-sm text-zinc-400">Developed enterprise backend systems using Python and Java. Built microservices handling millions of transactions, deployed on AWS.</p>
                        </div>
                      </div>
                    </div>

                    {/* System Specifications */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                        <FileText className="w-5 h-5 text-purple-400" />
                        <h3 className="text-lg font-bold text-white">System Specs (Skills)</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <span className="text-xs text-white/50 uppercase tracking-wider block mb-2">Languages & Frameworks</span>
                          <div className="flex flex-wrap gap-2">
                            {['Python', 'Java', 'TypeScript', 'C++', 'React', 'Next.js'].map(s => (
                              <span key={s} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30">{s}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-xs text-white/50 uppercase tracking-wider block mb-2">Infrastructure</span>
                          <div className="flex flex-wrap gap-2">
                            {['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'PostgreSQL', 'MongoDB'].map(s => (
                              <span key={s} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30">{s}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-white/10">
                        <h4 className="text-white font-bold mb-2">Education Protocol</h4>
                        <p className="text-sm text-white/80">MS in Computer Science</p>
                        <p className="text-xs text-white/50 mb-4">University of Southern California (2025 - 2027)</p>
                        
                        <a 
                          href="/resume.pdf" 
                          target="_blank"
                          download="Nikhil_Kudache_Resume.pdf"
                          className="inline-block px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-xs font-medium transition-colors"
                        >
                          Download Full Resume (PDF)
                        </a>
                        <p className="mt-6 text-[10px] text-white/30 text-center">
                          Inspired by macOS.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Sleek Tech/Software Engineer Wallpaper */}
      <div className="absolute inset-0 z-0 bg-slate-950 overflow-hidden">
        {/* Base dark radial gradient */}
        <div 
          className="absolute inset-0 opacity-80"
          style={{
            background: "radial-gradient(circle at 50% 0%, #1e3a8a 0%, #020617 70%)"
          }}
        />
        
        {/* Tech Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Desktop Icons */}
        <div className="absolute top-12 left-4 right-4 sm:left-auto sm:right-4 bottom-24 z-[5000] flex flex-row flex-wrap sm:flex-col gap-4 sm:gap-6 items-start sm:items-end justify-start content-start pointer-events-none">
          {/* Terminal App */}
          <div 
            className="flex flex-col items-center gap-1.5 w-20 cursor-pointer group pointer-events-auto"
            onDoubleClick={() => handleLaunchApp('about')}
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-105 border border-white/20 bg-gray-800 text-green-400">
              <Terminal className="h-7 w-7" />
            </div>
            <span className="text-white text-xs font-medium text-center drop-shadow-md bg-black/20 px-1.5 py-0.5 rounded backdrop-blur-sm line-clamp-2">
              Terminal
            </span>
          </div>

          {/* Portainer Link */}
          <a 
            href="https://docker.nikhilkudache.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1.5 w-20 cursor-pointer group pointer-events-auto hover:no-underline"
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-105 border border-white/20 bg-blue-500 text-white">
              <Database className="h-7 w-7" />
            </div>
            <span className="text-white text-xs font-medium text-center drop-shadow-md bg-black/20 px-1.5 py-0.5 rounded backdrop-blur-sm line-clamp-2">
              Portainer
            </span>
          </a>

          {/* MinIO Link */}
          <a 
            href="https://s3.nikhilkudache.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1.5 w-20 cursor-pointer group pointer-events-auto hover:no-underline"
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-105 border border-white/20 bg-red-500 text-white">
              <Server className="h-7 w-7" />
            </div>
            <span className="text-white text-xs font-medium text-center drop-shadow-md bg-black/20 px-1.5 py-0.5 rounded backdrop-blur-sm line-clamp-2">
              MinIO
            </span>
          </a>
        </div>

        {/* Floating glowing orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-pink-500/40 rounded-full blur-[100px]"
        />
      </div>

      {/* Top Menu Bar */}
      <div className="absolute top-0 left-0 right-0 h-7 bg-black/40 backdrop-blur-md border-b border-white/10 z-[30000] flex items-center justify-between px-4 select-none">
        <div className="flex items-center text-xs font-medium text-white/90">
          <div 
            className="relative px-3 py-1 cursor-default hover:bg-white/20 rounded transition-colors"
            onClick={() => setActiveMenu(activeMenu === 'apple' ? null : 'apple')}
          >
            <span className="font-bold text-sm">N</span>
            <AnimatePresence>
              {activeMenu === 'apple' && (
                <motion.div 
                  initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                  className="absolute top-full left-0 mt-1 w-48 bg-zinc-800/95 backdrop-blur-md border border-white/10 rounded-md shadow-2xl py-1 z-[15000]"
                >
                  <div className="px-3 py-1 hover:bg-blue-500 cursor-default" onClick={() => { setShowAboutModal(true); setActiveMenu(null); }}>About Me</div>
                  <div className="h-px bg-white/10 my-1"></div>
                  <div className="px-3 py-1 hover:bg-blue-500 cursor-default" onClick={() => window.location.reload()}>Restart...</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <span className="font-bold px-3 py-1">{activeApp ? apps.find(a => a.id === activeApp)?.title.split(' - ')[0] : 'Finder'}</span>
          
          <div className="relative">
            <span 
              className="hidden sm:inline hover:bg-white/20 px-3 py-1 rounded transition-colors cursor-default"
              onClick={() => setActiveMenu(activeMenu === 'file' ? null : 'file')}
            >
              File
            </span>
            <AnimatePresence>
              {activeMenu === 'file' && (
                <motion.div 
                  initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                  className="absolute top-full left-0 mt-1 w-48 bg-zinc-800/95 backdrop-blur-md border border-white/10 rounded-md shadow-2xl py-1 z-[15000]"
                >
                  <a href="/resume.pdf" download="Nikhil_Kudache_Resume.pdf" className="block px-3 py-1 hover:bg-blue-500 cursor-default" onClick={() => { setActiveMenu(null); }}>Download Resume</a>
                  <div className="px-3 py-1 hover:bg-blue-500 cursor-default" onClick={() => { if(activeApp) handleClose(activeApp); setActiveMenu(null); }}>Close Window</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <span 
              className="hidden sm:inline hover:bg-white/20 px-3 py-1 rounded transition-colors cursor-default"
              onClick={() => setActiveMenu(activeMenu === 'edit' ? null : 'edit')}
            >
              Edit
            </span>
            <AnimatePresence>
              {activeMenu === 'edit' && (
                <motion.div 
                  initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                  className="absolute top-full left-0 mt-1 w-48 bg-zinc-800/95 backdrop-blur-md border border-white/10 rounded-md shadow-2xl py-1"
                >
                  <div className="px-3 py-1 hover:bg-blue-500 cursor-default" onClick={() => { showToast("Copied link to clipboard"); setActiveMenu(null); }}>Copy Profile Link</div>
                  <div className="px-3 py-1 hover:bg-blue-500 cursor-default" onClick={() => { showToast("Copied email address"); setActiveMenu(null); }}>Copy Email</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <span 
              className="hidden sm:inline hover:bg-white/20 px-3 py-1 rounded transition-colors cursor-default"
              onClick={() => setActiveMenu(activeMenu === 'view' ? null : 'view')}
            >
              View
            </span>
            <AnimatePresence>
              {activeMenu === 'view' && (
                <motion.div 
                  initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                  className="absolute top-full left-0 mt-1 w-48 bg-zinc-800/95 backdrop-blur-md border border-white/10 rounded-md shadow-2xl py-1"
                >
                  <div className="px-3 py-1 hover:bg-blue-500 cursor-default" onClick={() => { if(!document.fullscreenElement) { document.documentElement.requestFullscreen() } else { document.exitFullscreen() }; setActiveMenu(null); }}>Toggle Fullscreen</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <span 
              className="hidden sm:inline hover:bg-white/20 px-3 py-1 rounded transition-colors cursor-default"
              onClick={() => setActiveMenu(activeMenu === 'window' ? null : 'window')}
            >
              Window
            </span>
            <AnimatePresence>
              {activeMenu === 'window' && (
                <motion.div 
                  initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                  className="absolute top-full left-0 mt-1 w-48 bg-zinc-800/95 backdrop-blur-md border border-white/10 rounded-md shadow-2xl py-1"
                >
                  <div className="px-3 py-1 hover:bg-blue-500 cursor-default" onClick={() => { apps.forEach(a => { if(a.isOpen && !a.isMinimized) handleMinimize(a.id) }); setActiveMenu(null); }}>Minimize All</div>
                  <div className="px-3 py-1 hover:bg-blue-500 cursor-default" onClick={() => { apps.forEach(a => { if(a.isOpen && a.isMinimized) bringToFront(a.id) }); setActiveMenu(null); }}>Bring All to Front</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <span 
              className="hidden sm:inline hover:bg-white/20 px-3 py-1 rounded transition-colors cursor-default"
              onClick={() => setActiveMenu(activeMenu === 'about' ? null : 'about')}
            >
              About
            </span>
            <AnimatePresence>
              {activeMenu === 'about' && (
                <motion.div 
                  initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                  className="absolute top-full left-0 mt-1 w-48 bg-zinc-800/95 backdrop-blur-md border border-white/10 rounded-md shadow-2xl py-1 z-[15000]"
                >
                  <div className="px-3 py-1 hover:bg-blue-500 cursor-default" onClick={() => { setShowAboutModal(true); setActiveMenu(null); }}>About Me</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-xs font-medium text-white/90">
          <Search 
            className="w-3.5 h-3.5 cursor-pointer hover:text-white transition-colors" 
            onClick={() => setShowSpotlight(!showSpotlight)}
          />
          <div className="relative">
            <div 
              className="flex items-center gap-3 hover:bg-white/20 px-2 py-0.5 rounded cursor-pointer transition-colors"
              onClick={() => setActiveMenu(activeMenu === 'control' ? null : 'control')}
            >
              {wifiEnabled ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4 text-white/50" />}
              {batteryLevel !== null && (
                batteryLevel > 50 ? <BatteryFull className="w-4 h-4" /> : 
                batteryLevel > 20 ? <BatteryMedium className="w-4 h-4" /> : 
                <BatteryLow className="w-4 h-4 text-red-400" />
              )}
              <span>{time ? time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}</span>
            </div>
            <AnimatePresence>
              {activeMenu === 'control' && (
                <motion.div 
                  initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                  className="absolute top-full right-0 mt-2 w-64 bg-zinc-800/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 z-[15000]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div 
                      onClick={() => setWifiEnabled(!wifiEnabled)}
                      className={`rounded-xl p-3 flex flex-col justify-between h-16 cursor-pointer transition-colors \${wifiEnabled ? 'bg-blue-500 hover:bg-blue-600' : 'bg-white/10 hover:bg-white/20'}`}
                    >
                      {wifiEnabled ? <Wifi className="w-4 h-4 text-white" /> : <WifiOff className="w-4 h-4 text-white/50" />}
                      <span className="text-[10px] text-white font-semibold">{wifiEnabled ? 'Wi-Fi\nConnected' : 'Wi-Fi\nOff'}</span>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3 flex flex-col justify-between h-16 cursor-default">
                      {batteryLevel !== null && batteryLevel > 50 ? <BatteryFull className="w-4 h-4 text-white" /> : <BatteryMedium className="w-4 h-4 text-white" />}
                      <span className="text-[10px] text-white font-semibold">Battery<br/>{batteryLevel}%</span>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3">
                    <span className="text-xs text-white/70 font-semibold mb-2 block">Display</span>
                    <input 
                      type="range" 
                      min="20" 
                      max="100" 
                      value={brightness} 
                      onChange={(e) => setBrightness(parseInt(e.target.value))}
                      className="w-full h-4 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Spotlight Search Overlay */}
      <AnimatePresence>
        {showSpotlight && (
          <div className="absolute inset-0 z-[15000] flex items-start justify-center pt-32" onClick={() => setShowSpotlight(false)}>
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl bg-zinc-800/90 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center px-4 py-3 border-b border-white/10">
                <Search className="w-6 h-6 text-white/50 mr-3" />
                <input 
                  autoFocus
                  type="text"
                  placeholder="Spotlight Search"
                  value={spotlightQuery}
                  onChange={(e) => setSpotlightQuery(e.target.value)}
                  className="flex-1 bg-transparent text-xl text-white outline-none placeholder:text-white/30"
                />
              </div>
              {spotlightQuery.length > 0 && (
                <div className="p-2 max-h-64 overflow-y-auto">
                  {apps.filter(a => a.title.toLowerCase().includes(spotlightQuery.toLowerCase())).map(app => (
                    <div 
                      key={app.id} 
                      onClick={() => { handleLaunchApp(app.id); setShowSpotlight(false); setSpotlightQuery(""); }}
                      className="flex items-center gap-3 px-3 py-2 hover:bg-blue-500 rounded-lg cursor-default text-white"
                    >
                      <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center">
                        <Command className="w-4 h-4" />
                      </div>
                      <div className="font-medium">{app.title}</div>
                    </div>
                  ))}
                  {apps.filter(a => a.title.toLowerCase().includes(spotlightQuery.toLowerCase())).length === 0 && (
                    <div className="px-4 py-8 text-center text-white/50">No results found</div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Windows Layer */}
      <div className="absolute top-7 bottom-0 left-0 right-0 z-10 pointer-events-none">
        <AnimatePresence>
          {apps.map((app) => {
            if (!app.isOpen) return null
            
            return (
              <motion.div 
                key={app.id} 
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: app.isMinimized ? 0 : 1, scale: app.isMinimized ? 0.8 : 1, y: app.isMinimized ? 200 : 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={app.isMinimized ? 'hidden pointer-events-auto' : 'block pointer-events-auto'}
              >
                <Window
                  id={app.id}
                  title={app.title}
                  isActive={activeApp === app.id}
                  zIndex={app.zIndex}
                  onClose={() => handleClose(app.id)}
                  onFocus={() => bringToFront(app.id)}
                  onMinimize={() => handleMinimize(app.id)}
                  constraintsRef={desktopRef}
                  defaultSize={app.defaultSize}
                >
                  {(() => {
                    switch (app.id) {
                      case 'about':
                        return <AppTerminal />
                      case 'experience':
                        return <AppFinder />
                      case 'projects':
                        return <AppSafari />
                      case 'skills':
                        return <AppSettings />
                      case 'homelab':
                        return <AppHomelab />
                      case 'contact':
                        return <AppMail />
                      default:
                        return <app.Component />
                    }
                  })()}
                </Window>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Dock */}
      <Dock 
        openApps={apps.filter(a => a.isOpen).map(a => a.id)} 
        activeApp={activeApp} 
        onLaunchApp={handleLaunchApp} 
      />
    </div>
  )
}
