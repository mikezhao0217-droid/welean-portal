import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | WeLean Technology",
  description: "Privacy policy for WPrint and WeLean Technology services.",
};

export default function PrivacyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
