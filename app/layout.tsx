import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Moskal - AI-Powered Sentiment Monitoring for Indonesia",
  description:
    "Track public sentiment across Indonesia with AI. Real-time monitoring, analysis, and insights from social media conversations.",
  keywords: ["sentiment analysis", "social media monitoring", "Indonesia", "AI", "public opinion", "analytics"],
  authors: [{ name: "Moskal Team" }],
  creator: "Moskal",
  publisher: "Moskal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/moskal-icon.png", sizes: "32x32", type: "image/png" },
      { url: "/moskal-icon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/moskal-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/moskal-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moskal.id",
    title: "Moskal - AI-Powered Sentiment Monitoring for Indonesia",
    description:
      "Track public sentiment across Indonesia with AI. Real-time monitoring, analysis, and insights from social media conversations.",
    siteName: "Moskal",
    images: [
      {
        url: "/moskal-icon.png",
        width: 1200,
        height: 630,
        alt: "Moskal - AI-Powered Sentiment Monitoring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moskal - AI-Powered Sentiment Monitoring for Indonesia",
    description:
      "Track public sentiment across Indonesia with AI. Real-time monitoring, analysis, and insights from social media conversations.",
    images: ["/moskal-icon.png"],
    creator: "@moskal_id",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="icon" href="/moskal-icon.png" sizes="any" />
        <link rel="icon" href="/moskal-icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/moskal-icon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
