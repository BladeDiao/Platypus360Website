// components/DCCarousel.tsx
'use client'
import React, { FC, useRef } from 'react';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Image from 'next/image';

export interface Slide {
    name: string;
    imageSrc: string;
    qrSrc: string;
}

interface DCCarouselProps {
    slides: Slide[];
    autoplay?: boolean;
    autoplaySpeed?: number;
}

const DCCarousel: FC<DCCarouselProps> = ({
    slides,
    autoplay = true,
    autoplaySpeed = 5000,
}) => {
    const carouselRef = useRef<CarouselRef>(null);

    return (
        <div className="relative overflow-visible">
            {/* 左箭头 */}
            <LeftOutlined
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl text-white cursor-pointer z-10"
                onClick={() => carouselRef.current?.prev()}
            />

            {/* 轮播 */}
            <Carousel
                ref={carouselRef}
                autoplay={autoplay}
                autoplaySpeed={autoplaySpeed}
                dots={false}
            >
                {slides.map((slide, idx) => (
                    <div key={idx}>
                        <div className="relative bg-blue-600 rounded-2xl flex items-center justify-between p-8 overflow-visible">
                            {/* 左侧：故意放大的图片 */}
                            <div className="relative w-1/2 h-80 overflow-visible">
                                <Image
                                    src={slide.imageSrc}
                                    alt={slide.name}
                                    fill
                                    className="object-cover scale-110"
                                    priority
                                />
                            </div>

                            {/* 右侧：名称 + QR */}
                            <div className="w-1/2 pl-8 text-white flex flex-col items-center space-y-4">
                                <h3 className="text-2xl font-bold">{slide.name}</h3>
                                <div className="relative w-32 h-32">
                                    <Image
                                        src={slide.qrSrc}
                                        alt={`${slide.name} QR`}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                                <p>Scan to view</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>

            {/* 右箭头 */}
            <RightOutlined
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl text-white cursor-pointer z-10"
                onClick={() => carouselRef.current?.next()}
            />
        </div>
    );
};

export default DCCarousel;
