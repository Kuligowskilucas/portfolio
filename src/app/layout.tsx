import type React from "react"
import type { Metadata } from "next"
import { Archivo, Source_Serif_4 } from "next/font/google"
import "./globals.css"
import { portfolio } from "@/data/portfolio"

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif",
})

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
})

export const metadata: Metadata = {
  title: portfolio.meta.title,
  description: portfolio.meta.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${sourceSerif.variable} ${archivo.variable}`}>
      <body className="bg-paper font-body text-ink antialiased">{children}</body>
    </html>
  )
}
