import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin", "cyrillic"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ТЦ Арена Чита — Магазины, Батутный центр, Кафе | Официальный сайт",
  description:
    "Более 40 магазинов на ул. Красной Звезды 70. Батутный центр ТутБатут, хобби-маркет Чудо-ручки. Работаем с 10:00 до 20:00. Бесплатная парковка.",
  keywords: ["ТЦ Арена", "Чита", "торговый центр", "магазины", "батутный центр", "Чудо-ручки"],
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
