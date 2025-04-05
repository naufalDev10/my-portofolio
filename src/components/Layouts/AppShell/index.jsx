import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

export default function AppShell({ children } = props) {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
} 