import CrewMember from "../CrewMember"
import { teamMembers } from "@/utils/data"

const TeamSection = () => {
    return (
        <div className="pt-16 pb-16 bg-[url(/background-board.jpg)]">
            <div className="bg-[url(/background-paper.png)] bg-size-[1024px] bg-top bg-repeat flex flex-row flex-wrap gap-6 pt-6 sm:pb-0 max-w-[1024px] justify-center m-auto">
                {teamMembers.map((object, index) => (
                    <CrewMember key={index} {...object}/>
                ))}
            </div>
        </div>
    )
}

export default TeamSection 