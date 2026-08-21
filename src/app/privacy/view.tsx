import Link from "next/link";
import type { ReactNode } from "react";

export const privacyApps = [
  { slug: "wprint", name: "WPrint" },
  { slug: "guesswho", name: "GuessWho" },
];

export type PolicySection = {
  title: string;
  paragraphs: ReactNode[];
};

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-slate-200 pt-7">
      <h2 className="text-xl font-semibold tracking-tight text-slate-950">
        <span className="mr-3 text-blue-600">{number}</span>
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[15px] leading-7 text-slate-600">
        {children}
      </div>
    </section>
  );
}

export function PolicyView({
  activeSlug,
  subtitle,
  updatedAt,
  summary,
  sections,
}: {
  activeSlug: string;
  subtitle: ReactNode;
  updatedAt: string;
  summary: ReactNode;
  sections: PolicySection[];
}) {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 text-slate-900 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 rounded-3xl bg-slate-950 px-6 py-8 text-white shadow-xl shadow-slate-900/10 sm:px-10 sm:py-10">
          <div className="flex items-center gap-3 text-sm font-medium text-blue-200">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 font-bold text-white">
              W
            </span>
            WeLean Technology
          </div>
          <h1 className="mt-7 text-3xl font-bold tracking-tight sm:text-5xl">
            隐私政策 <span className="text-slate-500">/</span> Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
            {subtitle}
          </p>
          <p className="mt-6 text-xs text-slate-400">Last updated / 最后更新：{updatedAt}</p>
        </header>

        <nav className="mb-8 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs font-medium uppercase tracking-wide text-slate-500">
            应用 / Apps
          </span>
          {privacyApps.map((app) =>
            app.slug === activeSlug ? (
              <span
                key={app.slug}
                aria-current="page"
                className="rounded-full bg-slate-950 px-4 py-1.5 text-sm font-medium text-white shadow"
              >
                {app.name}
              </span>
            ) : (
              <Link
                key={app.slug}
                href={`/privacy/${app.slug}`}
                className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-xl shadow-slate-900/5 ring-1 ring-slate-200 transition hover:text-slate-950 hover:ring-slate-300"
              >
                {app.name}
              </Link>
            )
          )}
        </nav>

        <article className="space-y-8 rounded-3xl bg-white px-6 py-8 shadow-xl shadow-slate-900/5 sm:px-12 sm:py-12">
          <div className="rounded-2xl border border-blue-100 bg-blue-50 px-5 py-4 text-sm leading-6 text-blue-950">
            {summary}
          </div>

          {sections.map((section, index) => (
            <Section
              key={section.title}
              number={String(index + 1).padStart(2, "0")}
              title={section.title}
            >
              {section.paragraphs}
            </Section>
          ))}

          <footer className="border-t border-slate-200 pt-7 text-sm text-slate-500">
            <Link className="font-medium text-blue-700 hover:text-blue-900" href="/">
              ← 返回 WeLean Technology 首页 / Back to home
            </Link>
            <p className="mt-3">© 2026 WeLean Technology. All Rights Reserved.</p>
          </footer>
        </article>
      </div>
    </main>
  );
}
