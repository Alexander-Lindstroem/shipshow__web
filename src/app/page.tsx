'use client'
import { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar";
import { chest_names } from "@/utils/data";
import Hero from "@/components/Hero";
import PalmTreesLeftRight from "@/components/PalmTreesLeftRight";
import PalmTreesBottom from "@/components/PalmTreesBottom";
import AboutGame from "@/components/AboutGame";
import Features from "@/components/Features";
import Characters from "@/components/Characters";
import SeparatingPlank from "@/components/SeparatingPlank";

const Home = () => {
  const [chosenSection, setChosenSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection: string | null = null;
      for (const id of chest_names) {
        const page_id = document.getElementById(id);
        if (page_id) {
          const rect = page_id.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            currentSection = id;
            break;
          }
        }
      }

      if (currentSection && currentSection !== chosenSection) {
        setChosenSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [chosenSection]);

  return (
    <div className="relative">
      <Hero />
      <Sidebar sectionChosed={chosenSection} setSection={setChosenSection} />
      <div className="bg-[url(/background-board.jpg)]">
        <SeparatingPlank/>
        <PalmTreesLeftRight />
        <AboutGame />
        <SeparatingPlank/>
        <PalmTreesLeftRight />
        <Features/>
        <SeparatingPlank/>
        <PalmTreesLeftRight />
        <Characters />
      </div>
    </div>
  );
};

export default Home;
