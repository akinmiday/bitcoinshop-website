import React from "react";
import securedIcon from "../assets/secured.png"
import fastPaymentIcon from "../assets/fast-payment.png"

export default function TradeWithUs() {
    return (
        <div className="trade-with-us" >
            <div className="trade-with-us-heading" >
                <h1>Why you should <br /> trade with us</h1>
                <p>Highlighted below are our amazing features and <br /> offers
                    to give you a convenient trading experience.
                </p>
            </div>
            <div>
                <div>
                    <img src={securedIcon} />
                </div>
                <div>
                    <img src={fastPaymentIcon} />
                </div>
                <div></div>
            </div>
        </div>
    )
}