import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Rates from "../pages/rates";


export default function Layout() {
    return (<>
        <Header />
        <main>
            <Outlet />
            <Rates />
        </main>
        <Footer />
    </>)
}