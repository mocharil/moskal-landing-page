"use client"

import { useState } from "react"
import { BarChart3, Calendar, Filter, Download, Star, Trash2 } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

export function ComparisonPlatform() {
  const [activeTab, setActiveTab] = useState("projects")
  const isMobile = useMediaQuery("(max-width: 768px)")

  const projects = [
    {
      name: "bank indonesia",
      color: "#3B82F6",
      metrics: {
        totalMentions: "15.7K",
        socialMediaMentions: "1.7K",
        nonSocialMediaMentions: "14.1K",
        positiveMentions: "+28% (+905)",
        negativeMentions: "+2% (+68)",
        socialMediaReach: "42.2K",
        nonSocialMediaReach: "26.1K",
        presenceScore: "14/100",
      },
      shareOfVoice: {
        reach: 55.95,
        mentions: 55.95,
      },
      sentiment: {
        positive: 26.62,
        neutral: 54.62,
        negative: 18.76,
      },
      channels: {
        news: 85,
        tiktok: 8,
        instagram: 4,
        youtube: 2,
        twitter: 1,
      },
      starred: ["totalMentions", "nonSocialMediaMentions", "positiveMentions"],
    },
    {
      name: "koperasi merah putih",
      color: "#10B981",
      metrics: {
        totalMentions: "7.1K",
        socialMediaMentions: "2.3K",
        nonSocialMediaMentions: "4.8K",
        positiveMentions: "+50% (+687)",
        negativeMentions: "+64% (+167)",
        socialMediaReach: "44.3K",
        nonSocialMediaReach: "9.4K",
        presenceScore: "16/100",
      },
      shareOfVoice: {
        reach: 44.05,
        mentions: 44.05,
      },
      sentiment: {
        positive: 28,
        neutral: 62,
        negative: 10,
      },
      channels: {
        news: 65,
        tiktok: 25,
        instagram: 7,
        youtube: 2,
        twitter: 1,
      },
      starred: ["socialMediaMentions", "socialMediaReach", "presenceScore"],
    },
  ]

  const renderDonutChart = (title: string, data: { name: string; color: string; value: number }[]) => {
    const total = data.reduce((sum, item) => sum + item.value, 0)
    let cumulativePercent = 0

    return (
      <div className="relative">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
            {data.map((item, i) => {
              const startPercent = cumulativePercent
              const valuePercent = (item.value / total) * 100
              cumulativePercent += valuePercent

              const circumference = 2 * Math.PI * 35
              const strokeDasharray = `${(valuePercent / 100) * circumference} ${circumference}`
              const strokeDashoffset = -((startPercent / 100) * circumference)

              return (
                <circle
                  key={i}
                  cx="50"
                  cy="50"
                  r="35"
                  fill="none"
                  stroke={item.color}
                  strokeWidth="8"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-300"
                />
              )
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-800">{title}</div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          {data.map((item, i) => (
            <div key={i} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-gray-600">{item.value.toFixed(2)}%</span>
                <span className="text-gray-800">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderSentimentChart = (project: (typeof projects)[0]) => {
    return (
      <div className="flex flex-col items-center">
        <div className="w-16 h-40 bg-gray-200 rounded-lg overflow-hidden flex flex-col-reverse mb-2">
          <div
            className="bg-green-500 transition-all duration-500"
            style={{ height: `${project.sentiment.positive}%` }}
          ></div>
          <div
            className="bg-gray-400 transition-all duration-500"
            style={{ height: `${project.sentiment.neutral}%` }}
          ></div>
          <div
            className="bg-orange-500 transition-all duration-500"
            style={{ height: `${project.sentiment.negative}%` }}
          ></div>
        </div>
        <div className="text-xs text-gray-600 text-center">{project.name}</div>
        <div className="mt-2 space-y-1 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Positive: {project.sentiment.positive}%</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <span>Neutral: {project.sentiment.neutral}%</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span>Negative: {project.sentiment.negative}%</span>
          </div>
        </div>
      </div>
    )
  }

  const renderChannelChart = (project: (typeof projects)[0]) => {
    const channels = [
      { name: "news", color: "#3B82F6", value: project.channels.news },
      { name: "tiktok", color: "#10B981", value: project.channels.tiktok },
      { name: "instagram", color: "#F59E0B", value: project.channels.instagram },
      { name: "youtube", color: "#EF4444", value: project.channels.youtube },
      { name: "twitter", color: "#8B5CF6", value: project.channels.twitter },
    ]

    return (
      <div className="flex flex-col items-center">
        <div className="w-16 h-40 bg-gray-200 rounded-lg overflow-hidden flex flex-col-reverse mb-2">
          {channels.map((channel, i) => (
            <div
              key={i}
              className="transition-all duration-500"
              style={{
                backgroundColor: channel.color,
                height: `${channel.value}%`,
              }}
            ></div>
          ))}
        </div>
        <div className="text-xs text-gray-600 text-center">{project.name}</div>
        <div className="mt-2 space-y-1 text-xs">
          {channels.map((channel, i) => (
            <div key={i} className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: channel.color }}></div>
              <span>
                {channel.name}: {channel.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 min-h-[600px] flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-blue-600" />
          <h3 className="font-medium text-lg text-blue-600">Moskal Comparison</h3>
        </div>
        <div className="flex items-center gap-2 text-sm text-blue-600">
          <Download className="h-4 w-4" />
          Export to CSV
        </div>
      </div>

      {/* Tabs */}
      <div className="flex mb-6 border-b border-gray-200">
        {[
          { id: "projects", label: "Compare projects" },
          { id: "periods", label: "Compare periods" },
          { id: "topics", label: "Compare topics" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === tab.id ? "text-white bg-blue-600 rounded-t-lg" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-600">
          <Calendar className="h-4 w-4" />
          <span>Last 30 days</span>
        </div>
        <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-600">
          <Filter className="h-4 w-4" />
          <span>Filter all</span>
        </button>
      </div>

      {/* Project Selection */}
      <div className="space-y-3 mb-6">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: project.color }}></div>
              <span className="text-gray-800 font-medium">{project.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <select className="bg-white border border-gray-200 rounded px-3 py-1 text-sm">
                <option>{project.name}</option>
              </select>
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <Filter className="h-4 w-4" />
              </button>
              {index > 0 && (
                <button className="p-1 text-gray-400 hover:text-red-600">
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add Project */}
      <div className="mb-8">
        <button className="text-blue-600 text-sm font-medium flex items-center gap-1">
          <span>Compare more project</span>
          <span className="text-lg">+</span>
        </button>
      </div>

      <div className="min-h-[500px]">
        <div className="flex-1 overflow-y-auto space-y-6 max-h-[800px]">
          {/* Overview Table */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-semibold text-gray-800">Overview</h4>
              <button className="text-sm text-blue-600 flex items-center gap-1">
                <span>Export to CSV</span>
                <Download className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 text-gray-600 font-medium">Project</th>
                    {projects.map((project) => (
                      <th key={project.name} className="text-left py-3 px-4 min-w-[200px]">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: project.color }}></div>
                          <span className="text-gray-800 font-medium">{project.name}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { key: "totalMentions", label: "Total Mentions" },
                    { key: "socialMediaMentions", label: "Social media mentions" },
                    { key: "nonSocialMediaMentions", label: "Non-social media mentions" },
                    { key: "positiveMentions", label: "Positive mentions" },
                    { key: "negativeMentions", label: "Negative mentions" },
                    { key: "socialMediaReach", label: "Social media reach" },
                    { key: "nonSocialMediaReach", label: "Non-social media reach" },
                    { key: "presenceScore", label: "Presence score" },
                  ].map((row) => (
                    <tr key={row.key} className="border-b border-gray-100">
                      <td className="py-4 text-gray-600 font-medium">{row.label}</td>
                      {projects.map((project) => (
                        <td key={project.name} className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-800 font-medium">
                              {project.metrics[row.key as keyof typeof project.metrics]}
                            </span>
                            {project.starred.includes(row.key) && (
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Share of Voice */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Share of voice</h4>
              <div className="grid grid-cols-2 gap-4">
                {renderDonutChart("Reach", [
                  { name: projects[0].name, color: projects[0].color, value: projects[0].shareOfVoice.reach },
                  { name: projects[1].name, color: projects[1].color, value: projects[1].shareOfVoice.reach },
                ])}
                {renderDonutChart("Mentions", [
                  { name: projects[0].name, color: projects[0].color, value: projects[0].shareOfVoice.mentions },
                  { name: projects[1].name, color: projects[1].color, value: projects[1].shareOfVoice.mentions },
                ])}
              </div>
            </div>

            {/* Sentiment Breakdown */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Sentiment breakdown</h4>
              <div className="text-sm text-gray-500 mb-4">Hover on the chart to see detail</div>
              <div className="flex justify-around items-end">
                {projects.map((project, index) => (
                  <div key={index}>{renderSentimentChart(project)}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Channels Share */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Channels share</h4>
            <div className="text-sm text-gray-500 mb-4">Hover on the chart to see detail</div>
            <div className="flex justify-around items-end">
              {projects.map((project) => renderChannelChart(project))}
            </div>
          </div>

          {/* Comparison Summary */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Comparison Summary</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-700 mb-2">Total Mentions</h5>
                <p className="text-sm text-gray-600">
                  {projects[0].name}: {projects[0].metrics.totalMentions}
                  <br />
                  {projects[1].name}: {projects[1].metrics.totalMentions}
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-700 mb-2">Social Media Reach</h5>
                <p className="text-sm text-gray-600">
                  {projects[0].name}: {projects[0].metrics.socialMediaReach}
                  <br />
                  {projects[1].name}: {projects[1].metrics.socialMediaReach}
                </p>
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Insights</h4>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>
                {projects[0].name} has higher total mentions with {projects[0].metrics.totalMentions} vs{" "}
                {projects[1].metrics.totalMentions}
              </li>
              <li>
                {projects[1].name} shows better social media reach with {projects[1].metrics.socialMediaReach} vs{" "}
                {projects[0].metrics.socialMediaReach}
              </li>
              <li>
                Sentiment analysis shows {projects[1].name} has more positive sentiment (
                {projects[1].sentiment.positive}% vs {projects[0].sentiment.positive}%)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
