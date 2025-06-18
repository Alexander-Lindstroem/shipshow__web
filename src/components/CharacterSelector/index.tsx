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
    <div className="flex max-[350px]:flex-wrap justify-center items-center max-w-[80%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[60%] mx-auto gap-4 max-[256px]:pl-8 max-[200px]:pl-14">
      {characters.map((char, index) => {
        const isActive = char.id === selectedId;

        return (
          <button
            key={char.id}
            onClick={() => setSelectedId(char.id)}
            className={`relative h-20 md:w-48 md:h-58 lg:w-50 lg:h-48 focus:outline-none mb-26 md:mb-5 lg:mb-10  mt-0 lg:mt-5 ml-0 lg:ml-2 md:ml-0  ${index !== characters.length - 1 ? "sm:mr-6" : ""
              }`}
            aria-pressed={isActive}
          >
            {isActive ? (
              <div
                className="relative flex justify-center w-27 h-28 md:w-[144px] md:h-[144px] lg:w-[160px] lg:h-[160px] mt-8  md:mt-0 lg:mt-0 mr-6  md:mr-0 lg:mr-0 ml-0  md:ml-0 lg:ml-0 overflow-visible "
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
                           md:top-7 md:left-4 md:translate-x-0
                           md:w-[110px] md:h-[115px]
                           lg:top-8 lg:left-5 lg:translate-x-0
                           lg:w-[122px] lg:h-[126px]
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
                          lg:top-36   md:top-32
                          lg:bottom-0  md:bottom-0
                         text-yellow-900 text-center font-bold
                          z-20 w-full py-1
                          text-sm"
                >
                  <p className="font-extrabold text-xs md:text-base lg:text-base">$5000</p>
                  <p className="text-[8px] md:text-xs lg:text-[10px]">Dead or Alive</p>
                </div>
              </div>
            ) : (
              <div className=" relative w-22 h-26  mt-12 ml-0 mr-6
                     lg:w-[8rem] lg:h-[10rem] lg:ml-1 lg:mt-7 lg:mr-0
                     md:w-[7rem] md:h-[8rem] md:ml-4 md:mt-5
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