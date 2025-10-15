// app/layout.tsx (MODIFIED)
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

// Naye component ko import karein
import ConditionalLayout from "@/components/ConditionalLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OwnSilent - Auto Parts & Accessories",
  description: "Your one-stop shop for premium auto parts and accessories.",
  keywords: "auto parts, car parts, performance, automotive, accessories",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  )
}