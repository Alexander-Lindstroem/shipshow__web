import Link from "next/link"
import Image from "next/image"

const Logo = () => {
    return (
        <Link href='/'>
            <Image priority={true} src='/pirate-logo.png' alt="Logo" width={100} height={100} style={{width: 'auto' , height: 'auto'}}/>
        </Link>
    )
}

export default Logo