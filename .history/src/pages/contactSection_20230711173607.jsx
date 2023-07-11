import React from "react";
import instagramIcon from "../assets/instagram-ic.png"
import facebookIcon from "../assets/facebook-ic.png"
import twitterIcon from "../assets/twitter-ic.png"
import youtubeIcon from "../assets/youtube-ic.png"
import logoImg from "../assets/logo-large.png"

export default function ContactSection() {
    return (
        <div>
            <div className="social-contact-area" >
                <img src={logoImg} />
                <div>
                    <h1>Bitcoin<span className="shop-logo" >Shop</span></h1>
                    <div className="social-icon-container" >
                        <img src={instagramIcon} />
                        <img src={facebookIcon} />
                        <img src={twitterIcon} />
                        <img src={youtubeIcon} />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h3>Contact</h3>
                    <h4>+2348124577931</h4>
                </div>

                <div>
                    <h3>Address</h3>
                    <h4>info@bitcoinshop.tech</h4>
                </div>

                <div>
                    <h3>Contact</h3>
                    <h4>+2348124577931</h4>
                </div>
            </div>
            <div>
                <h3>Contact</h3>
                <h4>+2348124577931</h4>
            </div>
        </div>

    )
}