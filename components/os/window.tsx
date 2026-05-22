"use client"

import { motion, useAnimationControls } from "framer-motion"
import { Maximize2, Minus, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface WindowProps {
  id: string
  title: string
  isActive: boolean
  zIndex: number
  onClose: () => void
  onFocus: () => void
  onMinimize: () => void
  children: React.ReactNode
  defaultSize?: { width: number | string; height: number | string }
  defaultPosition?: { x: number; y: number }
  constraintsRef: React.RefObject<HTMLDivElement>
}

export function Window({
  title,
  isActive,
  zIndex,
  onClose,
  onFocus,
  onMinimize,
  children,
  defaultSize = { width: 800, height: 500 },
  defaultPosition = { x: 50, y: 50 },
  constraintsRef,
}: WindowProps) {
  const [isMaximized, setIsMaximized] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const windowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (mobile) setIsMaximized(true)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])
  
  // Variants for window states
  const variants = {
    normal: {
      width: defaultSize.width,
      height: defaultSize.height,
      x: defaultPosition.x,
      y: defaultPosition.y,
      borderRadius: 12,
    },
    maximized: {
      width: "100%",
      height: isMobile ? "calc(100% - 90px)" : "calc(100% - 40px)", // Leave room for dock on mobile
      x: 0,
      y: 0,
      borderRadius: isMobile ? 12 : 0,
    },
  }

  return (
    <motion.div
      drag={!isMobile}
      dragConstraints={constraintsRef}
      dragHandle=".title-bar"
      dragMomentum={false}
      onDragStart={() => {
        if (isMaximized) setIsMaximized(false);
      }}
      whileDrag={{ scale: 1.02, rotate: 1, cursor: "grabbing" }}
      initial="normal"
      animate={isMaximized ? "maximized" : "normal"}
      variants={variants}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onMouseDown={onFocus}
      style={{ zIndex }}
      className={`absolute overflow-hidden border border-border/50 bg-card/95 backdrop-blur-xl shadow-2xl ${
        isActive ? "ring-1 ring-primary/30 shadow-primary/10" : "opacity-95"
      }`}
    >
      {/* macOS Title Bar */}
      <div 
        className={`title-bar flex h-10 w-full items-center justify-between px-4 ${
          isActive ? "bg-secondary/80" : "bg-secondary/40"
        }`}
        onDoubleClick={() => { if (!isMobile) setIsMaximized(!isMaximized) }}
      >
        {/* Traffic Lights */}
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="group flex h-3 w-3 items-center justify-center rounded-full bg-red-500 hover:bg-red-600 transition-colors"
          >
            <X className="h-2 w-2 opacity-0 group-hover:opacity-100 text-black/50" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onMinimize(); }}
            className="group flex h-3 w-3 items-center justify-center rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
          >
            <Minus className="h-2 w-2 opacity-0 group-hover:opacity-100 text-black/50" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); if (!isMobile) setIsMaximized(!isMaximized); }}
            className="group flex h-3 w-3 items-center justify-center rounded-full bg-green-500 hover:bg-green-600 transition-colors"
          >
            <Maximize2 className="h-2 w-2 opacity-0 group-hover:opacity-100 text-black/50" />
          </button>
        </div>

        {/* Title */}
        <div className="flex-1 text-center font-medium text-xs text-muted-foreground select-none pointer-events-none">
          {title}
        </div>
        
        {/* Spacer to balance traffic lights */}
        <div className="w-[52px]" />
      </div>

      {/* App Content */}
      <div className="h-[calc(100%-40px)] w-full overflow-y-auto overflow-x-hidden bg-background/50">
        {children}
      </div>
    </motion.div>
  )
}
