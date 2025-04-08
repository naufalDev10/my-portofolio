import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const AppShell = ({ children } = props) => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default AppShell