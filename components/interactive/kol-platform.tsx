"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Users, TrendingUp, TrendingDown, ExternalLink, Filter } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

export function KOLPlatform() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [isRefreshing, setIsRefreshing] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Simulate data refresh
  useEffect(() => {
    const interval = setInterval(() => {
      setIsRefreshing(true)
      setTimeout(() => setIsRefreshing(false), 1000)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const kolData = [
    {
      id: 1,
      username: "@jadiojkofficial",
      platform: "tiktok.com",
      avatar: "https://avatar.vercel.sh/jadi",
      accountType: "Human",
      mentions: 47,
      reach: "396.10",
      followers: "37.7K",
      shareOfVoice: "2.98%",
      trend: "up",
      topics: [
        "OJK Administrative Staff Recruitment Registration",
        "Government Recruitment and Job Opportunities",
        "How to check SLIK OJK online",
        "OJK 2025",
      ],
      sentiment: {
        positive: 0.0,
        negative: 2.13,
        neutral: 97.87,
      },
      influenceScore: 18,
    },
    {
      id: 2,
      username: "@potatocurlycrunch.id",
      platform: "tiktok.com",
      avatar: "https://avatar.vercel.sh/potato",
      accountType: "Human",
      mentions: 27,
      reach: "1.1K",
      followers: "120.6K",
      shareOfVoice: "1.71%",
      trend: "up",
      topics: [
        "Curly fries with cheese sauce",
        "Delicious curly fries with sauce",
        "Curly potatoes dipped in black pepper sauce",
        "Abundant cheese sauce on curly fries",
      ],
      sentiment: {
        positive: 96.3,
        negative: 0.0,
        neutral: 3.7,
      },
      influenceScore: 45,
    },
    {
      id: 3,
      username: "@newsportal_id",
      platform: "instagram.com",
      avatar: "https://avatar.vercel.sh/news",
      accountType: "Media",
      mentions: 89,
      reach: "2.3K",
      followers: "245.2K",
      shareOfVoice: "4.12%",
      trend: "down",
      topics: [
        "Breaking: Economic Policy Updates",
        "Government Response to Trade Issues",
        "Market Analysis and Predictions",
        "Financial Sector Developments",
      ],
      sentiment: {
        positive: 15.5,
        negative: 35.2,
        neutral: 49.3,
      },
      influenceScore: 72,
    },
    {
      id: 4,
      username: "@buzzaccount_2024",
      platform: "twitter.com",
      avatar: "https://avatar.vercel.sh/buzz",
      accountType: "Buzzer",
      mentions: 156,
      reach: "892",
      followers: "12.4K",
      shareOfVoice: "6.78%",
      trend: "up",
      topics: [
        "Political Campaign Messages",
        "Coordinated Hashtag Campaigns",
        "Amplified Government Policies",
        "Repetitive Political Content",
      ],
      sentiment: {
        positive: 78.9,
        negative: 5.1,
        neutral: 16.0,
      },
      influenceScore: 23,
    },
  ]

  const getAccountTypeColor = (type: string) => {
    switch (type) {
      case "Human":
        return "bg-green-50 text-green-700 border-green-200"
      case "Media":
        return "bg-blue-50 text-blue-700 border-blue-200"
      case "Buzzer":
        return "bg-orange-50 text-orange-700 border-orange-200"
      case "Bot":
        return "bg-red-50 text-red-700 border-red-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  const getPlatformIcon = (platform: string) => {
    const baseClasses = "w-3 h-3 rounded-full"
    switch (platform) {
      case "tiktok.com":
        return <div className={`${baseClasses} bg-black`} />
      case "instagram.com":
        return <div className={`${baseClasses} bg-gradient-to-r from-purple-500 to-pink-500`} />
      case "twitter.com":
        return <div className={`${baseClasses} bg-blue-500`} />
      default:
        return <div className={`${baseClasses} bg-gray-400`} />
    }
  }

  return (
    <div className="bg-white rounded-xl border border-blue-100 shadow-lg p-4 md:p-6 h-full overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-blue-600" />
          <h3 className="font-semibold text-lg text-gray-900">KOL Monitor</h3>
        </div>
        <div className="flex items-center gap-2 text-sm text-green-600">
          <motion.div
            className="h-2 w-2 rounded-full bg-green-500"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          Live Feed Active
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {["All", "Individual", "Brand/Media"].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
              activeFilter === filter
                ? "bg-blue-600 text-white shadow-md"
                : "bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200"
            }`}
          >
            {filter}
          </button>
        ))}
        <button className="ml-auto px-4 py-2 text-sm bg-gray-50 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-2 border border-gray-200">
          <Filter className="h-4 w-4" />
          Filters
        </button>
      </div>

      {/* KOL Cards - Mobile Responsive */}
      <div className="space-y-4 overflow-y-auto flex-1">
        {kolData.map((kol, index) => (
          <motion.div
            key={kol.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-gradient-to-r from-blue-50/50 to-white border border-blue-100 rounded-lg p-4 hover:shadow-md transition-all"
          >
            {/* Profile Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img
                      src={kol.avatar || "/placeholder.svg"}
                      alt={kol.username}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                        target.nextElementSibling!.classList.remove("hidden")
                      }}
                    />
                    <div className="hidden w-full h-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                      {kol.username.charAt(1).toUpperCase()}
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center border border-gray-200">
                    {getPlatformIcon(kol.platform)}
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-gray-900 truncate">{kol.username}</h4>
                    <ExternalLink className="h-3 w-3 text-gray-400 flex-shrink-0" />
                  </div>
                  <p className="text-sm text-gray-600 truncate">{kol.platform}</p>
                  <div
                    className={`inline-block px-2 py-1 text-xs rounded-full border mt-1 ${getAccountTypeColor(kol.accountType)}`}
                  >
                    {kol.accountType}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <span className="font-semibold text-gray-900">{kol.mentions}</span>
                {kol.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
              <div className="text-center p-2 bg-white rounded-lg border border-blue-100">
                <div className="text-sm font-semibold text-gray-900">{kol.reach}</div>
                <div className="text-xs text-gray-600">Reach</div>
              </div>
              <div className="text-center p-2 bg-white rounded-lg border border-blue-100">
                <div className="text-sm font-semibold text-gray-900">{kol.followers}</div>
                <div className="text-xs text-gray-600">Followers</div>
              </div>
              <div className="text-center p-2 bg-white rounded-lg border border-blue-100">
                <div className="text-sm font-semibold text-blue-600">{kol.shareOfVoice}</div>
                <div className="text-xs text-gray-600">Share</div>
              </div>
              <div className="text-center p-2 bg-white rounded-lg border border-blue-100">
                <div className="text-sm font-semibold text-purple-600">{kol.influenceScore}%</div>
                <div className="text-xs text-gray-600">Influence</div>
              </div>
            </div>

            {/* Topics */}
            <div className="mb-3">
              <h5 className="text-sm font-medium text-gray-900 mb-2">Top Topics</h5>
              <div className="space-y-1">
                {kol.topics.slice(0, 2).map((topic, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                    <span className="text-sm text-blue-700 truncate">{topic}</span>
                  </div>
                ))}
                {kol.topics.length > 2 && (
                  <div className="text-xs text-gray-500 ml-3.5">+{kol.topics.length - 2} more topics</div>
                )}
              </div>
            </div>

            {/* Sentiment */}
            <div>
              <h5 className="text-sm font-medium text-gray-900 mb-2">Sentiment Analysis</h5>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-center p-2 bg-green-50 rounded border border-green-200">
                  <div className="font-semibold text-green-700">{kol.sentiment.positive.toFixed(1)}%</div>
                  <div className="text-green-600">Positive</div>
                </div>
                <div className="text-center p-2 bg-gray-50 rounded border border-gray-200">
                  <div className="font-semibold text-gray-700">{kol.sentiment.neutral.toFixed(1)}%</div>
                  <div className="text-gray-600">Neutral</div>
                </div>
                <div className="text-center p-2 bg-red-50 rounded border border-red-200">
                  <div className="font-semibold text-red-700">{kol.sentiment.negative.toFixed(1)}%</div>
                  <div className="text-red-600">Negative</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-lg text-center border border-blue-200">
          <div className="text-xl font-bold text-blue-900">4</div>
          <div className="text-sm text-blue-700">Active KOLs</div>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg text-center border border-green-200">
          <div className="text-xl font-bold text-green-900">319</div>
          <div className="text-sm text-green-700">Total Mentions</div>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-3 rounded-lg text-center border border-purple-200">
          <div className="text-xl font-bold text-purple-900">4.8K</div>
          <div className="text-sm text-purple-700">Total Reach</div>
        </div>
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-3 rounded-lg text-center border border-orange-200">
          <div className="text-xl font-bold text-orange-900">39.5%</div>
          <div className="text-sm text-orange-700">Avg Influence</div>
        </div>
      </div>
    </div>
  )
}
