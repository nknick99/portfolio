"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

const codeSnippet = `nikhil@macbook-pro ~ % cat about.py
nikhil = {
    "role": "Software Engineer",
    "education": "MSCS @ USC",
    "experience": "2.5 yrs @ Deloitte",
    "strengths": ["Systems", "Backend", "Cloud"],
    "seeking": "Summer 2026 Internships"
}
nikhil@macbook-pro ~ % `

type CommandHistory = {
  command: string;
  output: React.ReactNode;
}

export function AppTerminal() {
  const [displayedCode, setDisplayedCode] = useState("")
  const [history, setHistory] = useState<CommandHistory[]>([])
  const [input, setInput] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < codeSnippet.length) {
        setDisplayedCode(codeSnippet.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
      }
    }, 20)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [history, displayedCode])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const cmd = input.trim().toLowerCase()
    let output: React.ReactNode = null

    switch (cmd) {
      case "about":
        output = (
          <div className="text-zinc-300 space-y-1">
            <p>Available commands:</p>
            <p><strong className="text-white">about</strong>   - Show this help message</p>
            <p><strong className="text-white">whoami</strong>  - Display bio</p>
            <p><strong className="text-white">contact</strong> - Show contact info</p>
            <p><strong className="text-white">github</strong>  - View GitHub profile link</p>
            <p><strong className="text-white">clear</strong>   - Clear terminal output</p>
          </div>
        )
        break;
      case "whoami":
        output = <div className="text-zinc-300">Nikhil Kudache - Software Engineer studying MSCS at USC. Passionate about building robust systems.</div>
        break;
      case "contact":
        output = <div className="text-zinc-300">Email: nikhilkudache@gmail.com (or via LinkedIn)</div>
        break;
      case "github":
        output = <div className="text-zinc-300">GitHub: <a href="https://github.com/nknick99" target="_blank" className="text-blue-400 hover:underline">github.com/nknick99</a></div>
        break;
      case "clear":
        setHistory([])
        setInput("")
        return;
      default:
        output = <div className="text-red-400">zsh: command not found: {cmd}</div>
    }

    setHistory([...history, { command: input, output }])
    setInput("")
  }

  return (
    <div 
      className="h-full w-full bg-zinc-950 p-6 font-mono text-sm text-green-400 overflow-y-auto cursor-text select-text"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex flex-col gap-4">
        <div className="whitespace-pre-wrap">
          {displayedCode}
        </div>
        
        {displayedCode.length === codeSnippet.length && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <div className="space-y-4 text-zinc-300 max-w-2xl">
              <h1 className="text-2xl font-bold text-white">Hi, I'm Nikhil Kudache</h1>
              <p>
                Software Engineer building backend systems, full-stack applications, and cloud infrastructure that solve real problems.
                Currently pursuing my MSCS at USC and developing research platforms.
              </p>
              <p className="text-zinc-500">
                Type 'about' to see available commands or open other apps from the Dock to explore my portfolio.
              </p>
            </div>
            
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">nikhil@macbook-pro ~ %</span>
                  <span className="text-white">{item.command}</span>
                </div>
                <div>{item.output}</div>
              </div>
            ))}

            <form onSubmit={handleCommand} className="flex items-center gap-2">
              <span className="text-green-400 shrink-0">nikhil@macbook-pro ~ %</span>
              <input 
                ref={inputRef}
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white caret-zinc-400"
                autoFocus
              />
            </form>
          </motion.div>
        )}
        <div ref={bottomRef} />
      </div>
    </div>
  )
}
