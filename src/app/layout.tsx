// app/layout.tsx
import './globals.css'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { Montserrat } from 'next/font/google'

// 生成 className 和 css var
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300','400','500','600','700'],
  variable: '--font-montserrat',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.className}>
      {/* 只挂载 next/font 生成的 className，去掉 font-sans */}
      <body className={`${montserrat.variable} min-h-screen`}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
