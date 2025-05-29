"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Eye, Clock, Scale, Zap, MapPin, Brain } from "lucide-react"
import { cn } from "@/lib/utils"

export function WhyUseMoskalSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const features = [
    {
      id: 1,
      icon: <Scale className="h-6 w-6" />,
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
      icon: <Clock className="h-6 w-6" />,
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
      icon: <Zap className="h-6 w-6" />,
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
      icon: <MapPin className="h-6 w-6" />,
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
    switch (feature.id) {
      case 1: // Neutral by Design
        return (
          <div className="relative h-32 flex items-center justify-center">
            {/* Central AI Brain */}
            <motion.div
              className="relative z-10"
              animate={hoveredCard === 1 ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center relative">
                <Brain className="h-8 w-8 text-white" />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-400/50"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </motion.div>

            {/* Balance Scale in center */}
            <motion.div
              className="absolute top-4 right-4 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center"
              animate={hoveredCard === 1 ? { rotate: [0, 5, -5, 0] } : {}}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Scale className="h-4 w-4 text-blue-400" />
            </motion.div>

            {/* Media Icons */}
            {[
              { icon: "📰", x: -40, y: -20, delay: 0 },
              { icon: "📱", x: 40, y: -20, delay: 0.2 },
              { icon: "📺", x: -40, y: 20, delay: 0.4 },
              { icon: "💬", x: 40, y: 20, delay: 0.6 },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="absolute w-8 h-8 bg-gray-800/80 rounded-full flex items-center justify-center text-sm border border-blue-500/30"
                style={{
                  left: `calc(50% + ${item.x}px)`,
                  top: `calc(50% + ${item.y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
                animate={
                  hoveredCard === 1
                    ? {
                        y: [0, -5, 0],
                        boxShadow: [
                          "0 0 10px rgba(59,130,246,0.3)",
                          "0 0 20px rgba(59,130,246,0.5)",
                          "0 0 10px rgba(59,130,246,0.3)",
                        ],
                      }
                    : {}
                }
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: item.delay }}
              >
                {item.icon}
              </motion.div>
            ))}

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {[
                { x1: "30%", y1: "40%", x2: "50%", y2: "50%" },
                { x1: "70%", y1: "40%", x2: "50%", y2: "50%" },
                { x1: "30%", y1: "60%", x2: "50%", y2: "50%" },
                { x1: "70%", y1: "60%", x2: "50%", y2: "50%" },
              ].map((line, index) => (
                <motion.line
                  key={index}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="#3b82f6"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                  strokeDasharray="2 2"
                  animate={hoveredCard === 1 ? { strokeOpacity: [0.4, 0.8, 0.4] } : {}}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                />
              ))}
            </svg>
          </div>
        )

      case 2: // Real-time Monitoring
        return (
          <div className="relative h-32 flex items-center justify-center">
            {/* Central AI Eye */}
            <motion.div
              className="relative z-10"
              animate={hoveredCard === 2 ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center relative">
                <Eye className="h-8 w-8 text-white" />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-green-400/50"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </motion.div>

            {/* Scanning rays */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-green-500/30"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Social Media Icons */}
            {[
              { icon: "𝕏", angle: 0, distance: 50 },
              { icon: "📱", angle: 72, distance: 50 },
              { icon: "📸", angle: 144, distance: 50 },
              { icon: "📰", angle: 216, distance: 50 },
              { icon: "📺", angle: 288, distance: 50 },
            ].map((item, index) => {
              const x = Math.cos((item.angle * Math.PI) / 180) * item.distance
              const y = Math.sin((item.angle * Math.PI) / 180) * item.distance

              return (
                <motion.div
                  key={index}
                  className="absolute w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-xs border border-green-500/30"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={
                    hoveredCard === 2
                      ? {
                          boxShadow: [
                            "0 0 5px rgba(34,197,94,0.3)",
                            "0 0 15px rgba(34,197,94,0.6)",
                            "0 0 5px rgba(34,197,94,0.3)",
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                >
                  {item.icon}
                </motion.div>
              )
            })}

            {/* Data streams */}
            {[0, 72, 144, 216, 288].map((angle, index) => {
              const startX = Math.cos((angle * Math.PI) / 180) * 20
              const startY = Math.sin((angle * Math.PI) / 180) * 20
              const endX = Math.cos((angle * Math.PI) / 180) * 50
              const endY = Math.sin((angle * Math.PI) / 180) * 50

              return (
                <motion.div
                  key={`stream-${index}`}
                  className="absolute top-1/2 left-1/2 w-1 h-1 bg-green-400 rounded-full"
                  animate={{
                    x: [startX, endX],
                    y: [startY, endY],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.5, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.3,
                    ease: "linear",
                  }}
                />
              )
            })}
          </div>
        )

      case 3: // From Noise to Signal
        return (
          <div className="relative h-32 flex items-center justify-center">
            {/* Noise visualization (left side) */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <div className="relative w-16 h-16">
                {/* Chaotic dots representing noise */}
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-gray-500 rounded-full"
                    style={{
                      left: `${Math.random() * 60}px`,
                      top: `${Math.random() * 60}px`,
                    }}
                    animate={
                      hoveredCard === 3
                        ? {
                            opacity: [0.3, 0.8, 0.3],
                            scale: [0.5, 1.2, 0.5],
                          }
                        : { opacity: 0.5 }
                    }
                    transition={{ duration: 1 + Math.random(), repeat: Number.POSITIVE_INFINITY, delay: Math.random() }}
                  />
                ))}
                {/* Tangled lines */}
                <svg className="absolute inset-0 w-full h-full">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.path
                      key={i}
                      d={`M${Math.random() * 60},${Math.random() * 60} Q${Math.random() * 60},${Math.random() * 60} ${Math.random() * 60},${Math.random() * 60}`}
                      stroke="#6b7280"
                      strokeWidth="0.5"
                      fill="none"
                      strokeOpacity="0.4"
                      animate={hoveredCard === 3 ? { strokeOpacity: [0.2, 0.6, 0.2] } : {}}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                    />
                  ))}
                </svg>
              </div>
            </div>

            {/* AI Filter (center) */}
            <motion.div
              className="relative z-10"
              animate={hoveredCard === 3 ? { scale: 1.1, rotate: [0, 5, -5, 0] } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-400 to-amber-600 flex items-center justify-center relative">
                <Zap className="h-6 w-6 text-white" />
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-yellow-400/50"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </motion.div>

            {/* Signal visualization (right side) */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <div className="relative w-16 h-16">
                {/* Clean line graph */}
                <svg className="w-full h-full">
                  <motion.path
                    d="M4,48 Q12,32 20,36 T36,24 T52,28"
                    stroke="#eab308"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={hoveredCard === 3 ? { pathLength: 1 } : { pathLength: 0.7 }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                  {/* Data points */}
                  {[
                    { x: 12, y: 32 },
                    { x: 28, y: 36 },
                    { x: 44, y: 24 },
                  ].map((point, i) => (
                    <motion.circle
                      key={i}
                      cx={point.x}
                      cy={point.y}
                      r="2"
                      fill="#eab308"
                      animate={
                        hoveredCard === 3
                          ? {
                              scale: [1, 1.5, 1],
                              opacity: [0.7, 1, 0.7],
                            }
                          : {}
                      }
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                    />
                  ))}
                </svg>
                {/* Spotlight effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-radial from-yellow-400/20 to-transparent rounded-full"
                  animate={hoveredCard === 3 ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </div>

            {/* Arrow showing transformation */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={hoveredCard === 3 ? { x: [0, 5, 0] } : {}}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="text-yellow-400 text-xl">→</div>
            </motion.div>
          </div>
        )

      case 4: // Regional & Thematic Filters
        return (
          <div className="relative h-32 flex items-center justify-center">
            {/* Indonesia Map */}
            <div className="relative">
              {/* Simplified Indonesia map shape */}
              <div className="relative w-20 h-12 bg-gradient-to-r from-purple-900/30 to-violet-900/30 rounded-lg border border-purple-500/30">
                {/* Regional hotspots */}
                {[
                  { x: "25%", y: "40%", intensity: 0.8 },
                  { x: "60%", y: "30%", intensity: 0.6 },
                  { x: "75%", y: "60%", intensity: 0.9 },
                  { x: "40%", y: "70%", intensity: 0.7 },
                ].map((spot, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      left: spot.x,
                      top: spot.y,
                      backgroundColor: `rgba(168, 85, 247, ${spot.intensity})`,
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={
                      hoveredCard === 4
                        ? {
                            scale: [1, 1.5, 1],
                            boxShadow: [
                              `0 0 5px rgba(168, 85, 247, ${spot.intensity})`,
                              `0 0 15px rgba(168, 85, 247, ${spot.intensity})`,
                              `0 0 5px rgba(168, 85, 247, ${spot.intensity})`,
                            ],
                          }
                        : {}
                    }
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                  />
                ))}

                {/* Region labels */}
                <div className="absolute -bottom-6 left-0 text-xs text-purple-400">Jakarta</div>
                <div className="absolute -bottom-6 right-0 text-xs text-purple-400">Surabaya</div>
              </div>

              {/* Filter UI Elements */}
              <div className="absolute -top-8 -left-4 space-y-1">
                <motion.div
                  className="bg-gray-800/80 border border-purple-500/30 rounded px-2 py-1 text-xs text-purple-400"
                  animate={hoveredCard === 4 ? { y: [0, -2, 0] } : {}}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                >
                  Region: Jakarta
                </motion.div>
                <motion.div
                  className="bg-gray-800/80 border border-purple-500/30 rounded px-2 py-1 text-xs text-purple-400"
                  animate={hoveredCard === 4 ? { y: [0, -2, 0] } : {}}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                >
                  Topic: Politics
                </motion.div>
              </div>

              <div className="absolute -top-8 -right-4 space-y-1">
                <motion.div
                  className="bg-gray-800/80 border border-purple-500/30 rounded px-2 py-1 text-xs text-purple-400"
                  animate={hoveredCard === 4 ? { y: [0, -2, 0] } : {}}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                >
                  Timeline: 7d
                </motion.div>
              </div>

              {/* Sentiment bars beside regions */}
              <div className="absolute -right-8 top-0 space-y-1">
                {[0.7, 0.4, 0.9].map((height, index) => (
                  <motion.div
                    key={index}
                    className="w-1 bg-purple-500 rounded-full"
                    style={{ height: `${height * 16}px` }}
                    animate={hoveredCard === 4 ? { scaleY: [1, 1.2, 1] } : {}}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                  />
                ))}
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-500/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Animated tech grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

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
              repeat: Number.POSITIVE_INFINITY,
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Why Use <span className="text-blue-600">Moskal</span>?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our platform transforms millions of public conversations into structured, actionable intelligence—giving you
            the insights you need before narratives become headlines.
          </p>
        </motion.div>

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
                  <div className="mb-6 bg-blue-50/50 rounded-xl p-4 border border-blue-100">
                    {renderIllustration(feature)}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.description}</p>

                  {/* Hover indicator */}
                  <motion.div
                    className="mt-6 flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: feature.accentColor }}
                    whileHover={{ x: 5 }}
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
