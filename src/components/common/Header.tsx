'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavItem {
  href?: string;
  label: string;
  children?: {
    href: string;
    label: string;
  }[];
}

const Header: React.FC = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 50) {
        // 向下滚动 且超过 50px 隐藏
        setShowHeader(false);
      } else {
        // 向上滚动或未超过阈值时显示
        setShowHeader(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { href: '/', label: 'HOME' },
    {
      label: 'PRODUCTS',
      children: [
        { href: '/products/compendium', label: 'Compendium' },
        { href: '/products/touchscreen', label: 'Touchscreen' },
      ],
    },
    { href: '/pricing', label: 'PRICING' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transform transition-transform duration-300 h-20
        ${showHeader ? 'translate-y-0' : '-translate-y-full'}
        bg-white py-4
      `}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* 左侧占位：固定宽度 w-60 (240px) */}
        <div className="w-60 flex justify-start">
          <Link href="/" className="block">
            <Image
              src="/Platypus360_Logo.png"
              alt="Platypus360 Logo"
              width={240}
              height={40}
            />
          </Link>
        </div>

        {/* 中间导航 */}
        <nav className="flex items-center space-x-4 bg-white rounded-full gap-8">
          {navItems.map((item, idx) => {
            const isActive = item.children
              ? pathname.startsWith('/products')
              : item.href === '/'
              ? pathname === '/'
              : pathname.startsWith(item.href!);

            if (item.children) {
              return (
                <div key={idx} className="relative group">
                  <span
                    className={`
                      px-6 py-3 font-medium rounded-3xl transition text-themedark ${
                        isActive
                          ? 'text-white bg-themeblue'
                          : 'hover:opacity-80'
                      }
                    `}
                  >
                    {item.label}
                  </span>
                  <div className="absolute top-full left-0 w-full h-4 bg-transparent" />
                  <div className="absolute top-full left-0 mt-4 hidden group-hover:flex flex-col bg-white rounded-2xl py-2">
                    {item.children.map((sub, j) => {
                      const subActive = pathname === sub.href;
                      return (
                        <Link
                          key={j}
                          href={sub.href}
                          className={`
                            relative pl-6 pr-12 py-2 font-normal rounded-2xl transition-all test-themedark whitespace-nowrap ${
                              subActive
                                ? 'pl-10 before:content-["•"] before:absolute before:left-6 before:test-themedark'
                                : 'hover:pl-10'
                            }
                          `}
                        >
                          {sub.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={idx}
                href={item.href!}
                className={`
                  px-6 py-3 font-medium rounded-3xl transition test-themedark ${
                    isActive ? 'text-white bg-themeblue' : 'hover:opacity-80'
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* 右侧占位：固定宽度 w-40 (160px) */}
        <div className="w-40 flex justify-end">
          <a
            href="https://manage.platypus360.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white rounded-full hover:opacity-80 transition"
          >
            LOG IN
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
