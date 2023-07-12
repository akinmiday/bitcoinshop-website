import React from "react";
import groupIcons from "../assets/Group-icons-title.png"
import Rates from "./rates";
import TradeSection from "./tradeSection";
import TradeWithUs from "./tradewithus";
import Reviews from "./reviews";
import ContactSection from "./contactSection";

export default function TitlePage() {
    return (<>
        <div className="title-section" >
            <div className="left-side-title" >
                <h1>Trade your Cryptocurrency</h1>
                <p>Best and reliable platform to trade over 100 cryptocurrencies for your local Fiat</p>
                <button>Get Started</button>
            </div>
            <div className="grouped-img-icons" >
                <img src={groupIcons} />
            </div>

        </div>
        <Rates />
        <TradeSection />
        <TradeWithUs />
        <Reviews />
        <ContactSection />
    </>
    )
}