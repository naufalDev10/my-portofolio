import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../../Elements/Button";
import ResponsiveNavbar from "../ResponsiveNavbar";
import { BsList, BsXLg } from "react-icons/bs";


const navMenus = [
    {
        menu: "Home",
        url: "/"
    },
    {
        menu: "About",
        url: "/about"
    },
    {
        menu: "Skils",
        url: "/skils"
    },
    {
        menu: "Projects",
        url: "/projects"
    },
    {
        menu: "Services",
        url: "/services"
    },
    {
        menu: "Contact",
        url: "/contact"
    },
]

export default function Navbar() {
    const [navIsOpen, setNavIsOpen] = useState(false)

    const handleOpenNavbar = () => {
        setNavIsOpen(prev => !prev)
    }

    return (
        <header>
            <nav className="flex justify-center items-center fixed top-0 left-0 w-full bg-background z-50">
                <div className="flex justify-between items-center w-full max-w-[1440px] py-5 px-[7%]">
                    <div className="">
                        <Link to="" className="text-xl font-semibold text-primaryGreen">Naufal.</Link>
                    </div>
                    <div className="hidden md:flex md:justify-center md:items-center md:gap-8">
                        {
                            navMenus.map(navMenu => (
                                <NavLink to={navMenu.url} className="text-white after:content-[''] after:block after:pb-[1px] after:border-b-[2px] after:border-primaryGreen after:scale-x-0  hover:after:scale-x-45 after:transition-transform after:duration-500">
                                    {navMenu.menu}
                                </NavLink>
                            ))
                        }
                    </div>
                    <div className="block md:hidden">
                        {
                            navIsOpen ? <Button className="text-white text-xl cursor-pointer hover:text-primaryGreen duration-500" onClick={handleOpenNavbar}>
                                <BsXLg />
                            </Button> : <Button className="text-white text-xl cursor-pointer hover:text-primaryGreen duration-500" onClick={handleOpenNavbar}>
                                <BsList />
                            </Button>
                        }
                    </div>
                </div>
            </nav>
            <ResponsiveNavbar navIsOpen={navIsOpen} />
        </header>
    )
}       