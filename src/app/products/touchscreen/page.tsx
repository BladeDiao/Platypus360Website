// src/app/products/touchscreen/page.js
import TSCarousel, { Slide } from '../../../components/products/TSCarousel';
import Image from 'next/image';

export default function TouchscreenPage() {
  const slides: Slide[] = [
    {
      name: 'Hilton Hotel Port Moresby',
      imageSrc: '/Products_17.png',
      qrSrc: '/PlaceHolder.png',
    },
    {
      name: 'Hilton Hotel Port Moresby2',
      imageSrc: '/Products_17.png',
      qrSrc: '/PlaceHolder.png',
    },
    // …更多
  ];
  return (
    <main className="pt-4">
      <section className=" w-[calc(100vw-4rem)] mx-auto rounded-4xl relative z-10 bg-white shadow-2xl">
        <div className="flex flex-col items-center justify-center text-center py-4">
          {/* 小标题 */}
          <span className="text-2xl uppercase tracking-wider text-themedark pt-4 font-bold">
            PRODUCTS
          </span>

          {/* 主标题 */}
          <h1 className="mt-2 text-5xl md:text-6xl font-bold text-themedark">
            TOUCHSCREENS
          </h1>

          {/* 副标题 */}
          <p className="mt-4 text-2xl font-medium">
            Where Innovation Meets Opportunity.
          </p>
        </div>

        <div className="">
          <TSCarousel slides={slides} autoplaySpeed={6000} />
        </div>

        <div className='bg-themeblue absolute -z-50 w-full rounded-2xl' style={{ height: '32rem', marginTop: "-40rem" }}></div>

        <div className="max-w-7xl mx-auto flex items-center rounded-4xl mt-10">
          {/* 左侧图片 */}
          <Image
            src="/PlaceHolder.png"
            alt="Products_6"
            width={600}
            height={500}
            unoptimized
            priority
            className='w-1/2 rounded-4xl h-auto object-cover'
          />
          {/* 右侧文案 */}
          <div className="space-y-4 w-5/12 px-8 flex flex-col">
            <h2 className="text-2xl font-bold text-themedark pb-2">
              Enhancing guest experience with <br />digital solutions
            </h2>
            <p className="text-sm">
              Enhance your guests&apos; experience with interactive hotel lobby
              touchscreens. These digital kiosks provide an engaging and
              informative platform that allows guests to explore your property
              and the surrounding area at their convenience.<br />
            </p><p className="text-sm">
              With user-friendly interfaces, guests can access a wealth of
              information, including hotel amenities, dining options, local
              attractions, event calendars, and essential services - all at their
              fingertips. The touchscreens are customised to reflect your hotel&apos;s
              branding and can display content in multiple languages, ensuring
              accessibility for all guests.
            </p>
            <button className="px-8 py-4 font-semibold bg-themeblue text-white rounded-full hover:opacity-90 transition w-52 mt-4">
              SEE THE RANGE
            </button>
          </div>

        </div>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 space-y-8">

            {/* 整体三列布局：第一行 3 列；第二行一个跨三列的子网格 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 左侧文字 */}
              <div className="space-y-4 text-gray-700 font-semibold">
                <h2 className="text-4xl font-bold text-themedark pb-4">
                  Experience <br />The Buzz
                </h2>
                <p>
                  Revolutionise your hotel&apos;s guest experience with our cutting-edge interactive touchscreen.
                </p>
                <p>
                  Our Platypus360 Digital Concierge technology and intuitive interface
                  offer unparalleled convenience and interaction for your guests.
                </p>
                <p>
                  With high-definition visuals and seamless touch navigation, our interactive touchscreen
                  enables guests to effortlessly explore information about your property, from amenities to
                  events and local attractions.
                </p>
                <p>
                  The Plattypus Digital Concierge software enables tailored messages and promotions,
                  enhancing the guest experience and building revenue.
                </p>
              </div>

              {/* 第一行：前两个卡片 */}
              {[
                {
                  title: 'Easy Navigation',
                  desc: 'Guests can quickly find the information they need without waiting for assistance from staff.',
                  image: '/Products_20.png'
                },
                {
                  title: 'Instant Updates',
                  desc: 'Easily update content in real-time to reflect changes in services, events, or special offers.',
                  image: '/Products_19.png'
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-themeblue rounded-2xl overflow-hidden flex flex-col"
                >
                  {/* 图像占位 */}
                  <div className="h-96 bg-gray-200 flex items-center justify-center">
                    <Image
                      src={card.image}
                      alt="Products_6"
                      width={500}
                      height={600}
                      unoptimized
                      priority
                      className='rounded-t-2xl h-full w-auto object-cover'
                    />
                  </div>
                  {/* 文本区域 */}
                  <div className="px-6 text-white flex-1 flex flex-col justify-center gap-4 py-12">
                    <h4 className="text-2xl font-semibold text-center">{card.title}</h4>
                    <p className="mt-2 text-sm">{card.desc}</p>
                  </div>
                </div>
              ))}

              {/* 第二行：跨三列的 3×? 网格 */}
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Interactive Experience',
                    desc: 'Encourage guest engagement with dynamic content that captures their attention.',
                    image: '/Products_23.png'
                  },
                  {
                    title: 'Increased Revenue',
                    desc: 'Promote in-house services, local partnerships, and exclusive offers to drive additional revenue.',
                    image: '/Products_21.png'
                  },
                  {
                    title: 'Enhanced Guest Satisfaction',
                    desc: 'Provide a modern, convenient way for guests to interact with your hotel, leading to positive reviews and repeat visits.',
                    image: '/Products_22.png'
                  },
                ].map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-themeblue rounded-2xl overflow-hidden flex flex-col"
                  >
                    {/* 图像占位 */}
                    <div className="h-80 bg-gray-200 flex items-center justify-center">
                      <Image
                        src={card.image}
                        alt="Products_6"
                        width={500}
                        height={600}
                        unoptimized
                        priority
                        className='rounded-t-2xl h-full w-auto object-cover'
                      />
                    </div>
                    {/* 文本区域 */}
                    <div className="px-6 text-white flex-1 flex flex-col justify-center gap-4 py-12">
                      <h4 className="text-2xl font-semibold text-center">{card.title}</h4>
                      <p className="mt-2 text-center">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 space-y-8">
            {/* 标题 */}
            <h2 className="text-4xl md:text-4xl font-bold text-center">
              <span className="text-themeblue">Transform</span> your indoor space<br /> into a{' '}
              <span className="text-themeblue">connected</span>,{' '}
              <span className="text-themeblue">informative</span>,<br /> and{' '}
              <span className="text-themeblue">engaging</span> environment<br /> with our versatile digital kiosks.
            </h2>

            {/* 图片 + 文本 网格 */}
            {/* 左侧图片 */}
            <div className="flex items-center justify-center h-full pb-8">
              <Image
                src="/Products_24.png"
                alt="Digital Kiosk"
                width={600}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* 右侧文字卡片 */}
            <div className='w-full h-0 flex flex-row-reverse pr-8'>
              <div className="relative bg-themeblue text-white rounded-xl p-6 max-w-2xl -mt-72 z-50 px-8 h-40">
                <p className="text-base leading-relaxed">
                  Crafted for durability, our interactive touchscreen is engineered to endure frequent use, ensuring it is a lasting asset for your property. Moreover, its sleek, contemporary design adds a touch of sophistication to any reception or lobby space, enhancing your property’s overall ambiance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className=" bg-white space-y-16">
          {/* 第一部分：图片在左，文字在右 */}
          <div className="max-w-7xl mx-auto px-6 flex gap-8 items-center">
            {/* 左侧图片占位 */}
            <div className="rounded-3xl overflow-hidden flex-1/2">
              <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                <Image
                  src="/Products_25.png"
                  alt="Digital Kiosk"
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
            {/* 右侧文字 */}
            <div className="space-y-4 flex-1/2">
              <h2 className="text-2xl font-bold text-themeblue">
                Elevate guest satisfaction with <br /> interactive touchscreens
              </h2>
              <p className="font-medium">
                This interactive system encourages guests to navigate and explore at their convenience. The system is an entertainment hub for travellers who want to learn about the hotel they are in and any other affiliated properties.
              </p>
              <p className="font-medium">
                The touchscreen is built and hosted on our exclusive Plattypus360 Content Management System and is fully personalised to your property’s branding and content. You can log in to the Pladdypus CMS to make live updates and additions instantly, giving you complete control over your information and the ability to publish last-minute deals or event announcements as desired.
              </p>
            </div>
          </div>

          {/* 第二部分：文字在左，图片在右 */}
          <div className="max-w-7xl mx-auto px-6 flex gap-8 items-center">
            {/* 左侧文字 */}
            <div className="space-y-4 flex-1/2 translate-x-12">
              <h2 className="text-2xl font-bold text-themeblue">
                You Are In Control
              </h2>
              <p className="font-medium">
                By integrating lobby touchscreens, your hotel can create a modern atmosphere that not only improves guest satisfaction but also streamlines operations and enhances overall service quality. Embrace technology to elevate the guest experience and set your property apart from the competition.
              </p>
            </div>
            {/* 右侧图片占位 */}
            <div className="rounded-3xl flex-1/2 relative">
              <div className="relative w-full h-96 flex items-center justify-center">
                <Image
                  src="/Products_26.png"
                  alt="Digital Kiosk"
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain scale-150 pb-40"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <div className='bg-themeblue h-40 rounded-b-4xl flex items-center justify-center'>
          <button className='rounded-full bg-white px-8 py-6 color-themedark font-bold mt-2'>REQUEST A DEMO</button>
        </div>


      </section>
    </main>
  )
}
