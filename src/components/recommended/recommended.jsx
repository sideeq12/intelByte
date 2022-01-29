import React from 'react';
import { Database } from './recomend';
import "./recommended.css"

console.log(Database)

export const Recommended = ()=>{
    return(
        <div className='recommended'>
            <div className='bar'>
                Recommeded
            </div>
            <div className='cartList'>
              {Database.map((data)=> <div className='cart'>
                    <img src={data.image} alt='recommeded product image'/>
                    <div className='desc'>
                        <label>{data.desc}</label>
                        <text>{data.price}</text>
                        <strike>{data.prev}</strike>
                        <a href=''>Add to Cart</a>
                    </div>
                </div>)}
            </div>
        </div>
    )
}