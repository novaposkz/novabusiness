import './globals.css'
import React from 'react'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'AirbaPay Frontend',
  description: 'MVP frontend for AirbaPay integration',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <main className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <footer className="bg-white border-t">
            <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
              © {new Date().getFullYear()} AirbaPay Demo
            </div>
          </footer>
        </main>
      </body>
    </html>
  )
}
