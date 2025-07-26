import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ZolConnect - Cannabis Marketplace",
  description: "South Africa's digital weed strain marketplace",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="text-2xl font-bold text-green-700">
                  ZolConnect
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a href="/" className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </a>
                <a href="/auth" className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium">
                  Sign In
                </a>
                <a href="/cart" className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium">
                  Cart
                </a>
                <a
                  href="/vendor"
                  className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Vendor
                </a>
                <a
                  href="/admin"
                  className="text-gray-700 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Admin
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
