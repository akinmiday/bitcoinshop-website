import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import TitlePage from "../pages/title";
import Rates from "../pages/rates";

export default function Layout() {
    return (<>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>)
}