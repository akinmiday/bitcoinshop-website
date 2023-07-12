import React from "react";
import instagramIcon from "../assets/instagram-ic.png"
import facebookIcon from "../assets/facebook-ic.png"
import twitterIcon from "../assets/twitter-ic.png"
import youtubeIcon from "../assets/youtube-ic.png"
import logoImg from "../assets/logo-large.png"

export default function ContactSection() {
    return (
        <div className="contact-section-area">
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
            <div className="contacts-area" >
                <div >
                    <h3>Contact</h3>
                    <h4 ><a href="+2348124577931">+2348124577931</a></h4>
                </div>

                <div>
                    <h3>Email Address</h3>
                    <h4  ><a href="mailto: info@bitcoinshop.tech ">info@bitcoinshop.tech</a></h4>
                </div>

                <div>
                    <h3>Address</h3>
                    <h4>Area 5 Preboyes Complex Bodija,<br /> Ibadan Oyo.</h4>
                </div>
            </div>

            <div className="contacts-area nav">
                <div><h3>Home</h3></div>
                <h4>Conatct Us</h4>
                <h4>About Us</h4>
                <h4>FAQs</h4>
                <h4>Terms of Service</h4>
            </div>

        </div>

    )
}