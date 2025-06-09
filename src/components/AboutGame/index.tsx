"use client";

import Image from "next/image";

type Game = {
  id: string;
  title: string;
  info: string;
  info2: string;
  gameimage: string;
};

const aboutgame: Game[] = [
  {
    id: "Absolute",
    title: "What is Absolute Shipshow?",
    gameimage: "/ship1.png",
    info: "Absolut Shipshow is a chaotic, co-op combat game where you and your friends play as ill-prepared pirates fighting off waves of enemies aboard ever-sinking ships.",
    info2: "Work together, improvise with whatever you find onboard, and survive long enough to loot the treasure — before the whole ship goes under!",
  },
  {
    id: "Play",
    title: "How to play?",
    gameimage: "/ship2.png",
    info: "Defeat the enemies, collect your treasure to your treasure chest and fight for your booty!",
    info2: "In order to win you need to defeat the last waves of enemies before they can steal all your treasure or all players are knocked unconscious.",
  },
];

export default function AboutGame() {
  return (
    <section className="w-full bg-orange-100 py-12 px-4 sm:px-8 md:px-18 lg:px-24 overflow-hidden">

      {aboutgame.map((game, index) => (
        <div
          key={game.id}
          className={`flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 md:gap-15 sm:gap-10 mb-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
        >
          <div className="w-full md:w-[80%] sm:w-[90%] lg:w-1/3">
            <Image
              src={game.gameimage}
              alt={game.title}
              width={500}
              height={300}
              className="w-full h-[320px] lg:h-[250px] md:h-[350px] sm:h-[300px] shadow-md"
              priority
            />
          </div>
          <div className="w-full lg:w-1/3 md:w-[80%] text-inherit">
            <h2 className="text-3xl lg:text-3xl md:text-4xl sm:text-2xl font-medium leading-3 tracking-normal font-name mb-6 lg:mb-8 md:mb-8 sm:mb-4">
              {game.title}
            </h2>
            {game.id === "Absolute" ? (
              <p className="text-xl lg:text-lg md:text-xl sm:text-base  font-info mb-3 leading-6">
                Absolut Shipshow is a <span className="font-semibold text-black">chaotic, co-op</span> combat game where you and your friends play as ill-prepared pirates fighting off waves of enemies aboard ever-sinking ships.
              </p>
            ) : (
              <p className="text-xl lg:text-lg md:text-xl sm:text-base font-info mb-3 leading-6">
                {game.info}
              </p>
            )}

            <p className="text-xl lg:text-lg md:text-xl sm:text-base font-info leading-6">
              {game.info2}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}