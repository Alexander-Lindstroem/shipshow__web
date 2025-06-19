import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative h-14 w-full overflow-x-clip bg-black">
      <div className="absolute top-0 left-1/2 h-28 w-[120vw] -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/pirate-plank.png"
          alt="Footer Plank"
          fill
          priority
          className="object-fill"
        />
      </div>
    </footer>
  );
};

export default Footer;