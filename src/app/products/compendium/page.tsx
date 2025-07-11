// src/app/products/compendium/page.js
import DCCarousel, { Slide } from '../../../components/products/DCCarousel';
import Image from 'next/image';

export interface Feature {
  /** 图标路径或 URL */
  icon: string;
  /** 标题 */
  title: string;
  /** 描述文字 */
  description: string;
}
export interface Statistic {
  /** 前缀文字，可选 */
  prefix?: string;
  /** 突出显示的值 */
  value: string;
  /** 后缀／描述文字 */
  suffix: string;
}

export default function CompendiumPage() {
  const slides: Slide[] = [
    {
      name: 'Holiday Inn Port Moresby',
      imageSrc: '/DC_1.png',
      qrSrc: '/PlaceHolder.png',
    },
    {
      name: 'Hotel XYZ',
      imageSrc: '/PlaceHolder.png',
      qrSrc: '/PlaceHolder.png',
    },
    // …更多
  ];

  const features: Feature[] = [
    {
      icon: '/Products_7.png',
      title: 'Service Directory',
      description:
        'Your property information including items such as reception hours, Wi-Fi, policies, check-in/checkout times, etc.',
    },
    {
      icon: '/Products_8.png',
      title: 'Your Own Branding',
      description:
        'Your Digital Compendium branded with your own logo and primary colour scheme.',
    },
    {
      icon: '/Products_9.png',
      title: 'Appealing Design',
      description: 'Displaying images, videos, menus and other media.',
    },
    {
      icon: '/Products_10.png',
      title: 'Access to Information',
      description: 'One location to easily find the answers at your guests’ fingertips.',
    },
    {
      icon: '/Products_11.png',
      title: 'Connect With Guests',
      description: 'Connect with guests throughout their entire journey.',
    },
    {
      icon: '/Products_12.png',
      title: 'Manage Yourself',
      description: 'Easy to use and manage yourself allowing for instant updates.',
    },
    {
      icon: '/Products_13.png',
      title: 'Analytics',
      description:
        'Provide access to analytics, insights into which information guests find most valuable and numbers of visitors.',
    },
    {
      icon: '/Products_14.png',
      title: 'Simple Scan & View',
      description: 'No app or downloads required.',
    },
    {
      icon: '/Products_15.png',
      title: 'Direct Bookings',
      description: 'Promote your properties special offers and promotions.',
    },
  ];
  const statistics: Statistic[] = [
    {
      prefix: 'Over',
      value: '90%',
      suffix: 'of properties are now offering both Print & Digital Compendiums.',
    },
    {
      prefix: 'Actively used in',
      value: '7+',
      suffix:
        'countries around the world including Australia, New Zealand & the South Pacific.',
    },
    {
      prefix: 'Hotel operational satisfaction is',
      value: '90%',
      suffix:
        'on guest engagement, guest experience and operational efficiency.',
    },
    {
      prefix: 'Average of',
      value: '15–20%',
      suffix:
        'in reduced booking costs on each Digital Compendium direct booking.',
    },
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
            DIGITAL COMPENDIUMS
          </h1>

          {/* 副标题 */}
          <p className="mt-4 text-2xl font-medium">
            Enhancing guest experience with<br /> digital solutions.
          </p>
        </div>

        <div className="">
          <DCCarousel slides={slides} autoplaySpeed={6000} />
        </div>

        <div className='bg-themeblue absolute -z-50 w-full h-80 rounded-2xl' style={{ marginTop: "-30rem" }}></div>

        <div className="max-w-7xl mx-auto flex items-center rounded-4xl mt-10">
          {/* 左侧文案 */}
          <div className="space-y-4 w-2/5 px-8 flex flex-col">
            <h2 className="text-3xl font-bold text-themedark pb-2">
              Enhancing guest experience with digital solutions
            </h2>
            <p className="text-sm">
              Digitise your guest compendium and provide an engaging experience that enhances guest satisfaction and boosts
              engagement with your services. Perfect for all types of
              accommodation - from hotels and resorts to B&Bs and holiday
              parks - the Digital Compendium allows guests to access essential
              information on their own smartphone or device.
            </p><p className="text-sm">
              Guests can view your full guest services directory all within one
              digital resource anywhere, anytime. The compendium is user-friendly
              and interactive, ensuring guests can access everything
              they need quickly and easily.
            </p><p className="text-sm">
              You can share your Digital Compendium effortlessly by including
              the link in booking confirmations and pre-arrival emails or make
              it instantly accessible by scanning a QR code upon arrival. This
              means guests can access essential information whenever they
              need it, whether they&apos;re planning their day or checking out local
              recommendations.
            </p>
            <button className="px-8 py-4 font-semibold bg-themeblue text-white rounded-full hover:opacity-90 transition w-48">
              SEE PACKAGES
            </button>
          </div>
          {/* 右侧图片 */}
          <Image
            src="/Products_1.png"
            alt="Products_1"
            width={600}
            height={300}
            unoptimized
            priority
            className='w-3/5 rounded-4xl'
          />
        </div>

        <section className="py-16 bg-white max-w-7xl mx-auto">
          <div className="max-w-7xl mx-auto px-6 space-y-8">
            {/* Section Title */}
            <h2 className="text-4xl font-bold text-themedark text-center">
              Your recommendations in the<br /> customer&apos;s pocket
            </h2>

            {/* 4-column grid */}
            <div className="grid grid-cols-1 grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="rounded-2xl overflow-hidden flex flex-col">
                {/* Image placeholder */}
                <div className="bg-gray-200 h-72 flex items-center justify-center">
                  <Image
                    src="/Products_2.jpg"
                    alt="Products_2"
                    width={300}
                    height={600}
                    unoptimized
                    priority
                    className='w-full rounded-4xl'
                  />
                </div>
                {/* Content */}
                <div className="relative bg-themeblue flex-1 p-6 pt-12 text-center text-white flex flex-col justify-around">
                  {/* Number badge */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 
                          bg-themedark w-12 h-12 rounded-full flex items-center justify-center 
                          text-white font-bold text-2xl">
                    1
                  </div>
                  <h3 className="text-2xl font-bold -mt-4">Booking Confirmation</h3>
                  <p className="mt-2">
                    Email your personalised link with the booking confirmations and your guests will instantly be able to view your guest information.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl overflow-hidden flex flex-col">
                <div className="bg-gray-200 h-72 flex items-center justify-center">
                  <Image
                    src="/Products_3.jpg"
                    alt="Products_3"
                    width={300}
                    height={600}
                    unoptimized
                    priority
                    className='w-full rounded-4xl'
                  />
                </div>
                <div className="relative bg-themeblue flex-1 p-6 pt-12 text-center text-white flex flex-col justify-around">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 
                          bg-themedark w-12 h-12 rounded-full flex items-center justify-center 
                          text-white font-bold text-2xl">
                    2
                  </div>
                  <h3 className="text-2xl font-bold -mt-4">Pre-arrival Email</h3>
                  <p className="mt-2 ">
                    Send the link with your “We are looking forward to welcoming you soon” email sent before guests arrive.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl overflow-hidden flex flex-col">
                <div className="bg-gray-200 h-72 flex items-center justify-center">
                  <Image
                    src="/Products_4.jpg"
                    alt="Products_4"
                    width={300}
                    height={600}
                    unoptimized
                    priority
                    className='w-full rounded-4xl'
                  />
                </div>
                <div className="relative bg-themeblue flex-1 p-6 pt-12 text-center text-white flex flex-col justify-around">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 
                          bg-themedark w-12 h-12 rounded-full flex items-center justify-center 
                          text-white font-bold text-2xl">
                    3
                  </div>
                  <h3 className="text-2xl font-bold -mt-4">Check in &<br /> On site</h3>
                  <p className="mt-2">
                    Display the QR code at reception and within your rooms for easy and effective communication.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="rounded-2xl overflow-hidden flex flex-col">
                <div className="bg-gray-200 h-72 flex items-center justify-center">
                  <Image
                    src="/Products_5.jpg"
                    alt="Products_5"
                    width={300}
                    height={600}
                    unoptimized
                    priority
                    className='w-full rounded-4xl'
                  />
                </div>
                <div className="relative bg-themeblue flex-1 p-6 pt-12 text-center text-white flex flex-col justify-around">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 
                          bg-themedark w-12 h-12 rounded-full flex items-center justify-center 
                          text-white font-bold text-2xl">
                    4
                  </div>
                  <h3 className="text-2xl font-bold -mt-4">Sharing &<br /> On the Go</h3>
                  <p className="mt-2">
                    Share the link via your social media channels and guests can share the link with family and friends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto flex items-center rounded-4xl mt-10">
          {/* 左侧图片 */}
          <Image
            src="/Products_6.png"
            alt="Products_6"
            width={600}
            height={300}
            unoptimized
            priority
            className='w-7/12 rounded-4xl h-96 object-cover'
          />
          {/* 右侧文案 */}
          <div className="space-y-4 w-5/12 px-8 flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-themedark pb-2">
              Displaying Your <br />Digital Compendium
            </h2>
            <p className="text">
              Our QR Display Products provide a professional solution to
              presenting your Digital Compendium QR code for guest use.
              The acrylic stands can be displayed within your guest rooms,
              at reception and any other high traffic areas. Presenting your
              Digital Compendium QR code within your key tags is another
              convenient display solution to provide easy access to your
              Digital Compendium.

            </p>
            <button className="px-8 py-4 font-semibold bg-themeblue text-white rounded-full hover:opacity-90 transition w-52">
              SEE THE RANGE
            </button>
          </div>

        </div>
        <section id="features" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 space-y-8">
            {/* 标题 */}
            <h2 className="text-2xl font-bold text-themedark">
              Features
            </h2>

            {/* 3×3 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-16">
              {features.map((f, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-start"
                >
                  {/* 图标容器：flex 居中 */}
                  <div className="w-full h-24 flex items-center justify-center">
                    <Image
                      src={f.icon}
                      alt={f.title}
                      width={250}
                      height={250}
                      className="object-contain h-full w-auto"
                      priority
                    />
                  </div>
                  {/* 标题：左对齐 */}
                  <p className="font-bold text-themedark">
                    {f.title}
                  </p>
                  {/* 描述 */}
                  <p className="text-sm text-gray-600">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
        <section
          id="statistics"
          className="bg-gradient-to-r from-themeblue to-themedark text-white py-16"
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {statistics.map(({ prefix, value, suffix }, idx) => (
              <div key={idx} className="space-y-2">
                {prefix && (
                  <p className="text-xs uppercase tracking-wider">{prefix}</p>
                )}
                <p className="text-5xl md:text-6xl font-bold leading-tight">
                  {value}
                </p>
                <p className="text-base leading-relaxed px-2">{suffix}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-white rounded-4xl overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 space-y-8">
            {/* 标题 */}
            <h2 className="text-3xl md:text-4xl font-bold text-themedark text-center">
              Why Go Digital?
            </h2>

            {/* 内容区：左 6 个理由，右 占位图 */}
            <div className="grid grid-cols-2 gap-16 items-stretch">
              {/* 左侧 2 列 3 行 理由卡片 */}
              <div className="grid grid-cols-2 gap-8">
                {[
                  'Increase direct bookings & promote special offers',
                  'Save time with easy updates & real time content',
                  'Quick & easy access to information – no app required',
                  'Enhance the guest experience',
                  'Boost your reviews',
                  'Stand out from the competition',
                ].map((text, idx) => (
                  <div
                    key={idx}
                    className="bg-themedark text-white rounded-lg h-24 px-4 py-4 text-center text-base flex flex-col justify-center"
                  >
                    {text}
                  </div>
                ))}
              </div>

              {/* 右侧图片占位 */}
              <div className="w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center">
                <Image
                  src="/Products_16.png"
                  alt="Products_16"
                  width={1200}
                  height={600}
                  unoptimized
                  priority
                  className='rounded-2xl'
                />
              </div>
            </div>
          </div>
        </section>

      </section>
    </main>
  )
}
