import React from "react";
import logoImg from "../assets/bitcoinshop-logo.png"
import lightIcon from "../assets/Light-icon.png"


export default function Header() {
    return (<div className="header" >
        <div className="left-side-header" ><img src={logoImg} />
            <h4>Bitcoin<span className="shop-logo" >Shop</span></h4>
        </div>
        <div className="middle-section-header" >
            <h4>Home</h4>
            <h4>Contact us</h4>
            <h4>About us</h4>
            <h4>FAQs</h4>
            <h4>Terms of Service</h4>
        </div>
        <div className="right-side-header" >
            <img src={lightIcon} />
            <button>Trade now</button>
        </div>


    </div>)
}