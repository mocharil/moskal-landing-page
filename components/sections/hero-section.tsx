"use client"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedHeading } from "@/components/ui/animated-heading"
import { MoskalDashboard } from "@/components/sections/moskal-dashboard"
import ShineBorder from "@/components/ui/shine-border"
import ShimmerButton from "@/components/ui/shimmer-button"

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

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-200/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
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
            <AnimatedHeading
              text="AI that helps you track "
              rotatingTexts={[
                "public sentiment",
                "what people say",
                "market trends",
                "brand presence",
                "audience engagement",
                "online conversations",
                "emerging narratives",
              ]}
              primaryWord="AI"
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-gradient-blue leading-tight"
            />
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
            <div className="w-full h-[300px] md:h-[500px] max-w-5xl overflow-hidden rounded-lg">
              <MoskalDashboard />
            </div>
          </ShineBorder>
        </motion.div>
      </div>
    </section>
  )
}
