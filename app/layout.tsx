import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Provider from "./provider"
import SignUpModal from "./components/SignUpModal/SignUpModal"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Canton Fair Map - Agro Agr",
  description: "Canton Fair Map by Agro Agr, https://agro.agr.br/"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`main ${inter.className}`} id="el">
        <div style={{ overflowY: "scroll" }}>
          <Provider>{children}</Provider>
        </div>
        <div className="sendMessage">HallMap.cn - Send Message...</div>
      </body>
    </html>
  )
}
