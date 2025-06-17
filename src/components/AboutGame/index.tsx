"use client";

import Image from "next/image";

export default function AboutGame() {
  return (
    <section id="about_game" className="w-full min-h-screen bg-orange-100  pb-12 px-4 sm:px-8 md:px-18 lg:px-24 overflow-hidden pt-10 ">
      <div className="max-w-5xl  mx-auto pl-24 md:pl-30 lg:pl-28 mt-10 md:mt-20 lg:mt-30">
        <div className="mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 md:gap-15 sm:gap-10 mb-8">
          <div className="w-full lg:w-[400px] md:w-[500px]">
            <Image
              src="/ship.png"
              alt="What is Absolute Shipshow?"
              width={500}
              height={400}
              className="w-[450px] h-[270px] md:h-[370px] lg:w-[400px] lg:h-[330px] object-cover"
              priority
            />
          </div>

          <div className="w-full lg:w-[400px] md:w-[500px]  text-inherit text-justify">
            <h2 className="text-xl lg:text-3xl md:text-2xl font-medium leading-3 tracking-normal font-asheader mb-6 lg:mb-8 md:mb-8 max-[290px]:text-base">
              What is Absolute Shipshow?
            </h2>
            <p className="text-sm lg:text-lg md:text-base font-asbody mb-3 leading-6">
              Absolute Shipshow is a <span className="font-semibold text-black">chaotic, co-op</span> combat game where you and your friends play as ill-prepared pirates fighting off waves of enemies aboard ever-sinking ships.
            </p>
            <p className="text-sm lg:text-lg md:text-base font-asbody leading-6">
              Work together, improvise with whatever you find onboard, and survive long enough to loot the treasure — before the whole ship goes under!
            </p>
          </div>
        </div>

        <div className="flex flex-col  items-center justify-center gap-8 lg:gap-20 md:gap-15 sm:gap-10 mb-8 lg:flex-row-reverse">
          <div className=" w-full lg:w-[400px] md:w-[500px]">
            <Image
              src="/fight_ship.png"
              alt="How to play?"
              width={500}
              height={400}
              className="w-[450px] h-[270px]  md:h-[370px] lg:w-[400px] lg:h-[330px] object-cover"
              priority
            />
          </div>
          <div className="w-full lg:w-[400px] md:w-[500px] text-inherit text-justify">
            <h2 className="text-xl lg:text-3xl md:text-2xl  font-medium leading-3 tracking-normal font-asheader mb-6 lg:mb-8 md:mb-8 sm:mb-4">
              How to play?
            </h2>
            <p className="text-sm lg:text-lg md:text-base sm:text-base font-asbody mb-3 leading-6">
              Defeat the enemies, collect your treasure to your treasure chest and fight for your booty!
            </p>
            <p className="text-sm lg:text-lg md:text-base sm:text-base font-asbody leading-6">
              In order to win you need to defeat the last waves of enemies before they can steal all your treasure or all players are knocked unconscious.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}