"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedHeadingProps {
  text: string
  rotatingTexts: string[]
  primaryWord?: string
  className?: string
}

export function AnimatedHeading({ text, rotatingTexts, primaryWord, className }: AnimatedHeadingProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [rotatingTexts.length])

  const renderTextWithHighlight = (text: string) => {
    if (!primaryWord) return text

    const parts = text.split(new RegExp(`(${primaryWord})`, "gi"))
    return parts.map((part, index) => {
      if (part.toLowerCase() === primaryWord.toLowerCase()) {
        return (
          <span key={index} className="text-blue-500">
            {part}
          </span>
        )
      }
      return part
    })
  }

  return (
    <div className={cn("", className)}>
      <span>{renderTextWithHighlight(text)}</span>
      <div className="inline-block min-w-0">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-blue-500 inline-block"
          >
            {rotatingTexts[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}
