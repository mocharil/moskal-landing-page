"use client"

import { useState, useEffect } from "react"
import { Calendar, Filter, ArrowRight, ArrowUpRight } from "lucide-react"

export function TopicsPlatform() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Simulate data refresh
  useEffect(() => {
    const interval = setInterval(() => {
      setIsRefreshing(true)
      setTimeout(() => setIsRefreshing(false), 1000)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const topicsData = [
    {
      name: "Global Economic Influences and Trade",
      description:
        "This group focuses on the impact of global economic dynamics and trade policies on Indonesia. It includes posts about the impact of Trump's tariffs, economists predicting a US recession, the New Economic Order era, global dynamics as a challenge and opportunity, the impact of Trump's 32% tariff, and the impact of reciprocal rate sentiment. The posts also touch on related issues like the importance of diplomacy and the need for Indonesia to adapt to changing global economic uncertainty. The sentiment is mixed, with some posts expressing concern about the potential negative effects of these global trends, while others emphasize the need for Indonesia to adapt and find new opportunities.",
      mentions: "128",
      reach: "521.74",
      shareOfVoice: "4.78%",
      sentiment: { positive: 15, neutral: 70, negative: 15 },
    },
    {
      name: "Banking and Financial Institution Activities",
      description:
        "Performance, strategies, and business activities of various banks and financial institutions in Indonesia.",
      mentions: "110",
      reach: "448.58",
      shareOfVoice: "4.11%",
      sentiment: { positive: 48, neutral: 49, negative: 3 },
    },
    {
      name: "Miscellaneous and Unclear Context",
      description: "Various topics that do not fit into other categories or lack sufficient context.",
      mentions: "91",
      reach: "379.98",
      shareOfVoice: "3.40%",
      sentiment: { positive: 20, neutral: 65, negative: 15 },
    },
    {
      name: "Economic Indicators and Market Trends",
      description: "Deals with economic indicators, market trends, stock market performance, and financial analysis.",
      mentions: "81",
      reach: "208.78",
      shareOfVoice: "3.02%",
      sentiment: { positive: 25, neutral: 45, negative: 30 },
    },
  ]

  // Helper function to render sentiment gauge
  const renderSentimentGauge = (positive: number, neutral: number, negative: number) => {
    return (
      <div className="flex items-center gap-1">
        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden flex">
          <div className="h-full bg-green-500" style={{ width: `${positive}%` }}></div>
          <div className="h-full bg-gray-400" style={{ width: `${neutral}%` }}></div>
          <div className="h-full bg-red-500" style={{ width: `${negative}%` }}></div>
        </div>
        <div className="flex gap-1 items-center">
          <div className="w-3 h-3">
            <svg viewBox="0 0 36 36" className="w-full h-full">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#22c55e"
                strokeWidth="3"
                strokeDasharray={`${positive}, 100`}
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="w-3 h-3">
            <svg viewBox="0 0 36 36" className="w-full h-full">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#ef4444"
                strokeWidth="3"
                strokeDasharray={`${negative}, 100`}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 h-full overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Topic analysis: bank indonesia</h2>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm border border-gray-300 rounded-md text-gray-700">
            <Calendar className="h-4 w-4" />
            <span>Date Filter</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md">
            <Filter className="h-4 w-4" />
            <span>Advance Filter</span>
          </button>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-800">Overview</h3>
        <p className="text-sm text-gray-600">Explore the pivotal issues and emerging trends in the politic arena</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200 text-sm text-gray-600">
              <th className="py-2 px-4 text-left font-medium">Topic Name</th>
              <th className="py-2 px-4 text-left font-medium">Description</th>
              <th className="py-2 px-4 text-left font-medium">Mentions</th>
              <th className="py-2 px-4 text-left font-medium">Reach</th>
              <th className="py-2 px-4 text-left font-medium">Share of Voice</th>
              <th className="py-2 px-4 text-left font-medium">Sentiment Share</th>
            </tr>
          </thead>
          <tbody>
            {topicsData.map((topic, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 text-sm font-medium text-gray-800">{topic.name}</td>
                <td className="py-4 px-4 text-sm text-gray-600 max-w-md">
                  <div className="line-clamp-3">{topic.description}</div>
                </td>
                <td className="py-4 px-4 text-sm text-blue-600 font-medium">
                  <div className="flex items-center gap-1">
                    {topic.mentions} <ArrowUpRight className="h-3 w-3" />
                  </div>
                </td>
                <td className="py-4 px-4 text-sm text-gray-800">{topic.reach}</td>
                <td className="py-4 px-4 text-sm text-blue-600 font-medium">{topic.shareOfVoice}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-between gap-4">
                    {renderSentimentGauge(topic.sentiment.positive, topic.sentiment.neutral, topic.sentiment.negative)}
                    <button className="text-xs text-blue-600 flex items-center gap-1">
                      Learn more <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
