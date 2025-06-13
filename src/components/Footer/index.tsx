import Logo from "../Logo"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="flex flex-col items-center gap-2 bg-amber-800 p-2 ">
            <Logo/>
            <div className=" flex flex-col items-center text-black font-asheader">
                <Link href={'/'}><h3 className="text-2xl">Absolue Shipshow</h3></Link>
                <Link href={'/crew'}><h3 className="text-2xl">The crew</h3></Link>
            </div>
            <p>&copy; Absolute Shipshow 2025</p>
        </footer>
    )
}

export default Footer