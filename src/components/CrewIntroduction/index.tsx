import Image from "next/image"

const CrewIntroduction = () => {
    return (
        <div className="bg-[url(/absolute_ship.png)] bg-cover flex flex-col justify-center items-center pt-36 pb-12 h-fit md:h-[700px] relative overflow-hidden">
            <div className="text-center text-white max-w-[250px] md:max-w-none md:w-[40%]">
                <h1 className="font-asheader text-7xl p-4">The Crew</h1>
                <p className="font-asbody text-2xl p-4">Meet the crew of <i><b>Absolute ShipShow</b></i> as they set sail across the seven seas with barrels at the ready!</p>
            </div>
            <Image 
                src="/palm-tree-cropped.png" 
                width={700}
                height={600}
                alt="palm tree"
                className="absolute left-[100%] md:w-[700px] w-[250px] h-auto md:translate-y-[0] -translate-y-[30%] -translate-x-[53%] md:drop-shadow-4xl drop-shadow-xl drop-shadow-black"
            />
        </div>
    )
}

export default CrewIntroduction
