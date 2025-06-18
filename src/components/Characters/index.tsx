"use client";

import { useState } from "react";
import Image from "next/image";
import CharacterSelector from "../CharacterSelector";
import type { Character } from "@/utils/types";
import { characters } from "@/utils/data";

export default function Characters() {
  const [selectedId, setSelectedId] = useState(characters[0].id);
  const selectedCharacter = characters.find((char) => char.id === selectedId);
  if (!selectedCharacter) return null;

  return (
    <section id="characters" className=" w-full min-h-screen bg-orange-100  overflow-x-hidden  py-12 pt-10 pl-0 md:pl-0 lg:pl-10">
      <div className="max-w-5xl  mx-auto pl-24 md:pl-30 lg:pl-8 mt-22 md:mt-22 lg:mt-30">
        <div className=" mx-auto flex flex-col lg:flex-row md:flex-col  sm:flex-col items-center justify-center md:w-full md:h-auto ">
          <div className="w-full flex justify-center mt-10">
            <Image
              src={selectedCharacter.image}
              alt={selectedCharacter.name}
              width={500}
              height={400}
              className="w-[16rem] h-[14rem] sm:w-80 sm:h-80 md:w-[24rem] md:h-[22rem] lg:w-[34rem] lg:h-[36rem] object-contain"
              priority
            />
          </div>
          <div className=" w-full lg:w-[430px] md:w-[550px] flex flex-col ml-0 sm:ml-2 md:mr-2 md:h-full md:pl-6 lg:px-10 px-4 sm:px-6  text-inherit text-justify max-[768px]:max-w-[450px] ">

            <CharacterSelector
              characters={characters}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
            <h2 className="text-xl lg:text-3xl md:text-2xl font-medium leading-3 tracking-normal font-asheader mb-6 lg:mb-8 md:mb-8 max-[290px]:text-base">
              {selectedCharacter.name}
            </h2>
            <p className="text-sm lg:text-lg md:text-base font-asbody mb-3 leading-6">
              {selectedCharacter.info}
            </p>
            <p className="text-sm lg:text-lg md:text-base font-asbody  leading-6">
              {selectedCharacter.info2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}