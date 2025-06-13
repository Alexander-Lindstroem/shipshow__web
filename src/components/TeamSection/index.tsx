import CrewMember from "../CrewMember"
import { teamMembers } from "@/utils/data"

const TeamSection = () => {
    return (
        <div className="pt-12 bg-[url(/background-board.jpg)]">
            <div className="bg-[url(/background-paper.png)] md:bg-contain bg-top md:bg-repeat bg-repeat-space flex flex-row flex-wrap max-w-[1024px] justify-center m-auto">
                {teamMembers.map((object, index) => (
                    <CrewMember key={index} {...object}/>
                ))}
            </div>
        </div>
    )
}

export default TeamSection 