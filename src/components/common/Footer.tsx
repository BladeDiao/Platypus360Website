// components/Footer.tsx
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-themedark text-white overflow-visible">
      {/* 向上延伸 5rem */}
      <div className="absolute inset-x-0 top-0 -mt-20 h-20 -z-50" />

      <div className="max-w-7xl mx-auto pt-12">
        {/* --- 上半区 --- */}
        <div className="flex flex-row space-x-8 pb-8 px-8">
          {/* Flags + 文本 */}
          <div className="flex flex-col flex-1">
            <div className="flex space-x-3 mb-4 md:mb-0 grow-1">
              <Image
                src="country_1.jpg"
                alt="Flag A"
                width={400}
                height={300}
                className="h-12 w-auto"
                unoptimized
                priority
              />
              <Image
                src="country_2.jpg"
                alt="Flag B"
                width={400}
                height={300}
                className="h-12 w-auto"
                unoptimized
                priority
              />
            </div>
            <p className="text-sm leading-5 max-w-md">
              We respect and honour Aboriginal and Torres Strait Islander Elders
              past, present and future. We acknowledge the stories, traditions
              and living cultures of Aboriginal and Torres Strait Islander
              peoples on this land and commit to building a brighter future
              together.
            </p>
          </div>

          {/* EXPLORE */}
          <div className='w-36'>
            <h4 className="font-semibold mb-6">EXPLORE</h4>
            <ul className="space-y-1 text-sm">
              <li key="Home">
                <Link href="#" className="hover:underline">
                  Home
                </Link>
              </li>
              <li key="Compendiums">
                <Link href="#" className="hover:underline">
                  Compendiums
                </Link>
              </li>
              <li key="Touchscreens">
                <Link href="#" className="hover:underline">
                  Touchscreens
                </Link>
              </li>
              <li key="About">
                <Link href="#" className="hover:underline">
                  About
                </Link>
              </li>
              <li key="Contact">
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* KNOW MORE */}
          <div className='w-48'>
            <h4 className="font-semibold mb-6">KNOW MORE</h4>
            <ul className="space-y-1 text-sm">
              <li key="Compendium Folders">
                <Link href="#" className="hover:underline flex">
                  Compendium Folders&nbsp;
                  <Image
                    src="ExternalLink.png"
                    alt="Flag B"
                    width={100}
                    height={100}
                    className="h-4 w-auto"
                    unoptimized
                    priority
                  />
                </Link>
              </li>
              <li key="Just Brilliant Guides">
                <Link href="#" className="hover:underline flex">
                  Just Brilliant Guides&nbsp;
                  <Image
                    src="ExternalLink.png"
                    alt="Flag B"
                    width={100}
                    height={100}
                    className="h-4 w-auto"
                    unoptimized
                    priority
                  />
                </Link>
              </li>
              <li key="Hospitality Products">
                <Link href="#" className="hover:underline flex">
                  Hospitality Products&nbsp;
                  <Image
                    src="ExternalLink.png"
                    alt="Flag B"
                    width={100}
                    height={100}
                    className="h-4 w-auto"
                    unoptimized
                    priority
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT US */}
          <div className='w-56'>
            <h4 className="font-semibold mb-6">CONTACT US</h4>
            <ul className="space-y-1 text-sm leading-snug">
              <li className='flex'>
                <Image
                  src="Email.png"
                  alt="Flag B"
                  width={100}
                  height={100}
                  className="h-4 w-auto"
                  unoptimized
                  priority
                />
                &nbsp;Email: info@platypus360.com</li>
              <li className='flex'>
                <Image
                  src="Phone.png"
                  alt="Flag B"
                  width={100}
                  height={100}
                  className="h-4 w-auto"
                  unoptimized
                  priority
                />
                &nbsp;1800 339 4933 (Freecall)</li>
              <li className='flex'>
                <Image
                  src="Phone.png"
                  alt="Flag B"
                  width={100}
                  height={100}
                  className="h-4 w-auto"
                  unoptimized
                  priority
                />
                &nbsp;(03) 9879 8588</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600" />

        {/* --- Logo区和按钮 --- */}
        <div className="flex flex-row lg:flex-row items-center justify-between py-6 px-8">
          {[
            'footer_1.png',
            'footer_2.png',
            'footer_3.png',
            'footer_4.png',
            'footer_5.png',
          ].map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Logo ${idx + 1}`}
              width={100}
              height={40}
              className="h-10 w-auto"
              unoptimized
              priority
            />
          ))}
        </div>

        <div className="border-t border-gray-600" />

        {/* --- 版权 + 底部链接 + 社交 --- */}
        <div className="flex text-xs space-y-0 px-8 justify-between py-8">
          <div className='flex flex-col '>
            <div className="flex items-center space-x-2">
              <Link href="#" className="hover:underline">
                Terms and Conditions
              </Link>
              <span className="">|</span>
              <Link href="#" className="hover:underline">
                Site Map
              </Link>
            </div>
            <div className='pt-4'>Copyright© 2025 JohnBatman Group. All rights reserved.</div>
          </div>

          <div className="flex space-x-4">
            <Link href="#">
              <Image
                src="Facebook.png"
                alt="Facebook"
                width={24}
                height={24}
                className="h-6 w-6"
                unoptimized
              />
            </Link>
            <Link href="#">
              <Image
                src="Instagram.png"
                alt="Instagram"
                width={24}
                height={24}
                className="h-6 w-6"
                unoptimized
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
