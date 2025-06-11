"use client";

import Image from "next/image";

export default function Features() {
  return (
    <section className="w-full bg-orange-100 py-12 px-4 sm:px-8 md:px-18 lg:px-24 overflow-hidden">

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 md:gap-15 sm:gap-10 mb-8">
        <div className="flex gap-6 md:w-1/2 justify-center">
          <Image
            src="/pirate_box.png"
            alt="What is Absolute Shipshow?"
            width={500}
            height={300}
            className="  object-contain"
            priority
          />

          <Image
            src="/pirate_explosive.png"
            alt="What is Absolute Shipshow?"
            width={500}
            height={300}
            className=" object-contain"
            priority
          />
        </div>
        <div className="w-full lg:w-1/3 md:w-[80%] text-inherit">
          <h2 className="text-3xl lg:text-3xl md:text-4xl sm:text-2xl font-medium leading-3 tracking-normal font-asheader mb-6 lg:mb-8 md:mb-8 sm:mb-4">
            Anything can be your weapon!
          </h2>
          <p className="text-xl lg:text-lg md:text-xl sm:text-base font-asbody mb-3 leading-6">
            In Absolute Shipshow, there's no armony - just chaos!        </p>
          <p className="text-xl lg:text-lg md:text-xl sm:text-base font-asbody mb-3 leading-6">
           Fling crates,swing fish, hurl mugs, or slap enemies with a soggy mop. If it's lying around, it's fair game.</p>
        <p className="text-xl lg:text-lg md:text-xl sm:text-base font-asbody leading-6">
           Master the art of improvised combat and turn the ship itself into your arsenal. The more creative you get, the more satisfying(and hilarious) your survival becomes! </p>
   
        
        </div>
      </div>

      <div className="flex flex-col  items-center justify-center gap-8 lg:gap-20 md:gap-15 sm:gap-10 mb-8 lg:flex-row-reverse">
        <div className="w-full md:w-[80%] sm:w-[90%] lg:w-1/3">
          <Image
            src="/ship2.png"
            alt="How to play?"
            width={500}
            height={300}
            className="w-full h-[320px] lg:h-[250px] md:h-[350px] sm:h-[300px] shadow-md"
            priority
          />
        </div>
        <div className="w-full lg:w-1/3 md:w-[80%] text-inherit">
          <h2 className="text-3xl lg:text-3xl md:text-4xl sm:text-2xl font-medium leading-3 tracking-normal font-asheader mb-6 lg:mb-8 md:mb-8 sm:mb-4">
            Take over the enemies ships!
          </h2>
          <p className="text-xl lg:text-lg md:text-xl sm:text-base font-asbody mb-3 leading-6">
           Why just defend when you can invade? In Absolute ShipShow, you're not stuck on your own 
          </p>
          <p className="text-xl lg:text-lg md:text-xl sm:text-base font-asbody leading-6">
            In order to win you need to defeat the last waves of enemies before they can steal all your treasure or all players are knocked unconscious.
          </p>
        </div>
      </div>
    </section>
  );
}






// "use client";

// import Image from "next/image";

// export default function Features() {
//   return (
//     <section className="w-full  py-12 px-4 sm:px-8 md:px-16 lg:px-32 text-black font-sans">
//       {/* First Block */}
//       <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
//         <div className="flex gap-6 md:w-1/2 justify-center">
//           <Image
//             src="/pirate_box.png"
//             alt="Crate weapon"
//             width={120}
//             height={120}
//             className="object-contain"
//           />
//           <Image
//             src="/pirate_explosive.png"
//             alt="Barrel weapon"
//             width={120}
//             height={120}
//             className="object-contain"
//           />
//         </div>
//         <div className="md:w-1/2 text-left">
//           <h2 className="text-2xl md:text-3xl font-bold mb-4 font-asheader">Anything can be your weapon!</h2>
//           <p className="text-base md:text-lg mb-3 font-asbody">
//             In Absolut Shipshow, there’s no armory — just chaos!
//           </p>
//           <p className="text-base md:text-lg mb-3 font-asbody">
//             Fling crates, swing fish, hurl mugs, or slap enemies with a soggy mop. If it’s lying around, it’s fair game.
//           </p>
//           <p className="text-base md:text-lg font-asbody">
//             Master the art of improvised combat and turn the ship itself into your arsenal. The more creative you get, the more satisfying (and hilarious) your survival becomes!
//           </p>
//         </div>
//       </div>

//       {/* Second Block */}
//       <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10">
//         <div className="md:w-1/2">
//           <Image
//             src="/ship2.png"
//             alt="Enemy ship"
//             width={400}
//             height={300}
//             className="w-full h-auto rounded-md shadow-md object-cover"
//           />
//         </div>
//         <div className="md:w-1/2 text-left">
//           <h2 className="text-2xl md:text-3xl font-bold mb-4 font-asheader">Take over the enemies’ ships!</h2>
//           <p className="text-base md:text-lg mb-3 font-asbody">
//             Why just defend when you can invade? In Absolut Shipshow, you’re not stuck on your own sinking wreck — board enemy vessels, brawl your way through their crew, and claim their ship as your own.
//           </p>
//           <p className="text-base md:text-lg font-asbody">
//             <span className="font-semibold">But beware:</span> their decks are just as unstable, their crews just as chaotic, and the ocean’s not picking favorites! Conquer or sink trying!
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
