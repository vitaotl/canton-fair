import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Provider from "./provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Canton Fair Map - Agro Agr",
  description: "Canton Fair Map by Agro Agr, https://agro.agr.br/",
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`main ${inter.className}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
