import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Main() {
    return (
        <>
            <Header />
            <div className="mt-20">
            <Outlet />
            </div>
            <Footer />
        </>
    )
}