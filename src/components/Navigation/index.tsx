import Image from "next/image"
import Link from "next/link"

const Navigation = () => {
    return (
        <Link href='/crew' className="flex items-center gap-4">
            <Image src='/pirate-ship-icon.png' alt="pirate-ship-icon" width={100} height={100} className="w-12 md:w-16 h-auto drop-shadow-[-3px_3px_rgba(0,0,0,0.50)]"/>
            <h3 className='text-white font-asheader text-2xl md:text-4xl drop-shadow-[-3px_3px_rgba(0,0,0,0.50)]'>The Crew</h3>
        </Link>
    )
}

export default Navigation