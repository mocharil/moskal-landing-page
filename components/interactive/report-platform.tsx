"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, Download, Eye, Mail, Calendar, Tag, CheckCircle, X, BarChart3, TrendingUp } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

export function ReportPlatform() {
  const [activeView, setActiveView] = useState<"list" | "summary">("list")
  const [selectedReport, setSelectedReport] = useState<any>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const reports = [
    {
      id: 1,
      project: "bank indonesia",
      dateRange: "25 Apr 2025 - 25 May 2025",
      createdAt: "25 May 2025 at 14:39",
      status: "COMPLETED",
      keywords: ["indonesia payment system", "dewan gubernur bi", "inflasi"],
      emailDelivered: true,
    },
    {
      id: 2,
      project: "koperasi merah putih",
      dateRange: "24 May 2025 - 31 May 2025",
      createdAt: "27 May 2025 at 13:38",
      status: "COMPLETED",
      keywords: ["koperasi simpan pinjam", "permodalan koperasi", "ekonomi kerakyatan"],
      emailDelivered: true,
    },
    {
      id: 3,
      project: "ferry julintono",
      dateRange: "27 Apr 2025 - 27 May 2025",
      createdAt: "27 May 2025 at 13:37",
      status: "COMPLETED",
      keywords: ["koordinator satgas pelaksana", "koperasi desa merah putih", "ferry julintono", "wamenkop"],
      emailDelivered: true,
    },
  ]

  const summaryData = {
    scope: {
      mentions: 1120,
      sentiment: { positive: 22.6, negative: 15.5, neutral: 61.9 },
      period: "May 24th to May 31st, 2025",
      platforms: ["news", "TikTok"],
    },
    dominantTopics: [
      {
        name: "Koperasi Desa Merah Putih (Red and White Village Cooperative) Initiative",
        sentiment: { positive: 4, negative: 0, neutral: 96 },
        color: "green",
      },
      {
        name: "Political Affairs and Governance",
        sentiment: { positive: 3, negative: 37, neutral: 60 },
        color: "red",
      },
      {
        name: "Political Commentary and National Identity",
        sentiment: { positive: 0, negative: 30, neutral: 70 },
        color: "blue",
      },
    ],
    peakPeriod: [
      { day: "24 May", mentions: 180 },
      { day: "25 May", mentions: 220 },
      { day: "26 May", mentions: 160 },
      { day: "27 May", mentions: 280 },
      { day: "28 May", mentions: 190 },
      { day: "29 May", mentions: 140 },
      { day: "30 May", mentions: 160 },
    ],
    recommendations: [
      "Monitor negative sentiment around political governance discussions",
      "Amplify positive narratives about cooperative initiatives",
      "Address concerns about program implementation transparency",
      "Engage with community leaders to improve public perception",
    ],
  }

  const handleViewSummary = (report: any) => {
    setSelectedReport(report)
    setActiveView("summary")
  }

  const handleGenerateReport = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
    }, 3000)
  }

  return (
    <div className="bg-white rounded-lg border border-blue-100 p-3 md:p-6 h-full overflow-hidden flex flex-col">
      <div className="flex justify-between items-center mb-3 md:mb-6">
        <div className="flex items-center gap-1 md:gap-2">
          <FileText className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
          <h3 className="font-medium text-xs sm:text-sm md:text-base text-gray-900">Moskal Report</h3>
        </div>
        <div className="flex items-center gap-2 text-[10px] md:text-xs text-green-400">
          <Mail className="h-3 w-3" />
          Auto-delivered
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeView === "list" ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-3 md:space-y-4 overflow-y-auto flex-1"
          >
            {/* Generate New Report Section */}
            <div className="bg-blue-600 rounded-lg p-3 md:p-4 mb-4">
              <div className="flex items-center gap-2 md:gap-3 mb-2">
                <BarChart3 className="h-4 w-4 md:h-5 md:w-5 text-white" />
                <div>
                  <h4 className="text-white font-medium text-sm md:text-base">Generate Project Report</h4>
                  <p className="text-blue-100 text-xs md:text-sm">
                    Create a sentiment analysis report for project: bank indonesia
                  </p>
                </div>
              </div>
              <button
                onClick={handleGenerateReport}
                disabled={isGenerating}
                className="w-full bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <motion.div
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                    Generating...
                  </>
                ) : (
                  <>
                    <FileText className="h-4 w-4" />
                    Generate & Send Report
                  </>
                )}
              </button>
            </div>

            {/* Report List */}
            <div className="space-y-3">
              <h4 className="text-sm md:text-base font-medium text-gray-900">Recent Reports</h4>
              {reports.map((report, index) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-blue-50/50 rounded-lg border border-blue-100 p-3 md:p-4"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h5 className="text-gray-900 font-medium text-sm md:text-base">{report.project}</h5>
                      <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                        <Calendar className="h-3 w-3" />
                        <span>{report.dateRange}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full border border-green-200">
                        {report.status}
                      </span>
                      {report.emailDelivered && (
                        <div className="flex items-center gap-1 text-xs text-blue-400">
                          <Mail className="h-3 w-3" />
                          {!isMobile && "Delivered"}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="text-xs text-gray-400 mb-1">Created At</div>
                    <div className="text-sm text-gray-700">{report.createdAt}</div>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs text-gray-400 mb-2">Keywords:</div>
                    <div className="flex flex-wrap gap-1">
                      {report.keywords.slice(0, isMobile ? 2 : 3).map((keyword, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded border border-blue-200"
                        >
                          {keyword}
                        </span>
                      ))}
                      {report.keywords.length > (isMobile ? 2 : 3) && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-400 text-xs rounded">
                          +{report.keywords.length - (isMobile ? 2 : 3)} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                      <Download className="h-3 w-3" />
                      Download Report
                    </button>
                    <button
                      onClick={() => handleViewSummary(report)}
                      className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 border border-blue-100"
                    >
                      <Eye className="h-3 w-3" />
                      View Summary
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="summary"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="overflow-y-auto flex-1"
          >
            {/* Summary Header */}
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-sm md:text-base font-medium text-gray-900">
                Report Summary: {selectedReport?.project}
              </h4>
              <button
                onClick={() => setActiveView("list")}
                className="p-1 hover:bg-blue-50 rounded text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Scope and Overall Sentiment */}
              <div className="bg-blue-50/50 rounded-lg p-3 md:p-4 border border-blue-100">
                <h5 className="text-sm font-medium text-blue-600 mb-3 flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <BarChart3 className="h-3 w-3 text-white" />
                  </div>
                  Scope and Overall Sentiment:
                </h5>
                <div className="space-y-2 text-xs md:text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      From {summaryData.scope.period}, there were {summaryData.scope.mentions} mentions of '
                      {selectedReport?.project}' across news and TikTok, with neutral sentiment dominating at{" "}
                      {summaryData.scope.sentiment.neutral}%.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Negative sentiment accounted for {summaryData.scope.sentiment.negative}% of mentions, primarily
                      driven by controversy surrounding Minister Budi Arie and concerns about the program's business
                      model.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Coverage included factual reporting on program developments, political commentary, and
                      opinion-based discussions, particularly on TikTok.
                    </span>
                  </div>
                </div>
              </div>

              {/* Dominant Topics */}
              <div className="bg-blue-50/50 rounded-lg p-3 md:p-4 border border-blue-100">
                <h5 className="text-sm font-medium text-green-600 mb-3 flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <Tag className="h-3 w-3 text-white" />
                  </div>
                  Dominant Topics:
                </h5>
                <div className="space-y-3">
                  {summaryData.dominantTopics.map((topic, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="border-l-4 border-blue-200 pl-3"
                      style={{
                        borderLeftColor:
                          topic.color === "green" ? "#22c55e" : topic.color === "red" ? "#ef4444" : "#3b82f6",
                      }}
                    >
                      <div className="text-sm font-medium text-gray-900 mb-2">{topic.name}</div>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="text-green-600">{topic.sentiment.positive}% Positive</span>
                        <span className="text-red-600">{topic.sentiment.negative}% Negative</span>
                        <span className="text-gray-600">{topic.sentiment.neutral}% Neutral</span>
                      </div>
                      <div className="mt-2 h-2 bg-blue-100 rounded-full overflow-hidden">
                        <div className="h-full flex">
                          <div className="bg-green-500" style={{ width: `${topic.sentiment.positive}%` }}></div>
                          <div className="bg-red-500" style={{ width: `${topic.sentiment.negative}%` }}></div>
                          <div className="bg-gray-500" style={{ width: `${topic.sentiment.neutral}%` }}></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Peak Period Chart */}
              <div className="bg-blue-50/50 rounded-lg p-3 md:p-4 border border-blue-100">
                <h5 className="text-sm font-medium text-purple-600 mb-3 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Peak Period Analysis:
                </h5>
                <div className="h-16 md:h-20 flex items-end justify-between gap-1">
                  {summaryData.peakPeriod.map((data, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center group">
                      <motion.div
                        className="w-full max-w-[16px] md:max-w-[20px] bg-purple-500 rounded-sm cursor-pointer relative"
                        initial={{ height: 0 }}
                        animate={{ height: `${(data.mentions / 300) * 100}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                      >
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                          {data.mentions}
                        </div>
                      </motion.div>
                      <div className="text-xs text-gray-500 mt-1 truncate">{data.day.split(" ")[0]}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Recommendations */}
              <div className="bg-blue-50/50 rounded-lg p-3 md:p-4 border border-blue-100">
                <h5 className="text-sm font-medium text-yellow-600 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Key Recommendations:
                </h5>
                <div className="space-y-2">
                  {summaryData.recommendations.map((rec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-2 text-xs md:text-sm text-gray-700"
                    >
                      <CheckCircle className="h-3 w-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>{rec}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
