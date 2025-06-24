// src/app/layout.js
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-indigo-100">
        <Header
          headerBg="bg-white"
          navBg="bg-blue-600"
          navText="text-white"
          activeNavBg="bg-white"
          activeNavText="text-blue-600"
        />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
