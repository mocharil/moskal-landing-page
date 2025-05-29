import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Moskal.id: AI-Powered Social Media Monitoring & Trend Analysis in Indonesia",
  description:
    "Moskal empowers businesses and organizations to track millions of public conversations across Indonesia. Leverage our AI platform to surface early signals, understand shifting narratives, and monitor sentiment trends in real-time for strategic decision-making.",
  keywords: ["social media monitoring", "sentiment analysis", "trend analysis", "Indonesia", "AI", "public opinion", "brand monitoring", "market research", "analytics"],
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
    title: "Moskal.id: AI-Powered Social Media Monitoring & Trend Analysis in Indonesia",
    description:
      "Moskal empowers businesses and organizations to track millions of public conversations across Indonesia. Leverage our AI platform to surface early signals, understand shifting narratives, and monitor sentiment trends in real-time for strategic decision-making.",
    siteName: "Moskal.id",
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
    title: "Moskal.id: AI-Powered Social Media Monitoring & Trend Analysis in Indonesia",
    description:
      "Moskal empowers businesses and organizations to track millions of public conversations across Indonesia. Leverage our AI platform to surface early signals, understand shifting narratives, and monitor sentiment trends in real-time for strategic decision-making.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/moskal-icon.png" sizes="any" />
        <link rel="icon" href="/moskal-icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/moskal-icon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
