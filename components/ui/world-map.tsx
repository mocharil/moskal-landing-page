"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string }
    end: { lat: number; lng: number; label?: string }
  }>
  lineColor?: string
}

export function WorldMap({ dots = [], lineColor = "#0047AB" }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  const projectPoint = (lat: number, lng: number) => {
    // Simple equirectangular projection
    const x = (lng + 180) * (800 / 360)
    const y = (90 - lat) * (400 / 180)
    return { x, y }
  }

  const createCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2
    const midY = Math.min(start.y, end.y) - 40
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`
  }

  // Simple world map paths (simplified continents)
  const worldMapPaths = [
    // Asia (simplified)
    "M400,120 Q450,100 500,120 Q550,110 600,130 Q650,120 700,140 L700,200 Q650,220 600,210 Q550,200 500,210 Q450,220 400,200 Z",
    // Europe (simplified)
    "M350,100 Q380,90 420,100 Q450,95 480,105 L480,150 Q450,160 420,155 Q380,150 350,145 Z",
    // Africa (simplified)
    "M350,150 Q380,140 420,150 Q450,145 480,155 L480,280 Q450,290 420,285 Q380,280 350,275 Z",
    // North America (simplified)
    "M100,80 Q150,70 200,80 Q250,75 300,85 L300,180 Q250,190 200,185 Q150,180 100,175 Z",
    // South America (simplified)
    "M150,200 Q180,190 220,200 Q250,195 280,205 L280,320 Q250,330 220,325 Q180,320 150,315 Z",
    // Australia (simplified)
    "M550,280 Q580,270 620,280 Q650,275 680,285 L680,320 Q650,330 620,325 Q580,320 550,315 Z",
  ]

  return (
    <div className="w-full aspect-[2/1] bg-gradient-to-br from-blue-50/50 to-white rounded-xl relative overflow-hidden border border-blue-100 shadow-lg">
      {/* World Map Background */}
      <svg viewBox="0 0 800 400" className="w-full h-full absolute inset-0">
        <defs>
          <pattern id="dots" patternUnits="userSpaceOnUse" width="8" height="8">
            <circle cx="4" cy="4" r="0.8" fill="#e5e7eb" opacity="0.6" />
          </pattern>

          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="15%" stopColor={lineColor} stopOpacity="0.8" />
            <stop offset="85%" stopColor={lineColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="pointGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="70%" stopColor={lineColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0.3" />
          </radialGradient>
        </defs>

        {/* Dotted world background */}
        <rect width="800" height="400" fill="url(#dots)" />

        {/* Simplified world continents */}
        {worldMapPaths.map((path, index) => (
          <path key={index} d={path} fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="1" opacity="0.7" />
        ))}

        {/* Indonesia archipelago highlight */}
        <g fill="#0047AB" fillOpacity="0.15" stroke="#0047AB" strokeWidth="1.5" strokeOpacity="0.4">
          <ellipse cx="580" cy="220" rx="28" ry="10" /> {/* Java */}
          <ellipse cx="550" cy="200" rx="18" ry="35" transform="rotate(-20 550 200)" /> {/* Sumatra */}
          <ellipse cx="590" cy="190" rx="22" ry="28" /> {/* Kalimantan */}
          <ellipse cx="620" cy="200" rx="14" ry="22" transform="rotate(15 620 200)" /> {/* Sulawesi */}
          <ellipse cx="650" cy="210" rx="20" ry="18" /> {/* Papua */}
          <ellipse cx="540" cy="240" rx="12" ry="8" /> {/* Bali */}
        </g>
      </svg>

      {/* Connection Lines and Points */}
      <svg ref={svgRef} viewBox="0 0 800 400" className="w-full h-full absolute inset-0 pointer-events-none">
        {/* Connection Lines */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng)
          const endPoint = projectPoint(dot.end.lat, dot.end.lng)
          const pathId = `path-${i}`

          return (
            <g key={`connection-${i}`}>
              <motion.path
                id={pathId}
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="2.5"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />

              {/* Animated data flow particles */}
              <motion.circle
                r="3"
                fill={lineColor}
                fillOpacity="0.9"
                filter="url(#glow)"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.6 + 2,
                  ease: "easeInOut",
                }}
              >
                <animateMotion dur="4s" repeatCount="indefinite" begin={`${i * 0.6 + 2}s`}>
                  <mpath href={`#${pathId}`} />
                </animateMotion>
              </motion.circle>
            </g>
          )
        })}

        {/* Connection Points */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng)
          const endPoint = projectPoint(dot.end.lat, dot.end.lng)

          return (
            <g key={`points-${i}`}>
              {/* Start Point */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
              >
                <circle cx={startPoint.x} cy={startPoint.y} r="5" fill="url(#pointGradient)" filter="url(#glow)" />
                <circle
                  cx={startPoint.x}
                  cy={startPoint.y}
                  r="5"
                  fill="none"
                  stroke={lineColor}
                  strokeWidth="1"
                  strokeOpacity="0.7"
                >
                  <animate attributeName="r" values="5;15;5" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.7;0;0.7" dur="3s" repeatCount="indefinite" />
                </circle>
              </motion.g>

              {/* End Point */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.3 + 0.4 }}
              >
                <circle cx={endPoint.x} cy={endPoint.y} r="5" fill="url(#pointGradient)" filter="url(#glow)" />
                <circle
                  cx={endPoint.x}
                  cy={endPoint.y}
                  r="5"
                  fill="none"
                  stroke={lineColor}
                  strokeWidth="1"
                  strokeOpacity="0.7"
                >
                  <animate attributeName="r" values="5;15;5" dur="3s" repeatCount="indefinite" begin="1s" />
                  <animate
                    attributeName="stroke-opacity"
                    values="0.7;0;0.7"
                    dur="3s"
                    repeatCount="indefinite"
                    begin="1s"
                  />
                </circle>
              </motion.g>
            </g>
          )
        })}
      </svg>

      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-blue-50/20 pointer-events-none" />
    </div>
  )
}
