"use client";
import Image from "next/image";
import type { Character } from "@/utils/types";
import type { CharacterSelectorProps } from "@/utils/types";

export default function CharacterSelector({
  characters,
  selectedId,
  setSelectedId,
}: CharacterSelectorProps) {
  return (
    <div className="flex justify-center items-center max-w-[80%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[60%] mx-auto ">

      {characters.map((char, index) => {
        const isActive = char.id === selectedId;

        return (
          <button
            key={char.id}
            onClick={() => setSelectedId(char.id)}
            className={`relative h-20 sm:w-20 sm:h-32 md:w-48 md:h-58 lg:w-50 lg:h-48 focus:outline-none mb-16 mt-0 lg:mt-5 ml-0 lg:ml-2 md:ml-0 sm:ml-0 ${index !== characters.length - 1 ? "sm:mr-6" : ""
              }`}
            aria-pressed={isActive}
          >
            {isActive ? (
              <div
                className="relative w-27 h-28 md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] mt-8 sm:mt-3 md:mt-0 lg:mt-0 mr-6 sm:mr-2 md:mr-0 lg:mr-0 ml-0 sm:ml-1 md:ml-0 lg:ml-0 overflow-visible "
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
                           w-22 h-22.5
                           top-5 left-1/2 -translate-x-1/2
                           sm:top-5 sm:left-5            
                           sm:w-32 sm:h-32
                           md:top-8 md:left-5 md:translate-x-0
                           md:w-[123px] md:h-[126px]
                           lg:top-10 lg:left-6 lg:translate-x-0
                           lg:w-[135px] lg:h-[138px]
                          flex items-center z-10 p-2 overflow-hidden
                          "
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
                          absolute bottom-0 left-1/2 -translate-x-1/2 top-24 text-bold
                          lg:top-42  sm:top-45 md:top-37
                          lg:bottom-0  sm:bottom-0 md:bottom-0
                         text-yellow-900 text-center font-bold
                          z-20 w-full py-1
                          sm:text-xs text-sm"
                >
                  <p className="font-extrabold text-xs md:text-base lg:text-base">$5000</p>
                  <p className="text-[8px] md:text-[10px] lg:text-[10px]">Dead or Alive</p>
                </div>
              </div>
            ) : (
              <div className=" relative w-22 h-26  mt-12 ml-0 mr-6
                     lg:w-[9rem] lg:h-[11rem] lg:ml-4 lg:mt-6 lg:mr-0
                     md:w-[8rem] md:h-[9rem] md:ml-4 md:mt-5
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
  );
}