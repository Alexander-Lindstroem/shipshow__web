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
    <div className="flex justify-center items-center max-w-[80%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[60%] mx-auto">

      {characters.map((char, index) => {
        const isActive = char.id === selectedId;

        return (
          <button
            key={char.id}
            onClick={() => setSelectedId(char.id)}
            className={`relative  h-24 sm:w-32 sm:h-32 md:w-44 md:h-62 lg:w-58 lg:h-64 focus:outline-none mb-16  ml-0 lg:ml-0 md:ml-0 sm:ml-0 ${index !== characters.length - 1 ? "sm:mr-6" : ""
              }`}
            aria-pressed={isActive}
          >
            {isActive ? (
              <div
                className="relative w-38 h-36 sm:w-34 sm:h-34 md:w-[190px] md:h-[190px] mt-8 sm:mt-3 md:mt-0 lg:mt-0 mr-10 sm:mr-2 md:mr-0 lg:mr-0 ml-0 sm:ml-1 md:ml-0 lg:ml-0 overflow-visible"
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
                  <p className="font-extrabold text-base">$5000</p>
                  <p className="text-[10px]">Dead or Alive</p>
                </div>
              </div>
            ) : (
              <div className=" relative w-30 h-32  mt-12 ml-0 mr-12
                     lg:w-[10rem] lg:h-[11rem] lg:ml-1 lg:mt-6 lg:mr-0
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
  );
}