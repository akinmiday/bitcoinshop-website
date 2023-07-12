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
                <button>Get started</button>
            </div>
            <div className="trade-link-section" >
                <div>
                    <img src={profileIcon} />
                    <div>
                        <h4>Create Your Account</h4>
                        <p>
                            lorem ipsum
                        </p>
                    </div>
                </div>

                <div>
                    <img src={debitCardIcon} />
                    <div>
                        <h4>Connect Bank Account</h4>
                        <p>
                            lorem lorem ipsum
                        </p>
                    </div>
                </div>

                <div>
                    <img src={bitcoinIcon} />
                    <div>
                        <h4>Trade Conveniently</h4>
                        <p>
                            lorem lorem ipsum
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}