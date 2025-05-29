"use client"

import { Twitter, Github, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"
import { MoskalLogo } from "@/components/ui/moskal-logo"

export function Footer() {
  const handleProductClick = (productId: string) => {
    const element = document.getElementById(productId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="py-16 border-t border-blue-100 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-30" style={{ backgroundSize: "20px 20px" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Moskal Brand */}
          <div>
            <div className="mb-6">
              <MoskalLogo iconSize={32} textHeight={28} />
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              AI-powered sentiment monitoring for Indonesia. Empowering journalists, researchers, and institutions with
              real-time intelligence from public conversations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-900">Products</h4>
            <ul className="space-y-4">
              {[
                { name: "Moskal Topics", id: "products" },
                { name: "Moskal KOL", id: "products" },
                { name: "Moskal AI", id: "products" },
                { name: "Moskal Report", id: "products" },
                { name: "Moskal Comparison", id: "products" },
              ].map((product) => (
                <li key={product.name}>
                  <button
                    onClick={() => handleProductClick(product.id)}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-left"
                  >
                    {product.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-900">Company</h4>
            <ul className="space-y-4">
              {[
                { label: "About", href: "#about" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gray-900">Contact</h4>
            <ul className="space-y-4">
              <li>
                <div className="text-gray-600">
                  <div className="font-medium text-gray-900 mb-1">Email</div>
                  <a href="mailto:info@moskal.id" className="hover:text-blue-600 transition-colors">
                    info@moskal.id
                  </a>
                </div>
              </li>
              <li>
                <div className="text-gray-600">
                  <div className="font-medium text-gray-900 mb-1">Address</div>
                  <div className="text-sm leading-relaxed">
                    Jl. Bangka IX No.40D 1, RT.1/RW.10
                    <br />
                    Pela Mampang, Kec. Mampang Prpt.
                    <br />
                    Kota Jakarta Selatan
                    <br />
                    DKI Jakarta 12720
                  </div>
                </div>
              </li>
              <li>
                <div className="text-gray-600">
                  <div className="font-medium text-gray-900 mb-1">Business Hours</div>
                  <div className="text-sm">Monday - Friday: 9:00 AM - 6:00 PM WIB</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-blue-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Moskal. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
              Terms of Service
            </Link>

          </div>
        </div>
      </div>
    </footer>
  )
}
