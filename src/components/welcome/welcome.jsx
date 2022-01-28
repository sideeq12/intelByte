import React from "react";
import "./welcome.css"
import shoe from "./testh.png"

 export const Welcome = ()=>{
    return(
        <div className="welcome">
            <div className="side-text">
                <p>30% off for all items</p>
                <h2>Get All Original Products</h2>
                <button>shop now</button>
            </div>
            <img src={shoe} alt="IntelByte welcome image" />
        </div>
    )
}