import Image from "next/image"
import { teamMember } from "@/utils/types"

const CrewMember = ({name, title, image}:teamMember) => {
    return (
        <div className="relative w-fit">
            <Image 
                src="/wanted-poster-crew.png" width={300} height={1} alt="wanted poster"
                className="relative z-20 h-auto"
            />
            <Image 
                src={image} width={300} height={1} alt={`${name}`}
                className="absolute z-10 h-auto w-[70%] top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]"
            />
            <div className="select-none text-[#52292a] w-max font-aswanted text-center absolute top-[85%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-30">
                <div className="font-medium text-lg">{name}</div>
                <div className="font-medium text-sm">{title}</div>
            </div>
        </div>
    )
}

export default CrewMember