import React from 'react';
import "./blue.css"
import game from "./game.png"
import pad from "./pad.png"

export const Blue = ()=>{
    return(
        <div className='blue'>
            <div className='Cover'>
                <div className='text'>
                   <text> Playstation4 controller </text>
                   <text>(Dualshock 4 Gamepad)</text>
                   <text className='price'>₦9,890</text>
                   <strike>₦11,990</strike>
                   <a href=''>Add to Cart</a>
                </div>
                <div className='image'><img src={game} alt="image layout" /></div>
            </div>
            <div className='Cover'>
                <div className='text'>
                   <text> Playstation4 controller </text>
                   <text>(Dualshock 4 Gamepad)</text>
                   <text className='price'>₦9,890</text>
                   <strike>₦11,990</strike>
                   <a href=''>Add to Cart</a>
                </div>
                <div className='image'><img src={pad} alt="image layout" /></div>
            </div>
        </div>
    )
}