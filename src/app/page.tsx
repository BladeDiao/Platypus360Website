// app/page.tsx
import Image from 'next/image';
import HomeCarousel, { Slide } from '../components/home/HomeCarousel';
import FlipWord  from '../components/common/FlipWord';

export default function Home() {
  const slides: Slide[] = [
    {
      content: (
        <>
          With an affordable subscription and no lock-in contracts, the Digital Compendium
          is a flexible, low-cost solution that requires minimal effort to maintain. It is an
          interactive and cost-effective way to increase revenue, improve efficiency, and
          enhance the guest experience.
        </>
      ),
      imageSrc: '/Home_1.png',
      imageAlt: 'Home_1',
    },
    {
      content: (
        <>
          Another testimonial or promotional text goes here.Another testimonial or promotional text goes here.
          Another testimonial or promotional text goes here.Another testimonial or promotional text goes here.

        </>
      ),
      imageSrc: '/Home_1.png',
      imageAlt: 'Home_1',
    },
  ];

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
              all types of accommodation from hotels and resorts
              to B&Bs and holiday parks the Digital Compendium
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
      <section className="pt-16 w-[calc(100vw-4rem)] mx-auto rounded-4xl relative -mt-20 z-10 bg-white shadow-2xl">
        <div className="mx-auto px-6 text-center space-y-6 flex max-w-7xl justify-center">
          <h2 className="text-5xl font-bold text-themedark flex-1/2 my-auto">
            Simplify guest <br />communication, <br />promote your services, <br />and boost revenue with <br />a <FlipWord/><span className='invisible'>*********</span>  solution.
          </h2>
          <div className='flex flex-col flex-1/2 p-8 gap-8'>
            <Image
              src="Home_2.png"
              alt="Home A"
              width={600}
              height={450}
              unoptimized
              priority
              className='w-full h-80 shadow-2xl'
            />
            <Image
              src="Home_3.png"
              alt="Home B"
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
        <div className="max-w-7xl mx-auto flex items-center bg-indigo-50 rounded-4xl mt-10">
          {/* 左侧图片 */}
          <Image
            src="Home_10.png"
            alt="Home_10"
            width={600}
            height={300}
            unoptimized
            priority
            className='w-3/5 rounded-4xl'
          />
          {/* 右侧文案 */}
          <div className="space-y-4 w-2/5 px-8 flex flex-col gap-8">
            <h2 className="text-3xl font-bold text-themedark">
              Starting from $1.26 per day
            </h2>
            <p className="text-lg">
              With an affordable subscription and no lock-in contracts,
              the Digital Compendium is a flexible, low-cost solution that
              requires minimal effort to maintain. It is an interactive a
              cost-effective way to increase revenue, improve efficiency, and
              enhance the guest experience.
            </p>
            <button className="px-8 py-4 font-semibold bg-themeblue text-white rounded-full hover:opacity-90 transition w-48">
              SEE PACKAGES
            </button>
          </div>

        </div>
        <div className="max-w-7xl mx-auto py-8">
          <HomeCarousel slides={slides} autoplaySpeed={5000} />
        </div>
        <div className="py-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* 左侧文案 */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-themedark">
                You Are In Control
              </h2>
              <p className="text-lg pt-4">
                Instant, up-to-date access to all your property's information on guests'<br />
                smartphones or devices—no apps or downloads required. Customisable<br />
                to match your branding, the Pladdypus Digital Concierge ensures your<br />
                guests always have the latest details about your services, amenities, and<br />
                local attractions at their fingertips.

              </p>
              <p className="text-lg">
                With a user-friendly dashboard, updates are simple and immediate,<br />
                streamlining your operations while boosting guest engagement.
              </p>
            </div>
            {/* 右侧图片 */}
            <Image
              src="Home_11.png"
              alt="Home_11"
              width={600}
              height={300}
              unoptimized
              priority
              className='w-full rounded-4xl'
            />
          </div>


        </div>

        <div className='bg-themeblue h-40 rounded-b-4xl flex items-center justify-center'>
          <button className='rounded-full bg-white px-8 py-6 color-themedark font-bold mt-2'>REQUEST A DEMO</button>
        </div>
      </section>






    </main>
  );
}
