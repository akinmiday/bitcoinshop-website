import React from "react";
import reviewCard from "../assets/review-card.png"

export default function Reviews() {
    return (
        <div>
            <h1>What Our Clients<br />Say About Us</h1>
            <div>
                <img src={reviewCard} />
            </div>
        </div>
    )
}