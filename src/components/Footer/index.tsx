import Image from "next/image";

const Footer = () => {
  return (
<footer className="relative w-full h-full overflow-x-clip bg-[url('/plank_crew.png')] bg-center bg-no-repeat bg-cover">
  <div className="flex flex-col items-center justify-center text-center text-gray-200 min-h-[100px] md:min-h-[150px]">
    <p className="font-bold text-white text-lg">⚓ Absolute ShipShow</p>
    <p className="text-sm">A chaotic pirate co-op adventure — keep yer ship afloat or sink tryin’!</p>
    <p className="text-sm">
      Play now: <a href="https://futuregames.itch.io/absoluteshipshow" target="_blank" rel="noopener noreferrer" className="underline text-blue-300">futuregames.itch.io/absoluteshipshow</a>
    </p>
  </div>
</footer>


  );
};

export default Footer;