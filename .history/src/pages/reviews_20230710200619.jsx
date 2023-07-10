import React from "react";
import reviewCard from "../assets/review-card.png"
import toRightIcon from "../assets/to-right-carousel.png"
import toLeftIcon from "../assets/to-left-carousel.png"

export default function Reviews() {
    return (
        <div>
            <h1>What Our Clients<br />Say About Us</h1>

            <div>
                <div>
                    <img />
                </div>
                <div>
                    <img src={reviewCard} />
                </div>
                <div>
                    <img />
                </div>
            </div>

        </div>
    )
}