"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, Send, BarChart3, PieChart, LineChart, ArrowUpRight, ArrowDownRight, HelpCircle } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

export function AIPlatform() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [showChart, setShowChart] = useState(false)
  const [activeTab, setActiveTab] = useState("sentiment")
  const isMobile = useMediaQuery("(max-width: 768px)")

  const messages = [
    {
      type: "ai",
      content: "Hello, PERMANA! Ask me anything about your project data.",
      timestamp: "Just now",
    },
    {
      type: "user",
      content: "Show me the sentiment analysis for Bank Indonesia",
      timestamp: "2 min ago",
    },
    {
      type: "ai",
      content: `Based on your current data analysis, here's the sentiment breakdown for Bank Indonesia:

**Overall Sentiment Distribution:**
• Positive: 42.3% (↑ 5.2% from last week)
• Neutral: 31.7% (↓ 2.1% from last week)  
• Negative: 26.0% (↓ 3.1% from last week)

**Key Insights:**
The positive sentiment has increased significantly, primarily driven by discussions around recent monetary policy announcements. The negative sentiment decrease suggests improved public reception.

I've prepared some visualizations to help you understand the data better. Would you like to see the sentiment trend over time or the topic breakdown?`,
      timestamp: "2 min ago",
    },
    {
      type: "user",
      content: "Show me both visualizations please",
      timestamp: "1 min ago",
    },
  ]

  const quickQuestions = [
    "Who are the top influencers?",
    "What topics are trending today?",
    "Show me regional sentiment differences",
    "Analyze competitor mentions",
  ]

  const chartData = [
    { day: "Mon", mentions: 1200 },
    { day: "Tue", mentions: 1850 },
    { day: "Wed", mentions: 2100 },
    { day: "Thu", mentions: 1750 },
    { day: "Fri", mentions: 2400 },
    { day: "Sat", mentions: 1900 },
    { day: "Sun", mentions: 1600 },
  ]

  const sentimentTrend = [
    { day: "Mon", positive: 38, neutral: 42, negative: 20 },
    { day: "Tue", positive: 35, neutral: 40, negative: 25 },
    { day: "Wed", positive: 40, neutral: 35, negative: 25 },
    { day: "Thu", positive: 45, neutral: 32, negative: 23 },
    { day: "Fri", positive: 48, neutral: 30, negative: 22 },
    { day: "Sat", positive: 42, neutral: 33, negative: 25 },
    { day: "Sun", positive: 42.3, neutral: 31.7, negative: 26 },
  ]

  const topicSentiment = [
    { topic: "Monetary Policy", positive: 52, neutral: 38, negative: 10 },
    { topic: "Inflation Control", positive: 45, neutral: 30, negative: 25 },
    { topic: "Digital Banking", positive: 60, neutral: 25, negative: 15 },
    { topic: "Financial Inclusion", positive: 48, neutral: 42, negative: 10 },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChart(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Simulate typing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
      }, 1500)
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  const renderSentimentChart = () => (
    <div className="relative h-[180px] mt-4">
      {/* Sentiment trend lines */}
      <div className="absolute inset-0">
        <div className="h-full flex items-end">
          {sentimentTrend.map((day, index) => (
            <div key={index} className="flex-1 h-full flex flex-col justify-end">
              {/* Positive line */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${day.positive}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="w-full relative group"
              >
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-green-500"></div>
                <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-green-500 rounded-full transform -translate-x-1/2"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 bg-white text-xs p-1 rounded shadow pointer-events-none transition-opacity">
                  {day.positive}%
                </div>
              </motion.div>

              {/* Neutral line */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${day.neutral}%` }}
                transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                className="w-full relative group"
              >
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-400"></div>
                <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-gray-400 rounded-full transform -translate-x-1/2"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 bg-white text-xs p-1 rounded shadow pointer-events-none transition-opacity">
                  {day.neutral}%
                </div>
              </motion.div>

              {/* Negative line */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${day.negative}%` }}
                transition={{ duration: 1, delay: index * 0.1 + 0.4 }}
                className="w-full relative group"
              >
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-500"></div>
                <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-red-500 rounded-full transform -translate-x-1/2"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 bg-white text-xs p-1 rounded shadow pointer-events-none transition-opacity">
                  {day.negative}%
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* X-axis labels */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between">
        {sentimentTrend.map((day, index) => (
          <div key={index} className="text-xs text-gray-500 text-center flex-1">
            {day.day}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="absolute top-0 right-0 flex items-center gap-3 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-gray-600">Positive</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <span className="text-gray-600">Neutral</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <span className="text-gray-600">Negative</span>
        </div>
      </div>
    </div>
  )

  const renderTopicChart = () => (
    <div className="mt-4 space-y-3">
      {topicSentiment.map((topic, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white rounded-lg border border-blue-100 p-3"
        >
          <div className="flex justify-between items-center mb-1">
            <div className="text-sm font-medium text-gray-800">{topic.topic}</div>
            <div className="flex items-center gap-2">
              <div className="text-xs text-gray-500">Sentiment:</div>
              <div
                className={`text-xs font-medium ${
                  topic.positive > topic.negative + 10
                    ? "text-green-500"
                    : topic.negative > topic.positive + 10
                      ? "text-red-500"
                      : "text-gray-500"
                }`}
              >
                {topic.positive > topic.negative + 10 ? (
                  <div className="flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-0.5" />
                    Positive
                  </div>
                ) : topic.negative > topic.positive + 10 ? (
                  <div className="flex items-center">
                    <ArrowDownRight className="h-3 w-3 mr-0.5" />
                    Negative
                  </div>
                ) : (
                  "Neutral"
                )}
              </div>
            </div>
          </div>

          <div className="h-2 bg-gray-100 rounded-full overflow-hidden flex">
            <motion.div
              className="bg-green-500 h-full"
              initial={{ width: 0 }}
              animate={{ width: `${topic.positive}%` }}
              transition={{ duration: 1 }}
            />
            <motion.div
              className="bg-gray-400 h-full"
              initial={{ width: 0 }}
              animate={{ width: `${topic.neutral}%` }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <motion.div
              className="bg-red-500 h-full"
              initial={{ width: 0 }}
              animate={{ width: `${topic.negative}%` }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </div>

          <div className="flex justify-between mt-1 text-xs text-gray-500">
            <div>Positive: {topic.positive}%</div>
            <div>Neutral: {topic.neutral}%</div>
            <div>Negative: {topic.negative}%</div>
          </div>
        </motion.div>
      ))}
    </div>
  )

  const renderPieChart = () => (
    <div className="mt-4 flex justify-center">
      <div className="relative w-[180px] h-[180px]">
        {/* Pie chart segments */}
        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#22c55e" // green-500
            strokeWidth="20"
            strokeDasharray={`${42.3 * 2.51} ${100 * 2.51 - 42.3 * 2.51}`}
            initial={{ strokeDashoffset: 251 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#9ca3af" // gray-400
            strokeWidth="20"
            strokeDasharray={`${31.7 * 2.51} ${100 * 2.51 - 31.7 * 2.51}`}
            strokeDashoffset={-(42.3 * 2.51)}
            initial={{ strokeDashoffset: 251 - 42.3 * 2.51 }}
            animate={{ strokeDashoffset: -(42.3 * 2.51) }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#ef4444" // red-500
            strokeWidth="20"
            strokeDasharray={`${26.0 * 2.51} ${100 * 2.51 - 26.0 * 2.51}`}
            strokeDashoffset={-((42.3 + 31.7) * 2.51)}
            initial={{ strokeDashoffset: 251 - (42.3 + 31.7) * 2.51 }}
            animate={{ strokeDashoffset: -((42.3 + 31.7) * 2.51) }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-lg font-bold text-gray-800">42.3%</div>
          <div className="text-xs text-gray-500">Positive</div>
        </div>
      </div>

      {/* Legend */}
      <div className="ml-4 flex flex-col justify-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="text-sm">
            <span className="font-medium">42.3%</span>
            <span className="text-gray-500 ml-1">Positive</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="text-sm">
            <span className="font-medium">31.7%</span>
            <span className="text-gray-500 ml-1">Neutral</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="text-sm">
            <span className="font-medium">26.0%</span>
            <span className="text-gray-500 ml-1">Negative</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="bg-white rounded-lg border border-blue-100 p-3 md:p-6 min-h-[500px] flex flex-col">
      <div className="flex justify-between items-center mb-3 md:mb-6">
        <div className="flex items-center gap-1 md:gap-2">
          <Bot className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
          <h3 className="font-medium text-xs sm:text-sm md:text-base">Moskal AI Assistant</h3>
        </div>
        <div className="flex items-center gap-2 text-[10px] md:text-xs text-green-400">
          <motion.div
            className="h-2 w-2 rounded-full bg-green-500"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          Online
        </div>
      </div>

      {/* Chat Window */}
      <div className="bg-blue-50/50 rounded-lg border border-blue-100/50 h-[300px] md:h-[350px] flex flex-col overflow-hidden">
        {/* Chat Header */}
        <div className="p-3 md:p-4 border-b border-blue-100/50">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <Bot className="h-3 w-3 md:h-4 md:w-4 text-white" />
            </div>
            <div>
              <div className="text-sm md:text-base font-medium text-gray-800">Moskal AI</div>
              <div className="text-xs text-green-400">Active now</div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-3 md:p-4 overflow-y-auto space-y-3 md:space-y-4 min-h-0">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] p-2 md:p-3 rounded-lg ${
                  message.type === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-blue-100/50 text-gray-800 border border-blue-100/50"
                }`}
              >
                <div className="text-xs md:text-sm leading-relaxed whitespace-pre-line">{message.content}</div>
                <div className="text-xs text-gray-400 mt-1">{message.timestamp}</div>
              </div>
            </motion.div>
          ))}

          {/* Typing Indicator */}
          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex justify-start"
              >
                <div className="bg-blue-100/50 border border-blue-100/50 p-2 md:p-3 rounded-lg">
                  <div className="flex items-center gap-1">
                    <div className="flex space-x-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-400 ml-2">AI is typing...</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Visualization Section */}
          {showChart && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg border border-blue-100 p-3 md:p-4 mt-4"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-blue-600" />
                  <h4 className="text-sm font-medium text-gray-800">Bank Indonesia Sentiment Analysis</h4>
                </div>
                <div className="flex items-center">
                  <HelpCircle className="h-3 w-3 text-gray-400" />
                </div>
              </div>

              {/* Visualization Tabs */}
              <div className="flex border-b border-gray-200 mb-2">
                <button
                  onClick={() => setActiveTab("sentiment")}
                  className={`px-3 py-1.5 text-xs font-medium ${
                    activeTab === "sentiment"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <PieChart className="h-3 w-3" />
                    <span>Distribution</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab("trend")}
                  className={`px-3 py-1.5 text-xs font-medium ${
                    activeTab === "trend"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <LineChart className="h-3 w-3" />
                    <span>Trend</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab("topics")}
                  className={`px-3 py-1.5 text-xs font-medium ${
                    activeTab === "topics"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <BarChart3 className="h-3 w-3" />
                    <span>Topics</span>
                  </div>
                </button>
              </div>

              {/* Active Visualization */}
              <AnimatePresence mode="wait">
                {activeTab === "sentiment" && (
                  <motion.div key="sentiment" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {renderPieChart()}
                  </motion.div>
                )}

                {activeTab === "trend" && (
                  <motion.div key="trend" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {renderSentimentChart()}
                  </motion.div>
                )}

                {activeTab === "topics" && (
                  <motion.div key="topics" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {renderTopicChart()}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-3 md:p-4 border-t border-blue-100/50">
          <div className="flex items-center gap-2 bg-blue-50/30 rounded-lg p-2">
            <input
              type="text"
              placeholder="Ask me anything about your data..."
              className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none"
            />
            <button className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Send className="h-3 w-3 md:h-4 md:w-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Questions */}
      <div className="mt-3 md:mt-4">
        <h4 className="text-xs md:text-sm font-medium text-gray-600 mb-2">Quick Questions:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2">
          {quickQuestions.slice(0, isMobile ? 2 : 4).map((question, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-left p-2 bg-blue-50/50 hover:bg-blue-100 rounded-lg text-xs text-gray-600 hover:text-gray-800 transition-colors border border-blue-100/50 hover:border-blue-500/50"
            >
              "{question}"
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}
