'use client'

import Image from "next/image";
import { useState } from "react";
import { sidebarProps } from "@/utils/types";
import { chest_names } from "@/utils/data";


const Sidebar = ({ sectionChosed, setSection }: sidebarProps) => {
    const [hovering, setHovering] = useState<boolean>(false);

    const handleClick = (item: string) => {
        setSection(item);
        const page_id = document.getElementById(item);
        if (page_id) {
            page_id.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => setSection(item), 300);
        } else {
            setSection(item);
        }
    }

    return (
        <>
            {hovering && typeof window !== 'undefined' && window.innerWidth >= 769 && (
                <div className="fixed inset-0 bg-black/40 z-40 transition-opacity" />
            )}

            <div className="fixed top-1/2 -translate-y-1/2 z-50 ml-2"
            >

                <div className="relative w-[150px] h-[350px]"  onMouseEnter={() => { setHovering(true) }}
                                onMouseLeave={() => { setHovering(false) }}>
                    <Image
                        src="/pirate_side_nav_planks.png"
                        alt="plank"
                        fill
                        className="object-contain z-0 hidden min-[769px]:block"
                    />

                    <div className="absolute inset-0  z-10 flex flex-col justify-center gap-4 pointer-events-auto">
                        {chest_names.map((item, index) => (
                            <div className="relative group min-[769px]:ml-8 max-w-max" key={index}>
                                <Image
                                    src={item === sectionChosed ? `/pirate_Openchest.png` : `/pirate_Closedchest.png`}
                                    alt={`chest ${index + 1}`}
                                    width={75}
                                    height={50}
                                    onClick={() => handleClick(item)}
                                    className="cursor-pointer"


                                />

                                <div className={`absolute left-[70px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition  bg-[#835c33] text-white text-xl rounded px-2 py-1 z-50 whitespace-nowrap  font-asheader hidden md:block`}>
                                    {item === "main_page" ? "A Hoy!" :   item.replace("_", " ").replace(/\b\w/g, (char) => char.toUpperCase())}
                                </div>


                                <div className="max-[769px]:block hidden  text-white  bg-[#835c33] px-2 text-[1.25rem] font-asheader whitespace-nowrap text-center" onClick={() => setHovering(false)}>
                                    {item === "main_page" ? "A Hoy!"   : item.replace("_", " ").replace(/\b\w/g, (char) => char.toUpperCase())}
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
