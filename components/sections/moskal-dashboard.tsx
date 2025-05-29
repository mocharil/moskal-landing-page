"use client"

import { useState } from "react"

export function MoskalDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard")

  return (
    <div className="flex h-[300px] md:h-[500px]">
      {/* Sidebar */}
      <div className="w-48 bg-white border-r border-gray-200 flex flex-col shadow-md">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-gray-600">Add new keywords</span>
            <button className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
              +
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-900">bank indonesia</span>
            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 p-2">
          <nav className="space-y-1">
            {[
              { icon: "📊", label: "Dashboard", active: true },
              { icon: "📝", label: "Topics", active: false },
              { icon: "📋", label: "Summary", active: false },
              { icon: "📈", label: "Analysis", active: false },
              { icon: "⚖️", label: "Comparison", active: false },
              { icon: "👥", label: "KOL", active: false },
              { icon: "🤖", label: "Moskal AI", active: false },
              { icon: "💬", label: "Mentions", active: false },
              { icon: "📄", label: "Generate Report", active: false },
              { icon: "⚙️", label: "Settings", active: false },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(item.label)}
                className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                  activeTab === item.label
                    ? "bg-blue-600/20 text-blue-400 border-l-2 border-blue-500"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <span className="text-xs">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Expandable Items */}
          <div className="mt-6 space-y-1">
            {[
              "ganjar pranowo",
              "sandiaga uno",
              "koperasi merah putih",
              "kadin cilegon",
              "Vaksin TBC",
              "Anies Baswedan",
              "jokowi",
              "ferry julintono",
              "Budi Arie Setiadi",
            ].map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-between px-3 py-1.5 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded"
              >
                <span className="truncate">{item}</span>
                <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* User Profile */}
        <div className="p-3 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-xs text-white">P</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-gray-900 truncate">PERMANA</div>
              <div className="text-xs text-gray-600 truncate">admin@gmail.com</div>
            </div>
            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-blue-50 shadow-md">
        {/* Top Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="text-xl font-bold text-gray-900">MOSKAL</div>
            <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
              <span className="text-blue-600">#</span>
              <span>bank indonesia</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 text-xs border border-gray-300 rounded text-gray-600 hover:bg-gray-100 flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Date Filter
            </button>
            <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                />
              </svg>
              Advance Filter
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for keywords... use commas (,) for multiple keywords"
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-600 placeholder-gray-500 pr-10"
            />
            <div className="absolute right-3 top-2.5">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input type="checkbox" className="w-3 h-3" />
            <span className="text-xs text-gray-600">Search exact phrase</span>
          </div>
        </div>

        {/* Platform Tabs */}
        <div className="flex border-b border-gray-200 px-4">
          {["All Platform", "Tiktok", "X/Twitter", "Instagram", "Media"].map((platform, index) => (
            <button
              key={platform}
              className={`px-4 py-3 text-sm font-medium transition-colors ${
                index === 0 ? "text-blue-400 border-b-2 border-blue-500" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {platform}
            </button>
          ))}
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-4 overflow-auto">
          {activeTab === "Dashboard" && (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                {/* Topics to Watch */}
                <div className="lg:col-span-2">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-medium text-gray-900">Topics to watch</h3>
                      <span className="text-orange-500">🔥</span>
                    </div>
                    <button className="text-xs text-blue-400 hover:text-blue-300">See all Topics</button>
                  </div>

                  <div className="space-y-3">
                    {/* Topic 1 */}
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-sm font-medium text-gray-900">Global Economic Influences and Trade</h4>
                        <button className="text-xs text-blue-400 hover:text-blue-300">Learn more ↗</button>
                      </div>
                      <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                        This group focuses on the impact of global economic dynamics and trade policies on Indonesia. It
                        includes posts about the impact of Trump's tariffs, economists predicting a US recession...
                      </p>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="text-gray-600">128 Mentions</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-green-400">1.56% positive</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-red-400">3.31% negative</span>
                        </div>
                        <span className="text-gray-600">94.53% neutral</span>
                      </div>
                    </div>

                    {/* Topic 2 */}
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-sm font-medium text-gray-900">
                          Banking and Financial Institution Activities
                        </h4>
                        <button className="text-xs text-blue-400 hover:text-blue-300">Learn more ↗</button>
                      </div>
                      <p className="text-xs text-gray-600 mb-3">
                        Performance, strategies, and business activities of various banks and financial institutions in
                        Indonesia.
                      </p>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="text-gray-600">98 Mentions</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-green-400">0.00% positive</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-red-400">33.33% negative</span>
                        </div>
                        <span className="text-gray-600">66.67% neutral</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* KOL to Watch */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-medium text-gray-900">KOL to Watch</h3>
                    <button className="text-xs text-blue-400 hover:text-blue-300">See all KOL</button>
                  </div>

                  <div className="space-y-3">
                    {/* KOL 1 */}
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">@hendriaprila</div>
                            <div className="text-xs text-gray-600">tiktok • 15K followers</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="px-2 py-1 bg-red-100 text-red-400 text-xs rounded">Negative driver</span>
                          <button className="text-xs text-blue-400">Visit ↗</button>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 mb-1">Influence level 10.00/10</div>
                      <div className="text-xs text-gray-600">Activity discussing</div>
                      <div className="text-xs text-blue-400">• Perilaku predator (Predator behavior)</div>
                    </div>

                    {/* KOL 2 */}
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">@cleverbitcoin</div>
                            <div className="text-xs text-gray-600">tiktok • 21.3K followers</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="px-2 py-1 bg-red-100 text-red-400 text-xs rounded">Negative driver</span>
                          <button className="text-xs text-blue-400">Visit ↗</button>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 mb-1">Influence level 9.48/10</div>
                      <div className="text-xs text-gray-600">Activity discussing</div>
                      <div className="text-xs text-blue-400">• The Dark Side of Fiat Money</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary Stats */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-medium text-gray-900">Summary</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span className="text-xs text-gray-600">bank indonesia • Presence Score 14%</span>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-gray-900">15.7K</div>
                    <div className="text-xs text-green-400">6.4K (+68%)</div>
                    <div className="text-xs text-gray-600">Mentions</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">67.9K</div>
                    <div className="text-xs text-green-400">40.2K (+145%)</div>
                    <div className="text-xs text-gray-600">Reach</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">3.9M</div>
                    <div className="text-xs text-red-400">-1.1M (-22%)</div>
                    <div className="text-xs text-gray-600">Interactions</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">4.2K</div>
                    <div className="text-xs text-green-400">+900 (+27%)</div>
                    <div className="text-xs text-gray-600">Positive</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">2.9K</div>
                    <div className="text-xs text-red-400">+64 (+2%)</div>
                    <div className="text-xs text-gray-600">Negative</div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "Topics" && (
            <div className="text-center py-8">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Topics Analysis</h3>
              <p className="text-gray-600">Detailed topic analysis and trending discussions</p>
            </div>
          )}

          {activeTab === "Analysis" && (
            <div className="text-center py-8">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Analysis</h3>
              <p className="text-gray-600">Deep dive analytics and sentiment trends</p>
            </div>
          )}

          {activeTab !== "Dashboard" && activeTab !== "Topics" && activeTab !== "Analysis" && (
            <div className="text-center py-8">
              <h3 className="text-lg font-medium text-gray-900 mb-2">{activeTab}</h3>
              <p className="text-gray-600">This section is coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
