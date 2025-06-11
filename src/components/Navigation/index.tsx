import Image from "next/image"
import Link from "next/link"

const Navigation = () => {
    return (
        <Link href='/crew' className="flex items-center gap-1">
            <Image src='/pirate-ship-icon.png' alt="pirate-ship-icon" width={100} height={100} style={{width: '25px' , height: 'auto'}}/>
            <h3 className='text-white'>The crew</h3>
        </Link>
    )
}

export default Navigation