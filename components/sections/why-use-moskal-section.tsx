"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Clock, Scale, Zap, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

interface WhyUseMoskalSectionProps {
  onGetStarted: () => void
}

export function WhyUseMoskalSection({ onGetStarted }: WhyUseMoskalSectionProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const features = [
    {
      id: 1,
      icon: <Scale size={24} />,
      title: "Neutral by Design",
      description:
        "Moskal's AI algorithms are engineered to be politically neutral. This ensures unbiased analysis of public sentiment across the entire political spectrum—without favoring one side or narrative. The result: a platform that informs, not influences.",
      color: "blue",
      accentColor: "#3b82f6",
      gradientFrom: "from-blue-500/20",
      gradientTo: "to-blue-600/20",
      borderColor: "border-blue-500/30",
      glowColor: "shadow-blue-500/20",
    },
    {
      id: 2,
      icon: <Clock size={24} />,
      title: "Real-time Monitoring",
      description:
        "Track conversations as they unfold with our lightning-fast monitoring system that captures emerging narratives within minutes. In today's fast-paced information environment, waiting hours for updates means missing critical context.",
      color: "green",
      accentColor: "#22c55e",
      gradientFrom: "from-green-500/20",
      gradientTo: "to-emerald-600/20",
      borderColor: "border-green-500/30",
      glowColor: "shadow-green-500/20",
    },
    {
      id: 3,
      icon: <Zap size={24} />,
      title: "From Noise to Signal",
      description:
        "Cut through the chaos. Moskal's advanced AI filters out irrelevant chatter to highlight meaningful patterns, frames, and trends from millions of posts. Focus only on what matters and turn noise into strategic signal.",
      color: "yellow",
      accentColor: "#eab308",
      gradientFrom: "from-yellow-500/20",
      gradientTo: "to-amber-600/20",
      borderColor: "border-yellow-500/30",
      glowColor: "shadow-yellow-500/20",
    },
    {
      id: 4,
      icon: <MapPin size={24} />,
      title: "Regional & Thematic Filters",
      description:
        "Whether you're tracking political shifts in Jakarta or public sentiment in rural Sumatra, Moskal lets you zoom into the details that matter. Filter by region, topic, issue, or timeline to reveal localized trends and demographic nuances across Indonesia.",
      color: "purple",
      accentColor: "#a855f7",
      gradientFrom: "from-purple-500/20",
      gradientTo: "to-violet-600/20",
      borderColor: "border-purple-500/30",
      glowColor: "shadow-purple-500/20",
    },
  ]

  const renderIllustration = (feature: (typeof features)[0]) => {
    const imageMap = {
      1: "/images/why1.png",
      2: "/images/why2.png", 
      3: "/images/why3.png",
      4: "/images/why4.png"
    }

    return (
      <div className="relative h-32 flex items-center justify-center overflow-hidden">
        <motion.img
          src={imageMap[feature.id as keyof typeof imageMap]}
          alt={feature.title}
          className="w-full h-full object-contain"
          animate={hoveredCard === feature.id ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    )
  }

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 border border-blue-200/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Why Use <span className="text-blue-600">Moskal</span>?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our platform transforms millions of public conversations into structured, actionable intelligence—giving you
            the insights you need before narratives become headlines.
          </p>
        </motion.div>

        {/* Gradient Separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
          className="h-px w-full origin-center mx-auto mb-12 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"
          style={{ maxWidth: "32rem" }}
        />

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(feature.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative h-full">
                {/* Glow effect */}
                <div
                  className={cn(
                    "absolute -inset-0.5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500",
                    `bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo}`,
                    feature.glowColor,
                  )}
                />

                {/* Main card */}
                <div
                  className={cn(
                    "relative h-full bg-white/90 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 shadow-lg",
                    feature.borderColor,
                    "group-hover:border-opacity-70 group-hover:shadow-2xl",
                  )}
                  style={{
                    boxShadow: hoveredCard === feature.id ? `0 20px 40px -12px ${feature.accentColor}20` : undefined,
                  }}
                >
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="p-3 rounded-xl text-white"
                      style={{ backgroundColor: feature.accentColor }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">{feature.title}</h3>
                  </div>

                  {/* Illustration */}
                  <div className="mb-6 bg-white rounded-xl p-4 border border-blue-100">
                    {renderIllustration(feature)}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.description}</p>

                  {/* Hover indicator */}
                  <motion.div
                    className="mt-6 flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    style={{ color: feature.accentColor }}
                    whileHover={{ x: 5 }}
                    onClick={onGetStarted}
                  >
                    <span>Explore this feature</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
