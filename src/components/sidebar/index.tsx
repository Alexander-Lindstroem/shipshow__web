'use client'

import Image from "next/image";
import { useState } from "react";
import { Jolly_Lodger } from "next/font/google";

const jollyLodger = Jolly_Lodger({
  weight: "400",
  subsets: ["latin"],
});

type sidebarProps = {
    sectionChosed: string | null,
    setSection: (section: string) => void;
}
const Sidebar = ({ sectionChosed, setSection }: sidebarProps) => {
    const [hovering, setHovering] = useState(false);
    const chest_names: string[] = ["main_page", "about_game", "features", "characters"];

    const handleClick = (item: string) => {
        setSection(item);
        const el = document.getElementById(item);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    return (
        <>
            {hovering && (
                <div className="fixed inset-0 bg-black/40 z-40 transition-opacity" />
            )}

            <div className="fixed left-2 top-1/2 -translate-y-1/2 z-50"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}>
                <div className="relative w-[300px] h-[450px]">

                    <Image
                        src="/pirate_side nav planks.png"
                        alt="plank"
                        fill
                        className="object-contain z-0 pointer-events-none hidden sm:block"
                    />

                    <div className="absolute inset-0 z-10 flex flex-col items-start justify-center gap-4 ml-10">
                        {chest_names.map((item, index) => (
                            <div className="relative group" key={index}>
                                <Image
                                    src={item === sectionChosed ? `/pirate_Openchest.png` : `/pirate_Closedchest.png`}
                                    alt={`chest ${index + 1}`}
                                    width={75}
                                    height={50}
                                    onClick={() => handleClick(item)}
                                    className="cursor-pointer"
                                />

                                <div className={`absolute left-full ml-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xl rounded px-2 py-1 z-50 whitespace-nowrap ${jollyLodger.className}`}>
                                    {item==="main_page" ? "A Hoy!" : item.replace("_", " ")}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
