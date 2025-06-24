import Introduction from "../Introduction";

const Hero = () => {
    return (
        <div id="main_page" className="relative w-full h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-50"
      >
        <source src="/PlayerAbilities.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-20 bg-black/40">
        <main className="flex flex-col gap-8 items-center text-center">
          <Introduction />
        </main>
      </div>
    </div>
    )
}

export default Hero