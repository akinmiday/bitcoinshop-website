import React from "react";
import logoImg from "../assets/bitcoinshop-logo.png"


export default function Header() {
    return (<div className="header" >
        <div className="right-side-header" ><img src={logoImg} />
            <h2>Bitcoin<span className="shop-logo" >Shop</span></h2>
        </div>


    </div>)
}