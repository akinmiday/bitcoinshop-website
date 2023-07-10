import React from "react";
import btcTrend from "../assets/bitcoin-trend-Item.png"
import ethTrend from "../assets/ETH-Trend-Item.png"
import bnbTrend from "../assets/BNB-Trend-Item.png"
import bchTrend from "../assets/BCH-Trend-Item.png"
import usdtTrend from "../assets/USDT-Trend-Item.png"

export default function Rates() {
    // return (
    //     <div className="rates-section" >
    //         <h1>We Offer Superb Rates</h1>
    //         <div >
    //             <div><img src={btcTrend} /></div>
    //             <div><img src={ethTrend} /></div>
    //             <div><img src={bnbTrend} /></div>
    //             <div><img src={bchTrend} /></div>
    //             <div><img src={usdtTrend} /></div>
    //         </div>
    //     </div>
    // )

    return (
        <div className="rates-section">
            <h1>We Offer Superb Rates</h1>
            <div className="top-row">
                <div><img src={btcTrend} /></div>
                <div><img src={ethTrend} /></div>
                <div><img src={bnbTrend} /></div>
            </div>
            <div className="bottom-row">
                <div><img src={bchTrend} /></div>
                <div><img src={usdtTrend} /></div>
            </div>
        </div>
    );
}