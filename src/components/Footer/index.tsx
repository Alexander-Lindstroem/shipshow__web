import Image from 'next/image';

const Footer = () => {
  return (
   <footer className="relative w-screen h-[120px] overflow-hidden bg-[#623D17]">
  <div className="absolute inset-0 z-0">
    <Image
      src="/pirate-plank.png"
      alt="Footer Plank"
      fill
      priority
      className="object-cover"
    />
  </div>

  <div className="relative z-10 flex items-center justify-center w-screen h-full">
    <div className="flex flex-col items-center justify-center text-center text-white font-asheader w-full md:w-auto">
      <p className="text-3xl md:text-4xl">Absolute ShipShow</p>
      <p className="text-2xl md:text-2xl">A chaotic pirate co-op adventure</p>
      <p className="text-xl md:text-xl">
        Play now:{" "}
        <a
          href="https://futuregames.itch.io/absoluteshipshow"
          target="_blank"
          className="underline text-blue-300"
        >
          futuregames.itch.io/absoluteshipshow
        </a>
      </p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
