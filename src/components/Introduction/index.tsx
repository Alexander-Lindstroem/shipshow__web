import Image from "next/image";

const Introduction = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen -mt-48 text-center px-4">
            <Image className="drop-shadow-[-10px_8px_rgba(0,0,0,0.50)]"
                src="/pirate_placeholder_Logo.png"
                alt="Absolute Shipshow Logo"
                width={300}
                height={300}
                priority
            />
            <p className="text-black font-asheader text-lg sm:text-2xl leading-relaxed max-w-md mt-6">
                Chaos reigns on the seven seas - set sail, grab whatever you can, and battle your way through the mayhem!
            </p>
            <a className="mt-6 bg-white hover:bg-[#9f9f9f] text-red-600 text-base px-6 py-3 rounded-3xl cursor-pointer transition-all"
             href="https://futuregames.itch.io/absoluteshipshow"
             target="_blank"
             rel="noopener noreferrer"
             role="button"
             >
                Download on itch.io
            </a>
        </div>
    )
}

export default Introduction