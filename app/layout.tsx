import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Tierra Ancestral - Esculturas de fósiles y piezas prehistóricas",
  description:
    "Esculturas artesanales de fósiles y piezas prehistóricas elaboradas a mano con materiales naturales y un profundo respeto por la historia.",
  generator: "Next.js",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
