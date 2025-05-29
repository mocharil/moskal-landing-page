"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { TopicsPlatform } from "@/components/interactive/topics-platform"
import { KOLPlatform } from "@/components/interactive/kol-platform"
import { ReportPlatform } from "@/components/interactive/report-platform"
import { AIPlatform } from "@/components/interactive/ai-platform"
import { ComparisonPlatform } from "@/components/interactive/comparison-platform"
import ShineBorder from "@/components/ui/shine-border"
import ShimmerButton from "@/components/ui/shimmer-button"

interface ProductsSectionProps {
  onGetStarted: () => void
}

export function ProductsSection({ onGetStarted }: ProductsSectionProps) {
  return (
    <section id="products" className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-50/50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,71,171,0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Our Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our suite of innovative products designed to transform your digital experience.
            </p>
          </motion.div>
        </div>

        <div className="space-y-24">
          {/* Moskal Topics */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-gray-900">Moskal Topics</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Uncover what's driving the conversation across Indonesia. Track the most discussed public issues,
                analyze sentiment patterns, and understand the narratives shaping public opinion in real-time.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time topic monitoring across platforms",
                  "AI-generated topic summaries",
                  "Sentiment & emotion breakdowns",
                  "Regional & demographic insights",
                  "Channel share and conversation trends",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <ShimmerButton
                onClick={onGetStarted}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg px-6 py-3"
                shimmerColor="#ffffff"
                shimmerSize="0.1em"
                shimmerDuration="2s"
                borderRadius="8px"
                background="linear-gradient(to right, #2563eb, #1d4ed8)"
              >
                Explore Topics
              </ShimmerButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ShineBorder className="relative overflow-hidden rounded-xl bg-white shadow-xl border border-blue-100">
                <div className="relative h-[300px] md:h-[400px] w-full">
                  <TopicsPlatform />
                </div>
              </ShineBorder>
            </motion.div>
          </div>

          {/* Moskal KOL */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-last space-y-4 md:space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Moskal KOL</h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Identify the most influential figures behind online issues — whether they're influencers, citizens,
                bots, or media — and analyze their reach, narratives, and sentiment impact across Indonesia's digital
                landscape.
              </p>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Track the most active and influential voices",
                  "See what topics they are pushing",
                  "Identify bots, buzzers, media, or genuine users",
                  "Analyze their sentiment, influence, and narrative bias",
                  "Understand how issues spread from key accounts",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 md:gap-3">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <ShimmerButton
                onClick={onGetStarted}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg px-6 py-3"
                shimmerColor="#ffffff"
                shimmerSize="0.1em"
                shimmerDuration="2s"
                borderRadius="8px"
                background="linear-gradient(to right, #2563eb, #1d4ed8)"
              >
                Explore KOL Dashboard
              </ShimmerButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-first"
            >
              <ShineBorder className="relative overflow-hidden rounded-xl bg-white shadow-xl border border-blue-100">
                <div className="relative h-[300px] md:h-[400px] w-full">
                  <KOLPlatform />
                </div>
              </ShineBorder>
            </motion.div>
          </div>

          {/* Moskal Report */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4 md:space-y-6 order-1 md:order-1"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Moskal Report</h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Automated executive insights at your fingertips. Moskal Report automatically compiles a complete
                sentiment analysis summary from tracked topics. Reports are available for download and also sent to your
                email. Executive summaries include narrative scope, sentiment trends, peak periods, and recommendations.
              </p>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Download structured PDF or view summary",
                  "Auto-sent to your email inbox",
                  "See key insights: topics, trends, and tone",
                  "Analyze peak periods and conversation drivers",
                  "Get clear, data-backed recommendations",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 md:gap-3">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <ShimmerButton
                onClick={onGetStarted}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg px-6 py-3"
                shimmerColor="#ffffff"
                shimmerSize="0.1em"
                shimmerDuration="2s"
                borderRadius="8px"
                background="linear-gradient(to right, #2563eb, #1d4ed8)"
              >
                Generate Report
              </ShimmerButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-2"
            >
              <ShineBorder className="relative overflow-hidden rounded-xl bg-white shadow-xl border border-blue-100">
                <div className="relative h-[300px] md:h-[400px] w-full">
                  <ReportPlatform />
                </div>
              </ShineBorder>
            </motion.div>
          </div>

          {/* Moskal AI */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-last space-y-4 md:space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Moskal AI</h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Your always-on assistant for smart decisions. Ask questions about your project data and receive
                contextual insights that help reduce misunderstandings and save time by explaining trends, suggesting
                actions, and clarifying complex data patterns.
              </p>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Ask anything about your dashboard",
                  "Get AI-generated insights and suggestions",
                  "Avoid misunderstandings with clear explanations",
                  "Understand sentiment shifts, influencers, topics",
                  "Personalized, project-aware responses",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 md:gap-3">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <ShimmerButton
                onClick={onGetStarted}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg px-6 py-3"
                shimmerColor="#ffffff"
                shimmerSize="0.1em"
                shimmerDuration="2s"
                borderRadius="8px"
                background="linear-gradient(to right, #2563eb, #1d4ed8)"
              >
                Try AI Assistant
              </ShimmerButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-first"
            >
              <ShineBorder className="relative overflow-hidden rounded-xl bg-white shadow-xl border border-blue-100">
                <div className="relative h-[300px] md:h-[400px] w-full">
                  <AIPlatform />
                </div>
              </ShineBorder>
            </motion.div>
          </div>

          {/* Moskal Comparison */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4 md:space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Moskal Comparison</h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Benchmark narratives and performance across time, topics, and actors. Moskal Comparison helps you
                analyze and compare how different campaigns, issues, or public figures are performing in the media
                landscape. Whether comparing policy impact or narrative sentiment, get the clarity you need in one
                side-by-side dashboard.
              </p>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Compare multiple projects or topics (2, 3 or more)",
                  "Analyze by period, topic, sentiment, and region",
                  "View most viral issues, sentiment breakdowns, and share of voice",
                  "Identify who drives the narrative (influencers, buzzers, media)",
                  "Export comparison insights to CSV",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 md:gap-3">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <ShimmerButton
                onClick={onGetStarted}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg px-6 py-3"
                shimmerColor="#ffffff"
                shimmerSize="0.1em"
                shimmerDuration="2s"
                borderRadius="8px"
                background="linear-gradient(to right, #2563eb, #1d4ed8)"
              >
                Compare Projects
              </ShimmerButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ShineBorder className="relative overflow-hidden rounded-xl bg-white shadow-xl border border-blue-100">
                <div className="relative h-[300px] md:h-[400px] w-full">
                  <ComparisonPlatform />
                </div>
              </ShineBorder>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
