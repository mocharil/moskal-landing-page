"use client"

import { motion } from "framer-motion"
import GlobeDemo from "@/components/globe-demo"

export function WhatIsMoskalSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#0047AB]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                What is <span className="text-[#0047AB]">Moskal</span>?
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Moskal is a cutting-edge AI-powered platform meticulously engineered to monitor and analyze political
                sentiment across social media in real-time. Designed for journalists, researchers, and public
                institutions, Moskal empowers you to stay ahead of shifting narratives by transforming millions of
                public conversations into structured, actionable intelligence.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />
                    </svg>
                  ),
                  title: "Real-time Sentiment Analysis",
                  description:
                    "Track public sentiment as it evolves, not after it's already made headlines. Gain instant understanding of perception.",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                      <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                      <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                      <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                      <path d="M10 7h4m-4 10h4M7 10v4m10-4v4" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  ),
                  title: "Cross-Platform Narrative Tracking",
                  description:
                    "Identify how stories develop and spread across diverse social media platforms and online communities.",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                      <circle cx="8" cy="8" r="1" fill="currentColor" />
                      <circle cx="16" cy="12" r="1" fill="currentColor" />
                      <circle cx="10" cy="14" r="1" fill="currentColor" />
                    </svg>
                  ),
                  title: "Deep Regional & Demographic Insights",
                  description:
                    "Understand nuanced sentiment variations across different regions and demographic groups within Indonesia.",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" />
                      <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" />
                      <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" />
                      <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  ),
                  title: "Actionable Intelligence & Reporting",
                  description:
                    "Convert raw social data into strategic insights for impactful reporting, research, or policy decisions.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0047AB]/10 to-[#0047AB]/5 rounded-lg flex items-center justify-center text-[#0047AB] group-hover:from-[#0047AB]/20 group-hover:to-[#0047AB]/10 transition-all duration-300 shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Interactive Globe with Indonesia Focus */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-6 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#0047AB] rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Global Monitoring Network</span>
                </div>
                <div className="text-xs text-gray-500 bg-blue-50 px-3 py-1 rounded-full">Indonesia Focus</div>
              </div>

              <div className="relative z-10 text-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Real-time{" "}
                  <span className="text-[#0047AB]">
                    {"Connectivity".split("").map((letter, idx) => (
                      <motion.span
                        key={idx}
                        className="inline-block"
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: idx * 0.04 }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Monitor sentiment across Indonesia's digital landscape with real-time data connections from major
                  cities and regions.
                </p>
              </div>

              {/* Interactive Globe */}
              <div className="relative h-80 w-full flex items-center justify-center">
                <div className="w-full h-80 -translate-y-24">
                  <GlobeDemo />
                </div>

                {/* Floating connection indicators */}
                <div className="absolute top-4 right-4 space-y-2">
                  {[
                    { city: "Jakarta", status: "active", delay: 0 },
                    { city: "Surabaya", status: "active", delay: 0.2 },
                    { city: "Medan", status: "active", delay: 0.4 },
                  ].map((connection, index) => (
                    <motion.div
                      key={connection.city}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: connection.delay }}
                      className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-sm border border-blue-100"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium text-gray-700">{connection.city}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Data flow indicators */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 border border-blue-100">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Live Data Streams</span>
                      <span className="text-[#0047AB] font-semibold">10 Cities Connected</span>
                    </div>
                    <div className="mt-2 flex gap-1">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="h-1 bg-[#0047AB]/30 rounded-full flex-1"
                          animate={{
                            backgroundColor: [
                              "rgba(0, 71, 171, 0.3)",
                              "rgba(0, 71, 171, 0.8)",
                              "rgba(0, 71, 171, 0.3)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
