import React from "react";
import profileIcon from "../assets/profile-icon.png"
import debitCardIcon from "../assets/debit-card-icon.png"
import bitcoinIcon from "../assets/bitcoin-icon.png"

export default function TradeSection() {
    return (
        <div className="trade-section">
            <div className="left-trade-section" >
                <h1>Trade Conveniently</h1>
                <p>Our platform allows you to trade your Cryptocurrency in the comfort of your home
                    easy, fast, reliable and hassle free in 3 easy steps
                </p>
            </div>
            <div className="trade-link-section" >
                <div>
                    <img src={profileIcon} />
                    <div>
                        <h6>Create Your Account</h6>
                        <p>
                            lorem ipsum
                        </p>
                    </div>
                </div>

                <div>
                    <img src={debitCardIcon} />
                    <div>
                        <h6>Connect Bank Account</h6>
                        <p>
                            lorem lorem ipsum
                        </p>
                    </div>
                </div>

                <div>
                    <img src={bitcoinIcon} />
                    <div>
                        <h6>Trade Conveniently</h6>
                        <p>
                            lorem lorem ipsum
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}