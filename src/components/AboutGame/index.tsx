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
    <section className="w-full bg-[#f8e4c2] py-12 px-4 sm:px-8 md:px-16">
      {aboutgame.map((game, index) => (
        <div
          key={game.id}
          className={`flex flex-col lg:flex-row items-center justify-center gap-8 mb-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
        >
          <div className="w-full lg:w-1/2">
            <Image
              src={game.gameimage}
              alt={game.title}
              width={600}
              height={400}
              className="w-full h-auto rounded-md shadow-md"
              priority
            />
          </div>
          <div className="w-full lg:w-1/2 text-black">
            <h2 className="text-2xl md:text-3xl font-bold font-name mb-4">
              {game.title}
            </h2>
            <p className="text-base md:text-lg font-info mb-3 leading-relaxed">
              {game.info}
            </p>
            <p className="text-base md:text-lg font-info leading-relaxed">
              {game.info2}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
