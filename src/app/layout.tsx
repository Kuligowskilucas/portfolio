import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Lucas Kuligowski - Desenvolvedor Web",
  description:
    "Portfolio de Lucas Kuligowski — desenvolvedor web com experiência em Next.js, React, TypeScript, Laravel e SEO. Performance, APIs robustas e resultados mensuráveis.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}