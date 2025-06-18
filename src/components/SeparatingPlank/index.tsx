import Image from "next/image"

const SeparatingPlank = () => {
    return (
        <div className="relative h-[1px] z-10 overflow-x-clip">
            <Image 
                src="/plank_crew.png" 
                width={1900} 
                height={103} 
                alt="plank"
                className="h-auto max-h-[100px] min-h-[75px] w-[140%] absolute max-w-none top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-20 drop-shadow-black drop-shadow-sm"
            />
        </div>
    )
}

export default SeparatingPlank