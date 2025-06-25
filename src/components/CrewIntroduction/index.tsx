const CrewIntroduction = () => {
  return (
    <div className="bg-[url(/crew-background.png)] bg-cover bg-center flex flex-col justify-center items-center pt-36 pb-12 h-fit md:h-[700px] relative overflow-hidden">
      <div className="text-center text-white max-w-[250px] md:max-w-none md:w-[40%]">
        <h1 className="font-asheader text-7xl p-4">The Crew</h1>
        <p className="font-asbody text-2xl p-4">
          Meet the crew of <i><b>Absolute ShipShow</b></i> as they set sail across the seven seas with barrels at the ready!
        </p>
      </div>

      <div
        className="absolute right-0 -translate-y-[50px] transform rotate-360
             hidden md:block md:w-[400px] md:right-[-250] md:top-10 md:scale-120 lg:translate-x-[43%] lg:block lg:w-[800px] 
             drop-shadow-[-10px_8px_rgba(0,0,0,0.30)]"
      >
        <img 
          src="/palm_leaves.png"
          alt="Palm tree"
          className="w-full h-auto sway"
        />
      </div>
    </div>
  )
}

export default CrewIntroduction;
