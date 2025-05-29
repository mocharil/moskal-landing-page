"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface SimpleGlobeProps {
  className?: string
}

export function SimpleGlobe({ className }: SimpleGlobeProps) {
  const [pulseIndex, setPulseIndex] = useState(0)
  const [dataFlow, setDataFlow] = useState(0)

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseIndex(prev => (prev + 1) % 10)
    }, 800)

    const flowInterval = setInterval(() => {
      setDataFlow(prev => (prev + 1) % 100)
    }, 50)

    return () => {
      clearInterval(pulseInterval)
      clearInterval(flowInterval)
    }
  }, [])

  // Major Indonesian cities with accurate relative positions
  const cities = [
    { name: "Jakarta", x: 35, y: 65, size: "large", color: "#00BFFF", population: "10.5M" }, // DeepSkyBlue
    { name: "Surabaya", x: 55, y: 68, size: "medium", color: "#87CEEB", population: "2.9M" }, // SkyBlue
    { name: "Medan", x: 15, y: 25, size: "medium", color: "#AFEEEE", population: "2.4M" }, // PaleTurquoise
    { name: "Bandung", x: 32, y: 67, size: "medium", color: "#40E0D0", population: "2.5M" }, // Turquoise
    { name: "Makassar", x: 75, y: 75, size: "medium", color: "#48D1CC", population: "1.4M" }, // MediumTurquoise
    { name: "Denpasar", x: 60, y: 78, size: "medium", color: "#00CED1", population: "900K" }, // DarkTurquoise
    { name: "Yogyakarta", x: 45, y: 68, size: "small", color: "#20B2AA", population: "400K" }, // LightSeaGreen
    { name: "Palembang", x: 25, y: 55, size: "small", color: "#5F9EA0", population: "1.7M" }, // CadetBlue
    { name: "Manado", x: 85, y: 35, size: "small", color: "#B0E0E6", population: "450K" }, // PowderBlue
    { name: "Banda Aceh", x: 12, y: 15, size: "small", color: "#ADD8E6", population: "220K" }, // LightBlue
  ]

  return (
    <div className={cn("relative w-full h-full flex items-center justify-center", className)}>
      {/* Main Map Container */}
      <div className="relative w-96 h-80 bg-[#030E4F] rounded-2xl shadow-2xl overflow-hidden border border-blue-700/30">
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Indonesia Land Masses - More Accurate Shapes */}
        <div className="absolute inset-0">
          {/* Sumatra */}
          <div 
            className="absolute bg-[#1B3A6F] shadow-lg"
            style={{ 
              left: '8%', 
              top: '15%', 
              width: '20px', 
              height: '55px',
              clipPath: 'polygon(30% 0%, 70% 10%, 85% 25%, 90% 50%, 80% 75%, 60% 90%, 40% 95%, 20% 85%, 10% 60%, 15% 30%)',
              transform: 'rotate(-15deg)'
            }}
          />
          
          {/* Java */}
          <div 
            className="absolute bg-[#1B3A6F] shadow-lg"
            style={{ 
              left: '28%', 
              top: '62%', 
              width: '45px', 
              height: '12px',
              clipPath: 'polygon(0% 20%, 15% 0%, 40% 5%, 70% 15%, 90% 30%, 100% 60%, 85% 85%, 60% 100%, 30% 95%, 10% 80%, 0% 50%)'
            }}
          />
          
          {/* Kalimantan */}
          <div 
            className="absolute bg-[#1B3A6F] shadow-lg"
            style={{ 
              left: '45%', 
              top: '35%', 
              width: '35px', 
              height: '40px',
              clipPath: 'polygon(20% 0%, 80% 5%, 95% 25%, 90% 50%, 85% 75%, 70% 90%, 50% 95%, 30% 90%, 15% 75%, 10% 50%, 5% 25%)'
            }}
          />
          
          {/* Sulawesi */}
          <div 
            className="absolute bg-[#1B3A6F] shadow-lg"
            style={{ 
              left: '72%', 
              top: '40%', 
              width: '18px', 
              height: '35px',
              clipPath: 'polygon(40% 0%, 60% 10%, 80% 30%, 70% 50%, 90% 70%, 80% 90%, 60% 85%, 40% 95%, 20% 80%, 30% 60%, 10% 40%, 20% 20%)',
              transform: 'rotate(15deg)'
            }}
          />
          
          {/* Papua */}
          <div 
            className="absolute bg-[#1B3A6F] shadow-lg"
            style={{ 
              left: '82%', 
              top: '50%', 
              width: '25px', 
              height: '20px',
              clipPath: 'polygon(0% 30%, 30% 0%, 70% 10%, 100% 40%, 90% 70%, 70% 90%, 40% 100%, 10% 80%)'
            }}
          />

          {/* Bali & Nusa Tenggara */}
          <div 
            className="absolute bg-[#1B3A6F] shadow-lg"
            style={{ 
              left: '58%', 
              top: '75%', 
              width: '20px', 
              height: '8px',
              clipPath: 'polygon(0% 40%, 25% 0%, 75% 20%, 100% 60%, 80% 100%, 20% 80%)'
            }}
          />
        </div>

        {/* City Markers with Enhanced Visuals */}
        {cities.map((city, index) => {
          const isActive = index === pulseIndex
          const coords = { left: `${city.x}%`, top: `${city.y}%` }
          
          return (
            <div
              key={city.name}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={coords}
            >
              {/* Main City Dot */}
              <div
                className={cn(
                  "rounded-full border-2 border-white shadow-lg transition-all duration-300 relative z-10",
                  city.size === "large" && "w-5 h-5",
                  city.size === "medium" && "w-4 h-4", 
                  city.size === "small" && "w-3 h-3",
                  isActive && "scale-125"
                )}
                style={{ backgroundColor: city.color }}
              />
              
              {/* Pulse Rings */}
              {isActive && (
                <>
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 animate-ping"
                    style={{ 
                      borderColor: city.color,
                      width: city.size === "large" ? "24px" : city.size === "medium" ? "20px" : "16px",
                      height: city.size === "large" ? "24px" : city.size === "medium" ? "20px" : "16px"
                    }}
                  />
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border animate-ping"
                    style={{ 
                      borderColor: city.color,
                      width: city.size === "large" ? "32px" : city.size === "medium" ? "28px" : "24px",
                      height: city.size === "large" ? "32px" : city.size === "medium" ? "28px" : "24px",
                      animationDelay: "0.2s"
                    }}
                  />
                </>
              )}

              {/* City Info Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-black/80 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap backdrop-blur-sm border border-white/20">
                  <div className="font-semibold">{city.name}</div>
                  <div className="text-gray-300">{city.population}</div>
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
              </div>
            </div>
          )
        })}

        {/* Data Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {cities.slice(0, 6).map((city, index) => {
            const nextCity = cities[(index + 1) % 6]
            const opacity = Math.sin((dataFlow + index * 20) * 0.1) * 0.3 + 0.4
            
            return (
              <line
                key={`connection-${index}`}
                x1={`${city.x}%`}
                y1={`${city.y}%`}
                x2={`${nextCity.x}%`}
                y2={`${nextCity.y}%`}
                stroke="rgba(59, 130, 246, 0.6)"
                strokeWidth="1"
                strokeDasharray="3,3"
                style={{ opacity }}
              />
            )
          })}
        </svg>

        {/* Floating Data Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${15 + (i * 7) % 70}%`,
                top: `${20 + (i * 11) % 60}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + (i % 3)}s`,
                opacity: Math.sin((dataFlow + i * 30) * 0.05) * 0.5 + 0.5
              }}
            />
          ))}
        </div>

        {/* Scanning Effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(${dataFlow * 3.6}deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)`
          }}
        />

        {/* Corner Indicators */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-green-400 font-medium">LIVE</span>
        </div>

        <div className="absolute top-4 right-4 text-xs text-blue-400 font-medium">
          {cities.length} NODES
        </div>

        {/* Bottom Status Bar */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2 border border-blue-500/30">
            <div className="flex items-center justify-between text-xs">
              <span className="text-blue-300">Network Status</span>
              <span className="text-green-400 font-semibold">OPTIMAL</span>
            </div>
            <div className="mt-1 flex gap-1">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="h-1 bg-blue-500/30 rounded-full flex-1"
                  style={{
                    backgroundColor: i < 8 ? '#3B82F6' : '#1E40AF',
                    opacity: Math.sin((dataFlow + i * 10) * 0.1) * 0.3 + 0.7
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Orbital Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[1, 2].map((ring) => (
          <div
            key={ring}
            className="absolute border border-blue-400/20 rounded-full animate-spin"
            style={{
              width: `${380 + ring * 60}px`,
              height: `${320 + ring * 50}px`,
              animationDuration: `${30 + ring * 20}s`,
              animationDirection: ring % 2 === 0 ? 'reverse' : 'normal'
            }}
          />
        ))}
      </div>
    </div>
  )
}
