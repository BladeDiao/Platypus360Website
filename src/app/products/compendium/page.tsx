// src/app/products/compendium/page.js
import DCCarousel, { Slide } from '../../../components/products/DCCarousel';


export default function CompendiumPage() {
  const slides: Slide[] = [
    {
      name: 'Holiday Inn Port Moresby',
      imageSrc: '/DC_1.png',
      qrSrc: '/DC_1.png',
    },
    {
      name: 'Hotel XYZ',
      imageSrc: '/DC_1.png',
      qrSrc: '/DC_1.png',
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
            DIGITAL COMPENDIUMS
          </h1>

          {/* 副标题 */}
          <p className="mt-4 text-2xl font-medium">
            Enhancing guest experience with<br /> digital solutions.
          </p>
        </div>

        <div className="p-10 ">
          <DCCarousel slides={slides} autoplaySpeed={6000} />
        </div>
      </section>
    </main>
  )
}
