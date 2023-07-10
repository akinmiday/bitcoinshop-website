import React from "react";
import logoImg from "../assets/bitcoinshop-logo.png"


export default function Header() {
    return (<div className="header" >
        <div className="right-side-header" ><img src={logoImg} />
            <h4>Bitcoin<span className="shop-logo" >Shop</span></h4>
        </div>
        <div className="middle-section-header" >
            <div>Home</div>
            <div>Contact us</div>
            <div>About us</div>
            <div>FAQs</div>
            <div>Terms of Service</div>
        </div>


    </div>)
}