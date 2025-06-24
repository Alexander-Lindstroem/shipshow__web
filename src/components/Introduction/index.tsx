import Image from "next/image";

const Introduction = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen mt-12 sm:mt-10 text-center">
            <Image className="w-[200px] sm:w-[300px] md:w-[400px] drop-shadow-[-10px_8px_rgba(0,0,0,0.50)]"
                src="/shipshow_logo.png"
                alt="Absolute Shipshow Logo"
                width={400}
                height={400}
                priority
            />
            <h1 className="text-white font-asheader text-2xl sm:text-2xl md:text-3xl leading-relaxed max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl -mt-2 px-24 sm:px-16 md:px-10">
                Chaos reigns on the seven seas - set sail, grab whatever you can, and battle your way through the mayhem!
            </h1>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 mt-6">
            <a className="w-full sm:w-auto sm:min-w-[200px] bg-white hover:bg-[#9f9f9f] text-red-600 text-base px-6 py-3 rounded-3xl cursor-pointer transition-all"
             href="https://www.youtube.com/watch?v=cTHU4Kj_g3s"
             target="_blank"
             rel="noopener noreferrer"
             role="button"
             >
                Watch the trailer
            </a>
            <a className="w-full sm:w-auto sm:min-w-[200px] bg-white hover:bg-[#9f9f9f] text-red-600 text-base px-6 py-3 rounded-3xl cursor-pointer transition-all"
             href="https://futuregames.itch.io/absoluteshipshow"
             target="_blank"
             rel="noopener noreferrer"
             role="button"
             >
                Download on itch.io
            </a>
            </div>
        </div>
    )
}

export default Introduction