import React from "react";
import logoImg from "../assets/bitcoinshop-logo.png"


export default function Header() {
    return (<div>
        <div><img src={logoImg} />
            <h3>Bitcoin <span>Shop</span></h3>
        </div>


    </div>)
}