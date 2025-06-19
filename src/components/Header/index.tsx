import Navigation from "../Navigation"
import Logo from "../Logo"
import Image from "next/image"

const Header = () => {
    return (
        <div className="w-screen bg-no-repeat z-50 top-0 absolute">
            <div className="absolute w-[120%] h-full z-60 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <Image
                        src="/pirate-plank.png"
                        alt="Footer Plank"
                        fill
                        priority
                        className="object-fill shadow-orange-950 shadow-md"
                    />
            </div>
            <header className="relative z-70 mx-4 my-4 flex justify-between items-center h-auto gap-4 md:mx-20 md:flex-row md:h-24">
                <Logo/>
                <Navigation/>
            </header>
            
        </div>
    )
}

export default Header