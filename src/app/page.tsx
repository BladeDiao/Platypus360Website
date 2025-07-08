// app/page.tsx
import Image from 'next/image';
export default function Home() {
  return (
    <main className="">
      {/* Digital Concierge Section */}
      <section className="py-8 bg-gradient-to-r from-themeblue to-themedark ">
        <div className='flex max-w-7xl mx-auto'>
          <div className='flex-1/2'>
            <Image
              src="Home_1.png"
              alt="Flag A"
              width={600}
              height={450}
              unoptimized
              priority
              className='w-full scale-90'
            />
          </div>
          <div className="flex-1/3 flex flex-col gap-20 py-20 px-8">
            <h2 className="text-5xl font-bold text-white pt-8">
              Enhancing guest experience with digital solutions
            </h2>

            <p className="max-w-2xl text-xl text-white">
              Digitise your guest compendium and provide an
              engaging experience that enhances guest satisfaction
              and boosts engagement with your services. Perfect for
              all types of accommodation - from hotels and resorts
              to B&Bs and holiday parks - the Digital Compendium
              allows guests to access essential information on their
              own smartphone or device.
            </p>
            <button className="px-8 py-4 font-semibold bg-themeblue text-white rounded-full hover:opacity-90 transition w-48">
              FIND OUT MORE
            </button>
          </div>
        </div>

      </section>
      <div className="h-20 bg-gradient-to-r from-themeblue to-[#050F49]"></div>

      {/* Call-to-Action Section */}
      <section className="py-16 w-[calc(100vw-4rem)] mx-auto rounded-4xl relative -mt-20 z-10 bg-white shadow-2xl">
        <div className="mx-auto px-6 text-center space-y-6 flex max-w-7xl justify-center">
          <h2 className="text-5xl font-bold text-themedark flex-1/2 my-auto">
            Simplify guest <br />communication, <br />promote your services, <br />and boost revenue with <br />a <span className="text-themeblue">powerful</span> solution.
          </h2>
          <div className='flex flex-col flex-1/2 p-8 gap-8'>
            <Image
              src="Home_1.png"
              alt="Flag A"
              width={600}
              height={450}
              unoptimized
              priority
              className='w-full h-80 shadow-2xl'
            />
            <Image
              src="Home_1.png"
              alt="Flag A"
              width={600}
              height={450}
              unoptimized
              priority
              className='w-full h-80 shadow-2xl'
            />
          </div>

        </div>

        <div className='bg-gradient-to-r from-themeblue to-[#050F49] py-12'>
          <div className="max-w-7xl mx-auto px-6 flex gap-12 items-center">
            {/* 左侧 2x2 占位图 */}
            <div className="grid grid-cols-2 gap-6 flex-1/2">
              {['Home_4.png', 'Home_5.png', 'Home_6.png', 'Home_7.png'].map((name, i) => (
                <div
                  key={i}
                  className="rounded-2xl "
                >
                  <Image
                    src={name}
                    alt={name}
                    width={200}
                    height={200}
                    unoptimized
                    priority
                    className='w-full'
                  />
                </div>
              ))}
            </div>

            {/* 右侧文案 */}
            <div className="text-white space-y-4 flex-1/2">
              <h2 className="text-5xl md:text-4xl font-bold px-32 text-center">
                Revolutionise how <br />guests interact <br />with your property.
              </h2>
            </div>
          </div>
        </div>

        <div className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* 左侧文案 */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-themedark">
                Anytime, anywhere.
              </h2>
              <p className="text-lg font-medium">
                From onsite services and facilities to top local attractions and must-visit spots, your digital directory keeps everything your guests need right at their fingertips.
              </p>
              <p className="text-lg font-medium">
                Provide your Digital Compendium to your guests at multiple touch points along the communication chain allowing them to access valuable information on your venue and to plan their trip.
              </p>
            </div>
            {/* 右侧图片 */}
            <Image
              src="Home_8.png"
              alt="Home_8"
              width={600}
              height={300}
              unoptimized
              priority
              className='w-full'
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex items-stretch rounded-4xl bg-themedark">
          {/* 左侧图片占位，后续替换成 <Image> */}
          <Image
            src="Home_9.png"
            alt="Home_9"
            width={600}
            height={300}
            unoptimized
            priority
            className='w-3/4 rounded-l-4xl'
          />

          {/* 右侧文案 */}
          <div className="text-white space-y-6 -ml-20 bg-themedark rounded-4xl px-8 flex flex-col gap-8 pt-28 ">
            <h2 className="text-3xl md:text-4xl font-bold">
              Guests can refer back anytime to get updates on:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg font-middle">
              <li>Guest services and amenities</li>
              <li>Local area guides, attractions, and events</li>
              <li>Maps, local businesses, and essential services</li>
              <li>Special offers and promotions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="container mx-auto px-6 grid grid-cols-4 ">
          <h2 className="text-3xl font-bold text-themedark">Free up your front desk staff</h2>
          <h2 className="text-3xl font-bold text-themedark">Promote your services and increase revenue</h2>
          <h2 className="text-3xl font-bold text-themedark">Interactive and engaging</h2>
          <h2 className="text-3xl font-bold text-themedark">Simple and easy to use</h2>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 space-y-6 text-lg text-gray-700">
          <p>
            From onsite services and facilities to top local attractions and must-visit spots, your digital directory keeps everything your guests need right at their fingertips.
          </p>
          <p>
            Provide your Digital Compendium to your guests at multiple touch points along the communication chain allowing them to access valuable information on your venue and to plan their trip.
          </p>
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-semibold text-themedark mb-4 text-center">
            Guests can refer back anytime to get updates on:
          </h3>
          <ul className="max-w-xl mx-auto list-disc list-inside space-y-2 text-lg text-gray-700">
            <li>Guest services and amenities</li>
            <li>Local area guides, attractions, and events</li>
            <li>Maps, local businesses, and essential services</li>
            <li>Special offers and promotions</li>
          </ul>
          <p className="mt-8 text-center text-lg text-gray-700">
            With an affordable subscription and no lock-in contracts, the Digital Compendium is a flexible, low-cost solution that requires minimal effort to maintain. It is an interactive and cost-effective way to increase revenue, improve efficiency, and enhance the guest experience.
          </p>
          <p className="mt-4 text-center text-2xl font-bold text-themedark">
            Starting from $1.26 per day
          </p>
        </div>
      </section>



      {/* Footer Section */}
      <footer className="bg-white py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-themedark mb-4">You Are In Control</h4>
            <nav className="space-y-2 text-gray-700">
              {/* <a href="/">Home</a>
              <a href="/products/compendium">Compendiums</a>
              <a href="/products/touchscreen">Touchscreens</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a> */}
            </nav>
          </div>
          <div>
            <h4 className="font-semibold text-themedark mb-4">KNOW MORE</h4>
            <nav className="space-y-2 text-gray-700">
              <a href="/folders">Compendium Folders</a>
              <a href="/guides">Just Brilliant Guides</a>
              <a href="/products">Hospitality Products</a>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold text-themedark mb-4">CONTACT US</h4>
            <p className="text-gray-700">info@platypus360.com</p>
            <p className="text-gray-700">1800 339 4933 (Freecall)</p>
            <p className="text-gray-700">(03) 9879 8588</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500 max-w-screen-lg mx-auto">
          We respect and honour Aboriginal and Torres Strait Islander Elders past, present and future. We acknowledge the stories, traditions and living cultures of Aboriginal and Torres Strait Islander peoples on this land and commit to building a brighter future together.
        </div>
        <div className="mt-4 text-center text-sm text-gray-500">
          © 2025 John Batman Group. All rights reserved. ABN 88 638 125 014 | Terms and Conditions | Site Map
        </div>
      </footer>
    </main>
  );
}
