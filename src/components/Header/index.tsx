import Navigation from "../Navigation"
import Logo from "../Logo"

const Header = () => {
    return (
        <div className="w-screen border-black-100 border bg-black opacity-70 md:w">
            <header className=" mx-4 my-4 flex justify-between items-center h-auto gap-4 md:mx-20 md:flex-row  md:h-24">
                <Logo/>
                <Navigation/>
            </header>
        </div>
    )
}

export default Header