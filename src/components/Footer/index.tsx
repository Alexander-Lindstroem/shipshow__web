import Image from 'next/image';

const Footer = () => {
  return (

   <footer className="relative w-full h-[120px] overflow-hidden ">
  <div className="absolute inset-0 z-0">
    <Image
      src="/pirate-plank.png"
      alt="Footer Plank"
      
      width={1900} 
                height={150} 
      className="h-auto max-h-[250px] min-h-[75px] w-[140%] absolute max-w-none top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-20 drop-shadow-black drop-shadow-sm"
    />
  </div>

  <div className="relative z-10 flex items-center justify-center w-full h-full">
    <div className="flex flex-col items-center justify-center text-center text-white w-full md:w-auto font-asheader  h-full p-8 md:p-16">
      <p className="text-2xl  md:text-4xl">Absolute ShipShow</p>
      <p className="text-xl md:text-2xl">A chaotic pirate co-op adventure</p>
      <p className="text-l md:text-xl">
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
