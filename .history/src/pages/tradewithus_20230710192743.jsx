import React from "react";
import securedIcon from "../assets/secured.png"
import fastPaymentIcon from "../assets/fast-payment.png"
import reliableIcon from "../assets/reliable.png"

export default function TradeWithUs() {
    return (
        <div className="trade-with-us" >
            <div className="trade-with-us-heading" >
                <h1>Why you should <br /> trade with us</h1>
                <p>Highlighted below are our amazing features and <br /> offers
                    to give you a convenient trading experience.
                </p>
            </div>
            <div className="trade-with-us-icon-section" >
                <div>
                    <img src={securedIcon} />
                    <h2>Tested & Trusted</h2>
                    <p>Bitcoin Shop is safe and reliable for all crypto trades. To ensure end to end encryption we utilize whatsapp
                        so be rest assured your transactions and personal details are safe and cannot be accessed by third parties.
                    </p>
                </div>
                <div>
                    <img src={fastPaymentIcon} />
                    <h2>Fast Payment</h2>
                    <p>With our incredibly swift payment partner, our customers get payment in 10 minutes or less</p>
                </div>
                <div>
                    <img src={reliableIcon} />
                    <h2>Reliable</h2>
                </div>
            </div>
        </div>
    )
}