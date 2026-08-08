"use client";

import { useState } from "react";
import { Link } from "../../../i18n";
import NextLink from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Home() {
  const t = useTranslations();
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const currentLocale = useLocale();

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Fixed Header - only logo + i18n switcher */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-white font-semibold text-lg">
                {t("nav.brand")}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                  <span>
                    {currentLocale === "en" ? "EN" : t("languageSwitcher.zh")}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isLangDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-gray-800 rounded-md shadow-lg border border-gray-700 py-1 z-50">
                    <Link
                      href="/"
                      locale="en"
                      onClick={() => setIsLangDropdownOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        currentLocale === "en"
                          ? "text-white bg-blue-600"
                          : "text-gray-300 hover:text-white hover:bg-gray-700"
                      }`}
                    >
                      {t("languageSwitcher.en")}
                    </Link>
                    <Link
                      href="/"
                      locale="zh"
                      onClick={() => setIsLangDropdownOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        currentLocale === "zh"
                          ? "text-white bg-blue-600"
                          : "text-gray-300 hover:text-white hover:bg-gray-700"
                      }`}
                    >
                      {t("languageSwitcher.zh")}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 min-h-0 pt-20 pb-4 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-6xl w-full mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-block mb-5">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                <span className="text-white font-bold text-4xl">W</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              {t("nav.brand")}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-semibold">
              {t("hero.vision")}
            </p>
          </div>

          {/* Services */}
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-2xl p-6 sm:p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              {t("services.title")}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  name: t("services.zpl.name"),
                  icon: "🏷️",
                  desc: t("services.zpl.description"),
                  id: "zpl",
                  url: "https://zplprinter.welean.top",
                },
                {
                  name: t("services.creform.name"),
                  icon: "☁️",
                  desc: t("services.creform.description"),
                  id: "creform",
                  url: "https://creform.welean.top",
                },
                {
                  name: t("services.flowforge.name"),
                  icon: "🏭",
                  desc: t("services.flowforge.description"),
                  id: "flowforge",
                  url: "https://flowforge.welean.top",
                },
                {
                  name: t("services.encyclopedia.name"),
                  icon: "🔌",
                  desc: t("services.encyclopedia.description"),
                  disabled: true,
                  id: "encyclopedia",
                },
              ].map((service) =>
                service.disabled ? (
                  <div
                    key={service.id}
                    className="bg-gray-800/50 rounded-xl p-5 text-center opacity-50"
                  >
                    <div className="text-3xl mb-2">{service.icon}</div>
                    <h3 className="text-white font-semibold text-base mb-1">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{service.desc}</p>
                  </div>
                ) : (
                  <a
                    key={service.id}
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/50 rounded-xl p-5 text-center hover:bg-gray-800/70 transition-colors cursor-pointer block"
                  >
                    <div className="text-3xl mb-2">{service.icon}</div>
                    <h3 className="text-white font-semibold text-base mb-1">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{service.desc}</p>
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="text-center text-gray-400 space-y-1">
            <div className="flex items-center justify-center space-x-2">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:mike.zhao@welean.top"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                {t("footer.contact")}
              </a>
            </div>
            <p>{t("footer.copyright")}</p>
            <NextLink
              href="/privacy"
              className="text-sm text-blue-400 transition-colors hover:text-blue-300"
            >
              Privacy Policy / 隐私政策
            </NextLink>
          </div>
        </div>
      </footer>
    </div>
  );
}
