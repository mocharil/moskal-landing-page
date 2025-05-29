"use client"

import { useState, useEffect, Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { motion, AnimatePresence } from "framer-motion"
import { MoskalLogo } from "@/components/ui/moskal-logo"

// Import critical sections immediately
import { HeroSection } from "@/components/sections/hero-section"
import { Footer } from "@/components/sections/footer"

// Lazy load non-critical sections
const WhatIsMoskalSection = dynamic(() => import("@/components/sections/what-is-moskal").then(mod => ({ default: mod.WhatIsMoskalSection })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})
const FeaturesSection = dynamic(() => import("@/components/sections/features-section").then(mod => ({ default: mod.FeaturesSection })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})
const ProductsSection = dynamic(() => import("@/components/sections/products-section").then(mod => ({ default: mod.ProductsSection })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})
const WhyUseMoskalSection = dynamic(() => import("@/components/sections/why-use-moskal-section").then(mod => ({ default: mod.WhyUseMoskalSection })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})
const ContactSection = dynamic(() => import("@/components/sections/contact-section").then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})
const Modal = dynamic(() => import("@/components/sections/modal").then(mod => ({ default: mod.Modal })), {
  ssr: false
})

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerClass =
    scrollY > 50 ? "py-4 bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-light" : "py-6 bg-transparent"

  const handleGetStarted = () => {
    setIsModalOpen(true)
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 text-gray-900 overflow-hidden">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="flex items-center">
              <MoskalLogo iconSize={28} textHeight={24} />
            </Link>
          </motion.div>
          <nav className="hidden md:flex items-center gap-8">
            {["Features", "Products", "About", "Contact"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              variant="outline"
              className="hidden md:flex border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-white border-b border-blue-100 shadow-light md:hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
              {["Features", "Products", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full" onClick={handleGetStarted}>
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* All Sections */}
      <HeroSection onGetStarted={handleGetStarted} />
      <WhatIsMoskalSection />
      <FeaturesSection onGetStarted={handleGetStarted} />
      <ProductsSection />
      <WhyUseMoskalSection />
      <ContactSection />
      <Footer />

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
