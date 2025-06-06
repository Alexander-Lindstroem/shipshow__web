'use client'
import { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar";
import MainPage from "@/components/MainPage";
import AboutGame from "@/components/AboutGame";
import Features from "@/components/Features";
import Characters from "@/components/Characters";

const sectionIds:string[] = ["main_page","about_game","features","characters"];

const Home = () => {
  const [chosenSection, setChosenSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection: string | null = null;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if section top is in view
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
    <div>
      <Sidebar sectionChosed={chosenSection} setSection={setChosenSection} />

      <MainPage />
      <AboutGame />
      <Features />
      <Characters />
    </div>
  );
};

export default Home;
