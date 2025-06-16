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
    <section id="characters" className=" w-full min-h-screen bg-orange-100  overflow-x-hidden  py-12">
      <div className="max-w-5xl  mx-auto pl-24 md:pl-30 lg:pl-28">
        <div className=" flex flex-col lg:flex-row md:flex-col md:mt-0 sm:flex-col items-center md:w-full md:h-auto ">
          <Image
            src={selectedCharacter.image}
            alt={selectedCharacter.name}
            width={200}
            height={200}
            className=" w-[20rem] h-[20rem] sm:w-80 sm:h-80 max-w-xl md:w-[26rem] md:h-[24rem] lg:w-[34rem] lg:h-[34rem] object-contain mt-1"
            priority
          />
          <div className=" w-full lg:w-[500px] md:w-[400px] flex flex-col ml-0 sm:ml-2 md:mr-2 md:h-full md:pl-6 lg:px-10 px-4 sm:px-6 mt-5 text-inherit">
            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-asheader leading-6 sm:leading-7 md:leading-8 lg:leading-9 mb-6 lg:mb-8 md:mb-8 mt-2">
              {selectedCharacter.name}
            </h2>
            <p className="text-sm sm:text-base md:text-base lg:text-lg font-asbody leading-6">
              {selectedCharacter.info}
            </p>
            <p className="text-sm sm:text-base md:text-base lg:text-lg font-asbody leading-6">
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
    </section>
  );
}