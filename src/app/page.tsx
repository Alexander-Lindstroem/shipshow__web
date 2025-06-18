'use client'
import { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar";
import { chest_names } from "@/utils/data";
import Hero from "@/components/Hero";

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
    <div>
      <Hero />
      <Sidebar sectionChosed={chosenSection} setSection={setChosenSection} />
    </div>
  );
};

export default Home;
