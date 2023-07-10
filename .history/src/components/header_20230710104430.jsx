import React from "react";
import logoImg from "../assets/bitcoinshop-logo.png"


export default function Header() {
    return (<div className="header" >
        <div className="right-side-header" ><img src={logoImg} />
            <h4>Bitcoin<span className="shop-logo" >Shop</span></h4>
        </div>
        <div className="middle-section-header" >
            <h5>Home</h5>
            <h5>Contact us</h5>
            <h5>About us</h5>
            <h5>FAQs</h5>
            <h5>Terms of Service</h5>
        </div>


    </div>)
}