"use client"

import { motion } from "framer-motion"
import { TeamVisualization } from "@/components/interactive/team-visualization"
import ShimmerButton from "@/components/ui/shimmer-button"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-blue-50/50 to-white">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 border border-blue-200/30 rounded-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,71,171,0.08),transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-1"
          >
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">About Our Mission</h2>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
              Founded in 2023, Moskal was created with a singular vision: to democratize access to cutting-edge
              technology. We believe that powerful tools should be accessible to everyone, regardless of technical
              expertise.
            </p>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
              Our team of passionate engineers and designers work tirelessly to create intuitive, powerful solutions
              that solve real-world problems and empower our users to achieve more.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8">
              <motion.div
                className="bg-blue-50 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-base border border-blue-200"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-blue-600 font-medium">50+</span> Team Members
              </motion.div>
              <motion.div
                className="bg-blue-50 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-base border border-blue-200"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-blue-600 font-medium">10k+</span> Customers
              </motion.div>
              <motion.div
                className="bg-blue-50 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-base border border-blue-200"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-blue-600 font-medium">99.9%</span> Uptime
              </motion.div>
            </div>
            <ShimmerButton
              onClick={() => window.open("https://dashboard.moskal.id/", "_blank")}
              className="border-blue-500 text-blue-600 hover:bg-blue-50 text-sm sm:text-base px-6 py-3"
              shimmerColor="#3b82f6"
              shimmerSize="0.1em"
              shimmerDuration="2s"
              borderRadius="8px"
              background="transparent"
            >
              Learn More About Us
            </ShimmerButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-500/20 rounded-lg blur-xl" />
              <div className="relative rounded-lg overflow-hidden border border-blue-200 shadow-xl">
                <div className="w-full h-[300px] md:h-[400px] bg-white">
                  <TeamVisualization />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
