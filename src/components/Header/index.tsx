import Link from "next/link"
import Image from "next/image"

const Header = () => {
    return (
        <header className="w-full z-50 top-0 h-[15%] absolute overflow-x-clip">
            <div className="absolute w-[120vw] h-full z-60 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <Image
                    src="/pirate-plank.png"
                    alt="Footer Plank"
                    fill
                    priority
                    className="object-fill shadow-orange-950 shadow-md"
                />
            </div>
            <div className="relative z-70 flex justify-between items-center mx-4 h-full">
                <Link className="h-full" href='/'>
                    <Image priority={true} src='/shipshow_logo.png' alt="Logo" width={100} height={100} className="h-full w-auto drop-shadow-[-3px_3px_rgba(0,0,0,0.50)]"/>
                </Link>
                <Link href='/crew' className="flex items-center justify-center gap-4 h-full">
                    <Image src='/pirate-ship-icon.png' alt="pirate-ship-icon" width={100} height={100} className="w-12 md:w-16 h-auto drop-shadow-[-3px_3px_rgba(0,0,0,0.50)]"/>
                    <h3 className='text-white font-asheader text-2xl md:text-4xl drop-shadow-[-3px_3px_rgba(0,0,0,0.50)]'>The Crew</h3>
                </Link>
            </div>
        </header>
    )
}

export default Header