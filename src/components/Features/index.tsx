"use client";

import Image from "next/image";

export default function Features() {
  return (
    <section id="features" className="w-full min-h-screen pt-20  py-12 bg-orange-100 text-black overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pl-24 md:pl-30 lg:pl-28">
        <div className="flex flex-col lg:flex-row md:flex-col items-center justify-between gap-10 mb-16">
          <div className="relative w-full lg:w-[400px] md:w-[500px] h-[250px] sm:h-[180px] mb-0 lg:mb-12 md:mb-26 max-[768px]:w-[350px]">
            <div className="absolute bottom-0 left-0 transform sm:-translate-x-10 -translate-x-4 -translate-y-1 rotate-[-12deg]">
              <Image
                src="/pirate_box.png"
                alt="Crate weapon"
                width={130}
                height={100}
                priority
                className="object-contain w-[200px] h-[180px]  lg:mr-10 md:mr-10  lg:w-[320px] lg:h-[220px] md:w-[340px] md:h-[240px] "
              />
            </div>

            <div className="absolute top-0 right-0 transform translate-x-10 translate-y-1 rotate-[15deg] ">
              <Image
                src="/pirate_explosive.png"
                alt="Barrel weapon"
                width={300}
                height={250}
                priority
                className="object-contain w-[250px] h-[190px]  lg:ml-16 lg:w-[320px] lg:h-[280px] md:w-[330px] md:h-[280px]"
              />
            </div>
          </div>

          <div className=" w-full lg:w-[400px] md:w-[500px] text-inherit text-justify">
            <h2 className="text-xl lg:text-3xl md:text-2xl font-medium leading-3 tracking-normal font-asheader mb-6 lg:mb-8 md:mb-8 sm:mb-4">
              Anything can be your weapon!</h2>
            <p className="text-sm lg:text-lg md:text-base font-asbody mb-3 leading-6">
              In Absolute Shipshow, there’s no armory — just chaos!
            </p>
            <p className="text-sm lg:text-lg md:text-base font-asbody mb-3 leading-6">
              Fling crates, swing fish, hurl mugs, or slap enemies with a soggy mop. If it’s lying around, it’s fair game.
            </p>
            <p className="text-sm lg:text-lg md:text-base font-asbody leading-6">
              Master the art of improvised combat and turn the ship itself into your arsenal. The more creative you get, the more satisfying (and hilarious) your survival becomes!
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse md:flex-col items-center justify-between gap-10">
          <div className="w-full lg:w-[400px] md:w-[500px]  ">
            <Image
              src="/ship.png"
              alt="Enemy ship"
              width={500}
              height={380}
              priority
              className="w-[450px] h-[270px] object-cover lg:w-[400px] lg:h-[330px] md:w-[500px] md:h-[370px]"
            />
          </div>
          <div className="w-full lg:w-[400px] md:w-[500px] text-inherit text-justify">
            <h2 className="text-xl lg:text-3xl md:text-2xl font-medium leading-3 tracking-normal font-asheader mb-6 lg:mb-8 md:mb-8 sm:mb-4">
              Take over the enemies’ ships!</h2>
            <p className="text-sm lg:text-lg md:text-base sm:text-base font-asbody mb-3 leading-6">
              Why just defend when you can invade? In Absolute Shipshow, you’re not stuck on your own sinking wreck — board enemy vessels, brawl your way through their crew, and claim their ship as your own.
            </p>
            <p className="text-sm lg:text-lg md:text-base sm:text-base font-asbody leading-6">
              <span className="font-semibold">But beware:</span> their decks are just as unstable, their crews just as chaotic, and the ocean’s not picking favorites! Conquer or sink trying!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}