"use client"

import { motion } from "framer-motion"
import { ArrowRight, Radio, BarChart3, MapPin, AlertTriangle, Users, Brain } from "lucide-react"
import Image from "next/image"
import ShimmerButton from "@/components/ui/shimmer-button"

interface FeaturesSectionProps {
  onGetStarted: () => void
}

export function FeaturesSection({ onGetStarted }: FeaturesSectionProps) {
  return (
    <section
      id="features"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 border border-blue-200/20 rounded-full"
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

      {/* Network lines background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="#3b82f6"
              strokeWidth="0.5"
              strokeOpacity="0.3"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: i * 0.5,
              }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Intelligence that <span className="text-blue-600">empowers</span> decisions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
              From real-time sentiment tracking to narrative analysis, Moskal provides the insights government agencies,
              researchers, and journalists need to understand the pulse of public opinion.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Radio className="h-8 w-8" />,
              emoji: "📡",
              title: "Stay in tune with public response",
              description:
                "Whether it's a government policy, corporate announcement, or social campaign—Moskal shows you how the public is reacting. Through real-time sentiment analysis and conversation tracking, you'll see the emotional pulse behind every trending topic.",
              color: "bg-blue-600",
              image: "/images/moskal-dashboard-1.png",
            },
            {
              icon: <BarChart3 className="h-8 w-8" />,
              emoji: "📊",
              title: "Measure impact, not just impressions",
              description:
                "How long did your message stay relevant? When did the conversation peak, and what triggered the spike? Moskal helps you look beyond vanity metrics to uncover the true lifespan of a narrative.",
              color: "bg-indigo-600",
              image: "/images/moskal-dashboard-2.png",
            },
            {
              icon: <MapPin className="h-8 w-8" />,
              emoji: "📍",
              title: "See where narratives thrive—or struggle",
              description:
                "Moskal doesn't just show what people are saying, but where. Whether you're focused on national sentiment or zooming into regional hotspots, our geo-tagged insights help you understand the nuance of different communities.",
              color: "bg-purple-600",
              image: "/images/moskal-dashboard-3.png",
            },
            {
              icon: <AlertTriangle className="h-8 w-8" />,
              emoji: "⚠️",
              title: "Detect shifts before they make headlines",
              description:
                "Online conversations are often the earliest indicators of real-world change. With Moskal, you get early warning signals when the public mood begins to shift—so you can act before a trend becomes a crisis.",
              color: "bg-red-600",
              image: "/images/moskal-dashboard-4.png",
            },
            {
              icon: <Users className="h-8 w-8" />,
              emoji: "🧠",
              title: "Decode who's driving the narrative",
              description:
                "Is the conversation being led by citizens? Media? Influencers? Troll farms? Moskal reveals the anatomy of digital discourse—helping you see which actors are amplifying narratives, and how their influence spreads.",
              color: "bg-green-600",
              image: "/images/moskal-dashboard-5.png",
            },
            {
              icon: <Brain className="h-8 w-8" />,
              emoji: "🧩",
              title: "Make sense of the bigger picture",
              description:
                "Social media can feel chaotic. Moskal brings clarity by mapping connections between topics, keywords, and sentiments—turning noise into insight. You'll see emerging frames, overlapping agendas, and shifting priorities.",
              color: "bg-amber-600",
              image: "/images/moskal-dashboard-6.png",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="relative h-full">
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Main card */}
                <div className="relative h-full bg-white/90 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 group-hover:border-blue-300 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  {/* Icon and emoji */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <div className="text-3xl">{feature.emoji}</div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">{feature.description}</p>

                  {/* Dashboard preview */}
                  <div className="relative overflow-hidden rounded-lg border border-blue-100 bg-blue-50/50 mb-4">
                    <motion.div
                      className="relative h-48 md:h-56"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={`${feature.title} dashboard preview`}
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-50/80 to-transparent" />

                      {/* Live indicator */}
                      <div className="absolute top-3 right-3 flex items-center gap-2">
                        <motion.div
                          className="w-2 h-2 bg-blue-600 rounded-full"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        />
                        <span className="text-xs text-gray-700 font-medium">LIVE</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Learn more link */}
                  <motion.div
                    className="flex items-center gap-2 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <span>Explore feature</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-8 py-4 shadow-lg">
            <span className="text-gray-700">Ready to see these features in action?</span>
            <ShimmerButton
              onClick={onGetStarted}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-full"
              shimmerColor="#ffffff"
              shimmerSize="0.1em"
              shimmerDuration="2s"
              borderRadius="24px"
              background="linear-gradient(to right, #2563eb, #1d4ed8)"
            >
              Request Demo
            </ShimmerButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
