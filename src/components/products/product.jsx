import React from 'react';
import "./product.css"
import TV from "./tv.jpg"

    const DB = [{
        image : TV,
        name : "White tendy Lady Sweater",
        price : "₦5,100 - ₦5,455",
        prev : "₦9,555",
        count : "3"
    }]
export const Products = ()=>{
    return(
        <div className='productList'>
        {DB.map((data)=><div className='product-cart'>
            <img src={data.image} alt='product image' />
            <div className='product_description'>
                    <label>{data.name}</label> <br/>
                    <b>{data.price}</b> <br/>
                    <strike>{data.prev}</strike> <br/>
                    <label>{data.count} items left</label>
                    <progress id="file" value="32" max="100"> 32% </progress>
                </div>
        </div>)}
        </div>
    )
}
