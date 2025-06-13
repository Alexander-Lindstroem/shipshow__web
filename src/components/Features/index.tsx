"use client";

import Image from "next/image";

export default function Features() {
  return (
      <section id="features" className="w-full min-h-screen pt-40 lg:pt-50 md:pt-50 sm:pt-10 py-12 bg-orange-100 text-black overflow-x-hidden pl-18 sm:pl-8 md:pl-0 lg:pl-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row md:flex-col items-center justify-between gap-10 mb-16">
          <div className="relative w-full md:w-1/2 lg:w-1/3 h-[250px] sm:h-[160px] mb-0 lg:mb-12 md:mb-26">
            <div className="absolute bottom-0 left-0 transform sm:-translate-x-10 -translate-x-4 -translate-y-1 rotate-[-12deg]">
              <Image
                src="/pirate_box.png"
                alt="Crate weapon"
                width={130}
                height={100}
                priority
                className="object-contain w-[200px] h-[180px] mr-2 lg:mr-10 md:mr-10 sm:mr-2 lg:w-[320px] lg:h-[220px] md:w-[340px] md:h-[240px] sm:w-[320px] sm:h-[220px]"
              />
            </div>

            <div className="absolute top-0 right-0 transform translate-x-10 translate-y-1 rotate-[15deg] ">
              <Image
                src="/pirate_explosive.png"
                alt="Barrel weapon"
                width={250}
                height={180}
                priority
                className="object-contain w-[240px] h-[220px] ml-4 lg:ml-16 md:ml-16 sm:ml-2 lg:w-[320px] lg:h-[280px] md:w-[320px] md:h-[280px] sm:w-[320px] sm:h-[280px]"
              />
            </div>
          </div>

          <div className=" lg:w-[48%] md:w-[55%] text-left ">
            <h2 className="text-3xl lg:text-3xl md:text-4xl sm:text-2xl font-medium leading-3 tracking-normal font-asheader mb-6 lg:mb-8 md:mb-8 sm:mb-4">
              Anything can be your weapon!</h2>
            <p className="text-xl lg:text-lg md:text-2xl sm:text-base font-asbody mb-3 leading-6">
              In Absolut Shipshow, there’s no armory — just chaos!
            </p>
            <p className="text-xl lg:text-lg md:text-2xl sm:text-base font-asbody mb-3 leading-6">
              Fling crates, swing fish, hurl mugs, or slap enemies with a soggy mop. If it’s lying around, it’s fair game.
            </p>
            <p className="text-xl lg:text-lg md:text-2xl sm:text-base font-asbody leading-6">
              Master the art of improvised combat and turn the ship itself into your arsenal. The more creative you get, the more satisfying (and hilarious) your survival becomes!
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse md:flex-col items-center justify-between gap-10">
          <div className="md:w-1/2  ">
            <Image
              src="/fight-ship.png"
              alt="Enemy ship"
              width={500}
              height={400}
              priority
              className="w-full rounded-md object-cover lg:w-[420px] lg:h-[300px] md:w-[500px] md:h-[360px]"
            />
          </div>
          <div className="lg:w-[47%] md:w-[55%] text-left">
            <h2 className="text-3xl lg:text-3xl md:text-4xl sm:text-2xl font-medium leading-3 tracking-normal font-asheader mb-6 lg:mb-8 md:mb-8 sm:mb-4">
              Take over the enemies’ ships!</h2>
            <p className="text-xl lg:text-lg md:text-2xl sm:text-base font-asbody mb-3 leading-6">
              Why just defend when you can invade? In Absolut Shipshow, you’re not stuck on your own sinking wreck — board enemy vessels, brawl your way through their crew, and claim their ship as your own.
            </p>
            <p className="text-xl lg:text-lg md:text-2xl sm:text-base font-asbody mb-3 leading-6">
              <span className="font-semibold">But beware:</span> their decks are just as unstable, their crews just as chaotic, and the ocean’s not picking favorites! Conquer or sink trying!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}