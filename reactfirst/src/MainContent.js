import React from "react"
import background from './images/background.jpg';
import './MainContent.css'

function MainContent() {
    return (
        <div>
            <div className="content">
                <h1>
                    Shop Now!
                </h1>
                <p>
                    New Arrivals!
                </p>
            </div>
            <img src={background} alt="bg" className="background" />

        </div>
    )
}

export default MainContent