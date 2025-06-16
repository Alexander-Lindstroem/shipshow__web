import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative h-28 w-full overflow-hidden">
      <div className="absolute top-0 left-1/2 h-28 w-[120vw] -translate-x-1/2">
        <Image
          src="/pirate-plank.png"
          alt="Footer Plank"
          fill
          priority
          className="object-fill"
        />
      </div>
      <div className="relative z-10 flex h-full items-center justify-center text-white">
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;