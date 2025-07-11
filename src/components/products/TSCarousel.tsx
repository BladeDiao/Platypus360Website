// components/TSCarousel.tsx
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

interface TSCarouselProps {
    slides: Slide[];
    autoplay?: boolean;
    autoplaySpeed?: number;
}

const TSCarousel: FC<TSCarouselProps> = ({
    slides,
    autoplay = true,
    autoplaySpeed = 5000,
}) => {
    const carouselRef = useRef<CarouselRef>(null);

    return (
        <div>
            <div className="relative max-w-7xl mx-auto">
                {/* 左箭头 */}
                <LeftOutlined
                    className="absolute left-12 top-1/2 transform -translate-y-1/2 text-2xl text-white cursor-pointer z-10"
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
                        <div key={idx} className=''>
                            <div className='h-32 w-full'></div>
                            <div className="relative bg-themeblue rounded-2xl flex items-center justify-between px-24" style={{ height: '32rem' }}>
                                {/* 左侧：故意放大的图片 */}
                                <div className="relative w-2/3 " style={{ height: '32rem' }}>
                                    <div className='relative'>
                                        <Image
                                            src={slide.imageSrc}
                                            alt={slide.name}
                                            width={400}
                                            height={1000}
                                            className="w-32 h-auto z-40 mx-auto pt-14 scale-200"
                                            style={{ transformOrigin: 'center' }}
                                            priority
                                        />
                                    </div>

                                </div>

                                {/* 右侧：名称 + QR */}
                                <div className="w-1/3 text-white flex flex-col items-center space-y-4">
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
                                    <p className='text-lg font-medium'>Scan to view</p>
                                </div>
                            </div>
                            <div className='h-32 w-full'></div>
                        </div>
                    ))}
                </Carousel>

                {/* 右箭头 */}
                <RightOutlined
                    className="absolute right-12 top-1/2 transform -translate-y-1/2 text-2xl text-white cursor-pointer z-10"
                    onClick={() => carouselRef.current?.next()}
                />
            </div>
        </div>

    );
};

export default TSCarousel;
