// app/page.tsx
import Image from 'next/image';
export default function Home() {
  return (
    <main className="">
      {/* Digital Concierge Section */}
      <section className="h-[calc(v-screen-5rem)] py-16 flex bg-gradient-to-r from-[#253EF6] to-[#050F49]">
        <div className=''>
          <Image
            src="country_1.jpg"
            alt="Flag A"
            width={400}
            height={300}
            unoptimized
            priority
          /></div>
        <div className="container px-6 space-y-6">
          <h2 className="text-3xl font-bold text-white">
            Enhancing guest experience with digital solutions
          </h2>

          <p className="max-w-2xl text-lg text-white">
            Digitise your guest compendium and provide an
            engaging experience that enhances guest satisfaction
            and boosts engagement with your services. Perfect for
            all types of accommodation - from hotels and resorts
            to B&Bs and holiday parks - the Digital Compendium
            allows guests to access essential information on their
            own smartphone or device.
          </p>
          <button className="px-8 py-4 bg-black text-white rounded-full hover:opacity-90 transition">
            REQUEST A DEMO
          </button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
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

      {/* Call-to-Action Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl font-bold text-themedark">
            Simplify guest communication, promote your services, and boost revenue with a powerful solution.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Digitise your guest compendium and provide an engaging experience that enhances guest satisfaction and boosts engagement with your services. Perfect for all types of accommodation – from hotels and resorts to B&amp;Bs and holiday parks – the Digital Compendium allows guests to access essential information on their own smartphone or device.
          </p>
          <button className="px-8 py-4 bg-themeblue text-white rounded-full hover:opacity-90 transition">
            SEE PACKAGES
          </button>
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
