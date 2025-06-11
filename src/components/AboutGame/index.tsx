"use client";

import Image from "next/image";

export default function AboutGame() {
  return (
    <section className="w-full bg-orange-100 py-12 px-4 sm:px-8 md:px-18 lg:px-24 overflow-hidden">

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 md:gap-15 sm:gap-10 mb-8">
        <div className="w-full md:w-[80%] sm:w-[90%] lg:w-1/3">
          <Image
            src="/ship1.png"
            alt="What is Absolute Shipshow?"
            width={500}
            height={300}
            className="w-full h-[320px] lg:h-[250px] md:h-[350px] sm:h-[300px] shadow-md"
            priority
          />
        </div>
        <div className="w-full lg:w-1/3 md:w-[80%] text-inherit">
          <h2 className="text-3xl lg:text-3xl md:text-4xl sm:text-2xl font-medium leading-3 tracking-normal font-asheader mb-6 lg:mb-8 md:mb-8 sm:mb-4">
            What is Absolute Shipshow?
          </h2>
          <p className="text-xl lg:text-lg md:text-xl sm:text-base font-asbody mb-3 leading-6">
            Absolute Shipshow is a <span className="font-semibold text-black">chaotic, co-op</span> combat game where you and your friends play as ill-prepared pirates fighting off waves of enemies aboard ever-sinking ships.
          </p>
          <p className="text-xl lg:text-lg md:text-xl sm:text-base font-asbody leading-6">
            Work together, improvise with whatever you find onboard, and survive long enough to loot the treasure — before the whole ship goes under!
          </p>
        </div>
      </div>

      <div className="flex flex-col  items-center justify-center gap-8 lg:gap-20 md:gap-15 sm:gap-10 mb-8 lg:flex-row-reverse">
        <div className="w-full md:w-[80%] sm:w-[90%] lg:w-1/3">
          <Image
            src="/ship2.png"
            alt="How to play?"
            width={500}
            height={300}
            className="w-full h-[320px] lg:h-[250px] md:h-[350px] sm:h-[300px] shadow-md"
            priority
          />
        </div>
        <div className="w-full lg:w-1/3 md:w-[80%] text-inherit">
          <h2 className="text-3xl lg:text-3xl md:text-4xl sm:text-2xl font-medium leading-3 tracking-normal font-asheader mb-6 lg:mb-8 md:mb-8 sm:mb-4">
            How to play?
          </h2>
          <p className="text-xl lg:text-lg md:text-xl sm:text-base font-asbody mb-3 leading-6">
            Defeat the enemies, collect your treasure to your treasure chest and fight for your booty!
          </p>
          <p className="text-xl lg:text-lg md:text-xl sm:text-base font-asbody leading-6">
            In order to win you need to defeat the last waves of enemies before they can steal all your treasure or all players are knocked unconscious.
          </p>
        </div>
      </div>
    </section>
  );
}