"use client";

import { useState } from "react";

const tabs = [
  { id: "home", label: "首页", external: false },
  { id: "mail", label: "邮件服务", external: true, url: "https://zplprinter.welean.top" },
  { id: "zpl", label: "ZPL打印工具", external: true, url: "https://zplprinter.welean.top" },
  { id: "cloud", label: "云服务", external: false, disabled: true },
  { id: "api", label: "API服务", external: false, disabled: true },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-white font-semibold text-lg">WeLean Technology</span>
            </div>
            <div className="flex space-x-1">
              {tabs.map((tab) => (
                tab.external ? (
                  <a
                    key={tab.id}
                    href={tab.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                  >
                    {tab.label}
                  </a>
                ) : tab.disabled ? (
                  <button
                    key={tab.id}
                    disabled
                    className="px-4 py-2 rounded-md text-sm font-medium text-gray-600 cursor-not-allowed"
                  >
                    {tab.label}
                  </button>
                ) : (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? "text-white bg-blue-600"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    {tab.label}
                  </button>
                )
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                <span className="text-white font-bold text-4xl">W</span>
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              WeLean Technology
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              本服务器由 WeLean Technology 运营，用于合法的个人及商业服务。
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Admin Info */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-colors">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                负责人信息
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-gray-400 w-24 shrink-0">管理员:</span>
                  <span className="text-gray-200">Kasda Polam</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 w-24 shrink-0">联系邮箱:</span>
                  <a href="mailto:kasdafolam985@gmail.com" className="text-blue-400 hover:text-blue-300">
                    kasdafolam985@gmail.com
                  </a>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 w-24 shrink-0">邮件服务器:</span>
                  <span className="text-gray-200">mail.welean.top</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 w-24 shrink-0">IP地址:</span>
                  <span className="text-gray-200 font-mono text-sm">104.129.11.119</span>
                </div>
              </div>
            </div>

            {/* Server Info */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-colors">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
                服务器配置
              </h2>
              <p className="text-gray-300 leading-relaxed">
                服务器已按照行业最佳实践配置，包括但不限于：
              </p>
              <ul className="mt-4 space-y-2">
                {["PTR记录", "SPF记录", "DKIM签名", "DMARC策略"].map((item) => (
                  <li key={item} className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services Preview */}
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">我们的服务</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "邮件服务", icon: "📧", desc: "专业的企业邮件解决方案" },
                { name: "ZPL打印", icon: "🏷️", desc: "标签打印工具与模板" },
                { name: "云服务", icon: "☁️", desc: "即将推出", disabled: true },
                { name: "API服务", icon: "🔌", desc: "即将推出", disabled: true },
              ].map((service) => (
                <div
                  key={service.name}
                  className={`bg-gray-800/50 rounded-lg p-4 text-center ${
                    service.disabled ? "opacity-50" : "hover:bg-gray-800/70 transition-colors cursor-pointer"
                  }`}
                >
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <h3 className="text-white font-medium mb-1">{service.name}</h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>© 2026 WeLean Technology. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
