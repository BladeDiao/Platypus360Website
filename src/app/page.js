// src/app/page.js
'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function HomePage() {
  const [progress, setProgress] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const winH = window.innerHeight
      const p = -rect.top / winH
      setProgress(Math.min(Math.max(p, 0), 1))
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const cards = [
    { key: 'c1', label: 'Promote your services and increase revenue' },
    { key: 'c2', label: 'Simple and                easy to use' },
    { key: 'c3', label: 'Free up your            front desk staff' },
    { key: 'c4', label: 'Interactive                  and engaging' },
  ]

  return (
    <>
      {/* Section 1: Hero */}
      <section
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center space-y-4 px-4">
            <h1 className="text-5xl font-bold text-white">
              Welcome to Platypus360
            </h1>
            <p className="text-xl text-white">
              Your interactive hotel touchscreen solution
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: 粘性 + Grid 布局 + 视口单位偏移 动画聚拢 */}
      <section ref={sectionRef} className="relative h-[200vh] bg-white">
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* 中心文字 */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-3xl font-bold text-gray-900">
              Discover Our Features<br />
              Discover Our Features<br />
              Discover Our Features<br />

            </h2>
          </div>

          {/* Grid 布局容器 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              {cards.map((card, i) => {
                // 计算视口偏移：初始完全放在屏幕外
                const offsetX = (i % 2 === 0 ? -1 : 1) * (1 - progress) * 100
                const offsetY = (i < 2 ? -1 : 1) * (1 - progress) * 100
                return (
                  <div
                    key={card.key}
                    className="
                      w-64 h-64 rounded-xl shadow-lg 
                      bg-[rgba(var(--primary-rgb),0.5)] backdrop-blur-md
                      flex flex-col items-center justify-between text-white p-4 z-10
                    "
                    style={{
                      transform: `translate(${offsetX}vw, ${offsetY}vh)`,
                    }}
                  >
                    {/* 上方占位圆 */}
                    <div className="w-12 h-12 bg-gray-200 rounded-full mb-2" />
                    {/* 下方文字 */}
                    <div className="text-center font-bold text-xl text-black whitespace-pre-wrap">
                      {card.label}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 后续内容 */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">后续内容</h2>
        <p>
          只有当四角卡片完全聚拢（滚动超过一个视口高度）之后，才会看到这里的内容。
        </p>
      </section>
    </>
  )
}
