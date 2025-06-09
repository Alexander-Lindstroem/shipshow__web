"use client";

import { useState } from "react";
import Image from "next/image";

const characters = [
  {
    id: "char1",
    name: "Helga",
    FaceImage: "/Pirate_Female_Face.png",
    image: "/Pirate_Female-character.png",
    posterImage: "/pirate_wanted-poster.png",
    TransparantImage: "/transparant.jpg",
    info: "Helga leads with her fists and thinks about the consequences... never.",
    info2: "A living cannonball of chaos, she charges headfirst into trouble with a grin and a grown. Known for cracking barrels, bones, and bad plans with equal enthusiasm, she's the heart of the crew mayhem. If there's a flight to be had (or started), Helga's already halfway through it",
  },
  {
    id: "char2",
    name: "Gregore",
    FaceImage: "/Pirate_Male_Face.png",
    image: "/Pirate_Male-character.png",
    posterImage: "/pirate_wanted-poster.png",
    TransparantImage: "/transparant.jpg",
    info: "No one embraces the legend of privacy quite like Gregore. With a voice that commands storms and a sword nearly as big as his ego, he strides into battle like the ocean owes him money",
    info2: "Always the first to declare victory, Gregore leads with dramatic flair, reckless courage, and a dangerouslyopen shirt. He's bold, loud, and deeply convinced he was born to rule the seas - or at least look good trying",
  },
];

export default function Characters() {
  const [selectedId, setSelectedId] = useState(characters[0].id);
  const selectedCharacter = characters.find((c) => c.id === selectedId);
  if (!selectedCharacter) return null;

  return (
    <div className=" w-full min-h-screen bg-orange-100  overflow-x-hidden">
      <div className=" flex flex-col lg:flex-row md:flex-col md:mt-0 sm:flex-col items-center md:w-full md:h-auto ml-1 lg:ml-40 md:ml-5 sm:ml-2">
        <Image
          src={selectedCharacter.image}
          alt={selectedCharacter.name}
          width={200}
          height={200}
          className=" w-[20rem] h-[20rem] sm:w-80 sm:h-80 max-w-xl md:w-[26rem] md:h-[24rem] lg:w-[34rem] lg:h-[34rem] object-contain mt-1"
          priority
        />

        <div className=" flex flex-col w-100 ml-0 sm:ml-2 md:mr-2 md:h-full md:pl-6 lg:px-0 px-4 sm:px-6 sm:mt-0">
          <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-medium text-black mb-4 sm:mb-5 lg:mt-20 font-asheader text-left">
            {selectedCharacter.name}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-base font-semibold font-asbody leading-6 mb-2 sm:mb-3 lg:mb-4 max-w-2xl text-left">
            {selectedCharacter.info}
          </p>

          <p className=" text-sm sm:text-base sm:mb-3 md:text-lg lg:text-base font-semibold font-asbody leading-6 mb-2 lg:mb-3 max-w-2xl text-left">
            {selectedCharacter.info2}
          </p>

          <div className=" flex justify-start sm:justify-start md:justify-start lg:justify-around gap-15 sm:gap-6 md:gap-0 lg:gap-0 mt-0 sm:mt-6 md:mt-0 lg:mt-0 px-2 sm:px-0">
            {characters.map((char, index) => {
              const isActive = char.id === selectedId;

              return (
                <button
                  key={char.id}
                  onClick={() => setSelectedId(char.id)}
                  className={`relative w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-62 lg:w-58 lg:h-64 focus:outline-none mb-16 ${index !== characters.length - 1 ? "sm:mr-8" : ""
                    }`}
                  aria-pressed={isActive}
                >
                  {isActive ? (
                    <div
                      className="relative w-38 h-36 sm:w-34 sm:h-34 md:w-[190px] md:h-[190px] mt-8 sm:mt-3 md:mt-0 lg:mt-0 mr-5 sm:mr-3 md:mr-0 lg:mr-0 ml-3 sm:ml-1 md:ml-0 lg:ml-0 overflow-visible"
                    >
                      <Image
                        src={char.posterImage}
                        alt={`${char.name} wanted poster`}
                        width={500}
                        height={500}
                        className="object-cover z-0 absolute inset-0 md:w-full md:h-fit"
                      />
                      <div
                        className=" absolute 
                           w-30 h-30
                           top-8 left-1/2 -translate-x-1/2
                           sm:top-5 sm:left-5            
                           sm:w-32 sm:h-32
                           md:top-10 md:left-6 md:translate-x-0
                           md:w-[140px] md:h-[145px]
                           lg:top-10 lg:left-6 lg:translate-x-0
                           lg:w-[142px] lg:h-[148px]
                          flex items-center z-10 p-2 overflow-hidden"
                      >
                        <Image
                          src={char.FaceImage}
                          alt={char.name}
                          width={500}
                          height={500}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div
                        className="
                          absolute bottom-0 left-1/2 -translate-x-1/2 top-35 text-bold
                          lg:top-45  sm:top-45 md:top-45
                          lg:bottom-0  sm:bottom-0 md:bottom-0
                         text-yellow-900 text-center font-bold
                          z-20 w-full py-1
                          sm:text-xs text-sm"
                      >
                        <p className="text-bold">$5000</p>
                        <p className="text-[10px]">Dead or Alive</p>
                      </div>
                    </div>
                  ) : (
                    <div className=" relative w-30 h-32  mt-12 ml-10 mr-10
                     lg:w-[10rem] lg:h-[11rem] lg:ml-1 lg:mt-6
                     sm:w-[5rem] sm:h-[5rem] sm:ml-0 sm:mr-5
                     md:w-[8rem] md:h-[10rem] md:ml-2 md:mt-5
                     rounded-lg  border-2 border-solid border-inherit    
                     overflow-hidden">
                      <Image
                        src={char.FaceImage}
                        alt={char.name}
                        width={500}
                        height={500}
                        className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition"
                      />
                      <Image
                        src={char.TransparantImage}
                        alt={`${char.name} transparent overlay`}
                        width={500}
                        height={500}
                        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
