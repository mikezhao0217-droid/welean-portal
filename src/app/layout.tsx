import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WeLean Technology",
  description: "本服务器由 WeLean Technology 运营，用于合法的个人及商业服务。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
