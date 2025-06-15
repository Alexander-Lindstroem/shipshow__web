import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative min-h-28 h-28 w-full overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[120vw] h-32 -translate-x-1/2">
        <Image
          src="/plank.png"
          alt="Footer Plank"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="relative z-10 flex h-full items-center justify-center text-white">
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;