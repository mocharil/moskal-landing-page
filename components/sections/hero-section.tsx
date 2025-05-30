"use client"
import React from "react"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { WordRotate } from "@/components/ui/word-rotate"
import ShineBorder from "@/components/ui/shine-border"
import ShimmerButton from "@/components/ui/shimmer-button"

// Lazy load heavy dashboard component
const MoskalDashboard = dynamic(() => import("@/components/sections/moskal-dashboard").then(mod => ({ default: mod.MoskalDashboard })), {
  loading: () => (
    <div className="w-full h-[300px] md:h-[500px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
      <div className="text-blue-600 text-lg font-medium">Loading Dashboard Preview...</div>
    </div>
  ),
  ssr: false
})

interface HeroSectionProps {
  onGetStarted: () => void
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-100/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_65%)]" />

        {/* Static background elements - deterministic positioning */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {[
            { left: 23.8, top: 21.9, delay: 2.87, duration: 4.26 },
            { left: 37.8, top: 47.3, delay: 0.91, duration: 4.46 },
            { left: 2.38, top: 63.5, delay: 2.45, duration: 4.77 },
            { left: 38.7, top: 9.08, delay: 1.07, duration: 3.42 },
            { left: 76.2, top: 34.3, delay: 2.22, duration: 4.73 },
            { left: 58.9, top: 88.7, delay: 2.55, duration: 4.92 },
            { left: 12.8, top: 57.9, delay: 1.92, duration: 3.79 },
            { left: 7.94, top: 33.4, delay: 2.21, duration: 3.50 }
          ].map((dot, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-300/60 rounded-full animate-pulse"
              style={{
                left: `${dot.left}%`,
                top: `${dot.top}%`,
                animationDelay: `${dot.delay}s`,
                animationDuration: `${dot.duration}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-gradient-blue leading-tight">
              <span>AI that helps you track </span>
              <WordRotate
                words={[
                  "public sentiment",
                  "what people say",
                  "market trends",
                  "brand presence",
                  "audience engagement",
                  "online conversations",
                  "emerging narratives",
                ]}
              />
            </div>
            <div className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent leading-tight mt-2">
              in real time before it hits the headlines
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Moskal tracks millions of public conversations across Indonesia with AI to surface early signals, shifting
            narratives, and sentiment trends. So you can act before the story breaks.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <ShimmerButton
              onClick={onGetStarted}
              shimmerColor="#ffffff"
              background="linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)"
              className="px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg font-medium"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </ShimmerButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative w-full max-w-5xl mx-auto flex justify-center"
        >
          <ShineBorder
            className="relative bg-white/80 backdrop-blur-sm border-0 shadow-light-lg"
            borderRadius={12}
            borderWidth={2}
            duration={14}
            color={["#3b82f6", "#60a5fa", "#93c5fd"]}
          >
            {/* This div and its content are now children of ShineBorder */}
            <div className="w-full h-[300px] md:h-[500px] max-w-5xl overflow-hidden rounded-lg">
              <MoskalDashboard />
            </div>
          </ShineBorder>
        </motion.div>
      </div>
    </section>
  )
}
