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

const ResponsiveNavbar = (props) => {
    const { navIsOpen } = props
    return (
        <nav className={`fixed left-0 flex flex-col mt-14 bg-background px-[7%] w-full ${navIsOpen ? "max-h-[400px]" : "max-h-0"}  shadow-md transition-max-height duration-500 overflow-y-hidden z-50
        md:hidden`}>
            {
                navMenus.map(navMenu => (
                    <NavLink to={navMenu.url}
                        className="block my-2 text-white text-lg after:content-[''] after:block after:pb-[1px] after:border-b-[2px] after:border-primaryGreen after:scale-x-0  hover:after:scale-x-4 after:origin-left after:transition-transform after:duration-500">
                        {navMenu.menu}
                    </NavLink>
                ))
            }
        </nav>
    )
}

export default ResponsiveNavbar