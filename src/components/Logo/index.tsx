import Link from "next/link"
import Image from "next/image"

const Logo = () => {
    return (
        <Link href='/'>
            <Image priority={true} src='/shipshow_logo.png' alt="Logo" width={100} height={100} className="h-auto w-auto drop-shadow-[-3px_3px_rgba(0,0,0,0.50)]"/>
        </Link>
    )
}

export default Logo