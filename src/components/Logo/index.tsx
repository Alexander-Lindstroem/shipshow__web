import Link from "next/link"
import Image from "next/image"

const Logo = () => {
    return (
        <Link href='/'>
            <Image priority={true} src='/as_logo.png' alt="Logo" width={150} height={150} style={{width: 'auto' , height: 'auto'}}/>
        </Link>
    )
}

export default Logo