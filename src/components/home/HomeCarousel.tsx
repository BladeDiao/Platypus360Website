// components/HomeCarousel.tsx
'use client';
import React, { FC, useRef } from 'react';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Image from 'next/image';

export interface Slide {
  /** 要展示的文案，可以是字符串或任意 ReactNode */
  content: React.ReactNode;
  /** 底部的小图标/Logo（可选） */
  imageSrc?: string;
  /** 图标的 alt 文本（可选） */
  imageAlt?: string;
}

interface HomeCarouselProps {
  slides: Slide[];
  autoplay?: boolean;       // 是否自动轮播，默认 true
  autoplaySpeed?: number;   // 自动轮播间隔 ms，默认 5000
}

const HomeCarousel: FC<HomeCarouselProps> = ({
  slides,
  autoplay = true,
  autoplaySpeed = 5000,
}) => {
  const carouselRef = useRef<CarouselRef>(null);

  return (
    <div className=" max-w-7xl relative bg-indigo-50 rounded-3xl py-16 overflow-hidden">
      {/* 左箭头 */}
      <LeftOutlined
        className="absolute left-16 top-1/2 transform -translate-y-1/2 text-2xl text-themedark cursor-pointer z-10"
        onClick={() => carouselRef.current?.prev()}
      />

      {/* 轮播主体 */}
      <Carousel
        ref={carouselRef}
        autoplay={autoplay}
        autoplaySpeed={autoplaySpeed}
        dots={false}
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {/* 文案区 */}
            <div className="max-w-xl text-center text-lg text-themedark mx-auto font-medium">
              {slide.content}
            </div>

            {/* 可选底部图标/Logo */}
            {slide.imageSrc && (
              <div className="mt-12 ">
                <Image
                  src={slide.imageSrc}
                  alt={slide.imageAlt ?? `slide-${idx}`}
                  width={150}
                  height={50}
                  className="h-12 w-auto mx-auto"
                />
              </div>
            )}
          </div>
        ))}
      </Carousel>

      {/* 右箭头 */}
      <RightOutlined
        className="absolute right-16 top-1/2 transform -translate-y-1/2 text-2xl text-gray-800 cursor-pointer z-10"
        onClick={() => carouselRef.current?.next()}
      />
    </div>
  );
};

export default HomeCarousel;
