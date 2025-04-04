import { NavLink } from "react-router-dom";

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

export default function ResponsiveNavbar(props) {
    const { navIsOpen } = props
    return (
        <nav className={`flex flex-col mt-20 px-[7%] w-full ${navIsOpen ? "max-h-[400px]" : "max-h-0"} bg-background shadow-md transition-max-height duration-500 overflow-y-hidden
        md:hidden`}>
            {
                navMenus.map(navMenu => (
                    <NavLink to={navMenu.url}
                        className="block my-2 text-white text-lg">
                        {navMenu.menu}
                    </NavLink>
                ))
            }
        </nav>
    )
}