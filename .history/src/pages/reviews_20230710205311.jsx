import React from "react";
import reviewCard from "../assets/review-card.png"
import toRightIcon from "../assets/to-right-carousel.png"
import toLeftIcon from "../assets/to-left-carousel.png"
import profileIcon from "../assets/profile-icon.png"

export default function Reviews() {
    return (
        <div className="review-section" >
            <h1>What Our Clients<br />Say About Us</h1>

            <div className="carousel-area" >
                <div>
                    <img src={toLeftIcon} />
                </div>
                <div className="review-card-area" >
                    <img className="review-card" src={reviewCard} />
                    <img className="review-image" src={profileIcon} />
                    <h2>Bayo Midey</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div>
                    <img src={toRightIcon} />
                </div>
            </div>
            <div>
                <h1>13.000+</h1>
                <p>Successful trades</p>
            </div>

        </div>
    )
}