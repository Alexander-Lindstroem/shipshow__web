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
          <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-medium text-inherit mb-4 sm:mb-5 lg:mt-20 font-asheader text-left">
            {selectedCharacter.name}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-base text-inherit font-semibold font-asbody leading-6 mb-2 sm:mb-3 lg:mb-4 max-w-2xl text-left">
            {selectedCharacter.info}
          </p>

          <p className=" text-sm sm:text-base sm:mb-3 md:text-lg lg:text-base text-inherit font-semibold font-asbody leading-6 mb-2 lg:mb-3 max-w-2xl text-left">
            {selectedCharacter.info2}
          </p>

          <CharacterSelector
            characters={characters}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </div>
      </div>
    </div>
  );
}

