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
        positiveMentions: "+28% (+907)",
        negativeMentions: "+2% (+68)",
        socialMediaReach: "42.3K",
        nonSocialMediaReach: "26.1K",
        presenceScore: "14/100",
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
        positiveMentions: "+51% (+697)",
        negativeMentions: "+65% (+168)",
        socialMediaReach: "44.6K",
        nonSocialMediaReach: "9.4K",
        presenceScore: "16/100",
      },
      starred: ["socialMediaMentions", "socialMediaReach", "presenceScore"],
    },
  ]

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 w-full">
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
      <div className="mb-6">
        <button className="text-blue-600 text-sm font-medium flex items-center gap-1">
          <span>Compare more project</span>
          <span className="text-lg">+</span>
        </button>
      </div>

      {/* Overview Section */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800">Overview</h4>
          <button className="text-sm text-blue-600 flex items-center gap-1 hover:text-blue-800 transition-colors">
            <span>Export to CSV</span>
            <Download className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Project</th>
                {projects.map((project) => (
                  <th key={project.name} className="text-left py-3 px-4 min-w-[200px]">
                    <span className="text-gray-800 font-medium">{project.name}</span>
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
                <tr key={row.key} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-600 font-medium">{row.label}</td>
                  {projects.map((project) => (
                    <td key={project.name} className="py-3 px-4">
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
    </div>
  )
}
