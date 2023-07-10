import React from "react";
import logoImg from "../assets/bitcoinshop-logo.png"


export default function Header() {
    return (<div className="header" >
        <div className="right-side-header" ><img src={logoImg} />
            <h4>Bitcoin<span className="shop-logo" >Shop</span></h4>
        </div>
        <div className="middle-section-header" >
            <span>Home</span>
            <span>Contact us</span>
            <span>About us</span>
            <span>FAQs</span>
            <span>Terms of Service</span>
        </div>


    </div>)
}